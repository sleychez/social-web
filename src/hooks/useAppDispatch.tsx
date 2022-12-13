import {AppDispatch} from "../redux/redux-store";
import {useDispatch} from "react-redux";

export const useAppDispatch = (): AppDispatch => {
    return useDispatch()
}