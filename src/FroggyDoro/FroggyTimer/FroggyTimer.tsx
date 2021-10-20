import { MouseEventHandler } from "react";
import { useAppSelector } from "../../app/hooks";
import { useCommands } from "../customhooks/useCommands";
import { useTimer } from "../customhooks/useTimer";
import { useTitle } from "../customhooks/useTitle";
import Lilypad from "../Lilypad/Lilypad";
import Break from "./Timers/Break";
import Work from "./Timers/Work";

export default function FroggyTimer() {
  const { userStatus, timerStatus, loop } = useAppSelector((store) => store);
  const { start, pause, yesLoop, noLoop } = useCommands();
  const title = useTitle;
  const userState = userStatus === "WORK" ? "Work Time" : "Break Time"

  useTimer();

  const timerToggleHandler: MouseEventHandler = (event) => {
    event.preventDefault();
    if (timerStatus) {
      pause();
    } else {
      start();
      title(userState)
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
      <div>{userState}</div>
      <div>{userStatus === "WORK" ? <Work /> : <Break />}</div>
      <div className="froggydoro-buttonbox">
        <Lilypad text={timerStatus ? "pause" : "start"} clickEvent={timerToggleHandler} />
        <Lilypad text={loop ? "no loop" : "loop"} clickEvent={loopToggleHandler} />
      </div>
    </>
  );
}
