import type { RootState } from '@utils/redux/store';

// Other code such as selectors can use the imported `RootState` type
export const selectUser = (state: RootState) => state.user;
