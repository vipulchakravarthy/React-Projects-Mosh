import { rearg } from 'lodash';
import React from 'react';

import Like from './common/Like';
import TableHeader from './common/tableHeader'

class MoviesTable extends React.Component{
    columns =[
        {path: 'title', label: 'Title'},
        {path: 'genre.name', label: 'Genre'},
        {path: 'numberInStock', label: 'Stock'},
        {path: 'dailyRentalRate', label: 'Rate'},
        {key: 'like'},
        {key: 'delete'}
    ]
    
    render(){  
        const {movies, onDelete, onLike, sortBy, onSort} = this.props
    return (
        <div>
           <table className="table">
                    <TableHeader columns={this.columns}
                     sortBy={sortBy}
                     onSort={onSort}/>
                    <tbody>
                        {movies.map((movie, index) => {
                            return (<tr key={index}>
                             <td>{movie.title}</td>
                             <td>{movie.genre.name}</td>
                             <td>{movie.numberInStock}</td>
                             <td>{movie.dailyRentalRate}</td>
                             <td><Like liked={movie.liked} onClick={() => onLike(movie)}/></td>
                             <td>
                                 <button onClick={() => onDelete(movie) } className="btn btn-danger sm">delete</button>
                             </td>
                         </tr>)
                        })}
                    </tbody>
                </table> 
        </div>
    );
    }
}


export default MoviesTable;