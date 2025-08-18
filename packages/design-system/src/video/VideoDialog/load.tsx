import dynamic from "next/dynamic";

const VideoDialog = dynamic(() => import("."), { ssr: false });
export default VideoDialog;
