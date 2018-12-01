import React, { Component } from 'react';
import { hashHistory } from 'react-router'
import { IndexLink } from 'react-router'

class ChooseCategory extends Component {

    state={
        categories: [
            { name: 'Plastic', background: 'bg-info', id: '1'},
            { name: 'Metal', background: 'bg-success', id: '2'},
            { name: 'Battery', background: 'bg-danger', id: '3'},
            { name: 'Glass', background: 'bg-warning', id: '4'},
            { name: 'Mixed', background: 'bg-dark', id: '5'},
            { name: 'Paper', background: 'bg-primary', id: '6'},
            { name: 'E-waste', background: 'bg-info', id: '7'},
        ]
    };

    constructor(props) {
      super(props)
      
    }

    onClick = () => {
      return hashHistory.push({ pathname: '/scrapDealersList/24623' });
    };
  
    render() {
      const {
        onClick
      } = this;

      return(
        <main className="container-fluid">
          <div className="row">
                <div className="page-header col-12 py-3">
                  <IndexLink to="/" activeClassName="active"><i style={{"color": "black", "margin-top": "5px", float: "left"}} className="fas fa-chevron-left"></i></IndexLink>
                  Choose category
                </div>
          </div>
          <br></br>
          <div className="row">
            {this.state.categories.map(category=>{
                return (
                    <div className="col-6" key={category.id}>
                            <div className={"card mb-4 text-white text-center "+category.background}>
                                <div className="card-body">
                                    <h3 onClick={ onClick } className="card-text">{category.name}</h3>
                                
                                </div>
                            </div>
                    </div>
                )
            })}
          
          </div>
        </main>
      )
    }
  }
  
  export default ChooseCategory;