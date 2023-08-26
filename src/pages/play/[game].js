import SinglePlayGame from '../../components/playgame/SinglePlayGame'
import Layout from '../../components/layout/Layout'
import path from 'path'
import { promises as fs } from 'fs'

export async function getServerSideProps(context) {
    const param = context.params.game
    
    const jsonDirectory = path.join(process.cwd(), 'json')

    //Read the json data file data.json
    const fileContents = await fs.readFile(jsonDirectory + '/db.json', 'utf8')
    const data = JSON.parse(fileContents)
    const game = data['play-game'].filter((game) => game.id === +param)

    //Return the content of the data file in json format

    return { props: { game } }
}

export default function Emotion({ game }) {
    return (
        <Layout pageTitle="Game">
            <SinglePlayGame game={game[0]} />
        </Layout>
    )
}
