import { useState } from 'react';

const EN = {
  formTitle: 'Project request form',
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
  budget: "Budget estimé",
  budgetPlaceholder: "Sélectionnez une fourchette",
  deadline: 'Date limite',
  services: 'Services souhaités',
  description: 'Description du projet',
  descriptionPlaceholder: 'Décrivez votre projet, ses objectifs et vos besoins spécifiques...',
  submit: 'Envoyer la demande',
  sending: 'Envoi en cours...',
  successTitle: 'Merci !',
  successMsg: 'Votre demande a bien été envoyée. Je vous répondrai sous 48 heures.',
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
    'Other',
  ],
  fr: [
    'Bioinformatique',
    'Analyse de données',
    "Automatisation IA et développement de workflows",
    'Agents IA sur mesure',
    'Ingénierie des données',
    'Applications web & visualisation de données',
    'Autre',
  ],
};

const BUDGET_OPTIONS = ['', '<2k', '2-5k', '5-10k', '10-20k', '20k+'];

const WEB3FORMS_KEY = import.meta.env.PUBLIC_WEB3FORMS_KEY;

export default function ProjectRequestForm({ lang = 'en' }) {
  const t = lang === 'fr' ? FR : EN;
  const services = SERVICES[lang] || SERVICES.en;

  const [budget, setBudget] = useState('');
  const [deadline, setDeadline] = useState('');
  const [selectedServices, setSelectedServices] = useState([]);
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('idle');
  const [errors, setErrors] = useState({});
  const [serverMessage, setServerMessage] = useState('');

  function toggleService(service) {
    setSelectedServices((prev) =>
      prev.includes(service)
        ? prev.filter((s) => s !== service)
        : [...prev, service]
    );
  }

  function validate() {
    const next = {};
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

  async function handleSubmit(e) {
    e.preventDefault();
    if (!validate()) return;

    setStatus('submitting');
    setServerMessage('');

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: t.subject,
          budget,
          deadline,
          services: selectedServices.join(', '),
          description: description.trim(),
        }),
      });

      const data = await res.json();

      if (data.success) {
        setStatus('success');
      } else {
        setStatus('error');
        setServerMessage(data.message || t.errorSubmit);
      }
    } catch {
      setStatus('error');
      setServerMessage(t.errorNetwork);
    }
  }

  if (status === 'success') {
    return (
      <div className="form-success">
        <h2>{t.successTitle}</h2>
        <p>{t.successMsg}</p>
      </div>
    );
  }

  return (
    <form className="project-form" onSubmit={handleSubmit} noValidate>

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
