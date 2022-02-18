import {useCookies} from 'react-cookie';

export default class APIService {

    static UpdateExercise(exercise_id, body) { // , token do parametrow moze sie przydac hjeszcze
        
        return fetch(`http://127.0.0.1:8000/api/exercises/${exercise_id}/`, {
            'method':'PUT',
            headers: {
                'Content-Type':'application/json',
                // 'Authorization': `Token ${token}`
                // 'Authorization': raczej nie potrzebne do fetchowania cwiczen
            },
            body:JSON.stringify(body)
        }).then(resp => resp.json())
    }

    static InsertExercise(body) { //,token?
        return fetch('http://127.0.0.1:8000/api/exercises/', {
            'method':'POST',
            headers: {
                'Content-Type':'application/json',
                // 'Authorization': `Token ${token}`
                // 'Authorization': raczej nie potrzebne do fetchowania cwiczen
            },
            body:JSON.stringify(body)
        }).then(resp => resp.json())
        
    }

    static DeleteExercise(exercise_id){
        return fetch(`http://127.0.0.1:8000/api/exercises/${exercise_id}/`, {
            'method':'DELETE',
            headers: {
                'Content-Type':'application/json',
                // 'Authorization': `Token ${token['mytoken']}`
                // 'Authorization': raczej nie potrzebne do fetchowania cwiczen
            }
        })
    }

    static LoginUser(body) {
        return fetch('http://127.0.0.1:8000/auth/', {
            'method':'POST',
            headers: {
                'Content-Type':'application/json',
            
            },
            body:JSON.stringify(body)
        }).then(resp => resp.json())
        
    }

    static RegisterUser(body) {
        return fetch('http://127.0.0.1:8000/api/users/', {
            'method':'POST',
            headers: {
                'Content-Type':'application/json',
            
            },
            body:JSON.stringify(body)
        }).then(resp => resp.json())
        
    }

    static UpdateHistory(history_id, body) { // , token do parametrow moze sie przydac hjeszcze
        
        return fetch(`http://127.0.0.1:8000/api/history/${history_id}/`, {
            'method':'PUT',
            headers: {
                'Content-Type':'application/json',
                // 'Authorization': `Token ${token}`
                // 'Authorization': raczej nie potrzebne do fetchowania cwiczen
            },
            body:JSON.stringify(body)
        }).then(resp => resp.json())
    }

    static DeleteHistory(history_id){
        return fetch(`http://127.0.0.1:8000/api/history/${history_id}/`, {
            'method':'DELETE',
            headers: {
                'Content-Type':'application/json',
                // 'Authorization': `Token ${token['mytoken']}`
                // 'Authorization': raczej nie potrzebne do fetchowania cwiczen
            }
        })
    }

    static InsertHistory(body) { //,token?
        return fetch('http://127.0.0.1:8000/api/history/', {
            'method':'POST',
            headers: {
                'Content-Type':'application/json',
                // 'Authorization': `Token ${token}`
                // 'Authorization': raczej nie potrzebne do fetchowania cwiczen
            },
            body:JSON.stringify(body)
        }).then(resp => resp.json())
        
    }

    static InsertStats(body) { //,token?
        return fetch('http://127.0.0.1:8000/api/statistics/', {
            'method':'POST',
            headers: {
                'Content-Type':'application/json',
                // 'Authorization': `Token ${token}`
                // 'Authorization': raczej nie potrzebne do fetchowania cwiczen
            },
            body:JSON.stringify(body)
        }).then(resp => resp.json())
        
    }

    static upperPart() {
    
        fetch('http://127.0.0.1:8000/api/upper_part/', {
          'method':'GET',
          headers: {
            'Content-Type':'application/json',
            // 'Authorization': raczej nie potrzebne do fetchowania cwiczen
          }
        })
        .then(resp => resp.json())  //konwersja danych do jsona
      }
    
    static NewestHistory(){
        fetch('http://127.0.0.1:8000/api/newest_history/', {
          'method':'GET',
          headers: {
            'Content-Type':'application/json',
            // 'Authorization': raczej nie potrzebne do fetchowania cwiczen
          }
        })
        .then(resp => resp.json())  //konwersja danych do jsona
      
    }
}