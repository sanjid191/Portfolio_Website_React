import { useState } from 'react'
import TextType from './TextType'

const phrases = [
  'Sculpting memorable digital interfaces with strategy, empathy, and bold aesthetics.',
  'Designing expressive web experiences for ambitious brands.',
  'Engineering pixel-perfect moments that move people to action.'
]

function Hero() {
  const [activeHeadline, setActiveHeadline] = useState(phrases[0])

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
        <h1 className="hero__headline" data-replicate={activeHeadline}>
          <TextType
            text={phrases}
            as="span"
            typingSpeed={44}
            deletingSpeed={26}
            pauseDuration={2400}
            className="hero__text-type"
            cursorCharacter="_"
            cursorClassName="hero__cursor"
            textColors={['#f4f1ff', '#eae4ff', '#fdfbff']}
            onUpdate={(next) => setActiveHeadline(next === undefined ? phrases[0] : next)}
            onSentenceComplete={(text) => setActiveHeadline(text)}
          />
        </h1>
        <p className="hero__description">
          Sanjid Ahmmed
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
