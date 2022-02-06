import React, { useState, useRef } from 'react'
const Experience  = () =>{
    const experienceColRef = useRef(null)
    const experience = [
        {
            displayName:"Polygon",
            data:
                {
                    header: 'currently',
                    subHeader: 'January 2022 - Present',
                    li:'Created new componets using Vuejs <br> Worked with MetaMask wallet, various payment bridges and decentralized technology <br> fixed various bugs'
                    // text: 'working as a full-stack and  UI UX desingner. mainly working on websocket, payment gateway and prototyping Ui components on figma',
                }
            
        },
        {
            displayName:"Afnamd",
            data:
                {
                    header: 'FullStack Developer',
                    subHeader: 'July 2021 - January 2022',
                    li:'Lead development and design team. <br>created a better routing architectural pattern for expressjs. <br>collaborated with people of different disciplines. <br>Gained experience in resolving conflicts with colleagues. <br>Developed Products and provided tech services to several clients. '
                    // text: 'working as a full-stack and  UI UX desingner. mainly working on websocket, payment gateway and prototyping Ui components on figma',
                }
            
        },
        {
            displayName: 'Innovaccer',
            data:
                {
                    header: 'SDE- intern',
                    subHeader: 'May 2021 - July 2021',
                    text: '',
                    li:'Developed code to convert design wireframes into website elements. <br>Used ReactJs framework for front-end development. <br>Gained skills such that understanding a very large codebase and writing production-level code and writing test cases. <br>Gained experience in resolving conflicts with colleagues. <br>Created a proof of concept for generic routing of their react app'

                }
            
        },
        {
            displayName: 'yantraksh',
            data: 
                {
                    header: 'SDE- intern',
                    subHeader: 'July 2020 - Augush 2020',
                    li: 'Created UI components and created test cases<br> build their custom postman like app for their API testing.<br> Gained skill in collaborating with other developers and ReactJs and redux'
                }
            
        }
    ]
    const [selected, setSelected] = useState(0)
    return(
        <div className="flex bg-black pt-36 pb-36 justify-center overflow-hidden ">
            <div className="text-white w-full gap-5 flex flex-col mix-blend-difference">
                <div className="text-4xl text-center">
                    The journey;
                </div>
                <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-10 flex-1"  style={{transition:'all 0.3s ease-out'}}>
                    <div className="gap-3 md:overflow-x-hidden overflow-x-scroll w-full md:w-auto md:flex-col flex-row justify-center md:justify-start flex p-8 border-r">
                        {
                            experience.map((e,index)=>{
                                let dir1, dir2
                                if(window.aniamteDir === undefined)
                                    window.aniamteDir = index
                                if(window.aniamteDir > index){
                                    dir1='md:animate__slideInDown' 
                                    dir2='animate__slideInLeft'
                                }
                                else{
                                    dir1='md:animate__slideInUp'
                                    dir2= 'animate__slideInRight'
                                }
                                return (
                                    <div key={e.displayName} 
                                        onClick={()=> {
                                            window.aniamteDir = index;
                                            // experienceColRef.current.classList.add(dir==='animate-top'?'slideOutDown':'slideOutUp');
                                            experienceColRef.current.classList.add(dir1);setSelected(index);
                                            experienceColRef.current.classList.add(dir2);setSelected(index);

                                            setTimeout(_=>{},200)

                                            setTimeout(_=>{experienceColRef.current.classList.remove(dir1);experienceColRef.current.classList.remove(dir2)},300)
                                        }} 
                                        className={`border-l-4 mix-blend-difference ${index===selected?'border-red-400 text-red-200':'border-white text-white'} cursor-pointer md:text-xl  font-bold p-2 pl-5`}>
                                        {e.displayName}
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div ref={experienceColRef} className={` flex flex-col w-96  items-center md:items-start `}  style={{animationDuration: '150ms'}}>
                        <div className="text-xl font-bold" style={{wordSpacing:'6px'}}>
                            {experience[selected].data.header} @ <span className="text-red-200 mix-blend-difference letterSpacing-2">{experience[selected].displayName}</span>
                        </div>
                        {
                            experience[selected].data.subHeader?
                            <div className="font-thin letterSpacing-2">
                                {experience[selected].data.subHeader}
                            </div>:null

                        }
                        <div className='pt-3'>
                            {
                                experience[selected].data.li?
                                    <div className="p-8 md:p-0 pt-3 flex flex-col gap-2">
                                        {
                                            experience[selected].data.li?.split("<br>").map(x=>{
                                                return(
                                                    <div key={x} className="flex">
                                                        <div>
                                                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#ff9e9e"><path d="M0 0h24v24H0z" fill="none"/><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/></svg>
                                                        </div>
                                                        <div>
                                                            {x}
                                                        </div>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                :null

                            }
                        </div>
                        
                        <div className="pt-3 flex flex-col gap-2">
                            {experience[selected].data.text}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Experience;