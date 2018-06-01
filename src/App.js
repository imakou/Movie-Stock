import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import "antd/dist/antd.min.css";
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.min.css";
import Nav from "./components/Nav";
import MovieCard from "./containers/MovieCard";
import { Badge, Icon } from "antd";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <Nav name={"aallen"} />
        </header>
        <section
          style={{
            backgroundImage:
              'url("https://image.tmdb.org/t/p/w1400_and_h450_face/bOGkgRGdhrBYJSLpXaxhXVstddV.jpg")'
          }}
          className="AppJumbotron d-flex align-items-end justify-content-center"
        >
          <div className="AppDescription">
            <div className="container ">
              <div className="row ">
                <div className="col-7">
                  <h1>56</h1>
                  <p>
                    This method is like _.difference except that it accepts iteratee which
                    is invoked for each element of array and values to generate the
                    criterion by which they're compared. The order and references of
                    result values are determined by the first array. The iteratee is
                    invoked with one argument: (value).
                  </p>
                </div>
                <div className="col-5 pb-5 d-flex align-items-end justify-content-center">
                  <button type="button" className="btn btn-success">
                    <Icon className="mr-1" type="caret-right" />railer
                  </button>
                  <button type="button" className="ml-3 btn btn-outline-light">
                    <Icon className="mr-1" type="search" />Detail
                  </button>
                  <button type="button" className="ml-3 btn btn-outline-danger">
                    <Icon className="mr-1" type="plus" /> Favorite
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-light">
          <MovieCard />
        </section>
      </div>
    );
  }
}

export default App;
