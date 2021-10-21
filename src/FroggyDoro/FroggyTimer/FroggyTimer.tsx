import { MouseEventHandler } from "react";
import { useAppSelector } from "../../app/hooks";
import { useCommands } from "../customhooks/useCommands";
import { useTimer } from "../customhooks/useTimer";
import { useTitle } from "../customhooks/useTitle";
import Lilypad from "../Lilypad/Lilypad";
import { ITimer } from "../reducers/timer";
import Break from "./Timers/Break";
import Empty from "./Timers/Empty";
import Work from "./Timers/Work";

const oneSec = ({ hours, minutes, seconds }: ITimer) =>
  !hours && !minutes && seconds > 0;

export default function FroggyTimer() {
  const { userStatus, timerStatus, loop, timerDefaults, workTime, breakTime } =
    useAppSelector((store) => store);
  const { start, pause, yesLoop, noLoop, work, resetWork, resetBreak } =
    useCommands();
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

  const status = userStatus === "WORK" ? oneSec(workTime) : oneSec(breakTime);
  const timer = status ? (
    <>
      <h2 className="froggytimer-header">{userState}</h2>
      <div>{userStatus === "WORK" ? <Work /> : <Break />}</div>
    </>
  ) : (
    <>
      <h2 className="froggytimer-header">{userState}</h2>
      <div><Empty /></div>
    </>
  );

  return (
    <>
      {timer}
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
