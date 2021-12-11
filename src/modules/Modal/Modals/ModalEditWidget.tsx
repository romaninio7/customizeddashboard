import React, {memo, useCallback, useMemo} from 'react';
import {handleLayoutLockSet, handleLayoutRemove, useDispatch, useSelector} from "stores";
import {TInnerRowNumber, TInnerRowTitleProp, TModalWidgetInner} from "../types";
import {EIconColor, EIconSize, EIconType, EInputType, Icon, IconButton, Input} from "components";
import {useNavigate, useParams} from "react-router-dom";
import {handleLayoutPropertiesSet} from "../../../stores/widget/widgetActions";
import {ELayoutProperties} from "../../../stores/types/widget";
import {ERoutePath} from "routes";

const InnerRowTitle = memo(({title}: TInnerRowTitleProp) => {
    return (
        <div className='modal-add-widget__inner-title'>
            {title}
        </div>
    )
})

const InnerRowSubtitle = memo(({title}: TInnerRowTitleProp) => {
    return (
        <div className='modal-add-widget__inner-subtitle'>
            {title}
        </div>
    )
})

const InnerRowNumber = memo(({icon, min = 0, max, name, value, onChange}: TInnerRowNumber) => {

    const handleChange = useCallback((v) => {
        let value = Number.isNaN(parseInt(v)) ? 0 : parseInt(v)
        if (value <= min) value = min
        if (value >= max) value = max
        onChange && onChange(value)
    }, [onChange, min, max])

    return (
        <div className='modal-add-widget__inner-number'>
            <div className='row'>
                {icon}
                <span className='modal-add-widget__inner-number__name'>{`${name}:`}</span>
            </div>
            <div className='modal-add-widget__inner-number__input'>
                <Input
                    value={value}
                    onChange={handleChange}
                    type={EInputType.NUMBER}
                />
            </div>
        </div>
    )
})

