export interface ExperienceInterface {
    name: string;
    description: string[];
    date: string;
    role: string;
    link?: string;
}

export const experiences: ExperienceInterface[] = [
    {
        name: "JumpStart",
        description: ["Co-founded JumpStart to provide structured development opportunities for college students, connecting product owners with project managers and developers to create products.",
            "Recruited 20+ exceptional students from multiple universities, equipping them with a comprehensive framework to design and develop production-ready applications utilizing cutting-edge technologies such as AWS and React.",
            "Managed program logistics to enhance operational efficiency and foster better engagement between students and business partners to ensure effective collaboration and project execution",
        ],  
        date: "January 2023 - Present",
        role: "Co-Founder",
        link: "https://www.jumpstart-tech.com/"
    },
    {
        name: "CGI",
        description: ["Worked on the design process for the frontend and backend components of the CPA board application, using AWS serverless functions and created a cohesive architecture.",
            "Contributed to over 300 requirement documents, enhancing client communication and project clarity in collaboration with the requirements gathering team.",
            "Designed and implemented a robust frontend codebase for the administration team of a global accounting board, and created an intuitive user interface that increased user satisfaction by 80%.",
            "Transitioned to backend development and focused on designing and leading the development of secure and high-performing serverless functions using AWS services and tools, including Lambdas, RDS, DynamoDB, CloudWatch, and Step Functions."
        ],
        date: "June 2021 - August 2023",
        role: "Software Engineer"
    },

    {
        name: "Rise",
        description: ["Worked with a team of 2 project managers, 2 designers, and 8 engineers to create a mobile application which bridges social media and social impact by connecting people to major world events.",
            "Utilized React Context API for efficient state management, ensuring centralized and easily accessible state across different components.",
            "Followed the agile workflow with weekly team meetings and daily standups."
        ],
        date: "June 2020 - September 2020",
        role: "Software Engineer"
    }
];
