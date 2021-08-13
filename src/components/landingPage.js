import React, { useEffect, useState, useRef } from 'react'
const LandingPage = () =>{
    const [offset, setOffset] = useState(0);
    const svgRef = useRef(null)
    let transitionThrottel=false
    useEffect(() => {
        const animate = () => {
            let totalHeight = document.body.clientHeight
            let scrolled = window.pageYOffset
            setOffset(1-((totalHeight-scrolled)/totalHeight));            
            if(!transitionThrottel){
                [...svgRef.current.children].map(elm=>{
                    transitionThrottel=true
                    elm.style.transform=`translate(${Math.random()*100}px,${Math.random()*100}px)`
                    setTimeout(()=>{
                        transitionThrottel=false;
                    },1000)
                })
            }
        }
        animate();
        window.onscroll = animate
      }, []);
      
    return(
        <div id="landingPage" class=" h-5/6 relative flex-col md:flex-row flex items-center justify-center">
            <div class="absolute z-0 h-full">
                <svg id="landingPageShapes" ref={svgRef}  class="w-screen" style={{transform:`scale(${1+offset},${1+offset})`, transform: `translate`}} height="auto" viewBox="0 0 523 467" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="373" cy="415" r="52" fill="black"/>
                    <circle cx="409.5" cy="113.5" r="113.5" fill="black"/>
                    <rect x="45" y="169" width="234" height="234" fill="black"/>
                    <circle cx="50" cy="153" r="50" fill="black"/>
                </svg>
            </div>
 
            <div class="flex z-10 flex-col justify-center gap-6 text-white mix-blend-difference">
                <div class="text-5xl">
                I'm <span class="font-bold">ahmad;</span>  
                </div>
                <div class="text-xl">
                A <span class="font-bold">HTML Programmer;</span> 
                </div>
            </div>
        </div>
    )
}
export default LandingPage;