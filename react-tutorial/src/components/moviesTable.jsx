import React from 'react';

import Like from './common/Like';
import Table from './common/table';


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
           <Table 
           columns={this.columns}
           data={movies}
           sortBy={sortBy}
           onSort={onSort}
           />
        </div>
    );
    }
}


export default MoviesTable;