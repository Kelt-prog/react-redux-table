import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setUserDetails } from '../../actions/userAction';

import ToolkitProvider from 'react-bootstrap-table2-toolkit';
import paginationFactory from 'react-bootstrap-table2-paginator';
import BootstrapTable from 'react-bootstrap-table-next';
import { Container, Spinner } from 'reactstrap';
import { columns, defaultSorted, paginationOptions } from './tableUtils';
import TableSearch from '../Search';
import UserInfo from '../UserInfo';

const Table = () => {
    const dispatch = useDispatch();
    const usersList = useSelector(({ users }) => users.usersList);
    const userDetails = useSelector(({ users }) => users.userDetails);
    const errorUsersList = useSelector(({ users }) => users.errorUsersList);

    const rowEvents = {
        onClick: (e, row, rowIndex) => {
            const selectedUser = usersList.find((user) => user.id === row.id);
            dispatch(setUserDetails(selectedUser));
        },
    };

    return (
        <Container className='mb-50'>
            {usersList ? (
                <ToolkitProvider
                    bootstrap4
                    keyField='id'
                    data={usersList}
                    columns={columns}
                    defaultSorted={defaultSorted}
                    search>
                    {(props) => (
                        <>
                            <TableSearch {...props.searchProps} />
                            <BootstrapTable
                                {...props.baseProps}
                                hover
                                striped
                                wrapperClasses='table-responsive'
                                rowEvents={rowEvents}
                                pagination={paginationFactory(
                                    paginationOptions
                                )}
                            />
                        </>
                    )}
                </ToolkitProvider>
            ) : (
                <div className='text-center'>
                    {errorUsersList ? (
                        <h4>{errorUsersList}</h4>
                    ) : (
                        <Spinner color='dark' />
                    )}
                </div>
            )}
            {userDetails && <UserInfo userDetails={userDetails} />}
        </Container>
    );
};

export default Table;
