import newArticles from "./NewArticles"
import miniArticles from "./MiniArticles"

function Main() {

    const newArticleEl = newArticles.map((article, idx) => {
        return (
            <div key={idx}>
                <h3>{article.header}</h3>
                <p>{article.desc}</p>
                <hr/>
            </div>
        )
    })

    const miniArticleEl = miniArticles.map(article => {
        return (
            <div className="mini-article" key={article.num}>
                <img alt='' src={article.img} />
                <div>
                    <p className="num">{article.num}</p>
                    <h3>{article.header}</h3>
                    <p className="desc">{article.desc}</p>
                </div>
            </div>
        )
    })

    return (
        <div className="main">
            <div className="grid">
                <div className='cover-img'></div>
                <h1>The Bright Future of Web 3.0?</h1>
                <div className="section">
                    <p>We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?</p>
                    <button>Read more</button>
                </div>
                <div className="new-section">
                    <h2>New</h2>
                    {newArticleEl}
                </div>
            </div>
            <div className="mini-article-section">
                {miniArticleEl}
            </div>
        </div>
    )
}

export default Main