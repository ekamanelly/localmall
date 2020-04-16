import React, { useState} from 'react';


// conponent
import CartItem from './CartItem';

//npm parkage by ...
import {list, total, remove} from 'cart-localstorage';

//to animate listed item on cart && billing method
import {useTransition, animated,  useSpring, config} from 'react-spring'

const Cart = (props) => {

    //you still have to master hooks ekama
    const [cartItem, setCartItem] = useState(list());
    const [cardDetail, SetCardDetail] = useState(' Card Details 0000 0000 0000');
    const [cvc, setCvc] = useState('CVC Number');
    const [payment, setPayment] = useState(true);
    const [final, setFinal ] = useState(true)


   //to delete item from cart === remove item from Stringify in localStorage 
    const handleDelete = (id) => {       
        remove(id);
        let newItem = () => list()
        setCartItem(newItem); 
        
    }

    //strugled with this for quite sometime, you still ave master these
    const transition = useTransition(cartItem, cartItem => cartItem.id, {
        config: config.slow ,
        delay: 300,
        from: {opacity:0,  transform:'translateY(-20px)'},
        enter: {opacity:1, transform:'translateX(0)'},
        leave: {opacity:0, transform:'translateY(20)'},
        

    })

    const displayPayment = useSpring({
        // opacity: payment? 0 : 0.9,
        config: {duration: 1000},
        backgroundColor: payment?' rgb(233, 30, 99)': 'rgba(64, 81, 181, 0.9)',
        visibility: payment? 'hidden':'visible',
      })
      const slidePayment = useSpring({
        config: {duration: 1000, delay:800},
        transform: payment? 'scale(0.4)': 'scale(1)',
        opacity: payment? 0 : 1,
      })

   
  



    return ( 
            <>            
                <table className='col l10 s12 offset-l1 white-text  '>
                    <thead>
                    <tr>
                        <th>Name</th>    
                        <th>unit</th>                        
                        <th>Price</th>
                        <th>Remove</th>
                    </tr>
                    </thead>

                    <tbody>
                        { 
                        // cartItem.map( cur => <CartItem {...cur} onDelete={handleDelete} />)
                            transition.map(({item, key, props}) =>(
                                <animated.tr style={props} key={key}>
                                    <CartItem  {...item} onDelete={handleDelete} />
                                </animated.tr>

                            ) )
                        }
                        {/* {cartItem.map(cur => 
                        <CartItem {...cur} onDelete={handleDelete}/> )} */}
                        <tr>
                            <td className='center' onClick={()=> setPayment(!payment)}><img className='btn__payment center' src='/img/debit-card.png'/></td>
                            <td> <h6 className="white-text">TOTAl</h6></td>
                            <td className="green-text">{total()}.oo</td>
                        </tr>
                    
                    
                    </tbody>
                </table>
               
                    <animated.div style={displayPayment} className=' payment__view' >
                       <span> <h4 className='center white-text' >billing<img className='profile__img ' src='/img/mastercard.png'/></h4> </span>

                        <animated.div  style={slidePayment} className="card col l8 s10 m10 offset-l2 offset-s1 offset-m1 pink">
                        <span className='' onClick={()=> setPayment(!payment)}><i class="btn__close material-icons right">close</i></span>
                           <div className="input__area">
                                <h5 className='green-text'>{final?`Amount: ${total()}`:'hope this is leaves an impressioni'}</h5>
                                <hr/>
                                <div className='input__field'>
                                    <input className='i__input' placeholder={cardDetail} onChange={(e) => SetCardDetail(e.target.value)} />
                                </div>
                                <div className='input__field'>
                                    <input className='i__input' placeholder={cvc} onChange={(e) => setCvc(e.target.value)} />
                                </div>
                                <div className="input__field">
                                    <div onClick={(e) => setFinal(e.target.value)}className="btn">Pay</div>
                                </div>
                           </div>
                        </animated.div >
                        
                    </animated.div>

                
            </>
     );
}
 
export default Cart;


// class Cart extends Component {
//     state = { 
//         cartItem:[]
//      }
//      componentDidMount() {
//          let itemFromLocalStorage = list()
//          this.setState({cartItem:itemFromLocalStorage})
//      }
//     handleDelete = (id) => {
//         remove(id)
//         let itemFromLocalStorage = list()
//         this.setState({cartItem:itemFromLocalStorage})
//     } 
//     render() { 
//         return ( 
//             <>            
//             <table className='col l10 s12 offset-l1'>
//                         <thead>
//                         <tr>
//                             <th>Name</th>    
//                             <th>unit</th>                        
//                             <th>Price</th>
//                         </tr>
//                         </thead>

//                         <tbody>
//                             {this.state.cartItem.map(cur => 
//                             <CartItem {...cur}/> )}
//                             <tr>
//                                 <td></td>
//                                 <td> <h6 className="white-text">TOTAl</h6></td>
//                                 <td className="green-text">{total()}.oo</td>
//                             </tr>
                        
                        
//                         </tbody>
//                     </table>
//             </>
//          );
//     }
// }
 
// export default Cart;