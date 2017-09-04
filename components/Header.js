import Link from 'next/link'

const linkStyle = {
  marginRight: 15
}

const Header = () => (
    <div className="header-holder">
      <div className="title-frame"></div>
      <h1>Petro Tarasenko</h1>
      <style jsx>{`
      h1 {
        font-size: 30px;
        font-weight: 100;
        text-align: center;
        margin-bottom: 30px;
      }

      .title-frame{
        height: 62px;
        border: 1px solid #000;
        -webkit-transform: rotate(-45deg);
        -ms-transform: rotate(-45deg);
        transform: rotate(-6deg);
        position: absolute;
        width: 400px;
        margin-left: 50%;
        left: -200px;
        top: 25px;
      }

      @media (max-width: 600px){
        .title-frame {
          width: 340px;
          left: -170px;
        }
      }

    `}</style>
    </div>
)

export default Header
