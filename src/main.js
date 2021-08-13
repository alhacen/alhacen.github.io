import React, {useState} from 'react';
import Experience from './components/experience';
import LandingPage from './components/landingPage';

const Main = () =>{
	return(
		<div className="bg-white h-screen">
			<LandingPage />
			<Experience />
		</div>

	)
}
export default Main;