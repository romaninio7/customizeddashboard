import React, {memo, useCallback} from 'react';
import {EInputType, TInputProps} from "./types";
import {EIconColor, EIconSize, EIconType, IconButton} from "components";
import {cls} from "../../utils";

const Input = ({
                   placeholder = 'Placeholder',
                   value,
                   onChange,
                   iconStart,
                   iconEnd,
                   type = EInputType.TEXT,
                   clear = false
               }: TInputProps) => {

    const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value
        onChange && onChange(value)
    }, [onChange])

    const handleClear = useCallback(() => {
        onChange && onChange('')
    }, [onChange])

    return (
        <div className='input'>
            {!!iconStart && (
                <div className='input__icon-start'>
                    {iconStart}
                </div>
            )}
            <div className='input__input-wrapper'>
                <input
                    value={value}
                    onChange={handleChange}
                    placeholder={placeholder}
                    type={type}
                    className='input__input'
                />
                {!!clear && (
                    <div className={cls('input__input-btn', {modifiers: {clear: !!value}})}>
                        <IconButton
                            onClick={handleClear}
                            type={EIconType.Close}
                            color={EIconColor.GRAY}
                            size={EIconSize.SMALL}
                        />
                    </div>
                )}
            </div>
            {!!iconEnd && (
                <div className='input__icon-end'>
                    {iconEnd}
                </div>
            )}
        </div>
    );
};

export default memo(Input);
