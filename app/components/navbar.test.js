/*global shallow mount*/
import React from "react";
import Link from "next/link";
import Navbar from "./Navbar";

describe("search-bar", () => {
  it("renders correctly", () => {
    const wrapper = shallow(<Navbar />);
    expect(wrapper).toMatchSnapshot();
  });

  it("should contains three link", () => {
    const wrapper = shallow(<Navbar />);
    expect(wrapper.find(Link)).toHaveLength(3);
  });
});
