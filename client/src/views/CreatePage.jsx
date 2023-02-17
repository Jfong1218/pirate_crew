import React, {useState} from 'react'
import axios from 'axios'
import {useNavigate, Link} from 'react-router-dom'


const CreatePage = () => {
    const [name, setName] = useState('')
    const [image, setImage] = useState('')
    const [chest, setChest] = useState('')
    const [phrase, setPhrase] = useState('')
    const [position, setPosition] = useState("Captain")
    const [leg, setLeg] = useState(true)
    const [eye, setEye] = useState(true)
    const [hand, setHand] = useState(true)
    const [errors, setErrors] = useState([])
    const navigate = useNavigate()


    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post(`http://localhost:8000/api/pirate`, {name:name, image:image, chest:chest, phrase:phrase, position:position, leg:leg, eye:eye, hand:hand})
        .then(response => navigate('/'))
        .catch(err =>{
            const errorResponseDataErrors = err.response.data.errors 
            const errMsgArr = []
            for (const eachKey in errorResponseDataErrors) {
                errMsgArr.push(errorResponseDataErrors[eachKey].message)
            }
            setErrors(errMsgArr)
        })
    }

    const clearForm = () => {
        setName("")
    }

    return (
    <div>
        <Link to='/' className='btn btn-primary'>Crew Board</Link>
        <form onSubmit = {handleSubmit}>
            {errors.map((err,index)=><p key={index}>{err}</p>)}
        <div>
            <label className="form-label">Pirate Name:</label>
            <input type="text" className="form-control" name="name" onChange={(e)=>setName(e.target.value)} value={name}/>
        </div>
        <div>
            <label className="form-label">Image url:</label>
            <input type="text" className="form-control" name="image" onChange={(e)=>setImage(e.target.value)} value={image}/>
        </div>
        <div>
            <label className="form-label"># of Treasure Chests:</label>
            <input type="number" className="form-control" name="chest" min='0' max='50' onChange={(e)=>setChest(e.target.value)} value={chest}/>
        </div>
        <div>
            <label className="form-label">Pirate Catch Phrase:</label>
            <input type="text" className="form-control" name="phrase" onChange={(e)=>setPhrase(e.target.value)} value={phrase}/>
            </div>
        <div>
            <label className="form-label">Crew Position:</label>
            <select name="position" onChange={(e)=>setPosition(e.target.value)} value={position}>
                <option value="Captain">Captain</option>
                <option value="Quarter Master">Quarter Master</option>
                <option value="Boatswain">Boatswain</option>
                <option value="Powder Monkey">Powder Monkey</option>
            </select>
        </div>
        <div>
            <input type="checkbox" id="leg" name="leg" className="form-check-input"  onChange={(e)=>setLeg(e.target.checked)} checked={leg}/>
            <label className="form-label" for="leg">Peg Leg</label>
        </div>
        <div>
            <input type="checkbox" id="eye" name="eye" className="form-check-input"  onChange={(e)=>setEye(e.target.checked)} checked={eye}/>
            <label className="form-label" for='eye'>Eye Patch</label>
        </div>
        <div>
            <input type="checkbox" id='hand' name='hand' className="form-check-input"  onChange={(e)=>setHand(e.target.checked)} checked={hand}/>
            <label className="form-label" for='hand'>Hook Hand</label>
        </div>
        <button type="submit" className='btn btn-success'>Create Pirate</button>
        </form>
    </div>
    )
}

export default CreatePage