import React from "react";
import DefaultLayout from "../layouts/DefaultLayout";

const meta = {
  title: "Page a",
  description: "Page a",
};

export default () => (
  <DefaultLayout meta={meta}>{process.env.STAGE}</DefaultLayout>
);
