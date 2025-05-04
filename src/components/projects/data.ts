export interface Project {
  title: string;
  description: string;
  tags: string[];
  github?: string;
  demo?: string;
  details?: string;
}

export const projects: Project[] = [
  {
    title: "Algorithmic Trading Strategies",
    description:
      "Full-featured stock trading strategy platform with predictive modeling, backtesting, and a Streamlit dashboard.",
    tags: [
      "Python",
      "Backtrader",
      "scikit-learn",
      "yfinance",
      "Streamlit",
      "Machine Learning",
      "Finance",
    ],
    github: "https://github.com/JSteveT/algorithmic-trading-strategies",
  },
  {
    title: "Online Payment Service",
    description:
      "Secure multi-user Django application for sending/receiving payments, managing balances, and tracking transaction history.",
    tags: [
      "Python",
      "Django",
      "SQLite",
      "Bootstrap",
      "Authentication",
      "Payments",
    ],
    github: "https://github.com/JSteveT/online-payment-service",
  },
  {
    title: "Personal Portfolio",
    description:
      "Modern dev portfolio built with React, Tailwind, and TypeScript.",
    tags: ["React", "Tailwind", "TypeScript"],
    github: "https://github.com/JSteveT/personal-portfolio",
  },
  {
    title: "Simple Weather API",
    description: "Node.js API delivering real-time weather data.",
    tags: ["Node.js", "Express", "API"],
    github: "https://github.com/JSteveT/simple-weather-api",
  },
];
