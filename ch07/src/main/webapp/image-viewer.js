var imageViewer = {
    init : function(){
            $(function(){

                $("#btn-change, .image-viewer > div > img").click(this._changeImage.bind(this));
                $("#btn-slideshow").click(this._slideImage.bind(this));

                this._changeImage();

            }.bind(this));
    },

    _changeImage : function(){
        var index = Math.floor(Math.random() * this._images.length);
        $(".image-viewer img").attr({
            alt: this._images[index].name,
            src: 'images/' + this._images[index].file
        });
    },
    
    _slideImage : function(){
        this._slideOn ? this._startImage() : this._stopImage();
        this._slideOn = !(this._slideOn);
    },

    _startImage : function() {
        $("#btn-slideshow").text("슬라이드쇼 중지");
        this._timerId = setInterval(this._changeImage.bind(this), 500);
    },
    
    
    _stopImage : function() {
        $("#btn-slideshow").text("슬라이드쇼 시작");
        clearInterval(this._timerId);
    },

    _timerId : null,
    _slideOn : true,

    _images : [{
        name: "국화",
        file: "Chrysanthemum.jpg"
    }, {
        name: "사막",
        file: "Desert.jpg"
    }, {
        name: "수국",
        file: "Hydrangeas.jpg"
    }, {
        name: "해파리",
        file: "Jellyfish.jpg"
    }, {
        name: "코알라",
        file: "Koala.jpg"
    }, {
        name: "등대",
        file: "Lighthouse.jpg"
    }, {
        name: "펭귄",
        file: "Penguins.jpg"
    }, {
        name: "툴립",
        file: "Tulips.jpg"
    }]

}
