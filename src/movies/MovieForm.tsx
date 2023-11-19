import { Form, Formik, FormikHelpers } from "formik";
import { movieCreateDTO } from "./movies.model";
import * as Yup from 'yup';
import FormGroupText from "../utils/FormGroupText";
import FormGroupCheckBox from "../utils/FormGroupCheckBox";
import FormGroupDate from "../utils/FormGroupDate";
import FormGroupImage from "../utils/FormGroupImage";
import Button from "../utils/Button";
import { Link } from "react-router-dom";
import MultipleSelector, { multipleSelectorModel } from "../utils/MultipleSelector";
import { genresDTO } from "../genres/Genres.Model";
import { useState } from "react";
import { thearesDTO } from "../theares/theares.model";
import ActorsTypeAhead from "../actors/ActorsTypeAhead";
import { movieActorsDTO } from "../actors/actors.model";

function MovieForm(props: movieFormProps) {
    const [selectedGenres, setSelectedGenres] = useState(mapGenres(props.selectedGenres));
    const [noSelectedGenres, setnoSelectedGenres] = useState(mapGenres(props.noSelectedGenres));


    const [selectedTheares, setselectedTheares] = useState(mapGenres(props.seletectTheares));
    const [noSetselectedTheares, SetnoSetselectedTheares] = useState(mapGenres(props.noSeletectTheares));


    const [selectedActors, setSelectedActors] = useState<movieActorsDTO[]>([])

    function mapGenres(genreArray: { id: number, name: string }[]): multipleSelectorModel[] {
        return genreArray.map(value => {
            return { key: value.id, value: value.name }
        })
    }

    return (
        <Formik initialValues={props.model}
            onSubmit={(value, action) => {

                value.genresId = selectedGenres.map(value => value.key);
                value.thearesId = selectedTheares.map(value => value.key);
                props.onSubmit(value, action);
            }}
            validationSchema={Yup.object({
                title: Yup.string().required('This field is requried').firstCapLetter(),
            })}>


            {(formikProps) => (
                <Form>
                    <FormGroupText label="Title" field="title" />
                    <FormGroupCheckBox label="In Theaters" field="movieInTheaters" />
                    <FormGroupText label="Trailer" field="trailer" />
                    <FormGroupDate label="Release Date" field="releaseDate" />
                    <FormGroupImage label="Poster" field="poster" imageUrl={props.model.posterUrl} />

                    <div className="form-group">
                        <label>Genres</label>
                        <MultipleSelector selecteds={selectedGenres} noSeletect={noSelectedGenres} onChange={(seletect, noSeletect) => {
                            setSelectedGenres(seletect);
                            setnoSelectedGenres(noSeletect);
                        }} />
                    </div>

                    <div className="form-group">
                        <label>Theares</label>
                        <MultipleSelector selecteds={selectedTheares} noSeletect={noSetselectedTheares} onChange={(seletect, noSeletect) => {
                            setselectedTheares(seletect);
                            SetnoSetselectedTheares(noSeletect);
                        }} />
                    </div>

                    <div className="form-group">
                        <ActorsTypeAhead onAdd={actors => {
                            setSelectedActors(actors);
                        }} actors={selectedActors}
                        onRemove={
                            actor => {
                                const actors = selectedActors.filter(x => x !== actor);
                                setSelectedActors(actors);
                            }
                        }
                            ListUI={(actor: movieActorsDTO) =>
                                <>
                                    {actor.name} / <input placeholder="Character" type="text" value={actor.character} onChange={e => {
                                        const index = selectedActors.findIndex(x => x.id === actor.id);

                                        const actors = [...selectedActors];
                                        actors[index].character = e.currentTarget.value;
                                        setSelectedActors(actors);
                                    }} />
                                </>
                            } />
                    </div>
                    <Button disabled={formikProps.isSubmitting} type="submit">Send</Button>
                    <Link className="btn btn-secondary" to="/">Cancel</Link>
                </Form>
            )}
        </Formik>
    )
}


interface movieFormProps {
    model: movieCreateDTO;
    onSubmit(values: movieCreateDTO, action: FormikHelpers<movieCreateDTO>): void;
    selectedGenres: genresDTO[];
    noSelectedGenres: genresDTO[];
    seletectTheares: thearesDTO[];
    noSeletectTheares: thearesDTO[];
}


export default MovieForm;