import React from "react";

const VideoModal = () => {
  return (
    <div className="modal">
      <div className="modal__content">
        <iframe
          className="modal__content-video"
          src="https://www.youtube-nocookie.com/embed/7GHLfw1aOUQ"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
};

export default VideoModal;
