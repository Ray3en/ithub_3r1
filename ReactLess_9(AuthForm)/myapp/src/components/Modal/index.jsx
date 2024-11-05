import { Route, Routes } from 'react-router-dom'
import style from './Modal.module.css'
import { FormElem } from '../FormElem'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faXmark} from '@fortawesome/free-solid-svg-icons'

export function Modal(props){

    const {setActive, active} = props

    function escapeModal(event){
        if (event.key === 'Escape' && active){
            setActive(false)
        }
    }

    // Закрытие модального окна в случае если нажмем на Escape
    window.addEventListener('keydown', escapeModal)

    return (
        <div className={`${style.modal} ${active && style.active}`}> 
            <div className={`${style.modal_content} ${active && style.active}`}>
                <FontAwesomeIcon className={style.x_mark} onClick={() => setActive(false)} icon={faXmark}/>
                <Routes>
                    <Route path='/login' element={
                        <FormElem
                            title='Авторизация'
                            button={{redirect: 'Регистрация', submit: 'Авторизоваться'}}
                            link='/registration'
                            type='login'
                        />
                    }/>
                    <Route path='/registration' element={
                        <FormElem
                            title='Регистрация'
                            button={{redirect: 'Авторизация', submit: 'Зарегистрироваться'}}
                            link='/login'
                            type='reg'
                        />
                    }/>
                </Routes>
            </div>
        </div>
    )
}

