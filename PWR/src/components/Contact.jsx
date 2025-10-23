const contacts = [
  {
    label: 'Email',
    value: 'hello@sanjid.design',
    href: 'mailto:hello@sanjid.design',
    hint: 'For collaborations, speaking, or mentorship invitations.',
    icon: '@'
  },
  {
    label: 'Calendly',
    value: 'Book a 20-min sync',
    href: '#',
    hint: 'Schedule a quick discovery call to explore your project.',
    icon: '+'
  },
  {
    label: 'Location',
    value: 'Dhaka, Bangladesh · Remote-friendly',
    href: null,
    hint: 'Working with teams across Asia, Europe, and North America.',
    icon: 'L'
  }
]

function Contact() {
  return (
    <section id="contact" className="section">
      <div className="section__chip">Contact</div>
      <div className="contact__wrapper">
        <div className="contact__intro">
          <h2 className="section__title">Let us build the next standout experience together.</h2>
          <p className="section__description">
            Share your idea, pitch deck, or design challenge. I will respond within two business days with next steps.
          </p>
        </div>
        <form className="contact__form">
          <div className="contact__form-row">
            <label>
              Name
              <input type="text" name="name" placeholder="Your name" autoComplete="name" />
            </label>
            <label>
              Email
              <input type="email" name="email" placeholder="you@example.com" autoComplete="email" />
            </label>
          </div>
          <label>
            Project snapshot
            <textarea name="project" placeholder="Tell me about the vision and timeline." rows="4" />
          </label>
          <button type="submit">Send message</button>
        </form>
      </div>
      <div className="contact__links">
        {contacts.map((contact) => (
          <article key={contact.label} className="contact-card">
            <span className="glass-icon contact-card__icon" aria-hidden="true">{contact.icon}</span>
            <h3>{contact.label}</h3>
            {contact.href ? (
              <a href={contact.href} className="contact-card__value">
                {contact.value}
              </a>
            ) : (
              <p className="contact-card__value">{contact.value}</p>
            )}
            <p className="contact-card__hint">{contact.hint}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Contact
