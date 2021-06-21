import PropTypes from 'prop-types'

const GiffItem = ({title, url}) => {
    return ( 
        <div className="card animate__animated animate__fadeIn">
            <img src={url} alt={title} />
            <p>{title}</p>
        </div>
    );
}

GiffItem.proptypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
}
 
export default GiffItem;