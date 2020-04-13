import React, { Component } from 'react';
import News from './News';
import NewsSlide from './newsSlide';


class Newsfield extends Component {
    render() { 
        return ( 
            <div>
                <div>
                    <NewsSlide/>
                </div>
                {/* <div className=" container ">
                    <h2 className="center indigo-text ">
                        Other News 
                    </h2>
                    <div className="row">
                        <div className="col l4 m6 s12">
                            <News/>
                        </div>
                        <div className="col l4 m6 s12">
                            <News/>
                        </div>
                        <div className="col l4 m6 s12">
                            <News/>
                        </div>
                        <div className="col l4 m6 s12">
                            <News/>
                        </div>
                        <div className="col l4 m6 s12">
                            <News/>
                        </div>
                        <div className="col l4 m6 s12">
                            <News/>
                        </div>                     
                    </div>
                </div> */}
            </div>           
         );
    }
}
 
export default Newsfield;