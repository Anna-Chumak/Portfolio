import { faGithubSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelopeSquare } from "@fortawesome/free-solid-svg-icons";

export const menuItems = {
  Home: "#home",
  "About Me": "#aboutMe",
  Projects: "#projects",
  Resume: "#",
};

export const socialLinks = [
  [faLinkedin, "https://www.linkedin.com/in/anna-kuzava/"],
  [faEnvelopeSquare, "mailto: annutack@gmail.com"],
  [faGithubSquare, "https://github.com/Anna-Chumak"],
];

export const introText = [
  "Hello, I'm Anna Kuzava.",
  "I'm a Software Engineer.",
  "Welcome to my personal portfolio.",
];

export const projectsInfo = [
  {
    title: "Dyvosvit",
    description:
      "This is a basic website developed using only CSS and HTML. The main objective was to introduce a business to existing and potential customers. Within the website, a wide variety of components and techniques were used including grid, flexbox, animation, icons and play with colors and transparency.",
    environment: ["Environment", "CSS, HTML5"],
    link: ["Link to website", "https://dyvosvit.netlify.app/"],
    pictures: ["dyv1.jpg", "dyv2.jpg", "dyv3.jpg", "dyv4.jpg"],
  },
  {
    title: "Graph Memory Game",
    description:
      "This is a grid-based memory game where users are given a pattern and asked to replicate it. Level are generated randomnly, so each game plays out differently. In addition, users can customize their own color theme and it will be saved in Local Storage.",
    environment: ["Environment", "JS, CSS, HTML5"],
    link: ["Link to website", "https://graph-memory-game.netlify.app"],
    pictures: ["graph1.jpg", "graph2.jpg", "graph3.jpg", "graph4.jpg"],
  },
  {
    title: "Hangman Game",
    description:
      "This is a realization of the classic hangman game. The user is presented with the dashed, one for each letter, and by entering one letter a time, they are trying to guess, the word. If the lettter is in the word, then it is inserted instead of a corresponding dash or two. If the letter is not in the word, then a man on a guillotine appears line by line. The logic of this game was realized using C++, and the user interface was realized using Qt framework.",
    environment: ["Environment", "C++, Qt"],
    link: ["Link to GitHub", "https://graph-memory-game.netlify.app"],
    pictures: ["hangman1.jpg", "hangman2.jpg", "hangman3.jpg", "hangman4.jpg"],
  },
];
