class BDetail extends React.Component {
  static async getInitialProps({ query }) {
    return {
      id: query.id
    };
  }

  render() {
    return <h1>ID: {this.props.id}</h1>;
  }
}

export default BDetail;
