import styles from './Projects.module.css';

export default function Projects() {
    const projects = [
        {
            title: "E-Commerce Dashboard",
            description: "A comprehensive dashboard for managing products, orders, and analytics. Built with Next.js and Chart.js.",
            tags: ["Next.js", "Chart.js", "API"],
            link: "#"
        },
        {
            title: "To Do App",
            description: "A To-Do application which allows users to create, edit, and delete tasks.",
            tags: ["Node.js", "Supabase", "JavaScript"],
            link: "https://nishkarshhublikar.github.io/todo_list/"
        },
        {
            title: "Weather Forecast",
            description: "A beautiful weather application providing 7-day forecasts and historical data visualization.",
            tags: ["JavaScript", "OpenWeatherAPI", "CSS"],
            link: "#"
        }
    ];

    return (
        <section id="projects" className={styles.projects}>
            <div className={styles.container}>
                <h2 className={styles.heading}>Featured Projects</h2>
                <div className={styles.grid}>
                    {projects.map((project, index) => (
                        <div key={index} className={styles.card}>
                            <div className={styles.cardContent}>
                                <h3 className={styles.projectTitle}>{project.title}</h3>
                                <p className={styles.projectDesc}>{project.description}</p>
                                <div className={styles.tags}>
                                    {project.tags.map(tag => (
                                        <span key={tag} className={styles.tag}>{tag}</span>
                                    ))}
                                </div>
                                <a href={project.link} className={styles.link}>View Project &rarr;</a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
