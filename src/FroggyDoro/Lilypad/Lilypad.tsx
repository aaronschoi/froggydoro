import { MouseEventHandler } from "react";

interface IProps {
    text: string
    clickEvent?: MouseEventHandler
}

export default function Lilypad ({clickEvent, text} : IProps) {

    return (
        <button className="lilypad-container" onClick={clickEvent}>
        <img className="lilypad-img" src={require('../../SVG/lilypad.svg').default} alt="lilypad"/>
        <div className="lilypad-text">{text}</div>
        </button>
    )
}