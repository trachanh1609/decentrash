import React, { Component, Link } from 'react'
import { IndexLink } from 'react-router'
import TrashalizerMap from '../inspect/TrashalizerMap';
import { hashHistory } from 'react-router';
import $ from 'jquery'; 

const ngrok_api_url = "https://29e61348.ngrok.io";

class MaterialRow extends React.Component { 
  render() {
    const material = this.props.material;

    return (
     <div>{material}</div>
    );
  }
}

class PartTable extends React.Component {
  render() {
    const rows = [];
    const name = this.props.part.name;
    const recommendation = this.props.part.recommendation;
      
    this.props.part.materials.forEach( (material) => {  
     /*if (product.parent !== lastParent) {
        /* Place into a temporary variable, then place inside NewPartRow 
        rows.push(
          <NewPartRow
            category={product.category}
            key={product.category} />
        );
      }*/
      rows.push(
        <MaterialRow
          material={material} />
      );
      //lastCategory = product.category;
    });   

    return (
      <div>
      <div className="part">
        <span className="partTitle">{name}</span>   
       {rows}
      </div>
      <div className="recommendation">
        {recommendation}
      </div>
      </div>
    );
  }
}

class PartsList extends React.Component {
  render() {
    const rows = [];

    if(this.props.parts && this.props.parts.length > 0)    
      this.props.parts.forEach( (part) => {
       /*if (product.parent !== lastParent) {
          /* Place into a temporary variable, then place inside NewPartRow 
          rows.push(
            <NewPartRow
              category={product.category}
              key={product.category} />
          );
        }*/
        rows.push(
          <PartTable
            part={part} />
        );
        //lastCategory = product.category;
      });

    return (
      <div className="main col-7 h-100 py-3 flex-grow-1 flex-fill ">
        {rows}
      </div>
    );
  }
}

class ProductImage extends React.Component {
  render() {
    const url = this.props.url;
    return (
      <div className="col-5 py-3">
        <img className="img-fluid product-image" src={url}/>
      </div>
    );
  }
}

class PageHeader extends React.Component {
  render() {
    const name = this.props.name;
    return (
      <div className="page-header col-12 py-3">
        <div className="back-button"><IndexLink to="/" activeClassName="active">&lt;</IndexLink></div>
        {name ? name : "Unidentified product"}
      </div>
    );
  }
}

class ProductInformationTable extends React.Component {
  render() {
    return (
      <div className="row grow w-100 align-items-stretch">
        <PageHeader name={this.props.product.name? this.props.product.name : this.props.product.code} />
        <ProductImage url={this.props.product.image} />
        <PartsList parts={this.props.product.parts} />
      </div>
    );
  }
}

class ScrapDealersList extends React.Component {

  constructor(props) {
    super(props);

    const openSections = {};

    this.state = { openSections };
  }

  onClick = (index) => {
    //alert(index);
    var openSections = {};
    openSections[index] = true;
    this.setState( { openSections: openSections })
  };


