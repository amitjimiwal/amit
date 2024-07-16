export const Data = {
  name: "Amit Jimiwal",
  logo: "https://res.cloudinary.com/dejzy9q65/image/upload/v1710347316/sdsd_hrjhbt.jpg",
  // image: "https://res.cloudinary.com/dejzy9q65/image/upload/v1709027673/img_awoni2.jpg",
  image: '/pfp/profile.jpg',
  tagline: "Software engineer driven by learning and challenges.",
  nickname: "notamit",
  about: "I'm Amit, a Full Stack Engineer who's all about turning wild ideas into web apps. Always eager to learn , grow and solve problems. I'm final year CSE undergrad from MSIT , New Delhi. I'm always looking for opportunities to collaborate on exciting projects, so feel free to reach out!",
  contact: {
    email: "amitjimiwal45@gmail.com",
    github: "https://github.com/amitjimiwal",
    twitter: "https://twitter.com/notamit_dev",
    medium: "https://medium.com/@amitjimiwal",
    linkedin: "https://www.linkedin.com/in/amitjimiwal/",
    resume_link: "https://drive.google.com/file/d/1HTRaexEzZmMkPJagUzh9YNK-wB8ZOkXu/view?usp=sharing",
    instagram: "https://www.instagram.com/_amit.jimiwal_/",
    cal:'https://cal.com/amit-jimiwal/30min'
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
      logo:'/work/cbseguide.png'
    },
    {
      title: "FrontEnd Developer",
      company: "Doubtless",
      period: { start: "May 2023", end: "July 2023" },
      description: "Designed and implemented Doubtless app's website using ReactJs, enhancing user experience and navigation worked with firebase , focusing on backend driven UI.",
      url: "https://www.linkedin.com/company/doubtless46/posts/?feedView=all",
      logo:'/work/doubtless.jpeg'
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
      techStack: ["React", "Express", "Mediapipe", "OpenCV"]
    }
    // Add other projects similarly...
  ],
  blogs: [
    {
      title: "Git Sheet",
      description: "Git Commands and workflow for beginners",
      postDate: "April 20 2024",
      readTime: "15 min read",
      link: "https://amplified-stem-180.notion.site/Git-CheatSheet-d4a0affaf455420ba343b6c9bde91abe",
      topics: ["Git", "Github"]
    }
    // Add other blogs similarly...
  ]
};