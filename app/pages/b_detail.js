import React from "react";
import DefaultLayout from "../layouts/Default";

const meta = {
  title: "Page b detail",
  description: "Page b detail"
};

class BDetail extends React.Component {
  static async getInitialProps({ query }) {
    return {
      id: query.id
    };
  }

  render() {
    return (
      <DefaultLayout meta={meta}>
        <h1>ID: {this.props.id}</h1>
      </DefaultLayout>
    );
  }
}

export default BDetail;
