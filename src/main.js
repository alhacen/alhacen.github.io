import React, {useState} from 'react';
import Experience from './components/experience';
import Footer from './components/footer';
import LandingPage from './components/landingPage';
import Projects from './components/projects';

const Main = () =>{
	return(
		<div className="bg-white h-screen">
			<LandingPage />
			<Experience />
			<Projects />
			<Footer />
		</div>

	)
}
export default Main;