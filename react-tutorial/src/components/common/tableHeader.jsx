import React, { Component } from 'react';

//columns: array
//sortBy: object
//onSort: Function
class TableHeader extends Component {
    state = {  }

    raiseSort = (path) => {
        const sortBy = {...this.props.sortBy}
        if(sortBy.path === path){
            sortBy.order = sortBy.order === 'asc' ? 'desc' : 'asc'
        }
        else{
            sortBy.path = path;
            sortBy.order = 'asc'
        }
        this.props.onSort(sortBy)
    }
    renderSortIcon = column => {
        const {sortBy} = this.props
        if(column.path !== sortBy.path){
            return null;
        }

        if(sortBy.order === 'asc') return <i className="fa fa-sort-asc"></i>
        return <i className="fa fa-sort-desc"></i>
    }
    render() { 
        return ( <thead>
            <tr>
                {this.props.columns.map(column => (
                <th className="clickable" key={column.path || column.key} onClick={() => this.raiseSort(column.path)}>
                    {column.label} {this.renderSortIcon(column)}
                    </th>))}
            </tr>
        </thead> );
    }
}
 
export default TableHeader;