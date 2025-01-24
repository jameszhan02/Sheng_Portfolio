import styles from './poster.module.css'

interface PosterProps {
    posterImgUrl: string
    avatorUrl: string
    title: string
}

const Poster: React.FC<PosterProps> = ({ posterImgUrl, avatorUrl, title }: PosterProps) => {
    return (
        <div className={styles.container}>
            <div className={styles.posterArea}>
                <img className={`${styles.images} ${styles.posterImage}`} src={posterImgUrl} alt="poster" />
            </div>
            <div className={styles.titleCardArea}>
                <div className={styles.cardAvator}>
                    <img className={styles.images} src={avatorUrl} alt="avator" />
                </div>
                <div className={styles.cardTitle}>
                    {title}
                </div>
            </div>
        </div>
    )
}

export default Poster