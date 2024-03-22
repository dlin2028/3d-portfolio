import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  oppo,
  pap,
  fitch,
  elc,
  carrent,
  jobit,
  tripguide,
  threejs,
  cherry, crash, ebay, lc3, linux, riscv, trading, upmix,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "LLM Integrator",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Systems Engineer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    "title": "Data Research Intern",
    "company_name": "FitchSolutions",
    "icon": fitch,
    "iconBg": "#383E56",
    "date": "Jan 2024 - May 2024",
    "points": [
      "Rebuilt over 100GB of structured Fusion data to ElasticSearch using custom performance-optimized code, achieving a successful integration with an Elasticsearch test server in less than a week.",
      "Constructed schema for Elasticsearch from existing Fusion data and verified feature parity of new database.",
      "Completed project 6 weeks ahead of schedule despite team downsize of 30%, and proved ElasticSearch a viable alternative to Fusion saving Fitch over $100k/year in Fusion license fees."
    ]
  },
  {
    "title": "Backend AI Engineer Intern",
    "company_name": "Estee Lauder Companies Inc.",
    "icon": elc,
    "iconBg": "#E6DEDD",
    "date": "Jun 2023 - Aug 2023",
    "points": [
      "Brainstormed and developed a cutting-edge generative AI chatbot modeled to generate $1.8 million revenue.",
      "Crafted a business case through focus groups, expert consultations, and contact with the legal department, complemented by rigorous model-based analysis and calculations to validate the effectiveness of the proposal.",
      "Presented directly to the Global Brand President after receiving unprecedented approval from both our immediate manager and senior management—a first for any intern initiative."
    ]
  },
  {
    "title": "Systems Engineer Intern",
    "company_name": "OnePlus",
    "icon": oppo,
    "iconBg": "#383E56",
    "date": "Jun 2022 - Aug 2022",
    "points": [
      "Selected to spearhead an intern team project that involved orchestrating collaboration between local and international teams, navigating bilingual communication to ensure alignment with organizational goals.",
      "Ported and set up hardware-accelerated cross-compiling of existing cpp codebase for new prototype hardware.",
      "Developed a high efficiency, low-latency media streaming pipeline optimized for live online user interactions."
    ]
  },  
  {
    "title": "Part-time AR Developer",
    "company_name": "Potions and Pixels",
    "icon": pap,
    "iconBg": "#E6DEDD",
    "date": "Nov 2020 - Apr 2021",
    "points": [
      "Developed an advanced AR experience using Unity Engine and C# with ARFoundation, allowing users at specific locations, such as street corners, to interact with realistic Augmented Reality representations of historical structures and artifacts blended into their real-world surroundings.",
      "Secured $55k contract with demo, documented and designed the source code as the basis for the final product."
    ]
  }
];


const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Options Trading Bot",
    description: "Real-time quantitative options trading bot built on the QuantConnect platform. Used for backtesting and live paper trading my proprietary options valuation framework.",
    tags: [
      { name: "options", color: "blue-text-gradient" },
      { name: "quantconnect", color: "green-text-gradient" },
      { name: "quant", color: "pink-text-gradient" },
    ],
    image: trading, // Updated to trading.png
    source_code_link: "https://github.com/",
  },
  {
    name: "Cherry",
    description: "Web application that enables users to easily search for courses offered at UIUC.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "python", color: "green-text-gradient" },
      { name: "flask", color: "pink-text-gradient" },
    ],
    image: cherry, // Updated to cherry.png
    source_code_link: "https://github.com/",
  },
  {
    name: "ChannelAdder",
    description: "A tensorflow program which attempts to upmix stereo sound into 5.1 surround sound.",
    tags: [
      { name: "python", color: "blue-text-gradient" },
      { name: "tensorflow", color: "green-text-gradient" }, // Corrected typo in tag
      { name: "ML", color: "pink-text-gradient" },
    ],
    image: upmix, // Updated to upmix.png
    source_code_link: "https://github.com/",
  },
  {
    name: "Ebay UMLC",
    description: "eBay 2022 University Machine Learning Competition, placing top 10 with a 90% NER accuracy.",
    tags: [
      { name: "python", color: "blue-text-gradient" },
      { name: "SpaCy", color: "green-text-gradient" },
      { name: "NER", color: "pink-text-gradient" },
    ],
    image: ebay, // Updated to ebay.png
    source_code_link: "https://github.com/",
  },
  {
    name: "CrashModeArchitecture",
    description: "A buggy architecture which has its own programming and assembly language including an assembler, disassembler, compiler, and emulator.",
    tags: [
      { name: "C#", color: "blue-text-gradient" },
      { name: "asm", color: "green-text-gradient" },
      { name: "programming-languages", color: "pink-text-gradient" },
    ],
    image: crash, // Updated to crash.png
    source_code_link: "https://github.com/",
  },
  {
    name: "Linux Kernel",
    description: "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      { name: "linux", color: "blue-text-gradient" },
      { name: "systems-engineering", color: "green-text-gradient" },
      { name: "terminal", color: "pink-text-gradient" },
    ],
    image: linux, // Updated to linux.png
    source_code_link: "https://github.com/",
  },
  {
    name: "LC-3 in SystemVerilog",
    description: "Created a fully functional LC-3 Computer in SystemVerilog, which is an instruction set supported by gcc.",
    tags: [
      { name: "computer-engineering", color: "blue-text-gradient" },
      { name: "systems-engineering", color: "green-text-gradient" },
      { name: "system-verilog", color: "pink-text-gradient" },
    ],
    image: lc3, // Updated to lc3.png
    source_code_link: "https://github.com/",
  },
  {
    name: "RISC-V Processor Verification",
    description: "Wrote full instruction verification and cross-validation test bench for a RISC-V processor in system verilog.",
    tags: [
      { name: "computer-engineering", color: "blue-text-gradient" },
      { name: "systems-engineering", color: "green-text-gradient" },
      { name: "system-verilog", color: "pink-text-gradient" },
    ],
    image: riscv, // Updated to riscv.png
    source_code_link: "https://github.com/",
  },
];


export { services, technologies, experiences, testimonials, projects };
