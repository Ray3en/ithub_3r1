import { Link } from 'react-router-dom'
import { Button } from '../../UI/Button'
import style from './FormElem.module.css'
import { Input } from '../../UI/Input'
import {useForm} from 'react-hook-form'

export function FormElem(props){

    const {title, button, link, type} = props

    const {
        register,
        formState: {errors},
        handleSubmit,
        reset,
    } = useForm()

    const onSubmit = (data) => {
        console.log(data)
    }
    return (
        <div>
            <form className={style.form_area} onSubmit={handleSubmit(onSubmit)}>
                <h2>{title}</h2>

                <div className={style.input_area}>
                    <p>Почта</p>
                    <Input {...register('email', {
                        required: 'Почта обязательна к заполнению'
                    })}/>
                    {errors.email && <p className={style.warning_text}>{errors.email.message}</p>}
                </div>


                <div className={style.input_area}>
                    <p>Пароль</p>
                    <Input {...register('password', {
                        required: 'Пароль обязателен к заполнению'
                    })}/>
                    {errors.password && <p className={style.warning_text}>{errors.password.message}</p>}
                </div>

                {type === 'reg' && 
                    <div className={style.input_area}>
                        <p>Продублируйте пароль</p>
                        <Input {...register('secondPassword', {
                            required: 'Поле необходимо заполнить'
                        })}/>
                        {errors.secondPassword && <p className={style.warning_text}>{errors.secondPassword.message}</p>}
                    </div>
                }    

                
                <div>
                    <Link to={link}>
                        <Button color='white' text={button.redirect}/>
                    </Link>

                    <Button color='yellow' text={button.submit}/>
                </div>    
            </form>
        </div>
    )
} 
