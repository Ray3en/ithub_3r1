import { Link } from 'react-router-dom'
import { Button } from '../../UI/Button'
import style from './FormElem.module.css'
import { Input } from '../../UI/Input'
import {useForm} from 'react-hook-form'

export function FormElem(props){

    const {title, button, link, type, infoText} = props

    const {
        register,
        formState: {errors},
        handleSubmit,
        reset,
        watch
    } = useForm()

    const onSubmit = (data) => {
        console.log(data)
        reset()
    }

    return (
        <div>
            <form className={style.form_area} onSubmit={handleSubmit(onSubmit)}>
                <h2>{title}</h2>

                <div className={style.input_area}>
                    <p>Почта</p>
                    <Input {...register('email', {
                        required: 'Почта обязательна к заполнению',
                        pattern: {
                            message: 'Указана неверная почта',
                            value: /^([A-z])+([0-9-_.])*([A-z0-9-_.])*@([A-z])+([0-9-_.])*([A-z0-9-_.])*[.]([A-z]){2,6}$/
                        }
                    })}/>
                    {errors.email && <p className={style.warning_text}>{errors.email.message}</p>}
                </div>

                {type !== 'reset' && 
                    <div className={style.input_area}>
                        <p>Пароль</p>
                        <Input type={'password'} {...register('password', {
                            required: 'Пароль обязателен к заполнению',
                            pattern: {
                                message: 'Пароль должен содержать минимум 8 символов и хотябы 1 цифру',
                                value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
                            }
                        })}/>
                        {errors.password && <p className={style.warning_text}>{errors.password.message}</p>}
                    </div>
                }


                {type === 'reg' && 
                    <div className={style.input_area}>
                        <p>Продублируйте пароль</p>
                        <Input type={'password'} {...register('secondPassword', {
                            required: 'Поле необходимо заполнить',
                            validate: (value) => value === watch('password') || 'Пароли не совпадают'
                        })}/>
                        {errors.secondPassword && <p className={style.warning_text}>{errors.secondPassword.message}</p>}
                    </div>
                }    

                <p className={style.info_text}>{infoText}</p>

                {type === 'login' &&
                    <Link style={{alignSelf: 'flex-start', textDecoration: 'underline'}} to={'/reset'}>
                        <p className={style.info_text}>Восстановить доступ</p>
                    </Link>
                }                
                
                <div className={style.btn_wrapper}>
                    <Link to={link}>
                        <Button color='white' text={button.redirect}/>
                    </Link>

                    <Button color='yellow' text={button.submit}/>
                </div>    
            </form>
        </div>
    )
} 
