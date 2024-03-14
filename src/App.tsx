import './App.css';
import styled from 'styled-components';
import { Header } from './layout/header/Header';
import { Main } from './layout/section/main/Main';
import { AboutUs } from './layout/section/aboutUs/AboutUs';
import { OurService } from './layout/section/ourService/OurService';

function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <AboutUs/>
            <OurService/>
        </div>
    );
}

export default App;

