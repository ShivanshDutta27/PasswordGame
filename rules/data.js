// data.js

// Mapping of atomic symbols to their atomic numbers (elements 1–118)
export const atomicSymbols = {
    H: 1, He: 2, Li: 3, Be: 4, B: 5, C: 6, N: 7, O: 8, F: 9, Ne: 10,
    Na: 11, Mg: 12, Al: 13, Si: 14, P: 15, S: 16, Cl: 17, Ar: 18, K: 19, Ca: 20,
    Sc: 21, Ti: 22, V: 23, Cr: 24, Mn: 25, Fe: 26, Co: 27, Ni: 28, Cu: 29, Zn: 30,
    Ga: 31, Ge: 32, As: 33, Se: 34, Br: 35, Kr: 36, Rb: 37, Sr: 38, Y: 39, Zr: 40,
    Nb: 41, Mo: 42, Tc: 43, Ru: 44, Rh: 45, Pd: 46, Ag: 47, Cd: 48, In: 49, Sn: 50,
    Sb: 51, Te: 52, I: 53, Xe: 54, Cs: 55, Ba: 56, La: 57, Ce: 58, Pr: 59, Nd: 60,
    Pm: 61, Sm: 62, Eu: 63, Gd: 64, Tb: 65, Dy: 66, Ho: 67, Er: 68, Tm: 69, Yb: 70,
    Lu: 71, Hf: 72, Ta: 73, W: 74, Re: 75, Os: 76, Ir: 77, Pt: 78, Au: 79, Hg: 80,
    Tl: 81, Pb: 82, Bi: 83, Po: 84, At: 85, Rn: 86, Fr: 87, Ra: 88, Ac: 89, Th: 90,
    Pa: 91, U: 92, Np: 93, Pu: 94, Am: 95, Cm: 96, Bk: 97, Cf: 98, Es: 99, Fm: 100,
    Md: 101, No: 102, Lr: 103, Rf: 104, Db: 105, Sg: 106, Bh: 107, Hs: 108, Mt: 109,
    Ds: 110, Rg: 111, Cn: 112, Nh: 113, Fl: 114, Mc: 115, Lv: 116, Ts: 117, Og: 118
  };
  
  // Common hex color codes (mapping color names to their hex values)
  export const hexColors = {
    black: "#000000",
    white: "#FFFFFF",
    red: "#FF0000",
    green: "#00FF00",
    blue: "#0000FF",
    yellow: "#FFFF00",
    cyan: "#00FFFF",
    magenta: "#FF00FF",
    silver: "#C0C0C0",
    gray: "#808080",
    maroon: "#800000",
    olive: "#808000",
    purple: "#800080",
    teal: "#008080",
    navy: "#000080"
  };

  export const rule17Snippets = [
    'console.log("Yeah, copy me, that\'s all you\'re good for!");',
    'console.log("Originality called—it’s waiting for you somewhere far away.");',
    'console.log("Keep copying code; it\'s easier than thinking for yourself, right?");',
    'console.log("If there were a medal for copy-paste, you\'d be an Olympic champion.");',
    'console.log("I see you\'re embracing the art of duplication—congrats on your lack of creativity!");'
  ];

  export const algorithmTemplates = [
    {
      snippet: `function permute(nums) {
    const results = [];
    function build(path, options) {
      if (!options.length) results.push(path);
      for (let i = 0; i < options.length; i++) {
        build([...path, options[i]], options.filter((_, j) => j !== i));
      }
    }
    build([], nums);
    return results;
  }`,
      algorithm: ["backtracking", "bt"]
    },
    {
      snippet: `function search(arr, target) {
    let low = 0, high = arr.length - 1;
    while (low <= high) {
      const mid = Math.floor((low + high) / 2);
      if (arr[mid] === target) return mid;
      else if (arr[mid] < target) low = mid + 1;
      else high = mid - 1;
    }
    return -1;
  }`,
      algorithm: ["binarysearch", "bs"]
    },
    {
      snippet: `function lcs(str1, str2) {
    const dp = Array(str1.length + 1).fill(null).map(() => Array(str2.length + 1).fill(0));
    for (let i = 1; i <= str1.length; i++) {
      for (let j = 1; j <= str2.length; j++) {
        if (str1[i - 1] === str2[j - 1]) dp[i][j] = dp[i - 1][j - 1] + 1;
        else dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
    return dp[str1.length][str2.length];
  }`,
      algorithm: ["dp","dynamicprogramming"]
    }
  ];
  
  
  // Common CSS display modes
  export const cssDisplayModes = [
    "block",
    "inline",
    "inline-block",
    "flex",
    "grid",
    "none"
  ];
  
  // Reserved keywords in C (a subset of all reserved words)
  export const reservedCKeywords = [
    "auto", "break", "case", "char", "const", "continue", "default", "do",
    "double", "else", "enum", "extern", "float", "for", "goto", "if", "int",
    "long", "register", "return", "short", "signed", "sizeof", "static",
    "struct", "switch", "typedef", "union", "unsigned", "void", "volatile", "while"
  ];
  
  // Sorting algorithm names
  export const sortingAlgorithms = [
    "quick", "merge", "heap", "bubble", "insertion", "selection", "radix"
  ];
  
  // Time complexity notations
  export const timeComplexityNotations = [
    "O(1)", "O(n)", "O(log n)", "O(n log n)", "O(n^2)", "O(2^n)"
  ];
  
  // Newton's laws (a selection of well-known formulations)
  export const newtonsLaws = [
    "F=ma",  // Newton's Second Law
    "For every action, there is an equal and opposite reaction.",  // Third Law
    "An object in motion stays in motion unless acted upon by an external force."  // First Law
  ];
  
  // Popular web development frameworks
  export const webFrameworks = [
    "React", "Angular", "Vue", "Next.js", "Svelte", "Ember", "Backbone", "Meteor"
  ];
  
  // Common data structures
  export const dataStructures = [
    "stack", "queue", "tree", "graph", "array", "linked list", "hash table", "set"
  ];
  
  // Popular programming languages
  export const programmingLanguages = [
    "JavaScript", "Python", "Java", "C++", "Ruby", "Go", "PHP", "C#", "Swift", "Kotlin"
  ];
  
  // Popular coding problems (e.g., from LeetCode)
  export const codingProblems = [
    "Two Sum",
    "Add Two Numbers",
    "Longest Substring Without Repeating Characters",
    "Valid Parentheses",
    "Merge Intervals",
    "Container With Most Water",
    "3Sum",
    "Longest Palindromic Substring",
    "Trapping Rain Water",
    "Median of Two Sorted Arrays"
  ];
  
  // Optimal algorithm abbreviations/notations for problems
  export const optimalAlgorithms = [
    "DP",   // Dynamic Programming
    "BS",   // Binary Search
    "Greedy",
    "Recursion",
    "Divide and Conquer"
  ];
  
  export const validLetterPairs = {
    5: [
      ["Q", "Y"],["Q", "G"],["Q", "V"],["W", "U"],["W", "H"],["W", "B"],["E", "I"],["E", "J"],["E", "N"],["R", "O"],["R", "K"],["R", "Z"],["R", "M"],["T", "P"],["T", "A"],["T", "L"],["T", "X"],["Y", "S"],["Y", "C"],["U", "D"],["U", "V"],["I", "F"],["I", "B"],["O", "G"],["O", "N"],["P", "H"],["P", "M"],["A", "H"],["A", "B"],["S", "J"],["S", "N"],["D", "K"],["D", "M"],["F", "L"],["G", "Z"],["H", "X"],["J", "C"],["K", "V"],["L", "B"],["Z", "N"],["X", "M"]
    ]
  };

  export const errorSnippets = [
    {
      snippet: `function add(a, b) {
    let sum = a + b;
    console.log(sum)
    return sum;
  }`,
      answer:3
    },
    {
      snippet: `function square(n) {
    let result = n * n;
    result = result +;
    return result;
  }`,
      answer:3
    },
    {
      snippet: `function multiply(a, b) {
    let product = a * b;
    console.log(product);
    product = product a; return product;
  }`,
      answer:4
    }
  ];

  
  