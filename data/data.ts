export const Data = {
  name: "Amit Jimiwal",
  logo: "https://res.cloudinary.com/dejzy9q65/image/upload/v1710347316/sdsd_hrjhbt.jpg",
  // image: "https://res.cloudinary.com/dejzy9q65/image/upload/v1709027673/img_awoni2.jpg",
  image: '/pfp/profile.jpg',
  tagline: "Software engineer driven by learning and challenges.",
  nickname: "notamit",
  about: "I'm Amit, a **Full Stack Engineer** who's all about turning wild ideas into web apps. Always eager to learn , grow and solve problems. I'm final year CSE undergrad from [**MSIT , New Delhi**](https://msit.in). I'm always looking for opportunities to collaborate on exciting projects, so **feel free to reach out!**",
  resume_link: "https://drive.google.com/file/d/1HTRaexEzZmMkPJagUzh9YNK-wB8ZOkXu/view?usp=sharing",
  cal: 'https://cal.com/amit-jimiwal/30min',
  contact: {
    email: "mailto:amitjimiwal45@gmail.com",
    github: "https://github.com/amitjimiwal",
    twitter: "https://twitter.com/notamit_dev",
    medium: "https://medium.com/@amitjimiwal",
    linkedin: "https://www.linkedin.com/in/amitjimiwal/",
    instagram: "https://www.instagram.com/_amit.jimiwal_/",
  },
  skills: [
    { category: "languages", items: ["JavaScript", "Java", "TypeScript", "C++"] },
    { category: "tools", items: ["REACT", "NODEJS", "EXPRESS", "Firebase", "Github", "Git", "PostMan", "Redux", "MongoDB", "PostGreSQL", "NestJS"] },
    { category: "platform", items: ["Vercel", "Netlify"] }
  ],
  experience: [
    {
      title: "Full Stack Developer",
      company: "myCBSEguide",
      period: { start: "August 2023", end: "September 2023" },
      description: "Worked in building Examin8 UI in reactjs, optimizing the web application's performance and user experience. Collaborating with the development team to refactor and implement modern React components.",
      url: "https://mycbseguide.com",
      logo: '/work/cbseguide.png'
    },
    {
      title: "FrontEnd Developer",
      company: "Doubtless",
      period: { start: "May 2023", end: "July 2023" },
      description: "Designed and implemented Doubtless app's website using ReactJs, enhancing user experience and navigation worked with firebase , focusing on backend driven UI.",
      url: "https://www.linkedin.com/company/doubtless46/posts/?feedView=all",
      logo: '/work/doubtless.jpeg'
    }
  ],
  projects: [
    {
      name: "TypeSight",
      previewImage: "https://res.cloudinary.com/dejzy9q65/image/upload/v1715883883/Screenshot_Capture_-_2024-05-16_-_23-53-55_vl3tyg.png",
      description: "Improve your typing skills with our cutting-edge typing test featuring real-time eye movement detection.",
      links: {
        github_repo: "https://github.com/amitjimiwal/TypeSight",
        live_link: "https://typesight.vercel.app/"
      },
      techStack: ["React", "Express", "Mediapipe", "OpenCV", "websockets"]
    }, {
      name: "ReadLogs",
      previewImage: "https://res.cloudinary.com/dejzy9q65/image/upload/v1707657594/Screenshot_2024-02-11_at_6.48.03_PM_b0ulxs.png",
      description: "Efficiently Manage Your **Reads and Docs**. Get Daily reminders to read your docs.",
      links: {
        github_repo: "https://github.com/amitjimiwal/ReadLogs",
        live_link: "https://readlogs.vercel.app/",
      },
      techStack: [
        "React", "Appwrite", "TypeScript"
      ]
    },
    {
      name: "scrapyweb",
      previewImage: "/project/scrapyweb.png",
      description: "A web app that scrapes the web for you. Just enter the URL and get the **Open graph protocol** data of your websiote.",
      links: {
        github_repo: "https://github.com/amitjimiwal/scrapyweb",
        live_link: "https://scrapyweb.onrender.com/",
      },
      techStack: [
        "web scraping", "monorepo", "cheerio"
      ]
    },
    {
      name: "HealthCare_Web",
      previewImage: "https://res.cloudinary.com/dejzy9q65/image/upload/v1690118877/healthcare_rxsbtd.jpg",
      description: "A virtual AI-based assistant that **displays the user's health status using lab reports**. It also consists of an AI-based chatbot that is useful for people to ask queries.",
      links: {
        github_repo: "https://github.com/amitjimiwal/HealthCare-web",
        live_link: "https://health-care-web-umfn-alz6bffc4-access-denied69.vercel.app/",
      },
      techStack: [
        "MERN STACK", "AI-ML"
      ]
    },
    {
      name: "promfocus",
      previewImage: "/project/promfocus.png",
      description: "A timer app that helps you stay focused on your tasks. Purely based on **pomodoro technique**.",
      links: {
        github_repo: "https://github.com/amitjimiwal/promfocus-ts",
        live_link: "https://promfocus-ts.vercel.app/",
      },
      techStack: [
        "React", "Typescript", "Hooks"
      ]
    },
    {
      name: "Github-Wrapped",
      previewImage: "https://res.cloudinary.com/dejzy9q65/image/upload/v1702742821/Screenshot_2023-12-16_at_9.35.54_PM_r3eyfj.png",
      description: "Get Your **Github Year Recap** 🎉",
      links: {
        github_repo: "https://github.com/amitjimiwal/Github-Wrapped",
        live_link: "https://github-wrapped-three.vercel.app/",
      },
      techStack: [
        "Next", "ApolloClient", "TypeScript"
      ]
    },
  ],
  blogs: [
    {
      title: "Git Sheet",
      logoUrl: '/images/git.png',
      description: "Git Commands and workflow for beginners",
      postDate: "April 20 2024",
      readTime: "15 min read",
      link: "https://amplified-stem-180.notion.site/Git-CheatSheet-d4a0affaf455420ba343b6c9bde91abe",
      topics: ["Git", "Github"]
    },
    {
      title: "Hoisting In Javascript",
      logoUrl: '/images/javascript.png',
      description: "Understand the concept of hoisting of let/const vs var with practical examples.",
      postDate: "December 25 2023",
      readTime: "2 min read",
      link: "https://medium.com/@amitjimiwal/why-state-management-is-required-in-react-e4f0b3e6926d",
      topics: [
        "javascript", "hoisting"
      ]
    },
    {
      title: "Why state management is required in React ?",
      logoUrl: '/images/react.png',
      description: "Guide on why you require state management.",
      postDate: "April 27 2023",
      readTime: "2 min read",
      link: "https://medium.com/@amitjimiwal/why-state-management-is-required-in-react-e4f0b3e6926d",
      topics: [
        "react", "state-management"
      ]
    },
    {
      title: "Handling search queries",
      logoUrl: '/images/nodejs.png',
      description: "handle search queries on pressing enter in nodejs express framework",
      postDate: "July 31 2023",
      readTime: "2 min read",
      link: "https://amitjimiwal.medium.com/handling-search-queries-on-pressing-enter-in-two-steps-d9cf30149893",
      topics: [
        "nodejs", "express"
      ]
    },
    {
      title: "Express-app.all()",
      logoUrl: '/images/express.png',
      description: "middleware function for all the HTTP methods.",
      postDate: "June 12 2023",
      readTime: "2 min read",
      link: "https://medium.com/@amitjimiwal/handling-unhandled-routes-in-nodejs-app-all-afa988fc193",
      topics: [
        "react", "nodejs", "express", "mern"
      ]
    },
    {
      title: "Javascript console -console.table()",
      logoUrl: '/images/javascript.png',
      description: "aee array into a table format in the console",
      postDate: "May 11 2023",
      readTime: "1 min read",
      link: "https://medium.com/@amitjimiwal/better-way-to-see-array-of-objects-in-the-console-console-table-e0b8f9c6d4e4",
      topics: [
        "javascript", "console"
      ]
    }
  ]
};