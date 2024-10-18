import './App.css';

import {useForm} from 'react-hook-form'

function App() {

  let {
    register,
    handleSubmit,
    formState: {errors},
    reset
  } = useForm({mode: 'all'})

  const onSubmit = (data) => {
    reset()
    console.log(data)
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label> Имя: 
              <input {...register('firstname', {
                required: 'Имя должно быть обязательно заполнено',
                minLength: {
                  message: 'Имя должно быть из более 3 символов',
                  value: 4
                },
                pattern: {
                  message: 'Pattern',
                  value: /\d{3}/
                }
              })}/>
            </label>
            {errors.firstname && <p style={{color: 'red'}}>{errors.firstname.message}</p>}
          </div>

          <div>
            <label> Фамилия: 
              <input {...register('lastname', {
                required: 'Фамилия должна быть обязательно заполнена',
                minLength: {
                  message: 'Фамилия должно быть более 3 символов',
                  value: 4
                },
              })}/>
            </label>
            {errors.lastname && <p style={{color: 'red'}} >{errors.lastname.message}</p>}
          </div>

          <div>
            <input type='submit'/>
          </div>
      </form>
    </div>
  );
}

export default App;
