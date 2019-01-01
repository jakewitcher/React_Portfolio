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
      "Do you have any idea how long it takes those cups to decompose. I was part of something special. So you two dig up, dig up dinosaurs? God help us, we're in the hands of engineers. Checkmate... Yeah, but John, if The Pirates of the Caribbean breaks down, the pirates don’t eat the tourists.",
    image: "/images/meal-to-list-edit.jpg",
    name: "meal to list"
  },
  {
    description:
      "We gotta burn the rain forest, dump toxic waste, pollute the air, and rip up the OZONE! 'Cause maybe if we screw up this planet enough, they won't want it anymore! I was part of something special. Hey, take a look at the earthlings. Goodbye! You're a very talented young man, with your own clever thoughts and ideas. Do you need a manager?",
    image: "/images/expensify-dashboard.jpg",
    name: "expensify"
  },
  {
    description:
      "I was part of something special. Did he just throw my cat out of the window? You know what? It is beets. I've crashed into a beet truck. You really think you can fly that thing? Yeah, but John, if The Pirates of the Caribbean breaks down, the pirates don’t eat the tourists.",
    image: "/images/the-pantry-map.jpg",
    name: "the pantry"
  },
  {
    description:
      "Must go faster. Yeah, but John, if The Pirates of the Caribbean breaks down, the pirates don’t eat the tourists. Eventually, you do plan to have dinosaurs on your dinosaur tour, right? You know what? It is beets. I've crashed into a beet truck. Yes, Yes, without the oops!",
    image: "/images/portfolio-home.jpg",
    name: "portfolio"
  }
];
