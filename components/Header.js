import Link from 'next/link'

const linkStyle = {
  marginRight: 15
}

const Header = () => (
    <div className="header-holder">
      <div className="title-frame"></div>
      <h1>
        <Link href="/">
          <a>Petro Tarasenko</a>
        </Link>
      </h1>
      <style jsx>{`
      h1 {
        font-size: 30px;
        font-weight: 100;
        text-align: center;
        margin-bottom: 30px;
      }

      a {
        color: #000;
      }

      a: hover {
        text-decoration: none;
      }

      .header-holder {
        padding-top: 40px;
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
        z-index: -1;
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
