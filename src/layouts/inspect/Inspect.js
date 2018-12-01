import React, { Component, Link } from 'react'
import { IndexLink } from 'react-router'
import TrashalizerMap from './TrashalizerMap';

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

class SortingPoints extends React.Component {
  render() {
    const rows = [];
    
    if(this.props.sortingPoints.length > 0)
    var first = true;
    this.props.sortingPoints.forEach( (sortingPoint) => {  
      var passive = ' passive';
      if(first) {
        passive = '';
        first = false;
      } 
     /*if (product.parent !== lastParent) {
        /* Place into a temporary variable, then place inside NewPartRow 
        rows.push(
          <NewPartRow
            category={product.category}
            key={product.category} />
        );
      }*/

      rows.push(











<div className={"itinerary-summary-row cursor-pointer" + passive }>
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
                  <div className="bar rail">
                     <div className="bar-inner"></div>
                  </div>
               </div>
            </span>
            <div className="vehicle-number-container-v">
            <span className="vehicle-number rail">{sortingPoint.name}</span>
            </div>
            <div className="vehicle-number-container-v">
            <span className="vehicle-number">{sortingPoint.address}</span>
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
         { sortingPoint.distance } km
      </div>
   </div>
   <button title="Reittiohje" className="action-arrow-click-area flex-vertical noborder">
      <div className="action-arrow flex-grow">

      </div>
   </button>
</div>














        
      );
      //lastCategory = product.category;
    });   

    return (
      <div className="sortingPointsListing">
       {rows}
      </div>
    );
  }
}


const PRODUCTS = {
  '6436501013081' : {
    parts: [
      { name: 'body', materials: ['plastic'] }
    ]
  },
  '6405187001637' : {
    name: "Kookospala",
    image: "https://foodieimages.s3.amazonaws.com/images/entries/180x220/6405187025114_0.png",
    materials: [
      {material: 'polypropylene', category: 'plastic', part: 'bag'}
    ],
    parts: [
      { name: 'bag', materials: ['plastic'], recommendation: 'Plastic collection' }
    ]
  },
  '734027990036' : {
    name: "Unfiltered Ginger Beer",
    image: "https://d2lnr5mha7bycj.cloudfront.net/product-image/file/large_abeec656-83af-4b84-8707-9b373d330bbd.jpg",
    materials: [
      {material: 'polypropylene', category: 'plastic', part: 'bag'}
    ],
    parts: [
      { name: 'bottle', materials: ['glass'], recommendation: 'Glass collection' },
      { name: 'cap', materials: ['metal'], recommendation: 'Metal collection' }
    ]
  },

  "7310532112939" : {
    name: undefined,
    image: undefined,
    materials: [
      {material: 'polypropylene', category: 'plastic', part: 'bag'}
    ],
    parts: [
      { name: 'bag', materials: ['polypropylene'], recommendation: 'Plastic collection' }
    ]
  },

  
  '123456789': {
    name: "Pringles Original",
    image: "https://cdn.shopify.com/s/files/1/1752/6725/products/smokea-stash-cans-smokea-pringles-original-stash-can-21812791425_1400x.jpg?v=1518056144",
    materials: [
      {material: 'polypropylene', category: 'plastic', part: 'lid'},
      {material: 'cardboard', parent: 'body', part: 'tube', category: 'cardboard'},
      {material: 'aluminium', parent: 'body', part: 'bottom', category: 'metal'}
    ],
    parts: [
      { name: 'lid', materials: ['PP plastic'], recommendation: 'Plastic collection' },
      { name: 'body', materials: ['aluminium', 'cardboard'], recommendation: 'Cardboard collection'}
    ]
  },

  "unknown": {
    name: undefined,
    image: undefined,
    parts: undefined
  }
};

class Inspect extends Component {
  componentDidMount() {

  }

