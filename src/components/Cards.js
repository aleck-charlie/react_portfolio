import React from 'react'
import img from '../assets/images/flowers.jpg'

export default function Cards() {
    return (
        
        <div className="cards">
            Charlie Aleck (they/them) is a full stack web developer and artist based in Chicago. Specializing in Javascript, React, MongoDB, Graphql and more. 
            <img className="img" src={img}
                alt="image of Charlie's hand holding a small bunch of purple flowers"/>
        </div>
    )
}
