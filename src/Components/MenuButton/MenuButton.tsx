
import { MenuButtonProps } from './MenuButtonProps';

import './MenuButton.css'

function MenuButton(props: MenuButtonProps) {
    return (
        <div className={`menu-container ${props.isOpen ? 'menu-button-open' : ''}`} onClick={props.onClick}>
            <div className="menu-button" id="menuButton">
                <span></span>
                <span></span>
                <span></span>
            </div>
            {props.child}
        </div>
    )
}

export default MenuButton