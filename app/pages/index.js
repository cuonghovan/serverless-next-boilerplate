import React from "react";
import DefaultLayout from "../layouts/DefaultLayout";

const meta = {
  title: "Serverless + Next",
  description: "Demo serverless application created by Nextjs",
};

export default () => (
  <DefaultLayout meta={meta}>
    <h3>Welcome to Serverless + Nextjs boilerplate</h3>
  </DefaultLayout>
);
