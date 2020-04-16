import React, {useState} from 'react';
import {useTransition, useSpring, animated} from 'react-spring'


const Item = (props) => {
    // const [show, set] = useState(props.cartEmpty)
    // const transitions = useTransition(show, null, {
    // from: { position: 'absolute', opacity: 0 },
    // enter: { opacity: 1 },
    // leave: { opacity: 0 },
    // })

    //feedback for emptyCart. spring is sweet!!!
    const showWarning = useSpring({
        opacity: props.cartEmpty? 0 : 1,
        
      })
    const changeColor = useSpring({
        opacity: props.cartEmpty? 0 : 1,
        backgroundColor: props.cartEmpty? '#283593': '#b71c1c',
        

    })  
    const price = useSpring({ x: 0, from: { x: props.cost } })
  
    return (       
        <div  className="col s10 offset-s1 m6 l4">
            <div className="card">
                <div class="card-image waves-effect waves-block waves-light">
                    <img class="activator item__img" src={props.img} alt=''/>
                </div>
                <div class="card-content">
                    <span class="card-title activator grey-text text-darken-4">{props.name}<i class="material-icons right">more_vert</i></span>
                    <span className="price__text green-text   text-darken-4">Price:{props.price}</span>
                    </div>
                    <div class="card-reveal  indigo darken-3">
                        <div className="row">
                            <span class="card-title white-text text-darken-4">{props.name}
                                <i class="material-icons right">close                         
                                </i>
                            </span>
                        </div>                 
                        <div className="row "> 
                          <div className='btn col l3 svg__div waves-effect waves-light'>
                            <svg onClick={() => props.onDecrease(props.id)} className="svg__icon">
                                <use xlinkHref="/svg/sprite.svg#minus"/>
                            </svg> 
                          </div>                            
                          <div className='btn svg__div col l3 waves-effect waves-light right'>
                            <svg onClick={() => props.onIncrease(props.id)} className="svg__icon">
                                <use xlinkHref="/svg/sprite.svg#plus"/>
                            </svg> 
                          </div> 
                        </div>
                        <div className="center row">
                            <span className="center col  s12 l12 m12 white-text">{props.unit}:{props.quantity} </span><span className="center col s12 m12 l12 green-text">Price:{props.cost}.00</span>
                        </div>
                        <div className='cart__div row'>
                            <svg className="svg__icon">
                                <use xlinkHref="/svg/sprite.svg#shopping-cart"/>
                            </svg> 
                        <div className="center waves-effect waves-light btn" onClick={() => props.onAddToCart(props.id)}>cart</div>
                        </div>
                        <animated.div style={changeColor} className="center card item__warning" >
                            <animated.span style={showWarning} className="white-text">!!!Empty Cart</animated.span>
                        </animated.div>
                   
                </div>                
            </div>

        </div>
     );
}
 
export default Item;