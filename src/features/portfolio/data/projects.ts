import type { Project } from "../types/projects";

export const PROJECTS: Project[] = [
  {
    id: "hacktoberfest-2025",
    title: "Hacktoberfest 2025",
    period: {
      start: "10.2025",
      end: "10.2025",
    },
    link: "https://www.holopin.io/@prashantthakur77#",
    skills: [
      "Open Source",
      "GitHub",
      "Vue.js",
      "Design Systems",
      "Accessibility",
    ],
    description: `Contributed multiple merged pull requests during Hacktoberfest 2025.
- Contributed to Learning Equality and other open-source organizations
- Migrated UI components to Kolibri Design System
- Improved accessibility and UI consistency`,
  },
  {
    id: "myportfolio",
    title: "Personal Portfolio",
    period: {
      start: "12.2024",
    },
    link: "https://github.com/Prashant-thakur77/myportfolio",
    skills: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "MDX",
      "Portfolio",
      "SEO",
    ],
    description: `A modern, responsive developer portfolio showcasing my projects, open-source contributions, and technical journey.
- Built with Next.js and Tailwind CSS
- Includes blog, Hacktoberfest write-ups, and project showcases
- Optimized for performance, accessibility, and SEO`,
    isExpanded: true,
  },

  {
    id: "medivault",
    title: "MediVault (DMEDS+)",
    period: {
      start: "02.2025",
    },
    link: "https://github.com/Prashant-thakur77/DMEDS-",
    skills: [
      "Blockchain",
      "Ethereum",
      "Solidity",
      "React",
      "Node.js",
      "IPFS",
      "Pinata",
      "Web3.js",
    ],
    description: `A decentralized medical record management system focused on privacy and secure data sharing.
- Stores medical records on IPFS using Pinata
- Smart contracts written in Solidity
- Wallet-based authentication using MetaMask
- Designed scalable frontend with React and Tailwind CSS`,
  },

  {
    id: "decentralized-fir",
    title: "Decentralized FIR Management System",
    period: {
      start: "04.2025",
    },
    link: "https://github.com/Prashant-thakur77",
    skills: [
      "Blockchain",
      "Ethereum",
      "Solidity",
      "React",
      "Node.js",
      "IPFS",
      "Web3",
    ],
    description: `A decentralized system for filing and tracking FIRs with separate user and police interfaces.
- Ensures transparency and immutability using blockchain
- Supports role-based access for civilians and police
- Stores FIR data securely using IPFS`,
  },
  {
    id: "hack-5-0",
    title: "Hack 5.0",
    period: {
      start: "03.2025",
    },
    link: "https://hack-5-0.vercel.app/",
    skills: [
      "Event Website",
      "React",
      "Next.js",
      "Tailwind CSS",
      "UI/UX",
      "Team Collaboration",
      "Deployment",
    ],
    description: `Official website for Hack 5.0, a national-level hackathon organized under CSEC.
- Designed and developed the complete event website
- Implemented sections for event details, timeline, prizes, sponsors, and FAQs
- Focused on responsive design and smooth user experience
- Collaborated with the organizing team for rapid iterations and updates
- Deployed and maintained the site during the event`,
  },

  {
    id: "academic-projects",
    title: "CP-31: Academic & Practice Projects",
    period: {
      start: "2024",
    },
    link: "https://github.com/Prashant-thakur77/cp-31",
    skills: ["C++", "Data Structures", "Algorithms", "OOP", "Problem Solving"],
    description: `A collection of academic and practice projects built as part of coursework and self-learning.
- Implemented core data structures and algorithms in C++
- Solved competitive programming problems on Codeforces and LeetCode`,
  },
];
