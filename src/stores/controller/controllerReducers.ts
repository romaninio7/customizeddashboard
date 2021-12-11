import {combineReducers} from 'redux';
import {controllerAction} from 'stores/types'
import {handleMenuSet} from "./controller.helpers";

const menuReducer = (state: boolean = false, {type, payload}) => {
    switch (type) {
        case controllerAction.HANDLE_MENU_TOGGLE:
            return handleMenuSet(!state);

        case controllerAction.HANDLE_MENU_OPEN:
            return handleMenuSet(true);

        case controllerAction.HANDLE_MENU_CLOSE:
            return handleMenuSet(false);

        case controllerAction.HANDLE_MENU_SET:
            return handleMenuSet(payload);

        default:
            return state;
    }
};

export default combineReducers({
    menu: menuReducer,
});
