import Layout from '../components/layout/Layout'
import Emotions from '../components/emotions/Emotions'
import WhatToDo from '../components/WhatToDo'
import { fetchData } from '../lib/FetchData'

export async function getStaticProps() {
    const emotions = await fetchData('emotions')
    return { props: { emotions } }
}

export default function Welcome({ emotions }) {
    return (
        <Layout pageTitle="User Group">
            <Emotions emotions={emotions} length={9} />
            <WhatToDo></WhatToDo>
        </Layout>
    )
}