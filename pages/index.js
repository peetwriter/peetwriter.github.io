import Link from 'next/link'
import Layout from '../components/MyLayout.js'
import ExperienceItem from '../components/ExperienceItem.js'
import EducationItem from '../components/EducationItem.js'
import ProgressBar from '../components/ProgressBar.js'


export default () => (
  <Layout>
    <div className="dashboard">
      <div className="container full-height">
        <h1 className="title">
          Hi! I'm Petro Tarasenko, <span className="subtitle">
            Full Stack Web Developer
          </span>
        </h1>
      </div>
    </div>
    <div className="container">
      <Link
        prefetch
        href='cv'
      >
        <a className="link">MY CV</a>
      </Link>
      <a
        className="link"
        href="https://www.linkedin.com/in/petr-tarasenko-aa8a6b59/"
      >
        LinkedIn
      </a>
      <a
        className="link"
        href="https://www.facebook.com/petr.tarasenko.1"
      >
        Github
      </a>
      <a
        className="link"
        href="https://www.facebook.com/petr.tarasenko.1"
      >
        Facebook
      </a>
    </div>
    <style jsx global>{`
      .dashboard {
        background-color: #000;
        height: 70vh;
        position: relative;
        margin-bottom: 20px;
      }
      .title {
        color: #fff;
        position: absolute;
        bottom: 0;
        font-size: 50px;
        font-weight: 200;
      }
      .subtitle {
        font-size: 20px;
      }
      .full-height {
        height: 100%;
      }
      .link {
        font-size: 30px;
        color: #000;
        border-right: 1px solid #000;
        padding: 0 10px;
      }
      .link:hover {
        color: #000;
      }
      @media (max-width: 600px) {
        .title {
          font-size: 30px;
        }
        .subtitle {
          display: block;
        }
        .link {
          font-size: 15px;
          padding: 0 8px;
        }
      }
    `}</style>
  </Layout>
)
