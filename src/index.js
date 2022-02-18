import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Route, BrowserRouter} from 'react-router-dom';
import LoginRegister from './components/LoginRegister';
import {CookiesProvider} from 'react-cookie';
import Diary from './components/Diary';
import NotFound from './components/NotFound';
import {useCookies} from 'react-cookie';

function Router() {
  const [token, setToken] = useCookies(['mytoken'])
  return(
    <CookiesProvider>   
      <BrowserRouter>
        <Route exact path = "/" component = {App} />
        <Route exact path = "/login" component = {LoginRegister} />
        {token['mytoken'] ? <Route exact path = "/diary" component = {Diary} /> : <Route exact path = "/diary" component = {NotFound} />}
        <Route path='/*' component = {NotFound} />
      
      </BrowserRouter>
    </CookiesProvider>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
