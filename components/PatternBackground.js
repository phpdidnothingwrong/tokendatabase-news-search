export default ({ children }) => (
  <div>
    <div className="background-pattern">
      <div className="pattern-overlay">{children}</div>
    </div>
    <style jsx>{`
      .background-pattern {
        background-image: url("/pattern1.svg");
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
      }
      .pattern-overlay {
        background-image: linear-gradient(
          180deg,
          rgba(255, 255, 255, 0.6) 0%,
          rgba(255, 255, 255, 0.97) 55%
        );
        height: 100%;
      }
    `}</style>
  </div>
);
