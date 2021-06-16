import { useState } from "react";

import AddCategory from './components/AddCategory'
import GiffGrid from './components/GiffGrid'

const GiffExpertApp = () => {
    const [categories, setCategories] = useState(['one punch', 'samurai x', 'naruto'])

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