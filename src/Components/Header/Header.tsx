import { useNavigate } from 'react-router';
import './Header.css'


function Header() {
    let navigate = useNavigate();

    let onTitleClick = () => {
        navigate('/')
    }

    let onResumeClick = () => {
        navigate('/resume')
    }
    return (
        <header className='header-container'>
            <h1 className='header-title' onClick={onTitleClick}>Ethan Ortiz</h1>
            <div className='header-link-container'>
                <a className='header-link' href='http://www.linkedin.com/in/ethan-ortiz-824505162'>LinkedIn</a>
                <a className='header-link' href='https://github.com/ortizE3?tab=repositories'>Github</a>
                <a className='header-link' onClick={onResumeClick}>Resume</a>
                <a className='header-link'>Projects</a>
            </div>
        </header>
    )
}

export default Header