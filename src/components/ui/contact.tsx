import { Mail, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ContactSection() {
  return (
    <section id="contact" className="space-y-6">
      <h2 className="text-2xl font-bold">Get in Touch</h2>
      <p className="text-muted-foreground">
        Feel free to reach out via any of the following platforms:
      </p>
      <div className="flex flex-wrap gap-4">
        {/* Email */}
        <Button asChild className="gap-2">
          <Link href="mailto:weezihao@gmail.com">
            <Mail className="w-4 h-4" />
            Email
          </Link>
        </Button>

        {/* GitHub */}
        <Button asChild className="gap-2">
          <Link
            href="https://github.com/27July"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="w-4 h-4" />
            GitHub
          </Link>
        </Button>

        {/* LinkedIn */}
        <Button asChild className="gap-2">
          <Link
            href="https://www.linkedin.com/in/wee-zi-hao/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin className="w-4 h-4" />
            LinkedIn
          </Link>
        </Button>
      </div>
    </section>
  );
}
