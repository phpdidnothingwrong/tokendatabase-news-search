export default props => (
  <>
    <button {...props} className={`${props.className} primary-button`}>
      {props.children}
    </button>
    <style jsx>{`
      .primary-button {
        background-image: linear-gradient(0deg, #234ad1 0%, #5266e3 100%);
        border-radius: 5px;
        padding: 16px 15px;
        color: #FFF;
        outline: 0;

        :focus {
          outline: 0;
        }
      }
    `}</style>
  </>
);
