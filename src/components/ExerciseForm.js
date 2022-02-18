import React, {useState, useEffect} from 'react'
import APIService from '../APIService'
import {useCookies} from 'react-cookie';

function ExerciseForm(props) {
    const [name, setName] = useState('')
    const [description, setDescription] = useState('') // do zmiany nazwy i opisu, bo props jest immutable
    const [type, setType] = useState('')
    const [body_part, setBodyPart] = useState('')
    const [imagepath, setImagepath] = useState('')
    const [token, setToken] = useCookies(['mytoken'])
    // const [type, setType] = useState(props.exercise.type)
    // const [body_part, setBodyPart] = useState(props.exercise.description)
    // const [imagepath, setImagepath] = useState(props.exercise.imagepath)  

    useEffect(() => {
        setName(props.exercise.name)
        setDescription(props.exercise.description)
        setType(props.exercise.type)
        setBodyPart(props.exercise.body_part)
        setImagepath(props.exercise.imagepath)
    }, [props.exercise]) // do przelaczania sie miedzy updatami roznych cwiczen

    const updateExercise = () => {
        APIService.UpdateExercise(props.exercise.id, {name, description, type, body_part, imagepath}) // tutaj dodac tez token w razie potrzeby!!!
        .then(resp => console.log(resp))
        window.location.reload() // niby sie da dosc latwo to zaktualizowac bez odswiezania ale po co ~6:07

    }

    const insertExercise = () => {
        APIService.InsertExercise({name, description, type, body_part, imagepath})
        .then(resp => console.log(resp))
        window.location.reload() // niby sie da dosc latwo to zaktualizowac bez odswiezania ale po co ~6:26
    }

    return (
    <div>
        {props.exercise ? ( // taki tam operator 3argumentowy
            <div>
                <div className='row'>

                    <div className='col-md-3'>
                        <label htmlFor='title' className='form-label'>Nazwa</label>
                        <input type="text" className='form-control' id="name" placeholder = "Wprowadź nazwę ćwiczenia" value = {name}  onChange = {e => setName(e.target.value)}/>
                    </div>

                    <div className='col-md-3'>
                        <label htmlFor='title' className='form-label'>Typ ćwiczenia</label>
                        <input className='form-control' list="type" id="typ" name="typ" placeholder = "Wprowadź typ ćwiczenia" value = {type}  onChange = {e => setType(e.target.value)} />
                        <datalist id="type">
                            <option value="upper_part"/>
                            <option value="lower_part"/>
                            <option value="waist"/>
                            <option value="stretching"/>
                            <option value="aerobic"/>
                        </datalist>
                       
                    </div>

                    <div className='col-md-3'>
                        <label htmlFor='title' className='form-label'>Część ciała</label>
                        <input type="text" className='form-control' id="body_part" placeholder = "Wprowadź część ciała" value = {body_part}  onChange = {e => setBodyPart(e.target.value)}/>
                    </div>

                    <div className='col-md-3'>
                        <label htmlFor='title' className='form-label'>Ścieżka do zdjęcia</label>
                        <input type="text" className='form-control' id="imagepath" placeholder = "Wprowadź ścieżkę do zdjęcia" value = {imagepath}  onChange = {e => setImagepath(e.target.value)}/>
                    </div>
                    
                
                </div>

                <div className='row'>

                    <div className='col-md-5'>
                        <label htmlFor='title' className='form-label'>Opis ćwiczenia</label>
                        <textarea className='form-control' id="description" rows="5" value = {description} onChange = {e => setDescription(e.target.value)}></textarea>
                        <br/>
                    </div>
                                
                </div>

                <div className='row'>
                    <div className='col-md-3'> 
                    {
                        props.exercise.id ? <button onClick={updateExercise} className='btn btn-success'>Zmień ćwiczenie</button>
                        : <button onClick={insertExercise} className='btn btn-success'>Dodaj ćwiczenie</button>
                    }

                    </div>
                </div>

                    
                    
                

                </div>

            ) : null}
    </div>
  )
}

export default ExerciseForm