var mosaic = function (_img) {
    this.imageDom = _img;
    this.init();
};
mosaic.prototype = {
    init: function () {
        this._createCanvas();
        this._loadImage();
    },
    _createCanvas: function () {
        this.canvas = document.createElement('canvas');
        var ctx = this.canvas.getContext('2d');
        this.ctx = ctx;
    },
    _loadImage: function () {
        var that = this;
        var drawImage = new Image();
        // drawImg.setAttribute('crossOrigin', 'anonymous');
        drawImage.crossOrigin = 'Anonymous'; // 解决跨域问题
        drawImage.onload = function () {
            that.canvas.width = drawImage.width;
            that.canvas.height = drawImage.height;
            that.ctx.drawImage(drawImage, 0, 0, drawImage.width, drawImage.height);
        };
        drawImage.src = this.imageDom.src;
    }
};
