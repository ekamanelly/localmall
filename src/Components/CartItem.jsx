import React from 'react';

const CartItem = (props) => {
    return ( 
        <>
        <td>{props.name}</td>
        <td>{props.unit }: {props.quantity} </td>
        <td className="green-text">{props.cost}.oo</td>
        <td onClick={() => props.onDelete(props.id)}>
        <i class=" btn__delete material-icons ">delete</i>
        </td>
        </>
     );
}
 
export default CartItem;