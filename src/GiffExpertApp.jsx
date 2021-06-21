import { useState } from "react";

import AddCategory from './components/AddCategory'
import GiffGrid from './components/GiffGrid'

const GiffExpertApp = ({defaultCategories = []}) => {
    const [categories, setCategories] = useState(defaultCategories)

    return ( 
        <>
            <h2>GiffExpertApp</h2>
            <AddCategory setCategories={setCategories} />
            <hr />

            <ol>
                {
                    categories.map(category => (
                        <GiffGrid 
                            category={category} 
                            key={category} 
                        />
                    ))
                }                
            </ol>
        </>
     );
}
 
export default GiffExpertApp;