const ModalEditWidgetInner = memo((props: TModalWidgetInner) => {
    const {category, id, w, h, x, y, minH, minW, maxH, maxW, static: lock, title} = props
    const {breakpoint} = useSelector(({widget}) => widget)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleToggleLock = useCallback(() => {
        dispatch(handleLayoutLockSet(id, !lock))
    }, [dispatch, id, lock])

    const handleDelete = useCallback(() => {
        dispatch(handleLayoutRemove(id))
        navigate(ERoutePath.DASHBOARD)
    }, [dispatch, id, navigate])

    const handleChangeWidth = useCallback((v: number) => {
        if (v > maxW) {
            dispatch(handleLayoutPropertiesSet(ELayoutProperties.MAX_WIDTH, breakpoint, id, v))
        }
        if (v < minW) {
            dispatch(handleLayoutPropertiesSet(ELayoutProperties.MIN_WIDTH, breakpoint, id, v))
        }
        dispatch(handleLayoutPropertiesSet(ELayoutProperties.WIDTH, breakpoint, id, v))
    }, [dispatch, breakpoint, id, maxW, minW])

    const handleChangeHeight = useCallback((v: number) => {
        if (v > maxH) {
            dispatch(handleLayoutPropertiesSet(ELayoutProperties.MAX_HEIGHT, breakpoint, id, v))
        }
        if (v < minH) {
            dispatch(handleLayoutPropertiesSet(ELayoutProperties.MIN_HEIGHT, breakpoint, id, v))
        }
        dispatch(handleLayoutPropertiesSet(ELayoutProperties.HEIGHT, breakpoint, id, v))
    }, [dispatch, breakpoint, id, maxH, minH])

    const handleChangeMinWidth = useCallback((v: number) => {
        dispatch(handleLayoutPropertiesSet(ELayoutProperties.MIN_WIDTH, breakpoint, id, v))
    }, [dispatch, breakpoint, id])

    const handleChangeMaxWidth = useCallback((v: number) => {
        dispatch(handleLayoutPropertiesSet(ELayoutProperties.MAX_WIDTH, breakpoint, id, v))
    }, [dispatch, breakpoint, id])

    const handleChangeMinHeight = useCallback((v: number) => {
        dispatch(handleLayoutPropertiesSet(ELayoutProperties.MIN_HEIGHT, breakpoint, id, v))
    }, [dispatch, breakpoint, id])

    const handleChangeMaxHeight = useCallback((v: number) => {
        dispatch(handleLayoutPropertiesSet(ELayoutProperties.MAX_HEIGHT, breakpoint, id, v))
    }, [dispatch, breakpoint, id])

    const handleChangePositionX = useCallback((v: number) => {
        dispatch(handleLayoutPropertiesSet(ELayoutProperties.POSITION_X, breakpoint, id, v))
    }, [dispatch, breakpoint, id])

    const handleChangePositionY = useCallback((v: number) => {
        dispatch(handleLayoutPropertiesSet(ELayoutProperties.POSITION_Y, breakpoint, id, v))
    }, [dispatch, breakpoint, id])

    const rulerIcon = useMemo(() => {
        return <Icon
            type={EIconType.Ruler}
            size={EIconSize.BIG}
            color={EIconColor.GRAY}
        />
    }, [])

    const rulerAngleIcon = useMemo(() => {
        return <Icon
            type={EIconType.RulerAngle}
            size={EIconSize.BIG}
            color={EIconColor.GRAY}
        />
    }, [])

    return (
        <div className='modal-add-widget__inner'>
            <InnerRowSubtitle title={`id: ${id}`}/>
            <InnerRowTitle title={title}/>

            <div className="row">
                <div className="col">
                    <IconButton
                        onClick={handleToggleLock}
                        type={lock ? EIconType.Lock : EIconType.Unlock}
                        size={EIconSize.BIG}
                    />
                </div>
                <div className="col">
                    <IconButton
                        onClick={handleDelete}
                        type={EIconType.Trash}
                        color={EIconColor.RED}
                        size={EIconSize.BIG}
                    />
                </div>
            </div>

            <div className='row'>
                <div className="col">
                    <InnerRowNumber
                        icon={rulerIcon}
                        min={1}
                        max={6}
                        onChange={handleChangeWidth}
                        name='Width'
                        value={w}
                    />
                </div>
                <div className="col">
                    <InnerRowNumber
                        icon={rulerIcon}
                        min={1}
                        max={4}
                        onChange={handleChangeHeight}
                        name='Height'
                        value={h}
                    />
                </div>
            </div>

            <div className="row">
                <div className="col">
                    <InnerRowNumber
                        min={1}
                        max={6}
                        onChange={handleChangeMinWidth}
                        name='Min Width'
                        value={minW}
                    />
                    <InnerRowNumber
                        min={1}
                        max={6}
                        onChange={handleChangeMaxWidth}
                        name='Max Width'
                        value={maxW}
                    />
                </div>
                <div className="col">
                    <InnerRowNumber
                        min={1}
                        max={4}
                        onChange={handleChangeMinHeight}
                        name='Min Height'
                        value={minH}
                    />
                    <InnerRowNumber
                        min={1}
                        max={4}
                        onChange={handleChangeMaxHeight}
                        name='Max Height'
                        value={maxH}
                    />
                </div>
            </div>

            <div className="row">
                <div className="col">
                    <InnerRowNumber
                        icon={rulerAngleIcon}
                        min={0}
                        onChange={handleChangePositionX}
                        name='Position X'
                        value={x}
                    />
                </div>
                <div className="col">
                    <InnerRowNumber
                        icon={rulerAngleIcon}
                        min={0}
                        onChange={handleChangePositionY}
                        name='Position Y'
                        value={y}
                    />
                </div>
            </div>

            <div className="row">
                <div className="col">
                    <div className="row start">
                        <div className="col">
                            <InnerRowSubtitle title={'Type:'}/>
                        </div>
                        <div className="col">
                            <InnerRowSubtitle title={category}/>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="row start">
                        <div className="col">
                            <InnerRowSubtitle title={'Lock:'}/>
                        </div>
                        <div className="col">
                            <InnerRowSubtitle title={lock.toString()}/>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
})

const ModalEditWidget = () => {
    const {breakpoint, layout, widget} = useSelector(({widget}) => widget)
    const {id} = useParams()

    const currentLayout = useMemo(() => {
        return layout[breakpoint].find(el => el.i === id)
    }, [id, breakpoint, layout])

    const currentWidget = useMemo(() => {
        return widget.find(el => el.id === id)
    }, [id, widget])

    return (
        <div className='modal-add-widget__content'>
            {!!currentWidget && !!currentLayout && (
                <ModalEditWidgetInner {...currentWidget} {...currentLayout}/>
            )}
        </div>
    );
};

export default memo(ModalEditWidget);
