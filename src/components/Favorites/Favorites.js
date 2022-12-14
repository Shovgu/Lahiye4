import axios from 'axios';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeMovie } from '../../store/actions/actions';
import { useNavigate } from "react-router-dom";
import './Favorites.css';


const Favorites = () => {
    const navigate = useNavigate();
    const [response, setResponse] = useState({})
    const myLink = 'https://acb-api.algoritmika.org/api/movies/list'
    const [input, setInput] = useState("")
    const dispatch = useDispatch()
    const { list } = useSelector(state => state.lists)


    const link = () => {
        navigate(`/list/${response.id}`, { state: { title: response.title } })
    }

    const remove = (id) => {
        dispatch(removeMovie(id))
    }

    const changeInput = (e) => {
        setInput(e.target.value)
    }

    const save = () => {
        const headers = {
            'Content-Type': 'application/json',
        }
        const data = {
            "title": input,
            "movies": list.map(item => {
                return item.imdbID
            })
        }

        axios.post(myLink, data, {
            headers: headers
        }).then(response => setResponse(response.data))

    }

    return (
        <>
            <h1 className='favorites_title'>FAVORITES</h1>
            <div className="favorites">
                <input value={input} placeholder="List name" className="favorites__name" onChange={changeInput} />
                <ul className="favorites__list">
                    {list.map((item) => {
                        return <li style={{ display: "flex", justifyContent: "space-between" }} key={item.imdbID}>{item.Title} ({item.Year})<button className='favorites_close' onClick={() => remove(item.imdbID)} style={{ display: "inline-block" }}>x</button></li>
                    })}
                </ul>
                {
                    response.id ? <div className='favorites_click' onClick={link}>Click here</div> : <button onClick={save} type="button" disabled={input ? list.length===0? true : false : true} className="favorites__save">{input ? "Save list" : "Give name"}</button>
                }
            </div>
        </>
    );
}

export default Favorites;