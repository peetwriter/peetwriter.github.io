import Header from './Header'
import Head from 'next/head'

const layoutStyle = {
  'padding-top': 40,
}

const Layout = (props) => (
  <div style={layoutStyle}>
    <Head>
      <title>Tarasenko Petro</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css" />
    </Head>
    <Header />
    {props.children}
    <style jsx global>{`
      body: {
        color: '#000';
      }
    `}
    </style>
  </div>
)

export default Layout
