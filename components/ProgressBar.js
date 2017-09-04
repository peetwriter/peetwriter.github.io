
const ProgressBar = ({title, percentage}) => (
    <div className="progressbar">
      <div className="title">{title}</div>
      <div className="holder">
        <div className="inner"
          style={{width: `${percentage}%`}}
        ></div>
      </div>

      <style jsx>{`
        .progressbar {
          display: flex;
          margin-bottom: 14px;
        }

        .title {
          font-size: 13px;
          width: 90px;
          line-height: 0.7;
        }

        .holder{
          width: 100%;
          max-width: 300px;
          height: 8px;
          border: 1px solid #efeaea;
        }

        .inner{
          height: 8px;
          background: -moz-linear-gradient(left, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.1) 100%);
          background: -webkit-linear-gradient(left, rgba(0,0,0,0.8) 0%,rgba(0,0,0,0.1) 100%);
          background: linear-gradient(to right, rgba(0,0,0,0.8) 0%,rgba(0,0,0,0.1) 100%);
          filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#a6000000', endColorstr='#00000000',GradientType=1 );
        }

    `}</style>
    </div>
)

export default ProgressBar
