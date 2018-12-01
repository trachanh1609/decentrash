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

    render() {
      return (
        <div className="cover-container d-flex h-100 p-3 mx-auto flex-column">
          <header className="masthead mb-auto">
            <div className="inner">
              <nav className="navbar navbar-expand-lg navbar-light bg-light">
                 <span className="navbar-brand mb-0 h1">Trashalizer</span>
                 <span>Insight from your trash.</span>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                  <li className="nav-item">
                    <a className="nav-link" href="#">Inspect</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Analysis</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Settings</a>
                  </li>
                </ul>
                </div>
              </nav>
            </div>
          </header>
          <main role="main" className="inner cover">
            <h1 className="cover-heading">Scan a barcode</h1>
            <p className="lead">Scan a product barcode to start</p>
            {this.props.children}
            <a href="#" className="mb-2 btn btn-lg btn-primary" onClick={this.scan}>{this.state.scanning ? 'Cancel' : 'Scan'}</a>
            {this.state.scanning ? <Scanner onDetected={this._onDetected}/> : null}
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
        console.log("high quality match");
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
