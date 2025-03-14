
import { useEffect, useRef } from 'react';
import sketch from '../../Sketches/FooterSketch.ts';
import p5 from 'p5';

import './Footer.css'
import { Constants } from '../../Models/Constants/Constants.ts';

function Footer() {
    const p5ContainerRef: any = useRef(null);
    useEffect(() => {
        const p5Instance = new p5(sketch, p5ContainerRef.current);

        return () => {
            p5Instance.remove();
        }
    }, []);

    const emailMe = () => {
        window.location.href = 'mailto:ortizethan3@gmail.com';
    }

    const addOnLinkedIn = () => {
        window.open(Constants.linkedIn, '_blank');
    }

    return (
        <footer className='footer-container' id='footer'>
            <div className='footer-info'>
                <h2>Let's Work Together!</h2>
                <div className='button-container'>
                    <button className='button' onClick={emailMe}>Contact Me</button>
                    <button className='button' onClick={addOnLinkedIn}>Add On LinkedIn</button>
                </div>

                <p>
                    This website was created using React, TypeScript, and P5.js.
                    The source code can be found on my GitHub.
                </p>
            </div>
            <div className='footer-p5-container' ref={p5ContainerRef} >
            </div>
        </footer>
    )
}

export default Footer