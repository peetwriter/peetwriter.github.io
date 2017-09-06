import Link from 'next/link'
import Layout from '../components/MyLayout.js'
import ExperienceItem from '../components/ExperienceItem.js'
import EducationItem from '../components/EducationItem.js'
import ProgressBar from '../components/ProgressBar.js'
import Header from '../components/Header.js'


export default () => (
  <Layout>
    <Header />
    <h3> Full stack Web developer</h3>
    <div className="container">
      <div className="text-center">

        <div className="profile-info">
          <div className="profile-text text-right">
            <div>
              <span>pereter92@gmail.com</span>
              <i className="fa fa-envelope" aria-hidden="true"></i>
            </div>

            <div>
              <span>peretermac</span>
              <i className="fa fa-skype" aria-hidden="true"></i>
            </div>

          </div>
          <img
            className="profile-image"
            src="/static/petro-photo.png" alt=""
          />
          <div className="profile-text text-left">
            <div>
              <i className="fa fa-github" aria-hidden="true"></i>
              <span>peetwriter</span>
            </div>

            <div>
              <i className="fa fa-phone" aria-hidden="true"></i>
              <span>+380638205275</span>
            </div>
          </div>
        </div>

        <div className="half-container">
          <div className="left">
            <div className="title">
              experience
            </div>
            <ExperienceItem
              date={'2015 - present'}
              company={'Ciklum'}
              title={'Full Stack Web Developer'}
              project={'whocanfixmycar.com'}
              projectUrl={'https://whocanfixmycar.com'}
              description={'Web application that helps to find mechanics for car repairs.'}
              technologies={'Node.js, Express.js, Knockout.js, MySql, React.js, Redux, MongoDb'}
            />
            <ExperienceItem
              date={'July 2014 – September 2015'}
              company={'RWTH Aachen University'}
              title={'HIWI - Student Assistant'}
              project={'BOOST'}
              projectUrl={'http://www.boost-project.eu'}
              description={'Web application for employees training.'}
              technologies={'Ractive.js, Node.js, Chart.js, SQLite'}
            />
            <ExperienceItem
              date={'May 2012 – September 2013'}
              company={'RWTH Aachen University'}
              title={'HIWI - Student Assistant'}
              project={'Wonga'}
              projectUrl={'https://www.wonga.com/'}
              description={'Remote loan system.'}
              technologies={'.Net: C#, MsSql Server, selenium, unit testing, powershell.'}
            />
          </div>
          <div className="right">
            <div className="title">
              education
            </div>
            <EducationItem
              date={'2013 - 2015'}
              title={'Master degree in Software Systems Engineering.'}
              uniTitle={'RWTH Aachen University. Germany'}
              uniUrl={'http://www.rwth-aachen.de/'}
            />
            <EducationItem
              date={'2009 - 2013'}
              title={'Bachelor degree in Computer Engineering.'}
              uniTitle={'Taras Shevchenko National University of Kiev. Ukraine .'}
              uniUrl={'http://www.univ.kiev.ua/en/'}
            />
            <div className="title">
              skills & competences
            </div>
            <ProgressBar
              title={"Javascript"}
              percentage={100}
            />
            <ProgressBar
              title={"Node"}
              percentage={90}
            />
            <ProgressBar
              title={"React"}
              percentage={85}
            />
            <ProgressBar
              title={"Knockout"}
              percentage={90}
            />
            <ProgressBar
              title={"Redux"}
              percentage={85}
            />
            <ProgressBar
              title={"MySql"}
              percentage={85}
            />
            <ProgressBar
              title={"MongoDb"}
              percentage={70}
            />
            <ProgressBar
              title={"HTML5"}
              percentage={95}
            />
            <ProgressBar
              title={"CSS3"}
              percentage={90}
            />
            <ProgressBar
              title={"Git"}
              percentage={95}
            />
            <ProgressBar
              title={"Unit Testing"}
              percentage={85}
            />

            <div className="title">
              Languages
            </div>
            <div className="languages">
              <div className="languages-item">
                <div className="item-title">
                English
                </div>
                Fluent
              </div>
              <div className="languages-item">
                <div className="item-title">
                Russian
                </div>
                Native
              </div>
              <div className="languages-item">
                <div className="item-title">
                German
                </div>
                B1
              </div>
            </div>

          </div>
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
      .title{
        text-transform: uppercase;
        font-weight: 500;
        color: #aba7a7;
        letter-spacing: 4px;
        margin-bottom: 10px;
      }

      .profile-info {
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .profile-text {
        color: #3c3b3b;
        flex-grow: 1;
        max-width: 250px;
      }

      @media (max-width: 600px) {
        .profile-info {
          display: block;
          margin-bottom: 10px;
        }
        .profile-text {
          max-width: unset;
        }
      }


      .profile-text .fa {
        margin: 0 10px;
      }

      .profile-image {
        height: 100px;
        width: 100px;
        border-radius: 50%;
        margin: 0 20px 10px;
      }

      .half-container{
        display: flex;
        margin-bottom: 20px;
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

      @media (max-width: 600px) {
        .half-container {
          display: block;
        }

        .half-container .left {
          border-right: none;
        }

        .half-container .left, .half-container .right {
          padding: 0 10px;
        }
      }

      .half-container .left, .half-container .right {
        flex: 50%;
      }

      .languages {
        text-align: left;
      }

      .languages .languages-item {
        display: inline-block;
        margin-right: 20px;
        font-size: 12px;
      }
      .languages-item .item-title {
        font-size: 15px;
        font-weight: bold;
      }

    `}</style>
  </Layout>
)
