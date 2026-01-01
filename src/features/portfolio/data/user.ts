import type { User } from "@/features/portfolio/types/user";

export const USER = {
  firstName: "Prashant",
  lastName: "Thakur",
  displayName: "Prashant",
  username: "Prashant-thakur77",
  gender: "male",
  pronouns: "he/him",
  bio: "Building ideas, not just features.",
  flipSentences: [
    "Building ideas, not just features.",
    "Curious by default. Precise by choice.",
    "Open Source Contributor",
  ],
  address: "Himachal Pradesh, India",
  phoneNumber: "OTAxNTk1NDUwNw==", // E.164 format, base64 encoded (https://t.io.vn/base64-string-converter)
  email: "cHJhc2hhbnQxMDEwMDdAZ21haWwuY29t", // base64 encoded
  website: "https://github.com/Prashant-thakur77",
  jobTitle: "Open Source Developer",
  jobs: [
    {
      title: "Open Source Developer",
      company: "learning equality",
      website: "https://learningequality.org/",
    },
  ],
  //   about: `
  // Hello, World! I am Chánh Đại — a Design Engineer passionate about creating high-performance, user-centric software solutions with intuitive and engaging designs.

  // With 5+ years of experience, I specialize in building high-quality web and mobile applications using Next.js, React, TypeScript, and modern front-end technologies. Beyond work, I love exploring new technologies and turning ideas into reality through personal projects.

  // One of my key projects, [ZaDark](https://zadark.com), launched in 2022, enhances the Zalo experience on PC and Web, surpassing 80k+ downloads on [SourceForge](https://sourceforge.net/projects/zadark) and reaching 20k+ active users on the [Chrome Web Store](https://chromewebstore.google.com/detail/llfhpkkeljlgnjgkholeppfnepmjppob) (as of Sep 2025).

  // I'm also the creator of [React Wheel Picker](https://react-wheel-picker.chanhdai.com) — iOS-like wheel picker for React with smooth inertia scrolling and infinite loop support. It has earned 4k+ weekly downloads on [npm](https://www.npmjs.com/package/@ncdai/react-wheel-picker) and was selected for [▲Vercel OSS Program](https://vercel.com/blog/summer-2025-oss-program#react-wheel-picker) summer 2025 cohort.

  // Let's connect and collaborate!
  //   `,
  about: `
- **Computer Science undergraduate**(NITH) and builder, focused on crafting reliable, scalable, and user-focused software.
- Skilled in **C++**, **JavaScript**, **TypeScript**, **React**, **Next.js**, **Node.js**, and **Solidity**, with hands-on experience in full-stack and blockchain-based systems.
- Executive member at **GDG Hamirpur**, contributing to community building, technical workshops, and national-level tech events.
- Active **Open Source Contributor**:
  - 10+ merged PRs in **Learning Equality (Studio)**, migrating UI from Vuetify to Kolibri Design System (KDS)
  - Improved accessibility, design consistency, and performance through component-level contributions
- Competitive Programmer with a **1508 Codeforces Rating (Specialist)**, experienced in algorithmic problem-solving, data structures, and optimization under constraints.
`,

  avatar:
    "https://res.cloudinary.com/dkcrhkz4m/image/upload/v1767164303/Prashantth_uqox0y.png",
  ogImage:
    "https://assets.chanhdai.com/images/screenshot-og-image-light.png?v=4",
  namePronunciationUrl: "/audio/Prashantaudio.mp3",
  timeZone: "Asia/Kolkata",
  keywords: [
    "prashant thakur",
    "prashant thakur developer",
    "software engineer",
    "full stack developer",
    "react developer",
    "next.js",
    "blockchain developer",
    "solidity",
    "open source contributor",
    "nit hamirpur",
  ],

  dateCreated: "2025-01-01", // YYYY-MM-DD
} satisfies User;
