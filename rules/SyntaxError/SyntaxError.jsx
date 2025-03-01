import Rule from "../Rule";

export default class RuleSyntaxError extends Rule {
  constructor() {
    super("Syntax Error: It seems a semicolon is missing. Fix the error to proceed.");
    this.renderItem = ({ correct }) => {
      return !correct && <SyntaxErrorEvent />;
    };
  }

  // Check that the text includes at least one semicolon.
  check(txt) {
    return /;/.test(txt);
  }
}

function SyntaxErrorEvent() {
  return (
    <>
      {/* <div className="syntax-error-popup">
        Oops! A syntax error was detected. Did you forget the semicolon?
      </div>
      <style jsx>{`
        @keyframes popUp {
          0% {
            opacity: 0;
            transform: translate(-50%, -20px) scale(0.5);
          }
          100% {
            opacity: 1;
            transform: translate(-50%, 0) scale(1);
          }
        }
        .syntax-error-popup {
          animation: popUp 0.5s ease-out forwards;
          position: fixed;
          bottom: 20px;
          left: 50%;
          background: rgba(255, 165, 0, 0.9);
          color: #fff;
          padding: 10px 20px;
          border-radius: 5px;
          font-weight: bold;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
          z-index: 1000;
        }
      `}</style> */}
    </>
  );
}
