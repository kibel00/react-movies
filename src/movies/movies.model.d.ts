export interface movie {
    id: number;
    title: string;
    poster: string;
}



export interface landingPageDTO {
    movieInTheaters?: movie[];
    upComingReleases?: movie[];
}