export const myProjects = [
  {
    id: 1,
    title: "Serverless Blog Platform",
    description:
      "A fully serverless blogging app on AWS with Lambda, API Gateway, S3, and DynamoDB, featuring RESTful APIs and a responsive React frontend for scalable, secure content delivery.",
    subDescription : [
  "Engineered a serverless blog platform on AWS with auto-scaling and high availability, eliminating server management overhead.",
  "Deployed 10+ RESTful CRUD APIs via Lambda and API Gateway and optimized DynamoDB schema with GSIs for faster queries and lower costs.",
  "Launched a React frontend hosted on S3 with secure IAM policies, achieving reliable performance and 99.9% uptime."
],


    href: "https://github.com/HarshvardhanR/serverless-blog-platform",
    logo: "",
    image: "/assets/projects/skyposts.jpeg",
    tags: [
      {
        id: 1,
        name: "AWS DynamoDB",
        path: "/assets/logos/dynamodb.svg",
      },
      {
        id: 2,
        name: "AWS S3",
        path: "/assets/logos/s3.svg",
      },
      {
        id: 3,
        name: "React",
        path: "/assets/logos/react.svg",
      },
      {
        id: 4,
        name: "TailwindCSS",
        path: "/assets/logos/tailwindcss.svg",
      },
    ],
  },
  {
    id: 2,
    title: "Real-Time Chat Application",
    description:
      "A real-time messaging app with live messaging, typing indicators, and presence tracking. Features secure JWT authentication, modular REST APIs, and optimized WebSocket communication for efficient performance.",
    subDescription : [
  "Delivered a MERN-based chat app supporting live messaging, typing indicators, and presence tracking for 20+ concurrent users.",
  "Secured all API endpoints with JWT authentication and refresh tokens, and built modular REST APIs with full CRUD functionality for reliability.",
  "Optimized WebSocket communication over REST polling, reducing server CPU load by 30%."
],

    href: "https://github.com/HarshvardhanR/RealTimeChatApp",
    logo: "",
    image: "/assets/projects/chatApp.webp",
    tags: [
      {
        id: 1,
        name: "Express",
        path: "/assets/logos/express.svg",
      },
      {
        id: 2,
        name: "React",
        path: "/assets/logos/react.svg",
      },
      {
        id: 3,
        name: "MongoDB",
        path: "/assets/logos/mongodb.svg",
      },
      {
        id: 4,
        name: "TailwindCSS",
        path: "/assets/logos/tailwindcss.svg",
      },
    ],
  },
  {
    id: 3,
    title: "HTTP-Based Database Management System",
    description:
      "A RESTful API built with Node.js and Express, supporting flexible data storage with MongoDB and PostgreSQL, enhanced with Redis caching and RabbitMQ for high performance and transactional consistency.",
    subDescription : [
  "Developed a RESTful HTTP API with Node.js and Express for efficient database management and rapid prototyping.",
  "Integrated MongoDB and PostgreSQL, with Redis caching and RabbitMQ queues for fast, consistent data handling.",
  "Designed modular endpoints and service layers for scalable, maintainable MicroSaaS applications."
],

    href: "https://github.com/HarshvardhanR/http-dbms",
    logo: "",
    image: "/assets/projects/http.webp",
    tags: [
      {
        id: 1,
        name: "Express",
        path: "/assets/logos/express.svg",
      },
      {
        id: 2,
        name: "Redis",
        path: "/assets/logos/redis.svg",
      },
      {
        id: 3,
        name: "RabbitMQ",
        path: "/assets/logos/rabbitmq.svg",
      },
      {
        id: 4,
        name: "PostgreSQL",
        path: "/assets/logos/postgresql.svg",
      },
      {
        id: 5,
        name: "MongoDB",
        path: "/assets/logos/mongodb.svg",
      },
    ],
  },
  {
    id: 4,
    title: "World War III - A CLI-Based Game",
    description:
      "A Java-based command-line strategy game leveraging design patterns (Observer, MVC, Command, Strategy) for scalable gameplay. Features real-time asynchronous log tracing and automated Maven + Git CI/CD for efficient development and deployment.",
    subDescription : [
  "Led development of a CLI-based Risk-style strategy game in Java with a team of 6, delivered in 4 Scrum sprints.",
  "Applied Observer, MVC, Command, and Strategy patterns to reduce technical debt and simplify feature extensions.",
  "Built asynchronous log tracing and automated Maven + Git CI/CD deployment to improve debugging and speed up release cycles."
],

    href: "https://github.com/HarshvardhanR/World-War-III",
    logo: "",
    image: "/assets/projects/WW3.png",
    tags: [
      {
        id: 1,
        name: "Java",
        path: "/assets/logos/java.svg",
      },
      {
        id: 2,
        name: "Maven",
        path: "/assets/logos/maven.svg",
      },
      {
        id: 3,
        name: "Git",
        path: "/assets/logos/git.svg",
      },
    ],
  },
  {
    id: 5,
    title: "Flight Delay Prediction",
    description:
      "A predictive system using Python and machine learning to forecast flight delays. Incorporates feature engineering, model evaluation, and visualization, deployed via a Flask web app for real-time user interaction.",
    subDescription : [
  "Developed a predictive model to forecast flight delays using Python, leveraging historical flight data and relevant features.",
  "Applied machine learning algorithms with data preprocessing, feature engineering, and model evaluation to improve prediction accuracy.",
  "Visualized results using Matplotlib and Seaborn and deployed the model via a Flask web application for user interaction."
],

    href: "https://github.com/HarshvardhanR/Flight-Delay-Prediction",
    logo: "",
    image: "/assets/projects/fd.png",
    tags: [
      {
        id: 1,
        name: "Python",
        path: "/assets/logos/python.svg",
      },
      {
        id: 2,
        name: "Flask",
        path: "/assets/logos/flask.svg",
      },
      {
        id: 3,
        name: "CSS3",
        path: "/assets/logos/css3.svg",
      },
      {
        id: 4,
        name: "HTML5",
        path: "/assets/logos/html5.svg",
      },
    ],
  },
  {
    id: 6,
    title: "EEG Decoding for P300 Signals",
    description:
      "A machine learning and deep learning project analyzing EEG signals to classify P300 event-related potentials. Explored multiple model architectures and preprocessing techniques, achieving high accuracy and efficient signal decoding.",
    subDescription : [
  "Analyzed EEG signals to classify P300 event-related potentials using machine learning and deep learning models.",
  "Evaluated multiple architectures including EEGNet, DeepConvNet, ShallowConvNet, MAtt, MLP, and LSTM-CNN for accuracy and efficiency.",
  "Preprocessed EEG data and implemented feature extraction, achieving up to 92% classification accuracy with DeepConvNet."
],

    href: "https://github.com/HarshvardhanR/EEG-Decoding",
    logo: "",
    image: "/assets/projects/eeg.png",
    tags: [
      {
        id: 1,
        name: "Python",
        path: "/assets/logos/python.svg",
      },
      {
        id: 2,
        name: "Numpy",
        path: "/assets/logos/numpy.svg",
      },
      {
        id: 3,
        name: "Pandas",
        path: "/assets/logos/pandas.svg",
      },
      {
        id: 4,
        name: "TensorFlow",
        path: "/assets/logos/tensorflow.svg",
      },
    ],
  },
];

export const mySocials = [
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/harshvardhansingh-rao-a63929222/",
    icon: "/assets/socials/linkedIn.svg",
  },
  {
    name: "Github",
    href: "https://github.com/HarshvardhanR",
    icon: "/assets/socials/github.svg",
  },
  {
    name: "Leetcode",
    href: "https://leetcode.com/u/r_harshv/",
    icon: "/assets/socials/leetcode.svg",
  },
];

export const experiences = [
  {
    title: "Full Stack Developer Intern",
    job: "Media Platforms",
    date: "June 2021 - November 2021",
    contents: [
      "Optimized front-end performance, improving page load speed by 25% through restructuring HTML/CSS, removing render-blocking scripts, and implementing lazy loading strategies.",
      "Increased backend query performance by 30% by redesigning filtering logic and introducing targeted MongoDB indexing, reducing response times on high-traffic endpoints",
      "Redesigned and modularized React UI components, streamlining navigation workflows and enhancing filter precision, leading to a 20% increase in user engagement.",
      "Reduced API response latency by 15% by refactoring Django views and adopting asynchronous request handling, improving system scalability and user experience.",
    ],
  }
];