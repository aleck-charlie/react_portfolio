import React from 'react'
import img from '../assets/images/flowers.jpg'

export default function Cards() {
    return (

        <div className="cards">
            <p>
                Hi there! My name is Charlie Aleck (they/them). 
                <br/>
                <br/>
                I'm a full stack web developer based in Chicago with a focus on Javascript, React, MongoDB, Graphql and more.

                <br/>
                <br/>
                When I'm not working on code, you can find me delving into new cookbooks, trying new techniques in digitial illustration and tending my garden.
                <br/>
                <br/>
                Feel free to browse through my Github or Resume below
                <br/>
                <br/>
                <a href="https://github.com/aleck-charlie" className="link">Github</a> <a href="" className="link">Resume</a>
            </p>
            <img className="img" src={img}
                alt="small bouquet of purple flowers" />
        </div>
    )
}
