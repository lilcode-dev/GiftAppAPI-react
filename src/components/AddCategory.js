import React, { useState } from 'react'
import './AddCategory.css'
import PropTypes from 'prop-types'

export const AddCategory = ({ setCategories }) => {
    const [inputValue, setInputValue] = useState('') // useState() is undefined! first state of inputvalue

    const handleInputChange = (e) => {
        setInputValue(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault();

        if (inputValue.trim().length > 2) {
            setCategories((values) => [inputValue, ...values])
            setInputValue('')
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
            />
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired,
}

//CHECK LATER!!!!!!!
// inputValue.trim().length > 2
//     ? ( setCategories((values) => [...values, inputValue]),
//       setInputValue(''))
//     : false