  constructor(props, { authData }) {
    super(props)
    authData = this.props;

    var scanData = global.scanData;
    var code = this.props.params.code;

    var product;
    if(PRODUCTS[code])
    product = PRODUCTS[code];
    else product = PRODUCTS["unknown"]; 
    product.code = code;

    const delta = 0.0269; // this is roughly equal to 3 km
    var helsinki = {
      lat: 60.1699, 
      lng: 24.9384
    }

    this.state = {
      code: code,
      product: product,
      sortingPoints: [],
      //location: [helsinki.lat, helsinki.lng],
      mapBounds: [
        [helsinki.lat - delta, helsinki.lon - delta],
        [helsinki.lat + delta, helsinki.lon + delta],
      ]
    }

    var that = this;

    if(true || !this.state.image || !this.state.product.name) {
      fetch('https://cors-anywhere.herokuapp.com/https://www.k-ruoka.fi/kr-api/product-search/' + code + '?storeId=N106', {
        method: 'POST',
        headers: {
          'X-Requested-With': 'Trashalizer'
        }
      })
      
      //fetch("https://world.openfoodfacts.org/api/v0/product/" + this.state.code + ".json") //this.state.code + ".json")
      
      .then((result) => { 
          return result.json();
        }).then((data) => {
          if(data && data.result && data.result[0] && data.result[0].urlSlug) {
            var urlSlug = data.result[0].urlSlug;
            var apiProductUrl = "https://cors-anywhere.herokuapp.com/https://www.k-ruoka.fi/kr-api/products/" + urlSlug + "?storeId=N106&langCode=fi";
            fetch(apiProductUrl, {
              method: 'GET',
              headers: {
                'X-Requested-With': 'Trashalizer'
              }
            })
            .then((result2) => {
              return result2.json();
            })
            .then((data2) => {

              /* We now have the data */

              if(!data2 || !data2.urlSlug)
                return;

              var newPictureUrl = undefined;
              if(data2.pictureUrls && data2.pictureUrls[0] && data2.pictureUrls[0].original)
              {
                newPictureUrl = data2.pictureUrls[0].original;
              }

              var newTitle = undefined; 
              if(data2.name) {
                if(data2.name.finnish) {
                  newTitle = data2.name.finnish;
                }
                else if(data2.name.english) {
                  newTitle = data2.name.english;
                }
                else if(data2.name.swedish) {
                  newTitle = data2.name.swedish;
                }
              }

              this.setState(prevState => ({
                product: {
                    ...prevState.product,
                    image: prevState.product.image || newPictureUrl,
                    name: prevState.product.name || newTitle
                }
              }));

              var categories = "";
              if(data2['category']) {
                if(data2['category']['subcategories'] && data2['category']['subcategories'][0]) {
                    if(data2['category']['subcategories'][0]['subcategories'] && data2['category']['subcategories'][0]['subcategories'][0])
                        categories += "," + data2['category']['subcategories'][0]['subcategories'][0]['path']
                    categories += "," + data2['category']['subcategories'][0]['path']
                  }
                categories += "," + data2['category']['path']
              }

              // remove leading dot
              categories = categories.substr(1);
              // strip / chars before sending http request
              categories = categories.replace("/", "_");

              /* NEW REQUEST FOR MATERIALS PREDICTION */
              var name = data2.name.finnish;
              var brand = data2.brand;

              function afterLearnMaterial(material) {
                  //alert("learnt material is:" + material);
                  const type_ids = {
                    'plastic': 111,
                    'cardboard': 105,
                    'glass': 107
                  }
                  var type_id = type_ids[material];

                  if (!that.state.sortingPoints.length && navigator.geolocation) {
                      navigator.geolocation.getCurrentPosition(function(position) {
                        that.setState({
                            location: [position.coords.latitude, position.coords.longitude]
                        });
                        //alert(position);

                        var lat =  position.coords.latitude; 
                        var lng = position.coords.longitude; 
                        fetch('https://cors-anywhere.herokuapp.com/http://kierratys.info/2.0/genxml.php?lat=' + lat + '&lng=' + lng + '&radius=10&type_id=' + type_id + '&limit=3', {
                            method: 'GET',
                            headers: {
                              'X-Requested-With': 'Trashalizer'
                            }
                        })
                        .then((response) => response.text())
                        .then((xmlString) => { 
                          var parser = new DOMParser();
                          var parsed = parser.parseFromString(xmlString, 'text/xml');
                          var xmlSortPoints = parsed.querySelectorAll('marker');

                          var jsonSortPoints = [];

                          xmlSortPoints.forEach(function(xmlSortPoint) {
                            var jsonSortPoint = {};
                            jsonSortPoint.lat = xmlSortPoint.getAttribute('lat');
                            jsonSortPoint.lng = xmlSortPoint.getAttribute('lng');
                            jsonSortPoint.distance = xmlSortPoint.getAttribute('etaisyys');
                            jsonSortPoint.address = xmlSortPoint.getAttribute('osoite');
                            jsonSortPoint.name = xmlSortPoint.getAttribute('nimi');
                            jsonSortPoints.push(jsonSortPoint);
                          });
                          
                          that.setState(prevState => ({
                            sortingPoints: jsonSortPoints
                          }));

                          //console.log(JSON.stringify(res));
                          //return result4.json();
                        })
                  })}

              }

              if(that.state.product.parts && that.state.product.parts[0]) {
                var material = that.state.product.parts[0].materials[0];
                afterLearnMaterial(material)
              }
              else 
              //if(!this.state.product.parts || this.state.product.parts.length == 0) {
              fetch(ngrok_api_url + '/predict?name=' + name + (brand? ("&brand=" + brand) : '') + "&categories=" + categories, {
                  method: 'GET',
                  headers: {
                    'X-Requested-With': 'Trashalizer'
                  }
              })
              .then((result3) => { 
                  return result3.json();
                }).then((data3) => {
                  if(data3 && data3.success && data3.prediction) {
                    var material = data3.prediction;
                    this.setState(prevState => ({
                      product: {
                          ...prevState.product,
                          parts: [ { name: 'body', materials: [ data3.prediction ], recommendation: (data3.prediction[0].toUpperCase() + data3.prediction.substring(1) + " collection")} ]
                      }
                    }));

                    afterLearnMaterial(material);
                  }
              })
              //}
            });
          }
          /*
          if(data && data.product && data.product.image_url)
            this.setState(prevState => ({
              product: {
                  ...prevState.product,
                  image: prevState.product.image || data.product.image_url,
                  name: prevState.product.name || data.product.product_name
              }
          }))
          */
      })
    }
  }

  render() {
    return(
      <div style={{width: "375px"}} id="container">
        <ProductInformationTable product={this.state.product}/>
        <TrashalizerMap position={this.state.location} sortingPoints={this.state.sortingPoints} className="sorting-points-map"/>
        <SortingPoints sortingPoints={this.state.sortingPoints} />
      </div>
    )
  }
}

export default Inspect
