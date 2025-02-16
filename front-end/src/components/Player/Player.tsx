import React from "react";
import "./styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCirclePlay,
  faCirclePause,
  faBackwardStep,
  faForwardStep,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router";

type PlayerProps = {
  duration: string;
  audio: string;
  randomIdFromArtist: number;
  randomId2FromArtist: number;
};

const formatTime = (timeInSeconds: number) => {
  const minutes = Math.floor(timeInSeconds / 60);
  const seconds = Math.floor(timeInSeconds - minutes * 60);

  return `${minutes.toString().padStart(2, "0")}:${seconds
    .toString()
    .padStart(2, "0")}`;
};

const timeInSeconds = (timeString: string) => {
  const splitArray = timeString.split(":");
  const minutes = Number(splitArray[0]);
  const seconds = Number(splitArray[1]);

  return seconds + minutes * 60;
};

export const Player: React.FC<PlayerProps> = ({
  duration,
  audio,
  randomIdFromArtist,
  randomId2FromArtist,
}) => {
  const audioPlayer = React.useRef<HTMLAudioElement | null>(null);
  const progressBar = React.useRef<HTMLDivElement  | null>(null);
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [currentTime, setCurrentTime] = React.useState(formatTime(0));
  const durationInSeconds = timeInSeconds(duration);

  const playPause = () => {
    if (!audioPlayer.current) return;

    if (isPlaying) {
      audioPlayer.current.pause();
    } else {
      audioPlayer.current.play();
    }

    setIsPlaying(!isPlaying);
  };

  React.useEffect(() => {
    const intervalId = setInterval(() => {
      if (!audioPlayer.current) return;
  
      const currentTime = audioPlayer.current.currentTime || 0;
      setCurrentTime(formatTime(currentTime));
  
      progressBar.current?.style.setProperty(
        "--_progress",
        `${(currentTime / durationInSeconds) * 100}%`
      );
    }, 1000);
  
    return () => clearInterval(intervalId);
  }, [isPlaying]);

  return (
    <div className="player">
      <div className="player__controllers">
        <Link to={`/song/${randomIdFromArtist}`}>
          <FontAwesomeIcon className="player__icon" icon={faBackwardStep} />
        </Link>
        <FontAwesomeIcon
          className="player__icon player__icon--play"
          icon={isPlaying ? faCirclePause : faCirclePlay}
          onClick={() => playPause()}
        />
        <Link to={`/song/${randomId2FromArtist}`}>
          <FontAwesomeIcon className="player__icon" icon={faForwardStep} />
        </Link>
      </div>

      <div className="player__progress">
        <p>{currentTime}</p>
        <div className="player__bar">
          <div ref={progressBar} className="player__bar-progress"></div>
        </div>
        <p>{duration}</p>
      </div>

      <audio ref={audioPlayer} src={audio}></audio>
    </div>
  );
};
