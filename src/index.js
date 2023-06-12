import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "../node_modules/bootstrap/dist/js/bootstrap.min";
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom"
import CricketApp from './components/CricketApp';
import TodoBasic from './components/TodoBasic';
import ProjectDetails from './components/ProjectDetails';
import TodoAdvance from './components/TodoAdvance';
import EHomePage from './components/eCommerceProject/eHomePage';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
         <Routes>
            <Route path='/' element={<App/>}>
             </Route>
             <Route path='projectdetails' element={<ProjectDetails/>}>
                <Route path='cricket' element={<CricketApp/>}/>
                <Route path='todobasic' element={<TodoBasic/>}/>
                <Route path='todoadvance' element={<TodoAdvance/>}/>
                <Route path='e-commerce' element={<EHomePage/>}/>
             </Route>
        </Routes>
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
