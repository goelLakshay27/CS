import React from "react";
import Profile from "./Profile";
import './gallery.css'

function Gallery(){
    const student=[
        {
        pic:'https://picsum.photos/200/200',
        myname:"Lakshay",
        branch:"CS",
        section:"B",
        college:"ABES engineering college"
    },
    {
        pic:'https://picsum.photos/200/200',
        myname:"Lavesh",
        branch:"CS",
        section:"B",
        college:"ABES engineering college"
    },
    {
        pic:'https://picsum.photos/200/200',
        myname:"Lokii",
        branch:"CS",
        section:"B",
        college:"ABES engineering college"
    },
    ];
    return(
        <div class="container">
            {/* <div><Profile name="Lakshay Goel" branch="CS" section="B" college="ABES engineering college" /></div>
            <div><Profile name="Lokii" branch="ECE" section="C" college="AKG" /></div> */}

            {/* <Profile data={student} /> */}

            {
                student.map((ele,index)=>(
                    <Profile data={ele} key={index}/>
                ))
            }
        </div>
    )
}

export default Gallery;