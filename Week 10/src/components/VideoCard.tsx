import { Video } from "../types/Video.type";

export function VideoCard(props: {
    video: Video
}) {
    const { video } = props
  return (
    <div>
      <video
        style={{
          height: "200px",
        }}
        controls
        crossOrigin="anonymous"
      >
        <source src={video.url} />
      </video>
      <p>{ video.name }</p>
      <p>{ video.id }</p>
      <p>{ video.size } bytes</p>
    </div>
  );
}
