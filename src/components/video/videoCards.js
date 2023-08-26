
import React, { useState } from 'react';
import styles from '../../styles/Video.module.css';
import ExpandedVideo from './expandedVideo';
import dynamic from 'next/dynamic';
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import { v4 as uuidv4 } from 'uuid';

const ReactPlayer = dynamic(() => import('react-player'), { ssr: false });

const VideoCards = ({ videos }) => {
  const [expandedVideoData, setExpandedVideoData] = useState(null);

  const handleExpand = (eachVideo) => {
    setExpandedVideoData(eachVideo);
  };

  const handleClose = () => {
    setExpandedVideoData(null);
  };

  return (
    <section>
      <div className={styles.grid}>
        {videos.map((eachVideo) => (
          <div key={eachVideo.id} className={styles.card}>
            <FullscreenIcon className={styles.expandButton} onClick={() => handleExpand(eachVideo)} />
            <div className={styles.card__title}>{eachVideo.title}</div>
            <div>
              {
                <ReactPlayer
                  url={eachVideo.link}
                  className="react-player"
                  width="100%"
                  height="100%"
                  controls={false}
                />
              }
            </div>
            <div className={styles.card__description}>{eachVideo.description}</div>
            <div className={styles.card__tags}>
              {eachVideo.emotions.map((emotion) => (
                <div key={uuidv4()} className={styles.card__tag}>{emotion}</div>
              ))}
            </div>
          </div>
        ))}
      </div>
      {expandedVideoData && <ExpandedVideo videoData={expandedVideoData} onClose={handleClose} />}
    </section>
  );
};

export default VideoCards;