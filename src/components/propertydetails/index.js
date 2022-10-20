import { MdBed,MdBathtub } from 'react-icons/md'
import { BiArea } from 'react-icons/bi'
import './index.css'

const PropertyDetails = props => {
    const { propertyDetails } = props
    const {imageUrl,name,price,address,beds,bathrooms,area,type} = propertyDetails
    return(
        <div className="property-card-container">
            <img className='property-image' src={imageUrl} alt="house-pic"/>
            <p className='bed'><span className='price'>{price}</span>/month</p>
            <h1 className='house-name'>{name}</h1>
            <p className='bed'>{address}</p>
            <p className='type'>{type}</p>
            <hr/>
            <div className="room-details">
                <p className='bed'><MdBed className='icon'/>{beds} Beds</p>
                <p className='bed'><MdBathtub className='icon'/>{bathrooms} Bathrooms</p>
                <p className='bed'><BiArea className='icon'/>{area}</p>
            </div>
        </div>
    )
}



export default PropertyDetails