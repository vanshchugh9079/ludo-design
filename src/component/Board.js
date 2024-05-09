import React from 'react'
import Row from './Row'

export default function Board() {
    return (
        <div className='v-board bg-danger ms-auto me-auto d-flex  flex-column '>
            {
                Array.from({ length: 3 }).map((_, i) => (
                    <Row key={i} rowname={i}  />
                ))
            }
        </div>
    )
}
