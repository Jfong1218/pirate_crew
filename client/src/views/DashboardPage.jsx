import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {Link, useNavigate} from 'react-router-dom'

const DashboardPage = () => {
    const [pirateList, setPirateList] = useState([])
    const navigate = useNavigate()

    useEffect ( () => {
        axios.get('http://localhost:8000/api/pirate')
        .then(response => {
            console.log(response.data)
            setPirateList(response.data)
        })
        .catch( err => console.log(err))
    }, [] )

    const handleDelete = (deleteID) => {
        axios.delete(`http://localhost:8000/api/pirate/${deleteID}`)
        .then(response =>{
            const filterList = pirateList.filter((pirate)=>pirate._id !== deleteID)
            setPirateList(filterList)
        })
        .catch(err => console.log(err))
    }
    return (
    <div>
        <h1>Pirate Crew</h1>
        <Link to='/pirate/new'>Add Pirate</Link>
        <table className = "table table-striped">
            <thead>
                <tr>
                    <th>Pirate</th>
                    <th>Image</th>
                    <th colSpan={2}>Actions available</th>
                </tr>
            </thead>
            <tbody>
                {
                    pirateList.map((eachPirate, i)=>{
                        return(
                            <tr key={i}>
                                <td>{eachPirate.name}</td>
                                <td><img src={eachPirate.image} width='100' height='100'></img></td>
                                <td><Link to={`/pirate/${eachPirate._id}`} className='btn btn-secondary'>View Pirate</Link>
                                <button onClick={()=>handleDelete(eachPirate._id)} className="btn btn-danger">Walk the Plank</button></td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    </div>
    )
}

export default DashboardPage