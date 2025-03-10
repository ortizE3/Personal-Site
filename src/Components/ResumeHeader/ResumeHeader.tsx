import ResumeProperties from "./ResumeProperties"
import './ResumeHeader.css'

function ResumeHeader(props: ResumeProperties) {
    return (
        <div className="resume-header-container">
            <img src={props.imgSrc} />
            <div>
                <h3>{props.title}</h3>
                <p>{props.date}</p>
                <p>{props.child}</p>
            </div>
        </div>
    )
}

export default ResumeHeader