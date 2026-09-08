import React, { useState } from 'react';

interface FormErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
  budget?: string;
  deadline?: string;
  services?: string;
  description?: string;
}

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

const EN = {
  formTitle: 'Project request form',
  firstName: 'First name',
  firstNamePlaceholder: 'Your first name',
  lastName: 'Last name',
  lastNamePlaceholder: 'Your last name',
  company: 'Company',
  companyPlaceholder: 'Your company (optional)',
  email: 'Email',
  emailPlaceholder: 'your@email.com',
  budget: 'Budget range',
  budgetPlaceholder: 'Select a budget range',
  deadline: 'Deadline',
  services: 'Services needed',
  description: 'Project description',
  descriptionPlaceholder: 'Describe your project, goals, and any specific requirements...',
  submit: 'Submit your project request',
  sending: 'Sending...',
  successTitle: 'Thank you!',
  successMsg: "Your project request has been sent successfully. I'll get back to you within 48 hours.",
  newsletterInvite: 'While you wait, join my newsletter for insights on AI and bioinformatics →',
  newsletterLink: 'subscribe',
  errorFirstName: 'Please enter your first name.',
  errorLastName: 'Please enter your last name.',
  errorEmail: 'Please enter a valid email address.',
  errorBudget: 'Please select a budget range.',
  errorDeadline: 'Please select a deadline.',
  errorDeadlineFuture: 'Deadline must be a future date.',
  errorServices: 'Please select at least one service.',
  errorDescription: 'Please describe your project.',
  errorSubmit: 'Submission failed. Please try again.',
  errorNetwork: 'Network error. Please check your connection and try again.',
  subject: 'New project request from portfolio',
};

const FR = {
  formTitle: 'Formulaire de demande de projet',
  firstName: 'Prénom',
  firstNamePlaceholder: 'Votre prénom',
  lastName: 'Nom',
  lastNamePlaceholder: 'Votre nom',
  company: 'Société',
  companyPlaceholder: 'Votre société (optionnel)',
  email: 'Email',
  emailPlaceholder: 'vous@email.com',
  budget: 'Budget estimé',
  budgetPlaceholder: 'Sélectionnez une fourchette',
  deadline: 'Date limite',
  services: 'Services souhaités',
  description: 'Description du projet',
  descriptionPlaceholder: 'Décrivez votre projet, ses objectifs et vos besoins spécifiques...',
  submit: 'Envoyer la demande',
  sending: 'Envoi en cours...',
  successTitle: 'Merci !',
  successMsg: 'Votre demande a bien été envoyée. Je vous répondrai sous 48 heures.',
  newsletterInvite: "En attendant ma réponse, rejoignez ma newsletter pour des insights sur l'IA et la bioinfo →",
  newsletterLink: "s'inscrire",
  errorFirstName: 'Veuillez saisir votre prénom.',
  errorLastName: 'Veuillez saisir votre nom.',
  errorEmail: 'Veuillez saisir une adresse email valide.',
  errorBudget: 'Veuillez sélectionner un budget.',
  errorDeadline: 'Veuillez sélectionner une date.',
  errorDeadlineFuture: 'La date doit être dans le futur.',
  errorServices: 'Veuillez sélectionner au moins un service.',
  errorDescription: 'Veuillez décrire votre projet.',
  errorSubmit: "L'envoi a échoué. Veuillez réessayer.",
  errorNetwork: 'Erreur réseau. Vérifiez votre connexion et réessayez.',
  subject: 'Nouvelle demande de projet depuis le portfolio',
};

const SERVICES = {
  en: [
    'Bioinformatics',
    'Data analysis and modeling',
    'AI automation and workflow developments',
    'Custom AI agents',
    'Data engineering',
    'Web apps & data visualisation',
    'Strategic Audit',
    'Other',
  ],
  fr: [
    'Bioinformatique',
    'Analyse et modélisation de données',
    "Automatisation IA et développement de workflows",
    'Agents IA sur mesure',
    'Ingénierie des données',
    'Applications web & visualisation de données',
    'Audit stratégique',
    'Autre',
  ],
};

const BUDGET_OPTIONS = ['', '<2k', '2-5k', '5-10k', '10-20k', '20k+'];

const FUNNEL_BASE_URL = import.meta.env.PUBLIC_FUNNEL_URL || 'http://localhost:5104';
const PROJECT_REQUEST_ENDPOINT = FUNNEL_BASE_URL + '/api/project-request';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function getLeadId(email: string): string {
  const params = new URLSearchParams(window.location.search);
  const override = params.get('leadId');
  if (override) return override;
  return btoa(email.trim().toLowerCase());
}

