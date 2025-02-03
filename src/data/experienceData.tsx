interface Experience {
    name: string;
    description: string;
    date: string;
    link: string;
}

export const experience: Experience[] = [
    {
        name: "Portfolio Website",
        description: "Personal portfolio built with Next.js, TypeScript, and Tailwind CSS",
        date: "December 2023",
        link: "https://github.com/rujh/portfolio"
    },
    {
        name: "Task Management App",
        description: "Full-stack task management application with React and Node.js",
        date: "November 2023", 
        link: "https://github.com/rujh/task-manager"
    },
    {
        name: "Weather Dashboard",
        description: "Real-time weather dashboard using OpenWeather API",
        date: "October 2023",
        link: "https://github.com/rujh/weather-dashboard"
    }
];
