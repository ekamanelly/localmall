import React, { Component } from 'react';
import M from 'materialize-css'

class Slide extends Component {
    componentDidMount() {
        document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('.slider');
            // var instance = M.Materialbox.getInstance(elems)
            var instances = M.Slider.init(elems, {
                indicators:false,
                duration: 1000,
                height:400
                
                
            });
            // setTimeout(() => {
            //     instance.close()
            // }, 5000);
          });
        //   forwardSlide = () => instances.next()

          
        
    }
    render() { 
        return ( 
            <div class=" card slider">
            <ul class="slides">
            <li>
                <img src="/img/img3.jpg"/> 
                <div class="caption center-align">
                <h3>This is our big Tagline!</h3>
                <h5 class="light grey-text text-lighten-3 hide-on-small-only">Here's our small slogan.</h5>
                </div>
            </li>
            <li>
                <img src="/img/img5.jpg"/> 
                <div class="caption left-align">
                <h3>Left Aligned Caption</h3>
                <h5 class="light grey-text text-lighten-3 hide-on-small-only">Here's our small slogan.</h5>
                </div>
            </li>
            <li>
                <img src="/img/img6.jpg"/> 
                <div class="caption right-align">
                <h3>Right Aligned Caption</h3>
                <h5 class="light grey-text text-lighten-3 hide-on-small-only">Here's our small slogan.</h5>
                </div>
            </li>
            <li>
                <img src="/img/img7.jpg"/> 
                <div class="caption center-align">
                <h3>This is our big Tagline!</h3>
                <h5 class="light grey-text text-lighten-3 hide-on-small-only">Here's our small slogan.</h5>
                </div>
            </li>
            <li>
                <img src="/img/img7.jpg"/> 
                <div class="caption center-align">
                <h3>This is our big Tagline!</h3>
                <h5 class="light grey-text text-lighten-3 hide-on-small-only">Here's our small slogan.</h5>
                </div>
            </li>
            </ul>
        </div>
         );
    }
}
 
export default Slide;