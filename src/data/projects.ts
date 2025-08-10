import type { Project } from "@/types/projectType";

export const projects: Project[] = [{
    title: "Budget-Buddy",
    description: "A desktop application for local expense tracking featuring interactive charts and visualisations to help users better understand and manage their finances",
    tech: ["Typescript", "TailwindCSS", "React", "Electron", "Sqlite", "Redux"],
    year: 2025,
    status: "Completed",
    image: "/budget-buddy.png",
    repo: "https://github.com/27July/budget-buddy",
},
{
    title: "ChildConnect",
    description: "A cross-platform mobile application for educators designed to streamline communication between educators and parents, featuring child tracking, real-time messaging with translation and speech integration, homework or document sharing and attendance management",
    tech: ["Typescript", "Python", "TailwindCSS", "React Native", "Expo", "FastAPI", "Firebase"],
    year: 2025,
    status: "Completed",
    image: "/childconnect.png",
    repo: "https://github.com/27July/childconnect",
},
{
    title: "Verify-AI-Chrome-Extension",
    description: "A chrome extension that empowers users to verify textual misinformation and deepfake images using machine learning modals directly within their browser. Submitted as part of my hackathon entry for NTU Techfest 2025",
    tech: ["Javascript", "Python", "HTML", "CSS", "FastAPI", "Perplexity API"],
    year: 2025,
    status: "Completed",
    image: "/verifyAI.png",
    repo: "https://github.com/27July/Verify-AI-Chrome-Extension",
},
{
    title: "Hospital Management System",
    description: "A command-line hospital management system built upon core Object-Oriented Programming principles",
    tech: ["Java"],
    year: 2024,
    status: "Completed",
    image: "/HMS.png",
    repo: "https://github.com/27July/SC2002-Hospital-Management-System",
},
{
    title: "Heart Disease Prediction",
    description: "A machine learning project utilising decision trees, random forest and logistical regression to predict whether a patient has heart disease",
    tech: ["Python", "Numpy", "Pandas", "Scikit-learn", "Matplotlib", "Decision Trees", "Random Forest", "Logistical Regression"],
    year: 2024,
    status: "Completed",
    image: "/heartDiseasePrediction.png",
    repo: "https://github.com/27July/SC1015-Heart-Disease-Prediction",
}
]