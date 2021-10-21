import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { workTimer, breakTimer, timerSet, timerStatus, userStatus, loop } from '../FroggyDoro/reducers/timer';

export const store = configureStore({
  reducer: {
    workTime: workTimer,
    breakTime: breakTimer,
    timerDefaults: timerSet,
    timerStatus,
    userStatus,
    loop
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