export default function ProjectRequestForm({ lang = 'en' }: { lang?: string }) {
  const t = lang === 'fr' ? FR : EN;
  const services: string[] = SERVICES[lang as 'en' | 'fr'] || SERVICES.en;

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [budget, setBudget] = useState('');
  const [deadline, setDeadline] = useState('');
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState<FormStatus>('idle');
  const [errors, setErrors] = useState<FormErrors>({});
  const [serverMessage, setServerMessage] = useState('');

  function toggleService(service: string) {
    setSelectedServices((prev) =>
      prev.includes(service)
        ? prev.filter((s) => s !== service)
        : [...prev, service]
    );
  }

  function validate(): boolean {
    const next: FormErrors = {};
    if (!firstName.trim()) next.firstName = t.errorFirstName;
    if (!lastName.trim()) next.lastName = t.errorLastName;
    if (!email.trim() || !EMAIL_RE.test(email.trim())) next.email = t.errorEmail;
    if (!budget) next.budget = t.errorBudget;
    if (!deadline) next.deadline = t.errorDeadline;
    else if (new Date(deadline) <= new Date())
      next.deadline = t.errorDeadlineFuture;
    if (selectedServices.length === 0)
      next.services = t.errorServices;
    if (!description.trim())
      next.description = t.errorDescription;
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!validate()) return;

    setStatus('submitting');
    setServerMessage('');

    const leadId = getLeadId(email);

    const payload = {
      action: 'request',
      firstName: firstName.trim(),
      lastName: lastName.trim(),
      company: company.trim(),
      email: email.trim(),
      budget,
      deadline,
      services: selectedServices.join(', '),
      description: description.trim(),
      source: 'portfolio-website',
      lang,
      leadId,
    };

    try {
      const res = await fetch(PROJECT_REQUEST_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'text/plain' },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const json = await res.json();
      if (json.error) throw new Error(json.error);

      setStatus('success');
    } catch (err) {
      setStatus('error');
      setServerMessage(err.message || t.errorNetwork);
    }
  }

  if (status === 'success') {
    return (
      <div className="form-success">
        <h2>{t.successTitle}</h2>
        <p>{t.successMsg}</p>
        <p className="form-success-newsletter">
          {t.newsletterInvite}{' '}
          <a href={`/portfolio/${lang}/newsletter/`}>{t.newsletterLink}</a>
        </p>
      </div>
    );
  }

  return (
    <form className="project-form" onSubmit={handleSubmit} noValidate>

      <div className="form-row">
        <div className="form-field">
          <label htmlFor="firstName">{t.firstName}</label>
          <input
            type="text"
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder={t.firstNamePlaceholder}
            className={errors.firstName ? 'field-error' : ''}
          />
          {errors.firstName && <span className="form-error">{errors.firstName}</span>}
        </div>

        <div className="form-field">
          <label htmlFor="lastName">{t.lastName}</label>
          <input
            type="text"
            id="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder={t.lastNamePlaceholder}
            className={errors.lastName ? 'field-error' : ''}
          />
          {errors.lastName && <span className="form-error">{errors.lastName}</span>}
        </div>
      </div>

      <div className="form-field">
        <label htmlFor="company">{t.company}</label>
        <input
          type="text"
          id="company"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          placeholder={t.companyPlaceholder}
        />
      </div>

      <div className="form-field">
        <label htmlFor="email">{t.email}</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={t.emailPlaceholder}
          className={errors.email ? 'field-error' : ''}
        />
        {errors.email && <span className="form-error">{errors.email}</span>}
      </div>

      <fieldset className="form-field form-field-services">
        <legend>{t.services}</legend>
        {errors.services && <span className="form-error">{errors.services}</span>}
        <div className="checkbox-group">
          {services.map((service) => (
            <label key={service} className="checkbox-label">
              <input
                type="checkbox"
                checked={selectedServices.includes(service)}
                onChange={() => toggleService(service)}
              />
              {service}
            </label>
          ))}
        </div>
      </fieldset>

      <div className="form-field">
        <label htmlFor="description">{t.description}</label>
        <textarea
          id="description"
          rows={5}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder={t.descriptionPlaceholder}
          className={errors.description ? 'field-error' : ''}
        />
        {errors.description && <span className="form-error">{errors.description}</span>}
      </div>

      <div className="form-field">
        <label htmlFor="budget">{t.budget}</label>
        <select
          id="budget"
          value={budget}
          onChange={(e) => setBudget(e.target.value)}
          className={errors.budget ? 'field-error' : ''}
        >
          <option value="">{t.budgetPlaceholder}</option>
          {BUDGET_OPTIONS.slice(1).map((opt) => (
            <option key={opt} value={opt}>{opt}</option>
          ))}
        </select>
        {errors.budget && <span className="form-error">{errors.budget}</span>}
      </div>

      <div className="form-field">
        <label htmlFor="deadline">{t.deadline}</label>
        <input
          type="date"
          id="deadline"
          value={deadline}
          onChange={(e) => setDeadline(e.target.value)}
          className={errors.deadline ? 'field-error' : ''}
        />
        {errors.deadline && <span className="form-error">{errors.deadline}</span>}
      </div>

      <button
        type="submit"
        className="form-submit"
        disabled={status === 'submitting'}
      >
        {status === 'submitting' ? t.sending : t.submit}
      </button>

      {status === 'error' && (
        <div className="form-error-banner">
          {serverMessage}
        </div>
      )}
    </form>
  );
}