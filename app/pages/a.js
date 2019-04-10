import DefaultLayout from "../layouts/Default";

const meta = {
  title: "Page a",
  description: "Page a"
};

export default () => (
  <DefaultLayout meta={meta}>{process.env.STAGE}</DefaultLayout>
);
