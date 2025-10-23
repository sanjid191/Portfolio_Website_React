function Hero() {
  const headline = 'Sculpting memorable digital interfaces with strategy, empathy, and bold aesthetics.'

  return (
    <section id="home" className="hero">
      <div className="hero__shimmer" />
      <div className="hero__light hero__light--left" aria-hidden="true" />
      <div className="hero__light hero__light--right" aria-hidden="true" />
      <div className="hero__rays" aria-hidden="true">
        <span className="hero__ray hero__ray--one" />
        <span className="hero__ray hero__ray--two" />
      </div>
      <div className="hero__content">
        <p className="hero__eyebrow">Portfolio 2025</p>
        <h1 className="hero__headline" data-replicate={headline}>
          {headline}
        </h1>
        <p className="hero__description">
          I am a front-end engineer blending modern engineering practices with artistic direction. Every interaction is orchestrated to feel effortless, expressive, and unusually personal.
        </p>
        <div className="hero__cta-group">
          <a href="#projects" className="hero__cta hero__cta--primary">View Highlights</a>
          <a href="#contact" className="hero__cta hero__cta--ghost">Download Resume</a>
        </div>
        <dl className="hero__stats">
          <div>
            <dt>Projects shipped</dt>
            <dd><span className="glass-icon glass-icon--stat">18+</span></dd>
          </div>
          <div>
            <dt>Years creating</dt>
            <dd><span className="glass-icon glass-icon--stat">04</span></dd>
          </div>
          <div>
            <dt>Happy collaborators</dt>
            <dd><span className="glass-icon glass-icon--stat">22</span></dd>
          </div>
        </dl>
      </div>
    </section>
  )
}

export default Hero
