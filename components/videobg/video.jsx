import React from 'react';

const VideoBackground = () => {
  return (
    <div className="video-container">
      <video autoPlay loop muted>
        <source src="/per.mp4" type="video/mp4" />
        <source src="/per.mp4" type="video/webm" />
        <source src="/per.mp4" type="video/ogg" />
        Your browser does not support the video tag.
      </video>
      <style jsx>{`
        .video-container {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
          z-index: -1;
        }

        video {
          min-width: 100%;
          min-height: 100%;
        }
      `}</style>
      
    </div>

    
  );
};

export default VideoBackground;
