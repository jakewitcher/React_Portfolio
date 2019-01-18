interface IQuote {
  company: string;
  name: string;
  position: string;
  quote: string;
}

interface IProject {
  description: string;
  image: string;
  name: string;
  sourceCode: string;
  tools: string;
  url: string;
}

export const quotes: IQuote[] = [
  {
    company: "Martin",
    name: "John Son",
    position: "Front-End Developer",
    quote:
      "Jake's depth of knowledge of functional programming and Javascript led to engaging discussions about the language, which inadvertently gave me a deeper understanding about React (as a React developer of 2 years)."
  },
  {
    company: "Sparkbox",
    name: "Melissa Thompson",
    position: "Developer",
    quote:
      "Jake was great to work with. His knowledge of React was clear in his ability to answer questions and work through problems with the rest of the team."
  }
];

export const projects: IProject[] = [
  {
    description:
      "'Meal to List' is a responsive meal planning app that allows the user to save a list of meal ingredients and then later combine several meals into a single grocery list. My wife and I often forget about meals we've enjoyed in the past and neither of us likes making a grocery list. This application was made to solve both problems.",
    image: "meal",
    name: "meal to list",
    sourceCode: "https://github.com/jakewitcher/React_Meal-to-List",
    tools: "React, Redux, Saga, React Router, Firebase, SASS",
    url: "https://react-meal-to-list.herokuapp.com"
  },
  {
    description:
      "'Expensify' is a responsive expense tracking application and the final project in the 'Complete React Developer' course by Andrew Mead. It allows the user to record expenses and sort through them by date, amount, and description.",
    image: "expensify",
    name: "expensify",
    sourceCode: "https://github.com/jakewitcher/react_course_expensify",
    tools: "React, Redux, Thunk, React Router, Firebase, SASS",
    url: "https://react-2-expensify.herokuapp.com"
  },
  {
    description:
      "'The Pantry' is a proof of concept web application that makes donating to local shelters easy. The code for this project was written by John Son, Melissa Thompson, and myself at the 2018 HackCincy hackathon and won the Cincinnati prize track sponsored by Calibrity. The source code is available on GitHub however the project is not yet to be deployed.",
    image: "pantry",
    name: "the pantry",
    sourceCode: "https://github.com/jakewitcher/hackcincy-2018-frontend",
    tools:
      "React, Redux, Saga, React Router, Styled Components, Google Maps and Google Places APIs",
    url: ""
  },
  {
    description:
      "This website was the first project I built incorporating TypeScript with React. It is styled by hand using CSS and SASS and is hosted on Netlify.",
    image: "portfolio",
    name: "portfolio",
    sourceCode: "https://github.com/jakewitcher/React_Portfolio",
    tools: "React, TypeScript, SASS",
    url: ""
  }
];
