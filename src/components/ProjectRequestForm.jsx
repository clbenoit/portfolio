import { useState } from 'react';

const SERVICES = [
  'Bioinformatics',
  'Data analysis',
  'AI automation and workflow developments',
  'Data engineering',
  'Other',
];

const BUDGET_OPTIONS = ['', '<2k', '2-5k', '5-10k', '10-20k', '20k+'];

const WEB3FORMS_KEY = import.meta.env.PUBLIC_WEB3FORMS_KEY;

export default function ProjectRequestForm() {
  const [budget, setBudget] = useState('');
  const [deadline, setDeadline] = useState('');
  const [services, setServices] = useState([]);
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('idle');
  const [errors, setErrors] = useState({});
  const [serverMessage, setServerMessage] = useState('');

  function toggleService(service) {
    setServices((prev) =>
      prev.includes(service)
        ? prev.filter((s) => s !== service)
        : [...prev, service]
    );
  }

  function validate() {
    const next = {};
    if (!budget) next.budget = 'Please select a budget range.';
    if (!deadline) next.deadline = 'Please select a deadline.';
    else if (new Date(deadline) <= new Date())
      next.deadline = 'Deadline must be a future date.';
    if (services.length === 0)
      next.services = 'Please select at least one service.';
    if (!description.trim())
      next.description = 'Please describe your project.';
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
          subject: 'New project request from portfolio',
          budget,
          deadline,
          services: services.join(', '),
          description: description.trim(),
        }),
      });

      const data = await res.json();

      if (data.success) {
        setStatus('success');
      } else {
        setStatus('error');
        setServerMessage(data.message || 'Submission failed. Please try again.');
      }
    } catch {
      setStatus('error');
      setServerMessage('Network error. Please check your connection and try again.');
    }
  }

  if (status === 'success') {
    return (
      <div className="form-success">
        <h2>Thank you!</h2>
        <p>Your project request has been sent successfully. I'll get back to you within 48 hours.</p>
      </div>
    );
  }

  return (
    <form className="project-form" onSubmit={handleSubmit} noValidate>
      <div className="form-field">
        <label htmlFor="budget">Budget range</label>
        <select
          id="budget"
          value={budget}
          onChange={(e) => setBudget(e.target.value)}
          className={errors.budget ? 'field-error' : ''}
        >
          <option value="">Select a budget range</option>
          {BUDGET_OPTIONS.slice(1).map((opt) => (
            <option key={opt} value={opt}>{opt}</option>
          ))}
        </select>
        {errors.budget && <span className="form-error">{errors.budget}</span>}
      </div>

      <div className="form-field">
        <label htmlFor="deadline">Deadline</label>
        <input
          type="date"
          id="deadline"
          value={deadline}
          onChange={(e) => setDeadline(e.target.value)}
          className={errors.deadline ? 'field-error' : ''}
        />
        {errors.deadline && <span className="form-error">{errors.deadline}</span>}
      </div>

      <fieldset className="form-field form-field-services">
        <legend>Services needed</legend>
        {errors.services && <span className="form-error">{errors.services}</span>}
        <div className="checkbox-group">
          {SERVICES.map((service) => (
            <label key={service} className="checkbox-label">
              <input
                type="checkbox"
                checked={services.includes(service)}
                onChange={() => toggleService(service)}
              />
              {service}
            </label>
          ))}
        </div>
      </fieldset>

      <div className="form-field">
        <label htmlFor="description">Project description</label>
        <textarea
          id="description"
          rows={5}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Describe your project, goals, and any specific requirements..."
          className={errors.description ? 'field-error' : ''}
        />
        {errors.description && <span className="form-error">{errors.description}</span>}
      </div>

      <button
        type="submit"
        className="form-submit"
        disabled={status === 'submitting'}
      >
        {status === 'submitting' ? 'Sending...' : 'Submit your project request'}
      </button>

      {status === 'error' && (
        <div className="form-error-banner">
          {serverMessage}
        </div>
      )}
    </form>
  );
}