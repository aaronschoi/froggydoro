import { ChangeEvent, Dispatch } from "react";
import { ITimer } from "../../reducers/timer";
import IncrementalInputs from "./IncrementalInputs/IncrementalInputs";

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
      <h2 className="froggyform-inputs-header">{type}</h2>
      <div className="froggyform-inputs-container">
      <IncrementalInputs type="hours" value={hours} changeHandler={changeHandler} limit="23"/>
      {":"}
      <IncrementalInputs type="minutes" value={minutes} changeHandler={changeHandler} limit="59" />
      {":"}
      <IncrementalInputs type="seconds" value={seconds} changeHandler={changeHandler} limit="59" />
      </div>
    </>
  );
}
