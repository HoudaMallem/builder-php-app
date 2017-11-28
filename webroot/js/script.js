/* CUFON  - regular */
Cufon.replace('.header-center p, .top-menu p a, #navigation ul li:not(.first) > a, #page h3.top-msg a,\
.block-NSortedArticle h3, .block-NSortedArticle h3 a, .featured ul li a span, .o-view h5 span,\
.home-article h4, #page .Layout_1 #zone5 h2, .min-side-slider ul li h4 a, .counter-holder a,\
.block-partnerFolder h2, #top_path ul li, .block-view-navigation ul li a, .article_list h1,\
a.msg-btn, .bloc_article h1, .bloc_article h2, blockquote h4, .search-pages h1, .list-marques h1', { fontFamily:'pill-regular', hover: true });


/* CUFON  - bold */
Cufon.replace('.header-center h2 span, #quick-tabs ul li a, .article_list .item h3, .article_list .item h3 a, .bloc_article p.focus1 a, .block-gradient h2, .exhibitor-description .exhibitor-title h2, .list-results .item .content h4 a, h2.accordion-header', { fontFamily:'pill-bold', hover: true });

// slider - controles
function mycarousel_initCallback(carousel) {
	$('.slider-nav a').bind('click', function() {
		carousel.scroll($.jcarousel.intval($(this).index()+1));
		return false;
	});
};
	
function mycarousel_itemFirstInCallback(carousel, item, idx, state) {
	$('.slider-nav a').removeClass('active');
	$('.slider-nav a').eq(idx-1).addClass('active');
};

function mycarousel_initCallback2(carousel) {
	$('.side-slider-nav a.next').bind('click', function() {
        carousel.next();
        return false;
    });

    $('.side-slider-nav a.prev').bind('click', function() {
        carousel.prev();
        return false;
    });
};

