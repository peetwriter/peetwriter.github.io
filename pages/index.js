import Layout from '../components/MyLayout.js'
import Link from 'next/link'


export default () => (
  <Layout>
    <h3 className="title"> Full stack Web developer</h3>
    <div className="container">
      <div className="text-center">
        <img
          className="profile-image"
          src="/static/petro-photo.png" alt=""
        />
        <div className="half-container">
          <div className="left">one</div>
          <div className="right">two</div>
        </div>
      </div>
    </div>
    <style jsx>{`
      h3{
        font-weight: 100;
        text-align: center;
        font-size: 20px;
        margin-bottom: 20px;
      }
      .profile-image {
        height: 100px;
        width: 100px;
        border-radius: 50%;
        margin-bottom: 10px;
      }
      .half-container{
        display: flex;
      }
      .half-container .left {
        border-right: 1px solid #000;
        text-align: right;
        padding-right: 30px;
      }
      .half-container .right {
        text-align: left;
        padding-left: 30px;

      }
      .half-container div {
        flex-grow: 1;
      }
    `}</style>
  </Layout>
)
