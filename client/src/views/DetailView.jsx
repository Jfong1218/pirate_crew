import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {useParams, Link, useNavigate} from "react-router-dom"

const DetailView = () => {
    const {id} = useParams()
    const [pirate, setPirate] = useState()

    useEffect( ()=> {
        axios.get(`http://localhost:8000/api/pirate/${id}`)
        .then(response =>{
            console.log(response.data)
            setPirate(response.data)
        })
        .catch(err => console.log(err))
    }, [])
    return (
    <div>
        {
            pirate?
            <div>
                <div>
                <img src={pirate.image} width='300' height='300'></img>
                <h1>" {pirate.phrase} "</h1>
                </div>
                <div>
                <h2>{pirate.name}</h2>
                <h3>position: {pirate.position}</h3>
                <h3>Treasures: {pirate.chest}</h3>
                <h3>Peg Leg: {pirate.leg? "yes":"No"}</h3>
                <h3>Eye Patch: {pirate.eye? "yes":"No"}</h3>
                <h3>Hook Hand: {pirate.hand? "yes":"No"}</h3>
                </div>
            </div>:
            <h1>Pirate does not exist</h1>
        }
    </div>
    )
}

export default DetailView