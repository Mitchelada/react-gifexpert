import React,{Fragment, useState} from 'react';
import {AddCategory} from './components/AddCategory'
import { GifGrid } from './components/GifGrid';

const GifExpertApp = () =>{

    const [categories, setCategories] = useState(["Kimetsu no yaiba"]);
    
    return(
        <Fragment>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories = {setCategories}/>
            <hr/>
            
            <ul>{categories.map((category) =>
                 <GifGrid 
                    category = {category}
                    key={category}
                 />
            )}</ul>
        </Fragment>
    )

}

export default GifExpertApp;