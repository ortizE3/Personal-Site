import { useEffect, useState } from "react";
import ResumeProperties from "../../Models/Props/ResumeProperties"
import './ResumeHeader.css'

function ResumeHeader(props: ResumeProperties) {
    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {

        const handleResize = () => {
            if (window.innerWidth < 700) {
                setIsMobile(true)
            } else {
                setIsMobile(false)
            }
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <>
            {!isMobile &&
                < div className="resume-header-container" >
                    <img src={props.imgSrc} />
                    <div>
                        <h3>{props.title}</h3>
                        <p>{props.date}</p>
                        <div>{props.child}</div>
                    </div>
                </ div>
            }

            {isMobile &&
                <>
                    < div className="resume-header-container" >
                        <img src={props.imgSrc} />
                        <h3>{props.title}</h3>
                    </ div>
                    <p className="mobile-date">{props.date}</p>
                    <div>{props.child}</div>
                </>
            }
        </>
    )
}

export default ResumeHeader