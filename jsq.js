// creating an array and passing the number, questions, options, and answers
let questions = [
    {
    numb: 1,
    question: "Which type of JavaScript language is ___",
    answer: "Object-Based",
    options: [
      "Object-Oriented",
      "Object-Based",
      "Assembly-language",
      "High-level"
    ]
  },
    {
    numb: 2,
    question: "Which one of the following also known as Conditional Expression:",
    answer: "immediate if",
    options: [
      "Alternative to if-else",
      "Switch statement",
      "If-then-else statement",
      "immediate if"
    ]
  },
    {
    numb: 3,
    question: "In JavaScript, what is a block of statement?",
    answer: "block that combines a number of statements into a single compound statement",
    options: [
      "Conditional block",
      "block that combines a number of statements into a single compound statement",
      "both conditional block and a single statement",
      "block that contains a single statement"
    ]
  },
    {
    numb: 4,
    question: "When interpreter encounters an empty statements, what it will do:",
    answer: "Ignores the statements",
    options: [
      "Shows a warning",
      "Prompts to complete the statement",
      "Throws an error",
      "Ignores the statements"
    ]
  },
    {
    numb: 5,
    question: "The 'function' and  'var' are known as:",
    answer: "Declaration statements",
    options: [
      "Keywords",
      "Data types",
      "Declaration statements",
      "Prototypes"
    ]
  },
  {
    numb: 6,
    question: "Which one of the following is the correct way for calling the JavaScript code?",
    answer: "Function/Method",
    options: [
      "Preprocessor",
      "Triggering Event",
      "RMI",
      "Function/Method"
    ]
  },
  {
    numb: 7,
    question: "Which of the following type of a variable is volatile?",
    answer: "Mutable variable",
    options: [
      "Mutable variable",
      "Dynamic variable",
      "Volatile variable",
      "Immutable variable"
    ]
  },
  {
    numb: 8,
    question: "Which of the following option is used as hexadecimal literal beginning?",
    answer: "Both 0x and 0X",
    options: [
      "00",
      "0x",
      "0X",
      "Both 0x and 0X"
    ]
  },
  {
    numb: 9,
    question: "When there is an indefinite or an infinite value during an arithmetic computation in a program, then JavaScript prints______.",
    answer: "Displays 'Infinity'",
    options: [
      "Prints an exception error",
      "Prints an overflow error",
      "Displays 'Infinity'",
      "Prints the value as such"
    ]
  },
  {
    numb: 10,
    question: "In the JavaScript, which one of the following is not considered as an error:",
    answer: "Division by zero",
    options: [
      "Syntax error",
      "Missing of semicolons",
      "Division by zero",
      "Missing of Bracket"
    ]
  },
  {
    numb: 11,
    question: "Which of the following givenfunctions of the Number Object formats a number with a different number of digits to the right of the decimal?",
    answer: "toFixed()",
    options: [
      "toExponential()",
      "toFixed()",
      "toPrecision()",
      "toLocaleString()"
    ]
  },
  {
    numb: 12,
    question: "Which of the following number object function returns the value of the number?",
    answer: "valueOf()",
    options: [
      "toString()",
      "valueOf()",
      "toLocaleString()",
      "toPrecision()"
    ]
  },
  {
    numb: 13,
    question: "Which of the following function of the String object returns the character in the string starting at the specified position via the specified number of characters?",
    answer: "substr()",
    options: [
      "slice()",
      "split()",
      "substr()",
      "search()"
    ]
  },
  {
    numb: 14,
    question: "In JavaScript the x===y statement implies that:",
    answer: "Both are equal in the value and data type.",
    options: [
      "Both x and y are equal in value, type and reference address as well.",
      "Both are x and y are equal in value only.",
      "Both are equal in the value and data type.",
      "Both are not same at all."
    ]
  },
  {
    numb: 15,
    question: "Suppose we have a text 'human' that we want to convert into string without using the 'new' operator. Which is the correct way from the following to do so:",
    answer: "Both human.toString() and String(human)",
    options: [
      "toString()",
      "String(human)",
      "String newvariable='human'",
      "Both human.toString() and String(human)"
    ]
  },
  {
    numb: 16,
    question: "Choose the correct snippet from the following to check if the variable 'a' is not equal the 'NULL':",
    answer: "if(a!==null)",
    options: [
      "if(a!==null)",
      "if (a!)",
      "if(a!null)",
      "if(a!=null)"
    ]
  },
  {
    numb: 17,
    question: "In JavaScript, what will be used for calling the function definition expression:",
    answer: "Function literal",
    options: [
      "Function prototype",
      "Function literal",
      "Function calling",
      "Function declaration"
    ]
  },
  {
    numb: 18,
    question: "Which of the following one is the property of the primary expression:",
    answer: "stand-alone expressions",
    options: [
      "Contains only keywords",
      "basic expressions containing all necessary functions",
      "contains variable references alone",
      "stand-alone expressions"
    ]
  },
  {
    numb: 19,
    question: "Which one of the following is used for the calling a function or a method in the JavaScript:",
    answer: "Invocation expression",
    options: [
      "Property Access Expression",
      "Functional expression",
      "Invocation expression",
      "Primary expression"
    ]
  },
  {
    numb: 20,
    question: "The 'new Point(3,2)', is a kind of _______ expression",
    answer: "Object Creation Expression",
    options: [
      "Object Creation Expression",
      "Primary Expression",
      "Invocation Expression",
      "Constructor Calling Expression"
    ]
  },
  {
    numb: 21,
    question: "Which one of the following is an ternary operator:",
    answer: "?",
    options: [
      "?",
      ":",
      "-",
      "+"
    ]
  },
  {
    numb: 22,
    question: "'An expression that can legally appear on the left side of an assignment expression.' is a well known explanation for variables, properties of objects, and elements of arrays. They are called_____.",
    answer: "Lvalue",
    options: [
      "Properties",
      "Prototypes",
      "Definition",
      "Lvalue"
    ]
  },
  {
    numb: 23,
    question: "What we will get if we compare the 'one' with '8' using the less than operator ('one'<8)?",
    answer: "False",
    options: [
      "False",
      "True",
      "NaN",
      "Undefined"
    ]
  },
  {
    numb: 24,
    question: "Which one of the following is known as the Equality operator, which is used to check whether the two values are equal or not:",
    answer: "==",
    options: [
      "=",
      "==",
      "===",
      "&&"
    ]
  },
  {
    numb: 25,
    question: "What are the three important manipulations for a loop on a loop variable?",
    answer: "Initialization, Testing, Updation",
    options: [
      "Updation, Incrementation, Initialization",
      "Initialization, Testing, Incrementation",
      "Testing, Updation, Testing",
      "Initialization, Testing, Updation"
    ]
  },

  // you can uncomment the below codes and make duplicate as more as you want to add question
  // but remember you need to give the numb value serialize like 1,2,3,5,6,7,8,9.....

  //   {
  //   numb: 6,
  //   question: "Your Question is Here",
  //   answer: "Correct answer of the question is here",
  //   options: [
  //     "Option 1",
  //     "option 2",
  //     "option 3",
  //     "option 4"
  //   ]
  // },
];