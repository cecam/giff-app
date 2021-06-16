const GiffItem = ({title, url}) => {
    return ( 
        <div className="card animate__animated animate__fadeIn">
            <img src={url} alt="" />
            <p>{title}</p>
        </div>
    );
}
 
export default GiffItem;