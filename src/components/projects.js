import React from 'react'
import useWindowSize from '../utils/winResize'
const Projects = () =>{
    const data = [
        {
            displayName: 'izzi.js',
            text: 'A lightweight JavaScript library for building user interfaces. inspired by react and svelte',
            link:[
                {
                    name: 'github',
                    href: 'https://github.com/alhaqhassan/izzi.js'
                }                
            ],
        },
        {
            displayName: 'react_resume_builder',
            text: 'Resume builder using reactJs , you have to just fill your all details(personal, education,work, project, language) and it will automatically create a beautiful downloadable resume',
            link:[
                {
                    name: 'github',
                    href: 'https://github.com/alhaqhassan/react_resume_builder'
                },
                {
                    name: 'live',
                    href: 'https://alhaqhassan.github.io/react_resume_builder/'
                }
            ],
        },
        {
            displayName: 'UPC JMI React app',
            text: 'Official application of University Placement Cell, Jamia Millia Islamia.',
            link:[
                {
                    name: 'github',
                    href: 'https://github.com/upcjmi/upcjmi-react-app'
                },
                {
                    name: 'live',
                    href: 'https://upcjmi.com'
                }
            ],
        },
        {
            displayName: 'upcjmi-jekyll',
            text: 'Old Placement Cell website, made using jekyll',
            link:[
                {
                    name: 'github',
                    href: 'https://github.com/alhaqhassan/upcjmi-jekyll'
                },
                {
                    name: 'live',
                    href: 'https://alhaqhassan.github.io/upcjmi-jekyll/'
                }
            ],
        },
        {
            displayName: 'auto-skip-youtube-ads.js',
            text: 'A script that automates skipping ads on Youtube. It skips Ads less than 5 seconds.',
            link:[
                {
                    name: 'github',
                    href: 'https://github.com/alhaqhassan/auto-skip-youtube-ads.js'
                }
            ],
        },
        {
            displayName: 'irouter.js',
            text: 'irouter.js a tiny, light-weight JavaScript page navigator.',
            link:[
                {
                    name: 'github',
                    href: 'https://github.com/alhaqhassan/irouter.js'
                }
            ],
        },
    ]
    let gridCount;    
    const [width] = useWindowSize()
    if(width>1119)
        gridCount = 3;
    else if(width>640)
        gridCount = 2;
    else
        gridCount = 1
    return(
        <div className=" bg-black  pb-36 justify-center gap-3 text-white">
            <div className="w-full text-center text-4xl pb-10 p-4">
                Things I’ve Created;
            </div>
            <div className="flex flex-wrap justify-center gap-2">
                {
                    Array(gridCount).fill(0).map((_,i)=>{
                        return (
                            <div key={i.toString()} className="flex flex-col gap-2">
                                {
                                    [...data].map((d, j)=>{
                                    return j%gridCount===i?(
                                        <div key={d.displayName} className="md:w-96 w-80 p-6 flex flex-col border relative overflow-hidden">
                                            <div className="cardContent z-10 flex flex-col gap-3  mix-blend-difference">
                                                <div className="font-bold ">{d.displayName}</div>
                                                <div>{d.text}</div>
                                                <div className="flex justify-between">
                                                    {
                                                        d.link.map((link, index)=>{
                                                            return <a key={link.name} href={link.href} target="_blank"><div className={` pl-4 pr-4 pt-1 pb-1 ${index === 0? 'text-red-400 hover:bg-white': 'text-white hover:bg-gray-800'}`}>{link.name}</div></a>
                                                        })
                                                    }
                                                </div>
                                            </div>
                                            <div  className="cardWrapper bg-white h-full absolute z-0"></div>
                                        </div>
                                    ):null
                                    })
                                }

                            </div>

                        )
                    })
                }
            </div>

                

        </div>
    )
}
export default Projects