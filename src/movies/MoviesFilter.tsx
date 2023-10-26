import { Field, Form, Formik } from "formik";
import { genresDTO } from "../genres/Genres.Model";
import Button from "../utils/Button";

export default function MoviesFilter() {

    const initialValues: moviesFilter = {
        title: '',
        genresId: 0,
        movieInTheaters: false,
        upComingReleases: false
    }


    const genres: genresDTO[] = [{ id: 1, name: 'Action' }, { id: 1, name: 'Comedy' }];

    return (
        <>
            <h3>Filter Movies</h3>
            <Formik initialValues={initialValues} onSubmit={values => console.log(values)}
            >
                {(formikProps) => (
                    <Form>
                        <div className="form-inline">
                            <div className="form-group mb-2">
                                <label htmlFor="title" className="sr-only">Title</label>
                                <input type="text" className="form-control" id="title" placeholder="Movies title" {...formikProps.getFieldProps('title')} />
                            </div>
                            <div className="form-group mx-sm-3 mb-2">
                                <select className="form-control" {...formikProps.getFieldProps('genresId')}>
                                    <option value="0">--Select a movies genre--</option>
                                    {genres.map(genre => <option key={genre.id} value={genre.id}>{genre.name}</option>)}
                                </select>
                            </div>
                            <div className="form-group mx-sm-3 mb-2">
                                <Field className="form-check-input" id="upComingReleases" name="upComingReleases" type="checkbox" />
                                <label className="form-check-label" htmlFor="upComingReleases">Up Coming Releases</label>
                            </div>
                            <div className="form-group mx-sm-3 mb-2">
                                <Field className="form-check-input" id="movieInTheaters" name="movieInTheaters" type="checkbox" />
                                <label className="form-check-label" htmlFor="movieInTheaters">Movie In Theaters</label>
                            </div>
                            <Button className="btn btn-primary mb-2 mx-sm-3" onClick={() => formikProps.submitForm()}>Filter</Button>
                            <Button className="btn btn-danger mb-2" onClick={() => formikProps.setValues(initialValues)}>Clear</Button>
                        </div>
                    </Form>
                )}

            </Formik>
        </>
    )
}


interface moviesFilter {
    title: string;
    genresId: number;
    movieInTheaters: boolean;
    upComingReleases: boolean;
}