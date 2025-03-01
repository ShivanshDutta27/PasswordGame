import React, { useRef, useEffect } from "react";
import "./PasswordBox.css";
import { atomicSymbols } from "@/rules/data"; // Import atomic symbols

// Helper functions for caret positioning
function getCaretPosition(el) {
  if (el.selectionStart || el.selectionStart === 0) {
    return { start: el.selectionStart, end: el.selectionEnd };
  }
  return { start: 0, end: 0 };
}

function setCaretPosition(el, pos) {
  if (el && pos && el.setSelectionRange) {
    el.setSelectionRange(pos.start, pos.end);
  }
}

// Function to extract and sum atomic symbols in the password
function getAtomicSymbolSum(password) {
  let sum = 0;
  let detectedSymbols = [];
  let i = 0;

  while (i < password.length) {
    let matchedSymbol = null;

    // Check for two-letter atomic symbols first (e.g., "He", "Li")
    if (i < password.length - 1) {
      const twoLetterSymbol = password.slice(i, i + 2);
      if (atomicSymbols[twoLetterSymbol] !== undefined) {
        matchedSymbol = twoLetterSymbol;
      }
    }

    // If no two-letter match, check for single-letter elements (e.g., "H", "O")
    if (!matchedSymbol) {
      const oneLetterSymbol = password[i];
      if (atomicSymbols[oneLetterSymbol] !== undefined) {
        matchedSymbol = oneLetterSymbol;
      }
    }

    // If a match is found, add its atomic number to sum and record the symbol
    if (matchedSymbol) {
      sum += atomicSymbols[matchedSymbol];
      detectedSymbols.push(matchedSymbol);
      i += matchedSymbol.length; // Move ahead by the symbol length
    } else {
      i++;
    }
  }

  return { sum, detectedSymbols };
}

function PasswordBox(props, ref) {
  const { pswd, setPswd, activeRules = [] } = props; // Default activeRules to an empty array
  const caretPos = useRef();

  // Fixed atomic target of 100
  const atomicTarget = 100;

  const { sum, detectedSymbols } = getAtomicSymbolSum(pswd);
  
  // Show the atomic symbols box only if atomic symbols exist and their sum is not 100
  const ruleNotMet = detectedSymbols.length > 0 && sum !== atomicTarget;

  // Auto-resize textarea
  useEffect(() => {
    ref.current.style.height = "auto";
    ref.current.style.height = `${ref.current.scrollHeight}px`;
  }, [pswd, ref]);

  function handleChange(e) {
    caretPos.current = getCaretPosition(ref.current);
    setPswd(e.target.value);
  }

  useEffect(() => {
    setCaretPosition(ref.current, caretPos.current);
  }, [pswd]);

  return (
    <>
      <div className="pswdbox_label">
        Choose a password
        <span className="psswd_len">{pswd.length}</span>
      </div>
      <textarea
        id="pswdbox"
        className="pswdbox"
        ref={ref}
        value={pswd}
        onChange={handleChange}
        rows={1}
        style={{ resize: "none", width: "100%", overflowY: "hidden" }}
        spellCheck="false"
      />
      {/* Show the atomic symbols box only if symbols exist and the sum is not equal to 100 */}
      {ruleNotMet && (
        <div className="atomic-symbols-box">
          Atomic Symbols Found: {detectedSymbols.join(", ")} (Sum: {sum}/100)
        </div>
      )}
    </>
  );
}

export default React.forwardRef(PasswordBox);
