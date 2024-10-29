import style from './Button.module.css'


export function Button(props){

    const {color , text, ...otherProps} = props

    return (
        <button {...otherProps} className={`${style.button_elem} ${style[color]} `}>{text}</button>
    )
}


// spread / rest операторы