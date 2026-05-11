import openAiLogo from "../../assets/icons/openai.svg";

const skillIcon = (id) => `https://skillicons.dev/icons?i=${id}`;
const brandIcon = (id) => `https://cdn.simpleicons.org/${id}`;
const brandIconColor = (id, color) => `https://cdn.simpleicons.org/${id}/${color}`;

export const skillCategories = [
    {
        id: "languages",
        label: "Languages & Scripting",
        cards: [
            {
                front: "HTML",
                badge: "HTML",
                logo: skillIcon("html"),
                back: [
                    "Semantic Markup",
                    "SEO Friendly Structure",
                    "Forms & Validation",
                    "Best Practices"
                ]
            },
            {
                front: "CSS",
                badge: "CSS",
                logo: skillIcon("css"),
                back: [
                    "Flexbox & Grid",
                    "Animations",
                    "Responsive Design",
                    "Sass / Tailwind"
                ]
            },
            {
                front: "JavaScript",
                badge: "JS",
                logo: skillIcon("js"),
                back: [
                    "ES6+ Features",
                    "Async/Await",
                    "DOM & Events",
                    "API Handling"
                ]
            },
            {
                front: "PHP",
                badge: "PHP",
                logo: skillIcon("php"),
                back: [
                    "Server Pages",
                    "Forms",
                    "Database Work",
                    "WordPress Support"
                ]
            }
        ]
    },
    {
        id: "frontend",
        label: "Frontend",
        cards: [
            {
                front: "React",
                badge: "Re",
                logo: skillIcon("react"),
                back: [
                    "Hooks",
                    "State Management",
                    "Routing",
                    "UI Optimization"
                ]
            },
            {
                front: "Redux",
                badge: "Rx",
                logo: skillIcon("redux"),
                back: [
                    "Store & Reducers",
                    "Actions",
                    "Manual Setup",
                    "Redux Toolkit"
                ]
            },
            {
                front: "Next.js",
                badge: "Nx",
                logo: skillIcon("nextjs"),
                back: [
                    "App Router",
                    "SSR / SSG",
                    "API Routes",
                    "SEO Ready Pages"
                ]
            },
            {
                front: "Bootstrap",
                badge: "Bs",
                logo: skillIcon("bootstrap"),
                back: [
                    "Grid System",
                    "Components",
                    "Responsive Layouts",
                    "Utility Classes"
                ]
            },
            {
                front: "Tailwind",
                badge: "Tw",
                logo: skillIcon("tailwind"),
                back: [
                    "Utility Classes",
                    "Responsive Design",
                    "Custom Theme",
                    "Fast UI Styling"
                ]
            },
            {
                front: "SCSS",
                badge: "Sc",
                logo: skillIcon("sass"),
                back: [
                    "Variables",
                    "Nesting",
                    "Mixins",
                    "Reusable Styles"
                ]
            },
            {
                front: "Chakra UI",
                badge: "Ch",
                logo: brandIconColor("chakraui", "319795"),
                back: [
                    "Component Library",
                    "Theme Tokens",
                    "Accessible UI",
                    "Responsive Props"
                ]
            }
        ]
    },
    {
        id: "backend",
        label: "Backend Database",
        cards: [
            {
                front: "Node.js",
                badge: "Nd",
                logo: skillIcon("nodejs"),
                back: [
                    "REST APIs",
                    "Express.js",
                    "Middleware",
                    "Authentication"
                ]
            },
            {
                front: "Express",
                badge: "Ex",
                logo: skillIcon("express"),
                back: [
                    "REST APIs",
                    "Middleware",
                    "Routing",
                    "Error Handling"
                ]
            },
            {
                front: "MongoDB",
                badge: "Mg",
                logo: skillIcon("mongodb"),
                back: [
                    "Mongoose",
                    "Data Modeling",
                    "Aggregation",
                    "CRUD Operations"
                ]
            },
            {
                front: "MySQL",
                badge: "SQL",
                logo: skillIcon("mysql"),
                back: [
                    "Relational Schema",
                    "Queries",
                    "Joins",
                    "CRUD Operations"
                ]
            },
            {
                front: "Firebase",
                badge: "Fb",
                logo: skillIcon("firebase"),
                back: [
                    "Authentication",
                    "Firestore",
                    "Hosting",
                    "Realtime Features"
                ]
            }
        ]
    },
    {
        id: "tools-ai",
        label: "Tools & AI",
        cards: [
            {
                front: "Git",
                badge: "Git",
                logo: skillIcon("git"),
                back: [
                    "Version Control",
                    "Branching",
                    "Merging",
                    "Best Practices"
                ]
            },
            {
                front: "GitHub",
                badge: "GH",
                logo: skillIcon("github"),
                back: [
                    "Repositories",
                    "Pull Requests",
                    "Actions",
                    "Collaboration"
                ]
            },
            {
                front: "VS Code",
                badge: "VS",
                logo: skillIcon("vscode"),
                back: [
                    "Extensions",
                    "Debugging",
                    "Shortcuts",
                    "Workspace Management"
                ]
            },
            {
                front: "WordPress",
                badge: "WP",
                logo: skillIcon("wordpress"),
                back: [
                    "Theme Customization",
                    "Plugins",
                    "Elementor / Gutenberg",
                    "Website Optimization"
                ]
            },
            {
                front: "Vite",
                badge: "Vi",
                logo: skillIcon("vite"),
                back: [
                    "Fast Dev Server",
                    "React Builds",
                    "HMR",
                    "Production Bundles"
                ]
            },
            {
                front: "Webpack",
                badge: "Wp",
                logo: skillIcon("webpack"),
                back: [
                    "Module Bundling",
                    "Loaders",
                    "Plugins",
                    "Build Optimization"
                ]
            },
            {
                front: "Cursor AI",
                badge: "CA",
                logo: brandIcon("cursor"),
                back: [
                    "AI Pair Coding",
                    "Codebase Chat",
                    "Refactors",
                    "Fast Prototyping"
                ]
            },
            {
                front: "Claude",
                badge: "Cl",
                logo: brandIcon("claude"),
                back: [
                    "Planning",
                    "Code Review",
                    "Debugging",
                    "Documentation"
                ]
            },
            {
                front: "Codex",
                badge: "Cx",
                logo: openAiLogo,
                back: [
                    "Agentic Coding",
                    "Repo Edits",
                    "Testing",
                    "Automation"
                ]
            },
            {
                front: "Gemini CLI",
                badge: "G",
                logo: brandIcon("googlegemini"),
                back: [
                    "Terminal AI",
                    "Code Search",
                    "Refactors",
                    "Workflow Help"
                ]
            }
        ]
    }
];