$(function(){
	// cufon fix pour les espaces blancs
	setTimeout(function() {
		$('cufon[alt=" "]').each(function(){ $(this).remove(); })
	}, 500);

	// classes versions ie
	if($.browser.msie && $.browser.version==7){ $('body').addClass('ie7'); }
	if($.browser.msie && $.browser.version==8){ $('body').addClass('ie8'); }
	if($.browser.msie && $.browser.version==9){ $('body').addClass('ie9'); }
	if($.browser.msie){ $('body').addClass('ie'); }

	// pour gestion de la page et l ombre
	$('.header_block').prependTo('body');

	// blink champ
	$('input.field, textarea').focus(function(){
		if( $(this).val()==$(this).attr('title') ){
			$(this).val('');
		}
	}).blur(function(){
		if( $(this).val()=='' ){
			$(this).val( $(this).attr('title') );
		}
	})

	/* affichage search */
	$('.top-menu ul li a.search-ico').click(function(){
		$('.top-menu .options-holder').fadeOut('fast', function(){
			$('.top-menu .search-form').fadeIn('fast');
		})
		return false;
	});

	/* cacher search */
	$('.search-form span').click(function(){
		$('.top-menu .search-form').fadeOut('fast', function(){
			$('.top-menu .options-holder').fadeIn('fast');
		})
		return false;
	});

	/* envoi de la recherche */
	$('.search-form input.submit').click(function(){
		var value = $('.search-form input.field').val();
		$('#search_header input#search_field').val(value);
		$('#search_header input.button').trigger('click');
		return false;
	});

	// Slider home
	var $slides   = $('.block-NSortedArticle .block-article-item');
	var slidesNum = $slides.length;

	$('.block-NSortedArticle .border-bottom-right').wrapInner('<ul class="home-slider"/>');
	$slides.each(function(){
		$(this).wrap('<li/>');
	});

	$('.block-NSortedArticle .border-bottom-right').append('<div class="slider-nav" />');
	for( var i=0; i<slidesNum; i++ ){
		$('.block-NSortedArticle .slider-nav').append('<a href="#">' + i + '</a>');
	}


	setTimeout(function() {
		$("ul.home-slider").jcarousel({
			scroll: 1,
			auto: 7,
			wrap: 'both',
			itemFirstInCallback: mycarousel_itemFirstInCallback,
			initCallback: mycarousel_initCallback,
			buttonNextHTML: null,
			buttonPrevHTML: null
		});
	}, 500);

	// zone complete clickable
	$('.block-NSortedArticle ul.home-slider li, .home-article').click(function(){
		window.location.href = $(this).find('a').attr('href');
	});

	$(".min-side-slider ul").jcarousel({
		scroll: 1,
		auto: 3,
		wrap: 'both',
		initCallback: mycarousel_initCallback2,
		buttonNextHTML: null,
		buttonPrevHTML: null
	});

	// rollover 4 blocs
	$('.featured ul li').hover(function(){
		$(this).find('.f-view').stop(true, true).animate({ top : -115 }, 'fast');
		$(this).find('.o-view').stop(true, true).animate({ top : -1 }, 'fast');
	},function(){
		$(this).find('.f-view').animate({ top : -1 }, 'fast');
		$(this).find('.o-view').animate({ top : 115 }, 'fast');
	})

	// zones complete clickables
	$('.featured ul li').click(function(){
		window.location.href = $(this).find('a').attr('href');
		return false;
	});

	// selectbox personnalisee
	$('select.custom-select').selectbox();

	// suppression du texte apres  ' - ' dans les titres rss-title
	$('p.rss-title a').each(function(){
		var idx = $(this).text().indexOf(' - ');
		if( idx > -1 )
			$(this).text( $(this).text().substring(0, idx) );
	});



	// onglets sidebar 
	var $tabsNav = $('#quick-tabs').closest('.block');
	var tabsNum = $tabsNav.find('li').length;

	$('<div class="side-tabs"></div>').insertBefore($tabsNav);
	$tabsNav.appendTo('.side-tabs');
	for(var i=0; i<tabsNum; i++){
		$('#zone2 .block-quicklinks').eq(i).appendTo('.side-tabs');
	}

	$('#quick-tabs ul li:last').addClass('last');

	$('.side-tabs .block-quicklinks').hide();
	$('.side-tabs .block-quicklinks:eq(0)').show();

	$('#quick-tabs li:eq(0)').addClass('active');

	$('#quick-tabs li').click(function(){
		var idx = $(this).index();

		$(this).siblings().removeClass('active');
		$(this).addClass('active');
		Cufon.replace('#quick-tabs ul li a', { fontFamily: 'pill-bold', hover: true });

		$('.side-tabs .block-quicklinks:visible').hide();
		$('.side-tabs .block-quicklinks').eq(idx).fadeIn();

		return false;
	})

	// compte a rebourg
	$('.counter').countdown({until: new Date(2012, 8 , 18), format: 'd',
		layout: 
	        '<span class="image{d100}"></span>' + 
	        '<span class="image{d10}"></span>' + 
	        '<span class="image{d1}"></span>'
	});

	// partenaires
	$('.block-partnerFolder').each(function(){
		$(this).append('<span class="separator"></span>');
		if($(this).index()%2)
			$(this).addClass('right');
		else
			$(this).addClass('left');
	});
	// plan du site retractable
	$('#footer').appendTo('body');
	$('#sitemap').appendTo('#footer');
	$('#sitemap').append('<a href="#" class="close-sitemap">close</a>');

	$('a.sitemap-toggle').click(function(){
		$('#sitemap').slideToggle();
		$('span.map-top-line').slideToggle();
		$('body, html').animate({
			scrollTop : $(window).scrollTop() + 200
		});
		$(this).toggleClass('exp');
		return false;
	});

	$('a.close-sitemap').click(function(){
		$('#sitemap').slideToggle();
		$('span.map-top-line').slideToggle();
		return false;
	})

	$('#top_path ul li:odd').remove();

	// suppresion des div vides
	$('.block-view-empty').remove();
	if( !$('#zone7').children().length ){
		$('#zone7').remove();
	}

	$('.article_list .item').click(function(){
		window.location.href = $(this).find('a.link').attr('href');
		return false;
	});
	
	// blocquote page inter
	$('blockquote').parents('.object-right').addClass('blockquote-holder');

})