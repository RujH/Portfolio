interface Tool {
    name: string;
    description: string;
    link: string;
    image: string;
}

export const tools: Tool[] = [
    {
        name: "Figma",
        description: "Design tool",
        link: "https://www.figma.com/",
        image: "/figma.svg"
    },
    {
        name: "React",
        description: "Frontend framework",
        link: "https://reactjs.org/",
        image: "/react.svg"
    },
    {
        name: "TypeScript",
        description: "JavaScript with types",
        link: "https://www.typescriptlang.org/",
        image: "/typescript.svg"
    },
    {
        name: "Python",
        description: "Programming language",
        link: "https://www.python.org/",
        image: "/python.svg"
    },
    {
        name: "Next.js",
        description: "React framework",
        link: "https://nextjs.org/",
        image: "/nextjs.svg"
    },
    {
        name: "Tailwind CSS",
        description: "CSS framework",
        link: "https://tailwindcss.com/",
        image: "/tailwind.svg"
    }
];
