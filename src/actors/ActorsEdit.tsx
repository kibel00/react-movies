import ActorsForm from "./ActorsForm";

export default function ActorsEdit() {
    return (
        <>
            <h3>Edit Actors</h3>
            <ActorsForm model={{ name: 'Tom Holland', birthDate: new Date('1996-06-01T00:00:00'), 
            imageUrl: 'https://m.media-amazon.com/images/M/MV5BNzZiNTEyNTItYjNhMS00YjI2LWIwMWQtZmYwYTRlNjMyZTJjXkEyXkFqcGdeQXVyMTExNzQzMDE0._V1_UY1200_CR85,0,630,1200_AL_.jpg' }} 
            onSubmit={values => console.log(values)} />
        </>
    )
}