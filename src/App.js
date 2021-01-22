import React, { useEffect } from 'react';
import Navbar from './components/Navbar/';
import JumbotronComponent from './components/Jumbotron/';
import Table from './components/Table/';
import { useDispatch } from 'react-redux';
import { getUsersList } from './actions/userAction';

const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUsersList());
    }, [dispatch]);

    return (
        <>
            <Navbar author='Dmitry Mordvintsev' />
            <JumbotronComponent
                title='React Redux Table'
                subtitle='Test task for ItSpecial'
            />
            <Table />
        </>
    );
};

export default App;
