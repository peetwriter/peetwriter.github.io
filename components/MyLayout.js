import Head from 'next/head'

const Layout = (props) => (
  <div>
    <Head>
      <title>Tarasenko Petro</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css" />
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
    </Head>
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
