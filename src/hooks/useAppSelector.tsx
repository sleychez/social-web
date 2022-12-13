import {TypedUseSelectorHook, useSelector} from "react-redux";
import {AppStateType} from "../redux/redux-store";



export const useAppSelector: TypedUseSelectorHook<AppStateType> = useSelector