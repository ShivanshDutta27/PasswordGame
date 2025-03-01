import Rule from "./Rule";
import RuleInfiniteLoop from "./RuleInfiniteLoop.jsx/RuleInfiniteLoop";
import RuleSyntaxError from "./SyntaxError/SyntaxError";
import RuleVersionUpdate from "./VersionUpdate/VersionUpdate";
import { atomicSymbols, reservedCKeywords, algorithmTemplates, rule17Snippets, validLetterPairs, errorSnippets } from "@/rules/data";


function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomTargetFrom(set) {
    return set[randomInt(0, set.length - 1)];
}

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

const possibleDigitTargets = [25, 30, 35];
const digitTarget = randomTargetFrom(possibleDigitTargets);
const rule6 = new Rule(
  `Your password's digits must sum up to ${digitTarget}.`,
  (t) => (t.match(/\d/g) || []).reduce((acc, d) => acc + Number(d), 0) === digitTarget
);

const rule7 = new Rule(
  "Your password must contain the first 5 digits of pi.",
  (t) => /3\.1415/.test(t)
);

const rule8 = new Rule(
  "Your password must represent the sum of the series 1+2+3+4+… in a quirky way.",
  (t) => /(-1\/12|0)/.test(t)
);

const atomicTarget = 100;
const rule9 = new Rule(
  `The atomic symbols in your password must have their atomic numbers sum to ${atomicTarget}.`,
  (t) => {
    let sum = 0;
    let i = 0;
    while (i < t.length) {
      let matchedSymbol = null;
      if (i < t.length - 1) {
        const twoLetterSymbol = t.slice(i, i + 2);
        if (atomicSymbols[twoLetterSymbol] !== undefined) {
          matchedSymbol = twoLetterSymbol;
        }
      }
      if (!matchedSymbol) {
        const oneLetterSymbol = t[i];
        if (atomicSymbols[oneLetterSymbol] !== undefined) {
          matchedSymbol = oneLetterSymbol;
        }
      }
      if (matchedSymbol) {
        sum += atomicSymbols[matchedSymbol];
        i += matchedSymbol.length;
      } else {
        i++;
      }
    }
    return sum === atomicTarget;
  }
);

const rule10 = new Rule(
  "The ASCII character for 5! must appear  in your password.",
  (t) => /x/.test(t)
);
const rule11 = new Rule(
  "Your password must include the value of g in physics",
  (t) => /10/.test(t) && !/9\.8/.test(t)
);

const rule12 = new Rule(
  "Your password must include one reserved keyword from the C Language.",
  (t) => reservedCKeywords.some(keyword => t.toLowerCase().includes(keyword.toLowerCase()))
);


// Using the static pairs for Manhattan distance 5 from validLetterPairs.
const rule13 = new Rule(
  "Your password must include two characters whose Manhattan distance on a QWERTY keyboard equals 5.",
  (t) => validLetterPairs[5].some(([a, b]) => new RegExp(`${a}.*${b}|${b}.*${a}`, "i").test(t))
);

const rule14 = new Rule(
  "Your password must contain hex color code for a shade of yellow",
  (t) => {
    const match = t.match(/#([0-9A-Fa-f]{6})/);
    if (!match) return false;
    const intVal = parseInt(match[1], 16);
    const r = intVal >> 16;
    const g = (intVal >> 8) & 0xff;
    const b = intVal & 0xff;
    return r >= 200 && g >= 200 && b <= 100;
  }
);


const rule15 = new Rule(
  "Your password must include one CSS display mode.",
  (t) => /(block|inline|flex|grid|hidden|none)/i.test(t)
);



const chosenSnippet = randomTargetFrom(rule17Snippets);


const rule17 = new Rule(
  `Prove you're a true coder: copy and paste this code snippet exactly! -> \n${chosenSnippet}`,
  (t) => t.includes(chosenSnippet)
);




const chosenTemplate = randomTargetFrom(algorithmTemplates);

const rule18 = new Rule(
  `Your password must include the algorithm name corresponding to the code snippet below:\n\n${chosenTemplate.snippet}`,
  (t) => chosenTemplate.algorithm.some(name => t.toLowerCase().includes(name))
);


const rule19 = new Rule(
  "Your password must include the name of a sorting algorithm.",
  (t) => /(quick|merge|heap|bubble|insertion)/i.test(t)
);

const rule20 = new Rule(
  "Your password must contain a Big-O notation representing time complexity.",
  (t) => /O\(.+\)/.test(t)
);

const rule21 = new Rule(
  "Your password must include Newton's 2nd law or a basic kinematic equation ",
  (t) =>
    /F\s*=\s*ma/i.test(t) ||
    /v\s*=\s*u\s*\+\s*at/i.test(t) ||
    /s\s*=\s*ut\s*\+\s*1\/2\s*at\^2/i.test(t) ||
    /v\^2\s*-\s*u\^2\s*=\s*2as/i.test(t)
);




const rule23 = new Rule(
  "Your password must include the name of a data structure.",
  (t) => /(stack|queue|tree|graph|array)/i.test(t)
);

const rule24 = new Rule(
  "Your password must include the name of a programming language.",
  (t) => /(JavaScript|Python|Java|C\+\+|Ruby|Go|Flutter|Kotlin|C)/i.test(t)
);

const rule25 = new Rule(
  "Your password must include the name of a web development framework.",
  (t) => /(React|Angular|Vue|Next\.js|Svelte|.net|Node)/i.test(t)
);

var rules = [
  rule1, rule2, rule3, rule4, rule5,
  rule6, rule7, rule8, rule9,
  new RuleSyntaxError(), rule10,
  rule11, rule12, rule13, rule14, rule15,
  rule17, rule18, rule19, rule20,
  rule21, rule23, rule24, rule25,
   new RuleInfiniteLoop(),
   
  // new RuleVersionUpdate(),
];

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
