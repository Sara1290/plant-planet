import axios from 'axios';
import React, { useState, useEffect } from 'react';
// import { useHistory } from 'react-router-dom'
import Nav from './Nav/Nav';
import './Form.scss'
// import Recipe from './Recipe';


const EditForm = (props) => {
    const { id } = props.match.params
    
   

    // const history = useHistory()
    const [servings, setServings] = useState();
    const [timeframe, setTimeFrame] = useState("");
    const [title, setTitle] = useState("");
    const [ingredients, setIngredients] = useState("");
    const [method, setMethod] = useState("");
    const [img, setImg] = useState("");
    // const [edit, setEdit] = useState({});


    useEffect(() => {
        axios.get(`/api/recipe/${id}`)
        .then((res) => {
            setServings(res.data.servings)
            setTimeFrame(res.data.timeframe)
            setTitle(res.data.title)
            setIngredients(res.data.ingredients)
            setMethod(res.data.method)
            setImg(res.data.img)
        })
        .catch(err => console.log(err))
    }, [id])

    console.log(id)
// console.log(recipe)

    const submit = () => {
        axios.put(`/api/edit/${id}`, {servings, timeframe, title, ingredients, method, img})
        .then(() => props.history.push("/dash"))
        .catch((err) => console.log(err))
    }




    return (
        <div className="form-container">
            <h1>Edit Your <br /> Recipe!</h1>
            <Nav />
            <input className="form-input" value={servings} onChange={e => setServings(e.target.value)} placeholder="servings"/>
            <br />
            <input className="form-input" value={timeframe} onChange={e => setTimeFrame(e.target.value)} placeholder="timeframe"/>
            <br />
            <input className="form-input" value={title} onChange={e => setTitle(e.target.value)} placeholder="title"/>
            <br />
            <input className="form-input" value={ingredients} onChange={e => setIngredients(e.target.value)} placeholder="ingredients"/>
            <br />
            <input className="form-input" value={method} onChange={e => setMethod(e.target.value)} placeholder="method"/>
            <br />
            <input className="form-input" value={img} onChange={e => setImg(e.target.value)} placeholder="image"/>
            <br />
            <button onClick={submit}>Submit!</button>
        </div>
    )

}
export default EditForm;