import { useDispatch, useSelector, type TypedUseSelectorHook } from "react-redux";

import type { RootState, AppDispatch } from "./store";

type DispatchFunction = () => AppDispatch;

export const useAppDispatch: DispatchFunction = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;