import { ChangeEvent, Dispatch } from "react";
import { ITimer } from "../../reducers/timer";

interface IProps {
  data: ITimer;
  setData: Dispatch<ITimer>;
  type: string;
}

export default function FroggyFormInputs({ data, setData, type }: IProps) {
  const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setData({
      ...data,
      [event.target.name]: parseInt(event.target.value),
    });
  };

  const { hours, minutes, seconds } = data;

  return (
    <>
      <h2>{type}</h2>
      <input
        name="hours"
        type="number"
        min="0"
        value={hours}
        onChange={changeHandler}
      />
      <input
        name="minutes"
        type="number"
        min="0"
        value={minutes}
        onChange={changeHandler}
      />
      <input
        name="seconds"
        type="number"
        min="0"
        value={seconds}
        onChange={changeHandler}
      />
    </>
  );
}
