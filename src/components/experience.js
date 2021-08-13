import React, { useState } from 'react'
const Experience  = () =>{
    const experience = [
        {
            displayName:"Afnamd",
            data:
                {
                    header: 'currently',
                    text: 'My startup as a millionaire'
                }
            
        },
        {
            displayName: 'Innovaccer',
            data:
                {
                    header: 'SDE- intern',
                    text: ''
                }
            
        },
        {
            displayName: 'yantraksh',
            data: 
                {
                    header: 'SDE- intern',
                    text: ''
                }
            
        }
    ]
    const [selected, setSelected] = useState(0)
    return(
        <div class="flex bg-black pt-48 pb-48 justify-center">
            <div class="text-white w-full gap-5 flex flex-col">
                <div class="text-4xl text-center">
                    The journey
                </div>
                <div class="flex flex-col md:flex-row justify-center gap-10">
                    <div class="gap-3 md:flex-col flex-row justify-center flex p-8 border-r">
                        {
                            experience.map((e,index)=>{
                                return (
                                    <div key={e.displayName} onClick={()=> setSelected(index)} class={`border-l-4 ${index===selected?'border-red-400 text-red-200':'border-white text-white'} cursor-pointer text-xl  font-bold p-2 pl-5`}>
                                        {e.displayName}
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div class="flex flex-col gap-5 w-full md:w-96 items-center md:items-start">
                        <div class="text-xl font-bold" style={{wordSpacing:'6px'}}>
                            {experience[selected].data.header} @ <span class="text-red-200" style={{letterSpacing:'2px'}}>{experience[selected].displayName}</span>
                        </div>
                        <div style={{letterSpacing:'2px'}}>
                            {experience[selected].data.text}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Experience;