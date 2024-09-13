import Post from "./Post"
import ProductItem from "./ProductItem"

function App(){
    // let string = 'First post!'
    // let number = Math.random()
    // let pClass = 'text'

    // Задание
    // Создайте компонент ProductItem. 
    // Внутри компонента необходимо создать 3 переменых с значеними 
    // Источник картинки:
    // let imgUrl = 'https://www.intex-rus.ru/img/goods/small/1014898-1-1.jpg'
    // Имя продукта - Яблоко
    // Стоимость продукта - 1000
    // Компонент должен возвращать div - контейнер с дочерними элементами: h2 - имя, p - стоимость, img - картинка

    // Компонент необходимо вызвать внутри компонента App

    // К каждому посту добавьте еще 1 проп color
    // в качестве значения передайте 3 разных цвета (red, green, blue)
    // В компонете пост получите проп и укажите данный цвет для текста заголовка

   let posts = [
    {id: 1, color: 'red', title: 'First post', text: 'first text'},
    {id: 2, color: 'blue', title: 'Second post', text: 'second text'},
    {id: 3, color: 'green', title: 'Third post', text: 'third text'},
   ]     

    return(
      <div>
        {posts.map(elem => <Post 
                              key={elem.id}
                              title={elem.title} 
                              color={elem.color}
                              text={elem.text}
                            />)}
      </div>
    )
  }
  
export default App

