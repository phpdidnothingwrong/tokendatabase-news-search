import moment from "moment";

/**
 * external link
 */
const goToPage = url => {
  window.open(url, "_blank");
};

export default ({ article }) => (
  <div className="article-wrapper" onClick={() => goToPage(`https://${article.url}`)}>
    <div className="article-inner media d-flex align-items-center">
      {/* <img src={article.thumbnail} className="article-img pr-4" /> */}
      <div className="article-img">&nbsp;</div>
      <div className="media-body p-4">
        <h4>{article.title}</h4>
        <small className="text-muted">
          <span>
            by {article.author.name} on {article.source.url}
          </span>
        </small>
        <p>{article.preview}</p>
        <div className="mt-3">
          <span className="text-theme-primary">
            {moment(article.time).fromNow()} ({moment(article.time).format("MMM Do YYYY")})
          </span>
        </div>
      </div>
    </div>
    <style jsx>{`
      .article-wrapper {
        min-height: 8rem;
        background: #ffffff;
        box-shadow: -15px 18px 18px 0 rgba(0, 0, 0, 0.07);
        border-radius: 5px;
        position: relative;
        top: 0;
        transition: all 0.4s;
        margin-bottom: 2rem;

        &:hover {
          top: -5px;
          cursor: pointer;
        }
      }
      .article-img {
        height: 250px;
        width: 350px;
        background: url(${article.thumbnail});
        background-repeat: no-repeat;
        background-size: cover;
      }
    `}</style>
  </div>
);
