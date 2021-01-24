import { rearg } from 'lodash';
import React from 'react';

import Like from './common/Like';
import TableBody from './common/tableBody';
import TableHeader from './common/tableHeader'

const x = <Like></Like>;
class MoviesTable extends React.Component{
    columns =[
        {path: 'title', label: 'Title'},
        {path: 'genre.name', label: 'Genre'},
        {path: 'numberInStock', label: 'Stock'},
        {path: 'dailyRentalRate', label: 'Rate'},
        {key: 'like', content: movie => <Like liked={movie.liked} onClick={() => this.props.onLike(movie)}/>},
        {key: 'delete', content: movie => <button onClick={() => this.props.onDelete(movie) } className="btn btn-danger sm">delete</button>}
    ]
    
    render(){  
        const {movies, sortBy, onSort} = this.props
    return (
        <div>
           <table className="table">
                    <TableHeader columns={this.columns}
                     sortBy={sortBy}
                     onSort={onSort}/>
                    <TableBody data={movies} columns={this.columns}/>
                </table> 
        </div>
    );
    }
}


export default MoviesTable;