import styles from '../../styles/ExpandedVideo.module.css'
import dynamic from 'next/dynamic'
import React from 'react';
import Image from 'next/image'

const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });


const ExpandedVideo = React.memo(({ videoData, onClose }) => {
    
    return (
        <div className={styles.overlay}>
            <div className={styles.centered}>
                   
                    <Image
                        src={`/assets/img/closebutton.jpg`}
                        alt=''
                        width={20}
                        height={20}
                        onClick={onClose}
                        className={styles.closeButton}
                    />
                  
                <div className={styles.title}>{videoData.title}</div>

                <div className={styles.videoWrapper}>
                    <ReactPlayer url={videoData.link} />
                </div>          
            </div>
        </div>
    );
});

ExpandedVideo.displayName = 'ExpandedVideo';

export default ExpandedVideo;