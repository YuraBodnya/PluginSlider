//Slider
//Plugin v 1.0

;(function($){
    $.fn.pluginSlider = function(options){
        options = $.extend({
            slidesToShow:1,
            slidesToScroll:1,
        }, options);
        if(options.slidesToShow < 1 || options.slidesToShow > $('.slider-item').length){
            options.slidesToShow = 1;
        }
        if(options.slidesToScroll > 3 || options.slidesToScroll > $('.slider-item').length || options.slidesToScroll < 1){
            options.slidesToScroll = 1;
        }

        class Carusel{
            constructor(el){
                this.position = 0;
                this.wrapper = el;
                this.container = $('.slider-container');
                this.track = $('.slider-track');
                this.item = $('.slider-item');
                this.btnPrev = $('.btn-prev');
                this.btnNext = $('.btn-next');
                this.itemsCount = this.item.length;
                this.itemWidth = this.container.width() / options.slidesToShow;
                this.movePosition = this.itemWidth * options.slidesToScroll;
            }

            init(){
                    this.styleCss();
                    this.itemSetMinWidth();
                    this.styleBtn();
                    this.autoLoop();
                    this.btnNext.on('click' , this.nextSlide.bind(this));
                    this.btnPrev.on('click' , this.prevSlide.bind(this));
            }
            styleCss(){
                $('.slider-container').css({
                    'overflow': 'hidden',
                });
                $('.slider-track').css({
                    'display': 'flex',
                    'transition': '0.5s'
                });
            }
            autoLoop(){
                if(options.autoLoop == 'on'){
                   const autoLoop = setInterval(this.nextSlide.bind(this), 2500);
                }
            }
            styleBtn(){
                if(options.btnColor == 'black'){
                    this.btnNext.css({
                        'background-color':'black',
                        'color':'white'
                    });
                    this.btnPrev.css({
                        'background-color':'black',
                        'color':'white'
                    });
                }
            }
            itemSetMinWidth(){
                    this.item.css({
                        'min-width': this.itemWidth, 
                    });
            }
            nextSlide(){
                const itemsRight = this.itemsCount - (Math.abs(this.position) + options.slidesToShow * this.itemWidth) / this.itemWidth;
                const checkReturnPosition = -(this.itemsCount - options.slidesToShow) * this.itemWidth;
                if(this.position == checkReturnPosition){
                this.position = 0;
                }
                if(itemsRight >= options.slidesToScroll){
                this.position -= this.movePosition;
                }
                else{
                this.position -= itemsRight * this.itemWidth;
                }
                this.setPosition();
            }
            prevSlide(){
                const itemsLeft = Math.abs(this.position) / this.itemWidth;
                if(this.position == 0){
                this.position -= (this.itemsCount - options.slidesToShow) * this.itemWidth;
                }
                if(itemsLeft >= options.slidesToScroll){
                this.position += this.movePosition;
                }
                else{
                this.position += itemsLeft * this.itemWidth;
                }
                this.setPosition();
            }
            setPosition(){
                    this.track.css({
                    'transform' : `translateX(${this.position}px)`
                    });
            }
        }     
        const carusel = new Carusel( $(this));
        carusel.init();
        return this;
    };
})(jQuery);
