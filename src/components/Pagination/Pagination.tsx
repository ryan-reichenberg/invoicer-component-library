import React, { useState } from 'react'
import { Button } from '../Button'

export interface PaginationProps {
    page: number;
    pageSize: number;
    totalResults: number
}


export const Pagination = (props: PaginationProps) => {
    const [page, setPage] = useState(props.page)
    return (
        <div className='flex justify-between items-center'>
            <p className='text-sm'>Showing <span className='font-bold'>{page == 1 ? 1: (page - 1) * props.pageSize}</span> to <span className='font-bold'>{page * props.pageSize}</span> of <span className='font-bold'>{props.totalResults}</span> </p>
            <div className='space-x-3 mr-3'>
                <Button primary={false} label='Previous' onClick={() => setPage(page-1)}/>
                <Button primary={false} label='Next' onClick={() => setPage(page+1)}/>
            </div>
        </div>
    )
}
