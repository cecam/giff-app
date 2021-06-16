import { useFetchGifs } from "../hooks/useFetchGifs";
import GiffItem from "./GiffItem"

const GiffGrid = ({category}) => {
    const {data:giffs, loading} = useFetchGifs(category)
    
    return ( 
        <>
            <h3 className="animate__animated animate__fadeInDown">{category}</h3>

            {loading && <p>Loading...</p> }

            <div className="grid">
                {giffs.map(giff => (
                    <GiffItem 
                        key={giff.id} 
                        {...giff} 
                    />
                ))}
            </div>
        </>
    );
}
 
export default GiffGrid;