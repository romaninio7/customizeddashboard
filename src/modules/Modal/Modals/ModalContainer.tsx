import React, {memo} from 'react';
import {TModalContainerProps} from "../types";

const ModalContainer = ({children}: TModalContainerProps): JSX.Element => {
    return (
        <div className="modal-container">
            {children}
        </div>
    );
};

export default memo(ModalContainer);
