import { ITimer } from "../../reducers/timer";

interface ITime {
  time: ITimer;
}

export default function Timer({ time: { hours, minutes, seconds } }: ITime) {
  return <div className="froggytimer-timer">{`${hours} : ${minutes} : ${seconds}`}</div>;
}
