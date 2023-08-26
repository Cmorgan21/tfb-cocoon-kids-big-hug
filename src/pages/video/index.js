import Layout from '../../components/layout/Layout'
import useSWR from 'swr'
import VideoPage from '../../components/video/videoCards'
const fetcher = (url) => fetch(url).then((res) => res.json())


export default function Emotion() {
    const { data, error } = useSWR('/api/staticdata', fetcher)
    if (error) return <div>Failed to load</div>
    if (!data) return <div>Loading...</div>
    const wholeFile = JSON.parse(data)
    const video = wholeFile['video']

    return (
        <Layout>
             <div className="container">
                <h1 className="title">Vidoes</h1>

                <h2 className="text-center subtitle">
                    These videos are designed to help you calm down and feel better.
                </h2>
                <div className="lead lead--chat ms-md">
                    
                </div>
                <VideoPage videos={video}/>
            </div>
        </Layout>
    )
}
