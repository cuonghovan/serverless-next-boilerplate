import Link from 'next/link';

class B extends React.Component {
  render() {
    return <Link href='/b_detail?id=xxx' as="/b/xxx"><h1>B detail</h1></Link>;
  }
}

export default B;
