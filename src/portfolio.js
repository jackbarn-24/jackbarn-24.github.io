/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Jack Barnett's Portfolio",
  description:
    "With a love of learning and a knack for creation, I find joy in cultivating new skills. Join me on this journey where passion meets proficiency, and together, we'll bring ideas to life.",
  og: {
    title: "Jack Barnett's Portfolio",
    type: "website",
    url: "https://jackbarn-24.github.io",
  },
};

//Home Page
const greeting = {
  title: "Jack Barnett",
  logo_name: "JackBarnett",
  nickname: "Developer/Creative/Explorer",
  subTitle:
    "With a love of learning and a knack for creation, I find joy in cultivating new skills. Join me on this journey where passion meets proficiency, and together, we'll bring ideas to life.",
  resumeLink:
    "https://docs.google.com/document/d/1saBQbPt7s9r4Yrhy-vpxn2zWOZmUG544i72UvPNCfI4/edit?usp=sharing",
  portfolio_repository: "",
  githubProfile: "https://github.com/jackbarn-24",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/jackbarn-24",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/jack-barnett-a9432b187/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:jack@thirdstar.org",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
];

const skills = {
  data: [
    {
      title: "Web and Software Developer",
      fileName: "DataScienceImg",
      skills: [
        "- Building visually appealing, highly reactive websites",
        "- Creating neural networks for computer vision and NLP projects",
        "- Designing applications and tools for school and for hackathons in python, java, and C++"
      ],
      softwareSkills: [
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Java",
          imageSrc: "java.png"
        },
        {
          skillName: "C++",
          imageSrc: "C++.png"
        },
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          }, 
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos-pytorch",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Deep Learning",
          imageSrc: "deeplearning_ai_logo.png",
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
      ],
    },
    {
      title: "Data Analysis and Search Engine Optimization",
      fileName: "FullStackImg",
      skills: [
        "- Collaborating with clients in a variety of business sectors to improve their Google rankings",
        "- Utilizing a variety of tools to identify the root of complex SEO problems through technical audits and provide data driven recommendations",
      ],
      softwareSkills: [
        
        {
          skillName: "Google Analytics",
          imageSrc: "ga.png"
        },
        {
          skillName: "Ahrefs",
          imageSrc: "ah.png"
        },
        {
          skillName: "Screaming Frog",
          imageSrc: "sf.png"
        },
        {
          skillName: "SEOClarity",
          imageSrc: "seoclarity.png"
        },
        
        {
          skillName: "SEMRush",
          imageSrc: "semrush.png"
        },
        {
          skillName: "R",
          imageSrc: "R.png"
        },
        
      ],
    },
    {
      title: "Designing Physical and Virtual Games",
      fileName: "CloudInfraImg",
      skills: [
        "- Creating fun, unique, and interactive systems that players will enjoy and remember",
      ],
      softwareSkills: [
        {
          skillName: "Unity",
          imageSrc: "unity.png"
        },
        {
          skillName: "C#",
          imageSrc: "cs.png"
        },
      ],
    },
  ],
};

// Education Page


const degrees = {
  degrees: [
    {
      title: "Davidson College",
      subtitle: "B.S. in Computer Science",
      logo_path: "davidson.png",
      alt_name: "Davidson College",
      duration: "2020 - 2024",
      descriptions: [
        "Davidson college has provided me with a cutting edge computer science education, while allowing me to explore a variety of other disciplines.",
        "Relevant Coursework: Linear and Discrete Optimization, Deep Learning, Machine Learning, Data Structures, Discrete Structures, Critical AI studies, Game Development."
      ],
      website_link: "https://www.davidson.edu/",
    },
  ],
};

