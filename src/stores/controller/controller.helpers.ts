import {ELocalKey, saveToLocal} from "../store.helpers";

// MENU
export const handleMenuSet = (state: boolean) => {
    saveToLocal(ELocalKey.MENU, state)
    return state
}
