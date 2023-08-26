import styles from '../../styles/Activities.module.css'
import Link from 'next/link'
import Image from 'next/image'

const PlayGame = ({ games }) => {
    return (
        <section>
            <div className={styles.grid}>
                {games.map((game) => {
                    return (
                        <div key={game.id} className={styles.card}>
                            <div className={styles.card__header}>
                                {game.src ? (
                                    <Image
                                        src={`/assets/img/play/${game.src}`}
                                        alt={game.title}
                                        width={500}
                                        height={334}
                                        className={styles.card__image}
                                    />
                                ) : (
                                    ''
                                )}
                            </div>
                            <div className={styles.card__body}>
                                <h2 className={styles.card__title}>
                                    {game.name}
                                </h2>

                                <div>{game.description}</div>
                            </div>
                            <div className={styles.card__tags}>
                                {game.emotions.map((emotion) => (
                                    <span
                                        className={styles.card__tag}
                                        key={emotion}
                                    >
                                        {emotion}
                                    </span>
                                ))}
                            </div>
                            <Link
                                href={`/play/${game.id.toString()}`}
                                className="stretched-link"
                            >
                                {' '}
                            </Link>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default PlayGame
