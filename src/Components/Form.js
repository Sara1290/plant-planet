import React from 'react';
import Nav from './Nav/Nav';

const Form = () => {


    return (
        <div>
            <Nav />
            <input placeholder="servings"/>
            <br />
            <input placeholder="timeframe"/>
            <br />
            <input placeholder="title"/>
            <br />
            <input placeholder="ingredients"/>
            <br />
            <input placeholder="method"/>
            <br />
            <input placeholder="image"/>
        </div>
    )

}
export default Form;
