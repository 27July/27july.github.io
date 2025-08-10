export type Project = {
    title: string;
    description: string;
    tech: string[];
    year: number;
    status: "Completed" | "In-Development" | "Upcoming";
    image?: string;
    logo?: string;
    repo?: string;
    demo?: string;
}