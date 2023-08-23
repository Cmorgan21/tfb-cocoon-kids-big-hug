import Layout from '../components/layout/Layout'
import UserGroupBtn from '../components/UserGroupBtn'
import styles from '../styles/Landing.module.css'
import Nav from '../../src/components/layout/Nav'

export default function Landing() {
    return (
        <Layout isLanding={true} pageTitle="Landing">
            <div className="container mt-0">
                <header>
                    <h1 className="title">
                        Cocoon Kids Big Cuddles is a therapeutic service for
                        children and young people
                    </h1>
                </header>
                <section className="mb-lg">
                    <div className={styles.grid}>
                        <div
                            className={`${styles.grid__btn} ${styles['grid__btn--under13']}`}
                        >
                            <UserGroupBtn
                                route="/welcome"
                                userGroup="under13"
                                text={[
                                    <>
                                        I’m a child <span>under 13</span>
                                    </>,
                                ]}
                            />
                        </div>
                        <div
                            className={`${styles.grid__btn} ${styles['grid__btn--over13']}`}
                        >
                            <UserGroupBtn
                                route="/welcome"
                                userGroup="over13"
                                text={[
                                    <>
                                        I’m a child <span>over 13</span>
                                    </>,
                                ]}
                            />
                        </div>
                        <div
                            className={`${styles.grid__btn} ${styles['grid__btn--school']}`}
                        >
                            <UserGroupBtn
                                route="/schools"
                                userGroup="teacher"
                                text="I’m a teacher or professional"
                            />
                        </div>
                        <div
                            className={`${styles.grid__btn} ${styles['grid__btn--parent']}`}
                        >
                            <UserGroupBtn
                                route="/parents"
                                userGroup="parent"
                                text="I’m a parent or carer"
                            />
                        </div>
                    </div>
                </section>
            </div>
        </Layout>
    )
}
