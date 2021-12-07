// creating an array and passing the number, questions, options, and answers
let questions = [
    {
    numb: 1,
    question: "What does HTML stand for?",
    answer: "Hyper Text Markup Language",
    options: [
      "Hyper Text Preprocessor",
      "Hyper Text Markup Language",
      "Hyper Text Multiple Language",
      "Hyper Tool Multi Language"
    ]
  },
    {
    numb: 2,
    question: "HTML Output is not changed by adding",
    answer: "Empty spaces",
    options: [
      "Body",
      "Tags",
      "Empty spaces",
      "Coding"
    ]
  },
    {
    numb: 3,
    question: "HTML uses",
    answer: "Fixed tags defined by the language",
    options: [
      "User defined tags",
      "Pre-specified tags",
      "Fixed tags defined by the language",
      "Tags only for linking"
    ]
  },
    {
    numb: 4,
    question: "The year in which HTML was first proposed _______.",
    answer: "1990",
    options: [
      "1990",
      "1980",
      "2000",
      "1995"
    ]
  },
    {
    numb: 5,
    question: "Fundamental HTML Block is known as ___________.",
    answer: "HTML Tag",
    options: [
      "HTML Body",
      "HTML Tag",
      "HTML Attribute",
      "HTML Element"
    ]
  },
  {
    numb: 6,
    question: "The HTML  pre tag helps in preserving the",
    answer: "Both A and B",
    options: [
      "Spaces",
      "Line Breaks",
      "Listing",
      "Both A and B"
    ]
  },
  {
    numb: 7,
    question: "The HTML element known to be del tag defines",
    answer: "Removed data",
    options: [
      "Deleted data",
      "Removed data",
      "Crossed data",
      "Overwritten data"
    ]
  },
  {
    numb: 8,
    question: "How can you make a bulleted list with numbers?",
    answer: "ol",
    options: [
      "dl",
      "ol",
      "list",
      "ul"
    ]
  },
  {
    numb: 9,
    question: "What tag is used to display a picture in a HTML page?",
    answer: "img",
    options: [
      "picture",
      "image",
      "img",
      "src"
    ]
  },
  {
    numb: 10,
    question: "HTML web pages can be read and rendered by _________.",
    answer: "Web Browser",
    options: [
      "Compiler",
      "Server",
      "Web Browser",
      "Interpreter"
    ]
  },
  {
    numb: 11,
    question: "The element <em> of HTML defines",
    answer: "Emphasized text",
    options: [
      "Exponent mode text",
      "Empirical text",
      "Strong text",
      "Emphasized text"
    ]
  },
  {
    numb: 12,
    question: "Tags and texts that are not directly displayed on the page are written in _____ section.",
    answer: "head",
    options: [
      "head",
      "title",
      "body",
      "html"
    ]
  },
  {
    numb: 13,
    question: "How is document type initialized in HTML5.?",
    answer: "!DOCTYPE HTML",
    options: [
      "/DOCTYPE HTML",
      "/DOCTYPE",
      "!DOCTYPE HTML",
      "/DOCTYPE html"
    ]
  },
  {
    numb: 14,
    question: "Which of the following characters indicate closing of a tag?",
    answer: "/",
    options: [
      ".",
      "/",
      ":",
      "!"
    ]
  },
  {
    numb: 15,
    question: "What is the font-size of the h1 heading tag?",
    answer: "2 em",
    options: [
      "3.5 em",
      "2.17 em",
      "2 em",
      "1.5 em"
    ]
  },
  {
    numb: 16,
    question: "How many attributes are there in HTML5?",
    answer: "2",
    options: [
      "2",
      "3",
      "4",
      "5"
    ]
  },
  {
    numb: 17,
    question: "HTML links are defined with <a> tag and the address is specified by the attribute",
    answer: "href",
    options: [
      "link",
      "hlink",
      "href",
      "src"
    ]
  },
  {
    numb: 18,
    question: "What is the purpose of using div tags in HTML?",
    answer: "For creating different sections.",
    options: [
      "For creating Different styles.",
      "For creating different sections.",
      "For adding headings.",
      "For adding titles."
    ]
  },
  {
    numb: 19,
    question: "Which of the following tags is used to add a line-break in HTML?",
    answer: "br",
    options: [
      "br",
      "break",
      "/break",
      "/br"
    ]
  },
  {
    numb: 20,
    question: "Which of the following attributes is used to open an hyperlink in new tab?",
    answer: "target",
    options: [
      "tab",
      "href",
      "target",
      "ref"
    ]
  },
  {
    numb: 21,
    question: "Which of the following is the correct way to add background color in HTML?",
    answer: "body style = “background-color: green;”",
    options: [
      "body color = “green”",
      "body bg-color = “green”",
      "body style = “background-color=green”",
      "body style = “background-color: green;”"
    ]
  },
  {
    numb: 22,
    question: "A block level element of the HTML always starts on a",
    answer: "New Line",
    options: [
      "New window",
      "New Tab",
      "New page",
      "New Line"
    ]
  },
  {
    numb: 23,
    question: "Which tag is used for creating a drop-down selection list?",
    answer: "option",
    options: [
      "select",
      "option",
      "dropdown",
      "list"
    ]
  },
  {
    numb: 24,
    question: "The h1 tag element in the HTML defines",
    answer: "Headings",
    options: [
      "Headings",
      "Hyperlink",
      "HyperText",
      "Html-text"
    ]
  },
  {
    numb: 25,
    question: "For displaying a webpage within a webpages, HTML uses",
    answer: "Iframes",
    options: [
      "Classes",
      "Div element",
      "Span Element",
      "Iframes"
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