import DefaultLayout from "../layouts/default";

const meta = {
  title: "Page a",
  description: "Page a"
};

export default () => (
  <DefaultLayout meta={meta}>{process.env.STAGE}</DefaultLayout>
);
