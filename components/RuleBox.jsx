import React from 'react';
import { motion } from "framer-motion";
import "./RuleBox.css";

function RuleBox({ heading, msg, correct, renderItem, propsToChild }) {
  // Determine if this rule is an event rule by checking if renderItem exists.
  const isEventRule = typeof renderItem === "function";

  // Apply a bounce (or pulse) animation once every 5 seconds when unsolved.
  const animationProps = !correct
    ? isEventRule
      ? {
          animate: { scale: [1, 1.1, 1] },
          transition: { duration: 1, repeat: Infinity, repeatDelay: 3, repeatType: "mirror" },
        }
      : {
          animate: { y: [0, -10, 0] },
          transition: { duration: 1, repeat: Infinity, repeatDelay: 3, repeatType: "mirror" },
        }
    : {};

  return (
    <motion.div
      className={`rulebox ${correct ? "rule-correct" : "rule-err"}`}
      {...animationProps}
    >
      <div className={`rulebox-top ${correct ? "rule-correct" : "rule-err"}`}>
        {correct ? "\u{2705}" : "\u{274C}"} {heading}
      </div>
      <div className="rulebox-desc" style={{ whiteSpace: 'pre-wrap' }}>
        {msg}
        {typeof renderItem === "function" ? renderItem(propsToChild) : null}
      </div>
    </motion.div>
  );
}

export default RuleBox;
