import React, {memo, useCallback, useMemo} from 'react';
import {handleLayoutLockSet, handleLayoutRemove, useDispatch, useSelector} from 'stores'
import {Button, EIconColor, EIconSize, EIconType, GridItemDraw, Icon} from "components";
import {TGridHeaderProps, TGridItemProps} from "./types";
import {useNavigate} from "react-router-dom";

const GridHeader = memo(({title, isLock, onLock, onDelete, onEdit}: TGridHeaderProps) => {

    const handleEdit = useCallback(e => {
        e && e.preventDefault()
        e && e.stopPropagation()
        onEdit && onEdit()
    }, [onEdit])

    const handleLock = useCallback(e => {
        e && e.preventDefault()
        e && e.stopPropagation()
        onLock && onLock()
    }, [onLock])

    const handleDelete = useCallback(e => {
        e && e.preventDefault()
        e && e.stopPropagation()
        onDelete && onDelete()
    }, [onDelete])

    return (
        <div className='grid-item__header'>
            <div className='grid-item__header__title'>
                {title}
            </div>
            <div className='grid-item__header__buttons'>
                <Button onClick={handleEdit}>
                    <div className='grid-item__header__buttons__inner'>
                        <Icon
                            type={EIconType.Edit}
                            size={EIconSize.BIG}
                        />
                    </div>
                </Button>
                <Button onClick={handleLock}>
                    <div className='grid-item__header__buttons__inner'>
                        <Icon
                            type={isLock ? EIconType.Lock : EIconType.Unlock}
                            size={EIconSize.BIG}
                        />
                    </div>
                </Button>
                <Button onClick={handleDelete}>
                    <div className='grid-item__header__buttons__inner'>
                        <Icon
                            type={EIconType.Trash}
                            color={EIconColor.RED}
                            size={EIconSize.BIG}
                        />
                    </div>
                </Button>
            </div>
        </div>
    )
})

const GridItem = ({i, w, h, static: isLock, style, ...rest}: TGridItemProps) => {
    const {widget} = useSelector(({widget}) => widget)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const {width, height} = useMemo(() => {
        const width = parseInt(style.width as string, 10);
        const height = parseInt(style.height as string, 10) - 46;
        return {width, height}
    }, [style])

    const handleToggleLock = useCallback(() => {
        dispatch(handleLayoutLockSet(i, !isLock))
    }, [dispatch, i, isLock])

    const handleDelete = useCallback(() => {
        dispatch(handleLayoutRemove(i))
    }, [dispatch, i])

    const handleEdit = useCallback(() => {
        navigate(`edit/${i}`)
    }, [navigate, i])

    const item = useMemo(() => {
        return widget.find(el => el.id === i)
    }, [widget, i])

    return (
        <div className='grid-item'>
            <GridHeader
                onEdit={handleEdit}
                onLock={handleToggleLock}
                onDelete={handleDelete}
                title={item.title}
                isLock={isLock}
            />
            <div className='grid-item__content'>
                <GridItemDraw id={i} {...item} w={width} h={height}/>
            </div>
        </div>
    );
};

export default memo(GridItem);
