import React, { Component } from 'react';
import {getMovies} from '../services/fakeMovieService';
import { paginate } from '../utils/Paginate';

import Like from './common/Like';
import Pagination from './common/Pagination';
class MoviesComponent extends Component {
    state = { 
        movies: getMovies(),
        pageSize: 4,
        currentPage: 1
    }

    handleDelete = (movie)  => {
        const newMovies = this.state.movies.filter(m =>  movie._id !== m._id)
        this.setState(
            {
                movies: newMovies
            }
        )
    }

    handleLike = (movie) => {
        console.log("clicked", movie);
        const movies = [...this.state.movies];
        const index = movies.indexOf(movie);
        movies[index] = {...movies[index]};
        movies[index].liked = !movies[index].liked;
        this.setState({
            movies
        })
    }

    handlePageChange = (page) => {
        this.setState({
            currentPage: page
        })
    }

    render() {
        
        if (this.state.movies.length === 0) return (<p>There are no movies</p>)
        const movies = paginate(this.state.movies, this.state.currentPage, this.state.pageSize)
        console.log(movies)
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
                             <td><Like liked={movie.liked} onClick={() => this.handleLike(movie)}/></td>
                             <td>
                                 <button onClick={() => this.handleDelete(movie) } className="btn btn-danger sm">delete</button>
                             </td>
                         </tr>)
                        })}
                    </tbody>
                </table>
                <Pagination 
                currentPage={this.state.currentPage}
                itemsCount={this.state.movies.length} pageSize={this.state.pageSize} onPageChange={this.handlePageChange}/>
            </div>
        );
    }
}

export default MoviesComponent;