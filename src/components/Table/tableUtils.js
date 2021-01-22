export const defaultSorted = [
    {
        dataField: 'id',
        order: 'asc',
    },
];

export const columns = [
    {
        dataField: 'id',
        text: 'ID',
        sort: true,
        headerStyle: () => {
            return { width: '10%' };
        },
    },
    {
        dataField: 'firstName',
        text: 'First Name',
        sort: true,
    },
    {
        dataField: 'lastName',
        text: 'Last name',
        sort: true,
    },
    {
        dataField: 'email',
        text: 'email',
        sort: true,
    },
    {
        dataField: 'phone',
        text: 'Phone',
        sort: true,
    },
];

export const paginationOptions = {
    showTotal: true,
    sizePerPageList: [
        {
            text: '10',
            value: 10,
        },
        {
            text: '20',
            value: 20,
        },
        {
            text: '30',
            value: 30,
        },
    ],
};
