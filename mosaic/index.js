/*! 
* author: likefan 
* pkgname: cherish-mosaic
* time: 2021-4-13
*/
!
function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : (t = "undefined" != typeof globalThis ? globalThis: t || self).Mosaic = e()
} (this, (function() {
    "use strict";
    var t = function(e, i) {
        return (t = Object.setPrototypeOf || {
            __proto__: []
        }
        instanceof Array &&
        function(t, e) {
            t.__proto__ = e
        } ||
        function(t, e) {
            for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i])
        })(e, i)
    };
    function e(t, e, i, o) {
        return new(i || (i = Promise))((function(n, r) {
            function a(t) {
                try {
                    s(o.next(t))
                } catch(t) {
                    r(t)
                }
            }
            function l(t) {
                try {
                    s(o.
                    throw (t))
                } catch(t) {
                    r(t)
                }
            }
            function s(t) {
                var e;
                t.done ? n(t.value) : (e = t.value, e instanceof i ? e: new i((function(t) {
                    t(e)
                }))).then(a, l)
            }
            s((o = o.apply(t, e || [])).next())
        }))
    }
    function i(t, e) {
        var i, o, n, r, a = {
            label: 0,
            sent: function() {
                if (1 & n[0]) throw n[1];
                return n[1]
            },
            trys: [],
            ops: []
        };
        return r = {
            next: l(0),
            throw: l(1),
            return: l(2)
        },
        "function" == typeof Symbol && (r[Symbol.iterator] = function() {
            return this
        }),
        r;
        function l(r) {
            return function(l) {
                return function(r) {
                    if (i) throw new TypeError("Generator is already executing.");
                    for (; a;) try {
                        if (i = 1, o && (n = 2 & r[0] ? o.
                        return: r[0] ? o.
                        throw || ((n = o.
                        return) && n.call(o), 0) : o.next) && !(n = n.call(o, r[1])).done) return n;
                        switch (o = 0, n && (r = [2 & r[0], n.value]), r[0]) {
                        case 0:
                        case 1:
                            n = r;
                            break;
                        case 4:
                            return a.label++,
                            {
                                value: r[1],
                                done: !1
                            };
                        case 5:
                            a.label++,
                            o = r[1],
                            r = [0];
                            continue;
                        case 7:
                            r = a.ops.pop(),
                            a.trys.pop();
                            continue;
                        default:
                            if (! (n = a.trys, (n = n.length > 0 && n[n.length - 1]) || 6 !== r[0] && 2 !== r[0])) {
                                a = 0;
                                continue
                            }
                            if (3 === r[0] && (!n || r[1] > n[0] && r[1] < n[3])) {
                                a.label = r[1];
                                break
                            }
                            if (6 === r[0] && a.label < n[1]) {
                                a.label = n[1],
                                n = r;
                                break
                            }
                            if (n && a.label < n[2]) {
                                a.label = n[2],
                                a.ops.push(r);
                                break
                            }
                            n[2] && a.ops.pop(),
                            a.trys.pop();
                            continue
                        }
                        r = e.call(t, a)
                    } catch(t) {
                        r = [6, t],
                        o = 0
                    } finally {
                        i = n = 0
                    }
                    if (5 & r[0]) throw r[1];
                    return {
                        value: r[0] ? r[1] : void 0,
                        done: !0
                    }
                } ([r, l])
            }
        }
    }
    return function(o) {
        function n(t, e) {
            void 0 === e && (e = {});
            var i = o.call(this) || this,
            n = e.tileWidth,
            r = e.tileHeight,
            a = e.brushSize,
            l = e.width,
            s = e.height;
            return i.tileWidth = null != n ? n: 10,
            i.tileHeight = null != r ? r: 10,
            i.brushSize = null != a ? a: 3,
            i.width = l,
            i.height = s,
            i.imageDom = t,
            i._init(),
            i
        }
        return function(e, i) {
            if ("function" != typeof i && null !== i) throw new TypeError("Class extends value " + String(i) + " is not a constructor or null");
            function o() {
                this.constructor = e
            }
            t(e, i),
            e.prototype = null === i ? Object.create(i) : (o.prototype = i.prototype, new o)
        } (n, o),
        n.prototype._init = function() {
            return e(this, void 0, void 0, (function() {
                return i(this, (function(t) {
                    switch (t.label) {
                    case 0:
                        return this._createCanvas(),
                        [4, this._loadImage()];
                    case 1:
                        return t.sent(),
                        this._replaceDom(),
                        this._initTiles(),
                        this._mouseEvents(),
                        [2]
                    }
                }))
            }))
        },
        n.prototype._mouseEvents = function() {
            var t = this,
            e = {
                init: function() {
                    t.ctx.canvas.addEventListener("mousedown", e.mousedown)
                },
                mousedown: function() {
                    t.ctx.canvas.addEventListener("mousemove", e.mousemove),
                    document.addEventListener("mouseup", e.mouseup)
                },
                mousemove: function(e) {
                    e.shiftKey ? t.eraseTileByPoint(e.offsetX, e.offsetY) : t.drawTileByPoint(e.offsetX, e.offsetY)
                },
                mouseup: function() {
                    t.ctx.canvas.removeEventListener("mousemove", e.mousemove),
                    document.removeEventListener("mouseup", e.mouseup)
                }
            };
            e.init()
        },
        n.prototype._loadImage = function() {
            var t = this;
            return new Promise((function(e) {
                var i = new Image;
                i.crossOrigin = "Anonymous",
                i.onload = function() {
                    var o, n;
                    null !== (o = t.width) && void 0 !== o || (t.width = i.width),
                    null !== (n = t.height) && void 0 !== n || (t.height = i.height),
                    t.canvas.width = t.width,
                    t.canvas.height = t.height,
                    t.ctx.drawImage(i, 0, 0, t.width, t.height),
                    e(!0)
                },
                i.src = t.imageDom.src
            }))
        },
        n.prototype._createCanvas = function() {
            this.canvas = document.createElement("canvas");
            var t = this.canvas.getContext("2d");
            t && (this.ctx = t)
        },
        n.prototype._replaceDom = function() {
            var t = this.imageDom.parentNode;
            t && t.replaceChild(this.canvas, this.imageDom)
        },
        n.prototype._initTiles = function() {
            var t = this,
            e = t.width,
            i = t.height,
            o = t.tileHeight,
            n = t.tileWidth,
            r = t.ctx;
            this.imageData = r.getImageData(0, 0, e, i).data,
            this.tileRowSize = Math.ceil(i / o),
            this.tileColumnSize = Math.ceil(e / n),
            this.tiles = [];
            for (var a = 0; a < this.tileRowSize; a++) for (var l = 0; l < this.tileColumnSize; l++) {
                var s = {
                    row: a,
                    column: l,
                    pixelWidth: n,
                    pixelHeight: o,
                    isFilled: !1
                };
                l === s.column - 1 && (s.pixelWidth = e - l * n),
                a === s.row - 1 && (s.pixelHeight = i - a * o);
                for (var c = [], u = 4 * e * o * s.row + s.column * n * 4, h = 0, f = s.pixelHeight; h < f; h++) {
                    var p = u + 4 * e * h;
                    c.push.apply(c, this.imageData.slice(p, p + 4 * s.pixelWidth))
                }
                s.data = c,
                this.tiles.push(s)
            }
        },
        n.prototype.drawTile = function(t) {
            var e = this; (t = [].concat(t)).forEach((function(t) {
                if (t.isFilled) return ! 1;
                if (!t.color) {
                    for (var i = t.data.length,
                    o = 0,
                    n = 0,
                    r = 0,
                    a = 0,
                    l = 0; l < i; l += 4) o += t.data[l],
                    n += t.data[l + 1],
                    r += t.data[l + 2],
                    a += t.data[l + 3];
                    var s = i / 4;
                    t.color = {
                        r: Math.ceil(o / s),
                        g: Math.ceil(n / s),
                        b: Math.ceil(r / s),
                        a: Math.ceil(a / s)
                    }
                }
                var c = t.color;
                e.ctx.fillStyle = "rgba(" + c.r + ", " + c.g + ", " + c.b + ", " + c.a / 255 + ")";
                var u = t.column * e.tileWidth,
                h = t.row * e.tileHeight,
                f = t.pixelWidth,
                p = t.pixelHeight;
                e.ctx.clearRect(u, h, f, p),
                e.ctx.fillRect(u, h, f, p),
                t.isFilled = !0
            }))
        },
        n.prototype.drawTileByPoint = function(t, e) {
            var i = this.getTilesByPoint(t, e);
            this.drawTile(i)
        },
        n.prototype.getTilesByPoint = function(t, e) {
            var i = [];
            if (null == e || e) for (var o = this.brushSize,
            n = Math.max(0, Math.floor(e / this.tileHeight) - Math.floor(o / 2)), r = Math.max(0, Math.floor(t / this.tileWidth) - Math.floor(o / 2)), a = Math.min(this.tileRowSize, n + o), l = Math.min(this.tileColumnSize, r + o); n < a;) {
                for (var s = r; s < l;) i.push(this.tiles[n * this.tileColumnSize + s]),
                s += 1;
                n += 1
            }
            return i
        },
        n.prototype.drawAllTiles = function() {
            this.drawTile(this.tiles)
        },
        n.prototype.eraseTile = function(t) {
            var e = this; [].concat(t).forEach((function(t) {
                var i = t.column * e.tileWidth,
                o = t.row * e.tileHeight,
                n = t.pixelWidth,
                r = t.pixelHeight,
                a = e.ctx.createImageData(n, r);
                t.data.forEach((function(t, e) {
                    a.data[e] = t
                })),
                e.ctx.clearRect(i, o, n, r),
                e.ctx.putImageData(a, i, o),
                t.isFilled = !1
            }))
        },
        n.prototype.eraseTileByPoint = function(t, e) {
            var i = this.getTilesByPoint(t, e);
            this.eraseTile(i)
        },
        n.prototype.eraseAllTiles = function(t) {
            this.eraseTile(this.tiles)
        },
        n
    } ((function() {}))
}));