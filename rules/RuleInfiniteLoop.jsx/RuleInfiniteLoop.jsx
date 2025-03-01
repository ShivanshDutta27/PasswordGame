import { useEffect, useRef } from "react";
import Rule from "../Rule";

export default class RuleInfiniteLoop extends Rule {
  constructor() {
    super("Infinite loop detected! Add 'break;' to exit the loop.");
    this.renderItem = ({ pswd, setPswd, triggerAnimation, correct }) => {
      return (
        <InfiniteLoopEvent
          pswd={pswd}
          setPswd={setPswd}
          triggerAnimation={triggerAnimation}
          correct={correct}
        />
      );
    };
  }

  check(txt) {
    // Check that the user has added the word "break;" somewhere in their password.
    return /break;/.test(txt);
  }
}

function InfiniteLoopEvent({ pswd, setPswd, triggerAnimation, correct }) {
  const timerRef = useRef(null);

  useEffect(() => {
    // If not correct, start the interval.
    if (!correct) {
      timerRef.current = setInterval(() => {
        setPswd((prev) => prev + "⏳");
      }, 1000);
    } else {
      // When correct becomes true, clear the interval and trigger the animation.
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
      if (typeof triggerAnimation === "function") {
        triggerAnimation(false);
      }
    }
    // Cleanup the interval when the effect re-runs or on unmount.
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [correct, setPswd, triggerAnimation]);

  return (
    <div style={{ color: "red", fontWeight: "bold", textAlign: "center" }}>
      Infinite loop in progress! Insert "break;" to break out of it.
    </div>
  );
}
