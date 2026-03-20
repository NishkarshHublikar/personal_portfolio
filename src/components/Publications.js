import styles from './Publications.module.css';

export default function Publications() {
    const publications = [
        {
            title: "Comparative Analysis of Median, Gaussian, and Butterworth Filters Under Consistent and Varying Noise Conditions at Multiple Filter Sizes",
            conference: "2025 IEEE 2nd International Conference on Information Technology, Electronics and Intelligent Communication Systems (ICITEICS)",
            description: "Compared filters and minimized MSE across noise conditions.",
            link: "https://ieeexplore.ieee.org/document/11341237"
        },
        /*{
            title: "Scalable Microservices Architecture for E-Commerce",
            conference: "Journal of Software Engineering, 2023",
            description: "A case study on migrating a monolithic application to a distributed system using Kubernetes.",
            link: "#"
        },
        {
            title: "User Experience Analysis in Modern Web Applications",
            conference: "HCI International, 2022",
            description: "Conducted user research on the impact of micro-interactions on user retention rates.",
            link: "#"
        }*/
    ];

    return (
        <section id="publications" className={styles.publications}>
            <div className={styles.container}>
                <h2 className={styles.heading}>Selected Publications</h2>
                <div className={styles.list}>
                    {publications.map((pub, index) => (
                        <div key={index} className={styles.item}>
                            <h3 className={styles.pubTitle}>
                                <a href={pub.link} className={styles.link}>{pub.title}</a>
                            </h3>
                            <p className={styles.conference}>{pub.conference}</p>
                            <p className={styles.description}>{pub.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
