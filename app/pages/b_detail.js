import React from "react";
import PropTypes from "prop-types";
import DefaultLayout from "../layouts/DefaultLayout";

const meta = {
  title: "Page b detail",
  description: "Page b detail",
};

class BDetail extends React.Component {
  static async getInitialProps({ query }) {
    return {
      id: query.id,
    };
  }

  render() {
    const { id } = this.props;
    return (
      <DefaultLayout meta={meta}>
        <h3>ID: {id}</h3>
      </DefaultLayout>
    );
  }
}

BDetail.propTypes = {
  id: PropTypes.string.isRequired,
};

export default BDetail;
