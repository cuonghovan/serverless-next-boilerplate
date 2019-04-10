import React from "react";
import DefaultLayout from "../layouts/DefaultLayout";

const meta = {
  title: "Page a",
  description: "Page a",
};

export default () => (
  <DefaultLayout meta={meta}>
    <h3>Stage: {process.env.STAGE}</h3>
  </DefaultLayout>
);
