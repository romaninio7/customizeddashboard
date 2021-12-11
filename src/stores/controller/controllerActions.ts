import {controllerAction} from 'stores/types'

export const handleMenuToggle = () => ({
  type: controllerAction.HANDLE_MENU_TOGGLE,
});

export const handleMenuOpen = () => ({
  type: controllerAction.HANDLE_MENU_OPEN,
});

export const handleMenuCLose = () => ({
  type: controllerAction.HANDLE_MENU_CLOSE,
});

export const handleMenuSet = (state: boolean) => ({
  type: controllerAction.HANDLE_MENU_SET,
  payload: state
});
