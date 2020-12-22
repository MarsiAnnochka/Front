import './Catalog.css'
import React from 'react'
import img1 from './images/0.jpeg'
import img2 from './images/1.jpeg'
import img3 from './images/2.jpg'
import img4 from './images/3.jpg'
import img5 from './images/4.jpeg'
import img6 from './images/5.jpeg'
import img7 from './images/6.jpg'
import img8 from './images/7.jpg'

const prices = [100, 70, 70, 138, 99, 80, 200, 100]
const images = [img1, img2, img3, img4, img5, img6, img7, img8]
const products = [
    'Тюльпан','Роза','Гвоздика','Астра','Хризантема','Ирис','Нарцисс','Ромашка'
]

class Catalog extends React.Component {
    constructor() {
        super();
        this.state = {result: 0, counts: [0,0,0,0,0,0,0,0]}
        this.onChange = this.onChange.bind(this)
    }
    onChange(event) {
        event.preventDefault()
        let newState = this.state.result
        let deltaValue = event.target.value - this.state.counts[event.target.name]
        newState+= prices[event.target.name]*deltaValue
        let newCounts = this.state.counts
        newCounts[event.target.name]=event.target.value
        this.setState({result: newState , counts: newCounts})
    }
    render(){
        return (
            <form method="get" action="">
                <ul className="products">
                    {products.map((item, index) => {
                        return (<Product onChange={this.onChange} name={item} image={index}/>)
                    })}
                </ul>
                <div className="result">
                    <p>Итого: {this.state.result} </p>
                    <p>На вашем счету  руб </p>
                    <input type="submit" value="Добавить в корзину" id="add" />
                </div>
            </form>
        )
    }
}

const Product = (props) => (
    <div className="product">
        <div className="product-img">
            <img src={images[props.image]} alt="" />
        </div>
        <p className="product-title">{props.name}</p>
        <p className="product-price">{prices[props.image]} руб/шт</p>
        <input onChange={props.onChange} name={props.image} id="count" type="number" min="0" />
    </div>
)

export default Catalog