import React from "react";

const SoundCloudEmbedded = ({
  url,
  width = "90%",
  height = "200rem",
  autoPlay = false,
  hideRelated = true,
  showComments = false,
  showUser = true,
  showReposts = false,
  visual = true,
}) => {
  const src = `https://w.soundcloud.com/player/?url=${url}&amp;auto_play=${autoPlay}&amp;hide_related=${hideRelated}&amp;show_comments=${showComments}&amp;show_user=${showUser}&amp;show_reposts=${showReposts}&amp;visual=${visual}`;

  return <iframe width={width} height={height} scrolling="no" src={src} />;
};

export default SoundCloudEmbedded;
