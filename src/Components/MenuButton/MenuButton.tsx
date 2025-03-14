
import { MenuButtonProps } from '../../Models/Props/MenuButtonProps';

import './MenuButton.css'

function MenuButton(props: MenuButtonProps) {
    return (
        <div className={`menu-container ${props.isOpen ? 'menu-button-open' : 'menu-button-closed'}`} onClick={props.onClick}>
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