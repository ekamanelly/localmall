import React, { Component } from 'react';
import News from './News';
import Item from './Item';
import Cart from './Cart';

//cart-localStorage npm-package
import { add } from  'cart-localstorage' ;
import Slide from './Slide';

class Home extends Component {
    state = { 
        item: [
            {id:'a1', name:'Galic', img:'img/img2.jpg', price:100, cost:0, quantity:0, unit:'pob', cartEmpty: true},
            {id:'a2', name:'Onion', img:'img/img8.jpg', price:10, cost:0, quantity:0, unit:'pob', cartEmpty: true },
            {id:'a3', name:'Fresh Peper', img:'img/img1.jpg', price:170, cost:0, quantity:0, unit:'basket', cartEmpty: true},
            {id:'a4', name:'Bread', img:'img/img5.jpg', price:100, cost:0, quantity:0, unit:'loaf', cartEmpty: true },
            {id:'a5', name:'Rice', img:'img/img6.jpg', price:14036, cost:0, quantity:0, unit:'bag', cartEmpty: true },
            {id:'a6', name:'Iec Cream', img:'img/img7.jpg', price:180, cost:0, quantity:0, unit:'cup', cartEmpty: true },
            {id:'a7', name:'Toast', img:'img/img3.jpg', price:110, cost:0, quantity:0, unit:'loaf', cartEmpty: true },
            {id:'a8', name:'Chocolate n Milk', img:'img/img4.jpg', price:190, cost:0, quantity:0, unit:'cup', cartEmpty: true },
            {id:'a9', name:'Bread', img:'img/img5.jpg', price:100, cost:0, quantity:0, unit:'loaf', cartEmpty: true },
        ],
        isCartVisable: false,
        
        
     } 
     handleDecrease = (id) =>{         
        this.setState(prevState => ({
            item: prevState.item.map(cur => 
                cur.id === id? cur.cost === 0? 
                {...cur, cost: 0, quatity:0}:
                 {...cur, cost: cur.cost - cur.price, quantity:cur.quantity - 1 }:
                  cur                
            )
            
        }))
     }
     
     handleIncrease = (id) =>{         
        this.setState(prevState => ({
            item: prevState.item.map(cur => 
                cur.id === id?                
                 {...cur, cost: cur.cost + cur.price, quantity:cur.quantity +1, cartEmpty: true }:
                  cur)
         
        }))
     }

     handleIsCartEmpty = (id) => {
        this.setState(prevState => ({
            item: prevState.item.map(cur => 
                cur.id === id?                
                 {...cur, cartEmpty:false}:
                  cur),      
        }))
       
     }
     cartOrItem = (id) => {
         if(this.state.isCartVisable){
             return <Cart/>
         }else{
             return <>{this.state.item.map(cur => 
             <Item {...cur} key={cur.id} 
             onIncrease={this.handleIncrease} 
             onDecrease={this.handleDecrease}
             onAddToCart={this.handleAddToCart}
             isCartEmpty={this.isCartEmpty}
             showCart= {this.renderCartOrItem}/>)}</>      }

     }
     renderCartOrItem = () => {
         this.setState(prevState => ({
             isCartVisable: !prevState.isCartVisable
         }))
     }
     
     handleAddToCart = (id) => {
         this.state.item.map(cur => {
             if(cur.id===id) {
                 if(cur.cost !== 0){
                    add(cur)

                 }else {
                     console.log('i cant')
                     this.handleIsCartEmpty(cur.id)

                    //  return  null  

                 }
             }
         })

     }
    render() { 
        return ( 
            <div className="row">                
                <div className="col l10 m10 offset-l1 offset-m1 s12">            
                <section >
                  <Slide/>
                </section>                
                <section className='indigo darken-2 row card'>
                <h2 className='center  indigo white-text darken-3'>Get Food Stuff 
                    <span onClick={this.renderCartOrItem}>
                        <svg className="svg__icon"> show
                            <use xlinkHref="/svg/sprite.svg#shopping-cart"/>
                        </svg> 
                    </span> 
                </h2>
                <p className="grey-text center">Delivered to your doorstep</p>
                    {this.cartOrItem()}
                </section>
                </div>
            </div>

         );
    }
}
 
export default Home;