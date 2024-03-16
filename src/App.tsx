import './App.css';
import styled from 'styled-components';
import { Header } from './layout/header/Header';
import { Main } from './layout/section/main/Main';
import { AboutUs } from './layout/section/aboutUs/AboutUs';
import { OurService } from './layout/section/ourService/OurService';
import { WhyChooseUs } from './layout/section/whyChooseUs/WhyChooseUs';
import { HowToGetStarted } from './layout/section/howToGetStarted/HowToGetStarted';
import { Testimonial } from './layout/section/testimonial/Testimonial';
import { OurPricing } from './layout/section/ourPricing/OurPricing';
import { Partners } from './layout/section/partners/Partners';
import { Articles } from './layout/section/articles/Articles';

function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <AboutUs/>
            <OurService/>
            <WhyChooseUs/>
            <HowToGetStarted/>
            <Testimonial/>
            <OurPricing/>
            <Partners/>
            <Articles/>
        </div>
    );
}

export default App;

