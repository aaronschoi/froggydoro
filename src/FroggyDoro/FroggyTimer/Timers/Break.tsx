import { useAppSelector } from "../../../app/hooks";
import Timer from "./Timer";

export default function Break() {
    const {breakTime} = useAppSelector(store => store);

    return <Timer time={breakTime} />
}