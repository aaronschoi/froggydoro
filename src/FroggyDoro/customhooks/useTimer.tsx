import { useEffect } from "react";
import { useAppSelector } from "../../app/hooks";
import { useCommands } from "./useCommands";
import { useTitle } from "./useTitle";

export const useTimer = (delay: number = 1000) => {
  const { userStatus, timerStatus, workTime, breakTime, timerDefaults, loop } = useAppSelector((store) => store);
  const { decBreak, decWork, takeABreak, work, pause, resetBreak, resetWork } = useCommands();
  const title = useTitle;

   useEffect(() => {
       if(userStatus === "WORK"){
           const { hours, minutes, seconds } = workTime;
           if(!hours && !minutes && !seconds) {
                takeABreak();
                resetWork(timerDefaults.workTime)
                title("Break Time")
           }
       }
       else {
           const { hours, minutes, seconds } = breakTime;
           if(!hours && !minutes && !seconds) {
               work();
               resetBreak(timerDefaults.breakTime)
               if(!loop){
               pause();
               title("FroggyDoro")
               }
               else{
                 title("Work Time")
               }
           }
       }
   }) 

  useEffect(() => {
    const tick = () => {
      if (userStatus === "WORK") {
        decWork();
      } else {
        decBreak();
      }
    };

    if (delay !== null) {
      let id: any = null;
      if (timerStatus) {
        id = setInterval(tick, delay);
        return () => clearInterval(id);
      } else {
        clearInterval(id);
      }
    }
  }, [timerStatus, delay, userStatus, decBreak, decWork]);
};
