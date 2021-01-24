import React, { Component } from 'react';

import TableBody from './tableBody';
import TableHeader from './tableHeader'
const Table = (props) => {
    const {columns, sortBy, onSort, data} = props;
    return (  
        <table className="table">
                    <TableHeader columns={columns}
                     sortBy={sortBy}
                     onSort={onSort}/>
                    <TableBody data={data} columns={columns}/>
        </table> 
    );
}
 
export default Table;