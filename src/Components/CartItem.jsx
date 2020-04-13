import React from 'react';
import { remove } from 'cart-localstorage';


const CartItem = (props) => {
    return ( 
        <tr>
        <td>{props.name}</td>
        <td>{props.unit }: {props.quantity} </td>
        <td className="green-text">{props.cost}.oo</td>
        <td onClick={() => props.onDelete((props.id))}>
        <i class="material-icons ">delete</i>
        </td>
        </tr>
     );
}
 
export default CartItem;