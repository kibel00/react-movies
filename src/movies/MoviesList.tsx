import React from 'react';
import GenericList from '../utils/GenericList';
import MoviesListCss from './MoviesList.module.css';
import SingleMovie from './SingleMovie';
import { movie } from './movies.model';

export default function MoviesList(props: movieListPros) {


    return (
        <GenericList list={props.movie}>
            <div className={MoviesListCss.div}>
                {props.movie?.map(x => <SingleMovie movie={x} key={x.id} />)}
            </div>
        </GenericList>
    )
}


interface movieListPros {
    movie?: movie[];
}