import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Real-time Chat App",
    description: "An application that can add to a website to achieve real-time chatting option. Main goal is to engage community interactions.",
    image: "/projects/project1.png",
    tags: ["Socket.io", "Express.js", "Node.js" , "HTML/CSS"],
    demoUrl: "#",
    githubUrl: "https://github.com/dulaj03/Live_ChatApp_WebSockets",
  },
  {
    id: 2,
    title: "Plant Optimizing System",
    description:
      "IoT based Smart Hydroponic system for monitor a full plant growth and all works done without any human interaction.",
    image: "/projects/project2.png",
    tags: ["Arduino", "PHP", "JavaScript" , "HTML/CSS" , "IoT" , "SQL"],
    demoUrl: "#",
    githubUrl: "https://github.com/dulaj03/Smart_HydroponicSystem_with_IoT",
  },
  {
    id: 3,
    title: "AQ Monitoring System",
    description:
      "The application is designed to facilitate air quality monitoring by integrating real-time data collection and display features.",
    image: "/projects/project3.png",
    tags: ["PHP", "Leaflet.js", "API" , "HTML/CSS" , "SQL"],
    demoUrl: "#",
    githubUrl: "https://github.com/dulaj03/PUSL2020_SDTP-WebDash",
  },
  {
    id: 4,
    title: "Movie Booking Application",
    description:
      "The application is designed for Moviegoers looking for a simple, fast, and interactive online booking experience.",
    image: "/projects/project3.png",
    tags: ["JSP", "Servlet", "MySQL" , "HTML/CSS" , "Jakarta"],
    demoUrl: "#",
    githubUrl: "https://github.com/dinoth03/PUSL2024_Group_i_ABC-Cinema",
  },
  {
    id: 5,
    title: "TechLink - Mobile App",
    description:
      "A comprehensive mobile platform connecting IT professionals, students, and enthusiasts in one integrated ecosystem.",
    image: "/projects/project3.png",
    tags: ["Dart", "Flutter", "Stripe" , "Firebase" , "AndriodStudio"],
    demoUrl: "#",
    githubUrl: "https://github.com/dulaj03/TechLink_MobileApp",
  },
  {
    id: 6,
    title: "GrowSmart - Web App",
    description:
      "Web-based gardening platform to empower users with tools such as real-time scenarios for better plant care, better gardening practices.",
    image: "/projects/project3.png",
    tags: ["PHP", "Node.js", "Express.js" , "Stripe" , "PHPMailer" , "SQL" , "HMTL/CSS"],
    demoUrl: "#",
    githubUrl: "https://github.com/dulaj03/GrowSmart_WebApplication",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/dulaj03"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
