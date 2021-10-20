import { ITimer } from "../reducers/timer";
import { useCommands } from "./useCommands";

export const useTimersInLocalStorage = () => {
  const { setDefaults, resetBreak, resetWork } = useCommands();

  const setLocalStorage = () => {
    localStorage.setItem("timePresetsExist", "0");
    localStorage.setItem("breakHours", "0");
    localStorage.setItem("breakMinutes", "0");
    localStorage.setItem("breakSeconds", "0");
    localStorage.setItem("workHours", "0");
    localStorage.setItem("workMinutes", "0");
    localStorage.setItem("workSeconds", "0");
    return true;
  };

  const setNewLocalStorage = (workObj: ITimer, breakObj: ITimer) => {
    localStorage.setItem("breakHours", breakObj.hours.toString());
    localStorage.setItem("breakMinutes", breakObj.minutes.toString());
    localStorage.setItem("breakSeconds", breakObj.seconds.toString());
    localStorage.setItem("workHours", workObj.hours.toString());
    localStorage.setItem("workMinutes", workObj.minutes.toString());
    localStorage.setItem("workSeconds", workObj.seconds.toString());
    setDefaults({workTime: {...workObj}, breakTime: {...breakObj}});
    resetWork(workObj);
    resetBreak(breakObj);
  };

  return {
    setLocalStorage,
    setNewLocalStorage,
  };
};
