import styles from './About.module.css';

export default function About() {
    const skills = [
        "JavaScript (ES6+)", "React.js", "Next.js", "Node.js", "CSS Modules", "Git", "API Design", "Responsive Web Design"
    ];

    return (
        <section id="about" className={styles.about}>
            <div className={styles.container}>
                <h2 className={styles.heading}>About Me</h2>
                <div className={styles.content}>
                    <div className={styles.text}>
                        <p>
                            I am a dedicated developer with a knack for solving complex problems through code.
                            My journey started with a curiosity for how things work on the internet, and it has evolved into a career
                            building robust web applications.
                        </p>
                        <p>
                            I focus on writing clean, maintainable code and accessible user interfaces.
                            Whether working on the frontend or backend, I strive for excellence in every project.
                        </p>
                    </div>
                    <div className={styles.skills}>
                        <h3>Skills</h3>
                        <div className={styles.skillGrid}>
                            {skills.map((skill, index) => (
                                <span key={index} className={styles.skillItem}>{skill}</span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
