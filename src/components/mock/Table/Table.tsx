import React, {memo} from 'react';
import {useTable} from "react-table";
import {TGraphProps, TTableInner} from "../types";
import './table.scss'

const TableInner = memo(({data, columns}: TTableInner) => {
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable({
        columns,
        data,
    })
    return (
        <table {...getTableProps()}>
            <thead>
            {headerGroups.map(headerGroup => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map(column => (
                        <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                    ))}
                </tr>
            ))}
            </thead>
            <tbody {...getTableBodyProps()}>
            {rows.map((row, i) => {
                prepareRow(row)
                return (
                    <tr {...row.getRowProps()}>
                        {row.cells.map(cell => {
                            return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                        })}
                    </tr>
                )
            })}
            </tbody>
        </table>
    )
})

const Table = ({data, width, height}: TGraphProps) => {
    const columns = React.useMemo(() =>
            [
                {
                    Header: 'Name',
                    columns: [
                        {
                            Header: 'First Name',
                            accessor: 'firstName',
                        },
                        {
                            Header: 'Last Name',
                            accessor: 'lastName',
                        },
                    ],
                },
                {
                    Header: 'Info',
                    columns: [
                        {
                            Header: 'Age',
                            accessor: 'age',
                        },
                        {
                            Header: 'Visits',
                            accessor: 'visits',
                        },
                        {
                            Header: 'Status',
                            accessor: 'status',
                        },
                        {
                            Header: 'Profile Progress',
                            accessor: 'progress',
                        },
                    ],
                },
            ]
        , []
    )

    return (
        <div
            style={{width, height}}
            className="table"
        >
            <div className="table__wrapper">
                <TableInner data={data} columns={columns}/>
            </div>
        </div>
    )
};

export default memo(Table);
