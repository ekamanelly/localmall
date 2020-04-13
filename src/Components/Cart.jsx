import React, { useState } from 'react';


//
import {list, total, remove} from 'cart-localstorage';
import CartItem from './CartItem';
import {useTransition, animated} from 'react-spring'

const Cart = (props) => {
    const [cartItem, setCartItem] = useState(list())

    // let cartItem = list()
    const handleDelete = (id) => {
        remove(id);
        setCartItem(list());

    }

    const transition = useTransition(cartItem, cartItem => cartItem.id, {
        config: { duration: 1000 },
        delay: 300,
        from: {opacity:0, height: '0rem' },
        enter: {opacity:1, height:'3rem'}

    })
    console.log(transition)
  



    return ( 
            <>            
                <table className='col l10 s12 offset-l1'>
                    <thead>
                    <tr>
                        <th>Name</th>    
                        <th>unit</th>                        
                        <th>Price</th>
                    </tr>
                    </thead>

                    <tbody>
                        {
                            transition.map(({item, key, props}) =>(
                                <animated.tr style={props} key={key}>
                                    <CartItem {...item} onDelete={handleDelete} />
                                </animated.tr>

                            ) )
                        }
                        {/* {cartItem.map(cur => 
                        <CartItem {...cur} onDelete={handleDelete}/> )} */}
                        <tr>
                            <td></td>
                            <td> <h6 className="white-text">TOTAl</h6></td>
                            <td className="green-text">{total()}.oo</td>
                        </tr>
                    
                    
                    </tbody>
                </table>
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