import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid'
import './GifExpertApp.css'

const GifExpertApp = () => {
    // 'Kimetsu No Yaiba', 'Boku No Hero', 'Black Clover'
    const [categories, setCategories] = useState(['Boku No Hero'])
    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories} />
            {categories.map((category) => (
                <GifGrid key={category} category={category} />
            ))}
        </>
    )
}
export default GifExpertApp
