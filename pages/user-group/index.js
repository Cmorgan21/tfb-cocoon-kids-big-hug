import Layout from '../../components/Layout'
import Emotions from '../../components/Emotions'
import WhatToDo from '../../components/WhatToDo'
import { fetchData } from '../../components/FetchData'

export async function getStaticProps() {
    const emotions = await fetchData('emotions')
    return { props: { emotions } }
}

export default function UserGroup({ emotions }) {
    return (
        <Layout pageTitle="User Group">
            <Emotions emotions={emotions} length={9} page={true} />
            <WhatToDo></WhatToDo>
        </Layout>
    )
}
