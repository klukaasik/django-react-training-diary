import React from 'react'
import APIService from '../APIService'
import {useCookies} from 'react-cookie';
import bieznia from './images/bieznia.jpg'
import crunch from './images/crunch.jpg'
import deska from './images/deska.jpg'
import drazek from './images/drazek.png'
import dziendobry from './images/dziendobry.png'
import facepull from './images/facepull.jpg'
import glutebridge from './images/glutebridge.png'
import heeltouches from './images/heeltouches.jpg'
import hipthrust from './images/hipthrust.jpg'
import martwy from './images/martwy.jpg'
import militarypress from './images/militarypress.png'
import nozyce from './images/nozyce.jpg'
import pompki from './images/pompki.jpg'
import przysiad from './images/przysiad.png'
import rowerek from './images/rowerek.png'
import przedramienie from './images/przedramienie.png'
import rozpietki from './images/rozpietki.jpg'
import skakanka from './images/skakanka.jpg'
import sklonyskosne from './images/sklonyskosne.png'
import slonik from './images/slonik.png'
import wyciskanie from './images/wyciskanie.png'
import wykrok from './images/wykrok.png'


function ExerciseList(props) {

  const [token] = useCookies(['mytoken'])
  const username = sessionStorage.getItem("username")

  const editBtn = (exercise) => {
    props.editBtn(exercise)
  }

  const deleteBtn = (exercise) => {
    APIService.DeleteExercise(exercise.id) // token!! token['mytoken']
    .then(() => props.deleteBtn(exercise))
    .catch(error => console.log(error))
    // window.location.reload()
    
  }

  return (
    <div>
        
        {props.exercises && props.exercises.map(exercise => {  //mapowanko do pojedynczych cwiczen, jesli mamy cwiczenia to wtedy wykonaj kod (props.exercises)
            return (
            <div key = {exercise.id}>
              <div className='row'>
              <div className='col-md-3'>
                <h2>{exercise.name}</h2>
                {exercise.name === "Bieg na bieżni" ? <img src={bieznia} alt="" width="200" height="200" /> : null}
                {exercise.name === "Przysiad" ? <img src={przysiad} alt="" width="200" height="200" /> : null}
                {exercise.name === "Hip thrust" ? <img src={hipthrust} alt="" width="200" height="200" /> : null}
                {exercise.name === "Martwy ciąg" ? <img src={martwy} alt="" width="300" height="200" /> : null}
                {exercise.name === "Deska" ? <img src={deska} alt="" width="200" height="200" /> : null}
                {exercise.name === "Facepull" ? <img src={facepull} alt="" width="200" height="200" /> : null}
                {exercise.name === "Skakanka" ? <img src={skakanka} alt="" width="200" height="200" /> : null}
                {exercise.name === "Słonik" ? <img src={slonik} alt="" width="200" height="200" /> : null}
                {exercise.name === "Wyciskanie żołnierskie" ? <img src={militarypress} alt="" width="200" height="200" /> : null}
                {exercise.name === "Skłony skośne w siadzie rozkrocznym" ? <img src={sklonyskosne} alt="" width="200" height="200" /> : null}
                {exercise.name === "Rowerek" ? <img src={rowerek} alt="" width="200" height="200" /> : null}
                {exercise.name === "Wyciskanie sztangi" ? <img src={wyciskanie} alt="" width="200" height="200" /> : null}
                {exercise.name === "Rozpiętki" ? <img src={rozpietki} alt="" width="300" height="200" /> : null}
                {exercise.name === "Podciąganie na drążku" ? <img src={drazek} alt="" width="200" height="200" /> : null}
                {exercise.name === "Pompki" ? <img src={pompki} alt="" width="200" height="200" /> : null}
                {exercise.name === "Crunches" ? <img src={crunch} alt="" width="200" height="200" /> : null}
                {exercise.name === "Heel touches" ? <img src={heeltouches} alt="" width="200" height="200" /> : null}
                {exercise.name === "Nożyce" ? <img src={nozyce} alt="" width="200" height="200" /> : null}
                {exercise.name === "Dzień dobry" ? <img src={dziendobry} alt="" width="300" height="200" /> : null}
                {exercise.name === "Glute bridge" ? <img src={glutebridge} alt="" width="200" height="200" /> : null}
                {exercise.name === "Wykrok do przodu" ? <img src={wykrok} alt="" width="200" height="200" /> : null}
                {exercise.name === "Rozciąganie przedramienia" ? <img src={przedramienie} alt="" width="200" height="200" /> : null}
              </div>

                <div className='col-md-3'>
                <br/>
                <h5>Typ ćwiczenia</h5>
                <p>{exercise.type}</p>
                <h5>Część ciała</h5>
                <p>{exercise.body_part}</p>
                </div>

                <div className='col-md-3'>
                  <br/>
                <h5>Opis ćwiczenia</h5>
                <p>{exercise.description}</p>
                </div>
                
              </div>
              <br/>


                {token['mytoken'] && username === 'neith'?
                
              
                <div className='row'>
                  <br/>
                  <div className='col-md-1'>
                  <button className='btn btn-primary' onClick = {() => editBtn(exercise)}>Zmień</button>
                  </div>
                  
                  <div className='col-md-1'>
                  <button onClick={() => deleteBtn(exercise)} className='btn btn-danger'>Usuń</button>
                  </div>

                </div> : console.log("siema")}

                

                <hr/>
            </div>
            )
        })}

    </div>
  )
}

export default ExerciseList