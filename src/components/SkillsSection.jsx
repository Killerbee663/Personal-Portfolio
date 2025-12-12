export const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30 ">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          <span className="inline-block px-4 py-2 rounded-4xl">
          My <span className="text-primary ">Skills</span>
          </span>
        </h2>

        <div className="max-w-3xl mx-auto">
          <div className="bg-card p-8 md:p-10 rounded-lg shadow-xs card-hover">
            <p className="text-lg leading-relaxed text-foreground/90">
              I love building things end-to-end. My focus has been on modern
              full-stack web development, and I'm comfortable moving between
              both sides of the application. I use{" "}
              <span className="text-primary font-semibold">React</span>,{" "}
              <span className="text-primary font-semibold">JavaScript</span>,
              and{" "}
              <span className="text-primary font-semibold">
                Tailwind CSS/Bootstrap
              </span>{" "}
              to create responsive and intuitive user interfaces. On the
              backend, I rely on{" "}
              <span className="text-primary font-semibold">Python</span> and{" "}
              <span className="text-primary font-semibold">Flask</span> for
              architecting REST APIs and managing data efficiently in SQL
              databases. Every project is a chance to solve a new challenge,
              manage my workflow through{" "}
              <span className="text-primary font-semibold">Git/GitHub</span>,
              and ultimately deliver a clean, functional application.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
