import '../styles/globals.css'
import { useState, useEffect } from 'react'
import GlobalUserGroup from '../context/GlobalContext'

import {Amplify} from 'aws-amplify';
import awsExports from '../aws-exports'

Amplify.configure({
    ...awsExports,
    ssr: true
})


function MyApp({ Component, pageProps }) {
    
    const initialState = 'under13'
    const [userGroup, setUserGroup] = useState(initialState)

    useEffect(() => {
        const ageGroup = localStorage.getItem('user-group')
        if (ageGroup) {
            setUserGroup(ageGroup)
        } else {
            setUserGroup(localStorage.setItem('user-group', 'under13'))
        }
    }, [userGroup])

    return (
        <GlobalUserGroup.Provider value={{ userGroup, setUserGroup }}>
            <Component {...pageProps} />
        </GlobalUserGroup.Provider>
    )
}

export default MyApp
