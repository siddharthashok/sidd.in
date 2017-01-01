$(document).ready(function(){

  if ( $('#instafeed').length) {

    var userFeed = new Instafeed({
      get: 'user',
      userId: '212129007',
      accessToken: '212129007.1677ed0.54011f83990548bc8070b30827050b3d',
      resolution: 'standard_resolution',
      limit: 30,
      template: '<div class="image-wrap"><a href="{{link}}"><img src="{{image}}"/></a><div class="caption">{{caption}}</div><div class="location">{{location}}</div></div>',
      after: function() {
        $('.instagram-carousel').owlCarousel({
            loop:false,
            margin:20,
            responsiveClass:true,
            stagePadding: 30,
            nav:true,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:3
                },
                1000:{
                    items:5
                }
            }
        });
      }
    });

    userFeed.run();

  }

  $(document).foundation();

});
