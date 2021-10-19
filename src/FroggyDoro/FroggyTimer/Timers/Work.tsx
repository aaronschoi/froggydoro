import {  useAppSelector } from "../../../app/hooks";
import Timer from "./Timer";

export default function Work() {
  const { workTime } = useAppSelector((store) => store);

  return <Timer time={workTime} />;
}
