/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/assets/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./assets/js/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/js/app.js":
/*!**************************!*\
  !*** ./assets/js/app.js ***!
  \**************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./inscription */ "./assets/js/inscription.js");
__webpack_require__(/*! ./particles */ "./assets/js/particles.js");

/***/ }),

/***/ "./assets/js/inscription.js":
/*!**********************************!*\
  !*** ./assets/js/inscription.js ***!
  \**********************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

var alertRedInput = "#8C1010";
var defaultInput = "rgba(10, 180, 180, 1)";

function userNameValidation(usernameInput) {
    var username = document.getElementById("username");
    var issueArr = [];
    if (/[-!@#$%^&*()_+|~=`{}\[\]:";'<>?,.\/]/.test(usernameInput)) {
        issueArr.push("No special characters!");
    }
    if (issueArr.length > 0) {
        username.setCustomValidity(issueArr);
        username.style.borderColor = alertRedInput;
    } else {
        username.setCustomValidity("");
        username.style.borderColor = defaultInput;
    }
}

function passwordValidation(passwordInput) {
    var password = document.getElementById("password");
    var issueArr = [];
    if (!/^.{7,15}$/.test(passwordInput)) {
        issueArr.push("Password must be between 7-15 characters.");
    }
    if (!/\d/.test(passwordInput)) {
        issueArr.push("Must contain at least one number.");
    }
    if (!/[a-z]/.test(passwordInput)) {
        issueArr.push("Must contain a lowercase letter.");
    }
    if (!/[A-Z]/.test(passwordInput)) {
        issueArr.push("Must contain an uppercase letter.");
    }
    if (issueArr.length > 0) {
        password.setCustomValidity(issueArr.join("\n"));
        password.style.borderColor = alertRedInput;
    } else {
        password.setCustomValidity("");
        password.style.borderColor = defaultInput;
    }
}

/***/ }),

/***/ "./assets/js/particles.js":
/*!********************************!*\
  !*** ./assets/js/particles.js ***!
  \********************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var pJS = function pJS(tag_id, params) {

    var canvas_el = document.querySelector('#' + tag_id + ' > .particles-js-canvas-el');

    /* particles.js variables with default values */
    this.pJS = {
        canvas: {
            el: canvas_el,
            w: canvas_el.offsetWidth,
            h: canvas_el.offsetHeight
        },
        particles: {
            number: {
                value: 100,
                density: {
                    enable: true,
                    value_area: 200
                }
            },
            color: {
                value: '#fff'
            },
            shape: {
                type: 'circle',
                stroke: {
                    width: 0,
                    color: '#ff0000'
                },
                polygon: {
                    nb_sides: 3
                },
                image: {
                    src: '',
                    width: 100,
                    height: 100
                }
            },
            opacity: {
                value: 1,
                random: true,
                anim: {
                    enable: false,
                    speed: 2,
                    opacity_min: 0,
                    sync: false
                }
            },
            size: {
                value: 20,
                random: false,
                anim: {
                    enable: false,
                    speed: 20,
                    size_min: 0,
                    sync: false
                }
            },
            line_linked: {
                enable: true,
                distance: 100,
                color: '#fff',
                opacity: 1,
                width: 1
            },
            move: {
                enable: true,
                speed: 2,
                direction: 'none',
                random: false,
                straight: false,
                out_mode: 'out',
                bounce: false,
                attract: {
                    enable: false,
                    rotateX: 3000,
                    rotateY: 3000
                }
            },
            array: []
        },
        interactivity: {
            detect_on: 'canvas',
            events: {
                onhover: {
                    enable: true,
                    mode: 'grab'
                },
                onclick: {
                    enable: true,
                    mode: 'push'
                },
                resize: true
            },
            modes: {
                grab: {
                    distance: 100,
                    line_linked: {
                        opacity: 1
                    }
                },
                bubble: {
                    distance: 100,
                    size: 80,
                    duration: 0.4
                },
                repulse: {
                    distance: 200,
                    duration: 0.4
                },
                push: {
                    particles_nb: 4
                },
                remove: {
                    particles_nb: 2
                }
            },
            mouse: {}
        },
        retina_detect: false,
        fn: {
            interact: {},
            modes: {},
            vendors: {}
        },
        tmp: {}
    };

    var pJS = this.pJS;

    /* params settings */
    if (params) {
        Object.deepExtend(pJS, params);
    }

    pJS.tmp.obj = {
        size_value: pJS.particles.size.value,
        size_anim_speed: pJS.particles.size.anim.speed,
        move_speed: pJS.particles.move.speed,
        line_linked_distance: pJS.particles.line_linked.distance,
        line_linked_width: pJS.particles.line_linked.width,
        mode_grab_distance: pJS.interactivity.modes.grab.distance,
        mode_bubble_distance: pJS.interactivity.modes.bubble.distance,
        mode_bubble_size: pJS.interactivity.modes.bubble.size,
        mode_repulse_distance: pJS.interactivity.modes.repulse.distance
    };

    pJS.fn.retinaInit = function () {

        if (pJS.retina_detect && window.devicePixelRatio > 1) {
            pJS.canvas.pxratio = window.devicePixelRatio;
            pJS.tmp.retina = true;
        } else {
            pJS.canvas.pxratio = 1;
            pJS.tmp.retina = false;
        }

        pJS.canvas.w = pJS.canvas.el.offsetWidth * pJS.canvas.pxratio;
        pJS.canvas.h = pJS.canvas.el.offsetHeight * pJS.canvas.pxratio;

        pJS.particles.size.value = pJS.tmp.obj.size_value * pJS.canvas.pxratio;
        pJS.particles.size.anim.speed = pJS.tmp.obj.size_anim_speed * pJS.canvas.pxratio;
        pJS.particles.move.speed = pJS.tmp.obj.move_speed * pJS.canvas.pxratio;
        pJS.particles.line_linked.distance = pJS.tmp.obj.line_linked_distance * pJS.canvas.pxratio;
        pJS.interactivity.modes.grab.distance = pJS.tmp.obj.mode_grab_distance * pJS.canvas.pxratio;
        pJS.interactivity.modes.bubble.distance = pJS.tmp.obj.mode_bubble_distance * pJS.canvas.pxratio;
        pJS.particles.line_linked.width = pJS.tmp.obj.line_linked_width * pJS.canvas.pxratio;
        pJS.interactivity.modes.bubble.size = pJS.tmp.obj.mode_bubble_size * pJS.canvas.pxratio;
        pJS.interactivity.modes.repulse.distance = pJS.tmp.obj.mode_repulse_distance * pJS.canvas.pxratio;
    };

    /* ---------- pJS functions - canvas ------------ */

    pJS.fn.canvasInit = function () {
        pJS.canvas.ctx = pJS.canvas.el.getContext('2d');
    };

    pJS.fn.canvasSize = function () {

        pJS.canvas.el.width = pJS.canvas.w;
        pJS.canvas.el.height = pJS.canvas.h;

        if (pJS && pJS.interactivity.events.resize) {

            window.addEventListener('resize', function () {

                pJS.canvas.w = pJS.canvas.el.offsetWidth;
                pJS.canvas.h = pJS.canvas.el.offsetHeight;

                /* resize canvas */
                if (pJS.tmp.retina) {
                    pJS.canvas.w *= pJS.canvas.pxratio;
                    pJS.canvas.h *= pJS.canvas.pxratio;
                }

                pJS.canvas.el.width = pJS.canvas.w;
                pJS.canvas.el.height = pJS.canvas.h;

                /* repaint canvas on anim disabled */
                if (!pJS.particles.move.enable) {
                    pJS.fn.particlesEmpty();
                    pJS.fn.particlesCreate();
                    pJS.fn.particlesDraw();
                    pJS.fn.vendors.densityAutoParticles();
                }

                /* density particles enabled */
                pJS.fn.vendors.densityAutoParticles();
            });
        }
    };

    pJS.fn.canvasPaint = function () {
        pJS.canvas.ctx.fillRect(0, 0, pJS.canvas.w, pJS.canvas.h);
    };

    pJS.fn.canvasClear = function () {
        pJS.canvas.ctx.clearRect(0, 0, pJS.canvas.w, pJS.canvas.h);
    };

    /* --------- pJS functions - particles ----------- */

    pJS.fn.particle = function (color, opacity, position) {

        /* size */
        this.radius = (pJS.particles.size.random ? Math.random() : 1) * pJS.particles.size.value;
        if (pJS.particles.size.anim.enable) {
            this.size_status = false;
            this.vs = pJS.particles.size.anim.speed / 100;
            if (!pJS.particles.size.anim.sync) {
                this.vs = this.vs * Math.random();
            }
        }

        /* position */
        this.x = position ? position.x : Math.random() * pJS.canvas.w;
        this.y = position ? position.y : Math.random() * pJS.canvas.h;

        /* check position  - into the canvas */
        if (this.x > pJS.canvas.w - this.radius * 2) this.x = this.x - this.radius;else if (this.x < this.radius * 2) this.x = this.x + this.radius;
        if (this.y > pJS.canvas.h - this.radius * 2) this.y = this.y - this.radius;else if (this.y < this.radius * 2) this.y = this.y + this.radius;

        /* check position - avoid overlap */
        if (pJS.particles.move.bounce) {
            pJS.fn.vendors.checkOverlap(this, position);
        }

        /* color */
        this.color = {};
        if (_typeof(color.value) == 'object') {

            if (color.value instanceof Array) {
                var color_selected = color.value[Math.floor(Math.random() * pJS.particles.color.value.length)];
                this.color.rgb = hexToRgb(color_selected);
            } else {
                if (color.value.r != undefined && color.value.g != undefined && color.value.b != undefined) {
                    this.color.rgb = {
                        r: color.value.r,
                        g: color.value.g,
                        b: color.value.b
                    };
                }
                if (color.value.h != undefined && color.value.s != undefined && color.value.l != undefined) {
                    this.color.hsl = {
                        h: color.value.h,
                        s: color.value.s,
                        l: color.value.l
                    };
                }
            }
        } else if (color.value == 'random') {
            this.color.rgb = {
                r: Math.floor(Math.random() * (255 - 0 + 1)) + 0,
                g: Math.floor(Math.random() * (255 - 0 + 1)) + 0,
                b: Math.floor(Math.random() * (255 - 0 + 1)) + 0
            };
        } else if (typeof color.value == 'string') {
            this.color = color;
            this.color.rgb = hexToRgb(this.color.value);
        }

        /* opacity */
        this.opacity = (pJS.particles.opacity.random ? Math.random() : 1) * pJS.particles.opacity.value;
        if (pJS.particles.opacity.anim.enable) {
            this.opacity_status = false;
            this.vo = pJS.particles.opacity.anim.speed / 100;
            if (!pJS.particles.opacity.anim.sync) {
                this.vo = this.vo * Math.random();
            }
        }

        /* animation - velocity for speed */
        var velbase = {};
        switch (pJS.particles.move.direction) {
            case 'top':
                velbase = { x: 0, y: -1 };
                break;
            case 'top-right':
                velbase = { x: 0.5, y: -0.5 };
                break;
            case 'right':
                velbase = { x: 1, y: -0 };
                break;
            case 'bottom-right':
                velbase = { x: 0.5, y: 0.5 };
                break;
            case 'bottom':
                velbase = { x: 0, y: 1 };
                break;
            case 'bottom-left':
                velbase = { x: -0.5, y: 1 };
                break;
            case 'left':
                velbase = { x: -1, y: 0 };
                break;
            case 'top-left':
                velbase = { x: -0.5, y: -0.5 };
                break;
            default:
                velbase = { x: 0, y: 0 };
                break;
        }

        if (pJS.particles.move.straight) {
            this.vx = velbase.x;
            this.vy = velbase.y;
            if (pJS.particles.move.random) {
                this.vx = this.vx * Math.random();
                this.vy = this.vy * Math.random();
            }
        } else {
            this.vx = velbase.x + Math.random() - 0.5;
            this.vy = velbase.y + Math.random() - 0.5;
        }

        // var theta = 2.0 * Math.PI * Math.random();
        // this.vx = Math.cos(theta);
        // this.vy = Math.sin(theta);

        this.vx_i = this.vx;
        this.vy_i = this.vy;

        /* if shape is image */

        var shape_type = pJS.particles.shape.type;
        if ((typeof shape_type === 'undefined' ? 'undefined' : _typeof(shape_type)) == 'object') {
            if (shape_type instanceof Array) {
                var shape_selected = shape_type[Math.floor(Math.random() * shape_type.length)];
                this.shape = shape_selected;
            }
        } else {
            this.shape = shape_type;
        }

        if (this.shape == 'image') {
            var sh = pJS.particles.shape;
            this.img = {
                src: sh.image.src,
                ratio: sh.image.width / sh.image.height
            };
            if (!this.img.ratio) this.img.ratio = 1;
            if (pJS.tmp.img_type == 'svg' && pJS.tmp.source_svg != undefined) {
                pJS.fn.vendors.createSvgImg(this);
                if (pJS.tmp.pushing) {
                    this.img.loaded = false;
                }
            }
        }
    };

    pJS.fn.particle.prototype.draw = function () {

        var p = this;

        if (p.radius_bubble != undefined) {
            var radius = p.radius_bubble;
        } else {
            var radius = p.radius;
        }

        if (p.opacity_bubble != undefined) {
            var opacity = p.opacity_bubble;
        } else {
            var opacity = p.opacity;
        }

        if (p.color.rgb) {
            var color_value = 'rgba(' + p.color.rgb.r + ',' + p.color.rgb.g + ',' + p.color.rgb.b + ',' + opacity + ')';
        } else {
            var color_value = 'hsla(' + p.color.hsl.h + ',' + p.color.hsl.s + '%,' + p.color.hsl.l + '%,' + opacity + ')';
        }

        pJS.canvas.ctx.fillStyle = color_value;
        pJS.canvas.ctx.beginPath();

        switch (p.shape) {

            case 'circle':
                pJS.canvas.ctx.arc(p.x, p.y, radius, 0, Math.PI * 2, false);
                break;

            case 'edge':
                pJS.canvas.ctx.rect(p.x - radius, p.y - radius, radius * 2, radius * 2);
                break;

            case 'triangle':
                pJS.fn.vendors.drawShape(pJS.canvas.ctx, p.x - radius, p.y + radius / 1.66, radius * 2, 3, 2);
                break;

            case 'polygon':
                pJS.fn.vendors.drawShape(pJS.canvas.ctx, p.x - radius / (pJS.particles.shape.polygon.nb_sides / 3.5), // startX
                p.y - radius / (2.66 / 3.5), // startY
                radius * 2.66 / (pJS.particles.shape.polygon.nb_sides / 3), // sideLength
                pJS.particles.shape.polygon.nb_sides, // sideCountNumerator
                1 // sideCountDenominator
                );
                break;

            case 'star':
                pJS.fn.vendors.drawShape(pJS.canvas.ctx, p.x - radius * 2 / (pJS.particles.shape.polygon.nb_sides / 4), // startX
                p.y - radius / (2 * 2.66 / 3.5), // startY
                radius * 2 * 2.66 / (pJS.particles.shape.polygon.nb_sides / 3), // sideLength
                pJS.particles.shape.polygon.nb_sides, // sideCountNumerator
                2 // sideCountDenominator
                );
                break;

            case 'image':
                var draw = function draw() {
                    pJS.canvas.ctx.drawImage(img_obj, p.x - radius, p.y - radius, radius * 2, radius * 2 / p.img.ratio);
                };

                if (pJS.tmp.img_type == 'svg') {
                    var img_obj = p.img.obj;
                } else {
                    var img_obj = pJS.tmp.img_obj;
                }

                if (img_obj) {
                    draw();
                }

                break;

        }

        pJS.canvas.ctx.closePath();

        if (pJS.particles.shape.stroke.width > 0) {
            pJS.canvas.ctx.strokeStyle = pJS.particles.shape.stroke.color;
            pJS.canvas.ctx.lineWidth = pJS.particles.shape.stroke.width;
            pJS.canvas.ctx.stroke();
        }

        pJS.canvas.ctx.fill();
    };

    pJS.fn.particlesCreate = function () {
        for (var i = 0; i < pJS.particles.number.value; i++) {
            pJS.particles.array.push(new pJS.fn.particle(pJS.particles.color, pJS.particles.opacity.value));
        }
    };

    pJS.fn.particlesUpdate = function () {

        for (var i = 0; i < pJS.particles.array.length; i++) {

            /* the particle */
            var p = pJS.particles.array[i];

            // var d = ( dx = pJS.interactivity.mouse.click_pos_x - p.x ) * dx + ( dy = pJS.interactivity.mouse.click_pos_y - p.y ) * dy;
            // var f = -BANG_SIZE / d;
            // if ( d < BANG_SIZE ) {
            //     var t = Math.atan2( dy, dx );
            //     p.vx = f * Math.cos(t);
            //     p.vy = f * Math.sin(t);
            // }

            /* move the particle */
            if (pJS.particles.move.enable) {
                var ms = pJS.particles.move.speed / 2;
                p.x += p.vx * ms;
                p.y += p.vy * ms;
            }

            /* change opacity status */
            if (pJS.particles.opacity.anim.enable) {
                if (p.opacity_status == true) {
                    if (p.opacity >= pJS.particles.opacity.value) p.opacity_status = false;
                    p.opacity += p.vo;
                } else {
                    if (p.opacity <= pJS.particles.opacity.anim.opacity_min) p.opacity_status = true;
                    p.opacity -= p.vo;
                }
                if (p.opacity < 0) p.opacity = 0;
            }

            /* change size */
            if (pJS.particles.size.anim.enable) {
                if (p.size_status == true) {
                    if (p.radius >= pJS.particles.size.value) p.size_status = false;
                    p.radius += p.vs;
                } else {
                    if (p.radius <= pJS.particles.size.anim.size_min) p.size_status = true;
                    p.radius -= p.vs;
                }
                if (p.radius < 0) p.radius = 0;
            }

            /* change particle position if it is out of canvas */
            if (pJS.particles.move.out_mode == 'bounce') {
                var new_pos = {
                    x_left: p.radius,
                    x_right: pJS.canvas.w,
                    y_top: p.radius,
                    y_bottom: pJS.canvas.h
                };
            } else {
                var new_pos = {
                    x_left: -p.radius,
                    x_right: pJS.canvas.w + p.radius,
                    y_top: -p.radius,
                    y_bottom: pJS.canvas.h + p.radius
                };
            }

            if (p.x - p.radius > pJS.canvas.w) {
                p.x = new_pos.x_left;
                p.y = Math.random() * pJS.canvas.h;
            } else if (p.x + p.radius < 0) {
                p.x = new_pos.x_right;
                p.y = Math.random() * pJS.canvas.h;
            }
            if (p.y - p.radius > pJS.canvas.h) {
                p.y = new_pos.y_top;
                p.x = Math.random() * pJS.canvas.w;
            } else if (p.y + p.radius < 0) {
                p.y = new_pos.y_bottom;
                p.x = Math.random() * pJS.canvas.w;
            }

            /* out of canvas modes */
            switch (pJS.particles.move.out_mode) {
                case 'bounce':
                    if (p.x + p.radius > pJS.canvas.w) p.vx = -p.vx;else if (p.x - p.radius < 0) p.vx = -p.vx;
                    if (p.y + p.radius > pJS.canvas.h) p.vy = -p.vy;else if (p.y - p.radius < 0) p.vy = -p.vy;
                    break;
            }

            /* events */
            if (isInArray('grab', pJS.interactivity.events.onhover.mode)) {
                pJS.fn.modes.grabParticle(p);
            }

            if (isInArray('bubble', pJS.interactivity.events.onhover.mode) || isInArray('bubble', pJS.interactivity.events.onclick.mode)) {
                pJS.fn.modes.bubbleParticle(p);
            }

            if (isInArray('repulse', pJS.interactivity.events.onhover.mode) || isInArray('repulse', pJS.interactivity.events.onclick.mode)) {
                pJS.fn.modes.repulseParticle(p);
            }

            /* interaction auto between particles */
            if (pJS.particles.line_linked.enable || pJS.particles.move.attract.enable) {
                for (var j = i + 1; j < pJS.particles.array.length; j++) {
                    var p2 = pJS.particles.array[j];

                    /* link particles */
                    if (pJS.particles.line_linked.enable) {
                        pJS.fn.interact.linkParticles(p, p2);
                    }

                    /* attract particles */
                    if (pJS.particles.move.attract.enable) {
                        pJS.fn.interact.attractParticles(p, p2);
                    }

                    /* bounce particles */
                    if (pJS.particles.move.bounce) {
                        pJS.fn.interact.bounceParticles(p, p2);
                    }
                }
            }
        }
    };

    pJS.fn.particlesDraw = function () {

        /* clear canvas */
        pJS.canvas.ctx.clearRect(0, 0, pJS.canvas.w, pJS.canvas.h);

        /* update each particles param */
        pJS.fn.particlesUpdate();

        /* draw each particle */
        for (var i = 0; i < pJS.particles.array.length; i++) {
            var p = pJS.particles.array[i];
            p.draw();
        }
    };

    pJS.fn.particlesEmpty = function () {
        pJS.particles.array = [];
    };

    pJS.fn.particlesRefresh = function () {

        /* init all */
        cancelRequestAnimFrame(pJS.fn.checkAnimFrame);
        cancelRequestAnimFrame(pJS.fn.drawAnimFrame);
        pJS.tmp.source_svg = undefined;
        pJS.tmp.img_obj = undefined;
        pJS.tmp.count_svg = 0;
        pJS.fn.particlesEmpty();
        pJS.fn.canvasClear();

        /* restart */
        pJS.fn.vendors.start();
    };

    /* ---------- pJS functions - particles interaction ------------ */

    pJS.fn.interact.linkParticles = function (p1, p2) {

        var dx = p1.x - p2.x,
            dy = p1.y - p2.y,
            dist = Math.sqrt(dx * dx + dy * dy);

        /* draw a line between p1 and p2 if the distance between them is under the config distance */
        if (dist <= pJS.particles.line_linked.distance) {

            var opacity_line = pJS.particles.line_linked.opacity - dist / (1 / pJS.particles.line_linked.opacity) / pJS.particles.line_linked.distance;

            if (opacity_line > 0) {

                /* style */
                var color_line = pJS.particles.line_linked.color_rgb_line;
                pJS.canvas.ctx.strokeStyle = 'rgba(' + color_line.r + ',' + color_line.g + ',' + color_line.b + ',' + opacity_line + ')';
                pJS.canvas.ctx.lineWidth = pJS.particles.line_linked.width;
                //pJS.canvas.ctx.lineCap = 'round'; /* performance issue */

                /* path */
                pJS.canvas.ctx.beginPath();
                pJS.canvas.ctx.moveTo(p1.x, p1.y);
                pJS.canvas.ctx.lineTo(p2.x, p2.y);
                pJS.canvas.ctx.stroke();
                pJS.canvas.ctx.closePath();
            }
        }
    };

    pJS.fn.interact.attractParticles = function (p1, p2) {

        /* condensed particles */
        var dx = p1.x - p2.x,
            dy = p1.y - p2.y,
            dist = Math.sqrt(dx * dx + dy * dy);

        if (dist <= pJS.particles.line_linked.distance) {

            var ax = dx / (pJS.particles.move.attract.rotateX * 1000),
                ay = dy / (pJS.particles.move.attract.rotateY * 1000);

            p1.vx -= ax;
            p1.vy -= ay;

            p2.vx += ax;
            p2.vy += ay;
        }
    };

    pJS.fn.interact.bounceParticles = function (p1, p2) {

        var dx = p1.x - p2.x,
            dy = p1.y - p2.y,
            dist = Math.sqrt(dx * dx + dy * dy),
            dist_p = p1.radius + p2.radius;

        if (dist <= dist_p) {
            p1.vx = -p1.vx;
            p1.vy = -p1.vy;

            p2.vx = -p2.vx;
            p2.vy = -p2.vy;
        }
    };

    /* ---------- pJS functions - modes events ------------ */

    pJS.fn.modes.pushParticles = function (nb, pos) {

        pJS.tmp.pushing = true;

        for (var i = 0; i < nb; i++) {
            pJS.particles.array.push(new pJS.fn.particle(pJS.particles.color, pJS.particles.opacity.value, {
                'x': pos ? pos.pos_x : Math.random() * pJS.canvas.w,
                'y': pos ? pos.pos_y : Math.random() * pJS.canvas.h
            }));
            if (i == nb - 1) {
                if (!pJS.particles.move.enable) {
                    pJS.fn.particlesDraw();
                }
                pJS.tmp.pushing = false;
            }
        }
    };

    pJS.fn.modes.removeParticles = function (nb) {

        pJS.particles.array.splice(0, nb);
        if (!pJS.particles.move.enable) {
            pJS.fn.particlesDraw();
        }
    };

    pJS.fn.modes.bubbleParticle = function (p) {

        /* on hover event */
        if (pJS.interactivity.events.onhover.enable && isInArray('bubble', pJS.interactivity.events.onhover.mode)) {
            var init = function init() {
                p.opacity_bubble = p.opacity;
                p.radius_bubble = p.radius;
            };

            /* mousemove - check ratio */


            var dx_mouse = p.x - pJS.interactivity.mouse.pos_x,
                dy_mouse = p.y - pJS.interactivity.mouse.pos_y,
                dist_mouse = Math.sqrt(dx_mouse * dx_mouse + dy_mouse * dy_mouse),
                ratio = 1 - dist_mouse / pJS.interactivity.modes.bubble.distance;

            if (dist_mouse <= pJS.interactivity.modes.bubble.distance) {

                if (ratio >= 0 && pJS.interactivity.status == 'mousemove') {

                    /* size */
                    if (pJS.interactivity.modes.bubble.size != pJS.particles.size.value) {

                        if (pJS.interactivity.modes.bubble.size > pJS.particles.size.value) {
                            var size = p.radius + pJS.interactivity.modes.bubble.size * ratio;
                            if (size >= 0) {
                                p.radius_bubble = size;
                            }
                        } else {
                            var dif = p.radius - pJS.interactivity.modes.bubble.size,
                                size = p.radius - dif * ratio;
                            if (size > 0) {
                                p.radius_bubble = size;
                            } else {
                                p.radius_bubble = 0;
                            }
                        }
                    }

                    /* opacity */
                    if (pJS.interactivity.modes.bubble.opacity != pJS.particles.opacity.value) {

                        if (pJS.interactivity.modes.bubble.opacity > pJS.particles.opacity.value) {
                            var opacity = pJS.interactivity.modes.bubble.opacity * ratio;
                            if (opacity > p.opacity && opacity <= pJS.interactivity.modes.bubble.opacity) {
                                p.opacity_bubble = opacity;
                            }
                        } else {
                            var opacity = p.opacity - (pJS.particles.opacity.value - pJS.interactivity.modes.bubble.opacity) * ratio;
                            if (opacity < p.opacity && opacity >= pJS.interactivity.modes.bubble.opacity) {
                                p.opacity_bubble = opacity;
                            }
                        }
                    }
                }
            } else {
                init();
            }

            /* mouseleave */
            if (pJS.interactivity.status == 'mouseleave') {
                init();
            }
        }

        /* on click event */
        else if (pJS.interactivity.events.onclick.enable && isInArray('bubble', pJS.interactivity.events.onclick.mode)) {
                var process = function process(bubble_param, particles_param, p_obj_bubble, p_obj, id) {

                    if (bubble_param != particles_param) {

                        if (!pJS.tmp.bubble_duration_end) {
                            if (dist_mouse <= pJS.interactivity.modes.bubble.distance) {
                                if (p_obj_bubble != undefined) var obj = p_obj_bubble;else var obj = p_obj;
                                if (obj != bubble_param) {
                                    var value = p_obj - time_spent * (p_obj - bubble_param) / pJS.interactivity.modes.bubble.duration;
                                    if (id == 'size') p.radius_bubble = value;
                                    if (id == 'opacity') p.opacity_bubble = value;
                                }
                            } else {
                                if (id == 'size') p.radius_bubble = undefined;
                                if (id == 'opacity') p.opacity_bubble = undefined;
                            }
                        } else {
                            if (p_obj_bubble != undefined) {
                                var value_tmp = p_obj - time_spent * (p_obj - bubble_param) / pJS.interactivity.modes.bubble.duration,
                                    dif = bubble_param - value_tmp;
                                value = bubble_param + dif;
                                if (id == 'size') p.radius_bubble = value;
                                if (id == 'opacity') p.opacity_bubble = value;
                            }
                        }
                    }
                };

                if (pJS.tmp.bubble_clicking) {
                    var dx_mouse = p.x - pJS.interactivity.mouse.click_pos_x,
                        dy_mouse = p.y - pJS.interactivity.mouse.click_pos_y,
                        dist_mouse = Math.sqrt(dx_mouse * dx_mouse + dy_mouse * dy_mouse),
                        time_spent = (new Date().getTime() - pJS.interactivity.mouse.click_time) / 1000;

                    if (time_spent > pJS.interactivity.modes.bubble.duration) {
                        pJS.tmp.bubble_duration_end = true;
                    }

                    if (time_spent > pJS.interactivity.modes.bubble.duration * 2) {
                        pJS.tmp.bubble_clicking = false;
                        pJS.tmp.bubble_duration_end = false;
                    }
                }

                if (pJS.tmp.bubble_clicking) {
                    /* size */
                    process(pJS.interactivity.modes.bubble.size, pJS.particles.size.value, p.radius_bubble, p.radius, 'size');
                    /* opacity */
                    process(pJS.interactivity.modes.bubble.opacity, pJS.particles.opacity.value, p.opacity_bubble, p.opacity, 'opacity');
                }
            }
    };

    pJS.fn.modes.repulseParticle = function (p) {

        if (pJS.interactivity.events.onhover.enable && isInArray('repulse', pJS.interactivity.events.onhover.mode) && pJS.interactivity.status == 'mousemove') {

            var dx_mouse = p.x - pJS.interactivity.mouse.pos_x,
                dy_mouse = p.y - pJS.interactivity.mouse.pos_y,
                dist_mouse = Math.sqrt(dx_mouse * dx_mouse + dy_mouse * dy_mouse);

            var normVec = { x: dx_mouse / dist_mouse, y: dy_mouse / dist_mouse },
                repulseRadius = pJS.interactivity.modes.repulse.distance,
                velocity = 100,
                repulseFactor = clamp(1 / repulseRadius * (-1 * Math.pow(dist_mouse / repulseRadius, 2) + 1) * repulseRadius * velocity, 0, 50);

            var pos = {
                x: p.x + normVec.x * repulseFactor,
                y: p.y + normVec.y * repulseFactor
            };

            if (pJS.particles.move.out_mode == 'bounce') {
                if (pos.x - p.radius > 0 && pos.x + p.radius < pJS.canvas.w) p.x = pos.x;
                if (pos.y - p.radius > 0 && pos.y + p.radius < pJS.canvas.h) p.y = pos.y;
            } else {
                p.x = pos.x;
                p.y = pos.y;
            }
        } else if (pJS.interactivity.events.onclick.enable && isInArray('repulse', pJS.interactivity.events.onclick.mode)) {

            if (!pJS.tmp.repulse_finish) {
                pJS.tmp.repulse_count++;
                if (pJS.tmp.repulse_count == pJS.particles.array.length) {
                    pJS.tmp.repulse_finish = true;
                }
            }

            if (pJS.tmp.repulse_clicking) {
                var process = function process() {

                    var f = Math.atan2(dy, dx);
                    p.vx = force * Math.cos(f);
                    p.vy = force * Math.sin(f);

                    if (pJS.particles.move.out_mode == 'bounce') {
                        var pos = {
                            x: p.x + p.vx,
                            y: p.y + p.vy
                        };
                        if (pos.x + p.radius > pJS.canvas.w) p.vx = -p.vx;else if (pos.x - p.radius < 0) p.vx = -p.vx;
                        if (pos.y + p.radius > pJS.canvas.h) p.vy = -p.vy;else if (pos.y - p.radius < 0) p.vy = -p.vy;
                    }
                };

                // default


                var repulseRadius = Math.pow(pJS.interactivity.modes.repulse.distance / 6, 3);

                var dx = pJS.interactivity.mouse.click_pos_x - p.x,
                    dy = pJS.interactivity.mouse.click_pos_y - p.y,
                    d = dx * dx + dy * dy;

                var force = -repulseRadius / d * 1;

                if (d <= repulseRadius) {
                    process();
                }

                // bang - slow motion mode
                // if(!pJS.tmp.repulse_finish){
                //   if(d <= repulseRadius){
                //     process();
                //   }
                // }else{
                //   process();
                // }

            } else {

                if (pJS.tmp.repulse_clicking == false) {

                    p.vx = p.vx_i;
                    p.vy = p.vy_i;
                }
            }
        }
    };

    pJS.fn.modes.grabParticle = function (p) {

        if (pJS.interactivity.events.onhover.enable && pJS.interactivity.status == 'mousemove') {

            var dx_mouse = p.x - pJS.interactivity.mouse.pos_x,
                dy_mouse = p.y - pJS.interactivity.mouse.pos_y,
                dist_mouse = Math.sqrt(dx_mouse * dx_mouse + dy_mouse * dy_mouse);

            /* draw a line between the cursor and the particle if the distance between them is under the config distance */
            if (dist_mouse <= pJS.interactivity.modes.grab.distance) {

                var opacity_line = pJS.interactivity.modes.grab.line_linked.opacity - dist_mouse / (1 / pJS.interactivity.modes.grab.line_linked.opacity) / pJS.interactivity.modes.grab.distance;

                if (opacity_line > 0) {

                    /* style */
                    var color_line = pJS.particles.line_linked.color_rgb_line;
                    pJS.canvas.ctx.strokeStyle = 'rgba(' + 251 + ',' + 195 + ',' + 94 + ',' + opacity_line + ')';
                    pJS.canvas.ctx.lineWidth = pJS.particles.line_linked.width;
                    //pJS.canvas.ctx.lineCap = 'round'; /* performance issue */

                    /* path */
                    pJS.canvas.ctx.beginPath();
                    pJS.canvas.ctx.moveTo(p.x, p.y);
                    pJS.canvas.ctx.lineTo(pJS.interactivity.mouse.pos_x, pJS.interactivity.mouse.pos_y);
                    pJS.canvas.ctx.stroke();
                    pJS.canvas.ctx.closePath();
                }
            }
        }
    };

    /* ---------- pJS functions - vendors ------------ */

    pJS.fn.vendors.eventsListeners = function () {

        /* events target element */
        if (pJS.interactivity.detect_on == 'window') {
            pJS.interactivity.el = window;
        } else {
            pJS.interactivity.el = pJS.canvas.el;
        }

        /* detect mouse pos - on hover / click event */
        if (pJS.interactivity.events.onhover.enable || pJS.interactivity.events.onclick.enable) {

            /* el on mousemove */
            pJS.interactivity.el.addEventListener('mousemove', function (e) {

                if (pJS.interactivity.el == window) {
                    var pos_x = e.clientX,
                        pos_y = e.clientY;
                } else {
                    var pos_x = e.offsetX || e.clientX,
                        pos_y = e.offsetY || e.clientY;
                }

                pJS.interactivity.mouse.pos_x = pos_x;
                pJS.interactivity.mouse.pos_y = pos_y;

                if (pJS.tmp.retina) {
                    pJS.interactivity.mouse.pos_x *= pJS.canvas.pxratio;
                    pJS.interactivity.mouse.pos_y *= pJS.canvas.pxratio;
                }

                pJS.interactivity.status = 'mousemove';
            });

            /* el on onmouseleave */
            pJS.interactivity.el.addEventListener('mouseleave', function (e) {

                pJS.interactivity.mouse.pos_x = null;
                pJS.interactivity.mouse.pos_y = null;
                pJS.interactivity.status = 'mouseleave';
            });
        }

        /* on click event */
        if (pJS.interactivity.events.onclick.enable) {

            pJS.interactivity.el.addEventListener('click', function () {

                pJS.interactivity.mouse.click_pos_x = pJS.interactivity.mouse.pos_x;
                pJS.interactivity.mouse.click_pos_y = pJS.interactivity.mouse.pos_y;
                pJS.interactivity.mouse.click_time = new Date().getTime();

                if (pJS.interactivity.events.onclick.enable) {

                    switch (pJS.interactivity.events.onclick.mode) {

                        case 'push':
                            if (pJS.particles.move.enable) {
                                pJS.fn.modes.pushParticles(pJS.interactivity.modes.push.particles_nb, pJS.interactivity.mouse);
                            } else {
                                if (pJS.interactivity.modes.push.particles_nb == 1) {
                                    pJS.fn.modes.pushParticles(pJS.interactivity.modes.push.particles_nb, pJS.interactivity.mouse);
                                } else if (pJS.interactivity.modes.push.particles_nb > 1) {
                                    pJS.fn.modes.pushParticles(pJS.interactivity.modes.push.particles_nb);
                                }
                            }
                            break;

                        case 'remove':
                            pJS.fn.modes.removeParticles(pJS.interactivity.modes.remove.particles_nb);
                            break;

                        case 'bubble':
                            pJS.tmp.bubble_clicking = true;
                            break;

                        case 'repulse':
                            pJS.tmp.repulse_clicking = true;
                            pJS.tmp.repulse_count = 0;
                            pJS.tmp.repulse_finish = false;
                            setTimeout(function () {
                                pJS.tmp.repulse_clicking = false;
                            }, pJS.interactivity.modes.repulse.duration * 1000);
                            break;

                    }
                }
            });
        }
    };

    pJS.fn.vendors.densityAutoParticles = function () {

        if (pJS.particles.number.density.enable) {

            /* calc area */
            var area = pJS.canvas.el.width * pJS.canvas.el.height / 1000;
            if (pJS.tmp.retina) {
                area = area / (pJS.canvas.pxratio * 2);
            }

            /* calc number of particles based on density area */
            var nb_particles = area * pJS.particles.number.value / pJS.particles.number.density.value_area;

            /* add or remove X particles */
            var missing_particles = pJS.particles.array.length - nb_particles;
            if (missing_particles < 0) pJS.fn.modes.pushParticles(Math.abs(missing_particles));else pJS.fn.modes.removeParticles(missing_particles);
        }
    };

    pJS.fn.vendors.checkOverlap = function (p1, position) {
        for (var i = 0; i < pJS.particles.array.length; i++) {
            var p2 = pJS.particles.array[i];

            var dx = p1.x - p2.x,
                dy = p1.y - p2.y,
                dist = Math.sqrt(dx * dx + dy * dy);

            if (dist <= p1.radius + p2.radius) {
                p1.x = position ? position.x : Math.random() * pJS.canvas.w;
                p1.y = position ? position.y : Math.random() * pJS.canvas.h;
                pJS.fn.vendors.checkOverlap(p1);
            }
        }
    };

    pJS.fn.vendors.createSvgImg = function (p) {

        /* set color to svg element */
        var svgXml = pJS.tmp.source_svg,
            rgbHex = /#([0-9A-F]{3,6})/gi,
            coloredSvgXml = svgXml.replace(rgbHex, function (m, r, g, b) {
            if (p.color.rgb) {
                var color_value = 'rgba(' + p.color.rgb.r + ',' + p.color.rgb.g + ',' + p.color.rgb.b + ',' + p.opacity + ')';
            } else {
                var color_value = 'hsla(' + p.color.hsl.h + ',' + p.color.hsl.s + '%,' + p.color.hsl.l + '%,' + p.opacity + ')';
            }
            return color_value;
        });

        /* prepare to create img with colored svg */
        var svg = new Blob([coloredSvgXml], { type: 'image/svg+xml;charset=utf-8' }),
            DOMURL = window.URL || window.webkitURL || window,
            url = DOMURL.createObjectURL(svg);

        /* create particle img obj */
        var img = new Image();
        img.addEventListener('load', function () {
            p.img.obj = img;
            p.img.loaded = true;
            DOMURL.revokeObjectURL(url);
            pJS.tmp.count_svg++;
        });
        img.src = url;
    };

    pJS.fn.vendors.destroypJS = function () {
        cancelAnimationFrame(pJS.fn.drawAnimFrame);
        canvas_el.remove();
        pJSDom = null;
    };

    pJS.fn.vendors.drawShape = function (c, startX, startY, sideLength, sideCountNumerator, sideCountDenominator) {

        // By Programming Thomas - https://programmingthomas.wordpress.com/2013/04/03/n-sided-shapes/
        var sideCount = sideCountNumerator * sideCountDenominator;
        var decimalSides = sideCountNumerator / sideCountDenominator;
        var interiorAngleDegrees = 180 * (decimalSides - 2) / decimalSides;
        var interiorAngle = Math.PI - Math.PI * interiorAngleDegrees / 180; // convert to radians
        c.save();
        c.beginPath();
        c.translate(startX, startY);
        c.moveTo(0, 0);
        for (var i = 0; i < sideCount; i++) {
            c.lineTo(sideLength, 0);
            c.translate(sideLength, 0);
            c.rotate(interiorAngle);
        }
        //c.stroke();
        c.fill();
        c.restore();
    };

    pJS.fn.vendors.exportImg = function () {
        window.open(pJS.canvas.el.toDataURL('image/png'), '_blank');
    };

    pJS.fn.vendors.loadImg = function (type) {

        pJS.tmp.img_error = undefined;

        if (pJS.particles.shape.image.src != '') {

            if (type == 'svg') {

                var xhr = new XMLHttpRequest();
                xhr.open('GET', pJS.particles.shape.image.src);
                xhr.onreadystatechange = function (data) {
                    if (xhr.readyState == 4) {
                        if (xhr.status == 200) {
                            pJS.tmp.source_svg = data.currentTarget.response;
                            pJS.fn.vendors.checkBeforeDraw();
                        } else {
                            console.log('Error pJS - Image not found');
                            pJS.tmp.img_error = true;
                        }
                    }
                };
                xhr.send();
            } else {

                var img = new Image();
                img.addEventListener('load', function () {
                    pJS.tmp.img_obj = img;
                    pJS.fn.vendors.checkBeforeDraw();
                });
                img.src = pJS.particles.shape.image.src;
            }
        } else {
            console.log('Error pJS - No image.src');
            pJS.tmp.img_error = true;
        }
    };

    pJS.fn.vendors.draw = function () {

        if (pJS.particles.shape.type == 'image') {

            if (pJS.tmp.img_type == 'svg') {

                if (pJS.tmp.count_svg >= pJS.particles.number.value) {
                    pJS.fn.particlesDraw();
                    if (!pJS.particles.move.enable) cancelRequestAnimFrame(pJS.fn.drawAnimFrame);else pJS.fn.drawAnimFrame = requestAnimFrame(pJS.fn.vendors.draw);
                } else {
                    //console.log('still loading...');
                    if (!pJS.tmp.img_error) pJS.fn.drawAnimFrame = requestAnimFrame(pJS.fn.vendors.draw);
                }
            } else {

                if (pJS.tmp.img_obj != undefined) {
                    pJS.fn.particlesDraw();
                    if (!pJS.particles.move.enable) cancelRequestAnimFrame(pJS.fn.drawAnimFrame);else pJS.fn.drawAnimFrame = requestAnimFrame(pJS.fn.vendors.draw);
                } else {
                    if (!pJS.tmp.img_error) pJS.fn.drawAnimFrame = requestAnimFrame(pJS.fn.vendors.draw);
                }
            }
        } else {
            pJS.fn.particlesDraw();
            if (!pJS.particles.move.enable) cancelRequestAnimFrame(pJS.fn.drawAnimFrame);else pJS.fn.drawAnimFrame = requestAnimFrame(pJS.fn.vendors.draw);
        }
    };

    pJS.fn.vendors.checkBeforeDraw = function () {

        // if shape is image
        if (pJS.particles.shape.type == 'image') {

            if (pJS.tmp.img_type == 'svg' && pJS.tmp.source_svg == undefined) {
                pJS.tmp.checkAnimFrame = requestAnimFrame(check);
            } else {
                //console.log('images loaded! cancel check');
                cancelRequestAnimFrame(pJS.tmp.checkAnimFrame);
                if (!pJS.tmp.img_error) {
                    pJS.fn.vendors.init();
                    pJS.fn.vendors.draw();
                }
            }
        } else {
            pJS.fn.vendors.init();
            pJS.fn.vendors.draw();
        }
    };

    pJS.fn.vendors.init = function () {

        /* init canvas + particles */
        pJS.fn.retinaInit();
        pJS.fn.canvasInit();
        pJS.fn.canvasSize();
        pJS.fn.canvasPaint();
        pJS.fn.particlesCreate();
        pJS.fn.vendors.densityAutoParticles();

        /* particles.line_linked - convert hex colors to rgb */
        pJS.particles.line_linked.color_rgb_line = hexToRgb(pJS.particles.line_linked.color);
    };

    pJS.fn.vendors.start = function () {

        if (isInArray('image', pJS.particles.shape.type)) {
            pJS.tmp.img_type = pJS.particles.shape.image.src.substr(pJS.particles.shape.image.src.length - 3);
            pJS.fn.vendors.loadImg(pJS.tmp.img_type);
        } else {
            pJS.fn.vendors.checkBeforeDraw();
        }
    };

    /* ---------- pJS - start ------------ */

    pJS.fn.vendors.eventsListeners();

    pJS.fn.vendors.start();
};

/* ---------- global functions - vendors ------------ */

Object.deepExtend = function (destination, source) {
    for (var property in source) {
        if (source[property] && source[property].constructor && source[property].constructor === Object) {
            destination[property] = destination[property] || {};
            arguments.callee(destination[property], source[property]);
        } else {
            destination[property] = source[property];
        }
    }
    return destination;
};

window.requestAnimFrame = function () {
    return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (callback) {
        window.setTimeout(callback, 1000 / 60);
    };
}();

window.cancelRequestAnimFrame = function () {
    return window.cancelAnimationFrame || window.webkitCancelRequestAnimationFrame || window.mozCancelRequestAnimationFrame || window.oCancelRequestAnimationFrame || window.msCancelRequestAnimationFrame || clearTimeout;
}();

function hexToRgb(hex) {
    // By Tim Down - http://stackoverflow.com/a/5624139/3493650
    // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
    var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hex.replace(shorthandRegex, function (m, r, g, b) {
        return r + r + g + g + b + b;
    });
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
};

function clamp(number, min, max) {
    return Math.min(Math.max(number, min), max);
};

function isInArray(value, array) {
    return array.indexOf(value) > -1;
}

/* ---------- particles.js functions - start ------------ */

window.pJSDom = [];

window.particlesJS = function (tag_id, params) {

    //console.log(params);

    /* no string id? so it's object params, and set the id with default id */
    if (typeof tag_id != 'string') {
        params = tag_id;
        tag_id = 'particles-js';
    }

    /* no id? set the id to default id */
    if (!tag_id) {
        tag_id = 'particles-js';
    }

    /* pJS elements */
    var pJS_tag = document.getElementById(tag_id),
        pJS_canvas_class = 'particles-js-canvas-el',
        exist_canvas = pJS_tag.getElementsByClassName(pJS_canvas_class);

    /* remove canvas if exists into the pJS target tag */
    if (exist_canvas.length) {
        while (exist_canvas.length > 0) {
            pJS_tag.removeChild(exist_canvas[0]);
        }
    }

    /* create canvas element */
    var canvas_el = document.createElement('canvas');
    canvas_el.className = pJS_canvas_class;

    /* set size canvas */
    canvas_el.style.width = "100%";
    canvas_el.style.height = "100%";

    /* append canvas */
    var canvas = document.getElementById(tag_id).appendChild(canvas_el);

    /* launch particle.js */
    if (canvas != null) {
        pJSDom.push(new pJS(tag_id, params));
    }
};

window.particlesJS.load = function (tag_id, path_config_json, callback) {

    /* load json config */
    var xhr = new XMLHttpRequest();
    xhr.open('GET', path_config_json);
    xhr.onreadystatechange = function (data) {
        if (xhr.readyState == 4) {
            if (xhr.status == 200) {
                var params = JSON.parse(data.currentTarget.response);
                window.particlesJS(tag_id, params);
                if (callback) callback();
            } else {
                console.log('Error pJS - XMLHttpRequest status: ' + xhr.status);
                console.log('Error pJS - File config not found');
            }
        }
    };
    xhr.send();
};

particlesJS("particles-js", {
    "particles": {
        "number": {
            "value": 100,
            "density": {
                "enable": true,
                "value_area": 800
            }
        },
        "color": {
            "value": "#6a2523"
        },
        "shape": {
            "type": "circle",
            "stroke": {
                "width": 0,
                "color": "#000000"
            },
            "polygon": {
                "nb_sides": 5
            },
            "image": {
                "src": "img/github.svg",
                "width": 100,
                "height": 100
            }
        },
        "opacity": {
            "value": 1,
            "random": true,
            "anim": {
                "enable": true,
                "speed": 1,
                "opacity_min": 0,
                "sync": false
            }
        },
        "size": {
            "value": 3,
            "random": true,
            "anim": {
                "enable": true,
                "speed": 4,
                "size_min": 0.3,
                "sync": false
            }
        },
        "line_linked": {
            "enable": true,
            "distance": 100.01416867389551,
            "color": "#d2af0d",
            "opacity": 0.3630136445780753,
            "width": 1
        },
        "move": {
            "enable": true,
            "speed": 3.333805622463184,
            "direction": "none",
            "random": true,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 600
            }
        }
    },
    "interactivity": {
        "detect_on": "window",
        "events": {
            "onhover": {
                "enable": true,
                "mode": "bubble"
            },
            "onclick": {
                "enable": false,
                "mode": "repulse"
            },
            "resize": true
        },
        "modes": {
            "grab": {
                "distance": 400,
                "line_linked": {
                    "opacity": 1
                }
            },
            "bubble": {
                "distance": 100,
                "size": 0,
                "duration": 2,
                "opacity": 0,
                "speed": 3
            },
            "repulse": {
                "distance": 50,
                "duration": 0.4
            },
            "push": {
                "particles_nb": 4
            },
            "remove": {
                "particles_nb": 2
            }
        }
    },
    "retina_detect": true
});

requestAnimationFrame();

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNDQ3YWEzYjUyZTM4MTdjMTZkNGUiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvaW5zY3JpcHRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3BhcnRpY2xlcy5qcyJdLCJuYW1lcyI6WyJyZXF1aXJlIiwiYWxlcnRSZWRJbnB1dCIsImRlZmF1bHRJbnB1dCIsInVzZXJOYW1lVmFsaWRhdGlvbiIsInVzZXJuYW1lSW5wdXQiLCJ1c2VybmFtZSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJpc3N1ZUFyciIsInRlc3QiLCJwdXNoIiwibGVuZ3RoIiwic2V0Q3VzdG9tVmFsaWRpdHkiLCJzdHlsZSIsImJvcmRlckNvbG9yIiwicGFzc3dvcmRWYWxpZGF0aW9uIiwicGFzc3dvcmRJbnB1dCIsInBhc3N3b3JkIiwiam9pbiIsInBKUyIsInRhZ19pZCIsInBhcmFtcyIsImNhbnZhc19lbCIsInF1ZXJ5U2VsZWN0b3IiLCJjYW52YXMiLCJlbCIsInciLCJvZmZzZXRXaWR0aCIsImgiLCJvZmZzZXRIZWlnaHQiLCJwYXJ0aWNsZXMiLCJudW1iZXIiLCJ2YWx1ZSIsImRlbnNpdHkiLCJlbmFibGUiLCJ2YWx1ZV9hcmVhIiwiY29sb3IiLCJzaGFwZSIsInR5cGUiLCJzdHJva2UiLCJ3aWR0aCIsInBvbHlnb24iLCJuYl9zaWRlcyIsImltYWdlIiwic3JjIiwiaGVpZ2h0Iiwib3BhY2l0eSIsInJhbmRvbSIsImFuaW0iLCJzcGVlZCIsIm9wYWNpdHlfbWluIiwic3luYyIsInNpemUiLCJzaXplX21pbiIsImxpbmVfbGlua2VkIiwiZGlzdGFuY2UiLCJtb3ZlIiwiZGlyZWN0aW9uIiwic3RyYWlnaHQiLCJvdXRfbW9kZSIsImJvdW5jZSIsImF0dHJhY3QiLCJyb3RhdGVYIiwicm90YXRlWSIsImFycmF5IiwiaW50ZXJhY3Rpdml0eSIsImRldGVjdF9vbiIsImV2ZW50cyIsIm9uaG92ZXIiLCJtb2RlIiwib25jbGljayIsInJlc2l6ZSIsIm1vZGVzIiwiZ3JhYiIsImJ1YmJsZSIsImR1cmF0aW9uIiwicmVwdWxzZSIsInBhcnRpY2xlc19uYiIsInJlbW92ZSIsIm1vdXNlIiwicmV0aW5hX2RldGVjdCIsImZuIiwiaW50ZXJhY3QiLCJ2ZW5kb3JzIiwidG1wIiwiT2JqZWN0IiwiZGVlcEV4dGVuZCIsIm9iaiIsInNpemVfdmFsdWUiLCJzaXplX2FuaW1fc3BlZWQiLCJtb3ZlX3NwZWVkIiwibGluZV9saW5rZWRfZGlzdGFuY2UiLCJsaW5lX2xpbmtlZF93aWR0aCIsIm1vZGVfZ3JhYl9kaXN0YW5jZSIsIm1vZGVfYnViYmxlX2Rpc3RhbmNlIiwibW9kZV9idWJibGVfc2l6ZSIsIm1vZGVfcmVwdWxzZV9kaXN0YW5jZSIsInJldGluYUluaXQiLCJ3aW5kb3ciLCJkZXZpY2VQaXhlbFJhdGlvIiwicHhyYXRpbyIsInJldGluYSIsImNhbnZhc0luaXQiLCJjdHgiLCJnZXRDb250ZXh0IiwiY2FudmFzU2l6ZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJwYXJ0aWNsZXNFbXB0eSIsInBhcnRpY2xlc0NyZWF0ZSIsInBhcnRpY2xlc0RyYXciLCJkZW5zaXR5QXV0b1BhcnRpY2xlcyIsImNhbnZhc1BhaW50IiwiZmlsbFJlY3QiLCJjYW52YXNDbGVhciIsImNsZWFyUmVjdCIsInBhcnRpY2xlIiwicG9zaXRpb24iLCJyYWRpdXMiLCJNYXRoIiwic2l6ZV9zdGF0dXMiLCJ2cyIsIngiLCJ5IiwiY2hlY2tPdmVybGFwIiwiQXJyYXkiLCJjb2xvcl9zZWxlY3RlZCIsImZsb29yIiwicmdiIiwiaGV4VG9SZ2IiLCJyIiwidW5kZWZpbmVkIiwiZyIsImIiLCJzIiwibCIsImhzbCIsIm9wYWNpdHlfc3RhdHVzIiwidm8iLCJ2ZWxiYXNlIiwidngiLCJ2eSIsInZ4X2kiLCJ2eV9pIiwic2hhcGVfdHlwZSIsInNoYXBlX3NlbGVjdGVkIiwic2giLCJpbWciLCJyYXRpbyIsImltZ190eXBlIiwic291cmNlX3N2ZyIsImNyZWF0ZVN2Z0ltZyIsInB1c2hpbmciLCJsb2FkZWQiLCJwcm90b3R5cGUiLCJkcmF3IiwicCIsInJhZGl1c19idWJibGUiLCJvcGFjaXR5X2J1YmJsZSIsImNvbG9yX3ZhbHVlIiwiZmlsbFN0eWxlIiwiYmVnaW5QYXRoIiwiYXJjIiwiUEkiLCJyZWN0IiwiZHJhd1NoYXBlIiwiZHJhd0ltYWdlIiwiaW1nX29iaiIsImNsb3NlUGF0aCIsInN0cm9rZVN0eWxlIiwibGluZVdpZHRoIiwiZmlsbCIsImkiLCJwYXJ0aWNsZXNVcGRhdGUiLCJtcyIsIm5ld19wb3MiLCJ4X2xlZnQiLCJ4X3JpZ2h0IiwieV90b3AiLCJ5X2JvdHRvbSIsImlzSW5BcnJheSIsImdyYWJQYXJ0aWNsZSIsImJ1YmJsZVBhcnRpY2xlIiwicmVwdWxzZVBhcnRpY2xlIiwiaiIsInAyIiwibGlua1BhcnRpY2xlcyIsImF0dHJhY3RQYXJ0aWNsZXMiLCJib3VuY2VQYXJ0aWNsZXMiLCJwYXJ0aWNsZXNSZWZyZXNoIiwiY2FuY2VsUmVxdWVzdEFuaW1GcmFtZSIsImNoZWNrQW5pbUZyYW1lIiwiZHJhd0FuaW1GcmFtZSIsImNvdW50X3N2ZyIsInN0YXJ0IiwicDEiLCJkeCIsImR5IiwiZGlzdCIsInNxcnQiLCJvcGFjaXR5X2xpbmUiLCJjb2xvcl9saW5lIiwiY29sb3JfcmdiX2xpbmUiLCJtb3ZlVG8iLCJsaW5lVG8iLCJheCIsImF5IiwiZGlzdF9wIiwicHVzaFBhcnRpY2xlcyIsIm5iIiwicG9zIiwicG9zX3giLCJwb3NfeSIsInJlbW92ZVBhcnRpY2xlcyIsInNwbGljZSIsImluaXQiLCJkeF9tb3VzZSIsImR5X21vdXNlIiwiZGlzdF9tb3VzZSIsInN0YXR1cyIsImRpZiIsInByb2Nlc3MiLCJidWJibGVfcGFyYW0iLCJwYXJ0aWNsZXNfcGFyYW0iLCJwX29ial9idWJibGUiLCJwX29iaiIsImlkIiwiYnViYmxlX2R1cmF0aW9uX2VuZCIsInRpbWVfc3BlbnQiLCJ2YWx1ZV90bXAiLCJidWJibGVfY2xpY2tpbmciLCJjbGlja19wb3NfeCIsImNsaWNrX3Bvc195IiwiRGF0ZSIsImdldFRpbWUiLCJjbGlja190aW1lIiwibm9ybVZlYyIsInJlcHVsc2VSYWRpdXMiLCJ2ZWxvY2l0eSIsInJlcHVsc2VGYWN0b3IiLCJjbGFtcCIsInBvdyIsInJlcHVsc2VfZmluaXNoIiwicmVwdWxzZV9jb3VudCIsInJlcHVsc2VfY2xpY2tpbmciLCJmIiwiYXRhbjIiLCJmb3JjZSIsImNvcyIsInNpbiIsImQiLCJldmVudHNMaXN0ZW5lcnMiLCJlIiwiY2xpZW50WCIsImNsaWVudFkiLCJvZmZzZXRYIiwib2Zmc2V0WSIsInNldFRpbWVvdXQiLCJhcmVhIiwibmJfcGFydGljbGVzIiwibWlzc2luZ19wYXJ0aWNsZXMiLCJhYnMiLCJzdmdYbWwiLCJyZ2JIZXgiLCJjb2xvcmVkU3ZnWG1sIiwicmVwbGFjZSIsIm0iLCJzdmciLCJCbG9iIiwiRE9NVVJMIiwiVVJMIiwid2Via2l0VVJMIiwidXJsIiwiY3JlYXRlT2JqZWN0VVJMIiwiSW1hZ2UiLCJyZXZva2VPYmplY3RVUkwiLCJkZXN0cm95cEpTIiwiY2FuY2VsQW5pbWF0aW9uRnJhbWUiLCJwSlNEb20iLCJjIiwic3RhcnRYIiwic3RhcnRZIiwic2lkZUxlbmd0aCIsInNpZGVDb3VudE51bWVyYXRvciIsInNpZGVDb3VudERlbm9taW5hdG9yIiwic2lkZUNvdW50IiwiZGVjaW1hbFNpZGVzIiwiaW50ZXJpb3JBbmdsZURlZ3JlZXMiLCJpbnRlcmlvckFuZ2xlIiwic2F2ZSIsInRyYW5zbGF0ZSIsInJvdGF0ZSIsInJlc3RvcmUiLCJleHBvcnRJbWciLCJvcGVuIiwidG9EYXRhVVJMIiwibG9hZEltZyIsImltZ19lcnJvciIsInhociIsIlhNTEh0dHBSZXF1ZXN0Iiwib25yZWFkeXN0YXRlY2hhbmdlIiwiZGF0YSIsInJlYWR5U3RhdGUiLCJjdXJyZW50VGFyZ2V0IiwicmVzcG9uc2UiLCJjaGVja0JlZm9yZURyYXciLCJjb25zb2xlIiwibG9nIiwic2VuZCIsInJlcXVlc3RBbmltRnJhbWUiLCJjaGVjayIsInN1YnN0ciIsImRlc3RpbmF0aW9uIiwic291cmNlIiwicHJvcGVydHkiLCJjb25zdHJ1Y3RvciIsImFyZ3VtZW50cyIsImNhbGxlZSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsIndlYmtpdFJlcXVlc3RBbmltYXRpb25GcmFtZSIsIm1velJlcXVlc3RBbmltYXRpb25GcmFtZSIsIm9SZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJtc1JlcXVlc3RBbmltYXRpb25GcmFtZSIsImNhbGxiYWNrIiwid2Via2l0Q2FuY2VsUmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwibW96Q2FuY2VsUmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwib0NhbmNlbFJlcXVlc3RBbmltYXRpb25GcmFtZSIsIm1zQ2FuY2VsUmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiY2xlYXJUaW1lb3V0IiwiaGV4Iiwic2hvcnRoYW5kUmVnZXgiLCJyZXN1bHQiLCJleGVjIiwicGFyc2VJbnQiLCJtaW4iLCJtYXgiLCJpbmRleE9mIiwicGFydGljbGVzSlMiLCJwSlNfdGFnIiwicEpTX2NhbnZhc19jbGFzcyIsImV4aXN0X2NhbnZhcyIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJyZW1vdmVDaGlsZCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJhcHBlbmRDaGlsZCIsImxvYWQiLCJwYXRoX2NvbmZpZ19qc29uIiwiSlNPTiIsInBhcnNlIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUM3REEsbUJBQUFBLENBQVEsaURBQVI7QUFDQSxtQkFBQUEsQ0FBUSw2Q0FBUixFOzs7Ozs7Ozs7Ozs7QUNEQSxJQUFJQyxnQkFBZ0IsU0FBcEI7QUFDQSxJQUFJQyxlQUFlLHVCQUFuQjs7QUFFQSxTQUFTQyxrQkFBVCxDQUE0QkMsYUFBNUIsRUFBMkM7QUFDdkMsUUFBSUMsV0FBV0MsU0FBU0MsY0FBVCxDQUF3QixVQUF4QixDQUFmO0FBQ0EsUUFBSUMsV0FBVyxFQUFmO0FBQ0EsUUFBSSx1Q0FBdUNDLElBQXZDLENBQTRDTCxhQUE1QyxDQUFKLEVBQWdFO0FBQzVESSxpQkFBU0UsSUFBVCxDQUFjLHdCQUFkO0FBQ0g7QUFDRCxRQUFJRixTQUFTRyxNQUFULEdBQWtCLENBQXRCLEVBQXlCO0FBQ3JCTixpQkFBU08saUJBQVQsQ0FBMkJKLFFBQTNCO0FBQ0FILGlCQUFTUSxLQUFULENBQWVDLFdBQWYsR0FBNkJiLGFBQTdCO0FBQ0gsS0FIRCxNQUdPO0FBQ0hJLGlCQUFTTyxpQkFBVCxDQUEyQixFQUEzQjtBQUNBUCxpQkFBU1EsS0FBVCxDQUFlQyxXQUFmLEdBQTZCWixZQUE3QjtBQUNIO0FBQ0o7O0FBRUQsU0FBU2Esa0JBQVQsQ0FBNEJDLGFBQTVCLEVBQTJDO0FBQ3ZDLFFBQUlDLFdBQVdYLFNBQVNDLGNBQVQsQ0FBd0IsVUFBeEIsQ0FBZjtBQUNBLFFBQUlDLFdBQVcsRUFBZjtBQUNBLFFBQUksQ0FBQyxZQUFZQyxJQUFaLENBQWlCTyxhQUFqQixDQUFMLEVBQXNDO0FBQ2xDUixpQkFBU0UsSUFBVCxDQUFjLDJDQUFkO0FBQ0g7QUFDRCxRQUFJLENBQUMsS0FBS0QsSUFBTCxDQUFVTyxhQUFWLENBQUwsRUFBK0I7QUFDM0JSLGlCQUFTRSxJQUFULENBQWMsbUNBQWQ7QUFDSDtBQUNELFFBQUksQ0FBQyxRQUFRRCxJQUFSLENBQWFPLGFBQWIsQ0FBTCxFQUFrQztBQUM5QlIsaUJBQVNFLElBQVQsQ0FBYyxrQ0FBZDtBQUNIO0FBQ0QsUUFBSSxDQUFDLFFBQVFELElBQVIsQ0FBYU8sYUFBYixDQUFMLEVBQWtDO0FBQzlCUixpQkFBU0UsSUFBVCxDQUFjLG1DQUFkO0FBQ0g7QUFDRCxRQUFJRixTQUFTRyxNQUFULEdBQWtCLENBQXRCLEVBQXlCO0FBQ3JCTSxpQkFBU0wsaUJBQVQsQ0FBMkJKLFNBQVNVLElBQVQsQ0FBYyxJQUFkLENBQTNCO0FBQ0FELGlCQUFTSixLQUFULENBQWVDLFdBQWYsR0FBNkJiLGFBQTdCO0FBQ0gsS0FIRCxNQUdPO0FBQ0hnQixpQkFBU0wsaUJBQVQsQ0FBMkIsRUFBM0I7QUFDQUssaUJBQVNKLEtBQVQsQ0FBZUMsV0FBZixHQUE2QlosWUFBN0I7QUFDSDtBQUNKLEM7Ozs7Ozs7Ozs7Ozs7O0FDdkNELElBQUlpQixNQUFNLGFBQVNDLE1BQVQsRUFBaUJDLE1BQWpCLEVBQXdCOztBQUU5QixRQUFJQyxZQUFZaEIsU0FBU2lCLGFBQVQsQ0FBdUIsTUFBSUgsTUFBSixHQUFXLDRCQUFsQyxDQUFoQjs7QUFFQTtBQUNBLFNBQUtELEdBQUwsR0FBVztBQUNQSyxnQkFBUTtBQUNKQyxnQkFBSUgsU0FEQTtBQUVKSSxlQUFHSixVQUFVSyxXQUZUO0FBR0pDLGVBQUdOLFVBQVVPO0FBSFQsU0FERDtBQU1QQyxtQkFBVztBQUNQQyxvQkFBUTtBQUNKQyx1QkFBTyxHQURIO0FBRUpDLHlCQUFTO0FBQ0xDLDRCQUFRLElBREg7QUFFTEMsZ0NBQVk7QUFGUDtBQUZMLGFBREQ7QUFRUEMsbUJBQU87QUFDSEosdUJBQU87QUFESixhQVJBO0FBV1BLLG1CQUFPO0FBQ0hDLHNCQUFNLFFBREg7QUFFSEMsd0JBQVE7QUFDSkMsMkJBQU8sQ0FESDtBQUVKSiwyQkFBTztBQUZILGlCQUZMO0FBTUhLLHlCQUFTO0FBQ0xDLDhCQUFVO0FBREwsaUJBTk47QUFTSEMsdUJBQU87QUFDSEMseUJBQUssRUFERjtBQUVISiwyQkFBTyxHQUZKO0FBR0hLLDRCQUFRO0FBSEw7QUFUSixhQVhBO0FBMEJQQyxxQkFBUztBQUNMZCx1QkFBTyxDQURGO0FBRUxlLHdCQUFRLElBRkg7QUFHTEMsc0JBQU07QUFDRmQsNEJBQVEsS0FETjtBQUVGZSwyQkFBTyxDQUZMO0FBR0ZDLGlDQUFhLENBSFg7QUFJRkMsMEJBQU07QUFKSjtBQUhELGFBMUJGO0FBb0NQQyxrQkFBTTtBQUNGcEIsdUJBQU8sRUFETDtBQUVGZSx3QkFBUSxLQUZOO0FBR0ZDLHNCQUFNO0FBQ0ZkLDRCQUFRLEtBRE47QUFFRmUsMkJBQU8sRUFGTDtBQUdGSSw4QkFBVSxDQUhSO0FBSUZGLDBCQUFNO0FBSko7QUFISixhQXBDQztBQThDUEcseUJBQWE7QUFDVHBCLHdCQUFRLElBREM7QUFFVHFCLDBCQUFVLEdBRkQ7QUFHVG5CLHVCQUFPLE1BSEU7QUFJVFUseUJBQVMsQ0FKQTtBQUtUTix1QkFBTztBQUxFLGFBOUNOO0FBcURQZ0Isa0JBQU07QUFDRnRCLHdCQUFRLElBRE47QUFFRmUsdUJBQU8sQ0FGTDtBQUdGUSwyQkFBVyxNQUhUO0FBSUZWLHdCQUFRLEtBSk47QUFLRlcsMEJBQVUsS0FMUjtBQU1GQywwQkFBVSxLQU5SO0FBT0ZDLHdCQUFRLEtBUE47QUFRRkMseUJBQVM7QUFDTDNCLDRCQUFRLEtBREg7QUFFTDRCLDZCQUFTLElBRko7QUFHTEMsNkJBQVM7QUFISjtBQVJQLGFBckRDO0FBbUVQQyxtQkFBTztBQW5FQSxTQU5KO0FBMkVQQyx1QkFBZTtBQUNYQyx1QkFBVyxRQURBO0FBRVhDLG9CQUFRO0FBQ0pDLHlCQUFTO0FBQ0xsQyw0QkFBUSxJQURIO0FBRUxtQywwQkFBTTtBQUZELGlCQURMO0FBS0pDLHlCQUFTO0FBQ0xwQyw0QkFBUSxJQURIO0FBRUxtQywwQkFBTTtBQUZELGlCQUxMO0FBU0pFLHdCQUFRO0FBVEosYUFGRztBQWFYQyxtQkFBTztBQUNIQyxzQkFBSztBQUNEbEIsOEJBQVUsR0FEVDtBQUVERCxpQ0FBWTtBQUNSUixpQ0FBUztBQUREO0FBRlgsaUJBREY7QUFPSDRCLHdCQUFPO0FBQ0huQiw4QkFBVSxHQURQO0FBRUhILDBCQUFNLEVBRkg7QUFHSHVCLDhCQUFVO0FBSFAsaUJBUEo7QUFZSEMseUJBQVE7QUFDSnJCLDhCQUFVLEdBRE47QUFFSm9CLDhCQUFVO0FBRk4saUJBWkw7QUFnQkhqRSxzQkFBSztBQUNEbUUsa0NBQWM7QUFEYixpQkFoQkY7QUFtQkhDLHdCQUFPO0FBQ0hELGtDQUFjO0FBRFg7QUFuQkosYUFiSTtBQW9DWEUsbUJBQU07QUFwQ0ssU0EzRVI7QUFpSFBDLHVCQUFlLEtBakhSO0FBa0hQQyxZQUFJO0FBQ0FDLHNCQUFVLEVBRFY7QUFFQVYsbUJBQU8sRUFGUDtBQUdBVyxxQkFBUTtBQUhSLFNBbEhHO0FBdUhQQyxhQUFLO0FBdkhFLEtBQVg7O0FBMEhBLFFBQUlqRSxNQUFNLEtBQUtBLEdBQWY7O0FBRUE7QUFDQSxRQUFHRSxNQUFILEVBQVU7QUFDTmdFLGVBQU9DLFVBQVAsQ0FBa0JuRSxHQUFsQixFQUF1QkUsTUFBdkI7QUFDSDs7QUFFREYsUUFBSWlFLEdBQUosQ0FBUUcsR0FBUixHQUFjO0FBQ1ZDLG9CQUFZckUsSUFBSVcsU0FBSixDQUFjc0IsSUFBZCxDQUFtQnBCLEtBRHJCO0FBRVZ5RCx5QkFBaUJ0RSxJQUFJVyxTQUFKLENBQWNzQixJQUFkLENBQW1CSixJQUFuQixDQUF3QkMsS0FGL0I7QUFHVnlDLG9CQUFZdkUsSUFBSVcsU0FBSixDQUFjMEIsSUFBZCxDQUFtQlAsS0FIckI7QUFJVjBDLDhCQUFzQnhFLElBQUlXLFNBQUosQ0FBY3dCLFdBQWQsQ0FBMEJDLFFBSnRDO0FBS1ZxQywyQkFBbUJ6RSxJQUFJVyxTQUFKLENBQWN3QixXQUFkLENBQTBCZCxLQUxuQztBQU1WcUQsNEJBQW9CMUUsSUFBSThDLGFBQUosQ0FBa0JPLEtBQWxCLENBQXdCQyxJQUF4QixDQUE2QmxCLFFBTnZDO0FBT1Z1Qyw4QkFBc0IzRSxJQUFJOEMsYUFBSixDQUFrQk8sS0FBbEIsQ0FBd0JFLE1BQXhCLENBQStCbkIsUUFQM0M7QUFRVndDLDBCQUFrQjVFLElBQUk4QyxhQUFKLENBQWtCTyxLQUFsQixDQUF3QkUsTUFBeEIsQ0FBK0J0QixJQVJ2QztBQVNWNEMsK0JBQXVCN0UsSUFBSThDLGFBQUosQ0FBa0JPLEtBQWxCLENBQXdCSSxPQUF4QixDQUFnQ3JCO0FBVDdDLEtBQWQ7O0FBYUFwQyxRQUFJOEQsRUFBSixDQUFPZ0IsVUFBUCxHQUFvQixZQUFVOztBQUUxQixZQUFHOUUsSUFBSTZELGFBQUosSUFBcUJrQixPQUFPQyxnQkFBUCxHQUEwQixDQUFsRCxFQUFvRDtBQUNoRGhGLGdCQUFJSyxNQUFKLENBQVc0RSxPQUFYLEdBQXFCRixPQUFPQyxnQkFBNUI7QUFDQWhGLGdCQUFJaUUsR0FBSixDQUFRaUIsTUFBUixHQUFpQixJQUFqQjtBQUNILFNBSEQsTUFJSTtBQUNBbEYsZ0JBQUlLLE1BQUosQ0FBVzRFLE9BQVgsR0FBcUIsQ0FBckI7QUFDQWpGLGdCQUFJaUUsR0FBSixDQUFRaUIsTUFBUixHQUFpQixLQUFqQjtBQUNIOztBQUVEbEYsWUFBSUssTUFBSixDQUFXRSxDQUFYLEdBQWVQLElBQUlLLE1BQUosQ0FBV0MsRUFBWCxDQUFjRSxXQUFkLEdBQTRCUixJQUFJSyxNQUFKLENBQVc0RSxPQUF0RDtBQUNBakYsWUFBSUssTUFBSixDQUFXSSxDQUFYLEdBQWVULElBQUlLLE1BQUosQ0FBV0MsRUFBWCxDQUFjSSxZQUFkLEdBQTZCVixJQUFJSyxNQUFKLENBQVc0RSxPQUF2RDs7QUFFQWpGLFlBQUlXLFNBQUosQ0FBY3NCLElBQWQsQ0FBbUJwQixLQUFuQixHQUEyQmIsSUFBSWlFLEdBQUosQ0FBUUcsR0FBUixDQUFZQyxVQUFaLEdBQXlCckUsSUFBSUssTUFBSixDQUFXNEUsT0FBL0Q7QUFDQWpGLFlBQUlXLFNBQUosQ0FBY3NCLElBQWQsQ0FBbUJKLElBQW5CLENBQXdCQyxLQUF4QixHQUFnQzlCLElBQUlpRSxHQUFKLENBQVFHLEdBQVIsQ0FBWUUsZUFBWixHQUE4QnRFLElBQUlLLE1BQUosQ0FBVzRFLE9BQXpFO0FBQ0FqRixZQUFJVyxTQUFKLENBQWMwQixJQUFkLENBQW1CUCxLQUFuQixHQUEyQjlCLElBQUlpRSxHQUFKLENBQVFHLEdBQVIsQ0FBWUcsVUFBWixHQUF5QnZFLElBQUlLLE1BQUosQ0FBVzRFLE9BQS9EO0FBQ0FqRixZQUFJVyxTQUFKLENBQWN3QixXQUFkLENBQTBCQyxRQUExQixHQUFxQ3BDLElBQUlpRSxHQUFKLENBQVFHLEdBQVIsQ0FBWUksb0JBQVosR0FBbUN4RSxJQUFJSyxNQUFKLENBQVc0RSxPQUFuRjtBQUNBakYsWUFBSThDLGFBQUosQ0FBa0JPLEtBQWxCLENBQXdCQyxJQUF4QixDQUE2QmxCLFFBQTdCLEdBQXdDcEMsSUFBSWlFLEdBQUosQ0FBUUcsR0FBUixDQUFZTSxrQkFBWixHQUFpQzFFLElBQUlLLE1BQUosQ0FBVzRFLE9BQXBGO0FBQ0FqRixZQUFJOEMsYUFBSixDQUFrQk8sS0FBbEIsQ0FBd0JFLE1BQXhCLENBQStCbkIsUUFBL0IsR0FBMENwQyxJQUFJaUUsR0FBSixDQUFRRyxHQUFSLENBQVlPLG9CQUFaLEdBQW1DM0UsSUFBSUssTUFBSixDQUFXNEUsT0FBeEY7QUFDQWpGLFlBQUlXLFNBQUosQ0FBY3dCLFdBQWQsQ0FBMEJkLEtBQTFCLEdBQWtDckIsSUFBSWlFLEdBQUosQ0FBUUcsR0FBUixDQUFZSyxpQkFBWixHQUFnQ3pFLElBQUlLLE1BQUosQ0FBVzRFLE9BQTdFO0FBQ0FqRixZQUFJOEMsYUFBSixDQUFrQk8sS0FBbEIsQ0FBd0JFLE1BQXhCLENBQStCdEIsSUFBL0IsR0FBc0NqQyxJQUFJaUUsR0FBSixDQUFRRyxHQUFSLENBQVlRLGdCQUFaLEdBQStCNUUsSUFBSUssTUFBSixDQUFXNEUsT0FBaEY7QUFDQWpGLFlBQUk4QyxhQUFKLENBQWtCTyxLQUFsQixDQUF3QkksT0FBeEIsQ0FBZ0NyQixRQUFoQyxHQUEyQ3BDLElBQUlpRSxHQUFKLENBQVFHLEdBQVIsQ0FBWVMscUJBQVosR0FBb0M3RSxJQUFJSyxNQUFKLENBQVc0RSxPQUExRjtBQUVILEtBeEJEOztBQTRCQTs7QUFFQWpGLFFBQUk4RCxFQUFKLENBQU9xQixVQUFQLEdBQW9CLFlBQVU7QUFDMUJuRixZQUFJSyxNQUFKLENBQVcrRSxHQUFYLEdBQWlCcEYsSUFBSUssTUFBSixDQUFXQyxFQUFYLENBQWMrRSxVQUFkLENBQXlCLElBQXpCLENBQWpCO0FBQ0gsS0FGRDs7QUFJQXJGLFFBQUk4RCxFQUFKLENBQU93QixVQUFQLEdBQW9CLFlBQVU7O0FBRTFCdEYsWUFBSUssTUFBSixDQUFXQyxFQUFYLENBQWNlLEtBQWQsR0FBc0JyQixJQUFJSyxNQUFKLENBQVdFLENBQWpDO0FBQ0FQLFlBQUlLLE1BQUosQ0FBV0MsRUFBWCxDQUFjb0IsTUFBZCxHQUF1QjFCLElBQUlLLE1BQUosQ0FBV0ksQ0FBbEM7O0FBRUEsWUFBR1QsT0FBT0EsSUFBSThDLGFBQUosQ0FBa0JFLE1BQWxCLENBQXlCSSxNQUFuQyxFQUEwQzs7QUFFdEMyQixtQkFBT1EsZ0JBQVAsQ0FBd0IsUUFBeEIsRUFBa0MsWUFBVTs7QUFFeEN2RixvQkFBSUssTUFBSixDQUFXRSxDQUFYLEdBQWVQLElBQUlLLE1BQUosQ0FBV0MsRUFBWCxDQUFjRSxXQUE3QjtBQUNBUixvQkFBSUssTUFBSixDQUFXSSxDQUFYLEdBQWVULElBQUlLLE1BQUosQ0FBV0MsRUFBWCxDQUFjSSxZQUE3Qjs7QUFFQTtBQUNBLG9CQUFHVixJQUFJaUUsR0FBSixDQUFRaUIsTUFBWCxFQUFrQjtBQUNkbEYsd0JBQUlLLE1BQUosQ0FBV0UsQ0FBWCxJQUFnQlAsSUFBSUssTUFBSixDQUFXNEUsT0FBM0I7QUFDQWpGLHdCQUFJSyxNQUFKLENBQVdJLENBQVgsSUFBZ0JULElBQUlLLE1BQUosQ0FBVzRFLE9BQTNCO0FBQ0g7O0FBRURqRixvQkFBSUssTUFBSixDQUFXQyxFQUFYLENBQWNlLEtBQWQsR0FBc0JyQixJQUFJSyxNQUFKLENBQVdFLENBQWpDO0FBQ0FQLG9CQUFJSyxNQUFKLENBQVdDLEVBQVgsQ0FBY29CLE1BQWQsR0FBdUIxQixJQUFJSyxNQUFKLENBQVdJLENBQWxDOztBQUVBO0FBQ0Esb0JBQUcsQ0FBQ1QsSUFBSVcsU0FBSixDQUFjMEIsSUFBZCxDQUFtQnRCLE1BQXZCLEVBQThCO0FBQzFCZix3QkFBSThELEVBQUosQ0FBTzBCLGNBQVA7QUFDQXhGLHdCQUFJOEQsRUFBSixDQUFPMkIsZUFBUDtBQUNBekYsd0JBQUk4RCxFQUFKLENBQU80QixhQUFQO0FBQ0ExRix3QkFBSThELEVBQUosQ0FBT0UsT0FBUCxDQUFlMkIsb0JBQWY7QUFDSDs7QUFFRDtBQUNBM0Ysb0JBQUk4RCxFQUFKLENBQU9FLE9BQVAsQ0FBZTJCLG9CQUFmO0FBRUgsYUF6QkQ7QUEyQkg7QUFFSixLQXBDRDs7QUF1Q0EzRixRQUFJOEQsRUFBSixDQUFPOEIsV0FBUCxHQUFxQixZQUFVO0FBQzNCNUYsWUFBSUssTUFBSixDQUFXK0UsR0FBWCxDQUFlUyxRQUFmLENBQXdCLENBQXhCLEVBQTJCLENBQTNCLEVBQThCN0YsSUFBSUssTUFBSixDQUFXRSxDQUF6QyxFQUE0Q1AsSUFBSUssTUFBSixDQUFXSSxDQUF2RDtBQUNILEtBRkQ7O0FBSUFULFFBQUk4RCxFQUFKLENBQU9nQyxXQUFQLEdBQXFCLFlBQVU7QUFDM0I5RixZQUFJSyxNQUFKLENBQVcrRSxHQUFYLENBQWVXLFNBQWYsQ0FBeUIsQ0FBekIsRUFBNEIsQ0FBNUIsRUFBK0IvRixJQUFJSyxNQUFKLENBQVdFLENBQTFDLEVBQTZDUCxJQUFJSyxNQUFKLENBQVdJLENBQXhEO0FBQ0gsS0FGRDs7QUFLQTs7QUFFQVQsUUFBSThELEVBQUosQ0FBT2tDLFFBQVAsR0FBa0IsVUFBUy9FLEtBQVQsRUFBZ0JVLE9BQWhCLEVBQXlCc0UsUUFBekIsRUFBa0M7O0FBRWhEO0FBQ0EsYUFBS0MsTUFBTCxHQUFjLENBQUNsRyxJQUFJVyxTQUFKLENBQWNzQixJQUFkLENBQW1CTCxNQUFuQixHQUE0QnVFLEtBQUt2RSxNQUFMLEVBQTVCLEdBQTRDLENBQTdDLElBQWtENUIsSUFBSVcsU0FBSixDQUFjc0IsSUFBZCxDQUFtQnBCLEtBQW5GO0FBQ0EsWUFBR2IsSUFBSVcsU0FBSixDQUFjc0IsSUFBZCxDQUFtQkosSUFBbkIsQ0FBd0JkLE1BQTNCLEVBQWtDO0FBQzlCLGlCQUFLcUYsV0FBTCxHQUFtQixLQUFuQjtBQUNBLGlCQUFLQyxFQUFMLEdBQVVyRyxJQUFJVyxTQUFKLENBQWNzQixJQUFkLENBQW1CSixJQUFuQixDQUF3QkMsS0FBeEIsR0FBZ0MsR0FBMUM7QUFDQSxnQkFBRyxDQUFDOUIsSUFBSVcsU0FBSixDQUFjc0IsSUFBZCxDQUFtQkosSUFBbkIsQ0FBd0JHLElBQTVCLEVBQWlDO0FBQzdCLHFCQUFLcUUsRUFBTCxHQUFVLEtBQUtBLEVBQUwsR0FBVUYsS0FBS3ZFLE1BQUwsRUFBcEI7QUFDSDtBQUNKOztBQUVEO0FBQ0EsYUFBSzBFLENBQUwsR0FBU0wsV0FBV0EsU0FBU0ssQ0FBcEIsR0FBd0JILEtBQUt2RSxNQUFMLEtBQWdCNUIsSUFBSUssTUFBSixDQUFXRSxDQUE1RDtBQUNBLGFBQUtnRyxDQUFMLEdBQVNOLFdBQVdBLFNBQVNNLENBQXBCLEdBQXdCSixLQUFLdkUsTUFBTCxLQUFnQjVCLElBQUlLLE1BQUosQ0FBV0ksQ0FBNUQ7O0FBRUE7QUFDQSxZQUFHLEtBQUs2RixDQUFMLEdBQVN0RyxJQUFJSyxNQUFKLENBQVdFLENBQVgsR0FBZSxLQUFLMkYsTUFBTCxHQUFZLENBQXZDLEVBQTBDLEtBQUtJLENBQUwsR0FBUyxLQUFLQSxDQUFMLEdBQVMsS0FBS0osTUFBdkIsQ0FBMUMsS0FDSyxJQUFHLEtBQUtJLENBQUwsR0FBUyxLQUFLSixNQUFMLEdBQVksQ0FBeEIsRUFBMkIsS0FBS0ksQ0FBTCxHQUFTLEtBQUtBLENBQUwsR0FBUyxLQUFLSixNQUF2QjtBQUNoQyxZQUFHLEtBQUtLLENBQUwsR0FBU3ZHLElBQUlLLE1BQUosQ0FBV0ksQ0FBWCxHQUFlLEtBQUt5RixNQUFMLEdBQVksQ0FBdkMsRUFBMEMsS0FBS0ssQ0FBTCxHQUFTLEtBQUtBLENBQUwsR0FBUyxLQUFLTCxNQUF2QixDQUExQyxLQUNLLElBQUcsS0FBS0ssQ0FBTCxHQUFTLEtBQUtMLE1BQUwsR0FBWSxDQUF4QixFQUEyQixLQUFLSyxDQUFMLEdBQVMsS0FBS0EsQ0FBTCxHQUFTLEtBQUtMLE1BQXZCOztBQUVoQztBQUNBLFlBQUdsRyxJQUFJVyxTQUFKLENBQWMwQixJQUFkLENBQW1CSSxNQUF0QixFQUE2QjtBQUN6QnpDLGdCQUFJOEQsRUFBSixDQUFPRSxPQUFQLENBQWV3QyxZQUFmLENBQTRCLElBQTVCLEVBQWtDUCxRQUFsQztBQUNIOztBQUVEO0FBQ0EsYUFBS2hGLEtBQUwsR0FBYSxFQUFiO0FBQ0EsWUFBRyxRQUFPQSxNQUFNSixLQUFiLEtBQXVCLFFBQTFCLEVBQW1DOztBQUUvQixnQkFBR0ksTUFBTUosS0FBTixZQUF1QjRGLEtBQTFCLEVBQWdDO0FBQzVCLG9CQUFJQyxpQkFBaUJ6RixNQUFNSixLQUFOLENBQVlzRixLQUFLUSxLQUFMLENBQVdSLEtBQUt2RSxNQUFMLEtBQWdCNUIsSUFBSVcsU0FBSixDQUFjTSxLQUFkLENBQW9CSixLQUFwQixDQUEwQnJCLE1BQXJELENBQVosQ0FBckI7QUFDQSxxQkFBS3lCLEtBQUwsQ0FBVzJGLEdBQVgsR0FBaUJDLFNBQVNILGNBQVQsQ0FBakI7QUFDSCxhQUhELE1BR0s7QUFDRCxvQkFBR3pGLE1BQU1KLEtBQU4sQ0FBWWlHLENBQVosSUFBaUJDLFNBQWpCLElBQThCOUYsTUFBTUosS0FBTixDQUFZbUcsQ0FBWixJQUFpQkQsU0FBL0MsSUFBNEQ5RixNQUFNSixLQUFOLENBQVlvRyxDQUFaLElBQWlCRixTQUFoRixFQUEwRjtBQUN0Rix5QkFBSzlGLEtBQUwsQ0FBVzJGLEdBQVgsR0FBaUI7QUFDYkUsMkJBQUc3RixNQUFNSixLQUFOLENBQVlpRyxDQURGO0FBRWJFLDJCQUFHL0YsTUFBTUosS0FBTixDQUFZbUcsQ0FGRjtBQUdiQywyQkFBR2hHLE1BQU1KLEtBQU4sQ0FBWW9HO0FBSEYscUJBQWpCO0FBS0g7QUFDRCxvQkFBR2hHLE1BQU1KLEtBQU4sQ0FBWUosQ0FBWixJQUFpQnNHLFNBQWpCLElBQThCOUYsTUFBTUosS0FBTixDQUFZcUcsQ0FBWixJQUFpQkgsU0FBL0MsSUFBNEQ5RixNQUFNSixLQUFOLENBQVlzRyxDQUFaLElBQWlCSixTQUFoRixFQUEwRjtBQUN0Rix5QkFBSzlGLEtBQUwsQ0FBV21HLEdBQVgsR0FBaUI7QUFDYjNHLDJCQUFHUSxNQUFNSixLQUFOLENBQVlKLENBREY7QUFFYnlHLDJCQUFHakcsTUFBTUosS0FBTixDQUFZcUcsQ0FGRjtBQUdiQywyQkFBR2xHLE1BQU1KLEtBQU4sQ0FBWXNHO0FBSEYscUJBQWpCO0FBS0g7QUFDSjtBQUVKLFNBdEJELE1BdUJLLElBQUdsRyxNQUFNSixLQUFOLElBQWUsUUFBbEIsRUFBMkI7QUFDNUIsaUJBQUtJLEtBQUwsQ0FBVzJGLEdBQVgsR0FBaUI7QUFDYkUsbUJBQUlYLEtBQUtRLEtBQUwsQ0FBV1IsS0FBS3ZFLE1BQUwsTUFBaUIsTUFBTSxDQUFOLEdBQVUsQ0FBM0IsQ0FBWCxJQUE0QyxDQURuQztBQUVib0YsbUJBQUliLEtBQUtRLEtBQUwsQ0FBV1IsS0FBS3ZFLE1BQUwsTUFBaUIsTUFBTSxDQUFOLEdBQVUsQ0FBM0IsQ0FBWCxJQUE0QyxDQUZuQztBQUdicUYsbUJBQUlkLEtBQUtRLEtBQUwsQ0FBV1IsS0FBS3ZFLE1BQUwsTUFBaUIsTUFBTSxDQUFOLEdBQVUsQ0FBM0IsQ0FBWCxJQUE0QztBQUhuQyxhQUFqQjtBQUtILFNBTkksTUFPQSxJQUFHLE9BQU9YLE1BQU1KLEtBQWIsSUFBdUIsUUFBMUIsRUFBbUM7QUFDcEMsaUJBQUtJLEtBQUwsR0FBYUEsS0FBYjtBQUNBLGlCQUFLQSxLQUFMLENBQVcyRixHQUFYLEdBQWlCQyxTQUFTLEtBQUs1RixLQUFMLENBQVdKLEtBQXBCLENBQWpCO0FBQ0g7O0FBRUQ7QUFDQSxhQUFLYyxPQUFMLEdBQWUsQ0FBQzNCLElBQUlXLFNBQUosQ0FBY2dCLE9BQWQsQ0FBc0JDLE1BQXRCLEdBQStCdUUsS0FBS3ZFLE1BQUwsRUFBL0IsR0FBK0MsQ0FBaEQsSUFBcUQ1QixJQUFJVyxTQUFKLENBQWNnQixPQUFkLENBQXNCZCxLQUExRjtBQUNBLFlBQUdiLElBQUlXLFNBQUosQ0FBY2dCLE9BQWQsQ0FBc0JFLElBQXRCLENBQTJCZCxNQUE5QixFQUFxQztBQUNqQyxpQkFBS3NHLGNBQUwsR0FBc0IsS0FBdEI7QUFDQSxpQkFBS0MsRUFBTCxHQUFVdEgsSUFBSVcsU0FBSixDQUFjZ0IsT0FBZCxDQUFzQkUsSUFBdEIsQ0FBMkJDLEtBQTNCLEdBQW1DLEdBQTdDO0FBQ0EsZ0JBQUcsQ0FBQzlCLElBQUlXLFNBQUosQ0FBY2dCLE9BQWQsQ0FBc0JFLElBQXRCLENBQTJCRyxJQUEvQixFQUFvQztBQUNoQyxxQkFBS3NGLEVBQUwsR0FBVSxLQUFLQSxFQUFMLEdBQVVuQixLQUFLdkUsTUFBTCxFQUFwQjtBQUNIO0FBQ0o7O0FBRUQ7QUFDQSxZQUFJMkYsVUFBVSxFQUFkO0FBQ0EsZ0JBQU92SCxJQUFJVyxTQUFKLENBQWMwQixJQUFkLENBQW1CQyxTQUExQjtBQUNJLGlCQUFLLEtBQUw7QUFDSWlGLDBCQUFVLEVBQUVqQixHQUFFLENBQUosRUFBT0MsR0FBRSxDQUFDLENBQVYsRUFBVjtBQUNBO0FBQ0osaUJBQUssV0FBTDtBQUNJZ0IsMEJBQVUsRUFBRWpCLEdBQUUsR0FBSixFQUFTQyxHQUFFLENBQUMsR0FBWixFQUFWO0FBQ0E7QUFDSixpQkFBSyxPQUFMO0FBQ0lnQiwwQkFBVSxFQUFFakIsR0FBRSxDQUFKLEVBQU9DLEdBQUUsQ0FBQyxDQUFWLEVBQVY7QUFDQTtBQUNKLGlCQUFLLGNBQUw7QUFDSWdCLDBCQUFVLEVBQUVqQixHQUFFLEdBQUosRUFBU0MsR0FBRSxHQUFYLEVBQVY7QUFDQTtBQUNKLGlCQUFLLFFBQUw7QUFDSWdCLDBCQUFVLEVBQUVqQixHQUFFLENBQUosRUFBT0MsR0FBRSxDQUFULEVBQVY7QUFDQTtBQUNKLGlCQUFLLGFBQUw7QUFDSWdCLDBCQUFVLEVBQUVqQixHQUFFLENBQUMsR0FBTCxFQUFVQyxHQUFFLENBQVosRUFBVjtBQUNBO0FBQ0osaUJBQUssTUFBTDtBQUNJZ0IsMEJBQVUsRUFBRWpCLEdBQUUsQ0FBQyxDQUFMLEVBQVFDLEdBQUUsQ0FBVixFQUFWO0FBQ0E7QUFDSixpQkFBSyxVQUFMO0FBQ0lnQiwwQkFBVSxFQUFFakIsR0FBRSxDQUFDLEdBQUwsRUFBVUMsR0FBRSxDQUFDLEdBQWIsRUFBVjtBQUNBO0FBQ0o7QUFDSWdCLDBCQUFVLEVBQUVqQixHQUFFLENBQUosRUFBT0MsR0FBRSxDQUFULEVBQVY7QUFDQTtBQTNCUjs7QUE4QkEsWUFBR3ZHLElBQUlXLFNBQUosQ0FBYzBCLElBQWQsQ0FBbUJFLFFBQXRCLEVBQStCO0FBQzNCLGlCQUFLaUYsRUFBTCxHQUFVRCxRQUFRakIsQ0FBbEI7QUFDQSxpQkFBS21CLEVBQUwsR0FBVUYsUUFBUWhCLENBQWxCO0FBQ0EsZ0JBQUd2RyxJQUFJVyxTQUFKLENBQWMwQixJQUFkLENBQW1CVCxNQUF0QixFQUE2QjtBQUN6QixxQkFBSzRGLEVBQUwsR0FBVSxLQUFLQSxFQUFMLEdBQVdyQixLQUFLdkUsTUFBTCxFQUFyQjtBQUNBLHFCQUFLNkYsRUFBTCxHQUFVLEtBQUtBLEVBQUwsR0FBV3RCLEtBQUt2RSxNQUFMLEVBQXJCO0FBQ0g7QUFDSixTQVBELE1BT0s7QUFDRCxpQkFBSzRGLEVBQUwsR0FBVUQsUUFBUWpCLENBQVIsR0FBWUgsS0FBS3ZFLE1BQUwsRUFBWixHQUEwQixHQUFwQztBQUNBLGlCQUFLNkYsRUFBTCxHQUFVRixRQUFRaEIsQ0FBUixHQUFZSixLQUFLdkUsTUFBTCxFQUFaLEdBQTBCLEdBQXBDO0FBQ0g7O0FBRUQ7QUFDQTtBQUNBOztBQUVBLGFBQUs4RixJQUFMLEdBQVksS0FBS0YsRUFBakI7QUFDQSxhQUFLRyxJQUFMLEdBQVksS0FBS0YsRUFBakI7O0FBSUE7O0FBRUEsWUFBSUcsYUFBYTVILElBQUlXLFNBQUosQ0FBY08sS0FBZCxDQUFvQkMsSUFBckM7QUFDQSxZQUFHLFFBQU95RyxVQUFQLHlDQUFPQSxVQUFQLE1BQXNCLFFBQXpCLEVBQWtDO0FBQzlCLGdCQUFHQSxzQkFBc0JuQixLQUF6QixFQUErQjtBQUMzQixvQkFBSW9CLGlCQUFpQkQsV0FBV3pCLEtBQUtRLEtBQUwsQ0FBV1IsS0FBS3ZFLE1BQUwsS0FBZ0JnRyxXQUFXcEksTUFBdEMsQ0FBWCxDQUFyQjtBQUNBLHFCQUFLMEIsS0FBTCxHQUFhMkcsY0FBYjtBQUNIO0FBQ0osU0FMRCxNQUtLO0FBQ0QsaUJBQUszRyxLQUFMLEdBQWEwRyxVQUFiO0FBQ0g7O0FBRUQsWUFBRyxLQUFLMUcsS0FBTCxJQUFjLE9BQWpCLEVBQXlCO0FBQ3JCLGdCQUFJNEcsS0FBSzlILElBQUlXLFNBQUosQ0FBY08sS0FBdkI7QUFDQSxpQkFBSzZHLEdBQUwsR0FBVztBQUNQdEcscUJBQUtxRyxHQUFHdEcsS0FBSCxDQUFTQyxHQURQO0FBRVB1Ryx1QkFBT0YsR0FBR3RHLEtBQUgsQ0FBU0gsS0FBVCxHQUFpQnlHLEdBQUd0RyxLQUFILENBQVNFO0FBRjFCLGFBQVg7QUFJQSxnQkFBRyxDQUFDLEtBQUtxRyxHQUFMLENBQVNDLEtBQWIsRUFBb0IsS0FBS0QsR0FBTCxDQUFTQyxLQUFULEdBQWlCLENBQWpCO0FBQ3BCLGdCQUFHaEksSUFBSWlFLEdBQUosQ0FBUWdFLFFBQVIsSUFBb0IsS0FBcEIsSUFBNkJqSSxJQUFJaUUsR0FBSixDQUFRaUUsVUFBUixJQUFzQm5CLFNBQXRELEVBQWdFO0FBQzVEL0csb0JBQUk4RCxFQUFKLENBQU9FLE9BQVAsQ0FBZW1FLFlBQWYsQ0FBNEIsSUFBNUI7QUFDQSxvQkFBR25JLElBQUlpRSxHQUFKLENBQVFtRSxPQUFYLEVBQW1CO0FBQ2YseUJBQUtMLEdBQUwsQ0FBU00sTUFBVCxHQUFrQixLQUFsQjtBQUNIO0FBQ0o7QUFDSjtBQUlKLEtBNUpEOztBQStKQXJJLFFBQUk4RCxFQUFKLENBQU9rQyxRQUFQLENBQWdCc0MsU0FBaEIsQ0FBMEJDLElBQTFCLEdBQWlDLFlBQVc7O0FBRXhDLFlBQUlDLElBQUksSUFBUjs7QUFFQSxZQUFHQSxFQUFFQyxhQUFGLElBQW1CMUIsU0FBdEIsRUFBZ0M7QUFDNUIsZ0JBQUliLFNBQVNzQyxFQUFFQyxhQUFmO0FBQ0gsU0FGRCxNQUVLO0FBQ0QsZ0JBQUl2QyxTQUFTc0MsRUFBRXRDLE1BQWY7QUFDSDs7QUFFRCxZQUFHc0MsRUFBRUUsY0FBRixJQUFvQjNCLFNBQXZCLEVBQWlDO0FBQzdCLGdCQUFJcEYsVUFBVTZHLEVBQUVFLGNBQWhCO0FBQ0gsU0FGRCxNQUVLO0FBQ0QsZ0JBQUkvRyxVQUFVNkcsRUFBRTdHLE9BQWhCO0FBQ0g7O0FBRUQsWUFBRzZHLEVBQUV2SCxLQUFGLENBQVEyRixHQUFYLEVBQWU7QUFDWCxnQkFBSStCLGNBQWMsVUFBUUgsRUFBRXZILEtBQUYsQ0FBUTJGLEdBQVIsQ0FBWUUsQ0FBcEIsR0FBc0IsR0FBdEIsR0FBMEIwQixFQUFFdkgsS0FBRixDQUFRMkYsR0FBUixDQUFZSSxDQUF0QyxHQUF3QyxHQUF4QyxHQUE0Q3dCLEVBQUV2SCxLQUFGLENBQVEyRixHQUFSLENBQVlLLENBQXhELEdBQTBELEdBQTFELEdBQThEdEYsT0FBOUQsR0FBc0UsR0FBeEY7QUFDSCxTQUZELE1BRUs7QUFDRCxnQkFBSWdILGNBQWMsVUFBUUgsRUFBRXZILEtBQUYsQ0FBUW1HLEdBQVIsQ0FBWTNHLENBQXBCLEdBQXNCLEdBQXRCLEdBQTBCK0gsRUFBRXZILEtBQUYsQ0FBUW1HLEdBQVIsQ0FBWUYsQ0FBdEMsR0FBd0MsSUFBeEMsR0FBNkNzQixFQUFFdkgsS0FBRixDQUFRbUcsR0FBUixDQUFZRCxDQUF6RCxHQUEyRCxJQUEzRCxHQUFnRXhGLE9BQWhFLEdBQXdFLEdBQTFGO0FBQ0g7O0FBRUQzQixZQUFJSyxNQUFKLENBQVcrRSxHQUFYLENBQWV3RCxTQUFmLEdBQTJCRCxXQUEzQjtBQUNBM0ksWUFBSUssTUFBSixDQUFXK0UsR0FBWCxDQUFleUQsU0FBZjs7QUFFQSxnQkFBT0wsRUFBRXRILEtBQVQ7O0FBRUksaUJBQUssUUFBTDtBQUNJbEIsb0JBQUlLLE1BQUosQ0FBVytFLEdBQVgsQ0FBZTBELEdBQWYsQ0FBbUJOLEVBQUVsQyxDQUFyQixFQUF3QmtDLEVBQUVqQyxDQUExQixFQUE2QkwsTUFBN0IsRUFBcUMsQ0FBckMsRUFBd0NDLEtBQUs0QyxFQUFMLEdBQVUsQ0FBbEQsRUFBcUQsS0FBckQ7QUFDQTs7QUFFSixpQkFBSyxNQUFMO0FBQ0kvSSxvQkFBSUssTUFBSixDQUFXK0UsR0FBWCxDQUFlNEQsSUFBZixDQUFvQlIsRUFBRWxDLENBQUYsR0FBSUosTUFBeEIsRUFBZ0NzQyxFQUFFakMsQ0FBRixHQUFJTCxNQUFwQyxFQUE0Q0EsU0FBTyxDQUFuRCxFQUFzREEsU0FBTyxDQUE3RDtBQUNBOztBQUVKLGlCQUFLLFVBQUw7QUFDSWxHLG9CQUFJOEQsRUFBSixDQUFPRSxPQUFQLENBQWVpRixTQUFmLENBQXlCakosSUFBSUssTUFBSixDQUFXK0UsR0FBcEMsRUFBeUNvRCxFQUFFbEMsQ0FBRixHQUFJSixNQUE3QyxFQUFxRHNDLEVBQUVqQyxDQUFGLEdBQUlMLFNBQVMsSUFBbEUsRUFBd0VBLFNBQU8sQ0FBL0UsRUFBa0YsQ0FBbEYsRUFBcUYsQ0FBckY7QUFDQTs7QUFFSixpQkFBSyxTQUFMO0FBQ0lsRyxvQkFBSThELEVBQUosQ0FBT0UsT0FBUCxDQUFlaUYsU0FBZixDQUNJakosSUFBSUssTUFBSixDQUFXK0UsR0FEZixFQUVJb0QsRUFBRWxDLENBQUYsR0FBTUosVUFBVWxHLElBQUlXLFNBQUosQ0FBY08sS0FBZCxDQUFvQkksT0FBcEIsQ0FBNEJDLFFBQTVCLEdBQXFDLEdBQS9DLENBRlYsRUFFK0Q7QUFDM0RpSCxrQkFBRWpDLENBQUYsR0FBTUwsVUFBVSxPQUFLLEdBQWYsQ0FIVixFQUcrQjtBQUMzQkEseUJBQU8sSUFBUCxJQUFlbEcsSUFBSVcsU0FBSixDQUFjTyxLQUFkLENBQW9CSSxPQUFwQixDQUE0QkMsUUFBNUIsR0FBcUMsQ0FBcEQsQ0FKSixFQUk0RDtBQUN4RHZCLG9CQUFJVyxTQUFKLENBQWNPLEtBQWQsQ0FBb0JJLE9BQXBCLENBQTRCQyxRQUxoQyxFQUswQztBQUN0QyxpQkFOSixDQU1NO0FBTk47QUFRQTs7QUFFSixpQkFBSyxNQUFMO0FBQ0l2QixvQkFBSThELEVBQUosQ0FBT0UsT0FBUCxDQUFlaUYsU0FBZixDQUNJakosSUFBSUssTUFBSixDQUFXK0UsR0FEZixFQUVJb0QsRUFBRWxDLENBQUYsR0FBTUosU0FBTyxDQUFQLElBQVlsRyxJQUFJVyxTQUFKLENBQWNPLEtBQWQsQ0FBb0JJLE9BQXBCLENBQTRCQyxRQUE1QixHQUFxQyxDQUFqRCxDQUZWLEVBRStEO0FBQzNEaUgsa0JBQUVqQyxDQUFGLEdBQU1MLFVBQVUsSUFBRSxJQUFGLEdBQU8sR0FBakIsQ0FIVixFQUdpQztBQUM3QkEseUJBQU8sQ0FBUCxHQUFTLElBQVQsSUFBaUJsRyxJQUFJVyxTQUFKLENBQWNPLEtBQWQsQ0FBb0JJLE9BQXBCLENBQTRCQyxRQUE1QixHQUFxQyxDQUF0RCxDQUpKLEVBSThEO0FBQzFEdkIsb0JBQUlXLFNBQUosQ0FBY08sS0FBZCxDQUFvQkksT0FBcEIsQ0FBNEJDLFFBTGhDLEVBSzBDO0FBQ3RDLGlCQU5KLENBTU07QUFOTjtBQVFBOztBQUVKLGlCQUFLLE9BQUw7QUFBQSxvQkFFU2dILElBRlQsR0FFQSxTQUFTQSxJQUFULEdBQWU7QUFDWHZJLHdCQUFJSyxNQUFKLENBQVcrRSxHQUFYLENBQWU4RCxTQUFmLENBQ0lDLE9BREosRUFFSVgsRUFBRWxDLENBQUYsR0FBSUosTUFGUixFQUdJc0MsRUFBRWpDLENBQUYsR0FBSUwsTUFIUixFQUlJQSxTQUFPLENBSlgsRUFLSUEsU0FBTyxDQUFQLEdBQVdzQyxFQUFFVCxHQUFGLENBQU1DLEtBTHJCO0FBT0gsaUJBVkQ7O0FBWUksb0JBQUdoSSxJQUFJaUUsR0FBSixDQUFRZ0UsUUFBUixJQUFvQixLQUF2QixFQUE2QjtBQUN6Qix3QkFBSWtCLFVBQVVYLEVBQUVULEdBQUYsQ0FBTTNELEdBQXBCO0FBQ0gsaUJBRkQsTUFFSztBQUNELHdCQUFJK0UsVUFBVW5KLElBQUlpRSxHQUFKLENBQVFrRixPQUF0QjtBQUNIOztBQUVELG9CQUFHQSxPQUFILEVBQVc7QUFDUFo7QUFDSDs7QUFFRDs7QUExRFI7O0FBOERBdkksWUFBSUssTUFBSixDQUFXK0UsR0FBWCxDQUFlZ0UsU0FBZjs7QUFFQSxZQUFHcEosSUFBSVcsU0FBSixDQUFjTyxLQUFkLENBQW9CRSxNQUFwQixDQUEyQkMsS0FBM0IsR0FBbUMsQ0FBdEMsRUFBd0M7QUFDcENyQixnQkFBSUssTUFBSixDQUFXK0UsR0FBWCxDQUFlaUUsV0FBZixHQUE2QnJKLElBQUlXLFNBQUosQ0FBY08sS0FBZCxDQUFvQkUsTUFBcEIsQ0FBMkJILEtBQXhEO0FBQ0FqQixnQkFBSUssTUFBSixDQUFXK0UsR0FBWCxDQUFla0UsU0FBZixHQUEyQnRKLElBQUlXLFNBQUosQ0FBY08sS0FBZCxDQUFvQkUsTUFBcEIsQ0FBMkJDLEtBQXREO0FBQ0FyQixnQkFBSUssTUFBSixDQUFXK0UsR0FBWCxDQUFlaEUsTUFBZjtBQUNIOztBQUVEcEIsWUFBSUssTUFBSixDQUFXK0UsR0FBWCxDQUFlbUUsSUFBZjtBQUVILEtBakdEOztBQW9HQXZKLFFBQUk4RCxFQUFKLENBQU8yQixlQUFQLEdBQXlCLFlBQVU7QUFDL0IsYUFBSSxJQUFJK0QsSUFBSSxDQUFaLEVBQWVBLElBQUl4SixJQUFJVyxTQUFKLENBQWNDLE1BQWQsQ0FBcUJDLEtBQXhDLEVBQStDMkksR0FBL0MsRUFBb0Q7QUFDaER4SixnQkFBSVcsU0FBSixDQUFja0MsS0FBZCxDQUFvQnRELElBQXBCLENBQXlCLElBQUlTLElBQUk4RCxFQUFKLENBQU9rQyxRQUFYLENBQW9CaEcsSUFBSVcsU0FBSixDQUFjTSxLQUFsQyxFQUF5Q2pCLElBQUlXLFNBQUosQ0FBY2dCLE9BQWQsQ0FBc0JkLEtBQS9ELENBQXpCO0FBQ0g7QUFDSixLQUpEOztBQU1BYixRQUFJOEQsRUFBSixDQUFPMkYsZUFBUCxHQUF5QixZQUFVOztBQUUvQixhQUFJLElBQUlELElBQUksQ0FBWixFQUFlQSxJQUFJeEosSUFBSVcsU0FBSixDQUFja0MsS0FBZCxDQUFvQnJELE1BQXZDLEVBQStDZ0ssR0FBL0MsRUFBbUQ7O0FBRS9DO0FBQ0EsZ0JBQUloQixJQUFJeEksSUFBSVcsU0FBSixDQUFja0MsS0FBZCxDQUFvQjJHLENBQXBCLENBQVI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxnQkFBR3hKLElBQUlXLFNBQUosQ0FBYzBCLElBQWQsQ0FBbUJ0QixNQUF0QixFQUE2QjtBQUN6QixvQkFBSTJJLEtBQUsxSixJQUFJVyxTQUFKLENBQWMwQixJQUFkLENBQW1CUCxLQUFuQixHQUF5QixDQUFsQztBQUNBMEcsa0JBQUVsQyxDQUFGLElBQU9rQyxFQUFFaEIsRUFBRixHQUFPa0MsRUFBZDtBQUNBbEIsa0JBQUVqQyxDQUFGLElBQU9pQyxFQUFFZixFQUFGLEdBQU9pQyxFQUFkO0FBQ0g7O0FBRUQ7QUFDQSxnQkFBRzFKLElBQUlXLFNBQUosQ0FBY2dCLE9BQWQsQ0FBc0JFLElBQXRCLENBQTJCZCxNQUE5QixFQUFzQztBQUNsQyxvQkFBR3lILEVBQUVuQixjQUFGLElBQW9CLElBQXZCLEVBQTZCO0FBQ3pCLHdCQUFHbUIsRUFBRTdHLE9BQUYsSUFBYTNCLElBQUlXLFNBQUosQ0FBY2dCLE9BQWQsQ0FBc0JkLEtBQXRDLEVBQTZDMkgsRUFBRW5CLGNBQUYsR0FBbUIsS0FBbkI7QUFDN0NtQixzQkFBRTdHLE9BQUYsSUFBYTZHLEVBQUVsQixFQUFmO0FBQ0gsaUJBSEQsTUFHTTtBQUNGLHdCQUFHa0IsRUFBRTdHLE9BQUYsSUFBYTNCLElBQUlXLFNBQUosQ0FBY2dCLE9BQWQsQ0FBc0JFLElBQXRCLENBQTJCRSxXQUEzQyxFQUF3RHlHLEVBQUVuQixjQUFGLEdBQW1CLElBQW5CO0FBQ3hEbUIsc0JBQUU3RyxPQUFGLElBQWE2RyxFQUFFbEIsRUFBZjtBQUNIO0FBQ0Qsb0JBQUdrQixFQUFFN0csT0FBRixHQUFZLENBQWYsRUFBa0I2RyxFQUFFN0csT0FBRixHQUFZLENBQVo7QUFDckI7O0FBRUQ7QUFDQSxnQkFBRzNCLElBQUlXLFNBQUosQ0FBY3NCLElBQWQsQ0FBbUJKLElBQW5CLENBQXdCZCxNQUEzQixFQUFrQztBQUM5QixvQkFBR3lILEVBQUVwQyxXQUFGLElBQWlCLElBQXBCLEVBQXlCO0FBQ3JCLHdCQUFHb0MsRUFBRXRDLE1BQUYsSUFBWWxHLElBQUlXLFNBQUosQ0FBY3NCLElBQWQsQ0FBbUJwQixLQUFsQyxFQUF5QzJILEVBQUVwQyxXQUFGLEdBQWdCLEtBQWhCO0FBQ3pDb0Msc0JBQUV0QyxNQUFGLElBQVlzQyxFQUFFbkMsRUFBZDtBQUNILGlCQUhELE1BR0s7QUFDRCx3QkFBR21DLEVBQUV0QyxNQUFGLElBQVlsRyxJQUFJVyxTQUFKLENBQWNzQixJQUFkLENBQW1CSixJQUFuQixDQUF3QkssUUFBdkMsRUFBaURzRyxFQUFFcEMsV0FBRixHQUFnQixJQUFoQjtBQUNqRG9DLHNCQUFFdEMsTUFBRixJQUFZc0MsRUFBRW5DLEVBQWQ7QUFDSDtBQUNELG9CQUFHbUMsRUFBRXRDLE1BQUYsR0FBVyxDQUFkLEVBQWlCc0MsRUFBRXRDLE1BQUYsR0FBVyxDQUFYO0FBQ3BCOztBQUVEO0FBQ0EsZ0JBQUdsRyxJQUFJVyxTQUFKLENBQWMwQixJQUFkLENBQW1CRyxRQUFuQixJQUErQixRQUFsQyxFQUEyQztBQUN2QyxvQkFBSW1ILFVBQVU7QUFDVkMsNEJBQVFwQixFQUFFdEMsTUFEQTtBQUVWMkQsNkJBQVU3SixJQUFJSyxNQUFKLENBQVdFLENBRlg7QUFHVnVKLDJCQUFPdEIsRUFBRXRDLE1BSEM7QUFJVjZELDhCQUFVL0osSUFBSUssTUFBSixDQUFXSTtBQUpYLGlCQUFkO0FBTUgsYUFQRCxNQU9LO0FBQ0Qsb0JBQUlrSixVQUFVO0FBQ1ZDLDRCQUFRLENBQUNwQixFQUFFdEMsTUFERDtBQUVWMkQsNkJBQVM3SixJQUFJSyxNQUFKLENBQVdFLENBQVgsR0FBZWlJLEVBQUV0QyxNQUZoQjtBQUdWNEQsMkJBQU8sQ0FBQ3RCLEVBQUV0QyxNQUhBO0FBSVY2RCw4QkFBVS9KLElBQUlLLE1BQUosQ0FBV0ksQ0FBWCxHQUFlK0gsRUFBRXRDO0FBSmpCLGlCQUFkO0FBTUg7O0FBRUQsZ0JBQUdzQyxFQUFFbEMsQ0FBRixHQUFNa0MsRUFBRXRDLE1BQVIsR0FBaUJsRyxJQUFJSyxNQUFKLENBQVdFLENBQS9CLEVBQWlDO0FBQzdCaUksa0JBQUVsQyxDQUFGLEdBQU1xRCxRQUFRQyxNQUFkO0FBQ0FwQixrQkFBRWpDLENBQUYsR0FBTUosS0FBS3ZFLE1BQUwsS0FBZ0I1QixJQUFJSyxNQUFKLENBQVdJLENBQWpDO0FBQ0gsYUFIRCxNQUlLLElBQUcrSCxFQUFFbEMsQ0FBRixHQUFNa0MsRUFBRXRDLE1BQVIsR0FBaUIsQ0FBcEIsRUFBc0I7QUFDdkJzQyxrQkFBRWxDLENBQUYsR0FBTXFELFFBQVFFLE9BQWQ7QUFDQXJCLGtCQUFFakMsQ0FBRixHQUFNSixLQUFLdkUsTUFBTCxLQUFnQjVCLElBQUlLLE1BQUosQ0FBV0ksQ0FBakM7QUFDSDtBQUNELGdCQUFHK0gsRUFBRWpDLENBQUYsR0FBTWlDLEVBQUV0QyxNQUFSLEdBQWlCbEcsSUFBSUssTUFBSixDQUFXSSxDQUEvQixFQUFpQztBQUM3QitILGtCQUFFakMsQ0FBRixHQUFNb0QsUUFBUUcsS0FBZDtBQUNBdEIsa0JBQUVsQyxDQUFGLEdBQU1ILEtBQUt2RSxNQUFMLEtBQWdCNUIsSUFBSUssTUFBSixDQUFXRSxDQUFqQztBQUNILGFBSEQsTUFJSyxJQUFHaUksRUFBRWpDLENBQUYsR0FBTWlDLEVBQUV0QyxNQUFSLEdBQWlCLENBQXBCLEVBQXNCO0FBQ3ZCc0Msa0JBQUVqQyxDQUFGLEdBQU1vRCxRQUFRSSxRQUFkO0FBQ0F2QixrQkFBRWxDLENBQUYsR0FBTUgsS0FBS3ZFLE1BQUwsS0FBZ0I1QixJQUFJSyxNQUFKLENBQVdFLENBQWpDO0FBQ0g7O0FBRUQ7QUFDQSxvQkFBT1AsSUFBSVcsU0FBSixDQUFjMEIsSUFBZCxDQUFtQkcsUUFBMUI7QUFDSSxxQkFBSyxRQUFMO0FBQ0ksd0JBQUlnRyxFQUFFbEMsQ0FBRixHQUFNa0MsRUFBRXRDLE1BQVIsR0FBaUJsRyxJQUFJSyxNQUFKLENBQVdFLENBQWhDLEVBQW1DaUksRUFBRWhCLEVBQUYsR0FBTyxDQUFDZ0IsRUFBRWhCLEVBQVYsQ0FBbkMsS0FDSyxJQUFJZ0IsRUFBRWxDLENBQUYsR0FBTWtDLEVBQUV0QyxNQUFSLEdBQWlCLENBQXJCLEVBQXdCc0MsRUFBRWhCLEVBQUYsR0FBTyxDQUFDZ0IsRUFBRWhCLEVBQVY7QUFDN0Isd0JBQUlnQixFQUFFakMsQ0FBRixHQUFNaUMsRUFBRXRDLE1BQVIsR0FBaUJsRyxJQUFJSyxNQUFKLENBQVdJLENBQWhDLEVBQW1DK0gsRUFBRWYsRUFBRixHQUFPLENBQUNlLEVBQUVmLEVBQVYsQ0FBbkMsS0FDSyxJQUFJZSxFQUFFakMsQ0FBRixHQUFNaUMsRUFBRXRDLE1BQVIsR0FBaUIsQ0FBckIsRUFBd0JzQyxFQUFFZixFQUFGLEdBQU8sQ0FBQ2UsRUFBRWYsRUFBVjtBQUM3QjtBQU5SOztBQVNBO0FBQ0EsZ0JBQUd1QyxVQUFVLE1BQVYsRUFBa0JoSyxJQUFJOEMsYUFBSixDQUFrQkUsTUFBbEIsQ0FBeUJDLE9BQXpCLENBQWlDQyxJQUFuRCxDQUFILEVBQTREO0FBQ3hEbEQsb0JBQUk4RCxFQUFKLENBQU9ULEtBQVAsQ0FBYTRHLFlBQWIsQ0FBMEJ6QixDQUExQjtBQUNIOztBQUVELGdCQUFHd0IsVUFBVSxRQUFWLEVBQW9CaEssSUFBSThDLGFBQUosQ0FBa0JFLE1BQWxCLENBQXlCQyxPQUF6QixDQUFpQ0MsSUFBckQsS0FBOEQ4RyxVQUFVLFFBQVYsRUFBb0JoSyxJQUFJOEMsYUFBSixDQUFrQkUsTUFBbEIsQ0FBeUJHLE9BQXpCLENBQWlDRCxJQUFyRCxDQUFqRSxFQUE0SDtBQUN4SGxELG9CQUFJOEQsRUFBSixDQUFPVCxLQUFQLENBQWE2RyxjQUFiLENBQTRCMUIsQ0FBNUI7QUFDSDs7QUFFRCxnQkFBR3dCLFVBQVUsU0FBVixFQUFxQmhLLElBQUk4QyxhQUFKLENBQWtCRSxNQUFsQixDQUF5QkMsT0FBekIsQ0FBaUNDLElBQXRELEtBQStEOEcsVUFBVSxTQUFWLEVBQXFCaEssSUFBSThDLGFBQUosQ0FBa0JFLE1BQWxCLENBQXlCRyxPQUF6QixDQUFpQ0QsSUFBdEQsQ0FBbEUsRUFBOEg7QUFDMUhsRCxvQkFBSThELEVBQUosQ0FBT1QsS0FBUCxDQUFhOEcsZUFBYixDQUE2QjNCLENBQTdCO0FBQ0g7O0FBRUQ7QUFDQSxnQkFBR3hJLElBQUlXLFNBQUosQ0FBY3dCLFdBQWQsQ0FBMEJwQixNQUExQixJQUFvQ2YsSUFBSVcsU0FBSixDQUFjMEIsSUFBZCxDQUFtQkssT0FBbkIsQ0FBMkIzQixNQUFsRSxFQUF5RTtBQUNyRSxxQkFBSSxJQUFJcUosSUFBSVosSUFBSSxDQUFoQixFQUFtQlksSUFBSXBLLElBQUlXLFNBQUosQ0FBY2tDLEtBQWQsQ0FBb0JyRCxNQUEzQyxFQUFtRDRLLEdBQW5ELEVBQXVEO0FBQ25ELHdCQUFJQyxLQUFLckssSUFBSVcsU0FBSixDQUFja0MsS0FBZCxDQUFvQnVILENBQXBCLENBQVQ7O0FBRUE7QUFDQSx3QkFBR3BLLElBQUlXLFNBQUosQ0FBY3dCLFdBQWQsQ0FBMEJwQixNQUE3QixFQUFvQztBQUNoQ2YsNEJBQUk4RCxFQUFKLENBQU9DLFFBQVAsQ0FBZ0J1RyxhQUFoQixDQUE4QjlCLENBQTlCLEVBQWdDNkIsRUFBaEM7QUFDSDs7QUFFRDtBQUNBLHdCQUFHckssSUFBSVcsU0FBSixDQUFjMEIsSUFBZCxDQUFtQkssT0FBbkIsQ0FBMkIzQixNQUE5QixFQUFxQztBQUNqQ2YsNEJBQUk4RCxFQUFKLENBQU9DLFFBQVAsQ0FBZ0J3RyxnQkFBaEIsQ0FBaUMvQixDQUFqQyxFQUFtQzZCLEVBQW5DO0FBQ0g7O0FBRUQ7QUFDQSx3QkFBR3JLLElBQUlXLFNBQUosQ0FBYzBCLElBQWQsQ0FBbUJJLE1BQXRCLEVBQTZCO0FBQ3pCekMsNEJBQUk4RCxFQUFKLENBQU9DLFFBQVAsQ0FBZ0J5RyxlQUFoQixDQUFnQ2hDLENBQWhDLEVBQWtDNkIsRUFBbEM7QUFDSDtBQUVKO0FBQ0o7QUFHSjtBQUVKLEtBaklEOztBQW1JQXJLLFFBQUk4RCxFQUFKLENBQU80QixhQUFQLEdBQXVCLFlBQVU7O0FBRTdCO0FBQ0ExRixZQUFJSyxNQUFKLENBQVcrRSxHQUFYLENBQWVXLFNBQWYsQ0FBeUIsQ0FBekIsRUFBNEIsQ0FBNUIsRUFBK0IvRixJQUFJSyxNQUFKLENBQVdFLENBQTFDLEVBQTZDUCxJQUFJSyxNQUFKLENBQVdJLENBQXhEOztBQUVBO0FBQ0FULFlBQUk4RCxFQUFKLENBQU8yRixlQUFQOztBQUVBO0FBQ0EsYUFBSSxJQUFJRCxJQUFJLENBQVosRUFBZUEsSUFBSXhKLElBQUlXLFNBQUosQ0FBY2tDLEtBQWQsQ0FBb0JyRCxNQUF2QyxFQUErQ2dLLEdBQS9DLEVBQW1EO0FBQy9DLGdCQUFJaEIsSUFBSXhJLElBQUlXLFNBQUosQ0FBY2tDLEtBQWQsQ0FBb0IyRyxDQUFwQixDQUFSO0FBQ0FoQixjQUFFRCxJQUFGO0FBQ0g7QUFFSixLQWREOztBQWdCQXZJLFFBQUk4RCxFQUFKLENBQU8wQixjQUFQLEdBQXdCLFlBQVU7QUFDOUJ4RixZQUFJVyxTQUFKLENBQWNrQyxLQUFkLEdBQXNCLEVBQXRCO0FBQ0gsS0FGRDs7QUFJQTdDLFFBQUk4RCxFQUFKLENBQU8yRyxnQkFBUCxHQUEwQixZQUFVOztBQUVoQztBQUNBQywrQkFBdUIxSyxJQUFJOEQsRUFBSixDQUFPNkcsY0FBOUI7QUFDQUQsK0JBQXVCMUssSUFBSThELEVBQUosQ0FBTzhHLGFBQTlCO0FBQ0E1SyxZQUFJaUUsR0FBSixDQUFRaUUsVUFBUixHQUFxQm5CLFNBQXJCO0FBQ0EvRyxZQUFJaUUsR0FBSixDQUFRa0YsT0FBUixHQUFrQnBDLFNBQWxCO0FBQ0EvRyxZQUFJaUUsR0FBSixDQUFRNEcsU0FBUixHQUFvQixDQUFwQjtBQUNBN0ssWUFBSThELEVBQUosQ0FBTzBCLGNBQVA7QUFDQXhGLFlBQUk4RCxFQUFKLENBQU9nQyxXQUFQOztBQUVBO0FBQ0E5RixZQUFJOEQsRUFBSixDQUFPRSxPQUFQLENBQWU4RyxLQUFmO0FBRUgsS0FkRDs7QUFpQkE7O0FBRUE5SyxRQUFJOEQsRUFBSixDQUFPQyxRQUFQLENBQWdCdUcsYUFBaEIsR0FBZ0MsVUFBU1MsRUFBVCxFQUFhVixFQUFiLEVBQWdCOztBQUU1QyxZQUFJVyxLQUFLRCxHQUFHekUsQ0FBSCxHQUFPK0QsR0FBRy9ELENBQW5CO0FBQUEsWUFDSTJFLEtBQUtGLEdBQUd4RSxDQUFILEdBQU84RCxHQUFHOUQsQ0FEbkI7QUFBQSxZQUVJMkUsT0FBTy9FLEtBQUtnRixJQUFMLENBQVVILEtBQUdBLEVBQUgsR0FBUUMsS0FBR0EsRUFBckIsQ0FGWDs7QUFJQTtBQUNBLFlBQUdDLFFBQVFsTCxJQUFJVyxTQUFKLENBQWN3QixXQUFkLENBQTBCQyxRQUFyQyxFQUE4Qzs7QUFFMUMsZ0JBQUlnSixlQUFlcEwsSUFBSVcsU0FBSixDQUFjd0IsV0FBZCxDQUEwQlIsT0FBMUIsR0FBcUN1SixRQUFRLElBQUVsTCxJQUFJVyxTQUFKLENBQWN3QixXQUFkLENBQTBCUixPQUFwQyxDQUFELEdBQWlEM0IsSUFBSVcsU0FBSixDQUFjd0IsV0FBZCxDQUEwQkMsUUFBbEk7O0FBRUEsZ0JBQUdnSixlQUFlLENBQWxCLEVBQW9COztBQUVoQjtBQUNBLG9CQUFJQyxhQUFhckwsSUFBSVcsU0FBSixDQUFjd0IsV0FBZCxDQUEwQm1KLGNBQTNDO0FBQ0F0TCxvQkFBSUssTUFBSixDQUFXK0UsR0FBWCxDQUFlaUUsV0FBZixHQUE2QixVQUFRZ0MsV0FBV3ZFLENBQW5CLEdBQXFCLEdBQXJCLEdBQXlCdUUsV0FBV3JFLENBQXBDLEdBQXNDLEdBQXRDLEdBQTBDcUUsV0FBV3BFLENBQXJELEdBQXVELEdBQXZELEdBQTJEbUUsWUFBM0QsR0FBd0UsR0FBckc7QUFDQXBMLG9CQUFJSyxNQUFKLENBQVcrRSxHQUFYLENBQWVrRSxTQUFmLEdBQTJCdEosSUFBSVcsU0FBSixDQUFjd0IsV0FBZCxDQUEwQmQsS0FBckQ7QUFDQTs7QUFFQTtBQUNBckIsb0JBQUlLLE1BQUosQ0FBVytFLEdBQVgsQ0FBZXlELFNBQWY7QUFDQTdJLG9CQUFJSyxNQUFKLENBQVcrRSxHQUFYLENBQWVtRyxNQUFmLENBQXNCUixHQUFHekUsQ0FBekIsRUFBNEJ5RSxHQUFHeEUsQ0FBL0I7QUFDQXZHLG9CQUFJSyxNQUFKLENBQVcrRSxHQUFYLENBQWVvRyxNQUFmLENBQXNCbkIsR0FBRy9ELENBQXpCLEVBQTRCK0QsR0FBRzlELENBQS9CO0FBQ0F2RyxvQkFBSUssTUFBSixDQUFXK0UsR0FBWCxDQUFlaEUsTUFBZjtBQUNBcEIsb0JBQUlLLE1BQUosQ0FBVytFLEdBQVgsQ0FBZWdFLFNBQWY7QUFFSDtBQUVKO0FBRUosS0E5QkQ7O0FBaUNBcEosUUFBSThELEVBQUosQ0FBT0MsUUFBUCxDQUFnQndHLGdCQUFoQixHQUFvQyxVQUFTUSxFQUFULEVBQWFWLEVBQWIsRUFBZ0I7O0FBRWhEO0FBQ0EsWUFBSVcsS0FBS0QsR0FBR3pFLENBQUgsR0FBTytELEdBQUcvRCxDQUFuQjtBQUFBLFlBQ0kyRSxLQUFLRixHQUFHeEUsQ0FBSCxHQUFPOEQsR0FBRzlELENBRG5CO0FBQUEsWUFFSTJFLE9BQU8vRSxLQUFLZ0YsSUFBTCxDQUFVSCxLQUFHQSxFQUFILEdBQVFDLEtBQUdBLEVBQXJCLENBRlg7O0FBSUEsWUFBR0MsUUFBUWxMLElBQUlXLFNBQUosQ0FBY3dCLFdBQWQsQ0FBMEJDLFFBQXJDLEVBQThDOztBQUUxQyxnQkFBSXFKLEtBQUtULE1BQUloTCxJQUFJVyxTQUFKLENBQWMwQixJQUFkLENBQW1CSyxPQUFuQixDQUEyQkMsT0FBM0IsR0FBbUMsSUFBdkMsQ0FBVDtBQUFBLGdCQUNJK0ksS0FBS1QsTUFBSWpMLElBQUlXLFNBQUosQ0FBYzBCLElBQWQsQ0FBbUJLLE9BQW5CLENBQTJCRSxPQUEzQixHQUFtQyxJQUF2QyxDQURUOztBQUdBbUksZUFBR3ZELEVBQUgsSUFBU2lFLEVBQVQ7QUFDQVYsZUFBR3RELEVBQUgsSUFBU2lFLEVBQVQ7O0FBRUFyQixlQUFHN0MsRUFBSCxJQUFTaUUsRUFBVDtBQUNBcEIsZUFBRzVDLEVBQUgsSUFBU2lFLEVBQVQ7QUFFSDtBQUdKLEtBckJEOztBQXdCQTFMLFFBQUk4RCxFQUFKLENBQU9DLFFBQVAsQ0FBZ0J5RyxlQUFoQixHQUFrQyxVQUFTTyxFQUFULEVBQWFWLEVBQWIsRUFBZ0I7O0FBRTlDLFlBQUlXLEtBQUtELEdBQUd6RSxDQUFILEdBQU8rRCxHQUFHL0QsQ0FBbkI7QUFBQSxZQUNJMkUsS0FBS0YsR0FBR3hFLENBQUgsR0FBTzhELEdBQUc5RCxDQURuQjtBQUFBLFlBRUkyRSxPQUFPL0UsS0FBS2dGLElBQUwsQ0FBVUgsS0FBR0EsRUFBSCxHQUFRQyxLQUFHQSxFQUFyQixDQUZYO0FBQUEsWUFHSVUsU0FBU1osR0FBRzdFLE1BQUgsR0FBVW1FLEdBQUduRSxNQUgxQjs7QUFLQSxZQUFHZ0YsUUFBUVMsTUFBWCxFQUFrQjtBQUNkWixlQUFHdkQsRUFBSCxHQUFRLENBQUN1RCxHQUFHdkQsRUFBWjtBQUNBdUQsZUFBR3RELEVBQUgsR0FBUSxDQUFDc0QsR0FBR3RELEVBQVo7O0FBRUE0QyxlQUFHN0MsRUFBSCxHQUFRLENBQUM2QyxHQUFHN0MsRUFBWjtBQUNBNkMsZUFBRzVDLEVBQUgsR0FBUSxDQUFDNEMsR0FBRzVDLEVBQVo7QUFDSDtBQUVKLEtBZkQ7O0FBa0JBOztBQUVBekgsUUFBSThELEVBQUosQ0FBT1QsS0FBUCxDQUFhdUksYUFBYixHQUE2QixVQUFTQyxFQUFULEVBQWFDLEdBQWIsRUFBaUI7O0FBRTFDOUwsWUFBSWlFLEdBQUosQ0FBUW1FLE9BQVIsR0FBa0IsSUFBbEI7O0FBRUEsYUFBSSxJQUFJb0IsSUFBSSxDQUFaLEVBQWVBLElBQUlxQyxFQUFuQixFQUF1QnJDLEdBQXZCLEVBQTJCO0FBQ3ZCeEosZ0JBQUlXLFNBQUosQ0FBY2tDLEtBQWQsQ0FBb0J0RCxJQUFwQixDQUNJLElBQUlTLElBQUk4RCxFQUFKLENBQU9rQyxRQUFYLENBQ0loRyxJQUFJVyxTQUFKLENBQWNNLEtBRGxCLEVBRUlqQixJQUFJVyxTQUFKLENBQWNnQixPQUFkLENBQXNCZCxLQUYxQixFQUdJO0FBQ0kscUJBQUtpTCxNQUFNQSxJQUFJQyxLQUFWLEdBQWtCNUYsS0FBS3ZFLE1BQUwsS0FBZ0I1QixJQUFJSyxNQUFKLENBQVdFLENBRHREO0FBRUkscUJBQUt1TCxNQUFNQSxJQUFJRSxLQUFWLEdBQWtCN0YsS0FBS3ZFLE1BQUwsS0FBZ0I1QixJQUFJSyxNQUFKLENBQVdJO0FBRnRELGFBSEosQ0FESjtBQVVBLGdCQUFHK0ksS0FBS3FDLEtBQUcsQ0FBWCxFQUFhO0FBQ1Qsb0JBQUcsQ0FBQzdMLElBQUlXLFNBQUosQ0FBYzBCLElBQWQsQ0FBbUJ0QixNQUF2QixFQUE4QjtBQUMxQmYsd0JBQUk4RCxFQUFKLENBQU80QixhQUFQO0FBQ0g7QUFDRDFGLG9CQUFJaUUsR0FBSixDQUFRbUUsT0FBUixHQUFrQixLQUFsQjtBQUNIO0FBQ0o7QUFFSixLQXZCRDs7QUEwQkFwSSxRQUFJOEQsRUFBSixDQUFPVCxLQUFQLENBQWE0SSxlQUFiLEdBQStCLFVBQVNKLEVBQVQsRUFBWTs7QUFFdkM3TCxZQUFJVyxTQUFKLENBQWNrQyxLQUFkLENBQW9CcUosTUFBcEIsQ0FBMkIsQ0FBM0IsRUFBOEJMLEVBQTlCO0FBQ0EsWUFBRyxDQUFDN0wsSUFBSVcsU0FBSixDQUFjMEIsSUFBZCxDQUFtQnRCLE1BQXZCLEVBQThCO0FBQzFCZixnQkFBSThELEVBQUosQ0FBTzRCLGFBQVA7QUFDSDtBQUVKLEtBUEQ7O0FBVUExRixRQUFJOEQsRUFBSixDQUFPVCxLQUFQLENBQWE2RyxjQUFiLEdBQThCLFVBQVMxQixDQUFULEVBQVc7O0FBRXJDO0FBQ0EsWUFBR3hJLElBQUk4QyxhQUFKLENBQWtCRSxNQUFsQixDQUF5QkMsT0FBekIsQ0FBaUNsQyxNQUFqQyxJQUEyQ2lKLFVBQVUsUUFBVixFQUFvQmhLLElBQUk4QyxhQUFKLENBQWtCRSxNQUFsQixDQUF5QkMsT0FBekIsQ0FBaUNDLElBQXJELENBQTlDLEVBQXlHO0FBQUEsZ0JBTzVGaUosSUFQNEYsR0FPckcsU0FBU0EsSUFBVCxHQUFlO0FBQ1gzRCxrQkFBRUUsY0FBRixHQUFtQkYsRUFBRTdHLE9BQXJCO0FBQ0E2RyxrQkFBRUMsYUFBRixHQUFrQkQsRUFBRXRDLE1BQXBCO0FBQ0gsYUFWb0c7O0FBWXJHOzs7QUFWQSxnQkFBSWtHLFdBQVc1RCxFQUFFbEMsQ0FBRixHQUFNdEcsSUFBSThDLGFBQUosQ0FBa0JjLEtBQWxCLENBQXdCbUksS0FBN0M7QUFBQSxnQkFDSU0sV0FBVzdELEVBQUVqQyxDQUFGLEdBQU12RyxJQUFJOEMsYUFBSixDQUFrQmMsS0FBbEIsQ0FBd0JvSSxLQUQ3QztBQUFBLGdCQUVJTSxhQUFhbkcsS0FBS2dGLElBQUwsQ0FBVWlCLFdBQVNBLFFBQVQsR0FBb0JDLFdBQVNBLFFBQXZDLENBRmpCO0FBQUEsZ0JBR0lyRSxRQUFRLElBQUlzRSxhQUFhdE0sSUFBSThDLGFBQUosQ0FBa0JPLEtBQWxCLENBQXdCRSxNQUF4QixDQUErQm5CLFFBSDVEOztBQVdBLGdCQUFHa0ssY0FBY3RNLElBQUk4QyxhQUFKLENBQWtCTyxLQUFsQixDQUF3QkUsTUFBeEIsQ0FBK0JuQixRQUFoRCxFQUF5RDs7QUFFckQsb0JBQUc0RixTQUFTLENBQVQsSUFBY2hJLElBQUk4QyxhQUFKLENBQWtCeUosTUFBbEIsSUFBNEIsV0FBN0MsRUFBeUQ7O0FBRXJEO0FBQ0Esd0JBQUd2TSxJQUFJOEMsYUFBSixDQUFrQk8sS0FBbEIsQ0FBd0JFLE1BQXhCLENBQStCdEIsSUFBL0IsSUFBdUNqQyxJQUFJVyxTQUFKLENBQWNzQixJQUFkLENBQW1CcEIsS0FBN0QsRUFBbUU7O0FBRS9ELDRCQUFHYixJQUFJOEMsYUFBSixDQUFrQk8sS0FBbEIsQ0FBd0JFLE1BQXhCLENBQStCdEIsSUFBL0IsR0FBc0NqQyxJQUFJVyxTQUFKLENBQWNzQixJQUFkLENBQW1CcEIsS0FBNUQsRUFBa0U7QUFDOUQsZ0NBQUlvQixPQUFPdUcsRUFBRXRDLE1BQUYsR0FBWWxHLElBQUk4QyxhQUFKLENBQWtCTyxLQUFsQixDQUF3QkUsTUFBeEIsQ0FBK0J0QixJQUEvQixHQUFvQytGLEtBQTNEO0FBQ0EsZ0NBQUcvRixRQUFRLENBQVgsRUFBYTtBQUNUdUcsa0NBQUVDLGFBQUYsR0FBa0J4RyxJQUFsQjtBQUNIO0FBQ0oseUJBTEQsTUFLSztBQUNELGdDQUFJdUssTUFBTWhFLEVBQUV0QyxNQUFGLEdBQVdsRyxJQUFJOEMsYUFBSixDQUFrQk8sS0FBbEIsQ0FBd0JFLE1BQXhCLENBQStCdEIsSUFBcEQ7QUFBQSxnQ0FDSUEsT0FBT3VHLEVBQUV0QyxNQUFGLEdBQVlzRyxNQUFJeEUsS0FEM0I7QUFFQSxnQ0FBRy9GLE9BQU8sQ0FBVixFQUFZO0FBQ1J1RyxrQ0FBRUMsYUFBRixHQUFrQnhHLElBQWxCO0FBQ0gsNkJBRkQsTUFFSztBQUNEdUcsa0NBQUVDLGFBQUYsR0FBa0IsQ0FBbEI7QUFDSDtBQUNKO0FBRUo7O0FBRUQ7QUFDQSx3QkFBR3pJLElBQUk4QyxhQUFKLENBQWtCTyxLQUFsQixDQUF3QkUsTUFBeEIsQ0FBK0I1QixPQUEvQixJQUEwQzNCLElBQUlXLFNBQUosQ0FBY2dCLE9BQWQsQ0FBc0JkLEtBQW5FLEVBQXlFOztBQUVyRSw0QkFBR2IsSUFBSThDLGFBQUosQ0FBa0JPLEtBQWxCLENBQXdCRSxNQUF4QixDQUErQjVCLE9BQS9CLEdBQXlDM0IsSUFBSVcsU0FBSixDQUFjZ0IsT0FBZCxDQUFzQmQsS0FBbEUsRUFBd0U7QUFDcEUsZ0NBQUljLFVBQVUzQixJQUFJOEMsYUFBSixDQUFrQk8sS0FBbEIsQ0FBd0JFLE1BQXhCLENBQStCNUIsT0FBL0IsR0FBdUNxRyxLQUFyRDtBQUNBLGdDQUFHckcsVUFBVTZHLEVBQUU3RyxPQUFaLElBQXVCQSxXQUFXM0IsSUFBSThDLGFBQUosQ0FBa0JPLEtBQWxCLENBQXdCRSxNQUF4QixDQUErQjVCLE9BQXBFLEVBQTRFO0FBQ3hFNkcsa0NBQUVFLGNBQUYsR0FBbUIvRyxPQUFuQjtBQUNIO0FBQ0oseUJBTEQsTUFLSztBQUNELGdDQUFJQSxVQUFVNkcsRUFBRTdHLE9BQUYsR0FBWSxDQUFDM0IsSUFBSVcsU0FBSixDQUFjZ0IsT0FBZCxDQUFzQmQsS0FBdEIsR0FBNEJiLElBQUk4QyxhQUFKLENBQWtCTyxLQUFsQixDQUF3QkUsTUFBeEIsQ0FBK0I1QixPQUE1RCxJQUFxRXFHLEtBQS9GO0FBQ0EsZ0NBQUdyRyxVQUFVNkcsRUFBRTdHLE9BQVosSUFBdUJBLFdBQVczQixJQUFJOEMsYUFBSixDQUFrQk8sS0FBbEIsQ0FBd0JFLE1BQXhCLENBQStCNUIsT0FBcEUsRUFBNEU7QUFDeEU2RyxrQ0FBRUUsY0FBRixHQUFtQi9HLE9BQW5CO0FBQ0g7QUFDSjtBQUVKO0FBRUo7QUFFSixhQTNDRCxNQTJDSztBQUNEd0s7QUFDSDs7QUFHRDtBQUNBLGdCQUFHbk0sSUFBSThDLGFBQUosQ0FBa0J5SixNQUFsQixJQUE0QixZQUEvQixFQUE0QztBQUN4Q0o7QUFDSDtBQUVKOztBQUVEO0FBcEVBLGFBcUVLLElBQUduTSxJQUFJOEMsYUFBSixDQUFrQkUsTUFBbEIsQ0FBeUJHLE9BQXpCLENBQWlDcEMsTUFBakMsSUFBMkNpSixVQUFVLFFBQVYsRUFBb0JoSyxJQUFJOEMsYUFBSixDQUFrQkUsTUFBbEIsQ0FBeUJHLE9BQXpCLENBQWlDRCxJQUFyRCxDQUE5QyxFQUF5RztBQUFBLG9CQW9Cakd1SixPQXBCaUcsR0FvQjFHLFNBQVNBLE9BQVQsQ0FBaUJDLFlBQWpCLEVBQStCQyxlQUEvQixFQUFnREMsWUFBaEQsRUFBOERDLEtBQTlELEVBQXFFQyxFQUFyRSxFQUF3RTs7QUFFcEUsd0JBQUdKLGdCQUFnQkMsZUFBbkIsRUFBbUM7O0FBRS9CLDRCQUFHLENBQUMzTSxJQUFJaUUsR0FBSixDQUFROEksbUJBQVosRUFBZ0M7QUFDNUIsZ0NBQUdULGNBQWN0TSxJQUFJOEMsYUFBSixDQUFrQk8sS0FBbEIsQ0FBd0JFLE1BQXhCLENBQStCbkIsUUFBaEQsRUFBeUQ7QUFDckQsb0NBQUd3SyxnQkFBZ0I3RixTQUFuQixFQUE4QixJQUFJM0MsTUFBTXdJLFlBQVYsQ0FBOUIsS0FDSyxJQUFJeEksTUFBTXlJLEtBQVY7QUFDTCxvQ0FBR3pJLE9BQU9zSSxZQUFWLEVBQXVCO0FBQ25CLHdDQUFJN0wsUUFBUWdNLFFBQVNHLGNBQWNILFFBQVFILFlBQXRCLElBQXNDMU0sSUFBSThDLGFBQUosQ0FBa0JPLEtBQWxCLENBQXdCRSxNQUF4QixDQUErQkMsUUFBMUY7QUFDQSx3Q0FBR3NKLE1BQU0sTUFBVCxFQUFpQnRFLEVBQUVDLGFBQUYsR0FBa0I1SCxLQUFsQjtBQUNqQix3Q0FBR2lNLE1BQU0sU0FBVCxFQUFvQnRFLEVBQUVFLGNBQUYsR0FBbUI3SCxLQUFuQjtBQUN2QjtBQUNKLDZCQVJELE1BUUs7QUFDRCxvQ0FBR2lNLE1BQU0sTUFBVCxFQUFpQnRFLEVBQUVDLGFBQUYsR0FBa0IxQixTQUFsQjtBQUNqQixvQ0FBRytGLE1BQU0sU0FBVCxFQUFvQnRFLEVBQUVFLGNBQUYsR0FBbUIzQixTQUFuQjtBQUN2QjtBQUNKLHlCQWJELE1BYUs7QUFDRCxnQ0FBRzZGLGdCQUFnQjdGLFNBQW5CLEVBQTZCO0FBQ3pCLG9DQUFJa0csWUFBWUosUUFBU0csY0FBY0gsUUFBUUgsWUFBdEIsSUFBc0MxTSxJQUFJOEMsYUFBSixDQUFrQk8sS0FBbEIsQ0FBd0JFLE1BQXhCLENBQStCQyxRQUE5RjtBQUFBLG9DQUNJZ0osTUFBTUUsZUFBZU8sU0FEekI7QUFFQXBNLHdDQUFRNkwsZUFBZUYsR0FBdkI7QUFDQSxvQ0FBR00sTUFBTSxNQUFULEVBQWlCdEUsRUFBRUMsYUFBRixHQUFrQjVILEtBQWxCO0FBQ2pCLG9DQUFHaU0sTUFBTSxTQUFULEVBQW9CdEUsRUFBRUUsY0FBRixHQUFtQjdILEtBQW5CO0FBQ3ZCO0FBQ0o7QUFFSjtBQUVKLGlCQWpEeUc7O0FBRzFHLG9CQUFHYixJQUFJaUUsR0FBSixDQUFRaUosZUFBWCxFQUEyQjtBQUN2Qix3QkFBSWQsV0FBVzVELEVBQUVsQyxDQUFGLEdBQU10RyxJQUFJOEMsYUFBSixDQUFrQmMsS0FBbEIsQ0FBd0J1SixXQUE3QztBQUFBLHdCQUNJZCxXQUFXN0QsRUFBRWpDLENBQUYsR0FBTXZHLElBQUk4QyxhQUFKLENBQWtCYyxLQUFsQixDQUF3QndKLFdBRDdDO0FBQUEsd0JBRUlkLGFBQWFuRyxLQUFLZ0YsSUFBTCxDQUFVaUIsV0FBU0EsUUFBVCxHQUFvQkMsV0FBU0EsUUFBdkMsQ0FGakI7QUFBQSx3QkFHSVcsYUFBYSxDQUFDLElBQUlLLElBQUosR0FBV0MsT0FBWCxLQUF1QnROLElBQUk4QyxhQUFKLENBQWtCYyxLQUFsQixDQUF3QjJKLFVBQWhELElBQTRELElBSDdFOztBQUtBLHdCQUFHUCxhQUFhaE4sSUFBSThDLGFBQUosQ0FBa0JPLEtBQWxCLENBQXdCRSxNQUF4QixDQUErQkMsUUFBL0MsRUFBd0Q7QUFDcER4RCw0QkFBSWlFLEdBQUosQ0FBUThJLG1CQUFSLEdBQThCLElBQTlCO0FBQ0g7O0FBRUQsd0JBQUdDLGFBQWFoTixJQUFJOEMsYUFBSixDQUFrQk8sS0FBbEIsQ0FBd0JFLE1BQXhCLENBQStCQyxRQUEvQixHQUF3QyxDQUF4RCxFQUEwRDtBQUN0RHhELDRCQUFJaUUsR0FBSixDQUFRaUosZUFBUixHQUEwQixLQUExQjtBQUNBbE4sNEJBQUlpRSxHQUFKLENBQVE4SSxtQkFBUixHQUE4QixLQUE5QjtBQUNIO0FBQ0o7O0FBa0NELG9CQUFHL00sSUFBSWlFLEdBQUosQ0FBUWlKLGVBQVgsRUFBMkI7QUFDdkI7QUFDQVQsNEJBQVF6TSxJQUFJOEMsYUFBSixDQUFrQk8sS0FBbEIsQ0FBd0JFLE1BQXhCLENBQStCdEIsSUFBdkMsRUFBNkNqQyxJQUFJVyxTQUFKLENBQWNzQixJQUFkLENBQW1CcEIsS0FBaEUsRUFBdUUySCxFQUFFQyxhQUF6RSxFQUF3RkQsRUFBRXRDLE1BQTFGLEVBQWtHLE1BQWxHO0FBQ0E7QUFDQXVHLDRCQUFRek0sSUFBSThDLGFBQUosQ0FBa0JPLEtBQWxCLENBQXdCRSxNQUF4QixDQUErQjVCLE9BQXZDLEVBQWdEM0IsSUFBSVcsU0FBSixDQUFjZ0IsT0FBZCxDQUFzQmQsS0FBdEUsRUFBNkUySCxFQUFFRSxjQUEvRSxFQUErRkYsRUFBRTdHLE9BQWpHLEVBQTBHLFNBQTFHO0FBQ0g7QUFFSjtBQUVKLEtBcElEOztBQXVJQTNCLFFBQUk4RCxFQUFKLENBQU9ULEtBQVAsQ0FBYThHLGVBQWIsR0FBK0IsVUFBUzNCLENBQVQsRUFBVzs7QUFFdEMsWUFBR3hJLElBQUk4QyxhQUFKLENBQWtCRSxNQUFsQixDQUF5QkMsT0FBekIsQ0FBaUNsQyxNQUFqQyxJQUEyQ2lKLFVBQVUsU0FBVixFQUFxQmhLLElBQUk4QyxhQUFKLENBQWtCRSxNQUFsQixDQUF5QkMsT0FBekIsQ0FBaUNDLElBQXRELENBQTNDLElBQTBHbEQsSUFBSThDLGFBQUosQ0FBa0J5SixNQUFsQixJQUE0QixXQUF6SSxFQUFzSjs7QUFFbEosZ0JBQUlILFdBQVc1RCxFQUFFbEMsQ0FBRixHQUFNdEcsSUFBSThDLGFBQUosQ0FBa0JjLEtBQWxCLENBQXdCbUksS0FBN0M7QUFBQSxnQkFDSU0sV0FBVzdELEVBQUVqQyxDQUFGLEdBQU12RyxJQUFJOEMsYUFBSixDQUFrQmMsS0FBbEIsQ0FBd0JvSSxLQUQ3QztBQUFBLGdCQUVJTSxhQUFhbkcsS0FBS2dGLElBQUwsQ0FBVWlCLFdBQVNBLFFBQVQsR0FBb0JDLFdBQVNBLFFBQXZDLENBRmpCOztBQUlBLGdCQUFJbUIsVUFBVSxFQUFDbEgsR0FBRzhGLFdBQVNFLFVBQWIsRUFBeUIvRixHQUFHOEYsV0FBU0MsVUFBckMsRUFBZDtBQUFBLGdCQUNJbUIsZ0JBQWdCek4sSUFBSThDLGFBQUosQ0FBa0JPLEtBQWxCLENBQXdCSSxPQUF4QixDQUFnQ3JCLFFBRHBEO0FBQUEsZ0JBRUlzTCxXQUFXLEdBRmY7QUFBQSxnQkFHSUMsZ0JBQWdCQyxNQUFPLElBQUVILGFBQUgsSUFBbUIsQ0FBQyxDQUFELEdBQUd0SCxLQUFLMEgsR0FBTCxDQUFTdkIsYUFBV21CLGFBQXBCLEVBQWtDLENBQWxDLENBQUgsR0FBd0MsQ0FBM0QsSUFBOERBLGFBQTlELEdBQTRFQyxRQUFsRixFQUE0RixDQUE1RixFQUErRixFQUEvRixDQUhwQjs7QUFLQSxnQkFBSTVCLE1BQU07QUFDTnhGLG1CQUFHa0MsRUFBRWxDLENBQUYsR0FBTWtILFFBQVFsSCxDQUFSLEdBQVlxSCxhQURmO0FBRU5wSCxtQkFBR2lDLEVBQUVqQyxDQUFGLEdBQU1pSCxRQUFRakgsQ0FBUixHQUFZb0g7QUFGZixhQUFWOztBQUtBLGdCQUFHM04sSUFBSVcsU0FBSixDQUFjMEIsSUFBZCxDQUFtQkcsUUFBbkIsSUFBK0IsUUFBbEMsRUFBMkM7QUFDdkMsb0JBQUdzSixJQUFJeEYsQ0FBSixHQUFRa0MsRUFBRXRDLE1BQVYsR0FBbUIsQ0FBbkIsSUFBd0I0RixJQUFJeEYsQ0FBSixHQUFRa0MsRUFBRXRDLE1BQVYsR0FBbUJsRyxJQUFJSyxNQUFKLENBQVdFLENBQXpELEVBQTREaUksRUFBRWxDLENBQUYsR0FBTXdGLElBQUl4RixDQUFWO0FBQzVELG9CQUFHd0YsSUFBSXZGLENBQUosR0FBUWlDLEVBQUV0QyxNQUFWLEdBQW1CLENBQW5CLElBQXdCNEYsSUFBSXZGLENBQUosR0FBUWlDLEVBQUV0QyxNQUFWLEdBQW1CbEcsSUFBSUssTUFBSixDQUFXSSxDQUF6RCxFQUE0RCtILEVBQUVqQyxDQUFGLEdBQU11RixJQUFJdkYsQ0FBVjtBQUMvRCxhQUhELE1BR0s7QUFDRGlDLGtCQUFFbEMsQ0FBRixHQUFNd0YsSUFBSXhGLENBQVY7QUFDQWtDLGtCQUFFakMsQ0FBRixHQUFNdUYsSUFBSXZGLENBQVY7QUFDSDtBQUVKLFNBeEJELE1BMkJLLElBQUd2RyxJQUFJOEMsYUFBSixDQUFrQkUsTUFBbEIsQ0FBeUJHLE9BQXpCLENBQWlDcEMsTUFBakMsSUFBMkNpSixVQUFVLFNBQVYsRUFBcUJoSyxJQUFJOEMsYUFBSixDQUFrQkUsTUFBbEIsQ0FBeUJHLE9BQXpCLENBQWlDRCxJQUF0RCxDQUE5QyxFQUEyRzs7QUFFNUcsZ0JBQUcsQ0FBQ2xELElBQUlpRSxHQUFKLENBQVE2SixjQUFaLEVBQTJCO0FBQ3ZCOU4sb0JBQUlpRSxHQUFKLENBQVE4SixhQUFSO0FBQ0Esb0JBQUcvTixJQUFJaUUsR0FBSixDQUFROEosYUFBUixJQUF5Qi9OLElBQUlXLFNBQUosQ0FBY2tDLEtBQWQsQ0FBb0JyRCxNQUFoRCxFQUF1RDtBQUNuRFEsd0JBQUlpRSxHQUFKLENBQVE2SixjQUFSLEdBQXlCLElBQXpCO0FBQ0g7QUFDSjs7QUFFRCxnQkFBRzlOLElBQUlpRSxHQUFKLENBQVErSixnQkFBWCxFQUE0QjtBQUFBLG9CQVVmdkIsT0FWZSxHQVV4QixTQUFTQSxPQUFULEdBQWtCOztBQUVkLHdCQUFJd0IsSUFBSTlILEtBQUsrSCxLQUFMLENBQVdqRCxFQUFYLEVBQWNELEVBQWQsQ0FBUjtBQUNBeEMsc0JBQUVoQixFQUFGLEdBQU8yRyxRQUFRaEksS0FBS2lJLEdBQUwsQ0FBU0gsQ0FBVCxDQUFmO0FBQ0F6RixzQkFBRWYsRUFBRixHQUFPMEcsUUFBUWhJLEtBQUtrSSxHQUFMLENBQVNKLENBQVQsQ0FBZjs7QUFFQSx3QkFBR2pPLElBQUlXLFNBQUosQ0FBYzBCLElBQWQsQ0FBbUJHLFFBQW5CLElBQStCLFFBQWxDLEVBQTJDO0FBQ3ZDLDRCQUFJc0osTUFBTTtBQUNOeEYsK0JBQUdrQyxFQUFFbEMsQ0FBRixHQUFNa0MsRUFBRWhCLEVBREw7QUFFTmpCLCtCQUFHaUMsRUFBRWpDLENBQUYsR0FBTWlDLEVBQUVmO0FBRkwseUJBQVY7QUFJQSw0QkFBSXFFLElBQUl4RixDQUFKLEdBQVFrQyxFQUFFdEMsTUFBVixHQUFtQmxHLElBQUlLLE1BQUosQ0FBV0UsQ0FBbEMsRUFBcUNpSSxFQUFFaEIsRUFBRixHQUFPLENBQUNnQixFQUFFaEIsRUFBVixDQUFyQyxLQUNLLElBQUlzRSxJQUFJeEYsQ0FBSixHQUFRa0MsRUFBRXRDLE1BQVYsR0FBbUIsQ0FBdkIsRUFBMEJzQyxFQUFFaEIsRUFBRixHQUFPLENBQUNnQixFQUFFaEIsRUFBVjtBQUMvQiw0QkFBSXNFLElBQUl2RixDQUFKLEdBQVFpQyxFQUFFdEMsTUFBVixHQUFtQmxHLElBQUlLLE1BQUosQ0FBV0ksQ0FBbEMsRUFBcUMrSCxFQUFFZixFQUFGLEdBQU8sQ0FBQ2UsRUFBRWYsRUFBVixDQUFyQyxLQUNLLElBQUlxRSxJQUFJdkYsQ0FBSixHQUFRaUMsRUFBRXRDLE1BQVYsR0FBbUIsQ0FBdkIsRUFBMEJzQyxFQUFFZixFQUFGLEdBQU8sQ0FBQ2UsRUFBRWYsRUFBVjtBQUNsQztBQUVKLGlCQTNCdUI7O0FBNkJ4Qjs7O0FBM0JBLG9CQUFJZ0csZ0JBQWdCdEgsS0FBSzBILEdBQUwsQ0FBUzdOLElBQUk4QyxhQUFKLENBQWtCTyxLQUFsQixDQUF3QkksT0FBeEIsQ0FBZ0NyQixRQUFoQyxHQUF5QyxDQUFsRCxFQUFxRCxDQUFyRCxDQUFwQjs7QUFFQSxvQkFBSTRJLEtBQUtoTCxJQUFJOEMsYUFBSixDQUFrQmMsS0FBbEIsQ0FBd0J1SixXQUF4QixHQUFzQzNFLEVBQUVsQyxDQUFqRDtBQUFBLG9CQUNJMkUsS0FBS2pMLElBQUk4QyxhQUFKLENBQWtCYyxLQUFsQixDQUF3QndKLFdBQXhCLEdBQXNDNUUsRUFBRWpDLENBRGpEO0FBQUEsb0JBRUkrSCxJQUFJdEQsS0FBR0EsRUFBSCxHQUFRQyxLQUFHQSxFQUZuQjs7QUFJQSxvQkFBSWtELFFBQVEsQ0FBQ1YsYUFBRCxHQUFpQmEsQ0FBakIsR0FBcUIsQ0FBakM7O0FBc0JBLG9CQUFHQSxLQUFLYixhQUFSLEVBQXNCO0FBQ2xCaEI7QUFDSDs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUdILGFBNUNELE1BNENLOztBQUVELG9CQUFHek0sSUFBSWlFLEdBQUosQ0FBUStKLGdCQUFSLElBQTRCLEtBQS9CLEVBQXFDOztBQUVqQ3hGLHNCQUFFaEIsRUFBRixHQUFPZ0IsRUFBRWQsSUFBVDtBQUNBYyxzQkFBRWYsRUFBRixHQUFPZSxFQUFFYixJQUFUO0FBRUg7QUFFSjtBQUVKO0FBRUosS0EvRkQ7O0FBa0dBM0gsUUFBSThELEVBQUosQ0FBT1QsS0FBUCxDQUFhNEcsWUFBYixHQUE0QixVQUFTekIsQ0FBVCxFQUFXOztBQUVuQyxZQUFHeEksSUFBSThDLGFBQUosQ0FBa0JFLE1BQWxCLENBQXlCQyxPQUF6QixDQUFpQ2xDLE1BQWpDLElBQTJDZixJQUFJOEMsYUFBSixDQUFrQnlKLE1BQWxCLElBQTRCLFdBQTFFLEVBQXNGOztBQUVsRixnQkFBSUgsV0FBVzVELEVBQUVsQyxDQUFGLEdBQU10RyxJQUFJOEMsYUFBSixDQUFrQmMsS0FBbEIsQ0FBd0JtSSxLQUE3QztBQUFBLGdCQUNJTSxXQUFXN0QsRUFBRWpDLENBQUYsR0FBTXZHLElBQUk4QyxhQUFKLENBQWtCYyxLQUFsQixDQUF3Qm9JLEtBRDdDO0FBQUEsZ0JBRUlNLGFBQWFuRyxLQUFLZ0YsSUFBTCxDQUFVaUIsV0FBU0EsUUFBVCxHQUFvQkMsV0FBU0EsUUFBdkMsQ0FGakI7O0FBSUE7QUFDQSxnQkFBR0MsY0FBY3RNLElBQUk4QyxhQUFKLENBQWtCTyxLQUFsQixDQUF3QkMsSUFBeEIsQ0FBNkJsQixRQUE5QyxFQUF1RDs7QUFFbkQsb0JBQUlnSixlQUFlcEwsSUFBSThDLGFBQUosQ0FBa0JPLEtBQWxCLENBQXdCQyxJQUF4QixDQUE2Qm5CLFdBQTdCLENBQXlDUixPQUF6QyxHQUFvRDJLLGNBQWMsSUFBRXRNLElBQUk4QyxhQUFKLENBQWtCTyxLQUFsQixDQUF3QkMsSUFBeEIsQ0FBNkJuQixXQUE3QixDQUF5Q1IsT0FBekQsQ0FBRCxHQUFzRTNCLElBQUk4QyxhQUFKLENBQWtCTyxLQUFsQixDQUF3QkMsSUFBeEIsQ0FBNkJsQixRQUF6Szs7QUFFQSxvQkFBR2dKLGVBQWUsQ0FBbEIsRUFBb0I7O0FBRWhCO0FBQ0Esd0JBQUlDLGFBQWFyTCxJQUFJVyxTQUFKLENBQWN3QixXQUFkLENBQTBCbUosY0FBM0M7QUFDQXRMLHdCQUFJSyxNQUFKLENBQVcrRSxHQUFYLENBQWVpRSxXQUFmLEdBQTZCLFVBQVEsR0FBUixHQUFZLEdBQVosR0FBZ0IsR0FBaEIsR0FBb0IsR0FBcEIsR0FBd0IsRUFBeEIsR0FBMkIsR0FBM0IsR0FBK0IrQixZQUEvQixHQUE0QyxHQUF6RTtBQUNBcEwsd0JBQUlLLE1BQUosQ0FBVytFLEdBQVgsQ0FBZWtFLFNBQWYsR0FBMkJ0SixJQUFJVyxTQUFKLENBQWN3QixXQUFkLENBQTBCZCxLQUFyRDtBQUNBOztBQUVBO0FBQ0FyQix3QkFBSUssTUFBSixDQUFXK0UsR0FBWCxDQUFleUQsU0FBZjtBQUNBN0ksd0JBQUlLLE1BQUosQ0FBVytFLEdBQVgsQ0FBZW1HLE1BQWYsQ0FBc0IvQyxFQUFFbEMsQ0FBeEIsRUFBMkJrQyxFQUFFakMsQ0FBN0I7QUFDQXZHLHdCQUFJSyxNQUFKLENBQVcrRSxHQUFYLENBQWVvRyxNQUFmLENBQXNCeEwsSUFBSThDLGFBQUosQ0FBa0JjLEtBQWxCLENBQXdCbUksS0FBOUMsRUFBcUQvTCxJQUFJOEMsYUFBSixDQUFrQmMsS0FBbEIsQ0FBd0JvSSxLQUE3RTtBQUNBaE0sd0JBQUlLLE1BQUosQ0FBVytFLEdBQVgsQ0FBZWhFLE1BQWY7QUFDQXBCLHdCQUFJSyxNQUFKLENBQVcrRSxHQUFYLENBQWVnRSxTQUFmO0FBRUg7QUFFSjtBQUVKO0FBRUosS0FsQ0Q7O0FBc0NBOztBQUVBcEosUUFBSThELEVBQUosQ0FBT0UsT0FBUCxDQUFldUssZUFBZixHQUFpQyxZQUFVOztBQUV2QztBQUNBLFlBQUd2TyxJQUFJOEMsYUFBSixDQUFrQkMsU0FBbEIsSUFBK0IsUUFBbEMsRUFBMkM7QUFDdkMvQyxnQkFBSThDLGFBQUosQ0FBa0J4QyxFQUFsQixHQUF1QnlFLE1BQXZCO0FBQ0gsU0FGRCxNQUVLO0FBQ0QvRSxnQkFBSThDLGFBQUosQ0FBa0J4QyxFQUFsQixHQUF1Qk4sSUFBSUssTUFBSixDQUFXQyxFQUFsQztBQUNIOztBQUdEO0FBQ0EsWUFBR04sSUFBSThDLGFBQUosQ0FBa0JFLE1BQWxCLENBQXlCQyxPQUF6QixDQUFpQ2xDLE1BQWpDLElBQTJDZixJQUFJOEMsYUFBSixDQUFrQkUsTUFBbEIsQ0FBeUJHLE9BQXpCLENBQWlDcEMsTUFBL0UsRUFBc0Y7O0FBRWxGO0FBQ0FmLGdCQUFJOEMsYUFBSixDQUFrQnhDLEVBQWxCLENBQXFCaUYsZ0JBQXJCLENBQXNDLFdBQXRDLEVBQW1ELFVBQVNpSixDQUFULEVBQVc7O0FBRTFELG9CQUFHeE8sSUFBSThDLGFBQUosQ0FBa0J4QyxFQUFsQixJQUF3QnlFLE1BQTNCLEVBQWtDO0FBQzlCLHdCQUFJZ0gsUUFBUXlDLEVBQUVDLE9BQWQ7QUFBQSx3QkFDSXpDLFFBQVF3QyxFQUFFRSxPQURkO0FBRUgsaUJBSEQsTUFJSTtBQUNBLHdCQUFJM0MsUUFBUXlDLEVBQUVHLE9BQUYsSUFBYUgsRUFBRUMsT0FBM0I7QUFBQSx3QkFDSXpDLFFBQVF3QyxFQUFFSSxPQUFGLElBQWFKLEVBQUVFLE9BRDNCO0FBRUg7O0FBRUQxTyxvQkFBSThDLGFBQUosQ0FBa0JjLEtBQWxCLENBQXdCbUksS0FBeEIsR0FBZ0NBLEtBQWhDO0FBQ0EvTCxvQkFBSThDLGFBQUosQ0FBa0JjLEtBQWxCLENBQXdCb0ksS0FBeEIsR0FBZ0NBLEtBQWhDOztBQUVBLG9CQUFHaE0sSUFBSWlFLEdBQUosQ0FBUWlCLE1BQVgsRUFBa0I7QUFDZGxGLHdCQUFJOEMsYUFBSixDQUFrQmMsS0FBbEIsQ0FBd0JtSSxLQUF4QixJQUFpQy9MLElBQUlLLE1BQUosQ0FBVzRFLE9BQTVDO0FBQ0FqRix3QkFBSThDLGFBQUosQ0FBa0JjLEtBQWxCLENBQXdCb0ksS0FBeEIsSUFBaUNoTSxJQUFJSyxNQUFKLENBQVc0RSxPQUE1QztBQUNIOztBQUVEakYsb0JBQUk4QyxhQUFKLENBQWtCeUosTUFBbEIsR0FBMkIsV0FBM0I7QUFFSCxhQXJCRDs7QUF1QkE7QUFDQXZNLGdCQUFJOEMsYUFBSixDQUFrQnhDLEVBQWxCLENBQXFCaUYsZ0JBQXJCLENBQXNDLFlBQXRDLEVBQW9ELFVBQVNpSixDQUFULEVBQVc7O0FBRTNEeE8sb0JBQUk4QyxhQUFKLENBQWtCYyxLQUFsQixDQUF3Qm1JLEtBQXhCLEdBQWdDLElBQWhDO0FBQ0EvTCxvQkFBSThDLGFBQUosQ0FBa0JjLEtBQWxCLENBQXdCb0ksS0FBeEIsR0FBZ0MsSUFBaEM7QUFDQWhNLG9CQUFJOEMsYUFBSixDQUFrQnlKLE1BQWxCLEdBQTJCLFlBQTNCO0FBRUgsYUFORDtBQVFIOztBQUVEO0FBQ0EsWUFBR3ZNLElBQUk4QyxhQUFKLENBQWtCRSxNQUFsQixDQUF5QkcsT0FBekIsQ0FBaUNwQyxNQUFwQyxFQUEyQzs7QUFFdkNmLGdCQUFJOEMsYUFBSixDQUFrQnhDLEVBQWxCLENBQXFCaUYsZ0JBQXJCLENBQXNDLE9BQXRDLEVBQStDLFlBQVU7O0FBRXJEdkYsb0JBQUk4QyxhQUFKLENBQWtCYyxLQUFsQixDQUF3QnVKLFdBQXhCLEdBQXNDbk4sSUFBSThDLGFBQUosQ0FBa0JjLEtBQWxCLENBQXdCbUksS0FBOUQ7QUFDQS9MLG9CQUFJOEMsYUFBSixDQUFrQmMsS0FBbEIsQ0FBd0J3SixXQUF4QixHQUFzQ3BOLElBQUk4QyxhQUFKLENBQWtCYyxLQUFsQixDQUF3Qm9JLEtBQTlEO0FBQ0FoTSxvQkFBSThDLGFBQUosQ0FBa0JjLEtBQWxCLENBQXdCMkosVUFBeEIsR0FBcUMsSUFBSUYsSUFBSixHQUFXQyxPQUFYLEVBQXJDOztBQUVBLG9CQUFHdE4sSUFBSThDLGFBQUosQ0FBa0JFLE1BQWxCLENBQXlCRyxPQUF6QixDQUFpQ3BDLE1BQXBDLEVBQTJDOztBQUV2Qyw0QkFBT2YsSUFBSThDLGFBQUosQ0FBa0JFLE1BQWxCLENBQXlCRyxPQUF6QixDQUFpQ0QsSUFBeEM7O0FBRUksNkJBQUssTUFBTDtBQUNJLGdDQUFHbEQsSUFBSVcsU0FBSixDQUFjMEIsSUFBZCxDQUFtQnRCLE1BQXRCLEVBQTZCO0FBQ3pCZixvQ0FBSThELEVBQUosQ0FBT1QsS0FBUCxDQUFhdUksYUFBYixDQUEyQjVMLElBQUk4QyxhQUFKLENBQWtCTyxLQUFsQixDQUF3QjlELElBQXhCLENBQTZCbUUsWUFBeEQsRUFBc0UxRCxJQUFJOEMsYUFBSixDQUFrQmMsS0FBeEY7QUFDSCw2QkFGRCxNQUVLO0FBQ0Qsb0NBQUc1RCxJQUFJOEMsYUFBSixDQUFrQk8sS0FBbEIsQ0FBd0I5RCxJQUF4QixDQUE2Qm1FLFlBQTdCLElBQTZDLENBQWhELEVBQWtEO0FBQzlDMUQsd0NBQUk4RCxFQUFKLENBQU9ULEtBQVAsQ0FBYXVJLGFBQWIsQ0FBMkI1TCxJQUFJOEMsYUFBSixDQUFrQk8sS0FBbEIsQ0FBd0I5RCxJQUF4QixDQUE2Qm1FLFlBQXhELEVBQXNFMUQsSUFBSThDLGFBQUosQ0FBa0JjLEtBQXhGO0FBQ0gsaUNBRkQsTUFHSyxJQUFHNUQsSUFBSThDLGFBQUosQ0FBa0JPLEtBQWxCLENBQXdCOUQsSUFBeEIsQ0FBNkJtRSxZQUE3QixHQUE0QyxDQUEvQyxFQUFpRDtBQUNsRDFELHdDQUFJOEQsRUFBSixDQUFPVCxLQUFQLENBQWF1SSxhQUFiLENBQTJCNUwsSUFBSThDLGFBQUosQ0FBa0JPLEtBQWxCLENBQXdCOUQsSUFBeEIsQ0FBNkJtRSxZQUF4RDtBQUNIO0FBQ0o7QUFDRDs7QUFFSiw2QkFBSyxRQUFMO0FBQ0kxRCxnQ0FBSThELEVBQUosQ0FBT1QsS0FBUCxDQUFhNEksZUFBYixDQUE2QmpNLElBQUk4QyxhQUFKLENBQWtCTyxLQUFsQixDQUF3Qk0sTUFBeEIsQ0FBK0JELFlBQTVEO0FBQ0E7O0FBRUosNkJBQUssUUFBTDtBQUNJMUQsZ0NBQUlpRSxHQUFKLENBQVFpSixlQUFSLEdBQTBCLElBQTFCO0FBQ0E7O0FBRUosNkJBQUssU0FBTDtBQUNJbE4sZ0NBQUlpRSxHQUFKLENBQVErSixnQkFBUixHQUEyQixJQUEzQjtBQUNBaE8sZ0NBQUlpRSxHQUFKLENBQVE4SixhQUFSLEdBQXdCLENBQXhCO0FBQ0EvTixnQ0FBSWlFLEdBQUosQ0FBUTZKLGNBQVIsR0FBeUIsS0FBekI7QUFDQWUsdUNBQVcsWUFBVTtBQUNqQjdPLG9DQUFJaUUsR0FBSixDQUFRK0osZ0JBQVIsR0FBMkIsS0FBM0I7QUFDSCw2QkFGRCxFQUVHaE8sSUFBSThDLGFBQUosQ0FBa0JPLEtBQWxCLENBQXdCSSxPQUF4QixDQUFnQ0QsUUFBaEMsR0FBeUMsSUFGNUM7QUFHQTs7QUE5QlI7QUFrQ0g7QUFFSixhQTVDRDtBQThDSDtBQUdKLEtBcEdEOztBQXNHQXhELFFBQUk4RCxFQUFKLENBQU9FLE9BQVAsQ0FBZTJCLG9CQUFmLEdBQXNDLFlBQVU7O0FBRTVDLFlBQUczRixJQUFJVyxTQUFKLENBQWNDLE1BQWQsQ0FBcUJFLE9BQXJCLENBQTZCQyxNQUFoQyxFQUF1Qzs7QUFFbkM7QUFDQSxnQkFBSStOLE9BQU85TyxJQUFJSyxNQUFKLENBQVdDLEVBQVgsQ0FBY2UsS0FBZCxHQUFzQnJCLElBQUlLLE1BQUosQ0FBV0MsRUFBWCxDQUFjb0IsTUFBcEMsR0FBNkMsSUFBeEQ7QUFDQSxnQkFBRzFCLElBQUlpRSxHQUFKLENBQVFpQixNQUFYLEVBQWtCO0FBQ2Q0Six1QkFBT0EsUUFBTTlPLElBQUlLLE1BQUosQ0FBVzRFLE9BQVgsR0FBbUIsQ0FBekIsQ0FBUDtBQUNIOztBQUVEO0FBQ0EsZ0JBQUk4SixlQUFlRCxPQUFPOU8sSUFBSVcsU0FBSixDQUFjQyxNQUFkLENBQXFCQyxLQUE1QixHQUFvQ2IsSUFBSVcsU0FBSixDQUFjQyxNQUFkLENBQXFCRSxPQUFyQixDQUE2QkUsVUFBcEY7O0FBRUE7QUFDQSxnQkFBSWdPLG9CQUFvQmhQLElBQUlXLFNBQUosQ0FBY2tDLEtBQWQsQ0FBb0JyRCxNQUFwQixHQUE2QnVQLFlBQXJEO0FBQ0EsZ0JBQUdDLG9CQUFvQixDQUF2QixFQUEwQmhQLElBQUk4RCxFQUFKLENBQU9ULEtBQVAsQ0FBYXVJLGFBQWIsQ0FBMkJ6RixLQUFLOEksR0FBTCxDQUFTRCxpQkFBVCxDQUEzQixFQUExQixLQUNLaFAsSUFBSThELEVBQUosQ0FBT1QsS0FBUCxDQUFhNEksZUFBYixDQUE2QitDLGlCQUE3QjtBQUVSO0FBRUosS0FwQkQ7O0FBdUJBaFAsUUFBSThELEVBQUosQ0FBT0UsT0FBUCxDQUFld0MsWUFBZixHQUE4QixVQUFTdUUsRUFBVCxFQUFhOUUsUUFBYixFQUFzQjtBQUNoRCxhQUFJLElBQUl1RCxJQUFJLENBQVosRUFBZUEsSUFBSXhKLElBQUlXLFNBQUosQ0FBY2tDLEtBQWQsQ0FBb0JyRCxNQUF2QyxFQUErQ2dLLEdBQS9DLEVBQW1EO0FBQy9DLGdCQUFJYSxLQUFLckssSUFBSVcsU0FBSixDQUFja0MsS0FBZCxDQUFvQjJHLENBQXBCLENBQVQ7O0FBRUEsZ0JBQUl3QixLQUFLRCxHQUFHekUsQ0FBSCxHQUFPK0QsR0FBRy9ELENBQW5CO0FBQUEsZ0JBQ0kyRSxLQUFLRixHQUFHeEUsQ0FBSCxHQUFPOEQsR0FBRzlELENBRG5CO0FBQUEsZ0JBRUkyRSxPQUFPL0UsS0FBS2dGLElBQUwsQ0FBVUgsS0FBR0EsRUFBSCxHQUFRQyxLQUFHQSxFQUFyQixDQUZYOztBQUlBLGdCQUFHQyxRQUFRSCxHQUFHN0UsTUFBSCxHQUFZbUUsR0FBR25FLE1BQTFCLEVBQWlDO0FBQzdCNkUsbUJBQUd6RSxDQUFILEdBQU9MLFdBQVdBLFNBQVNLLENBQXBCLEdBQXdCSCxLQUFLdkUsTUFBTCxLQUFnQjVCLElBQUlLLE1BQUosQ0FBV0UsQ0FBMUQ7QUFDQXdLLG1CQUFHeEUsQ0FBSCxHQUFPTixXQUFXQSxTQUFTTSxDQUFwQixHQUF3QkosS0FBS3ZFLE1BQUwsS0FBZ0I1QixJQUFJSyxNQUFKLENBQVdJLENBQTFEO0FBQ0FULG9CQUFJOEQsRUFBSixDQUFPRSxPQUFQLENBQWV3QyxZQUFmLENBQTRCdUUsRUFBNUI7QUFDSDtBQUNKO0FBQ0osS0FkRDs7QUFpQkEvSyxRQUFJOEQsRUFBSixDQUFPRSxPQUFQLENBQWVtRSxZQUFmLEdBQThCLFVBQVNLLENBQVQsRUFBVzs7QUFFckM7QUFDQSxZQUFJMEcsU0FBU2xQLElBQUlpRSxHQUFKLENBQVFpRSxVQUFyQjtBQUFBLFlBQ0lpSCxTQUFTLG9CQURiO0FBQUEsWUFFSUMsZ0JBQWdCRixPQUFPRyxPQUFQLENBQWVGLE1BQWYsRUFBdUIsVUFBVUcsQ0FBVixFQUFheEksQ0FBYixFQUFnQkUsQ0FBaEIsRUFBbUJDLENBQW5CLEVBQXNCO0FBQ3pELGdCQUFHdUIsRUFBRXZILEtBQUYsQ0FBUTJGLEdBQVgsRUFBZTtBQUNYLG9CQUFJK0IsY0FBYyxVQUFRSCxFQUFFdkgsS0FBRixDQUFRMkYsR0FBUixDQUFZRSxDQUFwQixHQUFzQixHQUF0QixHQUEwQjBCLEVBQUV2SCxLQUFGLENBQVEyRixHQUFSLENBQVlJLENBQXRDLEdBQXdDLEdBQXhDLEdBQTRDd0IsRUFBRXZILEtBQUYsQ0FBUTJGLEdBQVIsQ0FBWUssQ0FBeEQsR0FBMEQsR0FBMUQsR0FBOER1QixFQUFFN0csT0FBaEUsR0FBd0UsR0FBMUY7QUFDSCxhQUZELE1BRUs7QUFDRCxvQkFBSWdILGNBQWMsVUFBUUgsRUFBRXZILEtBQUYsQ0FBUW1HLEdBQVIsQ0FBWTNHLENBQXBCLEdBQXNCLEdBQXRCLEdBQTBCK0gsRUFBRXZILEtBQUYsQ0FBUW1HLEdBQVIsQ0FBWUYsQ0FBdEMsR0FBd0MsSUFBeEMsR0FBNkNzQixFQUFFdkgsS0FBRixDQUFRbUcsR0FBUixDQUFZRCxDQUF6RCxHQUEyRCxJQUEzRCxHQUFnRXFCLEVBQUU3RyxPQUFsRSxHQUEwRSxHQUE1RjtBQUNIO0FBQ0QsbUJBQU9nSCxXQUFQO0FBQ0gsU0FQZSxDQUZwQjs7QUFXQTtBQUNBLFlBQUk0RyxNQUFNLElBQUlDLElBQUosQ0FBUyxDQUFDSixhQUFELENBQVQsRUFBMEIsRUFBQ2pPLE1BQU0sNkJBQVAsRUFBMUIsQ0FBVjtBQUFBLFlBQ0lzTyxTQUFTMUssT0FBTzJLLEdBQVAsSUFBYzNLLE9BQU80SyxTQUFyQixJQUFrQzVLLE1BRC9DO0FBQUEsWUFFSTZLLE1BQU1ILE9BQU9JLGVBQVAsQ0FBdUJOLEdBQXZCLENBRlY7O0FBSUE7QUFDQSxZQUFJeEgsTUFBTSxJQUFJK0gsS0FBSixFQUFWO0FBQ0EvSCxZQUFJeEMsZ0JBQUosQ0FBcUIsTUFBckIsRUFBNkIsWUFBVTtBQUNuQ2lELGNBQUVULEdBQUYsQ0FBTTNELEdBQU4sR0FBWTJELEdBQVo7QUFDQVMsY0FBRVQsR0FBRixDQUFNTSxNQUFOLEdBQWUsSUFBZjtBQUNBb0gsbUJBQU9NLGVBQVAsQ0FBdUJILEdBQXZCO0FBQ0E1UCxnQkFBSWlFLEdBQUosQ0FBUTRHLFNBQVI7QUFDSCxTQUxEO0FBTUE5QyxZQUFJdEcsR0FBSixHQUFVbU8sR0FBVjtBQUVILEtBN0JEOztBQWdDQTVQLFFBQUk4RCxFQUFKLENBQU9FLE9BQVAsQ0FBZWdNLFVBQWYsR0FBNEIsWUFBVTtBQUNsQ0MsNkJBQXFCalEsSUFBSThELEVBQUosQ0FBTzhHLGFBQTVCO0FBQ0F6SyxrQkFBVXdELE1BQVY7QUFDQXVNLGlCQUFTLElBQVQ7QUFDSCxLQUpEOztBQU9BbFEsUUFBSThELEVBQUosQ0FBT0UsT0FBUCxDQUFlaUYsU0FBZixHQUEyQixVQUFTa0gsQ0FBVCxFQUFZQyxNQUFaLEVBQW9CQyxNQUFwQixFQUE0QkMsVUFBNUIsRUFBd0NDLGtCQUF4QyxFQUE0REMsb0JBQTVELEVBQWlGOztBQUV4RztBQUNBLFlBQUlDLFlBQVlGLHFCQUFxQkMsb0JBQXJDO0FBQ0EsWUFBSUUsZUFBZUgscUJBQXFCQyxvQkFBeEM7QUFDQSxZQUFJRyx1QkFBd0IsT0FBT0QsZUFBZSxDQUF0QixDQUFELEdBQTZCQSxZQUF4RDtBQUNBLFlBQUlFLGdCQUFnQnpLLEtBQUs0QyxFQUFMLEdBQVU1QyxLQUFLNEMsRUFBTCxHQUFVNEgsb0JBQVYsR0FBaUMsR0FBL0QsQ0FOd0csQ0FNcEM7QUFDcEVSLFVBQUVVLElBQUY7QUFDQVYsVUFBRXRILFNBQUY7QUFDQXNILFVBQUVXLFNBQUYsQ0FBWVYsTUFBWixFQUFvQkMsTUFBcEI7QUFDQUYsVUFBRTVFLE1BQUYsQ0FBUyxDQUFULEVBQVcsQ0FBWDtBQUNBLGFBQUssSUFBSS9CLElBQUksQ0FBYixFQUFnQkEsSUFBSWlILFNBQXBCLEVBQStCakgsR0FBL0IsRUFBb0M7QUFDaEMyRyxjQUFFM0UsTUFBRixDQUFTOEUsVUFBVCxFQUFvQixDQUFwQjtBQUNBSCxjQUFFVyxTQUFGLENBQVlSLFVBQVosRUFBdUIsQ0FBdkI7QUFDQUgsY0FBRVksTUFBRixDQUFTSCxhQUFUO0FBQ0g7QUFDRDtBQUNBVCxVQUFFNUcsSUFBRjtBQUNBNEcsVUFBRWEsT0FBRjtBQUVILEtBcEJEOztBQXNCQWhSLFFBQUk4RCxFQUFKLENBQU9FLE9BQVAsQ0FBZWlOLFNBQWYsR0FBMkIsWUFBVTtBQUNqQ2xNLGVBQU9tTSxJQUFQLENBQVlsUixJQUFJSyxNQUFKLENBQVdDLEVBQVgsQ0FBYzZRLFNBQWQsQ0FBd0IsV0FBeEIsQ0FBWixFQUFrRCxRQUFsRDtBQUNILEtBRkQ7O0FBS0FuUixRQUFJOEQsRUFBSixDQUFPRSxPQUFQLENBQWVvTixPQUFmLEdBQXlCLFVBQVNqUSxJQUFULEVBQWM7O0FBRW5DbkIsWUFBSWlFLEdBQUosQ0FBUW9OLFNBQVIsR0FBb0J0SyxTQUFwQjs7QUFFQSxZQUFHL0csSUFBSVcsU0FBSixDQUFjTyxLQUFkLENBQW9CTSxLQUFwQixDQUEwQkMsR0FBMUIsSUFBaUMsRUFBcEMsRUFBdUM7O0FBRW5DLGdCQUFHTixRQUFRLEtBQVgsRUFBaUI7O0FBRWIsb0JBQUltUSxNQUFNLElBQUlDLGNBQUosRUFBVjtBQUNBRCxvQkFBSUosSUFBSixDQUFTLEtBQVQsRUFBZ0JsUixJQUFJVyxTQUFKLENBQWNPLEtBQWQsQ0FBb0JNLEtBQXBCLENBQTBCQyxHQUExQztBQUNBNlAsb0JBQUlFLGtCQUFKLEdBQXlCLFVBQVVDLElBQVYsRUFBZ0I7QUFDckMsd0JBQUdILElBQUlJLFVBQUosSUFBa0IsQ0FBckIsRUFBdUI7QUFDbkIsNEJBQUdKLElBQUkvRSxNQUFKLElBQWMsR0FBakIsRUFBcUI7QUFDakJ2TSxnQ0FBSWlFLEdBQUosQ0FBUWlFLFVBQVIsR0FBcUJ1SixLQUFLRSxhQUFMLENBQW1CQyxRQUF4QztBQUNBNVIsZ0NBQUk4RCxFQUFKLENBQU9FLE9BQVAsQ0FBZTZOLGVBQWY7QUFDSCx5QkFIRCxNQUdLO0FBQ0RDLG9DQUFRQyxHQUFSLENBQVksNkJBQVo7QUFDQS9SLGdDQUFJaUUsR0FBSixDQUFRb04sU0FBUixHQUFvQixJQUFwQjtBQUNIO0FBQ0o7QUFDSixpQkFWRDtBQVdBQyxvQkFBSVUsSUFBSjtBQUVILGFBakJELE1BaUJLOztBQUVELG9CQUFJakssTUFBTSxJQUFJK0gsS0FBSixFQUFWO0FBQ0EvSCxvQkFBSXhDLGdCQUFKLENBQXFCLE1BQXJCLEVBQTZCLFlBQVU7QUFDbkN2Rix3QkFBSWlFLEdBQUosQ0FBUWtGLE9BQVIsR0FBa0JwQixHQUFsQjtBQUNBL0gsd0JBQUk4RCxFQUFKLENBQU9FLE9BQVAsQ0FBZTZOLGVBQWY7QUFDSCxpQkFIRDtBQUlBOUosb0JBQUl0RyxHQUFKLEdBQVV6QixJQUFJVyxTQUFKLENBQWNPLEtBQWQsQ0FBb0JNLEtBQXBCLENBQTBCQyxHQUFwQztBQUVIO0FBRUosU0E5QkQsTUE4Qks7QUFDRHFRLG9CQUFRQyxHQUFSLENBQVksMEJBQVo7QUFDQS9SLGdCQUFJaUUsR0FBSixDQUFRb04sU0FBUixHQUFvQixJQUFwQjtBQUNIO0FBRUosS0F2Q0Q7O0FBMENBclIsUUFBSThELEVBQUosQ0FBT0UsT0FBUCxDQUFldUUsSUFBZixHQUFzQixZQUFVOztBQUU1QixZQUFHdkksSUFBSVcsU0FBSixDQUFjTyxLQUFkLENBQW9CQyxJQUFwQixJQUE0QixPQUEvQixFQUF1Qzs7QUFFbkMsZ0JBQUduQixJQUFJaUUsR0FBSixDQUFRZ0UsUUFBUixJQUFvQixLQUF2QixFQUE2Qjs7QUFFekIsb0JBQUdqSSxJQUFJaUUsR0FBSixDQUFRNEcsU0FBUixJQUFxQjdLLElBQUlXLFNBQUosQ0FBY0MsTUFBZCxDQUFxQkMsS0FBN0MsRUFBbUQ7QUFDL0NiLHdCQUFJOEQsRUFBSixDQUFPNEIsYUFBUDtBQUNBLHdCQUFHLENBQUMxRixJQUFJVyxTQUFKLENBQWMwQixJQUFkLENBQW1CdEIsTUFBdkIsRUFBK0IySix1QkFBdUIxSyxJQUFJOEQsRUFBSixDQUFPOEcsYUFBOUIsRUFBL0IsS0FDSzVLLElBQUk4RCxFQUFKLENBQU84RyxhQUFQLEdBQXVCcUgsaUJBQWlCalMsSUFBSThELEVBQUosQ0FBT0UsT0FBUCxDQUFldUUsSUFBaEMsQ0FBdkI7QUFDUixpQkFKRCxNQUlLO0FBQ0Q7QUFDQSx3QkFBRyxDQUFDdkksSUFBSWlFLEdBQUosQ0FBUW9OLFNBQVosRUFBdUJyUixJQUFJOEQsRUFBSixDQUFPOEcsYUFBUCxHQUF1QnFILGlCQUFpQmpTLElBQUk4RCxFQUFKLENBQU9FLE9BQVAsQ0FBZXVFLElBQWhDLENBQXZCO0FBQzFCO0FBRUosYUFYRCxNQVdLOztBQUVELG9CQUFHdkksSUFBSWlFLEdBQUosQ0FBUWtGLE9BQVIsSUFBbUJwQyxTQUF0QixFQUFnQztBQUM1Qi9HLHdCQUFJOEQsRUFBSixDQUFPNEIsYUFBUDtBQUNBLHdCQUFHLENBQUMxRixJQUFJVyxTQUFKLENBQWMwQixJQUFkLENBQW1CdEIsTUFBdkIsRUFBK0IySix1QkFBdUIxSyxJQUFJOEQsRUFBSixDQUFPOEcsYUFBOUIsRUFBL0IsS0FDSzVLLElBQUk4RCxFQUFKLENBQU84RyxhQUFQLEdBQXVCcUgsaUJBQWlCalMsSUFBSThELEVBQUosQ0FBT0UsT0FBUCxDQUFldUUsSUFBaEMsQ0FBdkI7QUFDUixpQkFKRCxNQUlLO0FBQ0Qsd0JBQUcsQ0FBQ3ZJLElBQUlpRSxHQUFKLENBQVFvTixTQUFaLEVBQXVCclIsSUFBSThELEVBQUosQ0FBTzhHLGFBQVAsR0FBdUJxSCxpQkFBaUJqUyxJQUFJOEQsRUFBSixDQUFPRSxPQUFQLENBQWV1RSxJQUFoQyxDQUF2QjtBQUMxQjtBQUVKO0FBRUosU0F6QkQsTUF5Qks7QUFDRHZJLGdCQUFJOEQsRUFBSixDQUFPNEIsYUFBUDtBQUNBLGdCQUFHLENBQUMxRixJQUFJVyxTQUFKLENBQWMwQixJQUFkLENBQW1CdEIsTUFBdkIsRUFBK0IySix1QkFBdUIxSyxJQUFJOEQsRUFBSixDQUFPOEcsYUFBOUIsRUFBL0IsS0FDSzVLLElBQUk4RCxFQUFKLENBQU84RyxhQUFQLEdBQXVCcUgsaUJBQWlCalMsSUFBSThELEVBQUosQ0FBT0UsT0FBUCxDQUFldUUsSUFBaEMsQ0FBdkI7QUFDUjtBQUVKLEtBakNEOztBQW9DQXZJLFFBQUk4RCxFQUFKLENBQU9FLE9BQVAsQ0FBZTZOLGVBQWYsR0FBaUMsWUFBVTs7QUFFdkM7QUFDQSxZQUFHN1IsSUFBSVcsU0FBSixDQUFjTyxLQUFkLENBQW9CQyxJQUFwQixJQUE0QixPQUEvQixFQUF1Qzs7QUFFbkMsZ0JBQUduQixJQUFJaUUsR0FBSixDQUFRZ0UsUUFBUixJQUFvQixLQUFwQixJQUE2QmpJLElBQUlpRSxHQUFKLENBQVFpRSxVQUFSLElBQXNCbkIsU0FBdEQsRUFBZ0U7QUFDNUQvRyxvQkFBSWlFLEdBQUosQ0FBUTBHLGNBQVIsR0FBeUJzSCxpQkFBaUJDLEtBQWpCLENBQXpCO0FBQ0gsYUFGRCxNQUVLO0FBQ0Q7QUFDQXhILHVDQUF1QjFLLElBQUlpRSxHQUFKLENBQVEwRyxjQUEvQjtBQUNBLG9CQUFHLENBQUMzSyxJQUFJaUUsR0FBSixDQUFRb04sU0FBWixFQUFzQjtBQUNsQnJSLHdCQUFJOEQsRUFBSixDQUFPRSxPQUFQLENBQWVtSSxJQUFmO0FBQ0FuTSx3QkFBSThELEVBQUosQ0FBT0UsT0FBUCxDQUFldUUsSUFBZjtBQUNIO0FBRUo7QUFFSixTQWRELE1BY0s7QUFDRHZJLGdCQUFJOEQsRUFBSixDQUFPRSxPQUFQLENBQWVtSSxJQUFmO0FBQ0FuTSxnQkFBSThELEVBQUosQ0FBT0UsT0FBUCxDQUFldUUsSUFBZjtBQUNIO0FBRUosS0F0QkQ7O0FBeUJBdkksUUFBSThELEVBQUosQ0FBT0UsT0FBUCxDQUFlbUksSUFBZixHQUFzQixZQUFVOztBQUU1QjtBQUNBbk0sWUFBSThELEVBQUosQ0FBT2dCLFVBQVA7QUFDQTlFLFlBQUk4RCxFQUFKLENBQU9xQixVQUFQO0FBQ0FuRixZQUFJOEQsRUFBSixDQUFPd0IsVUFBUDtBQUNBdEYsWUFBSThELEVBQUosQ0FBTzhCLFdBQVA7QUFDQTVGLFlBQUk4RCxFQUFKLENBQU8yQixlQUFQO0FBQ0F6RixZQUFJOEQsRUFBSixDQUFPRSxPQUFQLENBQWUyQixvQkFBZjs7QUFFQTtBQUNBM0YsWUFBSVcsU0FBSixDQUFjd0IsV0FBZCxDQUEwQm1KLGNBQTFCLEdBQTJDekUsU0FBUzdHLElBQUlXLFNBQUosQ0FBY3dCLFdBQWQsQ0FBMEJsQixLQUFuQyxDQUEzQztBQUVILEtBYkQ7O0FBZ0JBakIsUUFBSThELEVBQUosQ0FBT0UsT0FBUCxDQUFlOEcsS0FBZixHQUF1QixZQUFVOztBQUU3QixZQUFHZCxVQUFVLE9BQVYsRUFBbUJoSyxJQUFJVyxTQUFKLENBQWNPLEtBQWQsQ0FBb0JDLElBQXZDLENBQUgsRUFBZ0Q7QUFDNUNuQixnQkFBSWlFLEdBQUosQ0FBUWdFLFFBQVIsR0FBbUJqSSxJQUFJVyxTQUFKLENBQWNPLEtBQWQsQ0FBb0JNLEtBQXBCLENBQTBCQyxHQUExQixDQUE4QjBRLE1BQTlCLENBQXFDblMsSUFBSVcsU0FBSixDQUFjTyxLQUFkLENBQW9CTSxLQUFwQixDQUEwQkMsR0FBMUIsQ0FBOEJqQyxNQUE5QixHQUF1QyxDQUE1RSxDQUFuQjtBQUNBUSxnQkFBSThELEVBQUosQ0FBT0UsT0FBUCxDQUFlb04sT0FBZixDQUF1QnBSLElBQUlpRSxHQUFKLENBQVFnRSxRQUEvQjtBQUNILFNBSEQsTUFHSztBQUNEakksZ0JBQUk4RCxFQUFKLENBQU9FLE9BQVAsQ0FBZTZOLGVBQWY7QUFDSDtBQUVKLEtBVEQ7O0FBY0E7O0FBR0E3UixRQUFJOEQsRUFBSixDQUFPRSxPQUFQLENBQWV1SyxlQUFmOztBQUVBdk8sUUFBSThELEVBQUosQ0FBT0UsT0FBUCxDQUFlOEcsS0FBZjtBQUlILENBMTNDRDs7QUE0M0NBOztBQUVBNUcsT0FBT0MsVUFBUCxHQUFvQixVQUFTaU8sV0FBVCxFQUFzQkMsTUFBdEIsRUFBOEI7QUFDOUMsU0FBSyxJQUFJQyxRQUFULElBQXFCRCxNQUFyQixFQUE2QjtBQUN6QixZQUFJQSxPQUFPQyxRQUFQLEtBQW9CRCxPQUFPQyxRQUFQLEVBQWlCQyxXQUFyQyxJQUNBRixPQUFPQyxRQUFQLEVBQWlCQyxXQUFqQixLQUFpQ3JPLE1BRHJDLEVBQzZDO0FBQ3pDa08sd0JBQVlFLFFBQVosSUFBd0JGLFlBQVlFLFFBQVosS0FBeUIsRUFBakQ7QUFDQUUsc0JBQVVDLE1BQVYsQ0FBaUJMLFlBQVlFLFFBQVosQ0FBakIsRUFBd0NELE9BQU9DLFFBQVAsQ0FBeEM7QUFDSCxTQUpELE1BSU87QUFDSEYsd0JBQVlFLFFBQVosSUFBd0JELE9BQU9DLFFBQVAsQ0FBeEI7QUFDSDtBQUNKO0FBQ0QsV0FBT0YsV0FBUDtBQUNILENBWEQ7O0FBYUFyTixPQUFPa04sZ0JBQVAsR0FBMkIsWUFBVTtBQUNqQyxXQUFRbE4sT0FBTzJOLHFCQUFQLElBQ0ozTixPQUFPNE4sMkJBREgsSUFFSjVOLE9BQU82Tix3QkFGSCxJQUdKN04sT0FBTzhOLHNCQUhILElBSUo5TixPQUFPK04sdUJBSkgsSUFLSixVQUFTQyxRQUFULEVBQWtCO0FBQ2RoTyxlQUFPOEosVUFBUCxDQUFrQmtFLFFBQWxCLEVBQTRCLE9BQU8sRUFBbkM7QUFDSCxLQVBMO0FBUUgsQ0FUeUIsRUFBMUI7O0FBV0FoTyxPQUFPMkYsc0JBQVAsR0FBa0MsWUFBVztBQUN6QyxXQUFPM0YsT0FBT2tMLG9CQUFQLElBQ0hsTCxPQUFPaU8saUNBREosSUFFSGpPLE9BQU9rTyw4QkFGSixJQUdIbE8sT0FBT21PLDRCQUhKLElBSUhuTyxPQUFPb08sNkJBSkosSUFLSEMsWUFMSjtBQU1ILENBUCtCLEVBQWhDOztBQVNBLFNBQVN2TSxRQUFULENBQWtCd00sR0FBbEIsRUFBc0I7QUFDbEI7QUFDQTtBQUNBLFFBQUlDLGlCQUFpQixrQ0FBckI7QUFDQUQsVUFBTUEsSUFBSWhFLE9BQUosQ0FBWWlFLGNBQVosRUFBNEIsVUFBU2hFLENBQVQsRUFBWXhJLENBQVosRUFBZUUsQ0FBZixFQUFrQkMsQ0FBbEIsRUFBcUI7QUFDbkQsZUFBT0gsSUFBSUEsQ0FBSixHQUFRRSxDQUFSLEdBQVlBLENBQVosR0FBZ0JDLENBQWhCLEdBQW9CQSxDQUEzQjtBQUNILEtBRkssQ0FBTjtBQUdBLFFBQUlzTSxTQUFTLDRDQUE0Q0MsSUFBNUMsQ0FBaURILEdBQWpELENBQWI7QUFDQSxXQUFPRSxTQUFTO0FBQ1p6TSxXQUFHMk0sU0FBU0YsT0FBTyxDQUFQLENBQVQsRUFBb0IsRUFBcEIsQ0FEUztBQUVadk0sV0FBR3lNLFNBQVNGLE9BQU8sQ0FBUCxDQUFULEVBQW9CLEVBQXBCLENBRlM7QUFHWnRNLFdBQUd3TSxTQUFTRixPQUFPLENBQVAsQ0FBVCxFQUFvQixFQUFwQjtBQUhTLEtBQVQsR0FJSCxJQUpKO0FBS0g7O0FBRUQsU0FBUzNGLEtBQVQsQ0FBZWhOLE1BQWYsRUFBdUI4UyxHQUF2QixFQUE0QkMsR0FBNUIsRUFBaUM7QUFDN0IsV0FBT3hOLEtBQUt1TixHQUFMLENBQVN2TixLQUFLd04sR0FBTCxDQUFTL1MsTUFBVCxFQUFpQjhTLEdBQWpCLENBQVQsRUFBZ0NDLEdBQWhDLENBQVA7QUFDSDs7QUFFRCxTQUFTM0osU0FBVCxDQUFtQm5KLEtBQW5CLEVBQTBCZ0MsS0FBMUIsRUFBaUM7QUFDN0IsV0FBT0EsTUFBTStRLE9BQU4sQ0FBYy9TLEtBQWQsSUFBdUIsQ0FBQyxDQUEvQjtBQUNIOztBQUdEOztBQUVBa0UsT0FBT21MLE1BQVAsR0FBZ0IsRUFBaEI7O0FBRUFuTCxPQUFPOE8sV0FBUCxHQUFxQixVQUFTNVQsTUFBVCxFQUFpQkMsTUFBakIsRUFBd0I7O0FBRXpDOztBQUVBO0FBQ0EsUUFBRyxPQUFPRCxNQUFQLElBQWtCLFFBQXJCLEVBQThCO0FBQzFCQyxpQkFBU0QsTUFBVDtBQUNBQSxpQkFBUyxjQUFUO0FBQ0g7O0FBRUQ7QUFDQSxRQUFHLENBQUNBLE1BQUosRUFBVztBQUNQQSxpQkFBUyxjQUFUO0FBQ0g7O0FBRUQ7QUFDQSxRQUFJNlQsVUFBVTNVLFNBQVNDLGNBQVQsQ0FBd0JhLE1BQXhCLENBQWQ7QUFBQSxRQUNJOFQsbUJBQW1CLHdCQUR2QjtBQUFBLFFBRUlDLGVBQWVGLFFBQVFHLHNCQUFSLENBQStCRixnQkFBL0IsQ0FGbkI7O0FBSUE7QUFDQSxRQUFHQyxhQUFheFUsTUFBaEIsRUFBdUI7QUFDbkIsZUFBTXdVLGFBQWF4VSxNQUFiLEdBQXNCLENBQTVCLEVBQThCO0FBQzFCc1Usb0JBQVFJLFdBQVIsQ0FBb0JGLGFBQWEsQ0FBYixDQUFwQjtBQUNIO0FBQ0o7O0FBRUQ7QUFDQSxRQUFJN1QsWUFBWWhCLFNBQVNnVixhQUFULENBQXVCLFFBQXZCLENBQWhCO0FBQ0FoVSxjQUFVaVUsU0FBVixHQUFzQkwsZ0JBQXRCOztBQUVBO0FBQ0E1VCxjQUFVVCxLQUFWLENBQWdCMkIsS0FBaEIsR0FBd0IsTUFBeEI7QUFDQWxCLGNBQVVULEtBQVYsQ0FBZ0JnQyxNQUFoQixHQUF5QixNQUF6Qjs7QUFFQTtBQUNBLFFBQUlyQixTQUFTbEIsU0FBU0MsY0FBVCxDQUF3QmEsTUFBeEIsRUFBZ0NvVSxXQUFoQyxDQUE0Q2xVLFNBQTVDLENBQWI7O0FBRUE7QUFDQSxRQUFHRSxVQUFVLElBQWIsRUFBa0I7QUFDZDZQLGVBQU8zUSxJQUFQLENBQVksSUFBSVMsR0FBSixDQUFRQyxNQUFSLEVBQWdCQyxNQUFoQixDQUFaO0FBQ0g7QUFFSixDQTNDRDs7QUE2Q0E2RSxPQUFPOE8sV0FBUCxDQUFtQlMsSUFBbkIsR0FBMEIsVUFBU3JVLE1BQVQsRUFBaUJzVSxnQkFBakIsRUFBbUN4QixRQUFuQyxFQUE0Qzs7QUFFbEU7QUFDQSxRQUFJekIsTUFBTSxJQUFJQyxjQUFKLEVBQVY7QUFDQUQsUUFBSUosSUFBSixDQUFTLEtBQVQsRUFBZ0JxRCxnQkFBaEI7QUFDQWpELFFBQUlFLGtCQUFKLEdBQXlCLFVBQVVDLElBQVYsRUFBZ0I7QUFDckMsWUFBR0gsSUFBSUksVUFBSixJQUFrQixDQUFyQixFQUF1QjtBQUNuQixnQkFBR0osSUFBSS9FLE1BQUosSUFBYyxHQUFqQixFQUFxQjtBQUNqQixvQkFBSXJNLFNBQVNzVSxLQUFLQyxLQUFMLENBQVdoRCxLQUFLRSxhQUFMLENBQW1CQyxRQUE5QixDQUFiO0FBQ0E3TSx1QkFBTzhPLFdBQVAsQ0FBbUI1VCxNQUFuQixFQUEyQkMsTUFBM0I7QUFDQSxvQkFBRzZTLFFBQUgsRUFBYUE7QUFDaEIsYUFKRCxNQUlLO0FBQ0RqQix3QkFBUUMsR0FBUixDQUFZLHdDQUFzQ1QsSUFBSS9FLE1BQXREO0FBQ0F1Rix3QkFBUUMsR0FBUixDQUFZLG1DQUFaO0FBQ0g7QUFDSjtBQUNKLEtBWEQ7QUFZQVQsUUFBSVUsSUFBSjtBQUVILENBbkJEOztBQXFCQTZCLFlBQVksY0FBWixFQUE0QjtBQUN4QixpQkFBYTtBQUNULGtCQUFVO0FBQ04scUJBQVMsR0FESDtBQUVOLHVCQUFXO0FBQ1AsMEJBQVUsSUFESDtBQUVQLDhCQUFjO0FBRlA7QUFGTCxTQUREO0FBUVQsaUJBQVM7QUFDTCxxQkFBUztBQURKLFNBUkE7QUFXVCxpQkFBUztBQUNMLG9CQUFRLFFBREg7QUFFTCxzQkFBVTtBQUNOLHlCQUFTLENBREg7QUFFTix5QkFBUztBQUZILGFBRkw7QUFNTCx1QkFBVztBQUNQLDRCQUFZO0FBREwsYUFOTjtBQVNMLHFCQUFTO0FBQ0wsdUJBQU8sZ0JBREY7QUFFTCx5QkFBUyxHQUZKO0FBR0wsMEJBQVU7QUFITDtBQVRKLFNBWEE7QUEwQlQsbUJBQVc7QUFDUCxxQkFBUyxDQURGO0FBRVAsc0JBQVUsSUFGSDtBQUdQLG9CQUFRO0FBQ0osMEJBQVUsSUFETjtBQUVKLHlCQUFTLENBRkw7QUFHSiwrQkFBZSxDQUhYO0FBSUosd0JBQVE7QUFKSjtBQUhELFNBMUJGO0FBb0NULGdCQUFRO0FBQ0oscUJBQVMsQ0FETDtBQUVKLHNCQUFVLElBRk47QUFHSixvQkFBUTtBQUNKLDBCQUFVLElBRE47QUFFSix5QkFBUyxDQUZMO0FBR0osNEJBQVksR0FIUjtBQUlKLHdCQUFRO0FBSko7QUFISixTQXBDQztBQThDVCx1QkFBZTtBQUNYLHNCQUFVLElBREM7QUFFWCx3QkFBWSxrQkFGRDtBQUdYLHFCQUFTLFNBSEU7QUFJWCx1QkFBVyxrQkFKQTtBQUtYLHFCQUFTO0FBTEUsU0E5Q047QUFxRFQsZ0JBQVE7QUFDSixzQkFBVSxJQUROO0FBRUoscUJBQVMsaUJBRkw7QUFHSix5QkFBYSxNQUhUO0FBSUosc0JBQVUsSUFKTjtBQUtKLHdCQUFZLEtBTFI7QUFNSix3QkFBWSxLQU5SO0FBT0osc0JBQVUsS0FQTjtBQVFKLHVCQUFXO0FBQ1AsMEJBQVUsS0FESDtBQUVQLDJCQUFXLEdBRko7QUFHUCwyQkFBVztBQUhKO0FBUlA7QUFyREMsS0FEVztBQXFFeEIscUJBQWlCO0FBQ2IscUJBQWEsUUFEQTtBQUViLGtCQUFVO0FBQ04sdUJBQVc7QUFDUCwwQkFBVSxJQURIO0FBRVAsd0JBQVE7QUFGRCxhQURMO0FBS04sdUJBQVc7QUFDUCwwQkFBVSxLQURIO0FBRVAsd0JBQVE7QUFGRCxhQUxMO0FBU04sc0JBQVU7QUFUSixTQUZHO0FBYWIsaUJBQVM7QUFDTCxvQkFBUTtBQUNKLDRCQUFZLEdBRFI7QUFFSiwrQkFBZTtBQUNYLCtCQUFXO0FBREE7QUFGWCxhQURIO0FBT0wsc0JBQVU7QUFDTiw0QkFBWSxHQUROO0FBRU4sd0JBQVEsQ0FGRjtBQUdOLDRCQUFZLENBSE47QUFJTiwyQkFBVyxDQUpMO0FBS04seUJBQVM7QUFMSCxhQVBMO0FBY0wsdUJBQVc7QUFDUCw0QkFBWSxFQURMO0FBRVAsNEJBQVk7QUFGTCxhQWROO0FBa0JMLG9CQUFRO0FBQ0osZ0NBQWdCO0FBRFosYUFsQkg7QUFxQkwsc0JBQVU7QUFDTixnQ0FBZ0I7QUFEVjtBQXJCTDtBQWJJLEtBckVPO0FBNEd4QixxQkFBaUI7QUE1R08sQ0FBNUI7O0FBK0dBbkIsd0IiLCJmaWxlIjoianMvYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Fzc2V0cy9cIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vYXNzZXRzL2pzL2FwcC5qc1wiKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA0NDdhYTNiNTJlMzgxN2MxNmQ0ZSIsInJlcXVpcmUoJy4vaW5zY3JpcHRpb24nKTtcclxucmVxdWlyZSgnLi9wYXJ0aWNsZXMnKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hc3NldHMvanMvYXBwLmpzIiwidmFyIGFsZXJ0UmVkSW5wdXQgPSBcIiM4QzEwMTBcIjtcclxudmFyIGRlZmF1bHRJbnB1dCA9IFwicmdiYSgxMCwgMTgwLCAxODAsIDEpXCI7XHJcblxyXG5mdW5jdGlvbiB1c2VyTmFtZVZhbGlkYXRpb24odXNlcm5hbWVJbnB1dCkge1xyXG4gICAgdmFyIHVzZXJuYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ1c2VybmFtZVwiKTtcclxuICAgIHZhciBpc3N1ZUFyciA9IFtdO1xyXG4gICAgaWYgKC9bLSFAIyQlXiYqKClfK3x+PWB7fVxcW1xcXTpcIjsnPD4/LC5cXC9dLy50ZXN0KHVzZXJuYW1lSW5wdXQpKSB7XHJcbiAgICAgICAgaXNzdWVBcnIucHVzaChcIk5vIHNwZWNpYWwgY2hhcmFjdGVycyFcIik7XHJcbiAgICB9XHJcbiAgICBpZiAoaXNzdWVBcnIubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIHVzZXJuYW1lLnNldEN1c3RvbVZhbGlkaXR5KGlzc3VlQXJyKTtcclxuICAgICAgICB1c2VybmFtZS5zdHlsZS5ib3JkZXJDb2xvciA9IGFsZXJ0UmVkSW5wdXQ7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHVzZXJuYW1lLnNldEN1c3RvbVZhbGlkaXR5KFwiXCIpO1xyXG4gICAgICAgIHVzZXJuYW1lLnN0eWxlLmJvcmRlckNvbG9yID0gZGVmYXVsdElucHV0O1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBwYXNzd29yZFZhbGlkYXRpb24ocGFzc3dvcmRJbnB1dCkge1xyXG4gICAgdmFyIHBhc3N3b3JkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwYXNzd29yZFwiKTtcclxuICAgIHZhciBpc3N1ZUFyciA9IFtdO1xyXG4gICAgaWYgKCEvXi57NywxNX0kLy50ZXN0KHBhc3N3b3JkSW5wdXQpKSB7XHJcbiAgICAgICAgaXNzdWVBcnIucHVzaChcIlBhc3N3b3JkIG11c3QgYmUgYmV0d2VlbiA3LTE1IGNoYXJhY3RlcnMuXCIpO1xyXG4gICAgfVxyXG4gICAgaWYgKCEvXFxkLy50ZXN0KHBhc3N3b3JkSW5wdXQpKSB7XHJcbiAgICAgICAgaXNzdWVBcnIucHVzaChcIk11c3QgY29udGFpbiBhdCBsZWFzdCBvbmUgbnVtYmVyLlwiKTtcclxuICAgIH1cclxuICAgIGlmICghL1thLXpdLy50ZXN0KHBhc3N3b3JkSW5wdXQpKSB7XHJcbiAgICAgICAgaXNzdWVBcnIucHVzaChcIk11c3QgY29udGFpbiBhIGxvd2VyY2FzZSBsZXR0ZXIuXCIpO1xyXG4gICAgfVxyXG4gICAgaWYgKCEvW0EtWl0vLnRlc3QocGFzc3dvcmRJbnB1dCkpIHtcclxuICAgICAgICBpc3N1ZUFyci5wdXNoKFwiTXVzdCBjb250YWluIGFuIHVwcGVyY2FzZSBsZXR0ZXIuXCIpO1xyXG4gICAgfVxyXG4gICAgaWYgKGlzc3VlQXJyLmxlbmd0aCA+IDApIHtcclxuICAgICAgICBwYXNzd29yZC5zZXRDdXN0b21WYWxpZGl0eShpc3N1ZUFyci5qb2luKFwiXFxuXCIpKTtcclxuICAgICAgICBwYXNzd29yZC5zdHlsZS5ib3JkZXJDb2xvciA9IGFsZXJ0UmVkSW5wdXQ7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHBhc3N3b3JkLnNldEN1c3RvbVZhbGlkaXR5KFwiXCIpO1xyXG4gICAgICAgIHBhc3N3b3JkLnN0eWxlLmJvcmRlckNvbG9yID0gZGVmYXVsdElucHV0O1xyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Fzc2V0cy9qcy9pbnNjcmlwdGlvbi5qcyIsIlxyXG52YXIgcEpTID0gZnVuY3Rpb24odGFnX2lkLCBwYXJhbXMpe1xyXG5cclxuICAgIHZhciBjYW52YXNfZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjJyt0YWdfaWQrJyA+IC5wYXJ0aWNsZXMtanMtY2FudmFzLWVsJyk7XHJcblxyXG4gICAgLyogcGFydGljbGVzLmpzIHZhcmlhYmxlcyB3aXRoIGRlZmF1bHQgdmFsdWVzICovXHJcbiAgICB0aGlzLnBKUyA9IHtcclxuICAgICAgICBjYW52YXM6IHtcclxuICAgICAgICAgICAgZWw6IGNhbnZhc19lbCxcclxuICAgICAgICAgICAgdzogY2FudmFzX2VsLm9mZnNldFdpZHRoLFxyXG4gICAgICAgICAgICBoOiBjYW52YXNfZWwub2Zmc2V0SGVpZ2h0XHJcbiAgICAgICAgfSxcclxuICAgICAgICBwYXJ0aWNsZXM6IHtcclxuICAgICAgICAgICAgbnVtYmVyOiB7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogMTAwLFxyXG4gICAgICAgICAgICAgICAgZGVuc2l0eToge1xyXG4gICAgICAgICAgICAgICAgICAgIGVuYWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZV9hcmVhOiAyMDBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgY29sb3I6IHtcclxuICAgICAgICAgICAgICAgIHZhbHVlOiAnI2ZmZidcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgc2hhcGU6IHtcclxuICAgICAgICAgICAgICAgIHR5cGU6ICdjaXJjbGUnLFxyXG4gICAgICAgICAgICAgICAgc3Ryb2tlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICcjZmYwMDAwJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHBvbHlnb246IHtcclxuICAgICAgICAgICAgICAgICAgICBuYl9zaWRlczogM1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGltYWdlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3JjOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwLFxyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIG9wYWNpdHk6IHtcclxuICAgICAgICAgICAgICAgIHZhbHVlOiAxLFxyXG4gICAgICAgICAgICAgICAgcmFuZG9tOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgYW5pbToge1xyXG4gICAgICAgICAgICAgICAgICAgIGVuYWJsZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgc3BlZWQ6IDIsXHJcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eV9taW46IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgc3luYzogZmFsc2VcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgc2l6ZToge1xyXG4gICAgICAgICAgICAgICAgdmFsdWU6IDIwLFxyXG4gICAgICAgICAgICAgICAgcmFuZG9tOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGFuaW06IHtcclxuICAgICAgICAgICAgICAgICAgICBlbmFibGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIHNwZWVkOiAyMCxcclxuICAgICAgICAgICAgICAgICAgICBzaXplX21pbjogMCxcclxuICAgICAgICAgICAgICAgICAgICBzeW5jOiBmYWxzZVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBsaW5lX2xpbmtlZDoge1xyXG4gICAgICAgICAgICAgICAgZW5hYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgZGlzdGFuY2U6IDEwMCxcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAnI2ZmZicsXHJcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAxLFxyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDFcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgbW92ZToge1xyXG4gICAgICAgICAgICAgICAgZW5hYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgc3BlZWQ6IDIsXHJcbiAgICAgICAgICAgICAgICBkaXJlY3Rpb246ICdub25lJyxcclxuICAgICAgICAgICAgICAgIHJhbmRvbTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBzdHJhaWdodDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBvdXRfbW9kZTogJ291dCcsXHJcbiAgICAgICAgICAgICAgICBib3VuY2U6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgYXR0cmFjdDoge1xyXG4gICAgICAgICAgICAgICAgICAgIGVuYWJsZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgcm90YXRlWDogMzAwMCxcclxuICAgICAgICAgICAgICAgICAgICByb3RhdGVZOiAzMDAwXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGFycmF5OiBbXVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgaW50ZXJhY3Rpdml0eToge1xyXG4gICAgICAgICAgICBkZXRlY3Rfb246ICdjYW52YXMnLFxyXG4gICAgICAgICAgICBldmVudHM6IHtcclxuICAgICAgICAgICAgICAgIG9uaG92ZXI6IHtcclxuICAgICAgICAgICAgICAgICAgICBlbmFibGU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgbW9kZTogJ2dyYWInXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgb25jbGljazoge1xyXG4gICAgICAgICAgICAgICAgICAgIGVuYWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICBtb2RlOiAncHVzaCdcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICByZXNpemU6IHRydWVcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgbW9kZXM6IHtcclxuICAgICAgICAgICAgICAgIGdyYWI6e1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3RhbmNlOiAxMDAsXHJcbiAgICAgICAgICAgICAgICAgICAgbGluZV9saW5rZWQ6e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGJ1YmJsZTp7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzdGFuY2U6IDEwMCxcclxuICAgICAgICAgICAgICAgICAgICBzaXplOiA4MCxcclxuICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogMC40XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgcmVwdWxzZTp7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzdGFuY2U6IDIwMCxcclxuICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogMC40XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgcHVzaDp7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFydGljbGVzX25iOiA0XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgcmVtb3ZlOntcclxuICAgICAgICAgICAgICAgICAgICBwYXJ0aWNsZXNfbmI6IDJcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgbW91c2U6e31cclxuICAgICAgICB9LFxyXG4gICAgICAgIHJldGluYV9kZXRlY3Q6IGZhbHNlLFxyXG4gICAgICAgIGZuOiB7XHJcbiAgICAgICAgICAgIGludGVyYWN0OiB7fSxcclxuICAgICAgICAgICAgbW9kZXM6IHt9LFxyXG4gICAgICAgICAgICB2ZW5kb3JzOnt9XHJcbiAgICAgICAgfSxcclxuICAgICAgICB0bXA6IHt9XHJcbiAgICB9O1xyXG5cclxuICAgIHZhciBwSlMgPSB0aGlzLnBKUztcclxuXHJcbiAgICAvKiBwYXJhbXMgc2V0dGluZ3MgKi9cclxuICAgIGlmKHBhcmFtcyl7XHJcbiAgICAgICAgT2JqZWN0LmRlZXBFeHRlbmQocEpTLCBwYXJhbXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHBKUy50bXAub2JqID0ge1xyXG4gICAgICAgIHNpemVfdmFsdWU6IHBKUy5wYXJ0aWNsZXMuc2l6ZS52YWx1ZSxcclxuICAgICAgICBzaXplX2FuaW1fc3BlZWQ6IHBKUy5wYXJ0aWNsZXMuc2l6ZS5hbmltLnNwZWVkLFxyXG4gICAgICAgIG1vdmVfc3BlZWQ6IHBKUy5wYXJ0aWNsZXMubW92ZS5zcGVlZCxcclxuICAgICAgICBsaW5lX2xpbmtlZF9kaXN0YW5jZTogcEpTLnBhcnRpY2xlcy5saW5lX2xpbmtlZC5kaXN0YW5jZSxcclxuICAgICAgICBsaW5lX2xpbmtlZF93aWR0aDogcEpTLnBhcnRpY2xlcy5saW5lX2xpbmtlZC53aWR0aCxcclxuICAgICAgICBtb2RlX2dyYWJfZGlzdGFuY2U6IHBKUy5pbnRlcmFjdGl2aXR5Lm1vZGVzLmdyYWIuZGlzdGFuY2UsXHJcbiAgICAgICAgbW9kZV9idWJibGVfZGlzdGFuY2U6IHBKUy5pbnRlcmFjdGl2aXR5Lm1vZGVzLmJ1YmJsZS5kaXN0YW5jZSxcclxuICAgICAgICBtb2RlX2J1YmJsZV9zaXplOiBwSlMuaW50ZXJhY3Rpdml0eS5tb2Rlcy5idWJibGUuc2l6ZSxcclxuICAgICAgICBtb2RlX3JlcHVsc2VfZGlzdGFuY2U6IHBKUy5pbnRlcmFjdGl2aXR5Lm1vZGVzLnJlcHVsc2UuZGlzdGFuY2VcclxuICAgIH07XHJcblxyXG5cclxuICAgIHBKUy5mbi5yZXRpbmFJbml0ID0gZnVuY3Rpb24oKXtcclxuXHJcbiAgICAgICAgaWYocEpTLnJldGluYV9kZXRlY3QgJiYgd2luZG93LmRldmljZVBpeGVsUmF0aW8gPiAxKXtcclxuICAgICAgICAgICAgcEpTLmNhbnZhcy5weHJhdGlvID0gd2luZG93LmRldmljZVBpeGVsUmF0aW87XHJcbiAgICAgICAgICAgIHBKUy50bXAucmV0aW5hID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgcEpTLmNhbnZhcy5weHJhdGlvID0gMTtcclxuICAgICAgICAgICAgcEpTLnRtcC5yZXRpbmEgPSBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHBKUy5jYW52YXMudyA9IHBKUy5jYW52YXMuZWwub2Zmc2V0V2lkdGggKiBwSlMuY2FudmFzLnB4cmF0aW87XHJcbiAgICAgICAgcEpTLmNhbnZhcy5oID0gcEpTLmNhbnZhcy5lbC5vZmZzZXRIZWlnaHQgKiBwSlMuY2FudmFzLnB4cmF0aW87XHJcblxyXG4gICAgICAgIHBKUy5wYXJ0aWNsZXMuc2l6ZS52YWx1ZSA9IHBKUy50bXAub2JqLnNpemVfdmFsdWUgKiBwSlMuY2FudmFzLnB4cmF0aW87XHJcbiAgICAgICAgcEpTLnBhcnRpY2xlcy5zaXplLmFuaW0uc3BlZWQgPSBwSlMudG1wLm9iai5zaXplX2FuaW1fc3BlZWQgKiBwSlMuY2FudmFzLnB4cmF0aW87XHJcbiAgICAgICAgcEpTLnBhcnRpY2xlcy5tb3ZlLnNwZWVkID0gcEpTLnRtcC5vYmoubW92ZV9zcGVlZCAqIHBKUy5jYW52YXMucHhyYXRpbztcclxuICAgICAgICBwSlMucGFydGljbGVzLmxpbmVfbGlua2VkLmRpc3RhbmNlID0gcEpTLnRtcC5vYmoubGluZV9saW5rZWRfZGlzdGFuY2UgKiBwSlMuY2FudmFzLnB4cmF0aW87XHJcbiAgICAgICAgcEpTLmludGVyYWN0aXZpdHkubW9kZXMuZ3JhYi5kaXN0YW5jZSA9IHBKUy50bXAub2JqLm1vZGVfZ3JhYl9kaXN0YW5jZSAqIHBKUy5jYW52YXMucHhyYXRpbztcclxuICAgICAgICBwSlMuaW50ZXJhY3Rpdml0eS5tb2Rlcy5idWJibGUuZGlzdGFuY2UgPSBwSlMudG1wLm9iai5tb2RlX2J1YmJsZV9kaXN0YW5jZSAqIHBKUy5jYW52YXMucHhyYXRpbztcclxuICAgICAgICBwSlMucGFydGljbGVzLmxpbmVfbGlua2VkLndpZHRoID0gcEpTLnRtcC5vYmoubGluZV9saW5rZWRfd2lkdGggKiBwSlMuY2FudmFzLnB4cmF0aW87XHJcbiAgICAgICAgcEpTLmludGVyYWN0aXZpdHkubW9kZXMuYnViYmxlLnNpemUgPSBwSlMudG1wLm9iai5tb2RlX2J1YmJsZV9zaXplICogcEpTLmNhbnZhcy5weHJhdGlvO1xyXG4gICAgICAgIHBKUy5pbnRlcmFjdGl2aXR5Lm1vZGVzLnJlcHVsc2UuZGlzdGFuY2UgPSBwSlMudG1wLm9iai5tb2RlX3JlcHVsc2VfZGlzdGFuY2UgKiBwSlMuY2FudmFzLnB4cmF0aW87XHJcblxyXG4gICAgfTtcclxuXHJcblxyXG5cclxuICAgIC8qIC0tLS0tLS0tLS0gcEpTIGZ1bmN0aW9ucyAtIGNhbnZhcyAtLS0tLS0tLS0tLS0gKi9cclxuXHJcbiAgICBwSlMuZm4uY2FudmFzSW5pdCA9IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgcEpTLmNhbnZhcy5jdHggPSBwSlMuY2FudmFzLmVsLmdldENvbnRleHQoJzJkJyk7XHJcbiAgICB9O1xyXG5cclxuICAgIHBKUy5mbi5jYW52YXNTaXplID0gZnVuY3Rpb24oKXtcclxuXHJcbiAgICAgICAgcEpTLmNhbnZhcy5lbC53aWR0aCA9IHBKUy5jYW52YXMudztcclxuICAgICAgICBwSlMuY2FudmFzLmVsLmhlaWdodCA9IHBKUy5jYW52YXMuaDtcclxuXHJcbiAgICAgICAgaWYocEpTICYmIHBKUy5pbnRlcmFjdGl2aXR5LmV2ZW50cy5yZXNpemUpe1xyXG5cclxuICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgICAgICAgICAgICAgcEpTLmNhbnZhcy53ID0gcEpTLmNhbnZhcy5lbC5vZmZzZXRXaWR0aDtcclxuICAgICAgICAgICAgICAgIHBKUy5jYW52YXMuaCA9IHBKUy5jYW52YXMuZWwub2Zmc2V0SGVpZ2h0O1xyXG5cclxuICAgICAgICAgICAgICAgIC8qIHJlc2l6ZSBjYW52YXMgKi9cclxuICAgICAgICAgICAgICAgIGlmKHBKUy50bXAucmV0aW5hKXtcclxuICAgICAgICAgICAgICAgICAgICBwSlMuY2FudmFzLncgKj0gcEpTLmNhbnZhcy5weHJhdGlvO1xyXG4gICAgICAgICAgICAgICAgICAgIHBKUy5jYW52YXMuaCAqPSBwSlMuY2FudmFzLnB4cmF0aW87XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgcEpTLmNhbnZhcy5lbC53aWR0aCA9IHBKUy5jYW52YXMudztcclxuICAgICAgICAgICAgICAgIHBKUy5jYW52YXMuZWwuaGVpZ2h0ID0gcEpTLmNhbnZhcy5oO1xyXG5cclxuICAgICAgICAgICAgICAgIC8qIHJlcGFpbnQgY2FudmFzIG9uIGFuaW0gZGlzYWJsZWQgKi9cclxuICAgICAgICAgICAgICAgIGlmKCFwSlMucGFydGljbGVzLm1vdmUuZW5hYmxlKXtcclxuICAgICAgICAgICAgICAgICAgICBwSlMuZm4ucGFydGljbGVzRW1wdHkoKTtcclxuICAgICAgICAgICAgICAgICAgICBwSlMuZm4ucGFydGljbGVzQ3JlYXRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcEpTLmZuLnBhcnRpY2xlc0RyYXcoKTtcclxuICAgICAgICAgICAgICAgICAgICBwSlMuZm4udmVuZG9ycy5kZW5zaXR5QXV0b1BhcnRpY2xlcygpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC8qIGRlbnNpdHkgcGFydGljbGVzIGVuYWJsZWQgKi9cclxuICAgICAgICAgICAgICAgIHBKUy5mbi52ZW5kb3JzLmRlbnNpdHlBdXRvUGFydGljbGVzKCk7XHJcblxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH07XHJcblxyXG5cclxuICAgIHBKUy5mbi5jYW52YXNQYWludCA9IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgcEpTLmNhbnZhcy5jdHguZmlsbFJlY3QoMCwgMCwgcEpTLmNhbnZhcy53LCBwSlMuY2FudmFzLmgpO1xyXG4gICAgfTtcclxuXHJcbiAgICBwSlMuZm4uY2FudmFzQ2xlYXIgPSBmdW5jdGlvbigpe1xyXG4gICAgICAgIHBKUy5jYW52YXMuY3R4LmNsZWFyUmVjdCgwLCAwLCBwSlMuY2FudmFzLncsIHBKUy5jYW52YXMuaCk7XHJcbiAgICB9O1xyXG5cclxuXHJcbiAgICAvKiAtLS0tLS0tLS0gcEpTIGZ1bmN0aW9ucyAtIHBhcnRpY2xlcyAtLS0tLS0tLS0tLSAqL1xyXG5cclxuICAgIHBKUy5mbi5wYXJ0aWNsZSA9IGZ1bmN0aW9uKGNvbG9yLCBvcGFjaXR5LCBwb3NpdGlvbil7XHJcblxyXG4gICAgICAgIC8qIHNpemUgKi9cclxuICAgICAgICB0aGlzLnJhZGl1cyA9IChwSlMucGFydGljbGVzLnNpemUucmFuZG9tID8gTWF0aC5yYW5kb20oKSA6IDEpICogcEpTLnBhcnRpY2xlcy5zaXplLnZhbHVlO1xyXG4gICAgICAgIGlmKHBKUy5wYXJ0aWNsZXMuc2l6ZS5hbmltLmVuYWJsZSl7XHJcbiAgICAgICAgICAgIHRoaXMuc2l6ZV9zdGF0dXMgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy52cyA9IHBKUy5wYXJ0aWNsZXMuc2l6ZS5hbmltLnNwZWVkIC8gMTAwO1xyXG4gICAgICAgICAgICBpZighcEpTLnBhcnRpY2xlcy5zaXplLmFuaW0uc3luYyl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnZzID0gdGhpcy52cyAqIE1hdGgucmFuZG9tKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qIHBvc2l0aW9uICovXHJcbiAgICAgICAgdGhpcy54ID0gcG9zaXRpb24gPyBwb3NpdGlvbi54IDogTWF0aC5yYW5kb20oKSAqIHBKUy5jYW52YXMudztcclxuICAgICAgICB0aGlzLnkgPSBwb3NpdGlvbiA/IHBvc2l0aW9uLnkgOiBNYXRoLnJhbmRvbSgpICogcEpTLmNhbnZhcy5oO1xyXG5cclxuICAgICAgICAvKiBjaGVjayBwb3NpdGlvbiAgLSBpbnRvIHRoZSBjYW52YXMgKi9cclxuICAgICAgICBpZih0aGlzLnggPiBwSlMuY2FudmFzLncgLSB0aGlzLnJhZGl1cyoyKSB0aGlzLnggPSB0aGlzLnggLSB0aGlzLnJhZGl1cztcclxuICAgICAgICBlbHNlIGlmKHRoaXMueCA8IHRoaXMucmFkaXVzKjIpIHRoaXMueCA9IHRoaXMueCArIHRoaXMucmFkaXVzO1xyXG4gICAgICAgIGlmKHRoaXMueSA+IHBKUy5jYW52YXMuaCAtIHRoaXMucmFkaXVzKjIpIHRoaXMueSA9IHRoaXMueSAtIHRoaXMucmFkaXVzO1xyXG4gICAgICAgIGVsc2UgaWYodGhpcy55IDwgdGhpcy5yYWRpdXMqMikgdGhpcy55ID0gdGhpcy55ICsgdGhpcy5yYWRpdXM7XHJcblxyXG4gICAgICAgIC8qIGNoZWNrIHBvc2l0aW9uIC0gYXZvaWQgb3ZlcmxhcCAqL1xyXG4gICAgICAgIGlmKHBKUy5wYXJ0aWNsZXMubW92ZS5ib3VuY2Upe1xyXG4gICAgICAgICAgICBwSlMuZm4udmVuZG9ycy5jaGVja092ZXJsYXAodGhpcywgcG9zaXRpb24pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyogY29sb3IgKi9cclxuICAgICAgICB0aGlzLmNvbG9yID0ge307XHJcbiAgICAgICAgaWYodHlwZW9mKGNvbG9yLnZhbHVlKSA9PSAnb2JqZWN0Jyl7XHJcblxyXG4gICAgICAgICAgICBpZihjb2xvci52YWx1ZSBpbnN0YW5jZW9mIEFycmF5KXtcclxuICAgICAgICAgICAgICAgIHZhciBjb2xvcl9zZWxlY3RlZCA9IGNvbG9yLnZhbHVlW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHBKUy5wYXJ0aWNsZXMuY29sb3IudmFsdWUubGVuZ3RoKV07XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbG9yLnJnYiA9IGhleFRvUmdiKGNvbG9yX3NlbGVjdGVkKTtcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICBpZihjb2xvci52YWx1ZS5yICE9IHVuZGVmaW5lZCAmJiBjb2xvci52YWx1ZS5nICE9IHVuZGVmaW5lZCAmJiBjb2xvci52YWx1ZS5iICE9IHVuZGVmaW5lZCl7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb2xvci5yZ2IgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHI6IGNvbG9yLnZhbHVlLnIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGc6IGNvbG9yLnZhbHVlLmcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGI6IGNvbG9yLnZhbHVlLmJcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZihjb2xvci52YWx1ZS5oICE9IHVuZGVmaW5lZCAmJiBjb2xvci52YWx1ZS5zICE9IHVuZGVmaW5lZCAmJiBjb2xvci52YWx1ZS5sICE9IHVuZGVmaW5lZCl7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb2xvci5oc2wgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGg6IGNvbG9yLnZhbHVlLmgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHM6IGNvbG9yLnZhbHVlLnMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGw6IGNvbG9yLnZhbHVlLmxcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYoY29sb3IudmFsdWUgPT0gJ3JhbmRvbScpe1xyXG4gICAgICAgICAgICB0aGlzLmNvbG9yLnJnYiA9IHtcclxuICAgICAgICAgICAgICAgIHI6IChNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoMjU1IC0gMCArIDEpKSArIDApLFxyXG4gICAgICAgICAgICAgICAgZzogKE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqICgyNTUgLSAwICsgMSkpICsgMCksXHJcbiAgICAgICAgICAgICAgICBiOiAoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKDI1NSAtIDAgKyAxKSkgKyAwKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYodHlwZW9mKGNvbG9yLnZhbHVlKSA9PSAnc3RyaW5nJyl7XHJcbiAgICAgICAgICAgIHRoaXMuY29sb3IgPSBjb2xvcjtcclxuICAgICAgICAgICAgdGhpcy5jb2xvci5yZ2IgPSBoZXhUb1JnYih0aGlzLmNvbG9yLnZhbHVlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qIG9wYWNpdHkgKi9cclxuICAgICAgICB0aGlzLm9wYWNpdHkgPSAocEpTLnBhcnRpY2xlcy5vcGFjaXR5LnJhbmRvbSA/IE1hdGgucmFuZG9tKCkgOiAxKSAqIHBKUy5wYXJ0aWNsZXMub3BhY2l0eS52YWx1ZTtcclxuICAgICAgICBpZihwSlMucGFydGljbGVzLm9wYWNpdHkuYW5pbS5lbmFibGUpe1xyXG4gICAgICAgICAgICB0aGlzLm9wYWNpdHlfc3RhdHVzID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMudm8gPSBwSlMucGFydGljbGVzLm9wYWNpdHkuYW5pbS5zcGVlZCAvIDEwMDtcclxuICAgICAgICAgICAgaWYoIXBKUy5wYXJ0aWNsZXMub3BhY2l0eS5hbmltLnN5bmMpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy52byA9IHRoaXMudm8gKiBNYXRoLnJhbmRvbSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKiBhbmltYXRpb24gLSB2ZWxvY2l0eSBmb3Igc3BlZWQgKi9cclxuICAgICAgICB2YXIgdmVsYmFzZSA9IHt9XHJcbiAgICAgICAgc3dpdGNoKHBKUy5wYXJ0aWNsZXMubW92ZS5kaXJlY3Rpb24pe1xyXG4gICAgICAgICAgICBjYXNlICd0b3AnOlxyXG4gICAgICAgICAgICAgICAgdmVsYmFzZSA9IHsgeDowLCB5Oi0xIH07XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAndG9wLXJpZ2h0JzpcclxuICAgICAgICAgICAgICAgIHZlbGJhc2UgPSB7IHg6MC41LCB5Oi0wLjUgfTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdyaWdodCc6XHJcbiAgICAgICAgICAgICAgICB2ZWxiYXNlID0geyB4OjEsIHk6LTAgfTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdib3R0b20tcmlnaHQnOlxyXG4gICAgICAgICAgICAgICAgdmVsYmFzZSA9IHsgeDowLjUsIHk6MC41IH07XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnYm90dG9tJzpcclxuICAgICAgICAgICAgICAgIHZlbGJhc2UgPSB7IHg6MCwgeToxIH07XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnYm90dG9tLWxlZnQnOlxyXG4gICAgICAgICAgICAgICAgdmVsYmFzZSA9IHsgeDotMC41LCB5OjEgfTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdsZWZ0JzpcclxuICAgICAgICAgICAgICAgIHZlbGJhc2UgPSB7IHg6LTEsIHk6MCB9O1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ3RvcC1sZWZ0JzpcclxuICAgICAgICAgICAgICAgIHZlbGJhc2UgPSB7IHg6LTAuNSwgeTotMC41IH07XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIHZlbGJhc2UgPSB7IHg6MCwgeTowIH07XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKHBKUy5wYXJ0aWNsZXMubW92ZS5zdHJhaWdodCl7XHJcbiAgICAgICAgICAgIHRoaXMudnggPSB2ZWxiYXNlLng7XHJcbiAgICAgICAgICAgIHRoaXMudnkgPSB2ZWxiYXNlLnk7XHJcbiAgICAgICAgICAgIGlmKHBKUy5wYXJ0aWNsZXMubW92ZS5yYW5kb20pe1xyXG4gICAgICAgICAgICAgICAgdGhpcy52eCA9IHRoaXMudnggKiAoTWF0aC5yYW5kb20oKSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnZ5ID0gdGhpcy52eSAqIChNYXRoLnJhbmRvbSgpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICB0aGlzLnZ4ID0gdmVsYmFzZS54ICsgTWF0aC5yYW5kb20oKS0wLjU7XHJcbiAgICAgICAgICAgIHRoaXMudnkgPSB2ZWxiYXNlLnkgKyBNYXRoLnJhbmRvbSgpLTAuNTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIHZhciB0aGV0YSA9IDIuMCAqIE1hdGguUEkgKiBNYXRoLnJhbmRvbSgpO1xyXG4gICAgICAgIC8vIHRoaXMudnggPSBNYXRoLmNvcyh0aGV0YSk7XHJcbiAgICAgICAgLy8gdGhpcy52eSA9IE1hdGguc2luKHRoZXRhKTtcclxuXHJcbiAgICAgICAgdGhpcy52eF9pID0gdGhpcy52eDtcclxuICAgICAgICB0aGlzLnZ5X2kgPSB0aGlzLnZ5O1xyXG5cclxuXHJcblxyXG4gICAgICAgIC8qIGlmIHNoYXBlIGlzIGltYWdlICovXHJcblxyXG4gICAgICAgIHZhciBzaGFwZV90eXBlID0gcEpTLnBhcnRpY2xlcy5zaGFwZS50eXBlO1xyXG4gICAgICAgIGlmKHR5cGVvZihzaGFwZV90eXBlKSA9PSAnb2JqZWN0Jyl7XHJcbiAgICAgICAgICAgIGlmKHNoYXBlX3R5cGUgaW5zdGFuY2VvZiBBcnJheSl7XHJcbiAgICAgICAgICAgICAgICB2YXIgc2hhcGVfc2VsZWN0ZWQgPSBzaGFwZV90eXBlW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHNoYXBlX3R5cGUubGVuZ3RoKV07XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNoYXBlID0gc2hhcGVfc2VsZWN0ZWQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgdGhpcy5zaGFwZSA9IHNoYXBlX3R5cGU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZih0aGlzLnNoYXBlID09ICdpbWFnZScpe1xyXG4gICAgICAgICAgICB2YXIgc2ggPSBwSlMucGFydGljbGVzLnNoYXBlO1xyXG4gICAgICAgICAgICB0aGlzLmltZyA9IHtcclxuICAgICAgICAgICAgICAgIHNyYzogc2guaW1hZ2Uuc3JjLFxyXG4gICAgICAgICAgICAgICAgcmF0aW86IHNoLmltYWdlLndpZHRoIC8gc2guaW1hZ2UuaGVpZ2h0XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYoIXRoaXMuaW1nLnJhdGlvKSB0aGlzLmltZy5yYXRpbyA9IDE7XHJcbiAgICAgICAgICAgIGlmKHBKUy50bXAuaW1nX3R5cGUgPT0gJ3N2ZycgJiYgcEpTLnRtcC5zb3VyY2Vfc3ZnICE9IHVuZGVmaW5lZCl7XHJcbiAgICAgICAgICAgICAgICBwSlMuZm4udmVuZG9ycy5jcmVhdGVTdmdJbWcodGhpcyk7XHJcbiAgICAgICAgICAgICAgICBpZihwSlMudG1wLnB1c2hpbmcpe1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW1nLmxvYWRlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuXHJcblxyXG4gICAgfTtcclxuXHJcblxyXG4gICAgcEpTLmZuLnBhcnRpY2xlLnByb3RvdHlwZS5kcmF3ID0gZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgIHZhciBwID0gdGhpcztcclxuXHJcbiAgICAgICAgaWYocC5yYWRpdXNfYnViYmxlICE9IHVuZGVmaW5lZCl7XHJcbiAgICAgICAgICAgIHZhciByYWRpdXMgPSBwLnJhZGl1c19idWJibGU7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHZhciByYWRpdXMgPSBwLnJhZGl1cztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKHAub3BhY2l0eV9idWJibGUgIT0gdW5kZWZpbmVkKXtcclxuICAgICAgICAgICAgdmFyIG9wYWNpdHkgPSBwLm9wYWNpdHlfYnViYmxlO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICB2YXIgb3BhY2l0eSA9IHAub3BhY2l0eTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKHAuY29sb3IucmdiKXtcclxuICAgICAgICAgICAgdmFyIGNvbG9yX3ZhbHVlID0gJ3JnYmEoJytwLmNvbG9yLnJnYi5yKycsJytwLmNvbG9yLnJnYi5nKycsJytwLmNvbG9yLnJnYi5iKycsJytvcGFjaXR5KycpJztcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgdmFyIGNvbG9yX3ZhbHVlID0gJ2hzbGEoJytwLmNvbG9yLmhzbC5oKycsJytwLmNvbG9yLmhzbC5zKyclLCcrcC5jb2xvci5oc2wubCsnJSwnK29wYWNpdHkrJyknO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcEpTLmNhbnZhcy5jdHguZmlsbFN0eWxlID0gY29sb3JfdmFsdWU7XHJcbiAgICAgICAgcEpTLmNhbnZhcy5jdHguYmVnaW5QYXRoKCk7XHJcblxyXG4gICAgICAgIHN3aXRjaChwLnNoYXBlKXtcclxuXHJcbiAgICAgICAgICAgIGNhc2UgJ2NpcmNsZSc6XHJcbiAgICAgICAgICAgICAgICBwSlMuY2FudmFzLmN0eC5hcmMocC54LCBwLnksIHJhZGl1cywgMCwgTWF0aC5QSSAqIDIsIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSAnZWRnZSc6XHJcbiAgICAgICAgICAgICAgICBwSlMuY2FudmFzLmN0eC5yZWN0KHAueC1yYWRpdXMsIHAueS1yYWRpdXMsIHJhZGl1cyoyLCByYWRpdXMqMik7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgJ3RyaWFuZ2xlJzpcclxuICAgICAgICAgICAgICAgIHBKUy5mbi52ZW5kb3JzLmRyYXdTaGFwZShwSlMuY2FudmFzLmN0eCwgcC54LXJhZGl1cywgcC55K3JhZGl1cyAvIDEuNjYsIHJhZGl1cyoyLCAzLCAyKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSAncG9seWdvbic6XHJcbiAgICAgICAgICAgICAgICBwSlMuZm4udmVuZG9ycy5kcmF3U2hhcGUoXHJcbiAgICAgICAgICAgICAgICAgICAgcEpTLmNhbnZhcy5jdHgsXHJcbiAgICAgICAgICAgICAgICAgICAgcC54IC0gcmFkaXVzIC8gKHBKUy5wYXJ0aWNsZXMuc2hhcGUucG9seWdvbi5uYl9zaWRlcy8zLjUpLCAvLyBzdGFydFhcclxuICAgICAgICAgICAgICAgICAgICBwLnkgLSByYWRpdXMgLyAoMi42Ni8zLjUpLCAvLyBzdGFydFlcclxuICAgICAgICAgICAgICAgICAgICByYWRpdXMqMi42NiAvIChwSlMucGFydGljbGVzLnNoYXBlLnBvbHlnb24ubmJfc2lkZXMvMyksIC8vIHNpZGVMZW5ndGhcclxuICAgICAgICAgICAgICAgICAgICBwSlMucGFydGljbGVzLnNoYXBlLnBvbHlnb24ubmJfc2lkZXMsIC8vIHNpZGVDb3VudE51bWVyYXRvclxyXG4gICAgICAgICAgICAgICAgICAgIDEgLy8gc2lkZUNvdW50RGVub21pbmF0b3JcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgJ3N0YXInOlxyXG4gICAgICAgICAgICAgICAgcEpTLmZuLnZlbmRvcnMuZHJhd1NoYXBlKFxyXG4gICAgICAgICAgICAgICAgICAgIHBKUy5jYW52YXMuY3R4LFxyXG4gICAgICAgICAgICAgICAgICAgIHAueCAtIHJhZGl1cyoyIC8gKHBKUy5wYXJ0aWNsZXMuc2hhcGUucG9seWdvbi5uYl9zaWRlcy80KSwgLy8gc3RhcnRYXHJcbiAgICAgICAgICAgICAgICAgICAgcC55IC0gcmFkaXVzIC8gKDIqMi42Ni8zLjUpLCAvLyBzdGFydFlcclxuICAgICAgICAgICAgICAgICAgICByYWRpdXMqMioyLjY2IC8gKHBKUy5wYXJ0aWNsZXMuc2hhcGUucG9seWdvbi5uYl9zaWRlcy8zKSwgLy8gc2lkZUxlbmd0aFxyXG4gICAgICAgICAgICAgICAgICAgIHBKUy5wYXJ0aWNsZXMuc2hhcGUucG9seWdvbi5uYl9zaWRlcywgLy8gc2lkZUNvdW50TnVtZXJhdG9yXHJcbiAgICAgICAgICAgICAgICAgICAgMiAvLyBzaWRlQ291bnREZW5vbWluYXRvclxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSAnaW1hZ2UnOlxyXG5cclxuICAgICAgICAgICAgZnVuY3Rpb24gZHJhdygpe1xyXG4gICAgICAgICAgICAgICAgcEpTLmNhbnZhcy5jdHguZHJhd0ltYWdlKFxyXG4gICAgICAgICAgICAgICAgICAgIGltZ19vYmosXHJcbiAgICAgICAgICAgICAgICAgICAgcC54LXJhZGl1cyxcclxuICAgICAgICAgICAgICAgICAgICBwLnktcmFkaXVzLFxyXG4gICAgICAgICAgICAgICAgICAgIHJhZGl1cyoyLFxyXG4gICAgICAgICAgICAgICAgICAgIHJhZGl1cyoyIC8gcC5pbWcucmF0aW9cclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZihwSlMudG1wLmltZ190eXBlID09ICdzdmcnKXtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgaW1nX29iaiA9IHAuaW1nLm9iajtcclxuICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBpbWdfb2JqID0gcEpTLnRtcC5pbWdfb2JqO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmKGltZ19vYmope1xyXG4gICAgICAgICAgICAgICAgICAgIGRyYXcoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwSlMuY2FudmFzLmN0eC5jbG9zZVBhdGgoKTtcclxuXHJcbiAgICAgICAgaWYocEpTLnBhcnRpY2xlcy5zaGFwZS5zdHJva2Uud2lkdGggPiAwKXtcclxuICAgICAgICAgICAgcEpTLmNhbnZhcy5jdHguc3Ryb2tlU3R5bGUgPSBwSlMucGFydGljbGVzLnNoYXBlLnN0cm9rZS5jb2xvcjtcclxuICAgICAgICAgICAgcEpTLmNhbnZhcy5jdHgubGluZVdpZHRoID0gcEpTLnBhcnRpY2xlcy5zaGFwZS5zdHJva2Uud2lkdGg7XHJcbiAgICAgICAgICAgIHBKUy5jYW52YXMuY3R4LnN0cm9rZSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcEpTLmNhbnZhcy5jdHguZmlsbCgpO1xyXG5cclxuICAgIH07XHJcblxyXG5cclxuICAgIHBKUy5mbi5wYXJ0aWNsZXNDcmVhdGUgPSBmdW5jdGlvbigpe1xyXG4gICAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCBwSlMucGFydGljbGVzLm51bWJlci52YWx1ZTsgaSsrKSB7XHJcbiAgICAgICAgICAgIHBKUy5wYXJ0aWNsZXMuYXJyYXkucHVzaChuZXcgcEpTLmZuLnBhcnRpY2xlKHBKUy5wYXJ0aWNsZXMuY29sb3IsIHBKUy5wYXJ0aWNsZXMub3BhY2l0eS52YWx1ZSkpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgcEpTLmZuLnBhcnRpY2xlc1VwZGF0ZSA9IGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCBwSlMucGFydGljbGVzLmFycmF5Lmxlbmd0aDsgaSsrKXtcclxuXHJcbiAgICAgICAgICAgIC8qIHRoZSBwYXJ0aWNsZSAqL1xyXG4gICAgICAgICAgICB2YXIgcCA9IHBKUy5wYXJ0aWNsZXMuYXJyYXlbaV07XHJcblxyXG4gICAgICAgICAgICAvLyB2YXIgZCA9ICggZHggPSBwSlMuaW50ZXJhY3Rpdml0eS5tb3VzZS5jbGlja19wb3NfeCAtIHAueCApICogZHggKyAoIGR5ID0gcEpTLmludGVyYWN0aXZpdHkubW91c2UuY2xpY2tfcG9zX3kgLSBwLnkgKSAqIGR5O1xyXG4gICAgICAgICAgICAvLyB2YXIgZiA9IC1CQU5HX1NJWkUgLyBkO1xyXG4gICAgICAgICAgICAvLyBpZiAoIGQgPCBCQU5HX1NJWkUgKSB7XHJcbiAgICAgICAgICAgIC8vICAgICB2YXIgdCA9IE1hdGguYXRhbjIoIGR5LCBkeCApO1xyXG4gICAgICAgICAgICAvLyAgICAgcC52eCA9IGYgKiBNYXRoLmNvcyh0KTtcclxuICAgICAgICAgICAgLy8gICAgIHAudnkgPSBmICogTWF0aC5zaW4odCk7XHJcbiAgICAgICAgICAgIC8vIH1cclxuXHJcbiAgICAgICAgICAgIC8qIG1vdmUgdGhlIHBhcnRpY2xlICovXHJcbiAgICAgICAgICAgIGlmKHBKUy5wYXJ0aWNsZXMubW92ZS5lbmFibGUpe1xyXG4gICAgICAgICAgICAgICAgdmFyIG1zID0gcEpTLnBhcnRpY2xlcy5tb3ZlLnNwZWVkLzI7XHJcbiAgICAgICAgICAgICAgICBwLnggKz0gcC52eCAqIG1zO1xyXG4gICAgICAgICAgICAgICAgcC55ICs9IHAudnkgKiBtcztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLyogY2hhbmdlIG9wYWNpdHkgc3RhdHVzICovXHJcbiAgICAgICAgICAgIGlmKHBKUy5wYXJ0aWNsZXMub3BhY2l0eS5hbmltLmVuYWJsZSkge1xyXG4gICAgICAgICAgICAgICAgaWYocC5vcGFjaXR5X3N0YXR1cyA9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYocC5vcGFjaXR5ID49IHBKUy5wYXJ0aWNsZXMub3BhY2l0eS52YWx1ZSkgcC5vcGFjaXR5X3N0YXR1cyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIHAub3BhY2l0eSArPSBwLnZvO1xyXG4gICAgICAgICAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKHAub3BhY2l0eSA8PSBwSlMucGFydGljbGVzLm9wYWNpdHkuYW5pbS5vcGFjaXR5X21pbikgcC5vcGFjaXR5X3N0YXR1cyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgcC5vcGFjaXR5IC09IHAudm87XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZihwLm9wYWNpdHkgPCAwKSBwLm9wYWNpdHkgPSAwO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvKiBjaGFuZ2Ugc2l6ZSAqL1xyXG4gICAgICAgICAgICBpZihwSlMucGFydGljbGVzLnNpemUuYW5pbS5lbmFibGUpe1xyXG4gICAgICAgICAgICAgICAgaWYocC5zaXplX3N0YXR1cyA9PSB0cnVlKXtcclxuICAgICAgICAgICAgICAgICAgICBpZihwLnJhZGl1cyA+PSBwSlMucGFydGljbGVzLnNpemUudmFsdWUpIHAuc2l6ZV9zdGF0dXMgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICBwLnJhZGl1cyArPSBwLnZzO1xyXG4gICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYocC5yYWRpdXMgPD0gcEpTLnBhcnRpY2xlcy5zaXplLmFuaW0uc2l6ZV9taW4pIHAuc2l6ZV9zdGF0dXMgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIHAucmFkaXVzIC09IHAudnM7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZihwLnJhZGl1cyA8IDApIHAucmFkaXVzID0gMDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLyogY2hhbmdlIHBhcnRpY2xlIHBvc2l0aW9uIGlmIGl0IGlzIG91dCBvZiBjYW52YXMgKi9cclxuICAgICAgICAgICAgaWYocEpTLnBhcnRpY2xlcy5tb3ZlLm91dF9tb2RlID09ICdib3VuY2UnKXtcclxuICAgICAgICAgICAgICAgIHZhciBuZXdfcG9zID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIHhfbGVmdDogcC5yYWRpdXMsXHJcbiAgICAgICAgICAgICAgICAgICAgeF9yaWdodDogIHBKUy5jYW52YXMudyxcclxuICAgICAgICAgICAgICAgICAgICB5X3RvcDogcC5yYWRpdXMsXHJcbiAgICAgICAgICAgICAgICAgICAgeV9ib3R0b206IHBKUy5jYW52YXMuaFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIHZhciBuZXdfcG9zID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIHhfbGVmdDogLXAucmFkaXVzLFxyXG4gICAgICAgICAgICAgICAgICAgIHhfcmlnaHQ6IHBKUy5jYW52YXMudyArIHAucmFkaXVzLFxyXG4gICAgICAgICAgICAgICAgICAgIHlfdG9wOiAtcC5yYWRpdXMsXHJcbiAgICAgICAgICAgICAgICAgICAgeV9ib3R0b206IHBKUy5jYW52YXMuaCArIHAucmFkaXVzXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmKHAueCAtIHAucmFkaXVzID4gcEpTLmNhbnZhcy53KXtcclxuICAgICAgICAgICAgICAgIHAueCA9IG5ld19wb3MueF9sZWZ0O1xyXG4gICAgICAgICAgICAgICAgcC55ID0gTWF0aC5yYW5kb20oKSAqIHBKUy5jYW52YXMuaDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmKHAueCArIHAucmFkaXVzIDwgMCl7XHJcbiAgICAgICAgICAgICAgICBwLnggPSBuZXdfcG9zLnhfcmlnaHQ7XHJcbiAgICAgICAgICAgICAgICBwLnkgPSBNYXRoLnJhbmRvbSgpICogcEpTLmNhbnZhcy5oO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKHAueSAtIHAucmFkaXVzID4gcEpTLmNhbnZhcy5oKXtcclxuICAgICAgICAgICAgICAgIHAueSA9IG5ld19wb3MueV90b3A7XHJcbiAgICAgICAgICAgICAgICBwLnggPSBNYXRoLnJhbmRvbSgpICogcEpTLmNhbnZhcy53O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYocC55ICsgcC5yYWRpdXMgPCAwKXtcclxuICAgICAgICAgICAgICAgIHAueSA9IG5ld19wb3MueV9ib3R0b207XHJcbiAgICAgICAgICAgICAgICBwLnggPSBNYXRoLnJhbmRvbSgpICogcEpTLmNhbnZhcy53O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvKiBvdXQgb2YgY2FudmFzIG1vZGVzICovXHJcbiAgICAgICAgICAgIHN3aXRjaChwSlMucGFydGljbGVzLm1vdmUub3V0X21vZGUpe1xyXG4gICAgICAgICAgICAgICAgY2FzZSAnYm91bmNlJzpcclxuICAgICAgICAgICAgICAgICAgICBpZiAocC54ICsgcC5yYWRpdXMgPiBwSlMuY2FudmFzLncpIHAudnggPSAtcC52eDtcclxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChwLnggLSBwLnJhZGl1cyA8IDApIHAudnggPSAtcC52eDtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocC55ICsgcC5yYWRpdXMgPiBwSlMuY2FudmFzLmgpIHAudnkgPSAtcC52eTtcclxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChwLnkgLSBwLnJhZGl1cyA8IDApIHAudnkgPSAtcC52eTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLyogZXZlbnRzICovXHJcbiAgICAgICAgICAgIGlmKGlzSW5BcnJheSgnZ3JhYicsIHBKUy5pbnRlcmFjdGl2aXR5LmV2ZW50cy5vbmhvdmVyLm1vZGUpKXtcclxuICAgICAgICAgICAgICAgIHBKUy5mbi5tb2Rlcy5ncmFiUGFydGljbGUocCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmKGlzSW5BcnJheSgnYnViYmxlJywgcEpTLmludGVyYWN0aXZpdHkuZXZlbnRzLm9uaG92ZXIubW9kZSkgfHwgaXNJbkFycmF5KCdidWJibGUnLCBwSlMuaW50ZXJhY3Rpdml0eS5ldmVudHMub25jbGljay5tb2RlKSl7XHJcbiAgICAgICAgICAgICAgICBwSlMuZm4ubW9kZXMuYnViYmxlUGFydGljbGUocCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmKGlzSW5BcnJheSgncmVwdWxzZScsIHBKUy5pbnRlcmFjdGl2aXR5LmV2ZW50cy5vbmhvdmVyLm1vZGUpIHx8IGlzSW5BcnJheSgncmVwdWxzZScsIHBKUy5pbnRlcmFjdGl2aXR5LmV2ZW50cy5vbmNsaWNrLm1vZGUpKXtcclxuICAgICAgICAgICAgICAgIHBKUy5mbi5tb2Rlcy5yZXB1bHNlUGFydGljbGUocCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8qIGludGVyYWN0aW9uIGF1dG8gYmV0d2VlbiBwYXJ0aWNsZXMgKi9cclxuICAgICAgICAgICAgaWYocEpTLnBhcnRpY2xlcy5saW5lX2xpbmtlZC5lbmFibGUgfHwgcEpTLnBhcnRpY2xlcy5tb3ZlLmF0dHJhY3QuZW5hYmxlKXtcclxuICAgICAgICAgICAgICAgIGZvcih2YXIgaiA9IGkgKyAxOyBqIDwgcEpTLnBhcnRpY2xlcy5hcnJheS5sZW5ndGg7IGorKyl7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHAyID0gcEpTLnBhcnRpY2xlcy5hcnJheVtqXTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLyogbGluayBwYXJ0aWNsZXMgKi9cclxuICAgICAgICAgICAgICAgICAgICBpZihwSlMucGFydGljbGVzLmxpbmVfbGlua2VkLmVuYWJsZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBKUy5mbi5pbnRlcmFjdC5saW5rUGFydGljbGVzKHAscDIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLyogYXR0cmFjdCBwYXJ0aWNsZXMgKi9cclxuICAgICAgICAgICAgICAgICAgICBpZihwSlMucGFydGljbGVzLm1vdmUuYXR0cmFjdC5lbmFibGUpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwSlMuZm4uaW50ZXJhY3QuYXR0cmFjdFBhcnRpY2xlcyhwLHAyKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8qIGJvdW5jZSBwYXJ0aWNsZXMgKi9cclxuICAgICAgICAgICAgICAgICAgICBpZihwSlMucGFydGljbGVzLm1vdmUuYm91bmNlKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcEpTLmZuLmludGVyYWN0LmJvdW5jZVBhcnRpY2xlcyhwLHAyKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgfTtcclxuXHJcbiAgICBwSlMuZm4ucGFydGljbGVzRHJhdyA9IGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgICAgIC8qIGNsZWFyIGNhbnZhcyAqL1xyXG4gICAgICAgIHBKUy5jYW52YXMuY3R4LmNsZWFyUmVjdCgwLCAwLCBwSlMuY2FudmFzLncsIHBKUy5jYW52YXMuaCk7XHJcblxyXG4gICAgICAgIC8qIHVwZGF0ZSBlYWNoIHBhcnRpY2xlcyBwYXJhbSAqL1xyXG4gICAgICAgIHBKUy5mbi5wYXJ0aWNsZXNVcGRhdGUoKTtcclxuXHJcbiAgICAgICAgLyogZHJhdyBlYWNoIHBhcnRpY2xlICovXHJcbiAgICAgICAgZm9yKHZhciBpID0gMDsgaSA8IHBKUy5wYXJ0aWNsZXMuYXJyYXkubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICB2YXIgcCA9IHBKUy5wYXJ0aWNsZXMuYXJyYXlbaV07XHJcbiAgICAgICAgICAgIHAuZHJhdygpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9O1xyXG5cclxuICAgIHBKUy5mbi5wYXJ0aWNsZXNFbXB0eSA9IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgcEpTLnBhcnRpY2xlcy5hcnJheSA9IFtdO1xyXG4gICAgfTtcclxuXHJcbiAgICBwSlMuZm4ucGFydGljbGVzUmVmcmVzaCA9IGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgICAgIC8qIGluaXQgYWxsICovXHJcbiAgICAgICAgY2FuY2VsUmVxdWVzdEFuaW1GcmFtZShwSlMuZm4uY2hlY2tBbmltRnJhbWUpO1xyXG4gICAgICAgIGNhbmNlbFJlcXVlc3RBbmltRnJhbWUocEpTLmZuLmRyYXdBbmltRnJhbWUpO1xyXG4gICAgICAgIHBKUy50bXAuc291cmNlX3N2ZyA9IHVuZGVmaW5lZDtcclxuICAgICAgICBwSlMudG1wLmltZ19vYmogPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgcEpTLnRtcC5jb3VudF9zdmcgPSAwO1xyXG4gICAgICAgIHBKUy5mbi5wYXJ0aWNsZXNFbXB0eSgpO1xyXG4gICAgICAgIHBKUy5mbi5jYW52YXNDbGVhcigpO1xyXG5cclxuICAgICAgICAvKiByZXN0YXJ0ICovXHJcbiAgICAgICAgcEpTLmZuLnZlbmRvcnMuc3RhcnQoKTtcclxuXHJcbiAgICB9O1xyXG5cclxuXHJcbiAgICAvKiAtLS0tLS0tLS0tIHBKUyBmdW5jdGlvbnMgLSBwYXJ0aWNsZXMgaW50ZXJhY3Rpb24gLS0tLS0tLS0tLS0tICovXHJcblxyXG4gICAgcEpTLmZuLmludGVyYWN0LmxpbmtQYXJ0aWNsZXMgPSBmdW5jdGlvbihwMSwgcDIpe1xyXG5cclxuICAgICAgICB2YXIgZHggPSBwMS54IC0gcDIueCxcclxuICAgICAgICAgICAgZHkgPSBwMS55IC0gcDIueSxcclxuICAgICAgICAgICAgZGlzdCA9IE1hdGguc3FydChkeCpkeCArIGR5KmR5KTtcclxuXHJcbiAgICAgICAgLyogZHJhdyBhIGxpbmUgYmV0d2VlbiBwMSBhbmQgcDIgaWYgdGhlIGRpc3RhbmNlIGJldHdlZW4gdGhlbSBpcyB1bmRlciB0aGUgY29uZmlnIGRpc3RhbmNlICovXHJcbiAgICAgICAgaWYoZGlzdCA8PSBwSlMucGFydGljbGVzLmxpbmVfbGlua2VkLmRpc3RhbmNlKXtcclxuXHJcbiAgICAgICAgICAgIHZhciBvcGFjaXR5X2xpbmUgPSBwSlMucGFydGljbGVzLmxpbmVfbGlua2VkLm9wYWNpdHkgLSAoZGlzdCAvICgxL3BKUy5wYXJ0aWNsZXMubGluZV9saW5rZWQub3BhY2l0eSkpIC8gcEpTLnBhcnRpY2xlcy5saW5lX2xpbmtlZC5kaXN0YW5jZTtcclxuXHJcbiAgICAgICAgICAgIGlmKG9wYWNpdHlfbGluZSA+IDApe1xyXG5cclxuICAgICAgICAgICAgICAgIC8qIHN0eWxlICovXHJcbiAgICAgICAgICAgICAgICB2YXIgY29sb3JfbGluZSA9IHBKUy5wYXJ0aWNsZXMubGluZV9saW5rZWQuY29sb3JfcmdiX2xpbmU7XHJcbiAgICAgICAgICAgICAgICBwSlMuY2FudmFzLmN0eC5zdHJva2VTdHlsZSA9ICdyZ2JhKCcrY29sb3JfbGluZS5yKycsJytjb2xvcl9saW5lLmcrJywnK2NvbG9yX2xpbmUuYisnLCcrb3BhY2l0eV9saW5lKycpJztcclxuICAgICAgICAgICAgICAgIHBKUy5jYW52YXMuY3R4LmxpbmVXaWR0aCA9IHBKUy5wYXJ0aWNsZXMubGluZV9saW5rZWQud2lkdGg7XHJcbiAgICAgICAgICAgICAgICAvL3BKUy5jYW52YXMuY3R4LmxpbmVDYXAgPSAncm91bmQnOyAvKiBwZXJmb3JtYW5jZSBpc3N1ZSAqL1xyXG5cclxuICAgICAgICAgICAgICAgIC8qIHBhdGggKi9cclxuICAgICAgICAgICAgICAgIHBKUy5jYW52YXMuY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgICAgICAgICAgICAgcEpTLmNhbnZhcy5jdHgubW92ZVRvKHAxLngsIHAxLnkpO1xyXG4gICAgICAgICAgICAgICAgcEpTLmNhbnZhcy5jdHgubGluZVRvKHAyLngsIHAyLnkpO1xyXG4gICAgICAgICAgICAgICAgcEpTLmNhbnZhcy5jdHguc3Ryb2tlKCk7XHJcbiAgICAgICAgICAgICAgICBwSlMuY2FudmFzLmN0eC5jbG9zZVBhdGgoKTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH07XHJcblxyXG5cclxuICAgIHBKUy5mbi5pbnRlcmFjdC5hdHRyYWN0UGFydGljbGVzICA9IGZ1bmN0aW9uKHAxLCBwMil7XHJcblxyXG4gICAgICAgIC8qIGNvbmRlbnNlZCBwYXJ0aWNsZXMgKi9cclxuICAgICAgICB2YXIgZHggPSBwMS54IC0gcDIueCxcclxuICAgICAgICAgICAgZHkgPSBwMS55IC0gcDIueSxcclxuICAgICAgICAgICAgZGlzdCA9IE1hdGguc3FydChkeCpkeCArIGR5KmR5KTtcclxuXHJcbiAgICAgICAgaWYoZGlzdCA8PSBwSlMucGFydGljbGVzLmxpbmVfbGlua2VkLmRpc3RhbmNlKXtcclxuXHJcbiAgICAgICAgICAgIHZhciBheCA9IGR4LyhwSlMucGFydGljbGVzLm1vdmUuYXR0cmFjdC5yb3RhdGVYKjEwMDApLFxyXG4gICAgICAgICAgICAgICAgYXkgPSBkeS8ocEpTLnBhcnRpY2xlcy5tb3ZlLmF0dHJhY3Qucm90YXRlWSoxMDAwKTtcclxuXHJcbiAgICAgICAgICAgIHAxLnZ4IC09IGF4O1xyXG4gICAgICAgICAgICBwMS52eSAtPSBheTtcclxuXHJcbiAgICAgICAgICAgIHAyLnZ4ICs9IGF4O1xyXG4gICAgICAgICAgICBwMi52eSArPSBheTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICB9XHJcblxyXG5cclxuICAgIHBKUy5mbi5pbnRlcmFjdC5ib3VuY2VQYXJ0aWNsZXMgPSBmdW5jdGlvbihwMSwgcDIpe1xyXG5cclxuICAgICAgICB2YXIgZHggPSBwMS54IC0gcDIueCxcclxuICAgICAgICAgICAgZHkgPSBwMS55IC0gcDIueSxcclxuICAgICAgICAgICAgZGlzdCA9IE1hdGguc3FydChkeCpkeCArIGR5KmR5KSxcclxuICAgICAgICAgICAgZGlzdF9wID0gcDEucmFkaXVzK3AyLnJhZGl1cztcclxuXHJcbiAgICAgICAgaWYoZGlzdCA8PSBkaXN0X3Ape1xyXG4gICAgICAgICAgICBwMS52eCA9IC1wMS52eDtcclxuICAgICAgICAgICAgcDEudnkgPSAtcDEudnk7XHJcblxyXG4gICAgICAgICAgICBwMi52eCA9IC1wMi52eDtcclxuICAgICAgICAgICAgcDIudnkgPSAtcDIudnk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcblxyXG4gICAgLyogLS0tLS0tLS0tLSBwSlMgZnVuY3Rpb25zIC0gbW9kZXMgZXZlbnRzIC0tLS0tLS0tLS0tLSAqL1xyXG5cclxuICAgIHBKUy5mbi5tb2Rlcy5wdXNoUGFydGljbGVzID0gZnVuY3Rpb24obmIsIHBvcyl7XHJcblxyXG4gICAgICAgIHBKUy50bXAucHVzaGluZyA9IHRydWU7XHJcblxyXG4gICAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCBuYjsgaSsrKXtcclxuICAgICAgICAgICAgcEpTLnBhcnRpY2xlcy5hcnJheS5wdXNoKFxyXG4gICAgICAgICAgICAgICAgbmV3IHBKUy5mbi5wYXJ0aWNsZShcclxuICAgICAgICAgICAgICAgICAgICBwSlMucGFydGljbGVzLmNvbG9yLFxyXG4gICAgICAgICAgICAgICAgICAgIHBKUy5wYXJ0aWNsZXMub3BhY2l0eS52YWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICd4JzogcG9zID8gcG9zLnBvc194IDogTWF0aC5yYW5kb20oKSAqIHBKUy5jYW52YXMudyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ3knOiBwb3MgPyBwb3MucG9zX3kgOiBNYXRoLnJhbmRvbSgpICogcEpTLmNhbnZhcy5oXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICAgIGlmKGkgPT0gbmItMSl7XHJcbiAgICAgICAgICAgICAgICBpZighcEpTLnBhcnRpY2xlcy5tb3ZlLmVuYWJsZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgcEpTLmZuLnBhcnRpY2xlc0RyYXcoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHBKUy50bXAucHVzaGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH07XHJcblxyXG5cclxuICAgIHBKUy5mbi5tb2Rlcy5yZW1vdmVQYXJ0aWNsZXMgPSBmdW5jdGlvbihuYil7XHJcblxyXG4gICAgICAgIHBKUy5wYXJ0aWNsZXMuYXJyYXkuc3BsaWNlKDAsIG5iKTtcclxuICAgICAgICBpZighcEpTLnBhcnRpY2xlcy5tb3ZlLmVuYWJsZSl7XHJcbiAgICAgICAgICAgIHBKUy5mbi5wYXJ0aWNsZXNEcmF3KCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH07XHJcblxyXG5cclxuICAgIHBKUy5mbi5tb2Rlcy5idWJibGVQYXJ0aWNsZSA9IGZ1bmN0aW9uKHApe1xyXG5cclxuICAgICAgICAvKiBvbiBob3ZlciBldmVudCAqL1xyXG4gICAgICAgIGlmKHBKUy5pbnRlcmFjdGl2aXR5LmV2ZW50cy5vbmhvdmVyLmVuYWJsZSAmJiBpc0luQXJyYXkoJ2J1YmJsZScsIHBKUy5pbnRlcmFjdGl2aXR5LmV2ZW50cy5vbmhvdmVyLm1vZGUpKXtcclxuXHJcbiAgICAgICAgICAgIHZhciBkeF9tb3VzZSA9IHAueCAtIHBKUy5pbnRlcmFjdGl2aXR5Lm1vdXNlLnBvc194LFxyXG4gICAgICAgICAgICAgICAgZHlfbW91c2UgPSBwLnkgLSBwSlMuaW50ZXJhY3Rpdml0eS5tb3VzZS5wb3NfeSxcclxuICAgICAgICAgICAgICAgIGRpc3RfbW91c2UgPSBNYXRoLnNxcnQoZHhfbW91c2UqZHhfbW91c2UgKyBkeV9tb3VzZSpkeV9tb3VzZSksXHJcbiAgICAgICAgICAgICAgICByYXRpbyA9IDEgLSBkaXN0X21vdXNlIC8gcEpTLmludGVyYWN0aXZpdHkubW9kZXMuYnViYmxlLmRpc3RhbmNlO1xyXG5cclxuICAgICAgICAgICAgZnVuY3Rpb24gaW5pdCgpe1xyXG4gICAgICAgICAgICAgICAgcC5vcGFjaXR5X2J1YmJsZSA9IHAub3BhY2l0eTtcclxuICAgICAgICAgICAgICAgIHAucmFkaXVzX2J1YmJsZSA9IHAucmFkaXVzO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvKiBtb3VzZW1vdmUgLSBjaGVjayByYXRpbyAqL1xyXG4gICAgICAgICAgICBpZihkaXN0X21vdXNlIDw9IHBKUy5pbnRlcmFjdGl2aXR5Lm1vZGVzLmJ1YmJsZS5kaXN0YW5jZSl7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYocmF0aW8gPj0gMCAmJiBwSlMuaW50ZXJhY3Rpdml0eS5zdGF0dXMgPT0gJ21vdXNlbW92ZScpe1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvKiBzaXplICovXHJcbiAgICAgICAgICAgICAgICAgICAgaWYocEpTLmludGVyYWN0aXZpdHkubW9kZXMuYnViYmxlLnNpemUgIT0gcEpTLnBhcnRpY2xlcy5zaXplLnZhbHVlKXtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKHBKUy5pbnRlcmFjdGl2aXR5Lm1vZGVzLmJ1YmJsZS5zaXplID4gcEpTLnBhcnRpY2xlcy5zaXplLnZhbHVlKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzaXplID0gcC5yYWRpdXMgKyAocEpTLmludGVyYWN0aXZpdHkubW9kZXMuYnViYmxlLnNpemUqcmF0aW8pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoc2l6ZSA+PSAwKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwLnJhZGl1c19idWJibGUgPSBzaXplO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBkaWYgPSBwLnJhZGl1cyAtIHBKUy5pbnRlcmFjdGl2aXR5Lm1vZGVzLmJ1YmJsZS5zaXplLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemUgPSBwLnJhZGl1cyAtIChkaWYqcmF0aW8pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoc2l6ZSA+IDApe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHAucmFkaXVzX2J1YmJsZSA9IHNpemU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwLnJhZGl1c19idWJibGUgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLyogb3BhY2l0eSAqL1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKHBKUy5pbnRlcmFjdGl2aXR5Lm1vZGVzLmJ1YmJsZS5vcGFjaXR5ICE9IHBKUy5wYXJ0aWNsZXMub3BhY2l0eS52YWx1ZSl7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihwSlMuaW50ZXJhY3Rpdml0eS5tb2Rlcy5idWJibGUub3BhY2l0eSA+IHBKUy5wYXJ0aWNsZXMub3BhY2l0eS52YWx1ZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgb3BhY2l0eSA9IHBKUy5pbnRlcmFjdGl2aXR5Lm1vZGVzLmJ1YmJsZS5vcGFjaXR5KnJhdGlvO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYob3BhY2l0eSA+IHAub3BhY2l0eSAmJiBvcGFjaXR5IDw9IHBKUy5pbnRlcmFjdGl2aXR5Lm1vZGVzLmJ1YmJsZS5vcGFjaXR5KXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwLm9wYWNpdHlfYnViYmxlID0gb3BhY2l0eTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgb3BhY2l0eSA9IHAub3BhY2l0eSAtIChwSlMucGFydGljbGVzLm9wYWNpdHkudmFsdWUtcEpTLmludGVyYWN0aXZpdHkubW9kZXMuYnViYmxlLm9wYWNpdHkpKnJhdGlvO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYob3BhY2l0eSA8IHAub3BhY2l0eSAmJiBvcGFjaXR5ID49IHBKUy5pbnRlcmFjdGl2aXR5Lm1vZGVzLmJ1YmJsZS5vcGFjaXR5KXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwLm9wYWNpdHlfYnViYmxlID0gb3BhY2l0eTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICBpbml0KCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICAvKiBtb3VzZWxlYXZlICovXHJcbiAgICAgICAgICAgIGlmKHBKUy5pbnRlcmFjdGl2aXR5LnN0YXR1cyA9PSAnbW91c2VsZWF2ZScpe1xyXG4gICAgICAgICAgICAgICAgaW5pdCgpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyogb24gY2xpY2sgZXZlbnQgKi9cclxuICAgICAgICBlbHNlIGlmKHBKUy5pbnRlcmFjdGl2aXR5LmV2ZW50cy5vbmNsaWNrLmVuYWJsZSAmJiBpc0luQXJyYXkoJ2J1YmJsZScsIHBKUy5pbnRlcmFjdGl2aXR5LmV2ZW50cy5vbmNsaWNrLm1vZGUpKXtcclxuXHJcblxyXG4gICAgICAgICAgICBpZihwSlMudG1wLmJ1YmJsZV9jbGlja2luZyl7XHJcbiAgICAgICAgICAgICAgICB2YXIgZHhfbW91c2UgPSBwLnggLSBwSlMuaW50ZXJhY3Rpdml0eS5tb3VzZS5jbGlja19wb3NfeCxcclxuICAgICAgICAgICAgICAgICAgICBkeV9tb3VzZSA9IHAueSAtIHBKUy5pbnRlcmFjdGl2aXR5Lm1vdXNlLmNsaWNrX3Bvc195LFxyXG4gICAgICAgICAgICAgICAgICAgIGRpc3RfbW91c2UgPSBNYXRoLnNxcnQoZHhfbW91c2UqZHhfbW91c2UgKyBkeV9tb3VzZSpkeV9tb3VzZSksXHJcbiAgICAgICAgICAgICAgICAgICAgdGltZV9zcGVudCA9IChuZXcgRGF0ZSgpLmdldFRpbWUoKSAtIHBKUy5pbnRlcmFjdGl2aXR5Lm1vdXNlLmNsaWNrX3RpbWUpLzEwMDA7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYodGltZV9zcGVudCA+IHBKUy5pbnRlcmFjdGl2aXR5Lm1vZGVzLmJ1YmJsZS5kdXJhdGlvbil7XHJcbiAgICAgICAgICAgICAgICAgICAgcEpTLnRtcC5idWJibGVfZHVyYXRpb25fZW5kID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZih0aW1lX3NwZW50ID4gcEpTLmludGVyYWN0aXZpdHkubW9kZXMuYnViYmxlLmR1cmF0aW9uKjIpe1xyXG4gICAgICAgICAgICAgICAgICAgIHBKUy50bXAuYnViYmxlX2NsaWNraW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgcEpTLnRtcC5idWJibGVfZHVyYXRpb25fZW5kID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICBmdW5jdGlvbiBwcm9jZXNzKGJ1YmJsZV9wYXJhbSwgcGFydGljbGVzX3BhcmFtLCBwX29ial9idWJibGUsIHBfb2JqLCBpZCl7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYoYnViYmxlX3BhcmFtICE9IHBhcnRpY2xlc19wYXJhbSl7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmKCFwSlMudG1wLmJ1YmJsZV9kdXJhdGlvbl9lbmQpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihkaXN0X21vdXNlIDw9IHBKUy5pbnRlcmFjdGl2aXR5Lm1vZGVzLmJ1YmJsZS5kaXN0YW5jZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihwX29ial9idWJibGUgIT0gdW5kZWZpbmVkKSB2YXIgb2JqID0gcF9vYmpfYnViYmxlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB2YXIgb2JqID0gcF9vYmo7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihvYmogIT0gYnViYmxlX3BhcmFtKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdmFsdWUgPSBwX29iaiAtICh0aW1lX3NwZW50ICogKHBfb2JqIC0gYnViYmxlX3BhcmFtKSAvIHBKUy5pbnRlcmFjdGl2aXR5Lm1vZGVzLmJ1YmJsZS5kdXJhdGlvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoaWQgPT0gJ3NpemUnKSBwLnJhZGl1c19idWJibGUgPSB2YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihpZCA9PSAnb3BhY2l0eScpIHAub3BhY2l0eV9idWJibGUgPSB2YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihpZCA9PSAnc2l6ZScpIHAucmFkaXVzX2J1YmJsZSA9IHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKGlkID09ICdvcGFjaXR5JykgcC5vcGFjaXR5X2J1YmJsZSA9IHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihwX29ial9idWJibGUgIT0gdW5kZWZpbmVkKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB2YWx1ZV90bXAgPSBwX29iaiAtICh0aW1lX3NwZW50ICogKHBfb2JqIC0gYnViYmxlX3BhcmFtKSAvIHBKUy5pbnRlcmFjdGl2aXR5Lm1vZGVzLmJ1YmJsZS5kdXJhdGlvbiksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlmID0gYnViYmxlX3BhcmFtIC0gdmFsdWVfdG1wO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBidWJibGVfcGFyYW0gKyBkaWY7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihpZCA9PSAnc2l6ZScpIHAucmFkaXVzX2J1YmJsZSA9IHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoaWQgPT0gJ29wYWNpdHknKSBwLm9wYWNpdHlfYnViYmxlID0gdmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYocEpTLnRtcC5idWJibGVfY2xpY2tpbmcpe1xyXG4gICAgICAgICAgICAgICAgLyogc2l6ZSAqL1xyXG4gICAgICAgICAgICAgICAgcHJvY2VzcyhwSlMuaW50ZXJhY3Rpdml0eS5tb2Rlcy5idWJibGUuc2l6ZSwgcEpTLnBhcnRpY2xlcy5zaXplLnZhbHVlLCBwLnJhZGl1c19idWJibGUsIHAucmFkaXVzLCAnc2l6ZScpO1xyXG4gICAgICAgICAgICAgICAgLyogb3BhY2l0eSAqL1xyXG4gICAgICAgICAgICAgICAgcHJvY2VzcyhwSlMuaW50ZXJhY3Rpdml0eS5tb2Rlcy5idWJibGUub3BhY2l0eSwgcEpTLnBhcnRpY2xlcy5vcGFjaXR5LnZhbHVlLCBwLm9wYWNpdHlfYnViYmxlLCBwLm9wYWNpdHksICdvcGFjaXR5Jyk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH07XHJcblxyXG5cclxuICAgIHBKUy5mbi5tb2Rlcy5yZXB1bHNlUGFydGljbGUgPSBmdW5jdGlvbihwKXtcclxuXHJcbiAgICAgICAgaWYocEpTLmludGVyYWN0aXZpdHkuZXZlbnRzLm9uaG92ZXIuZW5hYmxlICYmIGlzSW5BcnJheSgncmVwdWxzZScsIHBKUy5pbnRlcmFjdGl2aXR5LmV2ZW50cy5vbmhvdmVyLm1vZGUpICYmIHBKUy5pbnRlcmFjdGl2aXR5LnN0YXR1cyA9PSAnbW91c2Vtb3ZlJykge1xyXG5cclxuICAgICAgICAgICAgdmFyIGR4X21vdXNlID0gcC54IC0gcEpTLmludGVyYWN0aXZpdHkubW91c2UucG9zX3gsXHJcbiAgICAgICAgICAgICAgICBkeV9tb3VzZSA9IHAueSAtIHBKUy5pbnRlcmFjdGl2aXR5Lm1vdXNlLnBvc195LFxyXG4gICAgICAgICAgICAgICAgZGlzdF9tb3VzZSA9IE1hdGguc3FydChkeF9tb3VzZSpkeF9tb3VzZSArIGR5X21vdXNlKmR5X21vdXNlKTtcclxuXHJcbiAgICAgICAgICAgIHZhciBub3JtVmVjID0ge3g6IGR4X21vdXNlL2Rpc3RfbW91c2UsIHk6IGR5X21vdXNlL2Rpc3RfbW91c2V9LFxyXG4gICAgICAgICAgICAgICAgcmVwdWxzZVJhZGl1cyA9IHBKUy5pbnRlcmFjdGl2aXR5Lm1vZGVzLnJlcHVsc2UuZGlzdGFuY2UsXHJcbiAgICAgICAgICAgICAgICB2ZWxvY2l0eSA9IDEwMCxcclxuICAgICAgICAgICAgICAgIHJlcHVsc2VGYWN0b3IgPSBjbGFtcCgoMS9yZXB1bHNlUmFkaXVzKSooLTEqTWF0aC5wb3coZGlzdF9tb3VzZS9yZXB1bHNlUmFkaXVzLDIpKzEpKnJlcHVsc2VSYWRpdXMqdmVsb2NpdHksIDAsIDUwKTtcclxuXHJcbiAgICAgICAgICAgIHZhciBwb3MgPSB7XHJcbiAgICAgICAgICAgICAgICB4OiBwLnggKyBub3JtVmVjLnggKiByZXB1bHNlRmFjdG9yLFxyXG4gICAgICAgICAgICAgICAgeTogcC55ICsgbm9ybVZlYy55ICogcmVwdWxzZUZhY3RvclxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZihwSlMucGFydGljbGVzLm1vdmUub3V0X21vZGUgPT0gJ2JvdW5jZScpe1xyXG4gICAgICAgICAgICAgICAgaWYocG9zLnggLSBwLnJhZGl1cyA+IDAgJiYgcG9zLnggKyBwLnJhZGl1cyA8IHBKUy5jYW52YXMudykgcC54ID0gcG9zLng7XHJcbiAgICAgICAgICAgICAgICBpZihwb3MueSAtIHAucmFkaXVzID4gMCAmJiBwb3MueSArIHAucmFkaXVzIDwgcEpTLmNhbnZhcy5oKSBwLnkgPSBwb3MueTtcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICBwLnggPSBwb3MueDtcclxuICAgICAgICAgICAgICAgIHAueSA9IHBvcy55O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIGVsc2UgaWYocEpTLmludGVyYWN0aXZpdHkuZXZlbnRzLm9uY2xpY2suZW5hYmxlICYmIGlzSW5BcnJheSgncmVwdWxzZScsIHBKUy5pbnRlcmFjdGl2aXR5LmV2ZW50cy5vbmNsaWNrLm1vZGUpKSB7XHJcblxyXG4gICAgICAgICAgICBpZighcEpTLnRtcC5yZXB1bHNlX2ZpbmlzaCl7XHJcbiAgICAgICAgICAgICAgICBwSlMudG1wLnJlcHVsc2VfY291bnQrKztcclxuICAgICAgICAgICAgICAgIGlmKHBKUy50bXAucmVwdWxzZV9jb3VudCA9PSBwSlMucGFydGljbGVzLmFycmF5Lmxlbmd0aCl7XHJcbiAgICAgICAgICAgICAgICAgICAgcEpTLnRtcC5yZXB1bHNlX2ZpbmlzaCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmKHBKUy50bXAucmVwdWxzZV9jbGlja2luZyl7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHJlcHVsc2VSYWRpdXMgPSBNYXRoLnBvdyhwSlMuaW50ZXJhY3Rpdml0eS5tb2Rlcy5yZXB1bHNlLmRpc3RhbmNlLzYsIDMpO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBkeCA9IHBKUy5pbnRlcmFjdGl2aXR5Lm1vdXNlLmNsaWNrX3Bvc194IC0gcC54LFxyXG4gICAgICAgICAgICAgICAgICAgIGR5ID0gcEpTLmludGVyYWN0aXZpdHkubW91c2UuY2xpY2tfcG9zX3kgLSBwLnksXHJcbiAgICAgICAgICAgICAgICAgICAgZCA9IGR4KmR4ICsgZHkqZHk7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIGZvcmNlID0gLXJlcHVsc2VSYWRpdXMgLyBkICogMTtcclxuXHJcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBwcm9jZXNzKCl7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBmID0gTWF0aC5hdGFuMihkeSxkeCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcC52eCA9IGZvcmNlICogTWF0aC5jb3MoZik7XHJcbiAgICAgICAgICAgICAgICAgICAgcC52eSA9IGZvcmNlICogTWF0aC5zaW4oZik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmKHBKUy5wYXJ0aWNsZXMubW92ZS5vdXRfbW9kZSA9PSAnYm91bmNlJyl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwb3MgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB4OiBwLnggKyBwLnZ4LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeTogcC55ICsgcC52eVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwb3MueCArIHAucmFkaXVzID4gcEpTLmNhbnZhcy53KSBwLnZ4ID0gLXAudng7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHBvcy54IC0gcC5yYWRpdXMgPCAwKSBwLnZ4ID0gLXAudng7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwb3MueSArIHAucmFkaXVzID4gcEpTLmNhbnZhcy5oKSBwLnZ5ID0gLXAudnk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHBvcy55IC0gcC5yYWRpdXMgPCAwKSBwLnZ5ID0gLXAudnk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAvLyBkZWZhdWx0XHJcbiAgICAgICAgICAgICAgICBpZihkIDw9IHJlcHVsc2VSYWRpdXMpe1xyXG4gICAgICAgICAgICAgICAgICAgIHByb2Nlc3MoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAvLyBiYW5nIC0gc2xvdyBtb3Rpb24gbW9kZVxyXG4gICAgICAgICAgICAgICAgLy8gaWYoIXBKUy50bXAucmVwdWxzZV9maW5pc2gpe1xyXG4gICAgICAgICAgICAgICAgLy8gICBpZihkIDw9IHJlcHVsc2VSYWRpdXMpe1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIHByb2Nlc3MoKTtcclxuICAgICAgICAgICAgICAgIC8vICAgfVxyXG4gICAgICAgICAgICAgICAgLy8gfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAvLyAgIHByb2Nlc3MoKTtcclxuICAgICAgICAgICAgICAgIC8vIH1cclxuXHJcblxyXG4gICAgICAgICAgICB9ZWxzZXtcclxuXHJcbiAgICAgICAgICAgICAgICBpZihwSlMudG1wLnJlcHVsc2VfY2xpY2tpbmcgPT0gZmFsc2Upe1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBwLnZ4ID0gcC52eF9pO1xyXG4gICAgICAgICAgICAgICAgICAgIHAudnkgPSBwLnZ5X2k7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwSlMuZm4ubW9kZXMuZ3JhYlBhcnRpY2xlID0gZnVuY3Rpb24ocCl7XHJcblxyXG4gICAgICAgIGlmKHBKUy5pbnRlcmFjdGl2aXR5LmV2ZW50cy5vbmhvdmVyLmVuYWJsZSAmJiBwSlMuaW50ZXJhY3Rpdml0eS5zdGF0dXMgPT0gJ21vdXNlbW92ZScpe1xyXG5cclxuICAgICAgICAgICAgdmFyIGR4X21vdXNlID0gcC54IC0gcEpTLmludGVyYWN0aXZpdHkubW91c2UucG9zX3gsXHJcbiAgICAgICAgICAgICAgICBkeV9tb3VzZSA9IHAueSAtIHBKUy5pbnRlcmFjdGl2aXR5Lm1vdXNlLnBvc195LFxyXG4gICAgICAgICAgICAgICAgZGlzdF9tb3VzZSA9IE1hdGguc3FydChkeF9tb3VzZSpkeF9tb3VzZSArIGR5X21vdXNlKmR5X21vdXNlKTtcclxuXHJcbiAgICAgICAgICAgIC8qIGRyYXcgYSBsaW5lIGJldHdlZW4gdGhlIGN1cnNvciBhbmQgdGhlIHBhcnRpY2xlIGlmIHRoZSBkaXN0YW5jZSBiZXR3ZWVuIHRoZW0gaXMgdW5kZXIgdGhlIGNvbmZpZyBkaXN0YW5jZSAqL1xyXG4gICAgICAgICAgICBpZihkaXN0X21vdXNlIDw9IHBKUy5pbnRlcmFjdGl2aXR5Lm1vZGVzLmdyYWIuZGlzdGFuY2Upe1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBvcGFjaXR5X2xpbmUgPSBwSlMuaW50ZXJhY3Rpdml0eS5tb2Rlcy5ncmFiLmxpbmVfbGlua2VkLm9wYWNpdHkgLSAoZGlzdF9tb3VzZSAvICgxL3BKUy5pbnRlcmFjdGl2aXR5Lm1vZGVzLmdyYWIubGluZV9saW5rZWQub3BhY2l0eSkpIC8gcEpTLmludGVyYWN0aXZpdHkubW9kZXMuZ3JhYi5kaXN0YW5jZTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZihvcGFjaXR5X2xpbmUgPiAwKXtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLyogc3R5bGUgKi9cclxuICAgICAgICAgICAgICAgICAgICB2YXIgY29sb3JfbGluZSA9IHBKUy5wYXJ0aWNsZXMubGluZV9saW5rZWQuY29sb3JfcmdiX2xpbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgcEpTLmNhbnZhcy5jdHguc3Ryb2tlU3R5bGUgPSAncmdiYSgnKzI1MSsnLCcrMTk1KycsJys5NCsnLCcrb3BhY2l0eV9saW5lKycpJztcclxuICAgICAgICAgICAgICAgICAgICBwSlMuY2FudmFzLmN0eC5saW5lV2lkdGggPSBwSlMucGFydGljbGVzLmxpbmVfbGlua2VkLndpZHRoO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vcEpTLmNhbnZhcy5jdHgubGluZUNhcCA9ICdyb3VuZCc7IC8qIHBlcmZvcm1hbmNlIGlzc3VlICovXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8qIHBhdGggKi9cclxuICAgICAgICAgICAgICAgICAgICBwSlMuY2FudmFzLmN0eC5iZWdpblBhdGgoKTtcclxuICAgICAgICAgICAgICAgICAgICBwSlMuY2FudmFzLmN0eC5tb3ZlVG8ocC54LCBwLnkpO1xyXG4gICAgICAgICAgICAgICAgICAgIHBKUy5jYW52YXMuY3R4LmxpbmVUbyhwSlMuaW50ZXJhY3Rpdml0eS5tb3VzZS5wb3NfeCwgcEpTLmludGVyYWN0aXZpdHkubW91c2UucG9zX3kpO1xyXG4gICAgICAgICAgICAgICAgICAgIHBKUy5jYW52YXMuY3R4LnN0cm9rZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHBKUy5jYW52YXMuY3R4LmNsb3NlUGF0aCgpO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH07XHJcblxyXG5cclxuXHJcbiAgICAvKiAtLS0tLS0tLS0tIHBKUyBmdW5jdGlvbnMgLSB2ZW5kb3JzIC0tLS0tLS0tLS0tLSAqL1xyXG5cclxuICAgIHBKUy5mbi52ZW5kb3JzLmV2ZW50c0xpc3RlbmVycyA9IGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgICAgIC8qIGV2ZW50cyB0YXJnZXQgZWxlbWVudCAqL1xyXG4gICAgICAgIGlmKHBKUy5pbnRlcmFjdGl2aXR5LmRldGVjdF9vbiA9PSAnd2luZG93Jyl7XHJcbiAgICAgICAgICAgIHBKUy5pbnRlcmFjdGl2aXR5LmVsID0gd2luZG93O1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBwSlMuaW50ZXJhY3Rpdml0eS5lbCA9IHBKUy5jYW52YXMuZWw7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgLyogZGV0ZWN0IG1vdXNlIHBvcyAtIG9uIGhvdmVyIC8gY2xpY2sgZXZlbnQgKi9cclxuICAgICAgICBpZihwSlMuaW50ZXJhY3Rpdml0eS5ldmVudHMub25ob3Zlci5lbmFibGUgfHwgcEpTLmludGVyYWN0aXZpdHkuZXZlbnRzLm9uY2xpY2suZW5hYmxlKXtcclxuXHJcbiAgICAgICAgICAgIC8qIGVsIG9uIG1vdXNlbW92ZSAqL1xyXG4gICAgICAgICAgICBwSlMuaW50ZXJhY3Rpdml0eS5lbC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBmdW5jdGlvbihlKXtcclxuXHJcbiAgICAgICAgICAgICAgICBpZihwSlMuaW50ZXJhY3Rpdml0eS5lbCA9PSB3aW5kb3cpe1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBwb3NfeCA9IGUuY2xpZW50WCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zX3kgPSBlLmNsaWVudFk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBwb3NfeCA9IGUub2Zmc2V0WCB8fCBlLmNsaWVudFgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc195ID0gZS5vZmZzZXRZIHx8IGUuY2xpZW50WTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBwSlMuaW50ZXJhY3Rpdml0eS5tb3VzZS5wb3NfeCA9IHBvc194O1xyXG4gICAgICAgICAgICAgICAgcEpTLmludGVyYWN0aXZpdHkubW91c2UucG9zX3kgPSBwb3NfeTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZihwSlMudG1wLnJldGluYSl7XHJcbiAgICAgICAgICAgICAgICAgICAgcEpTLmludGVyYWN0aXZpdHkubW91c2UucG9zX3ggKj0gcEpTLmNhbnZhcy5weHJhdGlvO1xyXG4gICAgICAgICAgICAgICAgICAgIHBKUy5pbnRlcmFjdGl2aXR5Lm1vdXNlLnBvc195ICo9IHBKUy5jYW52YXMucHhyYXRpbztcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBwSlMuaW50ZXJhY3Rpdml0eS5zdGF0dXMgPSAnbW91c2Vtb3ZlJztcclxuXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgLyogZWwgb24gb25tb3VzZWxlYXZlICovXHJcbiAgICAgICAgICAgIHBKUy5pbnRlcmFjdGl2aXR5LmVsLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCBmdW5jdGlvbihlKXtcclxuXHJcbiAgICAgICAgICAgICAgICBwSlMuaW50ZXJhY3Rpdml0eS5tb3VzZS5wb3NfeCA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICBwSlMuaW50ZXJhY3Rpdml0eS5tb3VzZS5wb3NfeSA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICBwSlMuaW50ZXJhY3Rpdml0eS5zdGF0dXMgPSAnbW91c2VsZWF2ZSc7XHJcblxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKiBvbiBjbGljayBldmVudCAqL1xyXG4gICAgICAgIGlmKHBKUy5pbnRlcmFjdGl2aXR5LmV2ZW50cy5vbmNsaWNrLmVuYWJsZSl7XHJcblxyXG4gICAgICAgICAgICBwSlMuaW50ZXJhY3Rpdml0eS5lbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgICAgICAgICAgICAgcEpTLmludGVyYWN0aXZpdHkubW91c2UuY2xpY2tfcG9zX3ggPSBwSlMuaW50ZXJhY3Rpdml0eS5tb3VzZS5wb3NfeDtcclxuICAgICAgICAgICAgICAgIHBKUy5pbnRlcmFjdGl2aXR5Lm1vdXNlLmNsaWNrX3Bvc195ID0gcEpTLmludGVyYWN0aXZpdHkubW91c2UucG9zX3k7XHJcbiAgICAgICAgICAgICAgICBwSlMuaW50ZXJhY3Rpdml0eS5tb3VzZS5jbGlja190aW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYocEpTLmludGVyYWN0aXZpdHkuZXZlbnRzLm9uY2xpY2suZW5hYmxlKXtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoKHBKUy5pbnRlcmFjdGl2aXR5LmV2ZW50cy5vbmNsaWNrLm1vZGUpe1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAncHVzaCc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihwSlMucGFydGljbGVzLm1vdmUuZW5hYmxlKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwSlMuZm4ubW9kZXMucHVzaFBhcnRpY2xlcyhwSlMuaW50ZXJhY3Rpdml0eS5tb2Rlcy5wdXNoLnBhcnRpY2xlc19uYiwgcEpTLmludGVyYWN0aXZpdHkubW91c2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYocEpTLmludGVyYWN0aXZpdHkubW9kZXMucHVzaC5wYXJ0aWNsZXNfbmIgPT0gMSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBKUy5mbi5tb2Rlcy5wdXNoUGFydGljbGVzKHBKUy5pbnRlcmFjdGl2aXR5Lm1vZGVzLnB1c2gucGFydGljbGVzX25iLCBwSlMuaW50ZXJhY3Rpdml0eS5tb3VzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYocEpTLmludGVyYWN0aXZpdHkubW9kZXMucHVzaC5wYXJ0aWNsZXNfbmIgPiAxKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcEpTLmZuLm1vZGVzLnB1c2hQYXJ0aWNsZXMocEpTLmludGVyYWN0aXZpdHkubW9kZXMucHVzaC5wYXJ0aWNsZXNfbmIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAncmVtb3ZlJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBKUy5mbi5tb2Rlcy5yZW1vdmVQYXJ0aWNsZXMocEpTLmludGVyYWN0aXZpdHkubW9kZXMucmVtb3ZlLnBhcnRpY2xlc19uYik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ2J1YmJsZSc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwSlMudG1wLmJ1YmJsZV9jbGlja2luZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ3JlcHVsc2UnOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcEpTLnRtcC5yZXB1bHNlX2NsaWNraW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBKUy50bXAucmVwdWxzZV9jb3VudCA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwSlMudG1wLnJlcHVsc2VfZmluaXNoID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcEpTLnRtcC5yZXB1bHNlX2NsaWNraW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCBwSlMuaW50ZXJhY3Rpdml0eS5tb2Rlcy5yZXB1bHNlLmR1cmF0aW9uKjEwMDApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICB9XHJcblxyXG5cclxuICAgIH07XHJcblxyXG4gICAgcEpTLmZuLnZlbmRvcnMuZGVuc2l0eUF1dG9QYXJ0aWNsZXMgPSBmdW5jdGlvbigpe1xyXG5cclxuICAgICAgICBpZihwSlMucGFydGljbGVzLm51bWJlci5kZW5zaXR5LmVuYWJsZSl7XHJcblxyXG4gICAgICAgICAgICAvKiBjYWxjIGFyZWEgKi9cclxuICAgICAgICAgICAgdmFyIGFyZWEgPSBwSlMuY2FudmFzLmVsLndpZHRoICogcEpTLmNhbnZhcy5lbC5oZWlnaHQgLyAxMDAwO1xyXG4gICAgICAgICAgICBpZihwSlMudG1wLnJldGluYSl7XHJcbiAgICAgICAgICAgICAgICBhcmVhID0gYXJlYS8ocEpTLmNhbnZhcy5weHJhdGlvKjIpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvKiBjYWxjIG51bWJlciBvZiBwYXJ0aWNsZXMgYmFzZWQgb24gZGVuc2l0eSBhcmVhICovXHJcbiAgICAgICAgICAgIHZhciBuYl9wYXJ0aWNsZXMgPSBhcmVhICogcEpTLnBhcnRpY2xlcy5udW1iZXIudmFsdWUgLyBwSlMucGFydGljbGVzLm51bWJlci5kZW5zaXR5LnZhbHVlX2FyZWE7XHJcblxyXG4gICAgICAgICAgICAvKiBhZGQgb3IgcmVtb3ZlIFggcGFydGljbGVzICovXHJcbiAgICAgICAgICAgIHZhciBtaXNzaW5nX3BhcnRpY2xlcyA9IHBKUy5wYXJ0aWNsZXMuYXJyYXkubGVuZ3RoIC0gbmJfcGFydGljbGVzO1xyXG4gICAgICAgICAgICBpZihtaXNzaW5nX3BhcnRpY2xlcyA8IDApIHBKUy5mbi5tb2Rlcy5wdXNoUGFydGljbGVzKE1hdGguYWJzKG1pc3NpbmdfcGFydGljbGVzKSk7XHJcbiAgICAgICAgICAgIGVsc2UgcEpTLmZuLm1vZGVzLnJlbW92ZVBhcnRpY2xlcyhtaXNzaW5nX3BhcnRpY2xlcyk7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9O1xyXG5cclxuXHJcbiAgICBwSlMuZm4udmVuZG9ycy5jaGVja092ZXJsYXAgPSBmdW5jdGlvbihwMSwgcG9zaXRpb24pe1xyXG4gICAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCBwSlMucGFydGljbGVzLmFycmF5Lmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgdmFyIHAyID0gcEpTLnBhcnRpY2xlcy5hcnJheVtpXTtcclxuXHJcbiAgICAgICAgICAgIHZhciBkeCA9IHAxLnggLSBwMi54LFxyXG4gICAgICAgICAgICAgICAgZHkgPSBwMS55IC0gcDIueSxcclxuICAgICAgICAgICAgICAgIGRpc3QgPSBNYXRoLnNxcnQoZHgqZHggKyBkeSpkeSk7XHJcblxyXG4gICAgICAgICAgICBpZihkaXN0IDw9IHAxLnJhZGl1cyArIHAyLnJhZGl1cyl7XHJcbiAgICAgICAgICAgICAgICBwMS54ID0gcG9zaXRpb24gPyBwb3NpdGlvbi54IDogTWF0aC5yYW5kb20oKSAqIHBKUy5jYW52YXMudztcclxuICAgICAgICAgICAgICAgIHAxLnkgPSBwb3NpdGlvbiA/IHBvc2l0aW9uLnkgOiBNYXRoLnJhbmRvbSgpICogcEpTLmNhbnZhcy5oO1xyXG4gICAgICAgICAgICAgICAgcEpTLmZuLnZlbmRvcnMuY2hlY2tPdmVybGFwKHAxKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG5cclxuICAgIHBKUy5mbi52ZW5kb3JzLmNyZWF0ZVN2Z0ltZyA9IGZ1bmN0aW9uKHApe1xyXG5cclxuICAgICAgICAvKiBzZXQgY29sb3IgdG8gc3ZnIGVsZW1lbnQgKi9cclxuICAgICAgICB2YXIgc3ZnWG1sID0gcEpTLnRtcC5zb3VyY2Vfc3ZnLFxyXG4gICAgICAgICAgICByZ2JIZXggPSAvIyhbMC05QS1GXXszLDZ9KS9naSxcclxuICAgICAgICAgICAgY29sb3JlZFN2Z1htbCA9IHN2Z1htbC5yZXBsYWNlKHJnYkhleCwgZnVuY3Rpb24gKG0sIHIsIGcsIGIpIHtcclxuICAgICAgICAgICAgICAgIGlmKHAuY29sb3IucmdiKXtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgY29sb3JfdmFsdWUgPSAncmdiYSgnK3AuY29sb3IucmdiLnIrJywnK3AuY29sb3IucmdiLmcrJywnK3AuY29sb3IucmdiLmIrJywnK3Aub3BhY2l0eSsnKSc7XHJcbiAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgY29sb3JfdmFsdWUgPSAnaHNsYSgnK3AuY29sb3IuaHNsLmgrJywnK3AuY29sb3IuaHNsLnMrJyUsJytwLmNvbG9yLmhzbC5sKyclLCcrcC5vcGFjaXR5KycpJztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiBjb2xvcl92YWx1ZTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8qIHByZXBhcmUgdG8gY3JlYXRlIGltZyB3aXRoIGNvbG9yZWQgc3ZnICovXHJcbiAgICAgICAgdmFyIHN2ZyA9IG5ldyBCbG9iKFtjb2xvcmVkU3ZnWG1sXSwge3R5cGU6ICdpbWFnZS9zdmcreG1sO2NoYXJzZXQ9dXRmLTgnfSksXHJcbiAgICAgICAgICAgIERPTVVSTCA9IHdpbmRvdy5VUkwgfHwgd2luZG93LndlYmtpdFVSTCB8fCB3aW5kb3csXHJcbiAgICAgICAgICAgIHVybCA9IERPTVVSTC5jcmVhdGVPYmplY3RVUkwoc3ZnKTtcclxuXHJcbiAgICAgICAgLyogY3JlYXRlIHBhcnRpY2xlIGltZyBvYmogKi9cclxuICAgICAgICB2YXIgaW1nID0gbmV3IEltYWdlKCk7XHJcbiAgICAgICAgaW1nLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICBwLmltZy5vYmogPSBpbWc7XHJcbiAgICAgICAgICAgIHAuaW1nLmxvYWRlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIERPTVVSTC5yZXZva2VPYmplY3RVUkwodXJsKTtcclxuICAgICAgICAgICAgcEpTLnRtcC5jb3VudF9zdmcrKztcclxuICAgICAgICB9KTtcclxuICAgICAgICBpbWcuc3JjID0gdXJsO1xyXG5cclxuICAgIH07XHJcblxyXG5cclxuICAgIHBKUy5mbi52ZW5kb3JzLmRlc3Ryb3lwSlMgPSBmdW5jdGlvbigpe1xyXG4gICAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHBKUy5mbi5kcmF3QW5pbUZyYW1lKTtcclxuICAgICAgICBjYW52YXNfZWwucmVtb3ZlKCk7XHJcbiAgICAgICAgcEpTRG9tID0gbnVsbDtcclxuICAgIH07XHJcblxyXG5cclxuICAgIHBKUy5mbi52ZW5kb3JzLmRyYXdTaGFwZSA9IGZ1bmN0aW9uKGMsIHN0YXJ0WCwgc3RhcnRZLCBzaWRlTGVuZ3RoLCBzaWRlQ291bnROdW1lcmF0b3IsIHNpZGVDb3VudERlbm9taW5hdG9yKXtcclxuXHJcbiAgICAgICAgLy8gQnkgUHJvZ3JhbW1pbmcgVGhvbWFzIC0gaHR0cHM6Ly9wcm9ncmFtbWluZ3Rob21hcy53b3JkcHJlc3MuY29tLzIwMTMvMDQvMDMvbi1zaWRlZC1zaGFwZXMvXHJcbiAgICAgICAgdmFyIHNpZGVDb3VudCA9IHNpZGVDb3VudE51bWVyYXRvciAqIHNpZGVDb3VudERlbm9taW5hdG9yO1xyXG4gICAgICAgIHZhciBkZWNpbWFsU2lkZXMgPSBzaWRlQ291bnROdW1lcmF0b3IgLyBzaWRlQ291bnREZW5vbWluYXRvcjtcclxuICAgICAgICB2YXIgaW50ZXJpb3JBbmdsZURlZ3JlZXMgPSAoMTgwICogKGRlY2ltYWxTaWRlcyAtIDIpKSAvIGRlY2ltYWxTaWRlcztcclxuICAgICAgICB2YXIgaW50ZXJpb3JBbmdsZSA9IE1hdGguUEkgLSBNYXRoLlBJICogaW50ZXJpb3JBbmdsZURlZ3JlZXMgLyAxODA7IC8vIGNvbnZlcnQgdG8gcmFkaWFuc1xyXG4gICAgICAgIGMuc2F2ZSgpO1xyXG4gICAgICAgIGMuYmVnaW5QYXRoKCk7XHJcbiAgICAgICAgYy50cmFuc2xhdGUoc3RhcnRYLCBzdGFydFkpO1xyXG4gICAgICAgIGMubW92ZVRvKDAsMCk7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzaWRlQ291bnQ7IGkrKykge1xyXG4gICAgICAgICAgICBjLmxpbmVUbyhzaWRlTGVuZ3RoLDApO1xyXG4gICAgICAgICAgICBjLnRyYW5zbGF0ZShzaWRlTGVuZ3RoLDApO1xyXG4gICAgICAgICAgICBjLnJvdGF0ZShpbnRlcmlvckFuZ2xlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy9jLnN0cm9rZSgpO1xyXG4gICAgICAgIGMuZmlsbCgpO1xyXG4gICAgICAgIGMucmVzdG9yZSgpO1xyXG5cclxuICAgIH07XHJcblxyXG4gICAgcEpTLmZuLnZlbmRvcnMuZXhwb3J0SW1nID0gZnVuY3Rpb24oKXtcclxuICAgICAgICB3aW5kb3cub3BlbihwSlMuY2FudmFzLmVsLnRvRGF0YVVSTCgnaW1hZ2UvcG5nJyksICdfYmxhbmsnKTtcclxuICAgIH07XHJcblxyXG5cclxuICAgIHBKUy5mbi52ZW5kb3JzLmxvYWRJbWcgPSBmdW5jdGlvbih0eXBlKXtcclxuXHJcbiAgICAgICAgcEpTLnRtcC5pbWdfZXJyb3IgPSB1bmRlZmluZWQ7XHJcblxyXG4gICAgICAgIGlmKHBKUy5wYXJ0aWNsZXMuc2hhcGUuaW1hZ2Uuc3JjICE9ICcnKXtcclxuXHJcbiAgICAgICAgICAgIGlmKHR5cGUgPT0gJ3N2Zycpe1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuICAgICAgICAgICAgICAgIHhoci5vcGVuKCdHRVQnLCBwSlMucGFydGljbGVzLnNoYXBlLmltYWdlLnNyYyk7XHJcbiAgICAgICAgICAgICAgICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZih4aHIucmVhZHlTdGF0ZSA9PSA0KXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoeGhyLnN0YXR1cyA9PSAyMDApe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcEpTLnRtcC5zb3VyY2Vfc3ZnID0gZGF0YS5jdXJyZW50VGFyZ2V0LnJlc3BvbnNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcEpTLmZuLnZlbmRvcnMuY2hlY2tCZWZvcmVEcmF3KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0Vycm9yIHBKUyAtIEltYWdlIG5vdCBmb3VuZCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcEpTLnRtcC5pbWdfZXJyb3IgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgeGhyLnNlbmQoKTtcclxuXHJcbiAgICAgICAgICAgIH1lbHNle1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBpbWcgPSBuZXcgSW1hZ2UoKTtcclxuICAgICAgICAgICAgICAgIGltZy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgICAgICBwSlMudG1wLmltZ19vYmogPSBpbWc7XHJcbiAgICAgICAgICAgICAgICAgICAgcEpTLmZuLnZlbmRvcnMuY2hlY2tCZWZvcmVEcmF3KCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGltZy5zcmMgPSBwSlMucGFydGljbGVzLnNoYXBlLmltYWdlLnNyYztcclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFcnJvciBwSlMgLSBObyBpbWFnZS5zcmMnKTtcclxuICAgICAgICAgICAgcEpTLnRtcC5pbWdfZXJyb3IgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9O1xyXG5cclxuXHJcbiAgICBwSlMuZm4udmVuZG9ycy5kcmF3ID0gZnVuY3Rpb24oKXtcclxuXHJcbiAgICAgICAgaWYocEpTLnBhcnRpY2xlcy5zaGFwZS50eXBlID09ICdpbWFnZScpe1xyXG5cclxuICAgICAgICAgICAgaWYocEpTLnRtcC5pbWdfdHlwZSA9PSAnc3ZnJyl7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYocEpTLnRtcC5jb3VudF9zdmcgPj0gcEpTLnBhcnRpY2xlcy5udW1iZXIudmFsdWUpe1xyXG4gICAgICAgICAgICAgICAgICAgIHBKUy5mbi5wYXJ0aWNsZXNEcmF3KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoIXBKUy5wYXJ0aWNsZXMubW92ZS5lbmFibGUpIGNhbmNlbFJlcXVlc3RBbmltRnJhbWUocEpTLmZuLmRyYXdBbmltRnJhbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGVsc2UgcEpTLmZuLmRyYXdBbmltRnJhbWUgPSByZXF1ZXN0QW5pbUZyYW1lKHBKUy5mbi52ZW5kb3JzLmRyYXcpO1xyXG4gICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZygnc3RpbGwgbG9hZGluZy4uLicpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKCFwSlMudG1wLmltZ19lcnJvcikgcEpTLmZuLmRyYXdBbmltRnJhbWUgPSByZXF1ZXN0QW5pbUZyYW1lKHBKUy5mbi52ZW5kb3JzLmRyYXcpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfWVsc2V7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYocEpTLnRtcC5pbWdfb2JqICE9IHVuZGVmaW5lZCl7XHJcbiAgICAgICAgICAgICAgICAgICAgcEpTLmZuLnBhcnRpY2xlc0RyYXcoKTtcclxuICAgICAgICAgICAgICAgICAgICBpZighcEpTLnBhcnRpY2xlcy5tb3ZlLmVuYWJsZSkgY2FuY2VsUmVxdWVzdEFuaW1GcmFtZShwSlMuZm4uZHJhd0FuaW1GcmFtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBwSlMuZm4uZHJhd0FuaW1GcmFtZSA9IHJlcXVlc3RBbmltRnJhbWUocEpTLmZuLnZlbmRvcnMuZHJhdyk7XHJcbiAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICBpZighcEpTLnRtcC5pbWdfZXJyb3IpIHBKUy5mbi5kcmF3QW5pbUZyYW1lID0gcmVxdWVzdEFuaW1GcmFtZShwSlMuZm4udmVuZG9ycy5kcmF3KTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHBKUy5mbi5wYXJ0aWNsZXNEcmF3KCk7XHJcbiAgICAgICAgICAgIGlmKCFwSlMucGFydGljbGVzLm1vdmUuZW5hYmxlKSBjYW5jZWxSZXF1ZXN0QW5pbUZyYW1lKHBKUy5mbi5kcmF3QW5pbUZyYW1lKTtcclxuICAgICAgICAgICAgZWxzZSBwSlMuZm4uZHJhd0FuaW1GcmFtZSA9IHJlcXVlc3RBbmltRnJhbWUocEpTLmZuLnZlbmRvcnMuZHJhdyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH07XHJcblxyXG5cclxuICAgIHBKUy5mbi52ZW5kb3JzLmNoZWNrQmVmb3JlRHJhdyA9IGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgICAgIC8vIGlmIHNoYXBlIGlzIGltYWdlXHJcbiAgICAgICAgaWYocEpTLnBhcnRpY2xlcy5zaGFwZS50eXBlID09ICdpbWFnZScpe1xyXG5cclxuICAgICAgICAgICAgaWYocEpTLnRtcC5pbWdfdHlwZSA9PSAnc3ZnJyAmJiBwSlMudG1wLnNvdXJjZV9zdmcgPT0gdW5kZWZpbmVkKXtcclxuICAgICAgICAgICAgICAgIHBKUy50bXAuY2hlY2tBbmltRnJhbWUgPSByZXF1ZXN0QW5pbUZyYW1lKGNoZWNrKTtcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKCdpbWFnZXMgbG9hZGVkISBjYW5jZWwgY2hlY2snKTtcclxuICAgICAgICAgICAgICAgIGNhbmNlbFJlcXVlc3RBbmltRnJhbWUocEpTLnRtcC5jaGVja0FuaW1GcmFtZSk7XHJcbiAgICAgICAgICAgICAgICBpZighcEpTLnRtcC5pbWdfZXJyb3Ipe1xyXG4gICAgICAgICAgICAgICAgICAgIHBKUy5mbi52ZW5kb3JzLmluaXQoKTtcclxuICAgICAgICAgICAgICAgICAgICBwSlMuZm4udmVuZG9ycy5kcmF3KCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBwSlMuZm4udmVuZG9ycy5pbml0KCk7XHJcbiAgICAgICAgICAgIHBKUy5mbi52ZW5kb3JzLmRyYXcoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfTtcclxuXHJcblxyXG4gICAgcEpTLmZuLnZlbmRvcnMuaW5pdCA9IGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgICAgIC8qIGluaXQgY2FudmFzICsgcGFydGljbGVzICovXHJcbiAgICAgICAgcEpTLmZuLnJldGluYUluaXQoKTtcclxuICAgICAgICBwSlMuZm4uY2FudmFzSW5pdCgpO1xyXG4gICAgICAgIHBKUy5mbi5jYW52YXNTaXplKCk7XHJcbiAgICAgICAgcEpTLmZuLmNhbnZhc1BhaW50KCk7XHJcbiAgICAgICAgcEpTLmZuLnBhcnRpY2xlc0NyZWF0ZSgpO1xyXG4gICAgICAgIHBKUy5mbi52ZW5kb3JzLmRlbnNpdHlBdXRvUGFydGljbGVzKCk7XHJcblxyXG4gICAgICAgIC8qIHBhcnRpY2xlcy5saW5lX2xpbmtlZCAtIGNvbnZlcnQgaGV4IGNvbG9ycyB0byByZ2IgKi9cclxuICAgICAgICBwSlMucGFydGljbGVzLmxpbmVfbGlua2VkLmNvbG9yX3JnYl9saW5lID0gaGV4VG9SZ2IocEpTLnBhcnRpY2xlcy5saW5lX2xpbmtlZC5jb2xvcik7XHJcblxyXG4gICAgfTtcclxuXHJcblxyXG4gICAgcEpTLmZuLnZlbmRvcnMuc3RhcnQgPSBmdW5jdGlvbigpe1xyXG5cclxuICAgICAgICBpZihpc0luQXJyYXkoJ2ltYWdlJywgcEpTLnBhcnRpY2xlcy5zaGFwZS50eXBlKSl7XHJcbiAgICAgICAgICAgIHBKUy50bXAuaW1nX3R5cGUgPSBwSlMucGFydGljbGVzLnNoYXBlLmltYWdlLnNyYy5zdWJzdHIocEpTLnBhcnRpY2xlcy5zaGFwZS5pbWFnZS5zcmMubGVuZ3RoIC0gMyk7XHJcbiAgICAgICAgICAgIHBKUy5mbi52ZW5kb3JzLmxvYWRJbWcocEpTLnRtcC5pbWdfdHlwZSk7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHBKUy5mbi52ZW5kb3JzLmNoZWNrQmVmb3JlRHJhdygpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9O1xyXG5cclxuXHJcblxyXG5cclxuICAgIC8qIC0tLS0tLS0tLS0gcEpTIC0gc3RhcnQgLS0tLS0tLS0tLS0tICovXHJcblxyXG5cclxuICAgIHBKUy5mbi52ZW5kb3JzLmV2ZW50c0xpc3RlbmVycygpO1xyXG5cclxuICAgIHBKUy5mbi52ZW5kb3JzLnN0YXJ0KCk7XHJcblxyXG5cclxuXHJcbn07XHJcblxyXG4vKiAtLS0tLS0tLS0tIGdsb2JhbCBmdW5jdGlvbnMgLSB2ZW5kb3JzIC0tLS0tLS0tLS0tLSAqL1xyXG5cclxuT2JqZWN0LmRlZXBFeHRlbmQgPSBmdW5jdGlvbihkZXN0aW5hdGlvbiwgc291cmNlKSB7XHJcbiAgICBmb3IgKHZhciBwcm9wZXJ0eSBpbiBzb3VyY2UpIHtcclxuICAgICAgICBpZiAoc291cmNlW3Byb3BlcnR5XSAmJiBzb3VyY2VbcHJvcGVydHldLmNvbnN0cnVjdG9yICYmXHJcbiAgICAgICAgICAgIHNvdXJjZVtwcm9wZXJ0eV0uY29uc3RydWN0b3IgPT09IE9iamVjdCkge1xyXG4gICAgICAgICAgICBkZXN0aW5hdGlvbltwcm9wZXJ0eV0gPSBkZXN0aW5hdGlvbltwcm9wZXJ0eV0gfHwge307XHJcbiAgICAgICAgICAgIGFyZ3VtZW50cy5jYWxsZWUoZGVzdGluYXRpb25bcHJvcGVydHldLCBzb3VyY2VbcHJvcGVydHldKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBkZXN0aW5hdGlvbltwcm9wZXJ0eV0gPSBzb3VyY2VbcHJvcGVydHldO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBkZXN0aW5hdGlvbjtcclxufTtcclxuXHJcbndpbmRvdy5yZXF1ZXN0QW5pbUZyYW1lID0gKGZ1bmN0aW9uKCl7XHJcbiAgICByZXR1cm4gIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHxcclxuICAgICAgICB3aW5kb3cud2Via2l0UmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8XHJcbiAgICAgICAgd2luZG93Lm1velJlcXVlc3RBbmltYXRpb25GcmFtZSAgICB8fFxyXG4gICAgICAgIHdpbmRvdy5vUmVxdWVzdEFuaW1hdGlvbkZyYW1lICAgICAgfHxcclxuICAgICAgICB3aW5kb3cubXNSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgICAgIHx8XHJcbiAgICAgICAgZnVuY3Rpb24oY2FsbGJhY2spe1xyXG4gICAgICAgICAgICB3aW5kb3cuc2V0VGltZW91dChjYWxsYmFjaywgMTAwMCAvIDYwKTtcclxuICAgICAgICB9O1xyXG59KSgpO1xyXG5cclxud2luZG93LmNhbmNlbFJlcXVlc3RBbmltRnJhbWUgPSAoIGZ1bmN0aW9uKCkge1xyXG4gICAgcmV0dXJuIHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZSAgICAgICAgIHx8XHJcbiAgICAgICAgd2luZG93LndlYmtpdENhbmNlbFJlcXVlc3RBbmltYXRpb25GcmFtZSB8fFxyXG4gICAgICAgIHdpbmRvdy5tb3pDYW5jZWxSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgICAgfHxcclxuICAgICAgICB3aW5kb3cub0NhbmNlbFJlcXVlc3RBbmltYXRpb25GcmFtZSAgICAgIHx8XHJcbiAgICAgICAgd2luZG93Lm1zQ2FuY2VsUmVxdWVzdEFuaW1hdGlvbkZyYW1lICAgICB8fFxyXG4gICAgICAgIGNsZWFyVGltZW91dFxyXG59ICkoKTtcclxuXHJcbmZ1bmN0aW9uIGhleFRvUmdiKGhleCl7XHJcbiAgICAvLyBCeSBUaW0gRG93biAtIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzU2MjQxMzkvMzQ5MzY1MFxyXG4gICAgLy8gRXhwYW5kIHNob3J0aGFuZCBmb3JtIChlLmcuIFwiMDNGXCIpIHRvIGZ1bGwgZm9ybSAoZS5nLiBcIjAwMzNGRlwiKVxyXG4gICAgdmFyIHNob3J0aGFuZFJlZ2V4ID0gL14jPyhbYS1mXFxkXSkoW2EtZlxcZF0pKFthLWZcXGRdKSQvaTtcclxuICAgIGhleCA9IGhleC5yZXBsYWNlKHNob3J0aGFuZFJlZ2V4LCBmdW5jdGlvbihtLCByLCBnLCBiKSB7XHJcbiAgICAgICAgcmV0dXJuIHIgKyByICsgZyArIGcgKyBiICsgYjtcclxuICAgIH0pO1xyXG4gICAgdmFyIHJlc3VsdCA9IC9eIz8oW2EtZlxcZF17Mn0pKFthLWZcXGRdezJ9KShbYS1mXFxkXXsyfSkkL2kuZXhlYyhoZXgpO1xyXG4gICAgcmV0dXJuIHJlc3VsdCA/IHtcclxuICAgICAgICByOiBwYXJzZUludChyZXN1bHRbMV0sIDE2KSxcclxuICAgICAgICBnOiBwYXJzZUludChyZXN1bHRbMl0sIDE2KSxcclxuICAgICAgICBiOiBwYXJzZUludChyZXN1bHRbM10sIDE2KVxyXG4gICAgfSA6IG51bGw7XHJcbn07XHJcblxyXG5mdW5jdGlvbiBjbGFtcChudW1iZXIsIG1pbiwgbWF4KSB7XHJcbiAgICByZXR1cm4gTWF0aC5taW4oTWF0aC5tYXgobnVtYmVyLCBtaW4pLCBtYXgpO1xyXG59O1xyXG5cclxuZnVuY3Rpb24gaXNJbkFycmF5KHZhbHVlLCBhcnJheSkge1xyXG4gICAgcmV0dXJuIGFycmF5LmluZGV4T2YodmFsdWUpID4gLTE7XHJcbn1cclxuXHJcblxyXG4vKiAtLS0tLS0tLS0tIHBhcnRpY2xlcy5qcyBmdW5jdGlvbnMgLSBzdGFydCAtLS0tLS0tLS0tLS0gKi9cclxuXHJcbndpbmRvdy5wSlNEb20gPSBbXTtcclxuXHJcbndpbmRvdy5wYXJ0aWNsZXNKUyA9IGZ1bmN0aW9uKHRhZ19pZCwgcGFyYW1zKXtcclxuXHJcbiAgICAvL2NvbnNvbGUubG9nKHBhcmFtcyk7XHJcblxyXG4gICAgLyogbm8gc3RyaW5nIGlkPyBzbyBpdCdzIG9iamVjdCBwYXJhbXMsIGFuZCBzZXQgdGhlIGlkIHdpdGggZGVmYXVsdCBpZCAqL1xyXG4gICAgaWYodHlwZW9mKHRhZ19pZCkgIT0gJ3N0cmluZycpe1xyXG4gICAgICAgIHBhcmFtcyA9IHRhZ19pZDtcclxuICAgICAgICB0YWdfaWQgPSAncGFydGljbGVzLWpzJztcclxuICAgIH1cclxuXHJcbiAgICAvKiBubyBpZD8gc2V0IHRoZSBpZCB0byBkZWZhdWx0IGlkICovXHJcbiAgICBpZighdGFnX2lkKXtcclxuICAgICAgICB0YWdfaWQgPSAncGFydGljbGVzLWpzJztcclxuICAgIH1cclxuXHJcbiAgICAvKiBwSlMgZWxlbWVudHMgKi9cclxuICAgIHZhciBwSlNfdGFnID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGFnX2lkKSxcclxuICAgICAgICBwSlNfY2FudmFzX2NsYXNzID0gJ3BhcnRpY2xlcy1qcy1jYW52YXMtZWwnLFxyXG4gICAgICAgIGV4aXN0X2NhbnZhcyA9IHBKU190YWcuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShwSlNfY2FudmFzX2NsYXNzKTtcclxuXHJcbiAgICAvKiByZW1vdmUgY2FudmFzIGlmIGV4aXN0cyBpbnRvIHRoZSBwSlMgdGFyZ2V0IHRhZyAqL1xyXG4gICAgaWYoZXhpc3RfY2FudmFzLmxlbmd0aCl7XHJcbiAgICAgICAgd2hpbGUoZXhpc3RfY2FudmFzLmxlbmd0aCA+IDApe1xyXG4gICAgICAgICAgICBwSlNfdGFnLnJlbW92ZUNoaWxkKGV4aXN0X2NhbnZhc1swXSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qIGNyZWF0ZSBjYW52YXMgZWxlbWVudCAqL1xyXG4gICAgdmFyIGNhbnZhc19lbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xyXG4gICAgY2FudmFzX2VsLmNsYXNzTmFtZSA9IHBKU19jYW52YXNfY2xhc3M7XHJcblxyXG4gICAgLyogc2V0IHNpemUgY2FudmFzICovXHJcbiAgICBjYW52YXNfZWwuc3R5bGUud2lkdGggPSBcIjEwMCVcIjtcclxuICAgIGNhbnZhc19lbC5zdHlsZS5oZWlnaHQgPSBcIjEwMCVcIjtcclxuXHJcbiAgICAvKiBhcHBlbmQgY2FudmFzICovXHJcbiAgICB2YXIgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGFnX2lkKS5hcHBlbmRDaGlsZChjYW52YXNfZWwpO1xyXG5cclxuICAgIC8qIGxhdW5jaCBwYXJ0aWNsZS5qcyAqL1xyXG4gICAgaWYoY2FudmFzICE9IG51bGwpe1xyXG4gICAgICAgIHBKU0RvbS5wdXNoKG5ldyBwSlModGFnX2lkLCBwYXJhbXMpKTtcclxuICAgIH1cclxuXHJcbn07XHJcblxyXG53aW5kb3cucGFydGljbGVzSlMubG9hZCA9IGZ1bmN0aW9uKHRhZ19pZCwgcGF0aF9jb25maWdfanNvbiwgY2FsbGJhY2spe1xyXG5cclxuICAgIC8qIGxvYWQganNvbiBjb25maWcgKi9cclxuICAgIHZhciB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuICAgIHhoci5vcGVuKCdHRVQnLCBwYXRoX2NvbmZpZ19qc29uKTtcclxuICAgIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgIGlmKHhoci5yZWFkeVN0YXRlID09IDQpe1xyXG4gICAgICAgICAgICBpZih4aHIuc3RhdHVzID09IDIwMCl7XHJcbiAgICAgICAgICAgICAgICB2YXIgcGFyYW1zID0gSlNPTi5wYXJzZShkYXRhLmN1cnJlbnRUYXJnZXQucmVzcG9uc2UpO1xyXG4gICAgICAgICAgICAgICAgd2luZG93LnBhcnRpY2xlc0pTKHRhZ19pZCwgcGFyYW1zKTtcclxuICAgICAgICAgICAgICAgIGlmKGNhbGxiYWNrKSBjYWxsYmFjaygpO1xyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFcnJvciBwSlMgLSBYTUxIdHRwUmVxdWVzdCBzdGF0dXM6ICcreGhyLnN0YXR1cyk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnRXJyb3IgcEpTIC0gRmlsZSBjb25maWcgbm90IGZvdW5kJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgeGhyLnNlbmQoKTtcclxuXHJcbn07XHJcblxyXG5wYXJ0aWNsZXNKUyhcInBhcnRpY2xlcy1qc1wiLCB7XHJcbiAgICBcInBhcnRpY2xlc1wiOiB7XHJcbiAgICAgICAgXCJudW1iZXJcIjoge1xyXG4gICAgICAgICAgICBcInZhbHVlXCI6IDEwMCxcclxuICAgICAgICAgICAgXCJkZW5zaXR5XCI6IHtcclxuICAgICAgICAgICAgICAgIFwiZW5hYmxlXCI6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBcInZhbHVlX2FyZWFcIjogODAwXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIFwiY29sb3JcIjoge1xyXG4gICAgICAgICAgICBcInZhbHVlXCI6IFwiIzZhMjUyM1wiXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcInNoYXBlXCI6IHtcclxuICAgICAgICAgICAgXCJ0eXBlXCI6IFwiY2lyY2xlXCIsXHJcbiAgICAgICAgICAgIFwic3Ryb2tlXCI6IHtcclxuICAgICAgICAgICAgICAgIFwid2lkdGhcIjogMCxcclxuICAgICAgICAgICAgICAgIFwiY29sb3JcIjogXCIjMDAwMDAwXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCJwb2x5Z29uXCI6IHtcclxuICAgICAgICAgICAgICAgIFwibmJfc2lkZXNcIjogNVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBcImltYWdlXCI6IHtcclxuICAgICAgICAgICAgICAgIFwic3JjXCI6IFwiaW1nL2dpdGh1Yi5zdmdcIixcclxuICAgICAgICAgICAgICAgIFwid2lkdGhcIjogMTAwLFxyXG4gICAgICAgICAgICAgICAgXCJoZWlnaHRcIjogMTAwXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIFwib3BhY2l0eVwiOiB7XHJcbiAgICAgICAgICAgIFwidmFsdWVcIjogMSxcclxuICAgICAgICAgICAgXCJyYW5kb21cIjogdHJ1ZSxcclxuICAgICAgICAgICAgXCJhbmltXCI6IHtcclxuICAgICAgICAgICAgICAgIFwiZW5hYmxlXCI6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBcInNwZWVkXCI6IDEsXHJcbiAgICAgICAgICAgICAgICBcIm9wYWNpdHlfbWluXCI6IDAsXHJcbiAgICAgICAgICAgICAgICBcInN5bmNcIjogZmFsc2VcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJzaXplXCI6IHtcclxuICAgICAgICAgICAgXCJ2YWx1ZVwiOiAzLFxyXG4gICAgICAgICAgICBcInJhbmRvbVwiOiB0cnVlLFxyXG4gICAgICAgICAgICBcImFuaW1cIjoge1xyXG4gICAgICAgICAgICAgICAgXCJlbmFibGVcIjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIFwic3BlZWRcIjogNCxcclxuICAgICAgICAgICAgICAgIFwic2l6ZV9taW5cIjogMC4zLFxyXG4gICAgICAgICAgICAgICAgXCJzeW5jXCI6IGZhbHNlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIFwibGluZV9saW5rZWRcIjoge1xyXG4gICAgICAgICAgICBcImVuYWJsZVwiOiB0cnVlLFxyXG4gICAgICAgICAgICBcImRpc3RhbmNlXCI6IDEwMC4wMTQxNjg2NzM4OTU1MSxcclxuICAgICAgICAgICAgXCJjb2xvclwiOiBcIiNkMmFmMGRcIixcclxuICAgICAgICAgICAgXCJvcGFjaXR5XCI6IDAuMzYzMDEzNjQ0NTc4MDc1MyxcclxuICAgICAgICAgICAgXCJ3aWR0aFwiOiAxXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcIm1vdmVcIjoge1xyXG4gICAgICAgICAgICBcImVuYWJsZVwiOiB0cnVlLFxyXG4gICAgICAgICAgICBcInNwZWVkXCI6IDMuMzMzODA1NjIyNDYzMTg0LFxyXG4gICAgICAgICAgICBcImRpcmVjdGlvblwiOiBcIm5vbmVcIixcclxuICAgICAgICAgICAgXCJyYW5kb21cIjogdHJ1ZSxcclxuICAgICAgICAgICAgXCJzdHJhaWdodFwiOiBmYWxzZSxcclxuICAgICAgICAgICAgXCJvdXRfbW9kZVwiOiBcIm91dFwiLFxyXG4gICAgICAgICAgICBcImJvdW5jZVwiOiBmYWxzZSxcclxuICAgICAgICAgICAgXCJhdHRyYWN0XCI6IHtcclxuICAgICAgICAgICAgICAgIFwiZW5hYmxlXCI6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgXCJyb3RhdGVYXCI6IDYwMCxcclxuICAgICAgICAgICAgICAgIFwicm90YXRlWVwiOiA2MDBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBcImludGVyYWN0aXZpdHlcIjoge1xyXG4gICAgICAgIFwiZGV0ZWN0X29uXCI6IFwid2luZG93XCIsXHJcbiAgICAgICAgXCJldmVudHNcIjoge1xyXG4gICAgICAgICAgICBcIm9uaG92ZXJcIjoge1xyXG4gICAgICAgICAgICAgICAgXCJlbmFibGVcIjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIFwibW9kZVwiOiBcImJ1YmJsZVwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFwib25jbGlja1wiOiB7XHJcbiAgICAgICAgICAgICAgICBcImVuYWJsZVwiOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIFwibW9kZVwiOiBcInJlcHVsc2VcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBcInJlc2l6ZVwiOiB0cnVlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcIm1vZGVzXCI6IHtcclxuICAgICAgICAgICAgXCJncmFiXCI6IHtcclxuICAgICAgICAgICAgICAgIFwiZGlzdGFuY2VcIjogNDAwLFxyXG4gICAgICAgICAgICAgICAgXCJsaW5lX2xpbmtlZFwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJvcGFjaXR5XCI6IDFcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCJidWJibGVcIjoge1xyXG4gICAgICAgICAgICAgICAgXCJkaXN0YW5jZVwiOiAxMDAsXHJcbiAgICAgICAgICAgICAgICBcInNpemVcIjogMCxcclxuICAgICAgICAgICAgICAgIFwiZHVyYXRpb25cIjogMixcclxuICAgICAgICAgICAgICAgIFwib3BhY2l0eVwiOiAwLFxyXG4gICAgICAgICAgICAgICAgXCJzcGVlZFwiOiAzXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFwicmVwdWxzZVwiOiB7XHJcbiAgICAgICAgICAgICAgICBcImRpc3RhbmNlXCI6IDUwLFxyXG4gICAgICAgICAgICAgICAgXCJkdXJhdGlvblwiOiAwLjRcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCJwdXNoXCI6IHtcclxuICAgICAgICAgICAgICAgIFwicGFydGljbGVzX25iXCI6IDRcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCJyZW1vdmVcIjoge1xyXG4gICAgICAgICAgICAgICAgXCJwYXJ0aWNsZXNfbmJcIjogMlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIFwicmV0aW5hX2RldGVjdFwiOiB0cnVlXHJcbn0pO1xyXG5cclxucmVxdWVzdEFuaW1hdGlvbkZyYW1lKCk7XHJcblxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hc3NldHMvanMvcGFydGljbGVzLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==