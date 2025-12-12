import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "PaperLight",
    description:
      `A social blogging app with posts, follows, private messaging, and multi-language support. Features include real-time notifications, AI-powered translation, and full-text search. Built for scalability and security, it demonstrates full-stack skills from database design to deployment and monitoring.`,
    image: "/projects/PaperLight.png",
    tags: [
      "Python",
      "SQLAlchemy",
      "PostgreSQL",
      "Elasticsearch",
      "Google Cloud",
      "REST API",
      "JavaScript",
      "Bootstrap",
      "i18n",
      "CSRF Protection",
      "SendGrid"
    ],
    demoURL: "https://paperlight.onrender.com/",
    githubURL: "https://github.com/Killerbee663/PaperLight",
  },
  {
    id: 2,
    title: "Coffee Radio",
    description:
      "A full-stack web application that combines coffee dataset analysis, AI-powered chat assistance, and genre-based music streaming for the ultimate coffee enthusiast experience.",
    image: "/projects/Coffee Radio.png",
    tags: [
      "HTML",
      "CSS",
      "JavaScript",
      "Flask",
      "Python 3.11",
      "Pandas",
      "SQLite",
      "REST API",
      "Groq API",
    ],
    demoURL: "https://coffee-radio.onrender.com/",
    githubURL: "https://github.com/Killerbee663/Coffee-Radio/tree/main",
  },
  {
    id: 3,
    title: "Findagrave Cemetery Scraper",
    description:
      "A Python web scraper that extracts memorial data from Find A Grave cemetery pages. It collects names, birth and death dates, veteran status, and grave locations, and exports the results to a CSV file.",
    image: "/projects/Findagrave Cemetery Scraper.png",
    tags: ["Python", "beautifulsoup4"],
    demoURL: "",
    githubURL: "https://github.com/Killerbee663/findagrave-cemetery-scraper",
  },
  {
    id: 4,
    title: "Rock Paper Scissors Game",
    description:
      "A fun and interactive web-based Rock Paper Scissors game where you play against a JavaScript-powered opponent. Choose your weapon, watch your opponent make their move, and see who wins!",
    image: "/projects/Rock Paper Scissors Game.png",
    tags: ["JS", "HTML", "CSS"],
    demoURL: "#",
    githubURL: "https://github.com/Killerbee663/rock-paper-scissors",
  },
  {
    id: 5,
    title: "Alien Invasion - A JavaScript Space Shooter",
    description:
      "Alien Invasion, a retro-style space shooter game built entirely with vanilla JavaScript and HTML5 Canvas. Blast aliens, dodge their descent, and climb the scoreboards!",
    image: "/projects/Alien Invasion.png",
    tags: ["JS", "HTML", "CSS"],
    demoURL: "https://alien-invasionz.netlify.app/",
    githubURL: "https://github.com/Killerbee663/mySpaceInvaders",
  },
  {
    id: 6,
    title: "Jammming – Spotify Playlist Creator",
    description:
      "Jammming is a React web app that allows users to search for songs using Spotify’s Web API and create custom playlists which can be saved directly to their Spotify account.(for trying the livedemo pls open it in incognito broswer window and use these credentials for spotify account{useername: cwdmwhqtchaxtsfhhl@fxavaj.com password: CaTzJmCs2m#v})",
    image: "/projects/Jammming – Spotify Playlist Creator.png",
    tags: ["JS", "HTML", "CSS", "React", "Spotify API"],
    demoURL: "https://jammingyo.netlify.app/",
    githubURL: "https://github.com/Killerbee663/Jamming-Spotify-API",
  },
  {
    id: 7,
    title: "Shopping Cart Web App",
    description:
      "A modern shopping cart web application built with React, React Bootstrap, and React Router.",
    image: "/projects/Shopping Cart Web App.png",
    tags: [
      "React",
      "HTML",
      "CSS",
      "JS",
      "React Bootstrap",
      "React Router",
      "TypeScript",
    ],
    demoURL: "",
    githubURL: "https://github.com/Killerbee663/Shopping-Cart-Web-App",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          <span className="inline-block px-4 py-2 rounded-4xl">
          Featured <span className="text-primary">Projects</span>
          </span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="relative group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden ">
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

                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="absolute bottom-4 left-4 flex space-x-3">
                    <a
                      href={project.demoURL}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      {project.demoURL.length > 1 ? (
                        <ExternalLink size={20} />
                      ) : null}
                    </a>
                    <a
                      href={project.githubURL}
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
            href="https://github.com/Killerbee663"
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
          >
            Check My GitHub <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
