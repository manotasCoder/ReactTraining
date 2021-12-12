import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter,Routes,Route } from "react-router-dom";
import App from './components/App';
import Weather from './components/Weather';
import { createBrowserHistory } from 'history';
import './index.css';

export const history = createBrowserHistory(); 
// ReactDOM.render(<App />, document.getElementById('root') );
ReactDOM.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="globalTime" element={<Weather />} />
        </Routes>
    </BrowserRouter>,
    document.getElementById('root') );

// new Promise( (resolve, reject) => {
//     return reject(new Error('No bears'));

//     setTimeout( () =>{
//         console.log("Bears");
//         resolve('Beets Battle');
//     }, 2000 );
// })
// .then( (quote) => {
//     console.log(quote);
// })
// .catch( (error) =>{
//     console.log(error);
// } );