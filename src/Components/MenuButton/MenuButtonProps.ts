import { JSX } from "react"

export class MenuButtonProps {
    isOpen: boolean
    child?: React.ReactNode
    onClick: () => void


    constructor(isOpen: boolean) {
        this.isOpen = isOpen
        this.onClick = () => { }
    }
}