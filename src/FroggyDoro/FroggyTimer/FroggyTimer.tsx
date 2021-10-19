import { MouseEventHandler } from "react";
import { useAppSelector } from "../../app/hooks";
import { useCommands } from "../customhooks/useCommands";
import { useTimer } from "../customhooks/useTimer";
import Break from "./Timers/Break";
import Work from "./Timers/Work";

export default function FroggyTimer() {
  const { userStatus, timerStatus, loop } = useAppSelector((store) => store);
  const { start, pause, yesLoop, noLoop } = useCommands();

  useTimer();

  const timerToggleHandler: MouseEventHandler = (event) => {
    event.preventDefault();
    if (timerStatus) {
      pause();
    } else {
      start();
    }
  };

  const loopToggleHandler: MouseEventHandler = (event) => {
    event.preventDefault();
    if (loop) {
      noLoop();
    } else {
      yesLoop();
    }
  };

  return (
    <>
      <div>{userStatus === "WORK" ? "Work Time" : "Break Time"}</div>
      <div>{userStatus === "WORK" ? <Work /> : <Break />}</div>
      <div>
        <button onClick={timerToggleHandler}>
          {timerStatus ? "pause" : "start"}
        </button>
        <button onClick={loopToggleHandler}>
          {loop ? "Stop Looping" : "Start Looping"}
        </button>
      </div>
    </>
  );
}
