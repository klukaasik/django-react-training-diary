import React from 'react'
import APIService from '../APIService'

function DiaryList(props) {


    const editBtn = (onehistory) => {
        props.editBtn(onehistory)
    }
    
    const deleteBtn = (onehistory) => {
        APIService.DeleteHistory(onehistory.id)
        .then(() => props.deleteBtn(onehistory))
        .catch(error => console.log(error))
        
    }

    const username = sessionStorage.getItem("username")
    console.log(username)

    

  return (
    <div>
        

        {props.history.map(onehistory => { 
            
            return(
                <div key = {onehistory.id}>
                    {username === onehistory.username ? 
                    <div className='row'>
                        
                        <div className='col-md-9'>
                            {/* <h2>{onehistory.history_name}</h2>
                            <p>{onehistory.name}</p> */}
                            <div className='row'>
                                <div className='col'>
                                    <h4>{onehistory.name}</h4>
                                </div>
                                <div className='col'>
                                    <h5>{onehistory.date}</h5>
                                </div>
                                <div className='col'>
                                    <h5>{onehistory.start_time} - {onehistory.end_time}</h5>
                                </div>
                            </div>

                            <div className='row'>
                                <div className='col'>
                                    <h6>Nazwa ćwiczenia</h6>
                                </div>
                                <div className='col'>
                                    <h6>Serie</h6>
                                </div>
                                <div className='col'>
                                    <h6>Powtórzenia</h6>
                                </div>
                                <div className='col'>
                                    <h6>Waga</h6>
                                </div>
                               
                                
                            </div>
                            
                            
                              
                            {props.statistics.map (stat => {
                                let user_id = sessionStorage.setItem("user_id", onehistory.user)
                                return(
                                    <div key={stat.id}>
                                        <div className='row'>
                                            <div className='col'>
                                                {stat.history === onehistory.id ? <p>{stat.exercise_name}</p> : null}
                                            </div>
                                            <div className='col'>
                                                {stat.history === onehistory.id ? <p>{stat.sets}</p> : null}
                                            </div>
                                            <div className='col'>
                                                {stat.history === onehistory.id ? <p>{stat.reps}</p> : null}
                                            </div>
                                            <div className='col'>
                                                {stat.history === onehistory.id ? <p>{stat.weight}kg</p> : null}
                                            </div>
                                        

                                        </div>
                                        
                                        
                                    </div>
                                )
                            })}
                            
                            {/* tu bedzie renderowany kolejna funkcja map, ale ze statystykami, poprawic dobieranie id do historii, zeby to bylo dynamiczne */}
                            
                        </div>
                        
                        {/* <div className='col-md-6'>
                            <h2>{onehistory.name}</h2>
                        </div> */}
                        {/* <div className='col-md-3'>
                            <h2>{onehistory.statistics}</h2>
                        </div>
                        <div className='col-md-3'>
                            <h2>{onehistory.user}</h2>
                        </div> */}

                        {/* <div className='col'>
                            <button onClick={() => editBtn(onehistory)} className="btn btn-primary">Zmień</button>
                        </div> */}
                        <div className='col'>
                            <button onClick={() => deleteBtn(onehistory)} className="btn btn-danger">Usuń</button>
                        </div>
                        <hr/>
                        
                    </div>
                    
                    
                    : null}
                    
                    
                </div> 
                
            )
        })}
    </div>
  )
}

export default DiaryList