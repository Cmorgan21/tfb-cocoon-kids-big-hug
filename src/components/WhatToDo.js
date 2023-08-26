import Link from 'next/link'

export default function WhatToDo() {
    return (
        <section className="mb-lg">
            <div className="container">
                <h2 className="title">What can I do today?</h2>

                <div className="shapes text-center">
                    <Link href={'/play'}>
                        <div className="shapes__item">
                            <svg
                                className="shapes__svg"
                                width="156"
                                height="151"
                                viewBox="0 0 156 151"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M150.457 14.7248C160.963 29.9383 151.19 59.6291 141.904 84.9031C132.864 110.177 124.067 131.28 107.207 141.831C90.5918 152.382 65.6685 152.628 44.4104 143.058C23.1523 133.488 5.80376 114.349 1.89423 93.246C-2.01531 71.8981 7.26984 48.8325 22.4193 32.6374C37.3244 16.4424 57.6051 7.36342 83.2614 3.19198C108.918 -0.979464 139.95 -0.243325 150.457 14.7248Z"
                                    fill="currentColor"
                                    stroke="url(#paint0_linear_154_59149)"
                                />
                                <defs>
                                    <linearGradient
                                        id="paint0_linear_154_59149"
                                        x1="1"
                                        y1="150"
                                        x2="149.919"
                                        y2="-3.91615"
                                        gradientUnits="userSpaceOnUse"
                                    >
                                        <stop stopColor="#EDE869" />
                                        <stop offset="1" stopColor="#EDE869" />
                                    </linearGradient>
                                </defs>
                            </svg>
                            <span className="shapes__title">Play games</span>
                        </div>
                    </Link>
                    <Link href={'/do'}>
                        <div className="shapes__item">
                            <svg
                                className="shapes__svg--lg"
                                width="136"
                                height="126"
                                viewBox="0 0 136 126"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M119.643 14.4732C132.499 26.3078 137.569 48.7024 133.767 70.5508C129.964 92.2172 117.47 113.519 99.3622 121.348C81.4356 129.177 58.2578 123.533 39.969 112.791C21.6802 101.867 8.64268 85.6626 3.39144 66.7273C-1.67871 47.792 1.21852 25.7615 12.9885 14.1091C24.7585 2.45656 45.2202 1 65.863 1C86.3247 1 106.967 2.63863 119.643 14.4732Z"
                                    fill="currentColor"
                                    stroke="url(#paint0_linear_154_59151)"
                                />
                                <defs>
                                    <linearGradient
                                        id="paint0_linear_154_59151"
                                        x1="1"
                                        y1="125"
                                        x2="124.628"
                                        y2="-8.59798"
                                        gradientUnits="userSpaceOnUse"
                                    >
                                        <stop stopColor="#EDE869" />
                                        <stop offset="1" stopColor="#EDE869" />
                                    </linearGradient>
                                </defs>
                            </svg>
                            <span className="shapes__title">
                                Do / Make something
                            </span>
                        </div>
                    </Link>
                    <Link href={'/help'}>
                        <div className="shapes__item">
                            <svg
                                className="shapes__svg--lg"
                                width="151"
                                height="143"
                                viewBox="0 0 151 143"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M143.072 16.7214C153.674 30.1582 150.348 54.3444 144.735 77.2902C138.914 100.236 130.598 121.942 113.551 133.104C96.504 144.267 70.5175 144.887 48.2731 135.172C26.2365 125.456 7.94202 105.404 2.74473 82.4582C-2.66047 59.5124 4.82364 33.4657 20.6234 18.7886C36.2153 4.31826 60.1229 1.21747 84.0305 1.01075C108.146 0.804029 132.677 3.49138 143.072 16.7214Z"
                                    fill="currentColor"
                                    stroke="url(#paint0_linear_154_59153)"
                                />
                                <defs>
                                    <linearGradient
                                        id="paint0_linear_154_59153"
                                        x1="1"
                                        y1="142"
                                        x2="141.786"
                                        y2="-6.77339"
                                        gradientUnits="userSpaceOnUse"
                                    >
                                        <stop stopColor="#EDE869" />
                                        <stop offset="1" stopColor="#EDE869" />
                                    </linearGradient>
                                </defs>
                            </svg>
                            <span className="shapes__title">
                                Chat to someone
                            </span>
                        </div>
                    </Link>
                    <Link href={'/join'}>
                        <div className="shapes__item">
                            <svg
                                className="shapes__svg--lg"
                                width="137"
                                height="127"
                                viewBox="0 0 137 127"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M32.6913 19.469C47.3542 7.64602 67.2524 -1.40905 85.1756 2.11096C103.099 5.63097 119.047 21.7261 128.199 40.4445C137.159 59.1073 139.516 80.449 131.408 94.7958C123.3 109.143 104.727 116.495 89.0225 121.13C73.126 125.709 59.9055 127.516 45.4643 125.63C31.215 123.8 15.6087 118.029 7.68998 106.554C-0.036638 95.1349 -0.211868 77.7636 4.35861 61.9751C8.79278 45.9384 18.0284 31.292 32.6913 19.469Z"
                                    fill="currentColor"
                                    stroke="url(#paint0_linear_154_59155)"
                                />
                                <defs>
                                    <linearGradient
                                        id="paint0_linear_154_59155"
                                        x1="117.152"
                                        y1="147.384"
                                        x2="28.2459"
                                        y2="-15.8771"
                                        gradientUnits="userSpaceOnUse"
                                    >
                                        <stop stopColor="#EDE869" />
                                        <stop offset="1" stopColor="#EDE869" />
                                    </linearGradient>
                                </defs>
                            </svg>
                            <span className="shapes__title"> Go somewhere</span>
                        </div>
                    </Link>
                    <Link href={'/video'}>
                        <div className="shapes__item">
                            <svg
                                className="shapes__svg--lg"
                                width="137"
                                height="127"
                                viewBox="0 0 137 127"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M32.6913 19.469C47.3542 7.64602 67.2524 -1.40905 85.1756 2.11096C103.099 5.63097 119.047 21.7261 128.199 40.4445C137.159 59.1073 139.516 80.449 131.408 94.7958C123.3 109.143 104.727 116.495 89.0225 121.13C73.126 125.709 59.9055 127.516 45.4643 125.63C31.215 123.8 15.6087 118.029 7.68998 106.554C-0.036638 95.1349 -0.211868 77.7636 4.35861 61.9751C8.79278 45.9384 18.0284 31.292 32.6913 19.469Z"
                                    fill="currentColor"
                                    stroke="url(#paint0_linear_154_59155)"
                                />
                                <defs>
                                    <linearGradient
                                        id="paint0_linear_154_59155"
                                        x1="117.152"
                                        y1="147.384"
                                        x2="28.2459"
                                        y2="-15.8771"
                                        gradientUnits="userSpaceOnUse"
                                    >
                                        <stop stopColor="#EDE869" />
                                        <stop offset="1" stopColor="#EDE869" />
                                    </linearGradient>
                                </defs>
                            </svg>
                            <span className="shapes__title"> Videos</span>
                        </div>
                    </Link>
                </div>
            </div>
        </section>
    )
}
