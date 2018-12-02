import React from 'react';

const Pickup = (props) => {
    const {dealer, onClick} = props;

    return (
        <div  onClick={()=>onClick(dealer)}>
            <div className="row">
                <span className="">{dealer.name}.</span>
                &nbsp;
                <span className="col-6">Phone: {dealer.phone}</span>
                <span className="col-2">{dealer.selected && <i className="fas fa-check"></i>}</span>
                
            </div>
            <div className="row">
                <h6 className="btn disabled btn-sm btn-outline-primary">
                    Me <span className="badge badge-primary">{dealer.trash.metal} kg</span>
                </h6>
                &nbsp;
                <h6 className="btn disabled btn-sm btn-outline-secondary">
                    Pap <span className="badge badge-secondary">{dealer.trash.paper} kg</span>
                </h6>
                &nbsp;
                <h6 className="btn disabled btn-sm btn-outline-info">
                    Plas <span className="badge badge-info">{dealer.trash.plastics} kg</span>
                </h6> 
                &nbsp;
                <h6 className="btn disabled btn-sm btn-outline-danger">
                    Ewaste <span className="badge badge-danger">{dealer.trash.electronics} kg</span>
                </h6>     
            </div>

        </div>
        
    )
}

export default Pickup;