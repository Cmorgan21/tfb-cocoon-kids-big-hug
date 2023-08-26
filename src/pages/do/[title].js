import SingleDoMake from '../../components/domake/SingleDoMake'
import Layout from '../../components/layout/Layout'
import path from 'path'
import { promises as fs } from 'fs'

export async function getServerSideProps({ params }) {
    // const domake = await fetchData(`do-make/?title=${params.title}`)

    const jsonDirectory = path.join(process.cwd(), 'json')
    //Read the json data file data.json
    const fileContents = await fs.readFile(jsonDirectory + '/db.json', 'utf8')
    const data = JSON.parse(fileContents)
    const domake = data['do-make'].filter(
        (domake) => domake.title === params.title
    )
    return { props: { domake } }
}

export default function SingleDoMakePage({ domake }) {
    return (
        <Layout pageTitle="Do/Make">
            <SingleDoMake domake={domake[0]} />
        </Layout>
    )
}
