import { MouseEventHandler } from "react";
import { useAppSelector } from "../../app/hooks";
import { useCommands } from "../customhooks/useCommands";
import { useTimer } from "../customhooks/useTimer";
import { useTitle } from "../customhooks/useTitle";
import Lilypad from "../Lilypad/Lilypad";
import Break from "./Timers/Break";
import Work from "./Timers/Work";

export default function FroggyTimer() {
  const { userStatus, timerStatus, loop, timerDefaults } = useAppSelector((store) => store);
  const { start, pause, yesLoop, noLoop, work, resetWork, resetBreak  } = useCommands();
  const title = useTitle;
  const userState = userStatus === "WORK" ? "Work Time" : "Break Time";

  useTimer();

  const timerToggleHandler: MouseEventHandler = (event) => {
    event.preventDefault();
    if (timerStatus) {
      pause();
    } else {
      start();
      title(userState);
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

  const resetHandler: MouseEventHandler = (event) => {
    pause();
    work();
    resetWork(timerDefaults.workTime);
    resetBreak(timerDefaults.breakTime);
  };

  return (
    <>
      <h2 className="froggytimer-header">{userState}</h2>
      <div>{userStatus === "WORK" ? <Work /> : <Break />}</div>
      <div className="froggytimer-buttonbox">
        <Lilypad
          text={timerStatus ? "pause" : "start"}
          clickEvent={timerToggleHandler}
        />
        <Lilypad
          text={loop ? "no loop" : "loop"}
          clickEvent={loopToggleHandler}
        />
        <Lilypad text={"reset"} clickEvent={resetHandler} />
      </div>
    </>
  );
}
