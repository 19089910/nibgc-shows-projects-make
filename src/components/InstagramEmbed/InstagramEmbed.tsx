import React from "react";

const InstagramEmbed = ({ embedUrl }) => {
  return (
    <div className="laptop:w-[360px] mobile:h-[550px] mobile:w-[320px] tablet:w-full tablet:h-full mobile:mb-24 tablet:mb-1 laptop:gap-4 mobile:right-10 tablet:gap-4 laptop:mb-12 laptop:mr-10 drop-shadow-[0_20px_20px_rgba(0,0,0,0.85)]">
      <div
        className="rsme-embed rsme-instagram-embed"
        style={{
          overflow: "hidden",
          borderRadius: "3px",
          position: "relative",
        }}
      >
        <iframe
          className="instagram-media instagram-media-rendered"
          src={`${embedUrl}/embed/?cr=1&v=14&wp=447`}
          allowTransparency="true"
          allowFullScreen={true}
          frameBorder="0"
          height="716"
          scrolling="no"
          style={{
            width: "calc(100% - 2px)",
            backgroundColor: "white",
            borderRadius: "3px",
            border: "1px solid rgb(219, 219, 219)",
            display: "block",
            margin: "0px 0px 0px",
            minWidth: "326px",
            padding: "0px",
          }}
        />
      </div>
    </div>
  );
};

export default InstagramEmbed;
