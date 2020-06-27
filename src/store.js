import connect from "react-redux/lib/connect/connect";

import {createStore} from "redux";
import {reducer} from "./reducers";



export const store = createStore(reducer);

