import React, { Component } from 'react';
import {getMovies} from '../services/fakeMovieService';

class MoviesComponent extends Component {
    state = { 
        movies: getMovies()
    }

    handleDelete = (movie)  => {
        const newMovies = this.state.movies.filter(m =>  movie._id != m._id)
        this.setState(
            {
                movies: newMovies
            }
        )
    }

    render() {
        if (this.state.movies.length === 0) return (<p>There are no movies</p>)
        return (
            <div style={{marginTop: 20 }}>
                <p>There are {this.state.movies.length} movies in database</p>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Genre</th>
                            <th>Stock</th>
                            <th>Rate</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.movies.map((movie, index) => {
                            return (<tr key={index}>
                             <td>{movie.title}</td>
                             <td>{movie.genre.name}</td>
                             <td>{movie.numberInStock}</td>
                             <td>{movie.dailyRentalRate}</td>
                             <td>
                                 <button onClick={() => this.handleDelete(movie) } className="btn btn-danger sm">delete</button>
                             </td>
                         </tr>)
                        })}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default MoviesComponent;