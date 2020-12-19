import React, { Component } from 'react';
import { getGenres } from '../services/fakeGenreService';
import {getMovies} from '../services/fakeMovieService';
import { paginate } from '../utils/Paginate';

import ListGroup from './common/ListGroup';
import Pagination from './common/Pagination';
import MoviesTable from './moviesTable';
class MoviesComponent extends Component {
    state = { 
        movies:[],
        genres: [],
        pageSize: 4,
        currentPage: 1,
        selectedGenre: '',
    }

    componentDidMount(){
        const genres = [{name: "All Genres"}, ...getGenres()]
        this.setState({
            genres,
            movies: getMovies(),

        })
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

    handleGenreSelect = (genre) => {
        this.setState({
            selectedGenre: genre,
            currentPage: 1
        })
    }

    render() {
        
        if (this.state.movies.length === 0) return (<p>There are no movies</p>)

        const {movies: allMovies, currentPage, pageSize, selectedGenre } = this.state;
        const filtered = selectedGenre && selectedGenre._id? allMovies.filter(m => m.genre._id === selectedGenre._id) : allMovies
        const movies = paginate(filtered, currentPage, pageSize)
        return (
            <div className="container">
            <div className="row" style={{marginTop: 20}}>
                <div className="col-3">
                    <ListGroup 
                    items={this.state.genres} 
                    selectedItem={this.state.selectedGenre}
                    onItemSelect={this.handleGenreSelect}/>
                </div>
                <div className="col">
                <p>There are {filtered.length} movies in database</p>
                <MoviesTable 
                movies={movies}
                onLike={this.handleLike}
                onDelete={this.handleDelete}
                />
                <Pagination 
                currentPage={currentPage}
                itemsCount={filtered.length} pageSize={pageSize} onPageChange={this.handlePageChange}/>
                </div>
            </div>
            </div>
        );
    }
}

export default MoviesComponent;