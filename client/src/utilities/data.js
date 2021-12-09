import { faGithubSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelopeSquare } from "@fortawesome/free-solid-svg-icons";

export const menuItems = {
  Home: "#home",
  "About Me": "#aboutMe",
  Projects: "#projects",
  Resume: "./assets/AnnaKuzava.pdf",
};

export const socialLinks = [
  [faLinkedin, "https://www.linkedin.com/in/anna-kuzava/"],
  [faEnvelopeSquare, "mailto: annutack@gmail.com"],
  [faGithubSquare, "https://github.com/Anna-Chumak"],
];

export const introText = [
  "Hello, I'm Anna Kuzava.",
  "I'm a Software Developer.",
  "Welcome to my personal portfolio.",
];

export const projectsInfo = [
  {
    title: "Dyvosvit",
    description:
      "This is a basic website developed using only CSS and HTML. The main objective was to introduce a business to existing and potential customers. Within the website, a wide variety of components and techniques were used including grid, flexbox, animation, icons and play with colors and transparency.",
    environment: ["Environment", "CSS, HTML5"],
    linkTitle: "Link to website",
    links: ["https://dyvosvit.netlify.app/"],
    pictures: ["dyv1.jpg", "dyv2.jpg", "dyv3.jpg", "dyv4.jpg"],
  },
  {
    title: "Graph Memory Game",
    description:
      "This is a grid-based memory game where users are given a pattern and asked to replicate it. Level are generated randomnly, so each game plays out differently. In addition, users can customize their own color theme and it will be saved in Local Storage.",
    environment: ["Environment", "JS, CSS, HTML5"],
    linkTitle: "Link to website",
    links: ["https://graph-memory-game.netlify.app"],
    pictures: ["graph1.jpg", "graph2.jpg", "graph3.jpg", "graph4.jpg"],
  },
  {
    title: "Hangman Game",
    description:
      "This is a replication of the classic hangman game. The user is given a word with all letters substituted with dashes. Entering one letter at a time, users have to guess the word. If the letter entered appears in the word, then it is inserted instead of any corresponding dashes. If the letter is not in the word, then a man on a guillotine appears line by line.",
    environment: ["Environment", "C++, Qt"],
    linkTitle: "Link to GitHub",
    links: ["https://github.com/Anna-Chumak/HangManCPlus"],
    pictures: ["hangman1.jpg", "hangman2.jpg", "hangman3.jpg", "hangman4.jpg"],
  },
  {
    title: "Notepad",
    description:
      "This is a replication of a simple notepad that has main functionality including: copy, paste, open file, save file, edit, search within the file, change font size and font family, etc.",
    environment: ["Environment", "WPF, C#, Pattern MVVM"],
    linkTitle: "Link to GitHub",
    links: ["https://github.com/Anna-Chumak/notepadWPF"],
    pictures: ["notepad1.jpg", "notepad2.jpg", "notepad3.jpg", "notepad4.jpg"],
  },
  {
    title: "Learn to Read Ukrainian",
    description:
      "This is a full-stack web application for children that are in the process of learning to read in Ukrainian. Children can choose any letter and play some games to memorize their shapes and learn to recognize them among other letters.",
    environment: [
      "Environment",
      "PHP, Pattern MVC, Laravel Framework, JS, HTML, CSS",
    ],
    linkTitle: "Link to video presentation (in Russian)",
    links: ["https://youtu.be/24rIAcF3hqA"],
    pictures: [
      "learnread1.jpg",
      "learnread2.jpg",
      "learnread3.jpg",
      "learnread4.jpg",
    ],
  },
  {
    title: "Small React Projects for FreeCodeCamp challenges",
    description:
      "This is a collection of small projects in React that were written to pass the test for FreeCodeCamp Front End Development Libraries Certification.",
    environment: ["Environment", "React, Styled Components, JS, API calls"],
    linkTitle: "Links to solutions",
    links: [
      "https://randomquote-annakuzava.netlify.app/",
      "https://drummachine-annakuzava.netlify.app/",
      "https://calculator-annakuzava.netlify.app/",
      "https://markdown-previewer-annakuzava.netlify.app/",
    ],
    pictures: ["react1.jpg", "react2.jpg", "react3.jpg", "react4.jpg"],
  },
];
