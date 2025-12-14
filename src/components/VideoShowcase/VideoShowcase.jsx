import React, { memo, useState } from 'react';
import { FaPlay, FaVideo } from 'react-icons/fa';
import { SAMPLE_VIDEOS } from '../../utils/constants';
import styles from './VideoShowcase.module.css';

const VideoShowcase = memo(() => {
    const [playingVideo, setPlayingVideo] = useState(null);

    const handleVideoClick = (index) => {
        const videoElement = document.getElementById(`video-${index}`);
        if (videoElement) {
            if (videoElement.paused) {
                videoElement.play();
                setPlayingVideo(index);
            } else {
                videoElement.pause();
                setPlayingVideo(null);
            }
        }
    };

    return (
        <div className={styles.showcase}>
            <div className={styles.showcaseHeader}>
                <FaVideo className={styles.headerIcon} />
                <h2 className={styles.showcaseTitle}>Notre Portfolio Vidéo</h2>
                <p className={styles.showcaseSubtitle}>
                    Exemples de notre travail de production vidéo professionnelle
                </p>
            </div>

            <div className={styles.videoGrid}>
                {SAMPLE_VIDEOS.map((video, index) => (
                    <div key={index} className={styles.videoCard}>
                        <div
                            className={styles.videoWrapper}
                            onClick={() => handleVideoClick(index)}
                        >
                            <video
                                id={`video-${index}`}
                                className={styles.video}
                                loop
                                muted
                                playsInline
                                preload="metadata"
                                onError={(e) => console.error('Video error:', e)}
                            >
                                <source src={`/bader-store/videos/${video.name}`} type="video/mp4" />
                                <source src={`/bader-store/videos/${video.name}`} type="video/quicktime" />
                                Votre navigateur ne supporte pas la lecture vidéo.
                            </video>
                            {playingVideo !== index && (
                                <div className={styles.playOverlay}>
                                    <FaPlay />
                                </div>
                            )}
                        </div>
                        <div className={styles.videoInfo}>
                            <h3 className={styles.videoTitle}>{video.title}</h3>
                            <p className={styles.videoDescription}>
                                Ratio 1:1 - Optimisé pour Instagram & Facebook
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            <div className={styles.showcaseFooter}>
                <p className={styles.footerText}>
                    Ces vidéos démontrent notre expertise en production de contenu visuel engageant
                    qui capture l'attention et stimule les ventes.
                </p>
            </div>
        </div>
    );
});

VideoShowcase.displayName = 'VideoShowcase';

export default VideoShowcase;
