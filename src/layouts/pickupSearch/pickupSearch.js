import React, { Component} from 'react';
import TrashalizerMap from '../inspect/TrashalizerMap';
import Pickup from './pickup';
import { IndexLink } from 'react-router'

class PickupSearch extends Component {
    componentDidMount() {
  
    }
  
    constructor(props, { authData }) {
      super(props);
  
      this.state = {
        sum: {
            metal: 0,
            paper: 0,
            plastics: 0,
            electronics: 0,
        },
        scrapDealers: [ {
          phone: '087378585',
          name: "Jing",
          location: "Otaniemi",
          lat: 60.1841,
          lng: 24.8301,
          selected: false,
          trash: {
              metal: 5,
              paper: 3,
              plastics: 0,
              electronics: 0,
          }
        },
        {
          phone: '034759243',
          name: "John",
          location: "Olari",
          lat: 60.1811,
          lng: 24.8391,
          selected: false,
          trash: {
                metal: 0,
                paper: 2,
                plastics: 2,
                electronics: 0,
            }
        },
        {
          phone: '048762675',
          name: "Jack",
          location: "Viikki",
          lat: 60.1921,
          lng: 24.8421,
          selected: false,
          trash: {
                metal: 1,
                paper: 3,
                plastics: 0,
                electronics: 2,
            }
        },
        {
          phone: '088376367',
          name: "Jill",
          location: "Kauniainen",
          lat: 60.1921,
          lng: 24.8231,
          selected: false,
          trash: {
                metal: 0,
                paper: 3,
                plastics: 0,
                electronics: 0,
            }
        },
        {
          phone: '0294857242',
          name: "Jane",
          location: "Kivenlahti",
          lat: 60.1691,
          lng: 24.8341,
          selected: false,
          trash: {
                metal: 5,
                paper: 0,
                plastics: 0,
                electronics: 3,
            }
        }]
        //location: [helsinki.lat, helsinki.lng],
      };
    }

  
    onClick = (dealer) => {
      const { selected } = dealer ;
      const newScrapDealerList = this.state.scrapDealers.map(item=>{
        if(item === dealer) {
          item = {...dealer, selected: !selected};
        }
        return item;
      })

      const selectedDealers = newScrapDealerList.filter(item=>item.selected) ;
      const sumWeight = {};

      sumWeight.metal = selectedDealers.reduce( (acc, value) => ( acc + value.trash.metal ), 0 );
      sumWeight.paper = selectedDealers.reduce( (acc, value) => ( acc + value.trash.paper ), 0 );
      sumWeight.plastics = selectedDealers.reduce( (acc, value) => ( acc + value.trash.plastics ), 0 );
      sumWeight.electronics = selectedDealers.reduce( (acc, value) => ( acc + value.trash.electronics ), 0 );
      
      this.setState({scrapDealers: newScrapDealerList, sum: sumWeight});
      
    }
  
    render() {
      return(
        <div style={{width: "375px"}} id="container">
          <div className="page-header col-12 py-3">
            <h3><IndexLink to="/" activeClassName="active"><i style={{"color": "black", "margin-top": "5px", float: "left"}} className="fas fa-chevron-left"></i></IndexLink>
             Total weight</h3>
            <div className="row">
                <div className="col-6 text-left">
                    <h6 className="btn btn-block disabled text-left btn-sm btn-outline-primary">
                        Metal <span className="badge badge-primary">{this.state.sum.metal} kg</span>
                    </h6>
                    <h6 className="btn btn-block disabled text-left btn-sm btn-outline-secondary">
                        Paper <span className="badge badge-secondary">{this.state.sum.paper} kg</span>
                    </h6>
                    
                </div>
                <div className="col-6 text-left">
                    <h6 className="btn btn-block disabled text-left btn-sm btn-outline-info">
                        Plastics <span className="badge badge-info">{this.state.sum.plastics} kg</span>
                    </h6>
                    <h6 className="btn btn-block disabled text-left btn-sm btn-outline-danger">
                        Electronics <span className="badge badge-danger">{this.state.sum.electronics} kg</span>
                    </h6>
                </div>
            </div>
          </div>
          <TrashalizerMap position={this.state.location} scrapDealers={this.state.scrapDealers} className="scrap-dealers-map"/>          
          <ul className="list-group">
            {this.state.scrapDealers.map(dealer=>{
              return (
                // <li onClick={()=>this.onClick(dealer)}>
                //     <p>
                //         <h4>{dealer.name} {dealer.selected && <i className="fas fa-check"></i>}</h4>
                //         <h6>
                //             Metal: {dealer.trash.metal}kg
                //             Paper: {dealer.trash.paper}kg
                //         </h6>
                //         <h6>
                //             Plastics: {dealer.trash.plastics}kg
                //             Electronics: {dealer.trash.electronics}kg
                //         </h6>
                //     </p>
                    
                // </li>
                <li className="list-group-item" key={dealer.name} >
                    <Pickup dealer={dealer} onClick={this.onClick}></Pickup>
                </li>  
              )
            })}
          </ul>
        </div>
      )
    }
  }
  
  export default PickupSearch;
  