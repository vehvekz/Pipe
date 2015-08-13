var app = function() {

	return {
		init: function(){
			this.setUpListeners();
			this.sliderFirst();
			this.sliderSecond();
		},
		setUpListeners: function(){
			
		},
		sliderFirst: function(){
			$('.sertificates-slider').slick({
			    slidesToShow: 3,
			    slidesToScroll: 1,
			    prevArrow: '<button type="button" class="slick-prev hidden-xs"></button>',
			    nextArrow: '<button type="button" class="slick-next hidden-xs"></button>',
			    responsive: [
			      {
			        breakpoint: 993,
			        settings: {
			          slidesToShow: 3,
			          slidesToScroll: 1
			        }
			      },
			      {
			        breakpoint: 769,
			        settings: {
			          slidesToShow: 2,
			          slidesToScroll: 1
			        }
			      },
			      {
			        breakpoint: 481,
			        settings: {
			          slidesToShow: 1,
			          slidesToScroll: 1
			        }
			      }
			    ]
			});
		},
		sliderSecond: function(){
			$('.clients-slider').slick({
			    slidesToShow: 4,
			    slidesToScroll: 1,
			    prevArrow: '<button type="button" class="slick-prev -black hidden-xs"></button>',
			    nextArrow: '<button type="button" class="slick-next -black hidden-xs"></button>',
			    responsive: [
			      {
			        breakpoint: 993,
			        settings: {
			          slidesToShow: 3,
			          slidesToScroll: 1
			        }
			      },
			      {
			        breakpoint: 769,
			        settings: {
			          slidesToShow: 2,
			          slidesToScroll: 1
			        }
			      },
			      {
			        breakpoint: 481,
			        settings: {
			          slidesToShow: 1,
			          slidesToScroll: 1
			        }
			      }
			    ]
			});
		}
		
	}

}();