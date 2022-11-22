import type { AppDispatch } from "../redux/store";
import { useDispatch } from "react-redux/es/exports";

export const useAppDispatch: () => AppDispatch = useDispatch;