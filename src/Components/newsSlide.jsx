import React, { Component } from 'react';
import M from 'materialize-css'


class NewsSlide extends Component {
    componentDidMount() {
        document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('.slider');
            
            var instances = M.Slider.init(elems, {
                indicators:false,
                duration: 1000,
                height:800
                // interval: 6000 
            });
          });      
    }
    nextSlide = () => {
        // var elem = document.querySelectorAll('.slider');
        var elems = document.querySelectorAll('.slider');
        var instance = M.Slider.getInstance(elems);
        instance.next()

      }
    render() { 
        return ( 
           <div className="row ma-top-10 ">
              <div class="  col l10 offset-l1 slider">
                <ul class="card slides indigo darken-3">
                <li>
                    <img src="/img/Olaoyo.jpg"/> 
                    <div class="caption right-align">
                    <h3>Olaoyo Temitope</h3>
                    <h5 class="light grey-text text-lighten-3 hide-on-small-only">Cooking, Singing</h5>
                    </div>
                </li>
                <li>
                    <img src="/img/David.jpg"/> 
                    <div class="caption right-align">
                    <h3>David Jacob Dabo</h3>
                    <h5 class="light grey-text text-lighten-3 hide-on-small-only">Sociologist</h5>
                    </div>
                </li>
                <li>
                    <img src="/img/Oyinfekun.jpg"/> 
                    <div class="caption right-align">
                    <h3>Oyinfekun Bashiru</h3>
                    <h5 class="light grey-text text-lighten-3 hide-on-small-only">Relation: undicided</h5>
                    </div>
                </li>
                <li>
                    <img src="/img/olalere.jpg"/> 
                    <div class="caption right-align">
                    <h3>olalere Oluwakemi</h3>
                    <h5 class="light grey-text text-lighten-3 hide-on-small-only"> I love to preach the Gospel</h5>
                    </div>
                </li>
                <li>
                    <img src="/img/DavidB.jpg"/> 
                    <div class="caption center-align">
                    <h3>David Blessing</h3>
                    <h5 class="light grey-text text-lighten-3 hide-on-small-only">Fav qoute: Never Giveup</h5>
                    </div>
                </li>
                <li>
                    <img src="/img/UgotaF.jpg"/> 
                    <div class="caption right-align">
                    <h3>Ugota Francis chinemerem</h3>
                    <h5 class="light grey-text text-lighten-3 hide-on-small-only">In love with Ebonyi state</h5>
                    </div>
                </li>
                <li>
                    <img src="/img/AddraF.jpg"/> 
                    <div class="caption center-align">
                    <h3 class="grey-text text-darken-3 ">Addra Fr<span className="light grey-text text-lighten-3">ancis Onana</span></h3>
                    <h5 class="light grey-text text-lighten-3 hide-on-small-only">I like valid arguments</h5>
                    </div>
                </li>
                <li>
                    <img src="/img/ImmanuelO.jpg"/> 
                    <div class="caption right-align">
                    <h3>Immanuel Orinya E.</h3>
                    <h5 class="light grey-text text-lighten-1 hide-on-small-only">Hairstylist, writer</h5>
                    </div>
                </li>
                <li>
                <img src="/img/Nengi.jpg"/> 
                <div class="caption center-align">
                <h3>Nengi Sweet Sermon</h3>
                <h5 class="light grey-text text-lighten-3 hide-on-small-only">Hairstylist</h5>
                </div>
                </li>
                </ul>
            </div>
           
           </div>
         );
    }
}
 
export default NewsSlide;