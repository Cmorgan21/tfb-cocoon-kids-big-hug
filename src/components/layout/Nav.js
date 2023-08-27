import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import styles from '../../styles/Nav.module.css'
import { navMenu } from '../../const/menu'
import { Auth } from 'aws-amplify'
import { setCookie, getCookie, deleteCookie } from 'cookies-next'

import { useRouter } from 'next/router'

export default function Nav() {
    const user = getCookie('user')
    const [isNavOpen, setIsNavOpen] = useState(false)

    const router = useRouter()

    const handleSignout = () => {
        deleteCookie('user')
        deleteCookie('path')
        Auth.signOut()
    }

    const handleLogin = () => {
        setCookie('path', router.pathname)
    }
    return (
        <header>
            <nav className={styles.nav}>
                <div className={`${styles.logo} ${styles.container}`}>
                    <div className={styles.btn_container}>
                    <Link href="#" className={styles.logo__link}>
                            <Image
                                src="/assets/img/logo.jpg"
                                height={62}
                                width={70}
                                alt="Cocoon kids logo"
                            />
                            <span>Cocoon Kids Big Hug</span>
                        </Link>
                        <div>
                            {user ? (
                                <Link
                                    onClick={handleSignout}
                                    href="/welcome"
                                    className={styles.login}
                                >
                                    <span>Logout</span>
                                </Link>
                            ) : (
                                <Link
                                    href="/authenticate"
                                    className={styles.login}
                                    onClick={handleLogin}
                                >
                                    <span>Login</span>
                                </Link>
                            )}
                            
                        </div>
                    </div>
                    <div
                    >
                        <ul className={styles.menu__list}>
                            {navMenu.map((item) => {
                                return (
                                    <li
                                        key={item.name}
                                        className={styles.menu__list__item}
                                    >
                                        <Link href={item.route}>
                                            {item.name}
                                        </Link>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}
