import { useAppDispatch } from "../../app/hooks";
import {
  timerStatusActions,
  workActions,
  breakActions,
  userActions,
  ITimerSet,
  defaultActions,
  ITimer,
  loopActions,
} from "../reducers/timer";

export const useCommands = () => {
  const dispatch = useAppDispatch();

  const start = () => {
    dispatch({ type: timerStatusActions.START });
  };
  const pause = () => {
    dispatch({ type: timerStatusActions.STOP });
  };
  const decWork = () => {
    dispatch({ type: workActions.DECREMENT });
  };
  const decBreak = () => {
    dispatch({ type: breakActions.DECREMENT });
  };
  const work = () => {
    dispatch({ type: userActions.WORK });
  };
  const takeABreak = () => {
    dispatch({ type: userActions.BREAK });
  };
  const resetWork = (workObj: ITimer) => {
    dispatch({ type: workActions.SET, payload: workObj });
  };
  const resetBreak = (breakObj: ITimer) => {
    dispatch({ type: breakActions.SET, payload: breakObj });
  };
  const setDefaults = (defaultObj: ITimerSet) => {
    dispatch({ type: defaultActions.SET, payload: defaultObj });
  };
  const yesLoop = () => {
    dispatch({ type: loopActions.LOOP });
  };
  const noLoop = () => {
    dispatch({ type: loopActions.NOLOOP });
  };

  return {
    start,
    pause,
    decWork,
    decBreak,
    work,
    takeABreak,
    resetWork,
    resetBreak,
    setDefaults,
    yesLoop,
    noLoop,
  };
};
