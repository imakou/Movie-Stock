import React, { Component } from "react";
import PropTypes from "prop-types";
import { List, Button, Popconfirm, Tooltip, Card, Icon, Rate } from "antd";
const { Meta } = Card;

class MemberFavorites extends Component {
  handleDelete = () => {
    console.log("Hello delete"); // log is here
  };
  render() {
    return (
      <div className="col-md-12 mb-4">
        <h3>
          Favorites{" "}
          <Tooltip placement="bottom" title="View All">
            <Button shape="circle" className="float-right" icon="eye" />
          </Tooltip>
        </h3>
        <div className="row">
          <div className="col-md-3 col-sm-12 mb-3">
            <Card
              className="MovieCard"
              bodyStyle={{ padding: "10px" }}
              cover={
                <img
                  className="img-fluid imgScale"
                  alt="example"
                  src="https://image.tmdb.org/t/p/w300/2qou2R47XZ1N6SlqGZcoCHDyEhN.jpg"
                />
              }
              actions={[
                <span>Detail</span>,
                <Popconfirm
                  placement="top"
                  title={"Delete the move from your favorite list?"}
                  onConfirm={this.handleDelete}
                  okText="Yes"
                  cancelText="No"
                >
                  <span>Delete</span>
                </Popconfirm>
              ]}
            >
              <div className="d-flex justify-content-center">
                <Rate allowHalf defaultValue={2.5} />
              </div>
            </Card>
          </div>
          <div className="col-md-3 col-sm-12 mb-3">
            <Card
              hoverable
              cover={
                <img
                  className="img-fluid"
                  alt="example"
                  src="https://image.tmdb.org/t/p/w300/2qou2R47XZ1N6SlqGZcoCHDyEhN.jpg"
                />
              }
            >
              <Meta title="Europe Street beat" description="www.instagram.com" />
            </Card>
          </div>
          <div className="col-md-3 col-sm-12 mb-3">
            <Card
              hoverable
              cover={
                <img
                  className="img-fluid"
                  alt="example"
                  src="https://image.tmdb.org/t/p/w300/2qou2R47XZ1N6SlqGZcoCHDyEhN.jpg"
                />
              }
            >
              <Meta title="Europe Street beat" description="www.instagram.com" />
            </Card>
          </div>
          <div className="col-md-3 col-sm-12 mb-3">
            <Card
              hoverable
              cover={
                <img
                  className="img-fluid"
                  alt="example"
                  src="https://image.tmdb.org/t/p/w300/2qou2R47XZ1N6SlqGZcoCHDyEhN.jpg"
                />
              }
            >
              <Meta title="Europe Street beat" description="www.instagram.com" />
            </Card>
          </div>
        </div>
      </div>
    );
  }
}

MemberFavorites.propTypes = {};

export default MemberFavorites;