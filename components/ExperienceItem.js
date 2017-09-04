import Link from 'next/link'

const linkStyle = {
  marginRight: 15
}

const ExperienceItem = ({date, title, company, project, description, technologies, projectUrl}) => (
    <div className="holder">
      <div className="date">
        {date}
      </div>
      <div className="company">
        {company}
      </div>
      <div className="title">
        {title}
      </div>
      <div className="project">
        <span className="sub-title">Project: </span>
        <a href={projectUrl} target="_blank">{ project }</a>
      </div>
      <div className="description">
        {description}
      </div>
      <div className="description">
        <div className="sub-title">Technologies used </div>
        {technologies}
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

        .company {
          font-size: 15px;
          font-weight: 100;
        }

        .title{
          font-size: 15px;
          font-weight: 500;
        }

        .sub-title{
          color: #aba7a7;
          font-weight: 200;
        }

        .project {
          font-size: 13px;
          font-weight: bold;
        }

        .description {
          font-size: 13px;
        }

    `}</style>
    </div>
)

export default ExperienceItem
