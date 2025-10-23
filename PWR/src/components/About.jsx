function About() {
  return (
    <section id="about" className="section section--alt">
      <div className="section__chip">About</div>
      <div className="section__layout">
        <div className="about__intro">
          <h2 className="section__title">Blending thoughtful strategy with cinematic visuals.</h2>
          <p className="section__description">
            I am a front-end engineer focused on building expressive, high-performing interfaces that feel effortless to use. My process combines curiosity, rapid experimentation, and pixel-level craftsmanship.
          </p>
        </div>
        <div className="about__highlights">
          <article className="card card--accent">
            <h3>Design DNA</h3>
            <p>
              Rooted in brand aesthetics and storytelling, with a passion for typography, immersive color palettes, and purposeful motion.
            </p>
          </article>
          <article className="card">
            <h3>Engineering discipline</h3>
            <p>
              Building modular systems, accessible flows, and scalable React architectures that elevate the design intent without compromise.
            </p>
          </article>
          <article className="card">
            <h3>Human connection</h3>
            <p>
              Translating abstract ideas into experiences that resonate and drive action, guided by empathy and collaborative spirit.
            </p>
          </article>
        </div>
      </div>
    </section>
  )
}

export default About
