import  ProjectGrid from "@/components/ui/projectGrid";
import { projects } from "@/data/projects";
import ContactSection from "@/components/ui/contact";

export default function Home() {
  return (
    <div className = "space-y-20 py-16">
      <section id = "about" className = 'space-y-6 scroll-mt-24'>
        <h1 className = "text-3xl font-semibold text-center">
          {"Hi, I'm Zi Hao👋"}
        </h1>
        <p className = "text-foreground leading-relaxed">
          {/* Change to string expression for eslint*/}
          {"I'm a Penultimate Computer Engineering student at Nanyang Technological University (NTU), Singapore, with a strong passion for Software Engineering, Data Science, and Artificial Intelligence. I'm currently working on expanding my skills through personal projects, coursework, and internships. Beyond academics, I enjoy reading, writing poetry, and playing basketball. I'm always keen to connect and collaborate, so feel free to check out my repositories or reach out!"}
        </p>
      </section>
      <section id = "projects" className = "scroll-mt-24 space-y-6">
        <h2 className="text-2xl font-bold">Projects</h2>
          <ProjectGrid projects={projects}/>
      </section>
      <section id = "contact" className = "scroll-mt-24">
        <ContactSection />
      </section>
    </div>
  );
}
