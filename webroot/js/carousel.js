var Carousel = new Class({
    Implements : [ Options, Events ],
    options : {
        wrapperId : "wrapper",
        maskId : "mask",
        slideSelector : ".slide",
        speed : 3000,
        auto_slide : true,
        // no need to initalize the next options
        num : 0,
        current : 0,
        mask_width : 0,
        slides : [],
        plugins : []
    },
    initialize : function(options) {
        this.setOptions(options);
        this.wrapper = $(this.options.wrapperId);
        this.current = 0;
        this.options.plugins.each(this.addListener, this);
        
        this.load();
        if (this.options.auto_slide) {
            this.play();
        }
        this.moveTo(0);
    },
    addListener : function(observer) {
        observer.setCarousel(this);
    },
    /**
     * notify all plugins of an event
     */
    notify : function(event) {
        this.options.plugins.each(function(plugin) {
            plugin.listen(event);
        });
    },
    /**
     * Start the timer
     */
    play : function() {
        this.stop();
        this.timer = this.next.periodical(this.options.speed, this);
    },
    /**
     * clear the timer
     */
    stop : function() {
        clearInterval(this.timer);
    },
    /**
     * Set the style for the slides (horizontal by default)
     */
    load : function() {
        this.slides = this.wrapper.getChildren(this.options.slideSelector);
        this.options.num = this.slides.length;
        this.options.mask_width = $(this.options.maskId).getSize().x;

        // Set styles
        $(this.options.maskId).setStyle('overflow', 'hidden');
        $(this.options.maskId).setStyle('position', 'relative');

        this.wrapper.setStyle('position', 'relative');
        this.wrapper.setStyle('width', this.slides[0].getSize().x * this.options.num);

        this.slides.each(function(slide) {
            slide.setStyle('position', 'relative');
            slide.setStyle('display', 'block');
            slide.setStyle('float', 'left');
            slide.setStyle('width', this.options.mask_width);
            slide.setStyle('height', $(this.options.maskId).getSize().y);
        }.bind(this));
        this.notify('load');
    },
    /**
     * changes the current index and calls the transition
     */
    moveTo : function(index) {
        this.current = index;
        this.transition(this.current);
        this.notify('move');
    },
    /**
     * Executes the transition
     */
    transition : function(offset) {
        new Fx.Tween(this.wrapper).start('left', this.wrapper.getStyle('left'),
                offset * (-this.options.mask_width));
    },
    /**
     * go to the next slide
     */
    next : function() {
        this.current++;
        if (this.current >= this.options.num) {
            this.current = 0;
        }
        this.moveTo(this.current);
        this.notify('next');
    },
    /**
     * go to the previous slide
     */
    prev : function() {
        this.current--;
        if (this.current < 0) {
            this.current = this.options.num - 1;
        }
        this.moveTo(this.current);
        this.notify('prev');
    },
    /**
     * stops the timer and prev()
     */
    manualPrev : function(index) {
        this.stop();
        this.prev();
        this.notify('manualprev');
    },
    /**
     * stops the timer and next()
     */
    manualNext : function(index) {
        this.stop();
        this.next();
        this.notify('manualnext');
    },
    /**
     * stops the timer and go to the slide
     */
    manualMoveTo : function(index) {
        this.stop();
        this.moveTo(index);
        this.notify('manualmove');
    }
});

var CarouselObserver = new Class({
    carousel : null,
    setCarousel : function(carousel) {
        this.carousel = carousel;
    },
    listen : function(event) {
        switch (event) {
            case "load": this.load(); break;
            case "move": this.move(); break;
            case "next": this.next(); break;
            case "prev": this.prev(); break;
            case "manualprev": this.manualprev(); break;
            case "manualnext": this.manualnext(); break;
            case "manualmove": this.manualmove(); break;
            default: break;
        }
    },
    load : function() {},
    move : function() {},
    next : function() {},
    prev : function() {},
    manualprev : function() {},
    manualnext : function() {},
    manualmove : function() {}
});

var CarouselTabs = new Class({
  Extends : CarouselObserver,
  Implements : [ Options, Events ],
  options : {
    tabsSelector : ".tabs"
  },
  initialize : function(carousel, options) {
    this.setOptions(options);
    this.tabs = $$(this.options.tabsSelector);
    this.carousel = carousel;
  },
  move : function() {
    this.tabs.each(function(tab) {
      tab.removeClass('current');
    });
    this.tabs[this.carousel.current].addClass('current');
  }
});

    var carousel;
    window.addEvent('domready', function(){
        carousel = new Carousel({
            auto_slide: true,
            maskId: "carousel",
            wrapperId: "slides-wrapper"
        });
    });
    $('carousel').addEvent('mouseover', function(){
    carousel.stop();
});

$('carousel').addEvent('mouseout', function(){
    carousel.play();
});
tabs = new CarouselTabs(carousel,{tabsSelector:"#tabs li"});

carousel = new Carousel({
    auto_slide: true,
    maskId: "carousel",
    wrapperId: "slides-wrapper",
    plugins:[ tabs ]
});