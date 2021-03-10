import React, { Component } from 'react';
import Joi from 'joi-browser';
import Form from './common/form';
import { getGenres } from '../services/fakeGenreService';
import { getMovie, saveMovie } from '../services/fakeMovieService';

class MovieForm extends Form{

    state = {
        data:{
            title: "",
            genreId: "",
            numberInStock: "",
            dailyRentalPrice: "",
        },
        genres:[],
        errors: {}
    }

    schema ={
        title: Joi.string().required().label("Title"),
        genreId: Joi.string().required().label("Genre"),
        numberInStock: Joi.number().required().min(0).max(100).label("Number in stock"),
        dailyRentalPrice: Joi.number().required().min(0).max(10).label("Rental price"),
    }

    componentDidMount() {
        const genres = getGenres();
        this.setState({genres});

        const movieId = this.props.match.params.id;
        if(movieId === "new") return;

        const movie = getMovie(movieId);
        if(!movie) return this.props.history.replace("/not-found")
        
        this.setState({data: this.mapToViewModal(movie)})
    }

    mapToViewModal(movie){
        return{
            _id: movie._id,
            title: movie.title,
            genreId: movie.genre._id,
            numberInStock: movie.numberInStock,
            dailyRentalPrice: movie.dailyRentalPrice
        }
    }

    doSubmit(){
        saveMovie(this.state.data);
        this.props.history.push("/movies");
    }
    
    render(){
        return(
            <div>
            <h1>Movie Form</h1>
            <form onSubmit={this.handleSubmit}>
                {this.renderInput('title', 'Title')}
                {this.renderSelect('genreId', 'Genre', this.state.genres)}
                {this.renderInput('numberInStock', 'Number in stock', "number")}
                {this.renderInput('dailyRentalPrice', 'Rate')}
                {this.renderButton("save")}
            </form>
        </div> 
        )
    }
}

export default MovieForm;