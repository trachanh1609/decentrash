import React, { Component } from 'react'
import Scanner from './Scanner';
import { hashHistory } from 'react-router'

class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            scanning: false,
            results: []
        };

        this.scan = this.scan.bind(this);
        this._onDetected = this._onDetected.bind(this);
    }

    scan() {
        this.setState((state) => {
          return {scanning: !state.scanning}
        });
    }

    chooseCategory(e) {
      e.preventDefault();
      return hashHistory.push({ pathname: '/chooseCategory' });
    }

    render() {
      return (
        <div className="cover-container d-flex h-100 p-3 mx-auto flex-column">
          <header className="masthead mb-auto">
            <div className="inner">
            </div>
          </header>
          <main role="main" className="inner cover">
            <center><h1 className="cover-heading">My Trash Tool</h1></center>

            <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
              <ol className="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
              </ol>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img className="d-block w-100" src="/slideshow0.png" alt="First slide" />
                </div>
                <div className="carousel-item">
                  <img className="d-block w-100" src="/slideshow1.png" alt="Second slide" />
                </div>
              </div>
              <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
              </a>
              <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
              </a>
            </div>

            {this.props.children}
            <center>
            <a style={{"marginTop": "15px"}} href="#" className="mb-2 btn btn-lg btn-primary" onClick={this.scan}>{this.state.scanning ? 'Cancel' : 'Scan'}</a>
            <p className="lead">or</p>
            <a style={{"marginTop": "15px"}} href="#" className="mb-2 btn btn-lg btn-primary" onClick={this.chooseCategory}>Request trash pickup</a>
            <a style={{"marginTop": "35px"}} href="#" className="mb-2 btn btn-sm btn-dark">Become a collector</a>
            </center>
          </main>
        </div>
      );
    }

    _onDetected(result) {
      console.log("detected something");
      var countDecodedCodes=0, err=0;
      for (let codeData of result.codeResult.decodedCodes) {
          if (codeData.error) {
              countDecodedCodes++;
              err+=parseFloat(codeData.error);
          }
      }

      if (err/countDecodedCodes < 0.1) {
        //console.log("high quality match");
        this.setState({ "scanning": false });

        global.scanData = result;

        var currentLocation = hashHistory.getCurrentLocation()
        return hashHistory.push({ pathname: '/inspect/' + result.codeResult.code });
      } else {
        console.log("low quality match");
      }
    }
}

export default Home
