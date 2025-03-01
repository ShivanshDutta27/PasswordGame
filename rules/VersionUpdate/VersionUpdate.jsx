import { useEffect, useRef } from "react";
import Rule from "../Rule";

export default class RuleVersionUpdate extends Rule {
  constructor() {
    super("Version Update Required: Update the version number in your password.");
    this.renderItem = ({ pswd, setPswd, triggerAnimation, correct }) => {
      return (
        <VersionUpdateEvent
          pswd={pswd}
          setPswd={setPswd}
          triggerAnimation={triggerAnimation}
          correct={correct}
        />
      );
    };
  }

  check(txt) {
    // Check that the correct, updated version is present.
    return /v2\.0\.0/.test(txt);
  }
}

function VersionUpdateEvent({ pswd, setPswd, triggerAnimation, correct }) {
  const solved = useRef(false);
  const timerRef = useRef(null);

  // Simulate outdated version injection.
  useEffect(() => {
    timerRef.current = setTimeout(() => {
      // Prepend an outdated version if not already there.
      if (!/v1\.0\.0/.test(pswd)) {
        setPswd((prev) => "v1.0.0 " + prev);
      }
    }, 1000);
    return () => clearTimeout(timerRef.current);
  }, [pswd, setPswd]);

  // Stop event when updated.
  useEffect(() => {
    if (correct && !solved.current) {
      solved.current = true;
      clearTimeout(timerRef.current);
      triggerAnimation(false);
    }
  }, [correct, triggerAnimation]);

  return (
    <div style={{ color: "blue", fontWeight: "bold", textAlign: "center" }}>
      Your software is outdated! Please update to "v2.0.0".
    </div>
  );
}
