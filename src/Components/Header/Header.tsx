import { useNavigate } from 'react-router';
import { useEffect, useRef, useState } from 'react';
import { Constants } from '../../Models/Constants/Constants';
import MenuButton from '../MenuButton/MenuButton';

import './Header.css'


function Header() {
    const [isMobile, setIsMobile] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (ref.current && !ref.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        }

        const handleResize = () => {
            if (window.innerWidth < 1000) {
                setIsMobile(true)
            } else {
                setIsMobile(false)
            }
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    let navigate = useNavigate();

    let onTitleClick = () => {
        navigate('/ethan-ortiz/');
    }

    let onResumeClick = () => {
        navigate('/ethan-ortiz/resume');
    }

    let onOpenClick = () => {
        setIsOpen(!isOpen);
    }

    let onLinkedInClick = () => {
        window.open(Constants.linkedIn, '_blank')
    }

    let onGithubClick = () => {
        window.open(Constants.github, '_blank')
    }

    return (
        <>
            <header className='header-container' >
                {
                    !isMobile &&
                    <>
                        <h1 className='header-title' onClick={onTitleClick}>Ethan Ortiz</h1>
                        <div className='header-link-container'>
                            <a className='header-link' onClick={onLinkedInClick}>LinkedIn</a>
                            <a className='header-link' onClick={onGithubClick}>Github</a>
                            <a className='header-link' onClick={onResumeClick}>Resume</a>
                        </div>
                    </>
                }
            </ header>
            {
                isMobile &&
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
        </>

    )
}

export default Header