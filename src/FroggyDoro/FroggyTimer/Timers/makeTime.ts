import { ITimer } from "../../reducers/timer"

export const makeTime = ({ hours, minutes, seconds } : ITimer) => {
    if(seconds){
        return {
            hours, minutes, seconds: seconds - 1
        }
    }
    else {
        if(minutes){
            return {
                hours, minutes: minutes - 1, seconds: 59
            }
        }
        else {
            if(hours) {
                return {
                    hours: hours -1, minutes: 59, seconds: 59
                }
            }
            return {
                hours,
                minutes,
                seconds
            };
        }
    }
}