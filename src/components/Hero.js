import styles from './Hero.module.css';

export default function Hero() {
    return (
        <section className={styles.hero}>
            <div className={styles.heroContent}>
                <div className={styles.textContent}>
                    <p className={styles.greeting}>Hello, I am</p>
                    <h1 className={styles.name}>Nishkarsh Hublikar</h1>
                    <h2 className={styles.title}> Building Digital Experiences That Matter. </h2>
                    <p className={styles.subtitle}>
                        A Full Stack Developer passionate about crafting clean, efficient, and user-centric web applications.
                    </p>
                    <div className={styles.ctaGroup}>
                        <a href="#projects" className={styles.primaryButton}>View My Work</a>
                        <a href="/cv.pdf" target="_blank" rel="noopener noreferrer" className={styles.cvButton}>
                            Download CV
                        </a>
                        <a href="#contact" className={styles.secondaryButton}>Get In Touch</a>
                    </div>
                </div>

                <div className={styles.imageContent}>
                    {/* 
                      NOTE: For the best "pop up" effect, use a transparent PNG of yourself (no background).
                      The current image is a placeholder. 
                    */}
                    <img
                        src="https://png.pngtree.com/png-vector/20230918/ourmid/pngtree-man-in-shirt-smiles-and-gives-thumbs-up-to-show-approval-png-image_10094381.png"
                        alt="Nishkarsh Hublikar"
                        className={styles.profileImage}
                    />
                </div>
            </div>
        </section>
    );
}
