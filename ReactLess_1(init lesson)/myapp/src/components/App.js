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
    return(
      <div>
        <ProductItem/>
        {/* <Post/> */}
      </div>
    )
  }
  
export default App