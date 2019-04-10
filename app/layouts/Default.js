import React from "react";
import PropTypes from "prop-types";
import Meta from "../components/Meta";
import Navbar from "../components/Navbar";

const DefaultLayout = ({ children, meta }) => (
  <div>
    <Meta props={meta} />
    <Navbar />
    {children}
  </div>
);

DefaultLayout.propTypes = {
  children: PropTypes.instanceOf(Object).isRequired,
  meta: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
  }).isRequired,
};

export default DefaultLayout;
