import { TAction } from '../../app/reducer';
import { makeTime } from '../FroggyTimer/Timers/makeTime';

export interface ITimer {
    hours: number
    minutes: number
    seconds: number
}

interface ITimerActions {
    SET: "SETWORK" | "SETBREAK" | "SETDEFAULTS"
    DEFAULT: "DEFAULT"
}

interface IDecrement {
    DECREMENT: "DECREMENTWORK" | "DECREMENTBREAK"
}

interface ITimerStatus {
    START: "START",
    STOP: "STOP"
}

interface IUser {
    BREAK: "BREAK"
    WORK: "WORK"
}

interface ILoop {
    LOOP: "LOOP",
    NOLOOP: "NOLOOP"
}

export const timerStatusActions : ITimerStatus = {
    START: "START",
    STOP: "STOP"
}

export const workActions : ITimerActions & IDecrement = {
    SET: "SETWORK",
    DEFAULT: "DEFAULT",
    DECREMENT: "DECREMENTWORK"
}

export const breakActions : ITimerActions & IDecrement = {
    SET: "SETBREAK",
    DEFAULT: "DEFAULT",
    DECREMENT: "DECREMENTBREAK"
}

export const defaultActions : ITimerActions = {
    SET: "SETDEFAULTS",
    DEFAULT: "DEFAULT"
}

export const userActions : IUser = {
    BREAK: "BREAK",
    WORK: "WORK"
}

export const loopActions : ILoop = {
    LOOP: "LOOP",
    NOLOOP: "NOLOOP"
}

const initialState : ITimer = {
    hours: 0,
    minutes: 0,
    seconds: 1
}

export interface ITimerSet {
    breakTime: ITimer,
    workTime: ITimer
}

const initialTimerSet : ITimerSet = {
    breakTime: {...initialState},
    workTime: {...initialState}
}

export const workTimer = (state = initialState , action : TAction) => {
    switch(action.type) {
        case workActions.SET:
            return action.payload
        case workActions.DEFAULT:
            return {...initialState}
        case workActions.DECREMENT:
            return makeTime(state)
        default:
            return state
    }
}

export const breakTimer = (state = initialState , action : TAction) => {
    switch(action.type) {
        case breakActions.SET:
            return action.payload
        case breakActions.DEFAULT:
            return {...initialState}
        case breakActions.DECREMENT:
            return makeTime(state)
        default:
            return state
    }
}

export const timerSet = ( state = initialTimerSet, action : TAction ) => {
    switch(action.type) {
        case defaultActions.SET:
            return action.payload
        case defaultActions.DEFAULT:
            return {breakTime: {...initialState}, workTime: {...initialState}}
        default:
            return state
    }
}

export const timerStatus = ( state : boolean = false, action : TAction ) => {
    switch(action.type) {
        case timerStatusActions.START:
            return true
        case timerStatusActions.STOP:
            return false
        default:
            return state
    }
}

export const userStatus = ( state: string = "WORK", action: TAction) => {
    switch(action.type) {
        case userActions.WORK:
            return "WORK"
        case userActions.BREAK:
            return "BREAK"
        default:
            return state
    }
}

export const loop = ( state: boolean = false, action: TAction) => {
    switch(action.type) {
        case loopActions.LOOP:
            return true;
        case loopActions.NOLOOP:
            return false;
        default:
            return state;
    }
}