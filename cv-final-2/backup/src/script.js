/*Created/Written by: Vincent Garreau*/
/*Organized + added comments in Codepen: OFFLlNE*/
/*TODO: Add comments to everything, what does what*/
/*TODO: figure out why it does not work in codepen*/

particlesJS("particles-js", {
  "particles":{
    "number":{
      /*Number of particles, somewhy 10-30% is lost. With 100 => 71p; 50 => 36 */
      "value":50,"density":{
        "enable":true,"value_area":800
      }
    },
    "color":{
      /*random (string)/HEX (string)/RGB (object)/HSL (object)/array selection (HEX)  */
      "value":"random"
    },
    "shape":{
      /*string / array / selection*/
      "type":"circle","stroke":{
        /*border width around particle and the color of it*/
        "width":0,"color":"#000000"
      },
      /*Not sure what this does*/
      "polygon":{
        "nb_sides":5
      },
      /*Not sure what this does*/
      "image":{
        "src":"img/github.svg","width":100,"height":100
      }
    },
    "opacity":{
      /* Opacity(visibility) of particles*/
      /* value 1 / random:true  => opacity is randomized*/
      /* anim - particle animation (flashing)*/
      "value":1,"random":false,"anim":{
        "enable":false,"speed":1,"opacity_min":0.1,"sync":false
      }
    },
    /* Particle size*/
    /* anim - size is changing all the time*/
    "size":{
      "value":3,"random":true,"anim":{
        "enable":false,"speed":40,"size_min":0.1,"sync":false
      }
    },
    /* Lines between particles*/
    "line_linked":{
      "enable":true,"distance":150,"color":"#ffffff","opacity":0.4,"width":1
    },
    /*particle movement attributes*/
    "move":{
      /*direction - towards what are they moving*/
      /*out_mode (out/bounce) => if they go out of canvas or bounce*/
      "enable":true,"speed":6,"direction":"none","random":false,
      "straight":false,"out_mode":"bounce","bounce":false,"attract":{
        /*attract true => will start attracting particles together*/
        "enable":false,"rotateX":600,"rotateY":1200
      }
    }
  },
  "interactivity":{
    "detect_on":"canvas","events":{
      /*onhover true - scares particles away*/
      "onhover":{
        /*"grab" / "bubble" / "repulse"*/
        "enable":true,"mode":"remove"
      },
      /*onclick true - lets you add particles*/
      "onclick":{
        /*"push" / "remove" / "bubble" / "repulse" */
        "enable":true,"mode":"push"
      },
      /*not sure what it does*/
      "resize":true
    },
    /*stats for previous modes*/
    "modes":{
      /*How far it will grab(create a connetion to your mouse) the particles*/
      "grab":{
        "distance":400,"line_linked":{
          "opacity":1
        }
        /*how far and how the bubbles will be created*/
      },"bubble":{
        "distance":400,"size":40,"duration":2,"opacity":8,"speed":3
      },
      /*how far mouse "scares" them*/
      "repulse":{
        "distance":200,"duration":0.4
      },
      /*number of particles added*/
      "push":{
        "particles_nb":4
      },
      /*number of particles removed*/
      "remove":{
        "particles_nb":2
      }
    }
  },
  "retina_detect":true
});

// var count_particles, stats, update;
// stats = new Stats;
// stats.setMode(0);
// stats.domElement.style.position = 'absolute';
// stats.domElement.style.left = '0px';
// stats.domElement.style.top = '0px';
// document.body.appendChild(stats.domElement);
// count_particles = document.querySelector('.js-count-particles');
// update = function() {
//   stats.begin();stats.end();
//   if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
//     count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
//   }
//   requestAnimationFrame(update);
// };
// requestAnimationFrame(update);;

/*$("#particles-js").mousedown(function(ev){
      if(ev.which == 3)
      {
            alert("Right mouse button clicked on element with id myId");
      }
});*/