import { MouseEventHandler, useEffect, useState } from "react";
import { ITimer } from "../reducers/timer";
import FroggyFormInputs from "./FroggyFormComponent/FroggyFormInputs";
import { formatLS } from "../util/formatLS";
import { useTimersInLocalStorage } from "../customhooks/useTimersInLocalStorage";
import Lilypad from "../Lilypad/Lilypad";

export default function FroggyForm() {
  const { setNewLocalStorage } = useTimersInLocalStorage();

  useEffect(() => {
    setBreakTime({
      hours: formatLS(localStorage.getItem("breakHours")),
    minutes: formatLS(localStorage.getItem("breakMinutes")),
    seconds: formatLS(localStorage.getItem("breakSeconds")),
    })
    setWorkTime({
      hours: formatLS(localStorage.getItem("workHours")),
    minutes: formatLS(localStorage.getItem("workMinutes")),
    seconds: formatLS(localStorage.getItem("workSeconds")),
    })
  } , [])

  const [breakTime, setBreakTime] = useState<ITimer>({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [workTime, setWorkTime] = useState<ITimer>({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const submitHandler: MouseEventHandler = (event) => {
    event.preventDefault();

    setNewLocalStorage(workTime, breakTime);
  };

  return (
    <form className="froggydoro-form-container">
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
      <div className="froggydoro-form-btnbox">
        <Lilypad text="submit" clickEvent={submitHandler} />
      </div>
    </form>
  );
}
