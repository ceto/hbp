import $ from "jquery";
import whatInput from "what-input";

window.$ = $;
window.jQuery = $;

import Foundation from "foundation-sites";
// If you want to pick and choose which modules to include, comment out the above and uncomment
// the line below
//import './lib/foundation-explicit-pieces';

require("owl.carousel");

// import libs from './lib/dependencies';
// window.libs = libs;

// libs.owl({
//   title: 'Error!',
//   text: 'Do you want to continue',
//   type: 'error',
//   confirmButtonText: 'Cool'
// });

$(document).foundation();

$(document).ready(function() {
  var tabletbp = Foundation.MediaQuery.get("tablet"),
    xlargebp = Foundation.MediaQuery.get("xlarge");
  $(".owl-testi").owlCarousel({
    loop: false,
    dots: true,
    responsive: {
      0: {
        items: 1,
        margin: 20
      },
      640: {
        items: 2,
        margin: 60
      },
      1200: {
        items: 3,
        margin: 80
      }
    }
  });

  $(".owl-tourlist").owlCarousel({
    loop: false,
    dots: true,
    arrows: true,
    nav: true,
    navText: ["‹", "›"],
    responsive: {
      0: {
        items: 1,
        margin: 20
      },
      480: {
        items: 2,
        margin: 30
      },
      768: {
        items: 3,
        margin: 30
      },
      1200: {
        items: 4,
        margin: 30
      }
    }
  });

  $(".owl-slider").owlCarousel({
    autoWidth: true,
    loop: true,
    nav: true,
    navText: ["‹", "›"],
    //navContainer: '#slidernav',
    dots: false,
    responsive: {
      0: {
        items: 1
      },
      tabletbp: {
        items: 2
      },
      xlargebp: {
        items: 3
      }
    }
  });
});
