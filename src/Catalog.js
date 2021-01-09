import './Catalog.css'
import React from 'react'
import {Redirect} from 'react-router-dom'
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
        this.state = {result: 0, counts: [0,0,0,0,0,0,0,0], cash: 0, logged:true, added: false}
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    componentDidMount() {
        fetch('/api/catalog', {
            method: "post",
            headers: {'Content-Type': 'application/json'}
        }).then(res => {
            res.json().then(data => {
                if (data.logged) {
                    this.setState({logged:true, cash: data.cash})
                } else {
                    this.setState({logged:false})
                }
            }).catch(e => {
                console.error((e))
            })
        }).catch(e => {
            console.error((e))
        })
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

    onSubmit(event){
        event.preventDefault()
        fetch('/api/catalog', {
            method: "post",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                result: this.state.result
            })
        }).catch(e => {
            console.error((e))
        })
        this.setState({added: true})
    }

    render(){
        if (!this.state.logged){
            return (<Redirect to="/auth" />)
        }
        else if (this.state.added){
            return (<Redirect to="/home" />)
        }
        else {
            return (
                <div>
                    <ul className="products">
                        {products.map((item, index) => {
                            return (<Product onChange={this.onChange} name={item} image={index}/>)
                        })}
                    </ul>
                    <div className="result">
                            <p>Итого: {this.state.result} </p>
                            <p>На вашем счету {this.state.cash} руб </p>
                        <button onClick={this.onSubmit} id="add">Добавить в корзину</button>
                    </div>
                </div>
            )
        }
    }
}
class Product extends React.Component{
    render(){
        return(
            <div className="product">
                <div className="product-img">
                    <img src={images[this.props.image]} alt="" />
                </div>
                <p className="product-title">{this.props.name}</p>
                <p className="product-price">{prices[this.props.image]} руб/шт</p>
                <input onChange={this.props.onChange} name={this.props.image} id="count" type="number" min="0" />
            </div>
        )
    }
}

export default Catalog