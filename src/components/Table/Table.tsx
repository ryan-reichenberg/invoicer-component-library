import React, { FC, useMemo } from 'react'
import { CellProps, Column, useTable } from 'react-table';

interface ColumnData {
    name: string
    cellRender?: (props: CellProps<{}, any>) => React.ReactElement

}
export interface TableProps {
    data: Record<string, any>[]
    columns: ColumnData[]
    

}
export const Table: FC<TableProps> = (props) => {

    const createHeadersFromProps = () => {
        let headers: Column<{}>[] = []
            for (let tableData of props.columns) {                
                let value: Column<{}> = {
                    Header: tableData.name,
                    accessor: tableData.name.toLowerCase().replace(' ', ''),
                    ...(tableData.cellRender && {Cell:(props) => tableData.cellRender!(props)})
                }
                headers.push(value)
            }
            return headers;

        };
        const createDataFromProps = () => {
            let data: {}[] = [];
            
            for (let tableData of props.data) {
                let value: any = {};
                Object.keys(tableData).forEach(element => {
                    let key = element.toLowerCase().replace(' ','');
                    value[key] = tableData[key];   
                })
                data.push(value);
            }
           
            console.log(data)
            return data
        }
        const columns = useMemo(() => createHeadersFromProps(), [])
        const data = useMemo(() => createDataFromProps(), [])
    
        const {
          getTableProps,
          getTableBodyProps,
          headerGroups,
          rows,
          prepareRow,
        } = useTable({columns, data})
        
        // <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"></path></svg>
        return (
            <div className={"shadow-md rounded-md bg-white border border-gray-200 w-full h-full -my-2 overflow-x-auto"} {...getTableProps({})} >
                <table className='shadow rounded-md w-max md:w-full divide-y divide-gray-200 text-sm p-4 h-full'>
                    <thead>
                        {headerGroups.map(headerGroup => (
                            <tr {...headerGroup.getHeaderGroupProps()} className='text-left bg-gray-100 text-gray-700 font-semibold uppercase'>
                                {headerGroup.headers.map(column => (
                                    <th className='py-1 px-5' {...column.getHeaderProps()}>{column.render('Header')}</th>
                                ))}
                            </tr>
                    ))}
                    {/* <tr className='text-left bg-gray-200 text-gray-700 font-semibold'>
                        <th className='py-1 px-5'>CLIENT</th>
                        <th className='py-1 px-5'>MOBILE</th>
                        <th className='py-1 px-5'>JOB</th>
                        <th className='py-1 px-5'>PRICE</th>
                        <th className='py-1 px-5'>STATUS</th>
                        <th className='px-5'></th>
                    </tr> */}
                    </thead>
                    <tbody {...getTableBodyProps()}>
                        {rows.map((row, i) => {
                            prepareRow(row)
                            return (
                                <tr {...row.getRowProps({
                                    className: (i % 2 ? 'bg-gray-50' : '') + ' text-sm md:text-base'
                                })}>
                                {row.cells.map(cell => {
                                    return <td {...cell.getCellProps({
                                        className: 'py-3 md:py-4 px-5'
                                    })}>{cell.render('Cell')}</td>
                                })}
                                </tr>
                            )
                        })}
                    {/* <tr className="text-sm md:text-base">
                        <td className='py-3 md:py-4 px-5'>Tom Smith</td>
                        <td className='py-3 md:py-4 px-5'>0491 570 156</td>
                        <td className='py-3 md:py-4 px-5'>
                            <p>
                                Web Design
                            </p>
                            <p className='text-xs -mt-1 text-gray-400'>
                                Tom's Construction
                            </p>

                        </td>
                        <td className='py-3 md:py-4 px-5'>$200.00</td>
                        <td className='py-3 md:py-4 px-5'>
                        <span className="px-2 inline-flex text-xs leading-5 font-medium rounded-full bg-red-100 text-red-800">Overdue</span>
                        </td>
                        <td></td>
                    </tr>
                    <tr className='bg-gray-50 text-sm md:text-base'>
                        <td className='py-3 md:py-4 px-5'>Tom Smith</td>
                        <td className='py-3 md:py-4 px-5'>0491 570 156</td>
                        <td className='py-3 md:py-4 px-5'>
                            <p>
                                Web Design
                            </p>
                            <p className='text-xs -mt-1 text-gray-400'>
                                Tom's Construction
                            </p>

                        </td>
                        <td className='py-3 md:py-4 px-5'>$200.00</td>
                        <td className='py-3 md:py-4 px-5'>
                        <span className="px-2 inline-flex text-xs leading-5 font-medium rounded-full bg-red-100 text-red-800">Overdue</span>
                        </td>
                        <td><svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"></path></svg></td>
                    </tr>
                    <tr className="text-sm md:text-base">
                        <td className='py-3 md:py-4 px-5'>Tom Smith</td>
                        <td className='py-3 md:py-4 px-5'>0491 570 156</td>
                        <td className='py-3 md:py-4 px-5'>
                            <p>
                                Web Design
                            </p>
                            <p className='text-xs -mt-1 text-gray-400'>
                                Tom's Construction
                            </p>

                        </td>
                        <td className='py-3 md:py-4 px-5'>$200.00</td>
                        <td className='py-3 md:py-4 px-5'>
                        <span className="px-2 inline-flex text-xs leading-5 font-medium rounded-full bg-red-100 text-red-800">Overdue</span>
                        </td>
                        <td><svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"></path></svg></td>
                    </tr> */}
                    </tbody>
                    {/* <tr className='bg-gray-50'>
                        <td className='py-4 px-5'>Tom Smith</td>
                        <td className='py-4 px-5'>0491 570 156</td>
                        <td className='py-4 px-5'>
                            <p>
                                Web Design
                            </p>
                            <p className='text-xs -mt-1 text-gray-400'>
                                Tom's Construction
                            </p>

                        </td>
                        <td className='py-4 px-5'>$200.00</td>
                        <td className='py-4 px-5'>
                        <span className="px-2 inline-flex text-xs leading-5 font-medium rounded-full bg-red-100 text-red-800">Overdue</span>
                        </td>
                        <td><svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"></path></svg></td>
                    </tr> */}
                </table>
            </div>
        )
    }