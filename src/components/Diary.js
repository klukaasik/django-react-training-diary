import React from 'react'
import {useState, useEffect} from 'react'
import DiaryList from './DiaryList'
import DiaryForm from './DiaryForm'
import {useCookies} from 'react-cookie';

function Diary() {

    const username = sessionStorage.getItem("username")
    const [history, setHistory] = useState([])
    const [newestHistory, setNewestHistory] = useState([])
    const [editHistory, setEditHistory] = useState(null)
    const [statistics, setStatistics] = useState([])
    const [editStatistics, setEditStatistics] = useState(null)
    const [exercises, setExercises] = useState([])
    const [users, setUsers] = useState('')
    const [token, setToken] = useCookies(['mytoken'])

    const returnBtn = () => {
      window.location.href = "/"
    }

    const editBtn = (onehistory) => {
      setEditHistory(onehistory)
      // setEditStatistics() dodac
    }

    const deleteBtn = (onehistory) => {
        const new_history = history.filter(myhistory => {
          if(myhistory.id === onehistory.id) {
            return false
          }
          return true;
        })

        setHistory(new_history)
    }

    const historyForm = () => {
      setEditHistory({name: '', date: '', start_time: '', end_time: ''}) // dodac tu pare rzeczy
      setEditStatistics({})
    }


    useEffect(() => {
        fetch('http://127.0.0.1:8000/api/history/', {
          'method':'GET',
          headers: {
            'Content-Type':'application/json',
            // 'Authorization': raczej nie potrzebne do fetchowania cwiczen
          }
        })
        .then(resp => resp.json())  //konwersja danych do jsona
        .then(resp => setHistory(resp)) //usestate, generalnie troche magii, troche 
        .catch(error => console.log(error))
      }, [])

      useEffect(() => {
        fetch('http://127.0.0.1:8000/api/statistics/', {
          'method':'GET',
          headers: {
            'Content-Type':'application/json',
            // 'Authorization': raczej nie potrzebne do fetchowania cwiczen
          }
        })
        .then(resp => resp.json())  //konwersja danych do jsona
        .then(resp => setStatistics(resp)) //usestate, generalnie troche magii, troche 
        .catch(error => console.log(error))
      }, [])

      useEffect(() => {
        fetch('http://127.0.0.1:8000/api/users/', {
          'method':'GET',
          headers: {
            'Content-Type':'application/json',
            // 'Authorization': raczej nie potrzebne do fetchowania cwiczen
          }
        })
        .then(resp => resp.json())  //konwersja danych do jsona
        .then(resp => setUsers(resp)) //usestate, generalnie troche magii, troche 
        .catch(error => console.log(error))
      }, [])

      useEffect(() => {
        fetch('http://127.0.0.1:8000/api/exercises/', {
          'method':'GET',
          headers: {
            'Content-Type':'application/json',
            // 'Authorization': raczej nie potrzebne do fetchowania cwiczen
          }
        })
        .then(resp => resp.json())  //konwersja danych do jsona
        .then(resp => setExercises(resp)) //usestate, generalnie troche magii, troche 
        .catch(error => console.log(error))
      }, [])

      useEffect(() => {
        fetch('http://127.0.0.1:8000/api/newest_history/', {
          'method':'GET',
          headers: {
            'Content-Type':'application/json',
            // 'Authorization': raczej nie potrzebne do fetchowania cwiczen
          }
        })
        .then(resp => resp.json())  //konwersja danych do jsona
        .then(resp => setNewestHistory(resp)) //usestate, generalnie troche magii, troche 
        .catch(error => console.log(error))
      }, [])


    return (
        <div className='App'>
          <div className='row'>
            <div className='col-md-10'>
              <h1>Dziennik użytkownika {username}</h1>
              <hr/>
              <DiaryList history = {history} statistics = {statistics} users = {users} editBtn = {editBtn} deleteBtn = {deleteBtn}/>
              {editHistory ? <DiaryForm onehistory = {editHistory} exercises = {exercises} newestHistory = {newestHistory}/> : null}
            </div>

            <div className='col'>
              {token['mytoken'] ? <button onClick={historyForm} className='btn btn-primary'>Dodaj trening</button> : null}
            </div>

            <div className='col'>
              <button onClick={returnBtn} className='btn btn-primary'>Cofnij</button>
            </div>

          </div>
          <div className='row'>
            <div className='col'>
              {/* <DiaryList history = {history} statistics = {statistics} users = {users} editBtn = {editBtn} deleteBtn = {deleteBtn}/>
              {editHistory ? <DiaryForm onehistory = {editHistory}/> : null} */}
            </div>
          </div>

          
            
            
        </div>
  )
}

export default Diary