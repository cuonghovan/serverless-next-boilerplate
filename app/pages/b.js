import React from "react";
import axios from "axios";
import Link from "next/link";
import PropTypes from "prop-types";
import DefaultLayout from "../layouts/DefaultLayout";

const API_DOMAIN =
  process.env.STAGE === "dev"
    ? `http://${process.env.API_DOMAIN}`
    : `https://${process.env.API_DOMAIN}`;

const meta = {
  title: "Page b",
  description: "Page b",
};

const linkStyle = {
  textDecoration: "underline",
  color: "#3366BB",
  cursor: "pointer",
};

class B extends React.Component {
  static async getInitialProps() {
    const res = await axios.get(`${API_DOMAIN}/hello`);
    const { message = "" } = res.data;

    return {
      message,
    };
  }

  render() {
    const { message } = this.props;

    return (
      <DefaultLayout meta={meta}>
        <>
          <h3>{message}</h3>
          <Link href="/b_detail?id=xxx" as="/b/xxx">
            <span style={linkStyle}>Detail</span>
          </Link>
        </>
      </DefaultLayout>
    );
  }
}

B.propTypes = {
  message: PropTypes.string,
};

B.defaultProps = {
  message: "",
};

export default B;
