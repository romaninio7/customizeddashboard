import React, {memo, useCallback, useMemo} from 'react';
import {handleBreakpointSet, handleLayoutUpdate, useDispatch, useSelector} from 'stores'
import {GridItemContainer, GridLayout} from 'components';
import {CONSTANTS} from 'helpers';
import {handleWidthSet} from "../../stores/widget/widgetActions";

const Layout = () => {
    const dispatch = useDispatch()
    const {layout, breakpoint} = useSelector(({widget}) => widget)

    const data = useMemo(() => {
        return layout[breakpoint]
    }, [layout, breakpoint])

    const handleLayoutChange = useCallback(layout => {
        dispatch(handleLayoutUpdate(layout, breakpoint))
    }, [dispatch, breakpoint])

    const handleBreakPointChange = useCallback(breakpoint => {
        dispatch(handleBreakpointSet(breakpoint))
    }, [dispatch])

    const handleWidthChange = useCallback(width => {
        dispatch(handleWidthSet(width))
    }, [dispatch])

    return (
        <div className="grids-l">
            <GridLayout
                rowHeight={190}
                onWidthChange={handleWidthChange}
                onLayoutChange={handleLayoutChange}
                onBreakpointChange={handleBreakPointChange}
                layouts={layout}
                breakpoints={CONSTANTS.BREAKPOINTS}
                cols={CONSTANTS.COLS}
                className="layout"
                autoSize={false}
                isDraggable
                isResizable
            >
                {!!data && data.map(item => (
                    <GridItemContainer
                        key={item.i}
                        item={item}
                    />
                ))}
            </GridLayout>
        </div>
    );
};

export default memo(Layout);
