import Rule from "./Rule";

const codes = [];

// Helper function to generate a random integer between min and max (inclusive)
function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Helper: generate a random target from a specific set
function randomTargetFrom(set) {
    return set[randomInt(0, set.length - 1)];
}

// BASIC RULES
const rule1 = new Rule(
  "Your password must be at least 8 characters long.",
  (t) => t?.length >= 8
);

const rule2 = new Rule(
  "Your password must include at least one uppercase letter.",
  (t) => /[A-Z]/.test(t)
);

const rule3 = new Rule(
  "Your password must include at least one lowercase letter.",
  (t) => /[a-z]/.test(t)
);

const rule4 = new Rule(
  "Your password must include at least one digit.",
  (t) => /\d/.test(t)
);

const rule5 = new Rule(
  "Your password must include at least one special character.",
  (t) => /\W/.test(t)
);

// ADVANCED / NERDY RULES

// 6. Digits add up to x (dynamic target chosen from 25, 30, or 35)
const possibleDigitTargets = [25, 30, 35];
const digitTarget = randomTargetFrom(possibleDigitTargets);
const rule6 = new Rule(
  `Your password's digits must add up to ${digitTarget}.`,
  (t) => {
    const sum = (t.match(/\d/g) || []).reduce((acc, d) => acc + Number(d), 0);
    return sum === digitTarget;
  }
);

// 7. Pi sequence (first 5 digits of pi)
const rule7 = new Rule(
  "Your password must contain the first 5 digits of pi.",
  (t) => /3\.1415/.test(t)
);

// 8. Sum of 1,2,3,4... (quirky representation: -1/12 or 0)
const rule8 = new Rule(
  "Your password must represent the sum of the series 1+2+3+4+… in a quirky way.",
  (t) => /(-1\/12|0)/.test(t)
);

// 9. Atomic symbols add up to x (dummy implementation with a dynamic target)
const possibleAtomicTargets = [50, 60, 100];
const atomicTarget = randomTargetFrom(possibleAtomicTargets);
const rule9 = new Rule(
  `The atomic symbols in your password must have their atomic numbers sum to ${atomicTarget}.`,
  (t) => {
    let sum = 0;
    // Dummy implementation: count a couple of symbols for illustration.
    if (/He/.test(t)) sum += 2;
    if (/Li/.test(t)) sum += 3;
    // In a full implementation, you would parse all valid symbols.
    return sum === atomicTarget;
  }
);

// 10. ASCII character for the largest atomic symbol used
const rule10 = new Rule(
  "The ASCII character for the largest atomic symbol you used must appear elsewhere in your password.",
  (t) => {
    // For illustration: if "Li" is used, its first letter 'L' must be present.
    if (/Li/.test(t)) {
      return /L/.test(t);
    }
    return false;
  }
);

// 11. Value of g in physics (must be 10, not 9.8)
const rule11 = new Rule(
  "Your password must include the value of g in physics (it should be 10, not 9.8).",
  (t) => /10/.test(t) && !/9\.8/.test(t)
);

// 12. One reserved keyword from the C language
const rule12 = new Rule(
  "Your password must include one reserved C keyword.",
  (t) => /(\bif\b|\belse\b|\bfor\b|\bwhile\b)/.test(t)
);

// 13. Two characters on the keyboard whose Manhattan distance equals a target value
const rule13 = new Rule(
  "Your password must include two characters whose Manhattan distance on a QWERTY keyboard equals a target value.",
  (t) => {
    // For simplicity, check for a known pair.
    return /QA/.test(t) || /AQ/.test(t);
  }
);

// 14. Hex code for some color
const rule14 = new Rule(
  "Your password must contain a valid hex color code.",
  (t) => /#[0-9A-Fa-f]{6}/.test(t)
);

// 15. One of the display modes in CSS
const rule15 = new Rule(
  "Your password must include one CSS display mode.",
  (t) => /(block|inline|flex|grid)/i.test(t)
);

// 16. Must include a looping condition for Fibonacci (or a comment hinting at Fibonacci)
const rule16 = new Rule(
  "Your password must include a loop or comment that hints at iterating over Fibonacci numbers.",
  (t) => /fib/i.test(t)
);

