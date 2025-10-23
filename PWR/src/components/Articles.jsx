const articles = [
  {
    title: 'Designing for flow: Orchestrating motion with intent',
    excerpt: 'A breakdown of my motion direction process, from storyboarding to easing curves and layered depth.',
    category: 'Design systems',
    readTime: '6 min read'
  },
  {
    title: 'Front-end rituals for faster, better launches',
    excerpt: 'Exploring collaboration frameworks that align designers, developers, and stakeholders around a shared vision.',
    category: 'Process',
    readTime: '8 min read'
  },
  {
    title: 'Color grading the web: building cinematic palettes',
    excerpt: 'How to craft immersive palettes using luminance balance, atmospheric overlays, and accessibility rules.',
    category: 'Visual direction',
    readTime: '5 min read'
  }
]

function Articles() {
  return (
    <section id="articles" className="section section--alt">
      <div className="section__chip">Articles</div>
      <h2 className="section__title">Writing that distills the craft.</h2>
      <p className="section__description">
        Essays and playbooks exploring product design, creative technology, and the habits that keep teams in flow. Dynamic publishing is on the roadmap.
      </p>

      <div className="articles__grid">
        {articles.map((article) => (
          <article key={article.title} className="article-card">
            <header className="article-card__header">
              <span className="article-card__category">{article.category}</span>
              <span className="article-card__readtime">{article.readTime}</span>
            </header>
            <h3>{article.title}</h3>
            <p>{article.excerpt}</p>
            <button type="button" className="article-card__button">Coming soon</button>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Articles
