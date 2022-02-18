
import './App.css';
import './Navbar.css';
import {useState, useEffect} from 'react'
import ExerciseList from './components/ExerciseList';
import ExerciseForm from './components/ExerciseForm';
import {useCookies} from 'react-cookie';
import {useHistory} from 'react-router-dom';
import LoginRegister from './components/LoginRegister';
import logo from './logo.png'
// import './logo.png'

function App() {

  const username = sessionStorage.getItem("username")
  const [exercises, setExercises] = useState([])
  const [customExercises, setCustomExercises] = useState([])
  const [users, setUsers] = useState([])
  const [editExercise, setEditExercise] = useState(null)
  const [token, setToken, removeToken] = useCookies(['mytoken'])
  let history = useHistory()
  let user_id = sessionStorage.getItem("user_id")

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

  const allExercises = () => {
    
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
    }
  
  

  const upperPart = () => {
    
      fetch('http://127.0.0.1:8000/api/upper_part/', {
        'method':'GET',
        headers: {
          'Content-Type':'application/json',
          // 'Authorization': raczej nie potrzebne do fetchowania cwiczen
        }
      })
      .then(resp => resp.json())  //konwersja danych do jsona
      .then(resp => setExercises(resp)) //usestate, generalnie troche magii, troche 
      .catch(error => console.log(error))
    }
  

  const lowerPart = () => {
    
      fetch('http://127.0.0.1:8000/api/lower_part/', {
        'method':'GET',
        headers: {
          'Content-Type':'application/json',
          // 'Authorization': raczej nie potrzebne do fetchowania cwiczen
        }
      })
      .then(resp => resp.json())  //konwersja danych do jsona
      .then(resp => setExercises(resp)) //usestate, generalnie troche magii, troche 
      .catch(error => console.log(error))
    }
  
  const waistPart = () => {
    
      fetch('http://127.0.0.1:8000/api/waist_part/', {
        'method':'GET',
        headers: {
          'Content-Type':'application/json',
          // 'Authorization': raczej nie potrzebne do fetchowania cwiczen
        }
      })
      .then(resp => resp.json())  //konwersja danych do jsona
      .then(resp => setExercises(resp)) //usestate, generalnie troche magii, troche 
      .catch(error => console.log(error))
    }

  const aerobicExercises = () => {
    
      fetch('http://127.0.0.1:8000/api/aerobic/', {
        'method':'GET',
        headers: {
          'Content-Type':'application/json',
          // 'Authorization': raczej nie potrzebne do fetchowania cwiczen
        }
      })
      .then(resp => resp.json())  //konwersja danych do jsona
      .then(resp => setExercises(resp)) //usestate, generalnie troche magii, troche 
      .catch(error => console.log(error))
    }

  const stretchingExercises = () => {
    
      fetch('http://127.0.0.1:8000/api/stretching/', {
        'method':'GET',
        headers: {
          'Content-Type':'application/json',
          // 'Authorization': raczej nie potrzebne do fetchowania cwiczen
        }
      })
      .then(resp => resp.json())  //konwersja danych do jsona
      .then(resp => setExercises(resp)) //usestate, generalnie troche magii, troche 
      .catch(error => console.log(error))
    }


  // useEffect(() => {
  //   if(!token['mytoken']){
  //       // history.push('/')
  //       window.location.href = "/login"
  //   }
  //   }, [token])

  const editBtn = (exercise) => {
    setEditExercise(exercise)
  }

  const exerciseForm = () => {
    setEditExercise({name:'', description:'', type:'', body_part:'', imagepath:''})
  }

  const deleteBtn = (exercise) => {
      const new_exercises = exercises.filter(myexercise => {
        if(myexercise.id === exercise.id) {
          return false;
        }
        return true;
      })

      setExercises(new_exercises)

      //
  }

  const diaryBtn = () => {
    window.location.href = "/diary"
  }

  const loginBtn = () => {
    window.location.href = "/login"
  }

  const logoutBtn = () => {
    removeToken(['mytoken'])
    sessionStorage.clear();
    window.location.reload()

  }


  return (
    <div className="App">

      <div className='row'>
        <div className='col'>
          <img src={logo} alt="" width="100" height="100"/>
        </div>
        <div className='col-md-9'>
          <br/>
          <h1>Ćwiczennik</h1>
          <br/>
          <br/>
        </div>

        {/* {token['mytoken'] = "1b7186054c7e2ec65b5a0373340c281ad2446ec6" ? console.log("siema") : console.log("lol")} */}

        <div className='col'>
        {username === 'neith' && token['mytoken'] && token['mytoken'] !== 'undefined' ?
          
          <button onClick = {exerciseForm} className='btn btn-success'>Dodaj ćwiczenie</button> : null}

        </div>

        <div className='col'>
        {token['mytoken'] && token['mytoken'] !== 'undefined'?
          <button onClick = {diaryBtn} className='btn btn-success'>Dziennik</button> : null}

        </div>

        <div className='col'>
        {/* <button onClick={logoutBtn} className='btn btn-danger'>Wyloguj</button> */}
        {token['mytoken'] && token['mytoken'] !== 'undefined' ? 
          <button onClick={logoutBtn} className='btn btn-danger'>Wyloguj</button>
        : <button onClick={loginBtn} className='btn btn-success'>Zaloguj</button>}
          {/* <button onClick={loginBtn} className='btn btn-success'>Zaloguj</button> */}

        </div>
      
      </div>
      <div className='row'>
          {token['mytoken'] && token['mytoken'] !== 'undefined'?
          <div className='col'>
            <h3>Witaj, {username}!</h3>  
          </div> : null}
      </div>
      <br/>
      

      <div className='row'>
          <div className='col'>
              <button onClick={allExercises} className='btn btn-success'>Wszystkie ćwiczenia</button>
          </div>
          <div className='col'>
              <button onClick={upperPart} className='btn btn-success'>Ćwiczenia na górną partię</button>
          </div>
          <div className='col'>
              <button onClick={waistPart} className='btn btn-success'>Ćwiczenia na talię</button>
          </div>
          <div className='col'>
              <button onClick={lowerPart} className='btn btn-success'>Ćwiczenia dolną partię</button>
          </div>
          <div className='col'>
              <button onClick={aerobicExercises} className='btn btn-success'>Ćwiczenia aerobowe</button>
          </div>
          <div className='col'>
              <button onClick={stretchingExercises} className='btn btn-success'>Ćwiczenia rozciągające</button>
          </div>
      </div>

      {/* do ewentualnej poprawki to na dole */}
      <hr/>
      <ExerciseList exercises = {exercises} users = {users} editBtn = {editBtn} deleteBtn = {deleteBtn}/> 
      {/* najpierw sprawdzamy czy mamy przekazany editExercise, bo defaultowo jest null i dlatego nie dziala */}
      {editExercise ? <ExerciseForm exercise = {editExercise}/> : null} 

      
      

    </div>
    
    // <div className="Navbar">
    //   <ul>
    //     <li></li>
    //     <li ><a href="default.asp">Home</a></li>
    //     <li><a href="news.asp">News</a></li>
    //     <li><a href="contact.asp">Contact</a></li>
    //     <li><a href="about.asp">About</a></li>
    //   </ul>
    // </div>
    // 
  );
}

export default App;