  render() {
    const rows = [];

    const {
      onClick,
      props: { isOpen, label },
    } = this;
    
    var that=this;

    if(this.props.scrapDealers.length > 0)
    var first = true;
    this.props.scrapDealers.forEach( (scrapDealer, index) => {  
      var passive = '';

     /*if (product.parent !== lastParent) {
        /* Place into a temporary variable, then place inside NewPartRow 
        rows.push(
          <NewPartRow
            category={product.category}
            key={product.category} />
        );
      }*/

      var hidden = '';
      if(!that.state.openSections[index]) {
        passive = ' passive';
        hidden = " hidden";
      }

      var rating;
      if(scrapDealer.rating == 4) {
        rating = ( <span><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="far fa-star"></i></span> );
      }
      else 
        rating = ( <span><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="far fa-star"></i><i className="far fa-star"></i></span> )

      var rowContent = (










<div>
<div data-index={index} onClick={() => this.onClick(index)} className={"itinerary-summary-row cursor-pointer" + passive }>
   <div className="itinerary-start-time">
      <span className="itinerary-start-date nobg"><span>
        <img src={scrapDealer.image} className="img-fluid" />
      </span></span>
      <div className="itinerary-first-leg-start-time"></div>
   </div>
   <div className="itinerary-legs">
      <div className="leg">
         <span className="route-number vertical">
            <span className="vcenter-children line rail" aria-label="Juna">
               <div className="special-icon rail">
                  <span id="" className="rail" style={{position: "relative"}}>
                     <span>

                     </span>
                  </span>
               </div>
               <div className="bar-container">
               </div>
            </span>
            <div className="vehicle-number-container-v">
            <span className="vehicle-number rail">{scrapDealer.name}</span>
            </div>
            <div className="vehicle-number-container-v">
            {rating}
            </div>
         </span>
      </div>
   </div>
   <div className="itinerary-end-time-and-distance">
      <div className="itinerary-end-time"></div>
   </div>
   <div className="itinerary-duration-and-distance">
      <span className="itinerary-duration"><span> <span></span></span></span>
      <div className="itinerary-walking-distance">
         {scrapDealer.distance}
      </div>
   </div>
   <button title="Reittiohje" className="action-arrow-click-area flex-vertical noborder">
      <div className="action-arrow flex-grow">

      </div>
   </button>
</div>
<div className={"accordionContent" + hidden}>
+44 40 592 3388
<br/><br/>
Metal: &lt;10 kg<br/>
Plastic: PET plastic
<br/>
</div>
</div>

)

      rows.push(rowContent);
      //lastCategory = product.category;
    });   

    return (
      <div className="scrapDealersListing">
       {rows}
      </div>
    );
  }
}

class Inspect extends Component {
  componentDidMount() {

  }

  constructor(props, { authData }) {
    super(props)
    authData = this.props;

    this.state = {
      scrapDealers: [ {
        name: "Jing",
        location: "Otaniemi",
        lat: 60.1841,
        lng: 24.8301,
        image: "/jing.png",
        rating: 4,
        distance: "350 m"
      },
      {
        name: "John's electronics pickup",
        location: "Olari",
        lat: 60.1811,
        lng: 24.8391,
        rating: 4,
        distance: "600 m"
      },
      {
        name: "Government pickup point",
        location: "Viikki",
        lat: 60.1921,
        lng: 24.8421,
        image: "/recycle.png",
        rating: 4,
        distance: "700 m"
      },
      {
        name: "Jane's cardboard point",
        location: "Kauniainen",
        lat: 60.1914,
        lng: 24.8224,
        rating: 3,
        distance: "750 m"
      },
      {
        name: "Peter's scrap metal",
        location: "Kivenlahti",
        lat: 60.1691,
        lng: 24.82,
        rating: 4,
        distance: "850 m"
      }]
      //location: [helsinki.lat, helsinki.lng],
    };
  }

  addTrashPickup(e) {
    e.preventDefault();
    return hashHistory.push({ pathname: '/addTrashPickup' });
  }

  render() {
    return(
      <div style={{width: "375px"}} id="container">
        <div className="page-header col-12 py-3">
          <IndexLink to="/" activeClassName="active"><i style={{"color": "black", "margin-top": "5px", float: "left"}} className="fas fa-chevron-left"></i></IndexLink>
          Available collectors
          <a href="#" style={{color: "#000"}} onClick={ this.addTrashPickup }><i style={{float: "right", "margin-right": "15px" , "margin-top": "5px"}} className="fas fa-plus"></i></a>
        </div>
        <TrashalizerMap position={this.state.location} scrapDealers={this.state.scrapDealers} className="scrap-dealers-map"/>
        <ScrapDealersList scrapDealers={this.state.scrapDealers} />
      </div>
    )
  }
}

export default Inspect
