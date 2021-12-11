import React, {memo, useCallback, useEffect} from 'react';
import {Navigate, Route, Routes, useLocation, useNavigate} from 'react-router-dom'
import {
    handleLayoutAdd,
    handleWidgetAdd,
    handleLayoutLoad,
    handleMenuToggle,
    handleWidgetLoad,
    loadLayoutFromLocal,
    loadWidgetFromLocal,
    useDispatch
} from 'stores'
import {EModalPosition, EModalSize, Header, Layout, Menu, Modal} from 'modules'
import {ModalAddWidget, ModalEditWidget} from "modules/Modal";
import {EIconColor, EIconSize, EIconType, IconButton} from 'components'
import {ERoutePath as path} from "routes";
import {initialLayouts} from "../stores/initial";
import {defaultWidgets} from "../stores/store.helpers";
import {generateId} from "../utils";

const DashboardHeader = memo(() => {
    const dispatch = useDispatch()
    const navigate = useNavigate();

    const handleClickStart = useCallback(() => {
        dispatch(handleMenuToggle())
    }, [dispatch])

    const handleClickEnd = useCallback(() => {
        navigate(path.CREATE, {replace: true});
    }, [navigate])

    return (
        <>
            <Header
                start={<IconButton
                    onClick={handleClickStart}
                    type={EIconType.Bars}
                    color={EIconColor.WHITE}
                    size={EIconSize.EXTRA_LARGE}
                />}
                end={
                    <IconButton
                        onClick={handleClickEnd}
                        type={EIconType.Add}
                        color={EIconColor.WHITE}
                        size={EIconSize.EXTRA_LARGE}
                    />
                }
            />
        </>
    )
})

const DashboardInner = memo((): JSX.Element => {
    return (
        <div className='dashboard'>
            <DashboardHeader/>
            <div className='dashboard__main'>
                <Menu>
                    <Layout/>
                </Menu>
            </div>
        </div>
    )
})

const DashboardModal = memo((): JSX.Element => {
    const navigate = useNavigate();

    const handleModalClose = useCallback(() => {
        navigate(path.DASHBOARD, {replace: true});
    }, [navigate])

    return (
        <Modal
            title='Add widget to tab'
            onClose={handleModalClose}
            size={EModalSize.LARGE}
            position={EModalPosition.TOP}
            header
        >
            <ModalAddWidget/>
        </Modal>
    )
})

const DashboardEditModal = memo(() => {
    const navigate = useNavigate();

    const handleModalClose = useCallback(() => {
        navigate(path.DASHBOARD, {replace: true});
    }, [navigate])

    return (
        <Modal
            title='Edit Widget'
            onClose={handleModalClose}
            size={EModalSize.MIDDLE}
            position={EModalPosition.RIGHT}
            header
        >
            <ModalEditWidget/>
        </Modal>
    )
})

const DashboardPage = () => {
    const location = useLocation();
    const dispatch = useDispatch()

    const createDefaultDashboard = useCallback(() => {
        dispatch(handleLayoutLoad(initialLayouts))
        defaultWidgets.forEach(el => {
            const itemId = generateId()
            dispatch(handleLayoutAdd(itemId, el.id, el.options))
            dispatch(handleWidgetAdd(itemId, el.id))
        })
    }, [dispatch])

    const handleLoadLayouts = useCallback(() => {
        const layout = loadLayoutFromLocal()
        if (layout) {
            dispatch(handleLayoutLoad(layout))
        } else {
            createDefaultDashboard()
        }
    }, [dispatch, createDefaultDashboard])

    const handleLoadWidgets = useCallback(() => {
        const widgets = loadWidgetFromLocal()
        if (widgets) {
            dispatch(handleWidgetLoad(widgets))
        }
    }, [dispatch])


    useEffect(() => {
        handleLoadLayouts()
        handleLoadWidgets()
    }, [handleLoadWidgets, handleLoadLayouts])

    return (
        <>
            <Routes location={location}>
                <Route
                    path='/*'
                    element={<DashboardInner/>}
                />
                <Route
                    path="*"
                    element={<Navigate to={'/'}/>}
                />
            </Routes>
            <Routes>
                <Route
                    path={path.CREATE}
                    element={<DashboardModal/>}
                />
                <Route
                    path='/edit/:id'
                    element={<DashboardEditModal/>}
                />
            </Routes>
        </>
    )
};

export default memo(DashboardPage);
