import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button";
import { Project } from "@/types/projectType";
import Link from "next/link";
import Image from "next/image";

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({project}: ProjectCardProps){
    return(
        //ShadCN card component has a top padding so need to remove
        <Card className = "pt-0">
            {project.image &&(
                <Image
                src={project.image}
                alt={project.title}
                width={800}
                height={450}
                className = 'w-full h-auto rounded-t-md object-cover'
                //Do not lazy load it
                priority = {true}
                unoptimized = {true}/>
            )}
        <CardHeader className = "text-foreground">
            <CardTitle>{project.title}</CardTitle>
            <CardDescription>{project.description}</CardDescription>
        </CardHeader>
        <CardContent className = "text-foreground">
            <div>Made With:
                <ul className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                    <li
                    key={t}
                    className="rounded-md border px-2 py-0.5 text-xs"
                    >
                    {t}
                    </li>
                ))}
                </ul>
            </div>
        </CardContent>
        <CardFooter className = "flex flex-col items-start gap-3 text-foreground">
            {project.repo &&(<Button asChild><Link
            href = {project.repo}
            target = "_blank"
            rel = "noopener noreferrer">
                Checkout the repository here!
            </Link></Button>)}
            {project.demo &&(<Button asChild><Link
            href = {project.demo}
            target = "_blank"
            rel = "noopener noreferrer">
                Checkout the demo here!
            </Link></Button>)}
            <span className="ml-auto text-sm text-foreground italic">
            {project.status} · {project.year}
            </span>
        </CardFooter>
        </Card>
    );
}