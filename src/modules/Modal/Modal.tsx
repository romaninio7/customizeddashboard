import React, {memo, useCallback, useRef} from 'react';
import {EModalPosition, EModalSize, TModalHeaderProps, TModalProps} from "./types";
import {EIconColor, EIconSize, EIconType, IconButton} from "components";
import {useOnClickOutside} from "hooks";
import {cls} from "../../utils";
import useEventListener from "../../hooks/useEventListener";

const ModalHeader = memo(({title, onClose}: TModalHeaderProps) => {
    return (
        <div className='modal__dialog__header'>
            <div className='modal__dialog__header__title'>
                {title}
            </div>
            <div>
                <IconButton
                    onClick={onClose}
                    type={EIconType.Close}
                    color={EIconColor.WHITE}
                    size={EIconSize.BIG}
                />
            </div>
        </div>
    )
})

const Modal = ({
                   title = '',
                   position = EModalPosition.CENTER,
                   size = EModalSize.MIDDLE,
                   children,
                   onClose,
                   header = false,
               }: TModalProps) => {
    const dialogRef = useRef()

    const handleCloseClick = useCallback(() => {
        onClose && onClose()
    }, [onClose])

    const handleKeyEvent = useCallback(({key}: KeyboardEvent) => {
        if (key !== 'Escape') return;
        handleCloseClick()
    }, [handleCloseClick])

    useOnClickOutside(dialogRef, handleCloseClick)

    useEventListener('keydown', handleKeyEvent)

    return (
        <div
            className={cls('modal', {modifiers: {[position]: position}})}
        >

            <div
                className={cls('modal__dialog', {modifiers: {[size]: size}})}
                ref={dialogRef}
            >
                {!!header && (
                    <ModalHeader
                        title={title}
                        onClose={handleCloseClick}
                    />
                )}

                <div className='modal__dialog__main'>
                    {!!children && children}
                </div>
            </div>
        </div>
    );
};

export default memo(Modal);
