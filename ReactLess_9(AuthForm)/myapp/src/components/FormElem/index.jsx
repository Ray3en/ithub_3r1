import { Link } from 'react-router-dom'
import { Button } from '../../UI/Button'
import style from './FormElem.module.css'


export function FormElem(props){

    const {title, button, link} = props

    return (
        <div>
            <h2>{title}</h2>
            <Link to={link}>
                <Button color='white' text={button.redirect}/>
            </Link>

            <Button color='yellow' text={button.submit}/>
        </div>
    )
} 
