import React, { Component } from 'react';

class Service extends Component {
    state = {  }
    render() { 
        return ( 
            <div className='center'>
                <div className="row">

                
                    <table className='col l10 s12 offset-l1'>
                        <thead>
                        <tr>
                            <th>Type</th>                            
                            <th>Item Price</th>
                        </tr>
                        </thead>

                        <tbody>
                        <tr>
                            <td>Alvin</td>
                            
                            <td>$0.87</td>
                        </tr>
                        <tr>
                            <td>Alan</td>                            
                            <td>$3.76</td>
                        </tr>
                        <tr>
                            <td>Jonathan</td>
                            <td>$7.00</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
         );
    }
}
 
export default Service;