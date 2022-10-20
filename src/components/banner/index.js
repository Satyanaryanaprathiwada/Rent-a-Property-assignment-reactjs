import { Component } from "react";
import { MdOutlineArrowDropDown } from 'react-icons/md'
import PropertyDetails from '../propertydetails'
import './index.css'

const propertiesDetailsList = [
    {
        uniqueNo: 1,
        imageUrl: 'https://res.cloudinary.com/dkvm2gt6m/image/upload/v1666095645/House-2_umyya9.jpg',
        name: 'Palm Harbor',
        price: '$2,095',
        address:'2699 Green Valley,High Land Lake,FL',
        type:'House',
        beds:'4',
        bathrooms:'3',
        area:'6*7.5 sq.mt'
    },
    {
        uniqueNo: 2,
        imageUrl: 'https://res.cloudinary.com/dkvm2gt6m/image/upload/v1666095658/House-3_qaz0gz.jpg',
        name: 'Beverly Springfield',
        price: '$2,700',
        address:'2821 Lake Sevilla,Palm Harbor,TX',
        type:'Villa',
        beds:'5',
        bathrooms:'1',
        area:'8*6.5 sq.mt'
    },
    {
        uniqueNo: 3,
        imageUrl: 'https://res.cloudinary.com/dkvm2gt6m/image/upload/v1666104976/House-6_tejldp.jpg',
        name: 'Faulker Ave',
        price: '$4,550',
        address:'909 Woodland St.Michigan,IN',
        type:'Flat',
        beds:'4',
        bathrooms:'3',
        area:'7*3.5 sq.mt'
    },
    {
        uniqueNo: 4,
        imageUrl: 'https://res.cloudinary.com/dkvm2gt6m/image/upload/v1666095645/House-2_umyya9.jpg',
        name: 'Appleward',
        price: '$5,455',
        address:'4485 Bastin Drive.PH',
        type:'Villa',
        beds:'4',
        bathrooms:'2',
        area:'9*1.5 sq.mt'
    },
    {
        uniqueNo: 5,
        imageUrl: 'https://res.cloudinary.com/dkvm2gt6m/image/upload/v1666104976/House-6_tejldp.jpg',
        name: 'Zoussaws',
        price: '$4,700',
        address:'2350 Oak Way,Palm Harbor.FL',
        type:'House',
        beds:'4',
        bathrooms:'2',
        area:'8*2.5 sq.mt'
    },
    {
        uniqueNo: 6,
        imageUrl: 'https://res.cloudinary.com/dkvm2gt6m/image/upload/v1666095645/House-2_umyya9.jpg',
        name: 'Yeatledge Vermont',
        price: '$6,660',
        address:'2255 Gerald L.Bates Drive VM',
        type:'House',
        beds:'4',
        bathrooms:'2',
        area:'9*4.5 sq.mt'
    },
    {
        uniqueNo: 7,
        imageUrl: 'https://res.cloudinary.com/dkvm2gt6m/image/upload/v1666095658/House-3_qaz0gz.jpg',
        name: 'Downstein',
        price: '$8,550',
        address:'1619 River Road, Colorado',
        type:'Flat',
        beds:'4',
        bathrooms:'2',
        area:'5*8.5 sq.mt'
    },
    {
        uniqueNo: 8,
        imageUrl: 'https://res.cloudinary.com/dkvm2gt6m/image/upload/v1666095645/House-2_umyya9.jpg',
        name: 'Meterrough',
        price: '$3,225',
        address:'4967 Lake Floyd Circle,Delaware',
        type:'Villa',
        beds:'4',
        bathrooms:'2',
        area:'7*7.5 sq.mt'
    }
]

class Rent extends Component {
    state = {
        rentPropertyDetails : propertiesDetailsList,
        isSearchOn : false,
        searchInput:'',
        selectPrice:'',
        selectProperty:''
    }

    onChangeLocationSearchInput = event => {
        this.setState({
          searchInput: event.target.value
        })
      }

    onChangePropertyPrice = event => {
        this.setState({
            selectPrice:event.target.value
        })
    }

    onChangePropertyType= event =>{
        this.setState({
            selectProperty:event.target.value
        })
    }

    searchWithBar = () =>{
        this.setState( prevState => {
            const { isSearchOn } = prevState
            return {
                isSearchOn: !isSearchOn
            }
          })
    }
    render() {
        const {selectProperty,selectPrice,searchInput,rentPropertyDetails} = this.state
        const searchPropertyDetails = rentPropertyDetails.filter(eachUser =>
            eachUser.address.includes(searchInput))

        return(
        <div className="container">
            <div className="main-container">
                <div className="search-bar">
                    <h1 className="heading">Search properties to rent</h1>
                    <button onClick={this.searchWithBar} className="search-with-bar">Search with Search Bar <MdOutlineArrowDropDown className="drop-icon"/></button>
                </div>
                {this.state.isSearchOn ? (
                    <div className="search-container">
                    <div>
                        <p className="search-heading">Location</p>
                        <input type="search" onChange={this.onChangeLocationSearchInput}  placeholder="Search here" value={searchInput} className="location-search"/>
                    </div>
                    <span className="vertical-line">|</span>
                    <div>
                        <p className="search-heading">When</p>
                        <label className="search-result">Select Move-In Date</label>
                        <input className="calender" type="date" />
                    </div>
                    <span className="vertical-line">|</span>
                    <div className="property-container">
                        <label for="price" className="search-heading">Property Price</label>
                        <select onChange={this.onChangePropertyPrice} value={selectPrice} className="search-result-property" name="price" id="price">
                            <option value="price-1">$500 - $2,500</option>
                            <option value="price-2">$2,500 - $5,000</option>
                            <option value="price-3">$5,000 - $10,000</option>
                        </select>
                    </div>
                    <span className="vertical-line">|</span>
                    <div className="property-container">
                        <label for="houses" className="search-heading">Property Type</label>
                        <select onChange={this.onChangePropertyType} value={selectProperty} className="search-result-property" name="houses" id="houses">
                            <option value="houses">Houses</option>
                            <option value="land">Flat</option>
                            <option value="villas">Villas</option>
                        </select>
                    </div>
                    <span className="vertical-line">|</span>
                    <button className="search-button">Search</button>
                </div>
                ) : null}
                


                <div>
                    <div className="property-list-container">
                        {searchPropertyDetails.map(eachUser => (
                            <PropertyDetails
                            propertyDetails={eachUser}
                            key={eachUser.uniqueNo}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>    
        )
    }

}

export default Rent