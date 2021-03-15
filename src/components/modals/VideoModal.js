import React from "react";

const VideoModal = ({ demo, name }) => {
  return (
    <div className="modal">
      <div className="modal__content">
        {" "}
        <iframe
          className="modal__content-video"
          title={name}
          src={demo}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          scrolling="no"
        ></iframe>{" "}
      </div>
    </div>
  );
};

export default VideoModal;
