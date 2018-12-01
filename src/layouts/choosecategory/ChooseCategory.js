import React, { Component } from 'react';

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
  
    render() {
      return(
        <main className="container-fluid">
          <div className="row">
                <span className="col"><i className="fas fa-chevron-left fa-2x"></i> </span>           
                <h3 className="col-10 text-center">Choose Category</h3>
          </div>
          <br></br>
          <div className="row">
            {this.state.categories.map(category=>{
                return (
                    <div className="col-6" key={category.id}>
                            <div className={"card mb-4 text-white text-center "+category.background}>
                                <div className="card-body">
                                    <h3 className="card-text">{category.name}</h3>
                                
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