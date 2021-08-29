import React from 'react'
import img from '../assets/images/flowers.jpg'

export default function Cards() {
    return (
        
        <div className="cards">
            <p>Charlie Aleck (they/them) is a full stack web developer based in Chicago specializing in Javascript, React, MongoDB, Graphql and more.</p>
            <p>When they aren't developing web projects, you can find them drawing and painting, tending their garden and riding their bike year-round</p>
            <img className="img" src={img}
                alt="image of Charlie's hand holding a small bunch of purple flowers"/>
        </div>
    )
}
