import type { Experience } from "../types/experiences";

export const EXPERIENCES: Experience[] = [
  {
    id: "learning-equality",
    companyName: "Learning Equality (Open Source)",
    companyLogo:
      "https://res.cloudinary.com/dkcrhkz4m/image/upload/v1767189454/lq1_v8u4rc.png",
    positions: [
      {
        id: "le-oss",
        title: "Open Source Contributor",
        employmentPeriod: {
          start: "10.2025",
        },
        employmentType: "Open Source",
        icon: "code",
        description: `- Contributed 10+ merged pull requests to Learning Equality Studio during Hacktoberfest 2025.
- Migrated UI components from Vuetify to Kolibri Design System (KDS) using Vue.js.
- Improved accessibility, design consistency, and overall UI performance.
- Collaborated with global maintainers through reviews, CI checks, and open-source workflows.
- Followed best practices for issues, pull requests, and documentation.`,
        skills: [
          "Vue.js",
          "Kolibri Design System",
          "Vuetify",
          "Accessibility",
          "Open Source",
          "GitHub",
          "Code Reviews",
          "CI/CD",
        ],
      },
    ],
    isCurrentEmployer: false,
  },

  {
    id: "gdg-hamirpur",
    companyName: "Google Developer Group (GDG) Hamirpur",
    positions: [
      {
        id: "gdg-exec",
        title: "Executive Member & Web Contributor",
        employmentPeriod: {
          start: "2024",
        },
        employmentType: "Community",
        icon: "business",
        description: `- Core executive member contributing to the growth and operations of GDG Hamirpur.
- Actively contributed to the development and maintenance of the GDG Hamirpur official website.
- Mentored juniors in web development, GitHub workflows, and open-source best practices.
- Supported and organized technical workshops, coding sessions, and developer meetups.
- Represented GDG Hamirpur in college and inter-college tech events including Nimbus 2k25.`,
        skills: [
          "Community Building",
          "Leadership",
          "Web Development",
          "React",
          "UI/UX",
          "GitHub",
          "Public Speaking",
          "Mentorship",
          "Event Management",
        ],
      },
    ],
    isCurrentEmployer: false,
  },

  {
    id: "csec",
    companyName: "Computer Science & Engineers Community (CSEC)",
    positions: [
      {
        id: "csec-organizer",
        title: "Organizer & Web Developer",
        employmentPeriod: {
          start: "06.2024",
          end: "06.2025",
        },
        employmentType: "Community",
        icon: "business",
        description: `- Organizer for Hack 5.0 under the Computer Engineers Community (CSEC).
- Coordinated team logistics and event execution.
- Developed and managed the official event website.
- Designed wireframes, fixed bugs, and created team and event sections.
- Participated in CodeWrap 2025.`,
        skills: [
          "Event Organization",
          "Web Development",
          "React",
          "Team Coordination",
          "Problem Solving",
        ],
      },
    ],
  },

  {
    id: "education",
    companyName: "Education",
    positions: [
      {
        id: "nit-hamirpur",
        title: "B.Tech in Computer Science & Engineering — NIT Hamirpur",
        employmentPeriod: {
          start: "08.2024",
          end: "05.2028",
        },
        icon: "education",
        description: `- Currently pursuing B.Tech in Computer Science & Engineering.
- CGPI: 9.65 (Top 3 among ~900 students).
- Ranked 1st in Computer Science branch.
- Strong focus on data structures, algorithms, and software engineering.`,
        skills: [
          "C++",
          "Data Structures",
          "Algorithms",
          "Operating Systems",
          "DBMS",
          "Software Engineering",
          "Problem Solving",
        ],
      },
      {
        id: "jnv-kangra",
        title: "Jawahar Navodaya Vidyalaya (JNV), Kangra — Class VI to XII",
        employmentPeriod: {
          start: "06.2018",
          end: "03.2024",
        },
        icon: "education",
        description: `- Completed schooling from Class 6 to Class 12 at JNV Kangra.
- Ranked 2nd in a regional-level Science Exhibition under JNV Samiti.
- Built a strong foundation in mathematics, science, and logical problem-solving.
- Actively participated in academic and technical competitions.`,
        skills: [
          "Mathematics",
          "Logical Reasoning",
          "Science",
          "Discipline",
          "Self-learning",
        ],
      },
    ],
  },
];
