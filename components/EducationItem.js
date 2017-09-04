import Link from 'next/link'

const linkStyle = {
  marginRight: 15
}

const Education = ({date, title, uniTitle, uniUrl}) => (
    <div className="holder">
      <div className="date">
        {date}
      </div>
      <div className="uni">
        <a href={uniUrl} target="_blank">{ uniTitle }</a>
      </div>
      <div className="title">
        {title}
      </div>


      <style jsx>{`
        .holder{
          margin-bottom: 10px;
          padding-bottom: 5px;
          border-bottom: 1px solid #efeaea;
        }

        .date {
          font-size: 15px;
          font-weight: 100;
          font-style: italic;
        }

        a {
          color: #484848;
        }

        .uni {
          font-size: 15px;
          font-weight: 100;
        }

        .title{
          font-size: 15px;
          font-weight: 500;
        }

    `}</style>
    </div>
)

export default Education
