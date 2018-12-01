import React, { Component, Link } from 'react'
import { IndexLink } from 'react-router'
import TrashalizerMap from '../inspect/TrashalizerMap';
import { hashHistory } from 'react-router'
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

      var rowContent = (










<div>
<div data-index={index} onClick={() => this.onClick(index)} className={"itinerary-summary-row cursor-pointer" + passive }>
   <div className="itinerary-start-time">
      <span className="itinerary-start-date nobg"><span></span></span>
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
            <span className="vehicle-number">* * * * *</span>
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
         750 m
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

  onClick() {
    return hashHistory.push({ pathname: '/' });
  }

  constructor(props, { authData }) {
    super(props)
    authData = this.props;

    this.state = {
      location: [ 60.1841, 24.8301 ],
    };
  }

  render() {
    return(
      <div style={{width: "375px"}} id="container">
        <div className="page-header col-12 py-3">
          <div className="back-button"><IndexLink to="/" activeClassName="active">&lt;</IndexLink></div>
          Create new listing
        </div>
        <div className="main col-12 h-100 py-3 flex-grow-1 flex-fill ">
          <div className="row">
            <div className="col-4 trashAmountPerTypeContainer">
             <img className="img-fluid" src="/trash-can.png" />
             <input className="trashAmountPerTypeInput" placeholder="0.00 kg" />
            </div>
            <div className="col-4 trashAmountPerTypeContainer">
             <img className="img-fluid" src="/trash-can.png" />
             <input className="trashAmountPerTypeInput" placeholder="0.00 kg" />
            </div>
            <div className="col-4 trashAmountPerTypeContainer">
             <img className="img-fluid" src="/trash-can.png" />
             <input className="trashAmountPerTypeInput" placeholder="0.00 kg" />
            </div>
          </div>
        </div>

        <div className="page-header col-12 py-3">
          Pickup location
        </div>

        <TrashalizerMap position={this.state.location} className="scrap-dealers-map" />
        
        <div className="page-header col-12 py-3">
          <input style={{"margin-right": "5px"}} type="checkbox" checked />
          Show my number
        </div>

        <center><a href="#" className="mb-2 btn btn-lg btn-primary" onClick={this.onClick}>Create</a></center>

      </div>
    )
  }
}

export default Inspect
