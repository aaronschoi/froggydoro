import { useState, SyntheticEvent } from "react";
import { ITimer } from "../reducers/timer";
import FroggyFormInputs from "./FroggyFormComponent/FroggyFormInputs";
import { formatLS } from "../util/formatLS";
import { useTimersInLocalStorage } from "../customhooks/useTimersInLocalStorage";
import { useAppSelector } from "../../app/hooks";

export default function FroggyForm() {
  const { setNewLocalStorage } = useTimersInLocalStorage();
  const { timerDefaults } = useAppSelector(store => store)

  const [breakTime, setBreakTime] = useState<ITimer>({
    hours: formatLS(localStorage.getItem("breakHours")),
    minutes: formatLS(localStorage.getItem("breakMinutes")),
    seconds: formatLS(localStorage.getItem("breakSeconds")),
  });
  const [workTime, setWorkTime] = useState<ITimer>({
    hours: formatLS(localStorage.getItem("workHours")),
    minutes: formatLS(localStorage.getItem("workMinutes")),
    seconds: formatLS(localStorage.getItem("workSeconds")),
  });

  const submitHandler = (event: SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    setNewLocalStorage(workTime, breakTime);
  };

  return (
    <form onSubmit={submitHandler}>
      <FroggyFormInputs
        data={workTime}
        setData={setWorkTime}
        type="Work Time"
      />
      <FroggyFormInputs
        data={breakTime}
        setData={setBreakTime}
        type="Break Time"
      />
      <button type="submit">Submit</button>
      <button type="button" onClick={() => console.log( timerDefaults )}>log</button>
    </form>
  );
}
