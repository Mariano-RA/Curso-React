import { useState } from 'react'
import React from 'react'
import Proptypes from 'prop-types'

export const CounterApp = ({value}) => {


    const sumarUno = (event, newValue) => {
        setCounter(counter + 1);
    }

    const restarUno = (event, newValue) => {
        setCounter(counter - 1);
    }

    const reset = (event, newValue) => {
        setCounter(value);
    }

    const handleAdd = () => {
        setCounter(counter + 2);
    }

    const handleReset = () => setCounter(value);
    const handleSubstract = () => setCounter(counter - 2);


    const [ counter, setCounter ] = useState( value )




    return (
        <div>
            <h1>CounterApp</h1>
            <h2> {counter} </h2>

            <button style={{padding: '10px'}} onClick={ (event) => sumarUno(event, 'Boton 1')}>
                Incrementar 1
            </button>

            <button style={{padding: '10px'}} onClick={ (event) => restarUno(event, 'Boton 2')}>
                Restar 1
            </button>

            <button style={{padding: '10px'}} onClick={ (event) => reset(event, 'Boton 3')}>
                Reset
            </button>

            <br></br>

            <button style={{padding: '10px'}} onClick={handleAdd}>
                Agregar 2
            </button>

            <button style={{padding: '10px'}} onClick={ handleSubstract}>
                Restar 2
            </button>

            <button style={{padding: '10px'}} onClick={ handleReset}>
                Reset
            </button>



        </div>
    )
}

CounterApp.propTypes = {
    value: Proptypes.number
}
    
