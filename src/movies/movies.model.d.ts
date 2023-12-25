export interface movie {
    id: number;
    title: string;
    poster: string;
}




export interface movieCreateDTO {
    title: string;
    movieInTheaters: boolean;
    trailer: string;
    releaseDate?: Date;
    poster?: string;
    posterUrl?: string;
    genresId?: number[];
    thearesId?: number[];
    actors?: movieActorsDTO[];
}

export interface landingPageDTO {
    movieInTheaters?: movie[];
    upComingReleases?: movie[];
}