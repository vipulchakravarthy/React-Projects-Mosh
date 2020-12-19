import React from 'react';

import Like from './common/Like';

function MoviesTable(props) {
    const {movies, onDelete, onLike} = props
    return (
        <div>
           <table className="table">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Genre</th>
                            <th>Stock</th>
                            <th>Rate</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
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

export default MoviesTable;