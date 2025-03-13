import { useNavigate } from 'react-router';
import { useEffect, useRef, useState } from 'react';

import './Header.css'
import './HeaderMobile.css'
import { Constants } from '../../Helpers/Constants';
import MenuButton from '../MenuButton/MenuButton';

function Header() {
    const [isMobile, setIsMobile] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (ref.current && !ref.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
            //Remove later
            setIsMobile(true)
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    let navigate = useNavigate();

    let onTitleClick = () => {
        navigate('/ethan-ortiz/')
    }

    let onResumeClick = () => {
        navigate('/resume')
    }

    let onOpenClick = () => {
        setIsOpen(!isOpen)
    }

    let onLinkedInClick = () => {
        window.location.href = Constants.linkedIn;
    }

    let onGithubClick = () => {
        window.location.href = Constants.github;
    }

    return (

        < header className='header-container' >
            {
                isMobile &&
                <>
                    <h1 className='header-title' onClick={onOpenClick}>Ethan Ortiz</h1>
                    <div className='header-link-container'>
                        <a className='header-link' href={Constants.linkedIn}>LinkedIn</a>
                        <a className='header-link' href={Constants.github}>Github</a>
                        <a className='header-link' onClick={onResumeClick}>Resume</a>
                    </div>
                </>
            }
            {
                !isMobile &&
                <div ref={ref}>
                    <MenuButton isOpen={isOpen} onClick={onOpenClick} child={<h1 className='header-title' onClick={onOpenClick}>Ethan Ortiz</h1>} />
                    <div className={`mobile-drawer ${isOpen ? 'drawer-open' : ''}`}>
                        <button className='button home-button header-button' onClick={onTitleClick}>Home</button>
                        <button className='button header-button' onClick={onLinkedInClick}>LinkedIn</button>
                        <button className='button header-button' onClick={onGithubClick}>Github</button>
                        <button className='button header-button' onClick={onResumeClick}>Resume</button>
                    </div>
                </div>

            }
        </ header>
    )
}

export default Header