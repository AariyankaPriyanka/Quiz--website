// creating an array and passing the number, questions, options, and answers
let questions = [
    {
    numb: 1,
    question: "What does PHP stand for?",
    answer: "Hypertext Preprocessor",
    options: [
      "Hypertext Preprocessor",
      "Hypertext Programming",
      "Hypertext Preprogramming",
      "Hometext Preprocessor"
    ]
  },
    {
    numb: 2,
    question: "PHP is a ....",
    answer: "All of the above",
    options: [
      "Open Source Laguage",
      "Widely Used Language",
      "Server side scripting language",
      "All of the above"
    ]
  },
    {
    numb: 3,
    question: "Which of the following symbol is used to add multiple line comments in PHP ?",
    answer: "/* */",
    options: [
      "//",
      "/* */",
      "{{ }}",
      " {/* */}"
    ]
  },
    {
    numb: 4,
    question: "Which sign is used to access variable of variable in PHP?",
    answer: "$$",
    options: [
      "$$",
      "$",
      "#@",
      "$"
    ]
  },
    {
    numb: 5,
    question: "Which of following is not a Superglobals in PHP?",
    answer: "$_PUT",
    options: [
      "$_SERVER",
      "$_ENV",
      "$_FILES",
      "$_PUT"
    ]
  },
  {
    numb: 6,
    question: "Which function is used to get ASCII value of a character in PHP ?",
    answer: "chr( )",
    options: [
      "asc()",
      "chr( )",
      "ascii()",
      "val( )"
    ]
  },
  {
    numb: 7,
    question: "______ is used to unset a variable in PHP ?",
    answer: "unset()",
    options: [
      "delete()",
      "unset()",
      "unlink()",
      "delete();"
    ]
  },
  {
    numb: 8,
    question: "How many error levels are available in PHP ?",
    answer: "16",
    options: [
      "20",
      "4",
      "19",
      "16"
    ]
  },
  {
    numb: 9,
    question: "In which version of PHP E_STRICT Error level is introduced ?",
    answer: "PHP 5",
    options: [
      "PHP 4",
      "PHP 5",
      "PHP 5.2",
      "PHP 7"
    ]
  },
  {
    numb: 10,
    question: "Which function in PHP is used to get the length of string variable?",
    answer: "strlen",
    options: [
      "count()",
      "strcount",
      "strlen",
      "len"
    ]
  },
  {
    numb: 11,
    question: " Who is the father of PHP?",
    answer: "Rasmus Lerdorf",
    options: [
      "Drek Kolkevi",
      "Rasmus Lerdorf",
      "Willam Makepiece",
      "List Barely"
    ]
  },
  {
    numb: 12,
    question: "A function in PHP which starts with __ (double underscore) is known as __________ .",
    answer: "Magic Function",
    options: [
      "Inbuilt Function",
      "Default Function",
      "Magic Function",
      "User Defined Function"
    ]
  },
  {
    numb: 13,
    question: "Which of the following PHP functions accepts any number of parameters?",
    answer: "func_get_args()",
    options: [
      "func_get_args()",
      "func_get_argv()",
      "get_argv()",
      "get_argc()"
    ]
  },
  {
    numb: 14,
    question: "PHP’s numerically indexed array begin with position ___________ .",
    answer: "0",
    options: [
      "-1",
      "1",
      "0",
      "2"
    ]
  },
  {
    numb: 15,
    question: "Which one of the following property scopes is not supported by PHP?",
    answer: "friendly",
    options: [
      "public",
      "final",
      "friendly",
      "static"
    ]
  },
  {
    numb: 16,
    question: "How to define a function in PHP?",
    answer: "function functionName(parameters) {function body}",
    options: [
      "function {function body}",
      "functionName(parameters) {function body}",
      "function functionName(parameters) {function body}",
      "None of the above"
    ]
  },
  {
    numb: 17,
    question: "Which PHP function is used to find files?",
    answer: "glob()",
    options: [
      "file()",
      "fold()",
      "glob()",
      "None of the above"
    ]
  },
  {
    numb: 18,
    question: "What does SPL stands for in Php?",
    answer: "Standard PHP Library",
    options: [
      "Source PHP List",
      "Standard PHP List",
      "Standard PHP Library",
      "None of the Above"
    ]
  },
  {
    numb: 19,
    question: "Which of the following is not true?",
    answer: "PHP can not be embedded into html.",
    options: [
      "PHP can be used to develop web applications.",
      "PHP makes a website dynamic",
      "PHP applications can not be compile",
      "PHP can not be embedded into html."
    ]
  },
  {
    numb: 20,
    question: "Which of the following variables is not a predefined variable?",
    answer: "$ask",
    options: [
      "$get",
      "$ask",
      "$request",
      "$post"
    ]
  },
  {
    numb: 21,
    question: "Which of the following method sends input to a script via a URL?",
    answer: "Get",
    options: [
      "Get",
      "Post",
      "Both",
      "None"
    ]
  },
  {
    numb: 22,
    question: "Which of the following function returns a text in title case from a variable?",
    answer: "ucwords($var)",
    options: [
      "ucwords($var)",
      "upper($var)",
      "toupper($var)",
      "ucword($var)"
    ]
  },
  {
    numb: 23,
    question: "If $a = 12 what will be returned when ($a == 12) ? 5 : 1 is executed?",
    answer: "5",
    options: [
      "12",
      "1",
      "Error",
      "5"
    ]
  },
  {
    numb: 24,
    question: "Which of the below statements is equivalent to $add += $add ?",
    answer: "$add = $add +$add",
    options: [
      "$add = $add",
      "$add = $add +$add",
      "$add = $add + 1",
      "$add = $add + $add + 1"
    ]
  },
  {
    numb: 25,
    question: "What does PEAR stands for?",
    answer: "PHP extension and application repository",
    options: [
      "PHP extension and application repository",
      "PHP enhancement and application reduce",
      "PHP event and application repository",
      "None of the above"
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