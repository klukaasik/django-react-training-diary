import React, {useState, useEffect} from 'react'
import APIService from '../APIService'
import { v4 as uuidv4 } from 'uuid';
import App from '../App';

function DiaryForm(props) {

    let user_id = sessionStorage.getItem("user_id")
    user_id = parseInt(user_id)

    const [name, setName] = useState('') // do useeffect na dole!!
    const [date, setDate] = useState('')
    const [start_time, setStartTime] = useState('')
    const [end_time, setEndTime] = useState('')
    const [user, setUser] = useState(user_id)


    const [newestHistory, setNewestHistory] = useState([])

    const [exType, setExType] = useState([]) // props.stat.exercise_type
    const [exName, setExName] = useState([]) // props.stat.exercise_name
    const [sets, setSets] = useState([]) // props.stat.sets
    const [reps, setReps] = useState([]) // props.stat.reps
    const [weight, setWeight] = useState([]) // props.stat.weight
    // console.log(exType)


    
    // console.log(user_id)

    useEffect(() => {
        setName(props.onehistory.name)
        setDate(props.onehistory.date) 
        setStartTime(props.onehistory.start_time)
        setEndTime(props.onehistory.end_time)
        // setUser(props.onehistory.user)
        // ...
    }, [props.onehistory]) // definiujemy dla czego chcemy zmieniac efekt


    const [inputFields, setInputFields] = useState([
        // { id: uuidv4(), firstName: '', lastName: '' },
        { id: uuidv4(), exercise_type: '', exercise_name: '', sets: 0, reps: 0, weight: 0, exercises: 0, history:0 },
      ]);
    
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log("InputFields", inputFields);
        console.log("exType", exType);
      };
    
      const handleChangeInput = (id, event) => {
        const newInputFields = inputFields.map(i => {
          if(id === i.id) {
            i[event.target.name] = event.target.value
          }
          return i;
        })
        
        setInputFields(newInputFields);
        // console.log("extype: " + exType);
        // console.log("exname: " + exName);
        // console.log("sets: " + sets);
        // console.log("reps: " + reps);
        // console.log("weight: " + weight);
      }
    
      const handleAddFields = () => {
        // setInputFields([...inputFields, { id: uuidv4(),  firstName: '', lastName: '' }])
        setInputFields([...inputFields, { id: uuidv4(), exercise_type: '', exercise_name: '', sets: 0, reps: 0, weight: 0, exercises: 0, history:0 }])
        setExType([...exType, {exType}])
        setExName([...exName, {exName}])
        setSets([...sets, {sets}])
        setReps([...reps, {reps}])
        setWeight([...weight, {weight}])

      }
    
      const handleRemoveFields = id => {
        const values  = [...inputFields];
        values.splice(values.findIndex(value => value.id === id), 1);
        setInputFields(values);
      }

    const updateHistory = () => {
        APIService.UpdateHistory(props.onehistory.id, {name, date, start_time, end_time, user}) // do body moze wiecej trzeba dodac, moze nie, zobacyzmy
        // APIService.UpdateStats()
        .then(resp => console.log(resp))
        window.location.reload()
    }

    // const waistPart = () => {
    //     fetch('http://127.0.0.1:8000/api/newest_history/', {
    //     'method':'GET',
    //     headers: {
    //         'Content-Type':'application/json',
    //         // 'Authorization': raczej nie potrzebne do fetchowania cwiczen
    //     }
    //     })
    //     .then(resp => resp.json())  //konwersja danych do jsona
    //     .then(resp => setNewestHistory(resp)) //usestate, generalnie troche magii, troche 
    //     .then(resp => console.log(resp))
    //     .catch(error => console.log(error))
    // }


    const insertStats = () => {

        APIService.InsertStats(inputFields)
    }


  

    const insertHistory = () => {
    
        APIService.InsertHistory({name, date, start_time, end_time, user}) //do poprawki bo teraz pewnie nie dziala
        
        // APIService.InsertStats(inputFields)
        // window.location.reload()
    }

  return (
    <div>
        <h3>Dodaj trening</h3>

        {props.onehistory ? (
            <div>
                <div className='row'>
                    <div className='col-md-3'>
                        <label htmlFor='title' className='form-label'>Nazwa</label>

                        <input type="text" className="form-control" id="title" placeholder='Wprowadź nazwę treningu' value = {name} onChange = {e => setName(e.target.value)}/>

                        <br/>

                        {/* {
                            props.onehistory.id ?  <button onClick={updateHistory} className='btn btn-success'>Zmień trening</button>
                            :  <button onClick={insertHistory} className='btn btn-success'>Dodaj trening</button>
                        } */}
                    </div>

                    <div className='col-md-2'>
                        <label htmlFor='title' className='form-label'>Data treningu</label>

                        <input type="date" className="form-control" id="title" placeholder='Wprowadź datę treningu' value = {date} onChange = {e => setDate(e.target.value)}/>


                        <br/>
                    </div>
                    
                    <div className='col-md-2'>
                        <label htmlFor='title' className='form-label'>Godzina rozpoczęcia</label>

                        <input type="time" className="form-control" id="title" placeholder='Wprowadź godzinę rozpoczęcia treningu' value = {start_time} onChange = {e => setStartTime(e.target.value)}/>
                        <br/>
                    </div>

                    <div className='col-md-2'>
                        <label htmlFor='title' className='form-label'>Godzina skończenia</label>

                        <input type="time" className="form-control" id="title" placeholder='Wprowadź godzinę zakończenia treningu' value = {end_time} onChange = {e => setEndTime(e.target.value)}/>
                        <br/>
                    </div>

                    <div className='col-md-2'>
                        <br/>
                        
                        <button onClick={insertHistory} className='btn btn-success'>Zapisz</button>
                    </div>
                

                </div> 
                <div className='row'>
                    <form onSubmit={handleSubmit}>
                        <hr/>
                        <h3>Dodaj statystyki treningu</h3>

                        
                        {inputFields.map(inputField => (
                            <div key={inputField.id}>
                                <div className='row'>
                                    <div className='col-md-2'>
                                        {/* <input type="text" className='form-control' id="firstName" value = {inputField.firstName} onChange={event => handleChangeInput(inputField.id, event)} placeholder='xD' /> */}
                                        <input type="text" className='form-control' list="type" id="exercise_type" name="exercise_type"  value = {inputField.exercise_type} onChange={event => {handleChangeInput(inputField.id, event); setExType(event.target.value)}} placeholder='Typ ćwiczenia' />
                                        <datalist id="type">
                                            <option value="upper_part"/>
                                            <option value="lower_part"/>
                                            <option value="waist"/>
                                            <option value="stretching"/>
                                            <option value="aerobic"/>
                                        </datalist>
                                    </div>
                                    <div className='col-md-2'>
                                        <input type="text" className='form-control' list="name" id="exercise_name" name="exercise_name" value = {inputField.exercise_name} onChange={event => {handleChangeInput(inputField.id, event); setExName(event.target.value)}} placeholder='Nazwa ćwiczenia' />
                                        <datalist id="name">
                                            {props.exercises && props.exercises.map(ex => {
                                                return(
                                                    <div key={ex.id}>
                                                        <option value={ex.name}/>
                                                        {ex.name === inputField.exercise_name ? inputField.exercises = ex.id : null}
                                                        
                                                    </div>
                                                    
                                                    
                                                )
                                                
                                            })}
                                            {props.newestHistory && props.newestHistory.map(hist => {
                                                return(
                                                
                                                    inputField.history = hist.id + 1
                                                        
                                                    
                                                    
                                                )
                                            })}
                                            
                                        </datalist>
                                        
                                                        
                                        
                                        
                                        {/* {(() => {
                                            if (inputField.exercise_type === "upper_part"){
                                                
                                            }
                                        })} */}
                                        {/* {inputField.exercise_type == "upper_part" ? 
                                            App.upperPart(ex => {
                                                return(
                                                    <div>
                                                        <p></p>
                                                    <div>
                                                )
                                            })
                                        :null} */}
                                    </div>
                                    <div className='col-md-2'>
                                        <input type="number" className='form-control' name="sets" value = {inputField.sets} onChange={event => {handleChangeInput(inputField.id, event); setSets(event.target.value)}} placeholder='Liczba serii' />
                                    </div>
                                    <div className='col-md-2'>
                                        <input type="number" className='form-control' name="reps" value = {inputField.reps} onChange={event => {handleChangeInput(inputField.id, event); setReps(event.target.value)}} placeholder='Liczba powtórzeń' />
                                    </div>
                                    <div className='col-md-2'>
                                        <input type="number" className='form-control' name="weight" value = {inputField.weight} onChange={event => {handleChangeInput(inputField.id, event); setWeight(event.target.value)}} placeholder='Waga (w kg)' />
                                    </div>
                                    <div className='col'>
                                        <button onClick={handleAddFields} className='btn btn-success'>+</button>
                                    </div>
                                    <div className='col'>
                                        <button onClick={() => handleRemoveFields(inputField.id)} disabled={inputFields.length === 1} className='btn btn-danger'>-</button>
                                    </div>
                                </div>
                                <br/>
                                
                            </div>
                        ))}
                        {/* <div className='col-md-1'>
                            <button onClick={handleSubmit} className='btn btn-info'>Send</button>
                        </div> */}
                    </form>

                </div>
                <div className='row'>
                    <div className='col-md-2'>
                    {
                        props.onehistory.id ?  <button onClick={updateHistory} className='btn btn-success'>Zmień trening</button>
                        :  <button onClick={insertStats} className='btn btn-success'>Dodaj trening</button>
                    }
                    
                    </div>
                </div> 
            </div>        
        ) : null}

        {/* <form onSubmit={handleSubmit}>
            <h1>siema</h1>
            
            {inputFields.map(inputField => (
                <div key={inputField.id}>
                    <div className='row'>
                        <div className='col-md-3'>
                            <input type="text" className='form-control' id="firstName" value = {inputField.firstName} onChange={event => handleChangeInput(inputField.id, event)} placeholder='xD' />
                        </div>
                        <div className='col-md-3'>
                            <input type="text" className='form-control' id="lastName" value = {inputField.lastName} onChange={event => handleChangeInput(inputField.id, event)} placeholder='xDss' />
                        </div>
                        <div className='col-md-1'>
                            <button onClick={handleAddFields} className='btn btn-success'>+</button>
                        </div>
                        <div className='col'>
                            <button onClick={() => handleRemoveFields(inputField.id)} disabled={inputFields.length === 1} className='btn btn-danger'>-</button>
                        </div>
                    </div>
                    <br/>
                    
                </div>
            ))}
            <div className='col-md-1'>
                <button onClick={handleSubmit} className='btn btn-info'>Send</button>
            </div>
        </form> */}
    </div>
  )
}

export default DiaryForm