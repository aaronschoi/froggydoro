import { ITimer } from "../../reducers/timer";

interface ITime {
  time: ITimer;
}

export default function Timer({ time: { hours, minutes, seconds } }: ITime) {

  return (
    <div>
      <div>{`${hours} : ${minutes} : ${seconds}`}</div>
    </div>
  );
}
