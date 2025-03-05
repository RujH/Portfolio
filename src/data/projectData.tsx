// In src/data/projectData.tsx
export interface ProjectInterface {
    name: string;
    description: string;
    date: string;
    gitHubLink?: string;
    figmaLink?: string;
    webLink?: string;
    img: string[];
}



export const projects: ProjectInterface[] = [
    {
        name: "Recipe App",
        description: "Coming soon",
        date: "March 2025 - Present",
        figmaLink: "https://www.figma.com",
        img: ["/comingSoon.svg"]
    },
    {
        name: "Interactive 3D Store",
        description: "Sustainability in fashion is more than a trend—it’s a necessary shift. This 3D interactive website transforms learning into an experience, letting users explore a virtual store, interact with eco-friendly materials, and see the impact of their choices in real time.\n\nBuilt with WebGL and Three.js, the site blends storytelling and technology to showcase the lifecycle of clothing—from ethical sourcing to responsible recycling. Instead of passively reading about sustainability, visitors can engage, discover, and take action.",
        date: "June 2024 - August 2024", 
        gitHubLink: "https://github.com/rujh/task-manager",
        img: ["https://via.placeholder.com/150", "https://via.placeholder.com/150", "https://via.placeholder.com/150"]
    },
    {
        name: "Universal Data Website",
        description: "Every dataset tells a story, but raw data is often a chaotic mess. The Universal Data Website was built to bring structure and clarity, helping researchers, data scientists, and businesses efficiently label, categorize, and standardize large-scale information.\n\nWith a clean UI, real-time collaboration, and API integrations, this platform doesn’t just organize data—it makes knowledge actionable.",
        date: "September 2024 - December 2024",
        gitHubLink: "https://github.com/RujH/data-visualization-app",
        img: ["/projectImg/data1.png", "/projectImg/data2.png", "/projectImg/data3.png"]
    },
    {
        name: "Capstone Auto Parts",
        description: "In the auto industry, sustainability is often an afterthought. Millions of perfectly usable car parts end up in landfills each year, contributing to unnecessary waste. This San Diego-based small business set out to change that by creating a responsible, transparent marketplace for high-quality, ethically sourced car parts.\n\n This website provides:\n • A streamlined contact system, making it easy for customers and partners to reach out\n • A concise, visually engaging overview of their sourcing and reselling process\n • A direct link to their eBay store, where customers can browse and purchase available parts",
        date: "December 2024",
        gitHubLink: "https://github.com/RujH/CapstoneAutoParts",
        webLink: "https://capstoneautoparts.com/",
        img: ["/projectImg/car1.png", "/projectImg/car2.png", "/projectImg/car3.png"]
    },
    {
        name: "Portfolio Website",
        description: "My portfolio is designed to be interactive and visually dynamic, showcasing my work in a way that goes beyond traditional layouts. Inspired by Sawad and Mejed Alkoutaini, I focused on motion, depth, and responsiveness to create an engaging experience.",
        date: "February 2025",
        gitHubLink: "https://github.com/RujH/Portfolio",
        webLink: "https://rujportfolio.vercel.app/",
        img: []
    }
];
