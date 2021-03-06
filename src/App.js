import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import React from 'react';
import DialogComponent from "./components/forms/DialogComponent";
import Gallery from "./components/Gallery";
import TableForm from "./components/videogames/TableForm";
import FramerMotion from "./components/slider/FramerMotion";
import CardAnimation from "./components/card-animation/CardAnimation";
import Calculadora from "./components/calculator/Calculadora";
import WeatherApp from "./components/weather/WeatherApp";
import QuizApp from "./components/quiz/QuizApp";
import Navbar from "./components/navbar/Navbar";
import Main from "./components/filtering/Main";
import Form from "./components/register/Form";
import Tictac from "./components/tic-tac-toe/Tictac";
import RockPaperScissors from "./components/rock-paper-scissors/RockPaperScissors";


function App() {


    return (

//Lo ideal es no tener mucho codigo en app. Lo que se debe de hacer en app es llamar los componentes aqui

        <div>

            <Router>

                <Navbar/>

                <Routes>


                    <Route path="/" element={<Gallery/>}/>
                    <Route path="/quizapp" element={<QuizApp/>}/>
                    <Route path="/framermotion" element={<FramerMotion/>}/>
                    <Route path="/cardanimation" element={<CardAnimation/>}/>
                    <Route path="/calculadora" element={<Calculadora/>}/>
                    <Route path="/tableform" element={<TableForm/>}/>
                    <Route path="/weatherapp" element={<WeatherApp/>}/>
                    <Route path="/dialogcomponent" element={<DialogComponent/>}/>
                    <Route path="/main" element={<Main/>}/>
                    <Route path="/form" element={<Form/>}/>
                    <Route path="/tictac" element={<Tictac/>}/>
                    <Route path="/rockpaperscissors" element={<RockPaperScissors/>}/>

                </Routes>

            </Router>

        </div>

    );
}


export default App;
