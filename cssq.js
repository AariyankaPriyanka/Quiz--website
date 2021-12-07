// creating an array and passing the number, questions, options, and answers
let questions = [
    {
    numb: 1,
    question: "What does CSS stand for?",
    answer: "Cascading Style Sheet",
    options: [
      "Common Style Sheet",
      "Colorful Style Sheet",
      "Computer Style Sheet",
      "Cascading Style Sheet"
    ]
  },
    {
    numb: 2,
    question: "If we want define style for an unique element, then which css selector will we use ?",
    answer: "Id",
    options: [
      "Id",
      "text",
      "class",
      "name"
    ]
  },
    {
    numb: 3,
    question: "If we don't want to allow a floating div to the left side of an element, which css property will we use ?",
    answer: "clear",
    options: [
      "margin",
      "clear",
      "float",
      "padding"
    ]
  },
    {
    numb: 4,
    question: "If we want to wrap a block of text around an image, which css property will we use ?",
    answer: "float",
    options: [
      "wrap",
      "push",
      "float",
      "align"
    ]
  },
    {
    numb: 5,
    question: "If we want to use a nice looking green dotted border around an image, which css property will we use?",
    answer: "border-style",
    options: [
      "border-color",
      "border-decoration",
      "border-style",
      "border-line"
    ]
  },
  {
    numb: 6,
    question: "Which css property you will use if you want to add some margin between a DIV's border and its inner text ?",
    answer: "padding",
    options: [
      "spacing",
      "margin",
      "padding",
      "inner-margin"
    ]
  },
  {
    numb: 7,
    question: "Which CSS property is used to control the text size of an element ?",
    answer: "font-size",
    options: [
      "font-style",
      "text-size",
      "font-size",
      "text-style"
    ]
  },
  {
    numb: 8,
    question: "The default value of 'position' attribute is _________.",
    answer: "relative",
    options: [
      "fixed",
      "absolute",
      "inherit",
      "relative"
    ]
  },
  {
    numb: 9,
    question: "How will you make all paragraph elements 'RED' in color ?",
    answer: "p {color: red;}",
    options: [
      "p.all {color: red;}",
      "p.all {color: #990000;}",
      "all.p {color: #998877;}",
      "p {color: red;}"
    ]
  },
  {
    numb: 10,
    question: "By default Hyperlinks are displayed with an underline. How do you remove the underline from all hyperlinks by using CSS code ?",
    answer: "a {text-decoration:none;}",
    options: [
      "a {text: no-underline;}",
      "a {text-decoration:none;}",
      "a {text-style: no-underline;}",
      "a {text-decoration: no-underline;}"
    ]
  },
  {
    numb: 11,
    question: "Which style of CSS sheets are more preferable for applying a unique style in single web element?",
    answer: "Inline CSS",
    options: [
      "Inline CSS",
      "External CSS",
      "Internal CSS",
      "None"
    ]
  },
  {
    numb: 12,
    question: "There are how many ways to add CSS sheets in HTML elements?",
    answer: "3 ways",
    options: [
      "3 ways",
      "2 ways",
      "1 ways",
      "a lot of ways"
    ]
  },
  {
    numb: 13,
    question: "Using style sheets in head section of a web document is called?",
    answer: "Internal CSS",
    options: [
      "External CSS",
      "Inline CSS",
      "Internal CSS",
      "External & Internal CSS"
    ]
  },
  {
    numb: 14,
    question: "The property in CSS used to change the background color of an element is ",
    answer: "background-color",
    options: [
      "bgcolor",
      "color",
      "background-color",
      "All of the above"
    ]
  },
  {
    numb: 15,
    question: "The CSS property used to make the text bold is -",
    answer: "font-weight : bold",
    options: [
      "font-weight : bold",
      "weight: bold",
      "font: bold",
      "style: bold"
    ]
  },
  {
    numb: 16,
    question: "The CSS property used to specify the transparency of an element is -",
    answer: "opacity",
    options: [
      "opacity",
      "filter",
      "visibility",
      "overlay"
    ]
  },
  {
    numb: 17,
    question: "Which of the following is used to specify the subscript of text using CSS?",
    answer: "vertical-align: sub",
    options: [
      "vertical-align: sub",
      "vertical-align: super",
      "vertical-align: subscript",
      "None of the above"
    ]
  },
  {
    numb: 18,
    question: "Which of the following CSS property is used to specify the space between every letter inside an element?",
    answer: "letter-spacing",
    options: [
      "alpha-spacing",
      "character-spacing",
      "letter-spacing",
      "alphabet-spacing"
    ]
  },
  {
    numb: 19,
    question: " Which of the following syntax is correct in CSS to make each word of a sentence start with a capital letter?",
    answer: "text-transform : capitalize;",
    options: [
      "text-style : capital;",
      "transform : capitalize;",
      "text-transform : capital;",
      "text-transform : capitalize;"
    ]
  },
  {
    numb: 20,
    question: " Which of the following CSS property is used to add shadows to the text?",
    answer: "text-shadow",
    options: [
      "text-shadow",
      "text-stroke",
      "text-overflow",
      "text-decoration"
    ]
  },
  {
    numb: 21,
    question: "Which of the following is not a value of the font-variant property in CSS?",
    answer: "large-caps",
    options: [
      "normal",
      "small-caps",
      "large-caps",
      "inherit"
    ]
  },
  {
    numb: 22,
    question: "The CSS property used to make the rounded borders, or rounded corners around an element is -",
    answer: "border-radius",
    options: [
      "border-collapse",
      "border-radius",
      "border-spacing",
      "None of the above"
    ]
  },
  {
    numb: 23,
    question: "The CSS property used to set the distance between the borders of the adjacent cells in the table is -",
    answer: "Cascading Style Sheet",
    options: [
      "border-collapse",
      "border-radius",
      "border-spacing",
      "None of the above"
    ]
  },
  {
    numb: 24,
    question: "Which of the following selector in CSS is used to select the elements that do not match the selectors?",
    answer: ":not selector",
    options: [
      ":! selector",
      ":not selector",
      ":empty selector",
      "None of the above"
    ]
  },
  {
    numb: 25,
    question: "Which of the following CSS property defines how an image or video fits into container with established height and width?",
    answer: "object-fit",
    options: [
      "object-fit",
      "object-position",
      "position",
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