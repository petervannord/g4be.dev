import { Github, InstagramIcon, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border/40">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-muted-foreground">
              &copy; {currentYear} Gabe D. All rights reserved.
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <nav className="flex gap-6">
              <a
                href="#home"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Home
              </a>
              <a
                href="#about"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                About
              </a>
              <a
                href="#projects"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Projects
              </a>
              <a
                href="#contact"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Contact
              </a>
            </nav>

            <div className="flex gap-4">
              <a
                href="https://github.com/petervannord"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-4 w-4" />
              </a>
              <a
                href="https://instagram.com/gabedejan"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <InstagramIcon className="h-4 w-4" />
              </a>
              {/* <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-4 w-4" />
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
