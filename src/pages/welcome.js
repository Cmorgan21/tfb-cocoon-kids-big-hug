import Layout from '../components/layout/Layout'
import Emotions from '../components/emotions/Emotions'
import WhatToDo from '../components/WhatToDo'
import useSWR from 'swr'

import CircularProgress from '@mui/material/CircularProgress'

const fetcher = (url) => fetch(url).then((res) => res.json())

export default function Welcome() {
    const { data, error } = useSWR('/api/staticdata', fetcher)

    //Handle the error state
    if (error) return <div>Failed to load</div>
    //Handle the loading state
    if (!data)
        return (
            <div className="full_page bg-under13">
                <div>
                    <CircularProgress /> Loading
                </div>
            </div>
        )

    const json = JSON.parse(data)

    return (
        <Layout pageTitle="User Group">
            <Emotions emotions={json.emotions} length={29} />
            <WhatToDo />
        </Layout>
    )
}
