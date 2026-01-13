export const experienceData = {
  jobs: [
    {
      company: "TopNetwork S.p.A.",
      title: "Software Developer",
      years: "2024 - Present",
      description: "Full time",
    },
    {
      company: "TopNetwork S.p.A.",
      title: "Internship",
      years: "April 2024 - June 2024",
      description: "",
    },
    {
      company: "Le vie dei tesori",
      title: "Front desk receptionist, guided tours, and surveillance",
      years: "2019 - 2020",
      description:
        "I carried out activities a tourist guide until the interruption due to the COVID-19 pandemic. Subsequently, I focused on translating into English for tourists eager to visit the sites once activities resumed.",
    },
  ],
};

export const educationData = {
  schools: [
    {
      name: "Web and Mobile Development ITS Steve Jobs Academy",
      degree: "Qualification: EQF level 5",
      years: "2022 - 2024",
      skills:
        "React, JavaScript, Angular, TypeScript, Next.js, Java, PHP, React Native, C, Flask, Python",
    },
    {
      name: "Political Science",
      degree: "International Relations",
      years: "2018 – 2022",
      skills:
        "Critical Thinking, Political Analysis, Writing and Communication, International Relations Theory, Public Speaking, Cultural Understanding, Empathy, Economic Analysis",
    },
  ],
};

const certificatesData = {
  certificates: [
    {
      name: "Boolean Data Week",
      description:
        "Boolean Data Week is a week of training on data analysis, data visualization and data science using Python, Pandas and Tableau.",
      institution: "Boolean",
      date: "2023",
    },
    {
      name: "Safety Worker training",
      description:
        "A.I.F.E.S. - Italian Association of Trainers and Experts in Safety Worker training general part and specific part - low risk (e-learning mode)",
      institution: "A.I.F.E.S.",
      date: "2019 - 2020",
    },
  ],
};

export const projects = [
  {
    name: "SnapClean",
    description:
    "SnapClean is a React Native mobile application that groups similar photos from the device gallery. Born from a personal need to organize and clean up photo collections, the app automatically identifies duplicate and similar images. Users can efficiently manage their photos with bulk deletion capabilities.", link: "https://github.com/chiaraferrara/snapclean",
    image: "/photos/snapcleanpreview.gif",
    technologies: ["React Native", "JavaScript"],
    date: "2026",
    features: [
      "Photo Grouping: Automatically groups similar and duplicate photos from the gallery.",
      "Bulk Deletion: Allows mass deletion of selected photos to free up storage space.",
      "Intuitive UI: Clean and user-friendly interface for managing photo collections.",
    ],
  },
  {
    name: "I Vinili Di Maurizio",
    description:
      "Virtual Vinyl Collection Manager is a user-friendly CRUD web application designed for organizing vinyl records. With features including user registration, login, adding, editing, and deleting records, along with a dashboard for user management, it offers a seamless experience for vinyl enthusiasts to curate their collections effortlessly. The project started as a team project during our Angular Classes and I implemented further database features. The name is a reference to our teacher, who taught us the use of Git and Angular.",
    link: "https://github.com/chiaraferrara/I_Vinili_Di_Maurizio",
    image: "/photos/vinili.gif",
    technologies: ["Angular", "Firebase", "Typescript"],
    date: "2023",
  },
  {
    name: "Elite Basketball",
    description:
      "A tournament management application for basketball developed using Next.js.",
    link: "https://github.com/chiaraferrara/elite-basketball-app",

    technologies: ["Next.js", "MySQL"],
    date: "2024",
    features: [
      "Login: Admin-only access to advanced features.",
      "Team Management: Admins can add new teams and players, assigning players to specific teams.",
      "Team Detail View: Users can view details of each team, including the coach and players.",
      "Score Management: System for managing game scores, following typical basketball logic.",
    ],
  },
  {
    name: "To do List",
    description:
      "The to-do list is a web application that allows users to create, edit, and delete tasks. It is a simple application that allows users to add, edit, and delete tasks. It is a simple application that allows users to add, edit, and delete tasks.",
    link: "https://github.com/chiaraferrara/Flask-for-Python",
    technologies: ["Flask", "Python"],
    date: "2023",
    features: [
      "Add Task: Users can add a task to the to-do list.",
      "Edit Task: Users can edit a task in the to-do list.",
      "Delete Task: Users can delete a task from the to-do list.",
    ],
  },
];
