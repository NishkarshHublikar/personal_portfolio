import styles from './Publications.module.css';
import Reveal from '@/components/Reveal';

export default function Publications() {
    const publications = [
        {
            title: "Comparative Analysis of Median, Gaussian, and Butterworth Filters Under Consistent and Varying Noise Conditions at Multiple Filter Sizes",
            conference: "2025 IEEE 2nd International Conference on Information Technology, Electronics and Intelligent Communication Systems (ICITEICS)",
            description: "Compared filters and minimized MSE across noise conditions.",
            link: "https://ieeexplore.ieee.org/document/11341237"
        }
    ];

    return (
        <section id="publications" className={styles.publications}>
            <div className={styles.container}>
                <Reveal>
                    <h2 className={styles.heading}>Selected Publications</h2>
                </Reveal>
                <div className={styles.list}>
                    {publications.map((pub, index) => (
                        <Reveal key={index} animationClass="reveal-up">
                            <div className={styles.item}>
                                <h3 className={styles.pubTitle}>
                                    <a href={pub.link} className={styles.link}>{pub.title}</a>
                                </h3>
                                <p className={styles.conference}>{pub.conference}</p>
                                <p className={styles.description}>{pub.description}</p>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
