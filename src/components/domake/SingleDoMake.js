import Image from 'next/image'
import styles from '../../styles/Single.module.css'

const SingleDoMake = ({ domake }) => {
    return (
        <article className="container">
            <header>
                <h1 className="title">{domake.title}</h1>
            </header>
            <main className={styles.wrapper}>
                <header className={styles.header}>
                    {domake.src && (
                        <div className={styles.header__image}>
                            
                            <Image
                                src={`/assets/img/do/${domake.src}`}
                                alt={domake.title}
                                height={300}
                                width={300}
                            ></Image>{' '}
                        </div>
                    )}

                    <div className={styles.header__info}>
                        <p className="lead">{domake.description}</p>
                    </div>
                </header>
                <section>
                    <h2>How it Helps</h2>

                    <ul>
                        {domake['how-it-helps']?.map((how) => {
                            return <li key={how}>{how}</li>
                        })}
                    </ul>
                </section>

                {domake.caution ? (
                    <div className="caution">{domake.caution}</div>
                ) : (
                    ''
                )}
                {domake['materials'] && (
                    <section>
                        <h3>What you need</h3>
                        <ul className="list-style">
                            {domake['materials']?.map((item) => (
                                <li key={item}>{item}</li>
                            ))}
                        </ul>
                    </section>
                )}
                {domake['instructions'] && (
                    <section>
                        <h3>What to do</h3>
                        <div className={styles.mb2}>
                            {domake['instructions']?.map((item, index) => (
                                <div
                                    key={`item-${index}`}
                                    className={styles.flex__wrapper}
                                >
                                    <div className={styles.flex__image}>
                                        {item.src ? (
                                            <Image
                                                src={`/assets/img/do/${item.src}`}
                                                alt={item.title}
                                                height={150}
                                                width={150}
                                            ></Image>
                                        ) : (
                                            ''
                                        )}
                                    </div>
                                    <div className={styles.flex__info}>
                                        <ol>
                                            {item.step?.map((item) => (
                                                <li key={item}>{item}</li>
                                            ))}
                                        </ol>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                )}
            </main>
        </article>
    )
}

export default SingleDoMake
