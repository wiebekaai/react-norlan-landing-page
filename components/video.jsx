/* eslint-disable react/jsx-props-no-spreading */

/** @param {import("react").DetailedHTMLProps<import("react").VideoHTMLAttributes<HTMLVideoElement>, HTMLVideoElement>} props */
function Video(props) {
  return <video {...props} playsInline autoPlay muted loop />;
}

export default Video;