// 17. Ask to copy and paste some code (humorous prompt)
const rule17 = new Rule(
  "Prove you're a true coder: copy and paste the code snippet exactly!",
  (t) => /sudo make me a sandwich/.test(t)
);

// 18. Reference one coding problem and its optimal algorithm
const rule18 = new Rule(
  "Your password must reference one coding problem and its optimal algorithm.",
  (t) => /(DP|BS|Greedy|Recursion)/.test(t)
);

// 19. Sorting algorithm name
const rule19 = new Rule(
  "Your password must include the name of a sorting algorithm.",
  (t) => /(quick|merge|heap|bubble|insertion)/i.test(t)
);

// 20. Calculate time complexity (include a Big-O notation)
const rule20 = new Rule(
  "Your password must contain a Big-O notation representing time complexity.",
  (t) => /O\(.+\)/.test(t)
);

// 21. Include one of Newton's laws
const rule21 = new Rule(
  "Your password must include one of Newton's laws.",
  (t) => /F\s*=\s*ma/.test(t)
);

// 22. Include a code snippet with a line number that has an error
const rule22 = new Rule(
  "Your password must include a code snippet with a line number that indicates an error.",
  (t) => /line\s*\d+\s+error/i.test(t)
);

// 23. Add one data structure
const rule23 = new Rule(
  "Your password must include the name of a data structure.",
  (t) => /(stack|queue|tree|graph|array)/i.test(t)
);

// 24. Add your favorite programming language name
const rule24 = new Rule(
  "Your password must include the name of your favorite programming language.",
  (t) => /(JavaScript|Python|Java|C\+\+|Ruby|Go)/i.test(t)
);

// 25. Include one of the frameworks for web development
const rule25 = new Rule(
  "Your password must include the name of a web development framework.",
  (t) => /(React|Angular|Vue|Next\.js|Svelte)/i.test(t)
);

var rules = [
  rule1, rule2, rule3, rule4, rule5,
  rule6, rule7, rule8, rule9, rule10,
  rule11, rule12, rule13, rule14, rule15,
  rule16, rule17, rule18, rule19, rule20,
  rule21, rule22, rule23, rule24, rule25
];

// Hints array (leave as-is for now; you'll adjust later if needed)
var hints = [
    "Hint: Ensure your password is at least 8 characters long.",
    "Hint: Include an uppercase letter (A-Z).",
    "Hint: Include a lowercase letter (a-z).",
    "Hint: Include a digit (0-9).",
    "Hint: Include a special character (e.g., !, @, #).",
    `Hint: The sum of all digits should equal ${digitTarget}.`,
    "Hint: Include the first 5 digits of pi in your password.",
    "Hint: Represent the sum of 1+2+3+4+… in a quirky way (e.g., '-1/12' or '0').",
    `Hint: The atomic numbers of the symbols should sum to ${atomicTarget}.`,
    "Hint: The ASCII character for your largest atomic symbol must appear elsewhere.",
    "Hint: Include the value 10 to represent g in physics.",
    "Hint: Include one reserved keyword from the C language.",
    "Hint: Include two keyboard characters with the required Manhattan distance.",
    "Hint: Include a valid hex color code (a '#' followed by 6 hex digits).",
    "Hint: Include one CSS display mode (e.g., block, inline, flex, grid).",
    "Hint: Add a loop or comment hinting at Fibonacci numbers (look for 'fib').",
    "Hint: Copy and paste the provided code snippet exactly.",
    "Hint: Reference a coding problem and mention its optimal algorithm.",
    "Hint: Include the name of a sorting algorithm.",
    "Hint: Add a Big-O notation (like O(n) or O(n log n)).",
    "Hint: Include one of Newton's laws (e.g., F=ma).",
    "Hint: Embed a code snippet with a line number indicating an error.",
    "Hint: Include the name of a common data structure.",
    "Hint: Include the name of your favorite programming language.",
    "Hint: Include the name of a web development framework."
];

function sort_rules(a, b) {
  if (a.correct === b.correct) {
    return b.num - a.num;
  } else if (!a.correct && b.correct) {
    return -1;
  } else {
    return 1;
  }
}

export default rules;
export { sort_rules };