// Experience Page
const experience = {
  title: "Work and Volunteer Experience",
  subtitle: "I have diverse experience in both evolving startups and established companies, serving a variety of roles in SEO marketing, software engineering, and web development.",
  description:
    "",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Internships",
      work: true,
      experiences: [
        {
          title: "Digital Marketing Associate | Search Engine Optimization",
          company: "Red Ventures Optum Health",
          company_url: "https://rvohealth.com/",
          logo_path: "rvoh.jpg",
          duration: "May 2023 - August 2023",
          location: "Fort Mill, South Carolina",
          description: "RVOH builds and supports platforms that streamline  consumer access to health services and information.",
          action1: "Executed monthly keyword research and keyword drops for RVOH sites that the editorial team would use to publish content",
          action2: "Identified complex SEO problems using crawls and technical audits, recommended changes or improvements",
          action3: "Provided daily SEO recommendations to improve underperforming news articles",
          color: "#0879bf",
        },
        {
          title: "Software Engineering Intern",
          company: "Kodexa",
          company_url: "https://kodexa.ai/",
          logo_path: "kodexa.jpg",
          duration: "February 2022 - August 2022",
          location: "Charlotte, North Carolina",
          description: "Kodexa creates custom solutions to automate the extraction of unstructured data from documents using machine-learning models.",
          action1: "Developed, debugged, and tested Python code for Kodexa API",
          action2: "Resolved client implementation issues",
          action3: "Wrote developer documentation for the Kodexa API",
          color: "#0879bf",
        },
        {
          title: "Adventure Team Counselor",
          company: "Victory Junction",
          company_url: "https://victoryjunction.org/",
          logo_path: "vj.jpg",
          duration: "May 2021 - August 2021",
          location: "Randleman, North Carolina",
          description: "Victory Junction provides a transformational and empowering summer camp experience for young people suffering from disabilities.",
          action1: "Guided campers and their families through team-building tasks, group activities, and challenging experiences",
          action2: "Facilitated safe and exhilarating experiences for campers on a zip line, 30ft swing, and 55 ft climbing tower",
          action3: "Learned how to lead, to resolve conflicts, and to improvise innovative solutions even high-stress situations",
          color: "#0879bf",
        },
        {
          title: "Hammerseed",
          company: "Web Development and SEO intern",
          company_url: "https://hammerseed.com/",
          logo_path: "hammerseed.jpg",
          duration: "October 2020 - February 2021",
          location: "Davidson, North Carolina",
          description: "Hammerseed is a web design, SEO, and web development company that primarily works with small businesses in the Charlotte area.",
          action1: "Curated 34 weekly social media posts on Instagram, Facebook, and LinkedIn",
          action2: "Scouted and contacted local businesses with weak SEO",
          action3: "Measured the impact of SEO on client businesses with a variety of cutting edge tools",
          color: "#0879bf",
        },
      ],
    },
    {
      title: "Community Involvement ",
      work: false,
      experiences: [
        
        {
          title: "President",
          company: "Casual and Competitive Games Club",
          company_url: "",
          logo_path: "games.jpg",
          duration: "May 2022 - Present",
          location: "Davidson, North Carolina",
          description: "I managed a group of 12 elected board members to run weekly events for a club of 200 members. Under my leadership, the club's budget grew from 5,000$ to 12,000$. Additionally, I designed an organizational system for over 250 items of loanable equipment to maximize accessibility.",
          action1: "",
          action2: "",
          action3: "",
          color: "#0879bf",
        },
        {
          title: "Member and Hackathon Participant",
          company: "Hack@Davidson",
          company_url: "",
          logo_path: "hack.png",
          duration: "January 2021 - Present",
          location: "Davidson, North Carolina",
          description: "I participated in multiple workshops and lectures, improving upon my technical skills. I have also participated in three hackathons, where I won a category (and prize!) at each.",
          action1: "",
          action2: "",
          action3: "",
          color: "#0879bf",
        },
        {
          title: "Head Web Developer",
          company: "The Davidsonian",
          company_url: "",
          logo_path: "davidsonian.jpg",
          duration: "January 2023 - May 2023",
          location: "Davidson, North Carolina",
          description: "Collaborated with editors to create and update online site for the Davidson College newsletter. I also published and promoted articles onto the website.",
          action1: "",
          action2: "",
          action3: "",
          color: "#0879bf",
        },
        {
          title: "Humanities Fellow",
          company: "Davidson College Humanities Program",
          company_url: "",
          logo_path: "davidson.png",
          duration: "January 2022 - May 2022",
          location: "Davidson, North Carolina",
          description: "I panned activities, discussion sessions, and trips for a class of around 100 Humanities students. In addition to these responsibilities, I was also tasked with instructing first-year Humanities students in essay writing and analytical thinking.",
          action1: "",
          action2: "",
          action3: "",
          color: "#0879bf",
        }, 
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description:
    "I have worked on and published a few research papers and publications of my own.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "jack.png",
    description:
      "If you have any questions or want to collaborate on a future project, reach out to me through Linkedin or shoot me an email. I'm always more than happy to chat!",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "For individual fundamental empowerment, I like to write powerful lessons that create impact on each of the reader individually to change the core of their character.",
    link: "",
    avatar_image_path: "blogs_image.svg",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,

  degrees,
  experience,
  projectsHeader,
  publicationsHeader,
  contactPageData,
};
