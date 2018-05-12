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
/******/ 	__webpack_require__.p = "/";
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

/* -----------------------------------------------
  /* Author : Vincent Garreau  - vincentgarreau.com
  /* MIT license: https://opensource.org/licenses/MIT
  /* Demo / Generator : vincentgarreau.com/particles.js
  /* GitHub : github.com/VincentGarreau/particles.js
  /* How to use? : Check the GitHub README
  /* v2.0.0
  /* ----------------------------------------------- */

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
                value: 400,
                density: {
                    enable: true,
                    value_area: 800
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
                    nb_sides: 5
                },
                image: {
                    src: '',
                    width: 100,
                    height: 100
                }
            },
            opacity: {
                value: 1,
                random: false,
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
                    distance: 200,
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
            "value": 160,
            "density": {
                "enable": true,
                "value_area": 800
            }
        },
        "color": {
            "value": "#ffffff"
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
            "color": "#d40a0a",
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
                "distance": 250,
                "size": 0,
                "duration": 2,
                "opacity": 0,
                "speed": 3
            },
            "repulse": {
                "distance": 400,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMmFmMmUwZTJjMjUxNjVhODZjZTkiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvaW5zY3JpcHRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3BhcnRpY2xlcy5qcyJdLCJuYW1lcyI6WyJyZXF1aXJlIiwiYWxlcnRSZWRJbnB1dCIsImRlZmF1bHRJbnB1dCIsInVzZXJOYW1lVmFsaWRhdGlvbiIsInVzZXJuYW1lSW5wdXQiLCJ1c2VybmFtZSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJpc3N1ZUFyciIsInRlc3QiLCJwdXNoIiwibGVuZ3RoIiwic2V0Q3VzdG9tVmFsaWRpdHkiLCJzdHlsZSIsImJvcmRlckNvbG9yIiwicGFzc3dvcmRWYWxpZGF0aW9uIiwicGFzc3dvcmRJbnB1dCIsInBhc3N3b3JkIiwiam9pbiIsInBKUyIsInRhZ19pZCIsInBhcmFtcyIsImNhbnZhc19lbCIsInF1ZXJ5U2VsZWN0b3IiLCJjYW52YXMiLCJlbCIsInciLCJvZmZzZXRXaWR0aCIsImgiLCJvZmZzZXRIZWlnaHQiLCJwYXJ0aWNsZXMiLCJudW1iZXIiLCJ2YWx1ZSIsImRlbnNpdHkiLCJlbmFibGUiLCJ2YWx1ZV9hcmVhIiwiY29sb3IiLCJzaGFwZSIsInR5cGUiLCJzdHJva2UiLCJ3aWR0aCIsInBvbHlnb24iLCJuYl9zaWRlcyIsImltYWdlIiwic3JjIiwiaGVpZ2h0Iiwib3BhY2l0eSIsInJhbmRvbSIsImFuaW0iLCJzcGVlZCIsIm9wYWNpdHlfbWluIiwic3luYyIsInNpemUiLCJzaXplX21pbiIsImxpbmVfbGlua2VkIiwiZGlzdGFuY2UiLCJtb3ZlIiwiZGlyZWN0aW9uIiwic3RyYWlnaHQiLCJvdXRfbW9kZSIsImJvdW5jZSIsImF0dHJhY3QiLCJyb3RhdGVYIiwicm90YXRlWSIsImFycmF5IiwiaW50ZXJhY3Rpdml0eSIsImRldGVjdF9vbiIsImV2ZW50cyIsIm9uaG92ZXIiLCJtb2RlIiwib25jbGljayIsInJlc2l6ZSIsIm1vZGVzIiwiZ3JhYiIsImJ1YmJsZSIsImR1cmF0aW9uIiwicmVwdWxzZSIsInBhcnRpY2xlc19uYiIsInJlbW92ZSIsIm1vdXNlIiwicmV0aW5hX2RldGVjdCIsImZuIiwiaW50ZXJhY3QiLCJ2ZW5kb3JzIiwidG1wIiwiT2JqZWN0IiwiZGVlcEV4dGVuZCIsIm9iaiIsInNpemVfdmFsdWUiLCJzaXplX2FuaW1fc3BlZWQiLCJtb3ZlX3NwZWVkIiwibGluZV9saW5rZWRfZGlzdGFuY2UiLCJsaW5lX2xpbmtlZF93aWR0aCIsIm1vZGVfZ3JhYl9kaXN0YW5jZSIsIm1vZGVfYnViYmxlX2Rpc3RhbmNlIiwibW9kZV9idWJibGVfc2l6ZSIsIm1vZGVfcmVwdWxzZV9kaXN0YW5jZSIsInJldGluYUluaXQiLCJ3aW5kb3ciLCJkZXZpY2VQaXhlbFJhdGlvIiwicHhyYXRpbyIsInJldGluYSIsImNhbnZhc0luaXQiLCJjdHgiLCJnZXRDb250ZXh0IiwiY2FudmFzU2l6ZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJwYXJ0aWNsZXNFbXB0eSIsInBhcnRpY2xlc0NyZWF0ZSIsInBhcnRpY2xlc0RyYXciLCJkZW5zaXR5QXV0b1BhcnRpY2xlcyIsImNhbnZhc1BhaW50IiwiZmlsbFJlY3QiLCJjYW52YXNDbGVhciIsImNsZWFyUmVjdCIsInBhcnRpY2xlIiwicG9zaXRpb24iLCJyYWRpdXMiLCJNYXRoIiwic2l6ZV9zdGF0dXMiLCJ2cyIsIngiLCJ5IiwiY2hlY2tPdmVybGFwIiwiQXJyYXkiLCJjb2xvcl9zZWxlY3RlZCIsImZsb29yIiwicmdiIiwiaGV4VG9SZ2IiLCJyIiwidW5kZWZpbmVkIiwiZyIsImIiLCJzIiwibCIsImhzbCIsIm9wYWNpdHlfc3RhdHVzIiwidm8iLCJ2ZWxiYXNlIiwidngiLCJ2eSIsInZ4X2kiLCJ2eV9pIiwic2hhcGVfdHlwZSIsInNoYXBlX3NlbGVjdGVkIiwic2giLCJpbWciLCJyYXRpbyIsImltZ190eXBlIiwic291cmNlX3N2ZyIsImNyZWF0ZVN2Z0ltZyIsInB1c2hpbmciLCJsb2FkZWQiLCJwcm90b3R5cGUiLCJkcmF3IiwicCIsInJhZGl1c19idWJibGUiLCJvcGFjaXR5X2J1YmJsZSIsImNvbG9yX3ZhbHVlIiwiZmlsbFN0eWxlIiwiYmVnaW5QYXRoIiwiYXJjIiwiUEkiLCJyZWN0IiwiZHJhd1NoYXBlIiwiZHJhd0ltYWdlIiwiaW1nX29iaiIsImNsb3NlUGF0aCIsInN0cm9rZVN0eWxlIiwibGluZVdpZHRoIiwiZmlsbCIsImkiLCJwYXJ0aWNsZXNVcGRhdGUiLCJtcyIsIm5ld19wb3MiLCJ4X2xlZnQiLCJ4X3JpZ2h0IiwieV90b3AiLCJ5X2JvdHRvbSIsImlzSW5BcnJheSIsImdyYWJQYXJ0aWNsZSIsImJ1YmJsZVBhcnRpY2xlIiwicmVwdWxzZVBhcnRpY2xlIiwiaiIsInAyIiwibGlua1BhcnRpY2xlcyIsImF0dHJhY3RQYXJ0aWNsZXMiLCJib3VuY2VQYXJ0aWNsZXMiLCJwYXJ0aWNsZXNSZWZyZXNoIiwiY2FuY2VsUmVxdWVzdEFuaW1GcmFtZSIsImNoZWNrQW5pbUZyYW1lIiwiZHJhd0FuaW1GcmFtZSIsImNvdW50X3N2ZyIsInN0YXJ0IiwicDEiLCJkeCIsImR5IiwiZGlzdCIsInNxcnQiLCJvcGFjaXR5X2xpbmUiLCJjb2xvcl9saW5lIiwiY29sb3JfcmdiX2xpbmUiLCJtb3ZlVG8iLCJsaW5lVG8iLCJheCIsImF5IiwiZGlzdF9wIiwicHVzaFBhcnRpY2xlcyIsIm5iIiwicG9zIiwicG9zX3giLCJwb3NfeSIsInJlbW92ZVBhcnRpY2xlcyIsInNwbGljZSIsImluaXQiLCJkeF9tb3VzZSIsImR5X21vdXNlIiwiZGlzdF9tb3VzZSIsInN0YXR1cyIsImRpZiIsInByb2Nlc3MiLCJidWJibGVfcGFyYW0iLCJwYXJ0aWNsZXNfcGFyYW0iLCJwX29ial9idWJibGUiLCJwX29iaiIsImlkIiwiYnViYmxlX2R1cmF0aW9uX2VuZCIsInRpbWVfc3BlbnQiLCJ2YWx1ZV90bXAiLCJidWJibGVfY2xpY2tpbmciLCJjbGlja19wb3NfeCIsImNsaWNrX3Bvc195IiwiRGF0ZSIsImdldFRpbWUiLCJjbGlja190aW1lIiwibm9ybVZlYyIsInJlcHVsc2VSYWRpdXMiLCJ2ZWxvY2l0eSIsInJlcHVsc2VGYWN0b3IiLCJjbGFtcCIsInBvdyIsInJlcHVsc2VfZmluaXNoIiwicmVwdWxzZV9jb3VudCIsInJlcHVsc2VfY2xpY2tpbmciLCJmIiwiYXRhbjIiLCJmb3JjZSIsImNvcyIsInNpbiIsImQiLCJldmVudHNMaXN0ZW5lcnMiLCJlIiwiY2xpZW50WCIsImNsaWVudFkiLCJvZmZzZXRYIiwib2Zmc2V0WSIsInNldFRpbWVvdXQiLCJhcmVhIiwibmJfcGFydGljbGVzIiwibWlzc2luZ19wYXJ0aWNsZXMiLCJhYnMiLCJzdmdYbWwiLCJyZ2JIZXgiLCJjb2xvcmVkU3ZnWG1sIiwicmVwbGFjZSIsIm0iLCJzdmciLCJCbG9iIiwiRE9NVVJMIiwiVVJMIiwid2Via2l0VVJMIiwidXJsIiwiY3JlYXRlT2JqZWN0VVJMIiwiSW1hZ2UiLCJyZXZva2VPYmplY3RVUkwiLCJkZXN0cm95cEpTIiwiY2FuY2VsQW5pbWF0aW9uRnJhbWUiLCJwSlNEb20iLCJjIiwic3RhcnRYIiwic3RhcnRZIiwic2lkZUxlbmd0aCIsInNpZGVDb3VudE51bWVyYXRvciIsInNpZGVDb3VudERlbm9taW5hdG9yIiwic2lkZUNvdW50IiwiZGVjaW1hbFNpZGVzIiwiaW50ZXJpb3JBbmdsZURlZ3JlZXMiLCJpbnRlcmlvckFuZ2xlIiwic2F2ZSIsInRyYW5zbGF0ZSIsInJvdGF0ZSIsInJlc3RvcmUiLCJleHBvcnRJbWciLCJvcGVuIiwidG9EYXRhVVJMIiwibG9hZEltZyIsImltZ19lcnJvciIsInhociIsIlhNTEh0dHBSZXF1ZXN0Iiwib25yZWFkeXN0YXRlY2hhbmdlIiwiZGF0YSIsInJlYWR5U3RhdGUiLCJjdXJyZW50VGFyZ2V0IiwicmVzcG9uc2UiLCJjaGVja0JlZm9yZURyYXciLCJjb25zb2xlIiwibG9nIiwic2VuZCIsInJlcXVlc3RBbmltRnJhbWUiLCJjaGVjayIsInN1YnN0ciIsImRlc3RpbmF0aW9uIiwic291cmNlIiwicHJvcGVydHkiLCJjb25zdHJ1Y3RvciIsImFyZ3VtZW50cyIsImNhbGxlZSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsIndlYmtpdFJlcXVlc3RBbmltYXRpb25GcmFtZSIsIm1velJlcXVlc3RBbmltYXRpb25GcmFtZSIsIm9SZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJtc1JlcXVlc3RBbmltYXRpb25GcmFtZSIsImNhbGxiYWNrIiwid2Via2l0Q2FuY2VsUmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwibW96Q2FuY2VsUmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwib0NhbmNlbFJlcXVlc3RBbmltYXRpb25GcmFtZSIsIm1zQ2FuY2VsUmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiY2xlYXJUaW1lb3V0IiwiaGV4Iiwic2hvcnRoYW5kUmVnZXgiLCJyZXN1bHQiLCJleGVjIiwicGFyc2VJbnQiLCJtaW4iLCJtYXgiLCJpbmRleE9mIiwicGFydGljbGVzSlMiLCJwSlNfdGFnIiwicEpTX2NhbnZhc19jbGFzcyIsImV4aXN0X2NhbnZhcyIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJyZW1vdmVDaGlsZCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJhcHBlbmRDaGlsZCIsImxvYWQiLCJwYXRoX2NvbmZpZ19qc29uIiwiSlNPTiIsInBhcnNlIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2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QkFBWSxHQURSO0FBRUosK0JBQWU7QUFDWCwrQkFBVztBQURBO0FBRlgsYUFESDtBQU9MLHNCQUFVO0FBQ04sNEJBQVksR0FETjtBQUVOLHdCQUFRLENBRkY7QUFHTiw0QkFBWSxDQUhOO0FBSU4sMkJBQVcsQ0FKTDtBQUtOLHlCQUFTO0FBTEgsYUFQTDtBQWNMLHVCQUFXO0FBQ1AsNEJBQVksR0FETDtBQUVQLDRCQUFZO0FBRkwsYUFkTjtBQWtCTCxvQkFBUTtBQUNKLGdDQUFnQjtBQURaLGFBbEJIO0FBcUJMLHNCQUFVO0FBQ04sZ0NBQWdCO0FBRFY7QUFyQkw7QUFiSSxLQXJFTztBQTRHeEIscUJBQWlCO0FBNUdPLENBQTVCOztBQStHQW5CLHdCIiwiZmlsZSI6ImpzL2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9cIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vYXNzZXRzL2pzL2FwcC5qc1wiKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCAyYWYyZTBlMmMyNTE2NWE4NmNlOSIsInJlcXVpcmUoJy4vaW5zY3JpcHRpb24nKTtcbnJlcXVpcmUoJy4vcGFydGljbGVzJyk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXNzZXRzL2pzL2FwcC5qcyIsInZhciBhbGVydFJlZElucHV0ID0gXCIjOEMxMDEwXCI7XHJcbnZhciBkZWZhdWx0SW5wdXQgPSBcInJnYmEoMTAsIDE4MCwgMTgwLCAxKVwiO1xyXG5cclxuZnVuY3Rpb24gdXNlck5hbWVWYWxpZGF0aW9uKHVzZXJuYW1lSW5wdXQpIHtcclxuICAgIHZhciB1c2VybmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidXNlcm5hbWVcIik7XHJcbiAgICB2YXIgaXNzdWVBcnIgPSBbXTtcclxuICAgIGlmICgvWy0hQCMkJV4mKigpXyt8fj1ge31cXFtcXF06XCI7Jzw+PywuXFwvXS8udGVzdCh1c2VybmFtZUlucHV0KSkge1xyXG4gICAgICAgIGlzc3VlQXJyLnB1c2goXCJObyBzcGVjaWFsIGNoYXJhY3RlcnMhXCIpO1xyXG4gICAgfVxyXG4gICAgaWYgKGlzc3VlQXJyLmxlbmd0aCA+IDApIHtcclxuICAgICAgICB1c2VybmFtZS5zZXRDdXN0b21WYWxpZGl0eShpc3N1ZUFycik7XHJcbiAgICAgICAgdXNlcm5hbWUuc3R5bGUuYm9yZGVyQ29sb3IgPSBhbGVydFJlZElucHV0O1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICB1c2VybmFtZS5zZXRDdXN0b21WYWxpZGl0eShcIlwiKTtcclxuICAgICAgICB1c2VybmFtZS5zdHlsZS5ib3JkZXJDb2xvciA9IGRlZmF1bHRJbnB1dDtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gcGFzc3dvcmRWYWxpZGF0aW9uKHBhc3N3b3JkSW5wdXQpIHtcclxuICAgIHZhciBwYXNzd29yZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGFzc3dvcmRcIik7XHJcbiAgICB2YXIgaXNzdWVBcnIgPSBbXTtcclxuICAgIGlmICghL14uezcsMTV9JC8udGVzdChwYXNzd29yZElucHV0KSkge1xyXG4gICAgICAgIGlzc3VlQXJyLnB1c2goXCJQYXNzd29yZCBtdXN0IGJlIGJldHdlZW4gNy0xNSBjaGFyYWN0ZXJzLlwiKTtcclxuICAgIH1cclxuICAgIGlmICghL1xcZC8udGVzdChwYXNzd29yZElucHV0KSkge1xyXG4gICAgICAgIGlzc3VlQXJyLnB1c2goXCJNdXN0IGNvbnRhaW4gYXQgbGVhc3Qgb25lIG51bWJlci5cIik7XHJcbiAgICB9XHJcbiAgICBpZiAoIS9bYS16XS8udGVzdChwYXNzd29yZElucHV0KSkge1xyXG4gICAgICAgIGlzc3VlQXJyLnB1c2goXCJNdXN0IGNvbnRhaW4gYSBsb3dlcmNhc2UgbGV0dGVyLlwiKTtcclxuICAgIH1cclxuICAgIGlmICghL1tBLVpdLy50ZXN0KHBhc3N3b3JkSW5wdXQpKSB7XHJcbiAgICAgICAgaXNzdWVBcnIucHVzaChcIk11c3QgY29udGFpbiBhbiB1cHBlcmNhc2UgbGV0dGVyLlwiKTtcclxuICAgIH1cclxuICAgIGlmIChpc3N1ZUFyci5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgcGFzc3dvcmQuc2V0Q3VzdG9tVmFsaWRpdHkoaXNzdWVBcnIuam9pbihcIlxcblwiKSk7XHJcbiAgICAgICAgcGFzc3dvcmQuc3R5bGUuYm9yZGVyQ29sb3IgPSBhbGVydFJlZElucHV0O1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBwYXNzd29yZC5zZXRDdXN0b21WYWxpZGl0eShcIlwiKTtcclxuICAgICAgICBwYXNzd29yZC5zdHlsZS5ib3JkZXJDb2xvciA9IGRlZmF1bHRJbnB1dDtcclxuICAgIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hc3NldHMvanMvaW5zY3JpcHRpb24uanMiLCIvKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gIC8qIEF1dGhvciA6IFZpbmNlbnQgR2FycmVhdSAgLSB2aW5jZW50Z2FycmVhdS5jb21cclxuICAvKiBNSVQgbGljZW5zZTogaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcclxuICAvKiBEZW1vIC8gR2VuZXJhdG9yIDogdmluY2VudGdhcnJlYXUuY29tL3BhcnRpY2xlcy5qc1xyXG4gIC8qIEdpdEh1YiA6IGdpdGh1Yi5jb20vVmluY2VudEdhcnJlYXUvcGFydGljbGVzLmpzXHJcbiAgLyogSG93IHRvIHVzZT8gOiBDaGVjayB0aGUgR2l0SHViIFJFQURNRVxyXG4gIC8qIHYyLjAuMFxyXG4gIC8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcblxyXG52YXIgcEpTID0gZnVuY3Rpb24odGFnX2lkLCBwYXJhbXMpe1xyXG5cclxuICAgIHZhciBjYW52YXNfZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjJyt0YWdfaWQrJyA+IC5wYXJ0aWNsZXMtanMtY2FudmFzLWVsJyk7XHJcblxyXG4gICAgLyogcGFydGljbGVzLmpzIHZhcmlhYmxlcyB3aXRoIGRlZmF1bHQgdmFsdWVzICovXHJcbiAgICB0aGlzLnBKUyA9IHtcclxuICAgICAgICBjYW52YXM6IHtcclxuICAgICAgICAgICAgZWw6IGNhbnZhc19lbCxcclxuICAgICAgICAgICAgdzogY2FudmFzX2VsLm9mZnNldFdpZHRoLFxyXG4gICAgICAgICAgICBoOiBjYW52YXNfZWwub2Zmc2V0SGVpZ2h0XHJcbiAgICAgICAgfSxcclxuICAgICAgICBwYXJ0aWNsZXM6IHtcclxuICAgICAgICAgICAgbnVtYmVyOiB7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogNDAwLFxyXG4gICAgICAgICAgICAgICAgZGVuc2l0eToge1xyXG4gICAgICAgICAgICAgICAgICAgIGVuYWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZV9hcmVhOiA4MDBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgY29sb3I6IHtcclxuICAgICAgICAgICAgICAgIHZhbHVlOiAnI2ZmZidcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgc2hhcGU6IHtcclxuICAgICAgICAgICAgICAgIHR5cGU6ICdjaXJjbGUnLFxyXG4gICAgICAgICAgICAgICAgc3Ryb2tlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICcjZmYwMDAwJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHBvbHlnb246IHtcclxuICAgICAgICAgICAgICAgICAgICBuYl9zaWRlczogNVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGltYWdlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3JjOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwLFxyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIG9wYWNpdHk6IHtcclxuICAgICAgICAgICAgICAgIHZhbHVlOiAxLFxyXG4gICAgICAgICAgICAgICAgcmFuZG9tOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGFuaW06IHtcclxuICAgICAgICAgICAgICAgICAgICBlbmFibGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIHNwZWVkOiAyLFxyXG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHlfbWluOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgIHN5bmM6IGZhbHNlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHNpemU6IHtcclxuICAgICAgICAgICAgICAgIHZhbHVlOiAyMCxcclxuICAgICAgICAgICAgICAgIHJhbmRvbTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBhbmltOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZW5hYmxlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICBzcGVlZDogMjAsXHJcbiAgICAgICAgICAgICAgICAgICAgc2l6ZV9taW46IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgc3luYzogZmFsc2VcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgbGluZV9saW5rZWQ6IHtcclxuICAgICAgICAgICAgICAgIGVuYWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGRpc3RhbmNlOiAxMDAsXHJcbiAgICAgICAgICAgICAgICBjb2xvcjogJyNmZmYnLFxyXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMSxcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIG1vdmU6IHtcclxuICAgICAgICAgICAgICAgIGVuYWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIHNwZWVkOiAyLFxyXG4gICAgICAgICAgICAgICAgZGlyZWN0aW9uOiAnbm9uZScsXHJcbiAgICAgICAgICAgICAgICByYW5kb206IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgc3RyYWlnaHQ6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgb3V0X21vZGU6ICdvdXQnLFxyXG4gICAgICAgICAgICAgICAgYm91bmNlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGF0dHJhY3Q6IHtcclxuICAgICAgICAgICAgICAgICAgICBlbmFibGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIHJvdGF0ZVg6IDMwMDAsXHJcbiAgICAgICAgICAgICAgICAgICAgcm90YXRlWTogMzAwMFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBhcnJheTogW11cclxuICAgICAgICB9LFxyXG4gICAgICAgIGludGVyYWN0aXZpdHk6IHtcclxuICAgICAgICAgICAgZGV0ZWN0X29uOiAnY2FudmFzJyxcclxuICAgICAgICAgICAgZXZlbnRzOiB7XHJcbiAgICAgICAgICAgICAgICBvbmhvdmVyOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZW5hYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIG1vZGU6ICdncmFiJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIG9uY2xpY2s6IHtcclxuICAgICAgICAgICAgICAgICAgICBlbmFibGU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgbW9kZTogJ3B1c2gnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgcmVzaXplOiB0cnVlXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIG1vZGVzOiB7XHJcbiAgICAgICAgICAgICAgICBncmFiOntcclxuICAgICAgICAgICAgICAgICAgICBkaXN0YW5jZTogMTAwLFxyXG4gICAgICAgICAgICAgICAgICAgIGxpbmVfbGlua2VkOntcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBidWJibGU6e1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3RhbmNlOiAyMDAsXHJcbiAgICAgICAgICAgICAgICAgICAgc2l6ZTogODAsXHJcbiAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDAuNFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHJlcHVsc2U6e1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3RhbmNlOiAyMDAsXHJcbiAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDAuNFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHB1c2g6e1xyXG4gICAgICAgICAgICAgICAgICAgIHBhcnRpY2xlc19uYjogNFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHJlbW92ZTp7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFydGljbGVzX25iOiAyXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIG1vdXNlOnt9XHJcbiAgICAgICAgfSxcclxuICAgICAgICByZXRpbmFfZGV0ZWN0OiBmYWxzZSxcclxuICAgICAgICBmbjoge1xyXG4gICAgICAgICAgICBpbnRlcmFjdDoge30sXHJcbiAgICAgICAgICAgIG1vZGVzOiB7fSxcclxuICAgICAgICAgICAgdmVuZG9yczp7fVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdG1wOiB7fVxyXG4gICAgfTtcclxuXHJcbiAgICB2YXIgcEpTID0gdGhpcy5wSlM7XHJcblxyXG4gICAgLyogcGFyYW1zIHNldHRpbmdzICovXHJcbiAgICBpZihwYXJhbXMpe1xyXG4gICAgICAgIE9iamVjdC5kZWVwRXh0ZW5kKHBKUywgcGFyYW1zKTtcclxuICAgIH1cclxuXHJcbiAgICBwSlMudG1wLm9iaiA9IHtcclxuICAgICAgICBzaXplX3ZhbHVlOiBwSlMucGFydGljbGVzLnNpemUudmFsdWUsXHJcbiAgICAgICAgc2l6ZV9hbmltX3NwZWVkOiBwSlMucGFydGljbGVzLnNpemUuYW5pbS5zcGVlZCxcclxuICAgICAgICBtb3ZlX3NwZWVkOiBwSlMucGFydGljbGVzLm1vdmUuc3BlZWQsXHJcbiAgICAgICAgbGluZV9saW5rZWRfZGlzdGFuY2U6IHBKUy5wYXJ0aWNsZXMubGluZV9saW5rZWQuZGlzdGFuY2UsXHJcbiAgICAgICAgbGluZV9saW5rZWRfd2lkdGg6IHBKUy5wYXJ0aWNsZXMubGluZV9saW5rZWQud2lkdGgsXHJcbiAgICAgICAgbW9kZV9ncmFiX2Rpc3RhbmNlOiBwSlMuaW50ZXJhY3Rpdml0eS5tb2Rlcy5ncmFiLmRpc3RhbmNlLFxyXG4gICAgICAgIG1vZGVfYnViYmxlX2Rpc3RhbmNlOiBwSlMuaW50ZXJhY3Rpdml0eS5tb2Rlcy5idWJibGUuZGlzdGFuY2UsXHJcbiAgICAgICAgbW9kZV9idWJibGVfc2l6ZTogcEpTLmludGVyYWN0aXZpdHkubW9kZXMuYnViYmxlLnNpemUsXHJcbiAgICAgICAgbW9kZV9yZXB1bHNlX2Rpc3RhbmNlOiBwSlMuaW50ZXJhY3Rpdml0eS5tb2Rlcy5yZXB1bHNlLmRpc3RhbmNlXHJcbiAgICB9O1xyXG5cclxuXHJcbiAgICBwSlMuZm4ucmV0aW5hSW5pdCA9IGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgICAgIGlmKHBKUy5yZXRpbmFfZGV0ZWN0ICYmIHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvID4gMSl7XHJcbiAgICAgICAgICAgIHBKUy5jYW52YXMucHhyYXRpbyA9IHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvO1xyXG4gICAgICAgICAgICBwSlMudG1wLnJldGluYSA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIHBKUy5jYW52YXMucHhyYXRpbyA9IDE7XHJcbiAgICAgICAgICAgIHBKUy50bXAucmV0aW5hID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwSlMuY2FudmFzLncgPSBwSlMuY2FudmFzLmVsLm9mZnNldFdpZHRoICogcEpTLmNhbnZhcy5weHJhdGlvO1xyXG4gICAgICAgIHBKUy5jYW52YXMuaCA9IHBKUy5jYW52YXMuZWwub2Zmc2V0SGVpZ2h0ICogcEpTLmNhbnZhcy5weHJhdGlvO1xyXG5cclxuICAgICAgICBwSlMucGFydGljbGVzLnNpemUudmFsdWUgPSBwSlMudG1wLm9iai5zaXplX3ZhbHVlICogcEpTLmNhbnZhcy5weHJhdGlvO1xyXG4gICAgICAgIHBKUy5wYXJ0aWNsZXMuc2l6ZS5hbmltLnNwZWVkID0gcEpTLnRtcC5vYmouc2l6ZV9hbmltX3NwZWVkICogcEpTLmNhbnZhcy5weHJhdGlvO1xyXG4gICAgICAgIHBKUy5wYXJ0aWNsZXMubW92ZS5zcGVlZCA9IHBKUy50bXAub2JqLm1vdmVfc3BlZWQgKiBwSlMuY2FudmFzLnB4cmF0aW87XHJcbiAgICAgICAgcEpTLnBhcnRpY2xlcy5saW5lX2xpbmtlZC5kaXN0YW5jZSA9IHBKUy50bXAub2JqLmxpbmVfbGlua2VkX2Rpc3RhbmNlICogcEpTLmNhbnZhcy5weHJhdGlvO1xyXG4gICAgICAgIHBKUy5pbnRlcmFjdGl2aXR5Lm1vZGVzLmdyYWIuZGlzdGFuY2UgPSBwSlMudG1wLm9iai5tb2RlX2dyYWJfZGlzdGFuY2UgKiBwSlMuY2FudmFzLnB4cmF0aW87XHJcbiAgICAgICAgcEpTLmludGVyYWN0aXZpdHkubW9kZXMuYnViYmxlLmRpc3RhbmNlID0gcEpTLnRtcC5vYmoubW9kZV9idWJibGVfZGlzdGFuY2UgKiBwSlMuY2FudmFzLnB4cmF0aW87XHJcbiAgICAgICAgcEpTLnBhcnRpY2xlcy5saW5lX2xpbmtlZC53aWR0aCA9IHBKUy50bXAub2JqLmxpbmVfbGlua2VkX3dpZHRoICogcEpTLmNhbnZhcy5weHJhdGlvO1xyXG4gICAgICAgIHBKUy5pbnRlcmFjdGl2aXR5Lm1vZGVzLmJ1YmJsZS5zaXplID0gcEpTLnRtcC5vYmoubW9kZV9idWJibGVfc2l6ZSAqIHBKUy5jYW52YXMucHhyYXRpbztcclxuICAgICAgICBwSlMuaW50ZXJhY3Rpdml0eS5tb2Rlcy5yZXB1bHNlLmRpc3RhbmNlID0gcEpTLnRtcC5vYmoubW9kZV9yZXB1bHNlX2Rpc3RhbmNlICogcEpTLmNhbnZhcy5weHJhdGlvO1xyXG5cclxuICAgIH07XHJcblxyXG5cclxuXHJcbiAgICAvKiAtLS0tLS0tLS0tIHBKUyBmdW5jdGlvbnMgLSBjYW52YXMgLS0tLS0tLS0tLS0tICovXHJcblxyXG4gICAgcEpTLmZuLmNhbnZhc0luaXQgPSBmdW5jdGlvbigpe1xyXG4gICAgICAgIHBKUy5jYW52YXMuY3R4ID0gcEpTLmNhbnZhcy5lbC5nZXRDb250ZXh0KCcyZCcpO1xyXG4gICAgfTtcclxuXHJcbiAgICBwSlMuZm4uY2FudmFzU2l6ZSA9IGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgICAgIHBKUy5jYW52YXMuZWwud2lkdGggPSBwSlMuY2FudmFzLnc7XHJcbiAgICAgICAgcEpTLmNhbnZhcy5lbC5oZWlnaHQgPSBwSlMuY2FudmFzLmg7XHJcblxyXG4gICAgICAgIGlmKHBKUyAmJiBwSlMuaW50ZXJhY3Rpdml0eS5ldmVudHMucmVzaXplKXtcclxuXHJcbiAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBmdW5jdGlvbigpe1xyXG5cclxuICAgICAgICAgICAgICAgIHBKUy5jYW52YXMudyA9IHBKUy5jYW52YXMuZWwub2Zmc2V0V2lkdGg7XHJcbiAgICAgICAgICAgICAgICBwSlMuY2FudmFzLmggPSBwSlMuY2FudmFzLmVsLm9mZnNldEhlaWdodDtcclxuXHJcbiAgICAgICAgICAgICAgICAvKiByZXNpemUgY2FudmFzICovXHJcbiAgICAgICAgICAgICAgICBpZihwSlMudG1wLnJldGluYSl7XHJcbiAgICAgICAgICAgICAgICAgICAgcEpTLmNhbnZhcy53ICo9IHBKUy5jYW52YXMucHhyYXRpbztcclxuICAgICAgICAgICAgICAgICAgICBwSlMuY2FudmFzLmggKj0gcEpTLmNhbnZhcy5weHJhdGlvO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHBKUy5jYW52YXMuZWwud2lkdGggPSBwSlMuY2FudmFzLnc7XHJcbiAgICAgICAgICAgICAgICBwSlMuY2FudmFzLmVsLmhlaWdodCA9IHBKUy5jYW52YXMuaDtcclxuXHJcbiAgICAgICAgICAgICAgICAvKiByZXBhaW50IGNhbnZhcyBvbiBhbmltIGRpc2FibGVkICovXHJcbiAgICAgICAgICAgICAgICBpZighcEpTLnBhcnRpY2xlcy5tb3ZlLmVuYWJsZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgcEpTLmZuLnBhcnRpY2xlc0VtcHR5KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcEpTLmZuLnBhcnRpY2xlc0NyZWF0ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHBKUy5mbi5wYXJ0aWNsZXNEcmF3KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcEpTLmZuLnZlbmRvcnMuZGVuc2l0eUF1dG9QYXJ0aWNsZXMoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAvKiBkZW5zaXR5IHBhcnRpY2xlcyBlbmFibGVkICovXHJcbiAgICAgICAgICAgICAgICBwSlMuZm4udmVuZG9ycy5kZW5zaXR5QXV0b1BhcnRpY2xlcygpO1xyXG5cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9O1xyXG5cclxuXHJcbiAgICBwSlMuZm4uY2FudmFzUGFpbnQgPSBmdW5jdGlvbigpe1xyXG4gICAgICAgIHBKUy5jYW52YXMuY3R4LmZpbGxSZWN0KDAsIDAsIHBKUy5jYW52YXMudywgcEpTLmNhbnZhcy5oKTtcclxuICAgIH07XHJcblxyXG4gICAgcEpTLmZuLmNhbnZhc0NsZWFyID0gZnVuY3Rpb24oKXtcclxuICAgICAgICBwSlMuY2FudmFzLmN0eC5jbGVhclJlY3QoMCwgMCwgcEpTLmNhbnZhcy53LCBwSlMuY2FudmFzLmgpO1xyXG4gICAgfTtcclxuXHJcblxyXG4gICAgLyogLS0tLS0tLS0tIHBKUyBmdW5jdGlvbnMgLSBwYXJ0aWNsZXMgLS0tLS0tLS0tLS0gKi9cclxuXHJcbiAgICBwSlMuZm4ucGFydGljbGUgPSBmdW5jdGlvbihjb2xvciwgb3BhY2l0eSwgcG9zaXRpb24pe1xyXG5cclxuICAgICAgICAvKiBzaXplICovXHJcbiAgICAgICAgdGhpcy5yYWRpdXMgPSAocEpTLnBhcnRpY2xlcy5zaXplLnJhbmRvbSA/IE1hdGgucmFuZG9tKCkgOiAxKSAqIHBKUy5wYXJ0aWNsZXMuc2l6ZS52YWx1ZTtcclxuICAgICAgICBpZihwSlMucGFydGljbGVzLnNpemUuYW5pbS5lbmFibGUpe1xyXG4gICAgICAgICAgICB0aGlzLnNpemVfc3RhdHVzID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMudnMgPSBwSlMucGFydGljbGVzLnNpemUuYW5pbS5zcGVlZCAvIDEwMDtcclxuICAgICAgICAgICAgaWYoIXBKUy5wYXJ0aWNsZXMuc2l6ZS5hbmltLnN5bmMpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy52cyA9IHRoaXMudnMgKiBNYXRoLnJhbmRvbSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKiBwb3NpdGlvbiAqL1xyXG4gICAgICAgIHRoaXMueCA9IHBvc2l0aW9uID8gcG9zaXRpb24ueCA6IE1hdGgucmFuZG9tKCkgKiBwSlMuY2FudmFzLnc7XHJcbiAgICAgICAgdGhpcy55ID0gcG9zaXRpb24gPyBwb3NpdGlvbi55IDogTWF0aC5yYW5kb20oKSAqIHBKUy5jYW52YXMuaDtcclxuXHJcbiAgICAgICAgLyogY2hlY2sgcG9zaXRpb24gIC0gaW50byB0aGUgY2FudmFzICovXHJcbiAgICAgICAgaWYodGhpcy54ID4gcEpTLmNhbnZhcy53IC0gdGhpcy5yYWRpdXMqMikgdGhpcy54ID0gdGhpcy54IC0gdGhpcy5yYWRpdXM7XHJcbiAgICAgICAgZWxzZSBpZih0aGlzLnggPCB0aGlzLnJhZGl1cyoyKSB0aGlzLnggPSB0aGlzLnggKyB0aGlzLnJhZGl1cztcclxuICAgICAgICBpZih0aGlzLnkgPiBwSlMuY2FudmFzLmggLSB0aGlzLnJhZGl1cyoyKSB0aGlzLnkgPSB0aGlzLnkgLSB0aGlzLnJhZGl1cztcclxuICAgICAgICBlbHNlIGlmKHRoaXMueSA8IHRoaXMucmFkaXVzKjIpIHRoaXMueSA9IHRoaXMueSArIHRoaXMucmFkaXVzO1xyXG5cclxuICAgICAgICAvKiBjaGVjayBwb3NpdGlvbiAtIGF2b2lkIG92ZXJsYXAgKi9cclxuICAgICAgICBpZihwSlMucGFydGljbGVzLm1vdmUuYm91bmNlKXtcclxuICAgICAgICAgICAgcEpTLmZuLnZlbmRvcnMuY2hlY2tPdmVybGFwKHRoaXMsIHBvc2l0aW9uKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qIGNvbG9yICovXHJcbiAgICAgICAgdGhpcy5jb2xvciA9IHt9O1xyXG4gICAgICAgIGlmKHR5cGVvZihjb2xvci52YWx1ZSkgPT0gJ29iamVjdCcpe1xyXG5cclxuICAgICAgICAgICAgaWYoY29sb3IudmFsdWUgaW5zdGFuY2VvZiBBcnJheSl7XHJcbiAgICAgICAgICAgICAgICB2YXIgY29sb3Jfc2VsZWN0ZWQgPSBjb2xvci52YWx1ZVtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBwSlMucGFydGljbGVzLmNvbG9yLnZhbHVlLmxlbmd0aCldO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb2xvci5yZ2IgPSBoZXhUb1JnYihjb2xvcl9zZWxlY3RlZCk7XHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgaWYoY29sb3IudmFsdWUuciAhPSB1bmRlZmluZWQgJiYgY29sb3IudmFsdWUuZyAhPSB1bmRlZmluZWQgJiYgY29sb3IudmFsdWUuYiAhPSB1bmRlZmluZWQpe1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29sb3IucmdiID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByOiBjb2xvci52YWx1ZS5yLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBnOiBjb2xvci52YWx1ZS5nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBiOiBjb2xvci52YWx1ZS5iXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYoY29sb3IudmFsdWUuaCAhPSB1bmRlZmluZWQgJiYgY29sb3IudmFsdWUucyAhPSB1bmRlZmluZWQgJiYgY29sb3IudmFsdWUubCAhPSB1bmRlZmluZWQpe1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29sb3IuaHNsID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoOiBjb2xvci52YWx1ZS5oLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzOiBjb2xvci52YWx1ZS5zLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsOiBjb2xvci52YWx1ZS5sXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmKGNvbG9yLnZhbHVlID09ICdyYW5kb20nKXtcclxuICAgICAgICAgICAgdGhpcy5jb2xvci5yZ2IgPSB7XHJcbiAgICAgICAgICAgICAgICByOiAoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKDI1NSAtIDAgKyAxKSkgKyAwKSxcclxuICAgICAgICAgICAgICAgIGc6IChNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoMjU1IC0gMCArIDEpKSArIDApLFxyXG4gICAgICAgICAgICAgICAgYjogKE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqICgyNTUgLSAwICsgMSkpICsgMClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmKHR5cGVvZihjb2xvci52YWx1ZSkgPT0gJ3N0cmluZycpe1xyXG4gICAgICAgICAgICB0aGlzLmNvbG9yID0gY29sb3I7XHJcbiAgICAgICAgICAgIHRoaXMuY29sb3IucmdiID0gaGV4VG9SZ2IodGhpcy5jb2xvci52YWx1ZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKiBvcGFjaXR5ICovXHJcbiAgICAgICAgdGhpcy5vcGFjaXR5ID0gKHBKUy5wYXJ0aWNsZXMub3BhY2l0eS5yYW5kb20gPyBNYXRoLnJhbmRvbSgpIDogMSkgKiBwSlMucGFydGljbGVzLm9wYWNpdHkudmFsdWU7XHJcbiAgICAgICAgaWYocEpTLnBhcnRpY2xlcy5vcGFjaXR5LmFuaW0uZW5hYmxlKXtcclxuICAgICAgICAgICAgdGhpcy5vcGFjaXR5X3N0YXR1cyA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLnZvID0gcEpTLnBhcnRpY2xlcy5vcGFjaXR5LmFuaW0uc3BlZWQgLyAxMDA7XHJcbiAgICAgICAgICAgIGlmKCFwSlMucGFydGljbGVzLm9wYWNpdHkuYW5pbS5zeW5jKXtcclxuICAgICAgICAgICAgICAgIHRoaXMudm8gPSB0aGlzLnZvICogTWF0aC5yYW5kb20oKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyogYW5pbWF0aW9uIC0gdmVsb2NpdHkgZm9yIHNwZWVkICovXHJcbiAgICAgICAgdmFyIHZlbGJhc2UgPSB7fVxyXG4gICAgICAgIHN3aXRjaChwSlMucGFydGljbGVzLm1vdmUuZGlyZWN0aW9uKXtcclxuICAgICAgICAgICAgY2FzZSAndG9wJzpcclxuICAgICAgICAgICAgICAgIHZlbGJhc2UgPSB7IHg6MCwgeTotMSB9O1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ3RvcC1yaWdodCc6XHJcbiAgICAgICAgICAgICAgICB2ZWxiYXNlID0geyB4OjAuNSwgeTotMC41IH07XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAncmlnaHQnOlxyXG4gICAgICAgICAgICAgICAgdmVsYmFzZSA9IHsgeDoxLCB5Oi0wIH07XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnYm90dG9tLXJpZ2h0JzpcclxuICAgICAgICAgICAgICAgIHZlbGJhc2UgPSB7IHg6MC41LCB5OjAuNSB9O1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ2JvdHRvbSc6XHJcbiAgICAgICAgICAgICAgICB2ZWxiYXNlID0geyB4OjAsIHk6MSB9O1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ2JvdHRvbS1sZWZ0JzpcclxuICAgICAgICAgICAgICAgIHZlbGJhc2UgPSB7IHg6LTAuNSwgeToxIH07XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnbGVmdCc6XHJcbiAgICAgICAgICAgICAgICB2ZWxiYXNlID0geyB4Oi0xLCB5OjAgfTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICd0b3AtbGVmdCc6XHJcbiAgICAgICAgICAgICAgICB2ZWxiYXNlID0geyB4Oi0wLjUsIHk6LTAuNSB9O1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICB2ZWxiYXNlID0geyB4OjAsIHk6MCB9O1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZihwSlMucGFydGljbGVzLm1vdmUuc3RyYWlnaHQpe1xyXG4gICAgICAgICAgICB0aGlzLnZ4ID0gdmVsYmFzZS54O1xyXG4gICAgICAgICAgICB0aGlzLnZ5ID0gdmVsYmFzZS55O1xyXG4gICAgICAgICAgICBpZihwSlMucGFydGljbGVzLm1vdmUucmFuZG9tKXtcclxuICAgICAgICAgICAgICAgIHRoaXMudnggPSB0aGlzLnZ4ICogKE1hdGgucmFuZG9tKCkpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy52eSA9IHRoaXMudnkgKiAoTWF0aC5yYW5kb20oKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgdGhpcy52eCA9IHZlbGJhc2UueCArIE1hdGgucmFuZG9tKCktMC41O1xyXG4gICAgICAgICAgICB0aGlzLnZ5ID0gdmVsYmFzZS55ICsgTWF0aC5yYW5kb20oKS0wLjU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyB2YXIgdGhldGEgPSAyLjAgKiBNYXRoLlBJICogTWF0aC5yYW5kb20oKTtcclxuICAgICAgICAvLyB0aGlzLnZ4ID0gTWF0aC5jb3ModGhldGEpO1xyXG4gICAgICAgIC8vIHRoaXMudnkgPSBNYXRoLnNpbih0aGV0YSk7XHJcblxyXG4gICAgICAgIHRoaXMudnhfaSA9IHRoaXMudng7XHJcbiAgICAgICAgdGhpcy52eV9pID0gdGhpcy52eTtcclxuXHJcblxyXG5cclxuICAgICAgICAvKiBpZiBzaGFwZSBpcyBpbWFnZSAqL1xyXG5cclxuICAgICAgICB2YXIgc2hhcGVfdHlwZSA9IHBKUy5wYXJ0aWNsZXMuc2hhcGUudHlwZTtcclxuICAgICAgICBpZih0eXBlb2Yoc2hhcGVfdHlwZSkgPT0gJ29iamVjdCcpe1xyXG4gICAgICAgICAgICBpZihzaGFwZV90eXBlIGluc3RhbmNlb2YgQXJyYXkpe1xyXG4gICAgICAgICAgICAgICAgdmFyIHNoYXBlX3NlbGVjdGVkID0gc2hhcGVfdHlwZVtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBzaGFwZV90eXBlLmxlbmd0aCldO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zaGFwZSA9IHNoYXBlX3NlbGVjdGVkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHRoaXMuc2hhcGUgPSBzaGFwZV90eXBlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYodGhpcy5zaGFwZSA9PSAnaW1hZ2UnKXtcclxuICAgICAgICAgICAgdmFyIHNoID0gcEpTLnBhcnRpY2xlcy5zaGFwZTtcclxuICAgICAgICAgICAgdGhpcy5pbWcgPSB7XHJcbiAgICAgICAgICAgICAgICBzcmM6IHNoLmltYWdlLnNyYyxcclxuICAgICAgICAgICAgICAgIHJhdGlvOiBzaC5pbWFnZS53aWR0aCAvIHNoLmltYWdlLmhlaWdodFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKCF0aGlzLmltZy5yYXRpbykgdGhpcy5pbWcucmF0aW8gPSAxO1xyXG4gICAgICAgICAgICBpZihwSlMudG1wLmltZ190eXBlID09ICdzdmcnICYmIHBKUy50bXAuc291cmNlX3N2ZyAhPSB1bmRlZmluZWQpe1xyXG4gICAgICAgICAgICAgICAgcEpTLmZuLnZlbmRvcnMuY3JlYXRlU3ZnSW1nKHRoaXMpO1xyXG4gICAgICAgICAgICAgICAgaWYocEpTLnRtcC5wdXNoaW5nKXtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmltZy5sb2FkZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcblxyXG5cclxuICAgIH07XHJcblxyXG5cclxuICAgIHBKUy5mbi5wYXJ0aWNsZS5wcm90b3R5cGUuZHJhdyA9IGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICB2YXIgcCA9IHRoaXM7XHJcblxyXG4gICAgICAgIGlmKHAucmFkaXVzX2J1YmJsZSAhPSB1bmRlZmluZWQpe1xyXG4gICAgICAgICAgICB2YXIgcmFkaXVzID0gcC5yYWRpdXNfYnViYmxlO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICB2YXIgcmFkaXVzID0gcC5yYWRpdXM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZihwLm9wYWNpdHlfYnViYmxlICE9IHVuZGVmaW5lZCl7XHJcbiAgICAgICAgICAgIHZhciBvcGFjaXR5ID0gcC5vcGFjaXR5X2J1YmJsZTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgdmFyIG9wYWNpdHkgPSBwLm9wYWNpdHk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZihwLmNvbG9yLnJnYil7XHJcbiAgICAgICAgICAgIHZhciBjb2xvcl92YWx1ZSA9ICdyZ2JhKCcrcC5jb2xvci5yZ2IucisnLCcrcC5jb2xvci5yZ2IuZysnLCcrcC5jb2xvci5yZ2IuYisnLCcrb3BhY2l0eSsnKSc7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHZhciBjb2xvcl92YWx1ZSA9ICdoc2xhKCcrcC5jb2xvci5oc2wuaCsnLCcrcC5jb2xvci5oc2wucysnJSwnK3AuY29sb3IuaHNsLmwrJyUsJytvcGFjaXR5KycpJztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHBKUy5jYW52YXMuY3R4LmZpbGxTdHlsZSA9IGNvbG9yX3ZhbHVlO1xyXG4gICAgICAgIHBKUy5jYW52YXMuY3R4LmJlZ2luUGF0aCgpO1xyXG5cclxuICAgICAgICBzd2l0Y2gocC5zaGFwZSl7XHJcblxyXG4gICAgICAgICAgICBjYXNlICdjaXJjbGUnOlxyXG4gICAgICAgICAgICAgICAgcEpTLmNhbnZhcy5jdHguYXJjKHAueCwgcC55LCByYWRpdXMsIDAsIE1hdGguUEkgKiAyLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgJ2VkZ2UnOlxyXG4gICAgICAgICAgICAgICAgcEpTLmNhbnZhcy5jdHgucmVjdChwLngtcmFkaXVzLCBwLnktcmFkaXVzLCByYWRpdXMqMiwgcmFkaXVzKjIpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlICd0cmlhbmdsZSc6XHJcbiAgICAgICAgICAgICAgICBwSlMuZm4udmVuZG9ycy5kcmF3U2hhcGUocEpTLmNhbnZhcy5jdHgsIHAueC1yYWRpdXMsIHAueStyYWRpdXMgLyAxLjY2LCByYWRpdXMqMiwgMywgMik7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgJ3BvbHlnb24nOlxyXG4gICAgICAgICAgICAgICAgcEpTLmZuLnZlbmRvcnMuZHJhd1NoYXBlKFxyXG4gICAgICAgICAgICAgICAgICAgIHBKUy5jYW52YXMuY3R4LFxyXG4gICAgICAgICAgICAgICAgICAgIHAueCAtIHJhZGl1cyAvIChwSlMucGFydGljbGVzLnNoYXBlLnBvbHlnb24ubmJfc2lkZXMvMy41KSwgLy8gc3RhcnRYXHJcbiAgICAgICAgICAgICAgICAgICAgcC55IC0gcmFkaXVzIC8gKDIuNjYvMy41KSwgLy8gc3RhcnRZXHJcbiAgICAgICAgICAgICAgICAgICAgcmFkaXVzKjIuNjYgLyAocEpTLnBhcnRpY2xlcy5zaGFwZS5wb2x5Z29uLm5iX3NpZGVzLzMpLCAvLyBzaWRlTGVuZ3RoXHJcbiAgICAgICAgICAgICAgICAgICAgcEpTLnBhcnRpY2xlcy5zaGFwZS5wb2x5Z29uLm5iX3NpZGVzLCAvLyBzaWRlQ291bnROdW1lcmF0b3JcclxuICAgICAgICAgICAgICAgICAgICAxIC8vIHNpZGVDb3VudERlbm9taW5hdG9yXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlICdzdGFyJzpcclxuICAgICAgICAgICAgICAgIHBKUy5mbi52ZW5kb3JzLmRyYXdTaGFwZShcclxuICAgICAgICAgICAgICAgICAgICBwSlMuY2FudmFzLmN0eCxcclxuICAgICAgICAgICAgICAgICAgICBwLnggLSByYWRpdXMqMiAvIChwSlMucGFydGljbGVzLnNoYXBlLnBvbHlnb24ubmJfc2lkZXMvNCksIC8vIHN0YXJ0WFxyXG4gICAgICAgICAgICAgICAgICAgIHAueSAtIHJhZGl1cyAvICgyKjIuNjYvMy41KSwgLy8gc3RhcnRZXHJcbiAgICAgICAgICAgICAgICAgICAgcmFkaXVzKjIqMi42NiAvIChwSlMucGFydGljbGVzLnNoYXBlLnBvbHlnb24ubmJfc2lkZXMvMyksIC8vIHNpZGVMZW5ndGhcclxuICAgICAgICAgICAgICAgICAgICBwSlMucGFydGljbGVzLnNoYXBlLnBvbHlnb24ubmJfc2lkZXMsIC8vIHNpZGVDb3VudE51bWVyYXRvclxyXG4gICAgICAgICAgICAgICAgICAgIDIgLy8gc2lkZUNvdW50RGVub21pbmF0b3JcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgJ2ltYWdlJzpcclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIGRyYXcoKXtcclxuICAgICAgICAgICAgICAgIHBKUy5jYW52YXMuY3R4LmRyYXdJbWFnZShcclxuICAgICAgICAgICAgICAgICAgICBpbWdfb2JqLFxyXG4gICAgICAgICAgICAgICAgICAgIHAueC1yYWRpdXMsXHJcbiAgICAgICAgICAgICAgICAgICAgcC55LXJhZGl1cyxcclxuICAgICAgICAgICAgICAgICAgICByYWRpdXMqMixcclxuICAgICAgICAgICAgICAgICAgICByYWRpdXMqMiAvIHAuaW1nLnJhdGlvXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYocEpTLnRtcC5pbWdfdHlwZSA9PSAnc3ZnJyl7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGltZ19vYmogPSBwLmltZy5vYmo7XHJcbiAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgaW1nX29iaiA9IHBKUy50bXAuaW1nX29iajtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZihpbWdfb2JqKXtcclxuICAgICAgICAgICAgICAgICAgICBkcmF3KCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcEpTLmNhbnZhcy5jdHguY2xvc2VQYXRoKCk7XHJcblxyXG4gICAgICAgIGlmKHBKUy5wYXJ0aWNsZXMuc2hhcGUuc3Ryb2tlLndpZHRoID4gMCl7XHJcbiAgICAgICAgICAgIHBKUy5jYW52YXMuY3R4LnN0cm9rZVN0eWxlID0gcEpTLnBhcnRpY2xlcy5zaGFwZS5zdHJva2UuY29sb3I7XHJcbiAgICAgICAgICAgIHBKUy5jYW52YXMuY3R4LmxpbmVXaWR0aCA9IHBKUy5wYXJ0aWNsZXMuc2hhcGUuc3Ryb2tlLndpZHRoO1xyXG4gICAgICAgICAgICBwSlMuY2FudmFzLmN0eC5zdHJva2UoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHBKUy5jYW52YXMuY3R4LmZpbGwoKTtcclxuXHJcbiAgICB9O1xyXG5cclxuXHJcbiAgICBwSlMuZm4ucGFydGljbGVzQ3JlYXRlID0gZnVuY3Rpb24oKXtcclxuICAgICAgICBmb3IodmFyIGkgPSAwOyBpIDwgcEpTLnBhcnRpY2xlcy5udW1iZXIudmFsdWU7IGkrKykge1xyXG4gICAgICAgICAgICBwSlMucGFydGljbGVzLmFycmF5LnB1c2gobmV3IHBKUy5mbi5wYXJ0aWNsZShwSlMucGFydGljbGVzLmNvbG9yLCBwSlMucGFydGljbGVzLm9wYWNpdHkudmFsdWUpKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHBKUy5mbi5wYXJ0aWNsZXNVcGRhdGUgPSBmdW5jdGlvbigpe1xyXG5cclxuICAgICAgICBmb3IodmFyIGkgPSAwOyBpIDwgcEpTLnBhcnRpY2xlcy5hcnJheS5sZW5ndGg7IGkrKyl7XHJcblxyXG4gICAgICAgICAgICAvKiB0aGUgcGFydGljbGUgKi9cclxuICAgICAgICAgICAgdmFyIHAgPSBwSlMucGFydGljbGVzLmFycmF5W2ldO1xyXG5cclxuICAgICAgICAgICAgLy8gdmFyIGQgPSAoIGR4ID0gcEpTLmludGVyYWN0aXZpdHkubW91c2UuY2xpY2tfcG9zX3ggLSBwLnggKSAqIGR4ICsgKCBkeSA9IHBKUy5pbnRlcmFjdGl2aXR5Lm1vdXNlLmNsaWNrX3Bvc195IC0gcC55ICkgKiBkeTtcclxuICAgICAgICAgICAgLy8gdmFyIGYgPSAtQkFOR19TSVpFIC8gZDtcclxuICAgICAgICAgICAgLy8gaWYgKCBkIDwgQkFOR19TSVpFICkge1xyXG4gICAgICAgICAgICAvLyAgICAgdmFyIHQgPSBNYXRoLmF0YW4yKCBkeSwgZHggKTtcclxuICAgICAgICAgICAgLy8gICAgIHAudnggPSBmICogTWF0aC5jb3ModCk7XHJcbiAgICAgICAgICAgIC8vICAgICBwLnZ5ID0gZiAqIE1hdGguc2luKHQpO1xyXG4gICAgICAgICAgICAvLyB9XHJcblxyXG4gICAgICAgICAgICAvKiBtb3ZlIHRoZSBwYXJ0aWNsZSAqL1xyXG4gICAgICAgICAgICBpZihwSlMucGFydGljbGVzLm1vdmUuZW5hYmxlKXtcclxuICAgICAgICAgICAgICAgIHZhciBtcyA9IHBKUy5wYXJ0aWNsZXMubW92ZS5zcGVlZC8yO1xyXG4gICAgICAgICAgICAgICAgcC54ICs9IHAudnggKiBtcztcclxuICAgICAgICAgICAgICAgIHAueSArPSBwLnZ5ICogbXM7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8qIGNoYW5nZSBvcGFjaXR5IHN0YXR1cyAqL1xyXG4gICAgICAgICAgICBpZihwSlMucGFydGljbGVzLm9wYWNpdHkuYW5pbS5lbmFibGUpIHtcclxuICAgICAgICAgICAgICAgIGlmKHAub3BhY2l0eV9zdGF0dXMgPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKHAub3BhY2l0eSA+PSBwSlMucGFydGljbGVzLm9wYWNpdHkudmFsdWUpIHAub3BhY2l0eV9zdGF0dXMgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICBwLm9wYWNpdHkgKz0gcC52bztcclxuICAgICAgICAgICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBpZihwLm9wYWNpdHkgPD0gcEpTLnBhcnRpY2xlcy5vcGFjaXR5LmFuaW0ub3BhY2l0eV9taW4pIHAub3BhY2l0eV9zdGF0dXMgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIHAub3BhY2l0eSAtPSBwLnZvO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYocC5vcGFjaXR5IDwgMCkgcC5vcGFjaXR5ID0gMDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLyogY2hhbmdlIHNpemUgKi9cclxuICAgICAgICAgICAgaWYocEpTLnBhcnRpY2xlcy5zaXplLmFuaW0uZW5hYmxlKXtcclxuICAgICAgICAgICAgICAgIGlmKHAuc2l6ZV9zdGF0dXMgPT0gdHJ1ZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYocC5yYWRpdXMgPj0gcEpTLnBhcnRpY2xlcy5zaXplLnZhbHVlKSBwLnNpemVfc3RhdHVzID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgcC5yYWRpdXMgKz0gcC52cztcclxuICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKHAucmFkaXVzIDw9IHBKUy5wYXJ0aWNsZXMuc2l6ZS5hbmltLnNpemVfbWluKSBwLnNpemVfc3RhdHVzID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICBwLnJhZGl1cyAtPSBwLnZzO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYocC5yYWRpdXMgPCAwKSBwLnJhZGl1cyA9IDA7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8qIGNoYW5nZSBwYXJ0aWNsZSBwb3NpdGlvbiBpZiBpdCBpcyBvdXQgb2YgY2FudmFzICovXHJcbiAgICAgICAgICAgIGlmKHBKUy5wYXJ0aWNsZXMubW92ZS5vdXRfbW9kZSA9PSAnYm91bmNlJyl7XHJcbiAgICAgICAgICAgICAgICB2YXIgbmV3X3BvcyA9IHtcclxuICAgICAgICAgICAgICAgICAgICB4X2xlZnQ6IHAucmFkaXVzLFxyXG4gICAgICAgICAgICAgICAgICAgIHhfcmlnaHQ6ICBwSlMuY2FudmFzLncsXHJcbiAgICAgICAgICAgICAgICAgICAgeV90b3A6IHAucmFkaXVzLFxyXG4gICAgICAgICAgICAgICAgICAgIHlfYm90dG9tOiBwSlMuY2FudmFzLmhcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICB2YXIgbmV3X3BvcyA9IHtcclxuICAgICAgICAgICAgICAgICAgICB4X2xlZnQ6IC1wLnJhZGl1cyxcclxuICAgICAgICAgICAgICAgICAgICB4X3JpZ2h0OiBwSlMuY2FudmFzLncgKyBwLnJhZGl1cyxcclxuICAgICAgICAgICAgICAgICAgICB5X3RvcDogLXAucmFkaXVzLFxyXG4gICAgICAgICAgICAgICAgICAgIHlfYm90dG9tOiBwSlMuY2FudmFzLmggKyBwLnJhZGl1c1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZihwLnggLSBwLnJhZGl1cyA+IHBKUy5jYW52YXMudyl7XHJcbiAgICAgICAgICAgICAgICBwLnggPSBuZXdfcG9zLnhfbGVmdDtcclxuICAgICAgICAgICAgICAgIHAueSA9IE1hdGgucmFuZG9tKCkgKiBwSlMuY2FudmFzLmg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZihwLnggKyBwLnJhZGl1cyA8IDApe1xyXG4gICAgICAgICAgICAgICAgcC54ID0gbmV3X3Bvcy54X3JpZ2h0O1xyXG4gICAgICAgICAgICAgICAgcC55ID0gTWF0aC5yYW5kb20oKSAqIHBKUy5jYW52YXMuaDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZihwLnkgLSBwLnJhZGl1cyA+IHBKUy5jYW52YXMuaCl7XHJcbiAgICAgICAgICAgICAgICBwLnkgPSBuZXdfcG9zLnlfdG9wO1xyXG4gICAgICAgICAgICAgICAgcC54ID0gTWF0aC5yYW5kb20oKSAqIHBKUy5jYW52YXMudztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmKHAueSArIHAucmFkaXVzIDwgMCl7XHJcbiAgICAgICAgICAgICAgICBwLnkgPSBuZXdfcG9zLnlfYm90dG9tO1xyXG4gICAgICAgICAgICAgICAgcC54ID0gTWF0aC5yYW5kb20oKSAqIHBKUy5jYW52YXMudztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLyogb3V0IG9mIGNhbnZhcyBtb2RlcyAqL1xyXG4gICAgICAgICAgICBzd2l0Y2gocEpTLnBhcnRpY2xlcy5tb3ZlLm91dF9tb2RlKXtcclxuICAgICAgICAgICAgICAgIGNhc2UgJ2JvdW5jZSc6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHAueCArIHAucmFkaXVzID4gcEpTLmNhbnZhcy53KSBwLnZ4ID0gLXAudng7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAocC54IC0gcC5yYWRpdXMgPCAwKSBwLnZ4ID0gLXAudng7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHAueSArIHAucmFkaXVzID4gcEpTLmNhbnZhcy5oKSBwLnZ5ID0gLXAudnk7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAocC55IC0gcC5yYWRpdXMgPCAwKSBwLnZ5ID0gLXAudnk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8qIGV2ZW50cyAqL1xyXG4gICAgICAgICAgICBpZihpc0luQXJyYXkoJ2dyYWInLCBwSlMuaW50ZXJhY3Rpdml0eS5ldmVudHMub25ob3Zlci5tb2RlKSl7XHJcbiAgICAgICAgICAgICAgICBwSlMuZm4ubW9kZXMuZ3JhYlBhcnRpY2xlKHApO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZihpc0luQXJyYXkoJ2J1YmJsZScsIHBKUy5pbnRlcmFjdGl2aXR5LmV2ZW50cy5vbmhvdmVyLm1vZGUpIHx8IGlzSW5BcnJheSgnYnViYmxlJywgcEpTLmludGVyYWN0aXZpdHkuZXZlbnRzLm9uY2xpY2subW9kZSkpe1xyXG4gICAgICAgICAgICAgICAgcEpTLmZuLm1vZGVzLmJ1YmJsZVBhcnRpY2xlKHApO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZihpc0luQXJyYXkoJ3JlcHVsc2UnLCBwSlMuaW50ZXJhY3Rpdml0eS5ldmVudHMub25ob3Zlci5tb2RlKSB8fCBpc0luQXJyYXkoJ3JlcHVsc2UnLCBwSlMuaW50ZXJhY3Rpdml0eS5ldmVudHMub25jbGljay5tb2RlKSl7XHJcbiAgICAgICAgICAgICAgICBwSlMuZm4ubW9kZXMucmVwdWxzZVBhcnRpY2xlKHApO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvKiBpbnRlcmFjdGlvbiBhdXRvIGJldHdlZW4gcGFydGljbGVzICovXHJcbiAgICAgICAgICAgIGlmKHBKUy5wYXJ0aWNsZXMubGluZV9saW5rZWQuZW5hYmxlIHx8IHBKUy5wYXJ0aWNsZXMubW92ZS5hdHRyYWN0LmVuYWJsZSl7XHJcbiAgICAgICAgICAgICAgICBmb3IodmFyIGogPSBpICsgMTsgaiA8IHBKUy5wYXJ0aWNsZXMuYXJyYXkubGVuZ3RoOyBqKyspe1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBwMiA9IHBKUy5wYXJ0aWNsZXMuYXJyYXlbal07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8qIGxpbmsgcGFydGljbGVzICovXHJcbiAgICAgICAgICAgICAgICAgICAgaWYocEpTLnBhcnRpY2xlcy5saW5lX2xpbmtlZC5lbmFibGUpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwSlMuZm4uaW50ZXJhY3QubGlua1BhcnRpY2xlcyhwLHAyKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8qIGF0dHJhY3QgcGFydGljbGVzICovXHJcbiAgICAgICAgICAgICAgICAgICAgaWYocEpTLnBhcnRpY2xlcy5tb3ZlLmF0dHJhY3QuZW5hYmxlKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcEpTLmZuLmludGVyYWN0LmF0dHJhY3RQYXJ0aWNsZXMocCxwMik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAvKiBib3VuY2UgcGFydGljbGVzICovXHJcbiAgICAgICAgICAgICAgICAgICAgaWYocEpTLnBhcnRpY2xlcy5tb3ZlLmJvdW5jZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBKUy5mbi5pbnRlcmFjdC5ib3VuY2VQYXJ0aWNsZXMocCxwMik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH07XHJcblxyXG4gICAgcEpTLmZuLnBhcnRpY2xlc0RyYXcgPSBmdW5jdGlvbigpe1xyXG5cclxuICAgICAgICAvKiBjbGVhciBjYW52YXMgKi9cclxuICAgICAgICBwSlMuY2FudmFzLmN0eC5jbGVhclJlY3QoMCwgMCwgcEpTLmNhbnZhcy53LCBwSlMuY2FudmFzLmgpO1xyXG5cclxuICAgICAgICAvKiB1cGRhdGUgZWFjaCBwYXJ0aWNsZXMgcGFyYW0gKi9cclxuICAgICAgICBwSlMuZm4ucGFydGljbGVzVXBkYXRlKCk7XHJcblxyXG4gICAgICAgIC8qIGRyYXcgZWFjaCBwYXJ0aWNsZSAqL1xyXG4gICAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCBwSlMucGFydGljbGVzLmFycmF5Lmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgdmFyIHAgPSBwSlMucGFydGljbGVzLmFycmF5W2ldO1xyXG4gICAgICAgICAgICBwLmRyYXcoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfTtcclxuXHJcbiAgICBwSlMuZm4ucGFydGljbGVzRW1wdHkgPSBmdW5jdGlvbigpe1xyXG4gICAgICAgIHBKUy5wYXJ0aWNsZXMuYXJyYXkgPSBbXTtcclxuICAgIH07XHJcblxyXG4gICAgcEpTLmZuLnBhcnRpY2xlc1JlZnJlc2ggPSBmdW5jdGlvbigpe1xyXG5cclxuICAgICAgICAvKiBpbml0IGFsbCAqL1xyXG4gICAgICAgIGNhbmNlbFJlcXVlc3RBbmltRnJhbWUocEpTLmZuLmNoZWNrQW5pbUZyYW1lKTtcclxuICAgICAgICBjYW5jZWxSZXF1ZXN0QW5pbUZyYW1lKHBKUy5mbi5kcmF3QW5pbUZyYW1lKTtcclxuICAgICAgICBwSlMudG1wLnNvdXJjZV9zdmcgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgcEpTLnRtcC5pbWdfb2JqID0gdW5kZWZpbmVkO1xyXG4gICAgICAgIHBKUy50bXAuY291bnRfc3ZnID0gMDtcclxuICAgICAgICBwSlMuZm4ucGFydGljbGVzRW1wdHkoKTtcclxuICAgICAgICBwSlMuZm4uY2FudmFzQ2xlYXIoKTtcclxuXHJcbiAgICAgICAgLyogcmVzdGFydCAqL1xyXG4gICAgICAgIHBKUy5mbi52ZW5kb3JzLnN0YXJ0KCk7XHJcblxyXG4gICAgfTtcclxuXHJcblxyXG4gICAgLyogLS0tLS0tLS0tLSBwSlMgZnVuY3Rpb25zIC0gcGFydGljbGVzIGludGVyYWN0aW9uIC0tLS0tLS0tLS0tLSAqL1xyXG5cclxuICAgIHBKUy5mbi5pbnRlcmFjdC5saW5rUGFydGljbGVzID0gZnVuY3Rpb24ocDEsIHAyKXtcclxuXHJcbiAgICAgICAgdmFyIGR4ID0gcDEueCAtIHAyLngsXHJcbiAgICAgICAgICAgIGR5ID0gcDEueSAtIHAyLnksXHJcbiAgICAgICAgICAgIGRpc3QgPSBNYXRoLnNxcnQoZHgqZHggKyBkeSpkeSk7XHJcblxyXG4gICAgICAgIC8qIGRyYXcgYSBsaW5lIGJldHdlZW4gcDEgYW5kIHAyIGlmIHRoZSBkaXN0YW5jZSBiZXR3ZWVuIHRoZW0gaXMgdW5kZXIgdGhlIGNvbmZpZyBkaXN0YW5jZSAqL1xyXG4gICAgICAgIGlmKGRpc3QgPD0gcEpTLnBhcnRpY2xlcy5saW5lX2xpbmtlZC5kaXN0YW5jZSl7XHJcblxyXG4gICAgICAgICAgICB2YXIgb3BhY2l0eV9saW5lID0gcEpTLnBhcnRpY2xlcy5saW5lX2xpbmtlZC5vcGFjaXR5IC0gKGRpc3QgLyAoMS9wSlMucGFydGljbGVzLmxpbmVfbGlua2VkLm9wYWNpdHkpKSAvIHBKUy5wYXJ0aWNsZXMubGluZV9saW5rZWQuZGlzdGFuY2U7XHJcblxyXG4gICAgICAgICAgICBpZihvcGFjaXR5X2xpbmUgPiAwKXtcclxuXHJcbiAgICAgICAgICAgICAgICAvKiBzdHlsZSAqL1xyXG4gICAgICAgICAgICAgICAgdmFyIGNvbG9yX2xpbmUgPSBwSlMucGFydGljbGVzLmxpbmVfbGlua2VkLmNvbG9yX3JnYl9saW5lO1xyXG4gICAgICAgICAgICAgICAgcEpTLmNhbnZhcy5jdHguc3Ryb2tlU3R5bGUgPSAncmdiYSgnK2NvbG9yX2xpbmUucisnLCcrY29sb3JfbGluZS5nKycsJytjb2xvcl9saW5lLmIrJywnK29wYWNpdHlfbGluZSsnKSc7XHJcbiAgICAgICAgICAgICAgICBwSlMuY2FudmFzLmN0eC5saW5lV2lkdGggPSBwSlMucGFydGljbGVzLmxpbmVfbGlua2VkLndpZHRoO1xyXG4gICAgICAgICAgICAgICAgLy9wSlMuY2FudmFzLmN0eC5saW5lQ2FwID0gJ3JvdW5kJzsgLyogcGVyZm9ybWFuY2UgaXNzdWUgKi9cclxuXHJcbiAgICAgICAgICAgICAgICAvKiBwYXRoICovXHJcbiAgICAgICAgICAgICAgICBwSlMuY2FudmFzLmN0eC5iZWdpblBhdGgoKTtcclxuICAgICAgICAgICAgICAgIHBKUy5jYW52YXMuY3R4Lm1vdmVUbyhwMS54LCBwMS55KTtcclxuICAgICAgICAgICAgICAgIHBKUy5jYW52YXMuY3R4LmxpbmVUbyhwMi54LCBwMi55KTtcclxuICAgICAgICAgICAgICAgIHBKUy5jYW52YXMuY3R4LnN0cm9rZSgpO1xyXG4gICAgICAgICAgICAgICAgcEpTLmNhbnZhcy5jdHguY2xvc2VQYXRoKCk7XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9O1xyXG5cclxuXHJcbiAgICBwSlMuZm4uaW50ZXJhY3QuYXR0cmFjdFBhcnRpY2xlcyAgPSBmdW5jdGlvbihwMSwgcDIpe1xyXG5cclxuICAgICAgICAvKiBjb25kZW5zZWQgcGFydGljbGVzICovXHJcbiAgICAgICAgdmFyIGR4ID0gcDEueCAtIHAyLngsXHJcbiAgICAgICAgICAgIGR5ID0gcDEueSAtIHAyLnksXHJcbiAgICAgICAgICAgIGRpc3QgPSBNYXRoLnNxcnQoZHgqZHggKyBkeSpkeSk7XHJcblxyXG4gICAgICAgIGlmKGRpc3QgPD0gcEpTLnBhcnRpY2xlcy5saW5lX2xpbmtlZC5kaXN0YW5jZSl7XHJcblxyXG4gICAgICAgICAgICB2YXIgYXggPSBkeC8ocEpTLnBhcnRpY2xlcy5tb3ZlLmF0dHJhY3Qucm90YXRlWCoxMDAwKSxcclxuICAgICAgICAgICAgICAgIGF5ID0gZHkvKHBKUy5wYXJ0aWNsZXMubW92ZS5hdHRyYWN0LnJvdGF0ZVkqMTAwMCk7XHJcblxyXG4gICAgICAgICAgICBwMS52eCAtPSBheDtcclxuICAgICAgICAgICAgcDEudnkgLT0gYXk7XHJcblxyXG4gICAgICAgICAgICBwMi52eCArPSBheDtcclxuICAgICAgICAgICAgcDIudnkgKz0gYXk7XHJcblxyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwSlMuZm4uaW50ZXJhY3QuYm91bmNlUGFydGljbGVzID0gZnVuY3Rpb24ocDEsIHAyKXtcclxuXHJcbiAgICAgICAgdmFyIGR4ID0gcDEueCAtIHAyLngsXHJcbiAgICAgICAgICAgIGR5ID0gcDEueSAtIHAyLnksXHJcbiAgICAgICAgICAgIGRpc3QgPSBNYXRoLnNxcnQoZHgqZHggKyBkeSpkeSksXHJcbiAgICAgICAgICAgIGRpc3RfcCA9IHAxLnJhZGl1cytwMi5yYWRpdXM7XHJcblxyXG4gICAgICAgIGlmKGRpc3QgPD0gZGlzdF9wKXtcclxuICAgICAgICAgICAgcDEudnggPSAtcDEudng7XHJcbiAgICAgICAgICAgIHAxLnZ5ID0gLXAxLnZ5O1xyXG5cclxuICAgICAgICAgICAgcDIudnggPSAtcDIudng7XHJcbiAgICAgICAgICAgIHAyLnZ5ID0gLXAyLnZ5O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qIC0tLS0tLS0tLS0gcEpTIGZ1bmN0aW9ucyAtIG1vZGVzIGV2ZW50cyAtLS0tLS0tLS0tLS0gKi9cclxuXHJcbiAgICBwSlMuZm4ubW9kZXMucHVzaFBhcnRpY2xlcyA9IGZ1bmN0aW9uKG5iLCBwb3Mpe1xyXG5cclxuICAgICAgICBwSlMudG1wLnB1c2hpbmcgPSB0cnVlO1xyXG5cclxuICAgICAgICBmb3IodmFyIGkgPSAwOyBpIDwgbmI7IGkrKyl7XHJcbiAgICAgICAgICAgIHBKUy5wYXJ0aWNsZXMuYXJyYXkucHVzaChcclxuICAgICAgICAgICAgICAgIG5ldyBwSlMuZm4ucGFydGljbGUoXHJcbiAgICAgICAgICAgICAgICAgICAgcEpTLnBhcnRpY2xlcy5jb2xvcixcclxuICAgICAgICAgICAgICAgICAgICBwSlMucGFydGljbGVzLm9wYWNpdHkudmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAneCc6IHBvcyA/IHBvcy5wb3NfeCA6IE1hdGgucmFuZG9tKCkgKiBwSlMuY2FudmFzLncsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICd5JzogcG9zID8gcG9zLnBvc195IDogTWF0aC5yYW5kb20oKSAqIHBKUy5jYW52YXMuaFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICBpZihpID09IG5iLTEpe1xyXG4gICAgICAgICAgICAgICAgaWYoIXBKUy5wYXJ0aWNsZXMubW92ZS5lbmFibGUpe1xyXG4gICAgICAgICAgICAgICAgICAgIHBKUy5mbi5wYXJ0aWNsZXNEcmF3KCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBwSlMudG1wLnB1c2hpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9O1xyXG5cclxuXHJcbiAgICBwSlMuZm4ubW9kZXMucmVtb3ZlUGFydGljbGVzID0gZnVuY3Rpb24obmIpe1xyXG5cclxuICAgICAgICBwSlMucGFydGljbGVzLmFycmF5LnNwbGljZSgwLCBuYik7XHJcbiAgICAgICAgaWYoIXBKUy5wYXJ0aWNsZXMubW92ZS5lbmFibGUpe1xyXG4gICAgICAgICAgICBwSlMuZm4ucGFydGljbGVzRHJhdygpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9O1xyXG5cclxuXHJcbiAgICBwSlMuZm4ubW9kZXMuYnViYmxlUGFydGljbGUgPSBmdW5jdGlvbihwKXtcclxuXHJcbiAgICAgICAgLyogb24gaG92ZXIgZXZlbnQgKi9cclxuICAgICAgICBpZihwSlMuaW50ZXJhY3Rpdml0eS5ldmVudHMub25ob3Zlci5lbmFibGUgJiYgaXNJbkFycmF5KCdidWJibGUnLCBwSlMuaW50ZXJhY3Rpdml0eS5ldmVudHMub25ob3Zlci5tb2RlKSl7XHJcblxyXG4gICAgICAgICAgICB2YXIgZHhfbW91c2UgPSBwLnggLSBwSlMuaW50ZXJhY3Rpdml0eS5tb3VzZS5wb3NfeCxcclxuICAgICAgICAgICAgICAgIGR5X21vdXNlID0gcC55IC0gcEpTLmludGVyYWN0aXZpdHkubW91c2UucG9zX3ksXHJcbiAgICAgICAgICAgICAgICBkaXN0X21vdXNlID0gTWF0aC5zcXJ0KGR4X21vdXNlKmR4X21vdXNlICsgZHlfbW91c2UqZHlfbW91c2UpLFxyXG4gICAgICAgICAgICAgICAgcmF0aW8gPSAxIC0gZGlzdF9tb3VzZSAvIHBKUy5pbnRlcmFjdGl2aXR5Lm1vZGVzLmJ1YmJsZS5kaXN0YW5jZTtcclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIGluaXQoKXtcclxuICAgICAgICAgICAgICAgIHAub3BhY2l0eV9idWJibGUgPSBwLm9wYWNpdHk7XHJcbiAgICAgICAgICAgICAgICBwLnJhZGl1c19idWJibGUgPSBwLnJhZGl1cztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLyogbW91c2Vtb3ZlIC0gY2hlY2sgcmF0aW8gKi9cclxuICAgICAgICAgICAgaWYoZGlzdF9tb3VzZSA8PSBwSlMuaW50ZXJhY3Rpdml0eS5tb2Rlcy5idWJibGUuZGlzdGFuY2Upe1xyXG5cclxuICAgICAgICAgICAgICAgIGlmKHJhdGlvID49IDAgJiYgcEpTLmludGVyYWN0aXZpdHkuc3RhdHVzID09ICdtb3VzZW1vdmUnKXtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLyogc2l6ZSAqL1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKHBKUy5pbnRlcmFjdGl2aXR5Lm1vZGVzLmJ1YmJsZS5zaXplICE9IHBKUy5wYXJ0aWNsZXMuc2l6ZS52YWx1ZSl7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihwSlMuaW50ZXJhY3Rpdml0eS5tb2Rlcy5idWJibGUuc2l6ZSA+IHBKUy5wYXJ0aWNsZXMuc2l6ZS52YWx1ZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgc2l6ZSA9IHAucmFkaXVzICsgKHBKUy5pbnRlcmFjdGl2aXR5Lm1vZGVzLmJ1YmJsZS5zaXplKnJhdGlvKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHNpemUgPj0gMCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcC5yYWRpdXNfYnViYmxlID0gc2l6ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZGlmID0gcC5yYWRpdXMgLSBwSlMuaW50ZXJhY3Rpdml0eS5tb2Rlcy5idWJibGUuc2l6ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplID0gcC5yYWRpdXMgLSAoZGlmKnJhdGlvKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHNpemUgPiAwKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwLnJhZGl1c19idWJibGUgPSBzaXplO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcC5yYWRpdXNfYnViYmxlID0gMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8qIG9wYWNpdHkgKi9cclxuICAgICAgICAgICAgICAgICAgICBpZihwSlMuaW50ZXJhY3Rpdml0eS5tb2Rlcy5idWJibGUub3BhY2l0eSAhPSBwSlMucGFydGljbGVzLm9wYWNpdHkudmFsdWUpe1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYocEpTLmludGVyYWN0aXZpdHkubW9kZXMuYnViYmxlLm9wYWNpdHkgPiBwSlMucGFydGljbGVzLm9wYWNpdHkudmFsdWUpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG9wYWNpdHkgPSBwSlMuaW50ZXJhY3Rpdml0eS5tb2Rlcy5idWJibGUub3BhY2l0eSpyYXRpbztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKG9wYWNpdHkgPiBwLm9wYWNpdHkgJiYgb3BhY2l0eSA8PSBwSlMuaW50ZXJhY3Rpdml0eS5tb2Rlcy5idWJibGUub3BhY2l0eSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcC5vcGFjaXR5X2J1YmJsZSA9IG9wYWNpdHk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG9wYWNpdHkgPSBwLm9wYWNpdHkgLSAocEpTLnBhcnRpY2xlcy5vcGFjaXR5LnZhbHVlLXBKUy5pbnRlcmFjdGl2aXR5Lm1vZGVzLmJ1YmJsZS5vcGFjaXR5KSpyYXRpbztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKG9wYWNpdHkgPCBwLm9wYWNpdHkgJiYgb3BhY2l0eSA+PSBwSlMuaW50ZXJhY3Rpdml0eS5tb2Rlcy5idWJibGUub3BhY2l0eSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcC5vcGFjaXR5X2J1YmJsZSA9IG9wYWNpdHk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgaW5pdCgpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgLyogbW91c2VsZWF2ZSAqL1xyXG4gICAgICAgICAgICBpZihwSlMuaW50ZXJhY3Rpdml0eS5zdGF0dXMgPT0gJ21vdXNlbGVhdmUnKXtcclxuICAgICAgICAgICAgICAgIGluaXQoKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qIG9uIGNsaWNrIGV2ZW50ICovXHJcbiAgICAgICAgZWxzZSBpZihwSlMuaW50ZXJhY3Rpdml0eS5ldmVudHMub25jbGljay5lbmFibGUgJiYgaXNJbkFycmF5KCdidWJibGUnLCBwSlMuaW50ZXJhY3Rpdml0eS5ldmVudHMub25jbGljay5tb2RlKSl7XHJcblxyXG5cclxuICAgICAgICAgICAgaWYocEpTLnRtcC5idWJibGVfY2xpY2tpbmcpe1xyXG4gICAgICAgICAgICAgICAgdmFyIGR4X21vdXNlID0gcC54IC0gcEpTLmludGVyYWN0aXZpdHkubW91c2UuY2xpY2tfcG9zX3gsXHJcbiAgICAgICAgICAgICAgICAgICAgZHlfbW91c2UgPSBwLnkgLSBwSlMuaW50ZXJhY3Rpdml0eS5tb3VzZS5jbGlja19wb3NfeSxcclxuICAgICAgICAgICAgICAgICAgICBkaXN0X21vdXNlID0gTWF0aC5zcXJ0KGR4X21vdXNlKmR4X21vdXNlICsgZHlfbW91c2UqZHlfbW91c2UpLFxyXG4gICAgICAgICAgICAgICAgICAgIHRpbWVfc3BlbnQgPSAobmV3IERhdGUoKS5nZXRUaW1lKCkgLSBwSlMuaW50ZXJhY3Rpdml0eS5tb3VzZS5jbGlja190aW1lKS8xMDAwO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmKHRpbWVfc3BlbnQgPiBwSlMuaW50ZXJhY3Rpdml0eS5tb2Rlcy5idWJibGUuZHVyYXRpb24pe1xyXG4gICAgICAgICAgICAgICAgICAgIHBKUy50bXAuYnViYmxlX2R1cmF0aW9uX2VuZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYodGltZV9zcGVudCA+IHBKUy5pbnRlcmFjdGl2aXR5Lm1vZGVzLmJ1YmJsZS5kdXJhdGlvbioyKXtcclxuICAgICAgICAgICAgICAgICAgICBwSlMudG1wLmJ1YmJsZV9jbGlja2luZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIHBKUy50bXAuYnViYmxlX2R1cmF0aW9uX2VuZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgZnVuY3Rpb24gcHJvY2VzcyhidWJibGVfcGFyYW0sIHBhcnRpY2xlc19wYXJhbSwgcF9vYmpfYnViYmxlLCBwX29iaiwgaWQpe1xyXG5cclxuICAgICAgICAgICAgICAgIGlmKGJ1YmJsZV9wYXJhbSAhPSBwYXJ0aWNsZXNfcGFyYW0pe1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZighcEpTLnRtcC5idWJibGVfZHVyYXRpb25fZW5kKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoZGlzdF9tb3VzZSA8PSBwSlMuaW50ZXJhY3Rpdml0eS5tb2Rlcy5idWJibGUuZGlzdGFuY2Upe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYocF9vYmpfYnViYmxlICE9IHVuZGVmaW5lZCkgdmFyIG9iaiA9IHBfb2JqX2J1YmJsZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgdmFyIG9iaiA9IHBfb2JqO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYob2JqICE9IGJ1YmJsZV9wYXJhbSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHZhbHVlID0gcF9vYmogLSAodGltZV9zcGVudCAqIChwX29iaiAtIGJ1YmJsZV9wYXJhbSkgLyBwSlMuaW50ZXJhY3Rpdml0eS5tb2Rlcy5idWJibGUuZHVyYXRpb24pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKGlkID09ICdzaXplJykgcC5yYWRpdXNfYnViYmxlID0gdmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoaWQgPT0gJ29wYWNpdHknKSBwLm9wYWNpdHlfYnViYmxlID0gdmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoaWQgPT0gJ3NpemUnKSBwLnJhZGl1c19idWJibGUgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihpZCA9PSAnb3BhY2l0eScpIHAub3BhY2l0eV9idWJibGUgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYocF9vYmpfYnViYmxlICE9IHVuZGVmaW5lZCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdmFsdWVfdG1wID0gcF9vYmogLSAodGltZV9zcGVudCAqIChwX29iaiAtIGJ1YmJsZV9wYXJhbSkgLyBwSlMuaW50ZXJhY3Rpdml0eS5tb2Rlcy5idWJibGUuZHVyYXRpb24pLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpZiA9IGJ1YmJsZV9wYXJhbSAtIHZhbHVlX3RtcDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0gYnViYmxlX3BhcmFtICsgZGlmO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoaWQgPT0gJ3NpemUnKSBwLnJhZGl1c19idWJibGUgPSB2YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKGlkID09ICdvcGFjaXR5JykgcC5vcGFjaXR5X2J1YmJsZSA9IHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmKHBKUy50bXAuYnViYmxlX2NsaWNraW5nKXtcclxuICAgICAgICAgICAgICAgIC8qIHNpemUgKi9cclxuICAgICAgICAgICAgICAgIHByb2Nlc3MocEpTLmludGVyYWN0aXZpdHkubW9kZXMuYnViYmxlLnNpemUsIHBKUy5wYXJ0aWNsZXMuc2l6ZS52YWx1ZSwgcC5yYWRpdXNfYnViYmxlLCBwLnJhZGl1cywgJ3NpemUnKTtcclxuICAgICAgICAgICAgICAgIC8qIG9wYWNpdHkgKi9cclxuICAgICAgICAgICAgICAgIHByb2Nlc3MocEpTLmludGVyYWN0aXZpdHkubW9kZXMuYnViYmxlLm9wYWNpdHksIHBKUy5wYXJ0aWNsZXMub3BhY2l0eS52YWx1ZSwgcC5vcGFjaXR5X2J1YmJsZSwgcC5vcGFjaXR5LCAnb3BhY2l0eScpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9O1xyXG5cclxuXHJcbiAgICBwSlMuZm4ubW9kZXMucmVwdWxzZVBhcnRpY2xlID0gZnVuY3Rpb24ocCl7XHJcblxyXG4gICAgICAgIGlmKHBKUy5pbnRlcmFjdGl2aXR5LmV2ZW50cy5vbmhvdmVyLmVuYWJsZSAmJiBpc0luQXJyYXkoJ3JlcHVsc2UnLCBwSlMuaW50ZXJhY3Rpdml0eS5ldmVudHMub25ob3Zlci5tb2RlKSAmJiBwSlMuaW50ZXJhY3Rpdml0eS5zdGF0dXMgPT0gJ21vdXNlbW92ZScpIHtcclxuXHJcbiAgICAgICAgICAgIHZhciBkeF9tb3VzZSA9IHAueCAtIHBKUy5pbnRlcmFjdGl2aXR5Lm1vdXNlLnBvc194LFxyXG4gICAgICAgICAgICAgICAgZHlfbW91c2UgPSBwLnkgLSBwSlMuaW50ZXJhY3Rpdml0eS5tb3VzZS5wb3NfeSxcclxuICAgICAgICAgICAgICAgIGRpc3RfbW91c2UgPSBNYXRoLnNxcnQoZHhfbW91c2UqZHhfbW91c2UgKyBkeV9tb3VzZSpkeV9tb3VzZSk7XHJcblxyXG4gICAgICAgICAgICB2YXIgbm9ybVZlYyA9IHt4OiBkeF9tb3VzZS9kaXN0X21vdXNlLCB5OiBkeV9tb3VzZS9kaXN0X21vdXNlfSxcclxuICAgICAgICAgICAgICAgIHJlcHVsc2VSYWRpdXMgPSBwSlMuaW50ZXJhY3Rpdml0eS5tb2Rlcy5yZXB1bHNlLmRpc3RhbmNlLFxyXG4gICAgICAgICAgICAgICAgdmVsb2NpdHkgPSAxMDAsXHJcbiAgICAgICAgICAgICAgICByZXB1bHNlRmFjdG9yID0gY2xhbXAoKDEvcmVwdWxzZVJhZGl1cykqKC0xKk1hdGgucG93KGRpc3RfbW91c2UvcmVwdWxzZVJhZGl1cywyKSsxKSpyZXB1bHNlUmFkaXVzKnZlbG9jaXR5LCAwLCA1MCk7XHJcblxyXG4gICAgICAgICAgICB2YXIgcG9zID0ge1xyXG4gICAgICAgICAgICAgICAgeDogcC54ICsgbm9ybVZlYy54ICogcmVwdWxzZUZhY3RvcixcclxuICAgICAgICAgICAgICAgIHk6IHAueSArIG5vcm1WZWMueSAqIHJlcHVsc2VGYWN0b3JcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYocEpTLnBhcnRpY2xlcy5tb3ZlLm91dF9tb2RlID09ICdib3VuY2UnKXtcclxuICAgICAgICAgICAgICAgIGlmKHBvcy54IC0gcC5yYWRpdXMgPiAwICYmIHBvcy54ICsgcC5yYWRpdXMgPCBwSlMuY2FudmFzLncpIHAueCA9IHBvcy54O1xyXG4gICAgICAgICAgICAgICAgaWYocG9zLnkgLSBwLnJhZGl1cyA+IDAgJiYgcG9zLnkgKyBwLnJhZGl1cyA8IHBKUy5jYW52YXMuaCkgcC55ID0gcG9zLnk7XHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgcC54ID0gcG9zLng7XHJcbiAgICAgICAgICAgICAgICBwLnkgPSBwb3MueTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICBlbHNlIGlmKHBKUy5pbnRlcmFjdGl2aXR5LmV2ZW50cy5vbmNsaWNrLmVuYWJsZSAmJiBpc0luQXJyYXkoJ3JlcHVsc2UnLCBwSlMuaW50ZXJhY3Rpdml0eS5ldmVudHMub25jbGljay5tb2RlKSkge1xyXG5cclxuICAgICAgICAgICAgaWYoIXBKUy50bXAucmVwdWxzZV9maW5pc2gpe1xyXG4gICAgICAgICAgICAgICAgcEpTLnRtcC5yZXB1bHNlX2NvdW50Kys7XHJcbiAgICAgICAgICAgICAgICBpZihwSlMudG1wLnJlcHVsc2VfY291bnQgPT0gcEpTLnBhcnRpY2xlcy5hcnJheS5sZW5ndGgpe1xyXG4gICAgICAgICAgICAgICAgICAgIHBKUy50bXAucmVwdWxzZV9maW5pc2ggPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZihwSlMudG1wLnJlcHVsc2VfY2xpY2tpbmcpe1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciByZXB1bHNlUmFkaXVzID0gTWF0aC5wb3cocEpTLmludGVyYWN0aXZpdHkubW9kZXMucmVwdWxzZS5kaXN0YW5jZS82LCAzKTtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgZHggPSBwSlMuaW50ZXJhY3Rpdml0eS5tb3VzZS5jbGlja19wb3NfeCAtIHAueCxcclxuICAgICAgICAgICAgICAgICAgICBkeSA9IHBKUy5pbnRlcmFjdGl2aXR5Lm1vdXNlLmNsaWNrX3Bvc195IC0gcC55LFxyXG4gICAgICAgICAgICAgICAgICAgIGQgPSBkeCpkeCArIGR5KmR5O1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBmb3JjZSA9IC1yZXB1bHNlUmFkaXVzIC8gZCAqIDE7XHJcblxyXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gcHJvY2Vzcygpe1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB2YXIgZiA9IE1hdGguYXRhbjIoZHksZHgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHAudnggPSBmb3JjZSAqIE1hdGguY29zKGYpO1xyXG4gICAgICAgICAgICAgICAgICAgIHAudnkgPSBmb3JjZSAqIE1hdGguc2luKGYpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZihwSlMucGFydGljbGVzLm1vdmUub3V0X21vZGUgPT0gJ2JvdW5jZScpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcG9zID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeDogcC54ICsgcC52eCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHk6IHAueSArIHAudnlcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocG9zLnggKyBwLnJhZGl1cyA+IHBKUy5jYW52YXMudykgcC52eCA9IC1wLnZ4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChwb3MueCAtIHAucmFkaXVzIDwgMCkgcC52eCA9IC1wLnZ4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocG9zLnkgKyBwLnJhZGl1cyA+IHBKUy5jYW52YXMuaCkgcC52eSA9IC1wLnZ5O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChwb3MueSAtIHAucmFkaXVzIDwgMCkgcC52eSA9IC1wLnZ5O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gZGVmYXVsdFxyXG4gICAgICAgICAgICAgICAgaWYoZCA8PSByZXB1bHNlUmFkaXVzKXtcclxuICAgICAgICAgICAgICAgICAgICBwcm9jZXNzKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gYmFuZyAtIHNsb3cgbW90aW9uIG1vZGVcclxuICAgICAgICAgICAgICAgIC8vIGlmKCFwSlMudG1wLnJlcHVsc2VfZmluaXNoKXtcclxuICAgICAgICAgICAgICAgIC8vICAgaWYoZCA8PSByZXB1bHNlUmFkaXVzKXtcclxuICAgICAgICAgICAgICAgIC8vICAgICBwcm9jZXNzKCk7XHJcbiAgICAgICAgICAgICAgICAvLyAgIH1cclxuICAgICAgICAgICAgICAgIC8vIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgLy8gICBwcm9jZXNzKCk7XHJcbiAgICAgICAgICAgICAgICAvLyB9XHJcblxyXG5cclxuICAgICAgICAgICAgfWVsc2V7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYocEpTLnRtcC5yZXB1bHNlX2NsaWNraW5nID09IGZhbHNlKXtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgcC52eCA9IHAudnhfaTtcclxuICAgICAgICAgICAgICAgICAgICBwLnZ5ID0gcC52eV9pO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcblxyXG4gICAgcEpTLmZuLm1vZGVzLmdyYWJQYXJ0aWNsZSA9IGZ1bmN0aW9uKHApe1xyXG5cclxuICAgICAgICBpZihwSlMuaW50ZXJhY3Rpdml0eS5ldmVudHMub25ob3Zlci5lbmFibGUgJiYgcEpTLmludGVyYWN0aXZpdHkuc3RhdHVzID09ICdtb3VzZW1vdmUnKXtcclxuXHJcbiAgICAgICAgICAgIHZhciBkeF9tb3VzZSA9IHAueCAtIHBKUy5pbnRlcmFjdGl2aXR5Lm1vdXNlLnBvc194LFxyXG4gICAgICAgICAgICAgICAgZHlfbW91c2UgPSBwLnkgLSBwSlMuaW50ZXJhY3Rpdml0eS5tb3VzZS5wb3NfeSxcclxuICAgICAgICAgICAgICAgIGRpc3RfbW91c2UgPSBNYXRoLnNxcnQoZHhfbW91c2UqZHhfbW91c2UgKyBkeV9tb3VzZSpkeV9tb3VzZSk7XHJcblxyXG4gICAgICAgICAgICAvKiBkcmF3IGEgbGluZSBiZXR3ZWVuIHRoZSBjdXJzb3IgYW5kIHRoZSBwYXJ0aWNsZSBpZiB0aGUgZGlzdGFuY2UgYmV0d2VlbiB0aGVtIGlzIHVuZGVyIHRoZSBjb25maWcgZGlzdGFuY2UgKi9cclxuICAgICAgICAgICAgaWYoZGlzdF9tb3VzZSA8PSBwSlMuaW50ZXJhY3Rpdml0eS5tb2Rlcy5ncmFiLmRpc3RhbmNlKXtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgb3BhY2l0eV9saW5lID0gcEpTLmludGVyYWN0aXZpdHkubW9kZXMuZ3JhYi5saW5lX2xpbmtlZC5vcGFjaXR5IC0gKGRpc3RfbW91c2UgLyAoMS9wSlMuaW50ZXJhY3Rpdml0eS5tb2Rlcy5ncmFiLmxpbmVfbGlua2VkLm9wYWNpdHkpKSAvIHBKUy5pbnRlcmFjdGl2aXR5Lm1vZGVzLmdyYWIuZGlzdGFuY2U7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYob3BhY2l0eV9saW5lID4gMCl7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8qIHN0eWxlICovXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNvbG9yX2xpbmUgPSBwSlMucGFydGljbGVzLmxpbmVfbGlua2VkLmNvbG9yX3JnYl9saW5lO1xyXG4gICAgICAgICAgICAgICAgICAgIHBKUy5jYW52YXMuY3R4LnN0cm9rZVN0eWxlID0gJ3JnYmEoJysyNTErJywnKzE5NSsnLCcrOTQrJywnK29wYWNpdHlfbGluZSsnKSc7XHJcbiAgICAgICAgICAgICAgICAgICAgcEpTLmNhbnZhcy5jdHgubGluZVdpZHRoID0gcEpTLnBhcnRpY2xlcy5saW5lX2xpbmtlZC53aWR0aDtcclxuICAgICAgICAgICAgICAgICAgICAvL3BKUy5jYW52YXMuY3R4LmxpbmVDYXAgPSAncm91bmQnOyAvKiBwZXJmb3JtYW5jZSBpc3N1ZSAqL1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvKiBwYXRoICovXHJcbiAgICAgICAgICAgICAgICAgICAgcEpTLmNhbnZhcy5jdHguYmVnaW5QYXRoKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcEpTLmNhbnZhcy5jdHgubW92ZVRvKHAueCwgcC55KTtcclxuICAgICAgICAgICAgICAgICAgICBwSlMuY2FudmFzLmN0eC5saW5lVG8ocEpTLmludGVyYWN0aXZpdHkubW91c2UucG9zX3gsIHBKUy5pbnRlcmFjdGl2aXR5Lm1vdXNlLnBvc195KTtcclxuICAgICAgICAgICAgICAgICAgICBwSlMuY2FudmFzLmN0eC5zdHJva2UoKTtcclxuICAgICAgICAgICAgICAgICAgICBwSlMuY2FudmFzLmN0eC5jbG9zZVBhdGgoKTtcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9O1xyXG5cclxuXHJcblxyXG4gICAgLyogLS0tLS0tLS0tLSBwSlMgZnVuY3Rpb25zIC0gdmVuZG9ycyAtLS0tLS0tLS0tLS0gKi9cclxuXHJcbiAgICBwSlMuZm4udmVuZG9ycy5ldmVudHNMaXN0ZW5lcnMgPSBmdW5jdGlvbigpe1xyXG5cclxuICAgICAgICAvKiBldmVudHMgdGFyZ2V0IGVsZW1lbnQgKi9cclxuICAgICAgICBpZihwSlMuaW50ZXJhY3Rpdml0eS5kZXRlY3Rfb24gPT0gJ3dpbmRvdycpe1xyXG4gICAgICAgICAgICBwSlMuaW50ZXJhY3Rpdml0eS5lbCA9IHdpbmRvdztcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgcEpTLmludGVyYWN0aXZpdHkuZWwgPSBwSlMuY2FudmFzLmVsO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIC8qIGRldGVjdCBtb3VzZSBwb3MgLSBvbiBob3ZlciAvIGNsaWNrIGV2ZW50ICovXHJcbiAgICAgICAgaWYocEpTLmludGVyYWN0aXZpdHkuZXZlbnRzLm9uaG92ZXIuZW5hYmxlIHx8IHBKUy5pbnRlcmFjdGl2aXR5LmV2ZW50cy5vbmNsaWNrLmVuYWJsZSl7XHJcblxyXG4gICAgICAgICAgICAvKiBlbCBvbiBtb3VzZW1vdmUgKi9cclxuICAgICAgICAgICAgcEpTLmludGVyYWN0aXZpdHkuZWwuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgZnVuY3Rpb24oZSl7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYocEpTLmludGVyYWN0aXZpdHkuZWwgPT0gd2luZG93KXtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgcG9zX3ggPSBlLmNsaWVudFgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc195ID0gZS5jbGllbnRZO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgcG9zX3ggPSBlLm9mZnNldFggfHwgZS5jbGllbnRYLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NfeSA9IGUub2Zmc2V0WSB8fCBlLmNsaWVudFk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgcEpTLmludGVyYWN0aXZpdHkubW91c2UucG9zX3ggPSBwb3NfeDtcclxuICAgICAgICAgICAgICAgIHBKUy5pbnRlcmFjdGl2aXR5Lm1vdXNlLnBvc195ID0gcG9zX3k7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYocEpTLnRtcC5yZXRpbmEpe1xyXG4gICAgICAgICAgICAgICAgICAgIHBKUy5pbnRlcmFjdGl2aXR5Lm1vdXNlLnBvc194ICo9IHBKUy5jYW52YXMucHhyYXRpbztcclxuICAgICAgICAgICAgICAgICAgICBwSlMuaW50ZXJhY3Rpdml0eS5tb3VzZS5wb3NfeSAqPSBwSlMuY2FudmFzLnB4cmF0aW87XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgcEpTLmludGVyYWN0aXZpdHkuc3RhdHVzID0gJ21vdXNlbW92ZSc7XHJcblxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIC8qIGVsIG9uIG9ubW91c2VsZWF2ZSAqL1xyXG4gICAgICAgICAgICBwSlMuaW50ZXJhY3Rpdml0eS5lbC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgZnVuY3Rpb24oZSl7XHJcblxyXG4gICAgICAgICAgICAgICAgcEpTLmludGVyYWN0aXZpdHkubW91c2UucG9zX3ggPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgcEpTLmludGVyYWN0aXZpdHkubW91c2UucG9zX3kgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgcEpTLmludGVyYWN0aXZpdHkuc3RhdHVzID0gJ21vdXNlbGVhdmUnO1xyXG5cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyogb24gY2xpY2sgZXZlbnQgKi9cclxuICAgICAgICBpZihwSlMuaW50ZXJhY3Rpdml0eS5ldmVudHMub25jbGljay5lbmFibGUpe1xyXG5cclxuICAgICAgICAgICAgcEpTLmludGVyYWN0aXZpdHkuZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xyXG5cclxuICAgICAgICAgICAgICAgIHBKUy5pbnRlcmFjdGl2aXR5Lm1vdXNlLmNsaWNrX3Bvc194ID0gcEpTLmludGVyYWN0aXZpdHkubW91c2UucG9zX3g7XHJcbiAgICAgICAgICAgICAgICBwSlMuaW50ZXJhY3Rpdml0eS5tb3VzZS5jbGlja19wb3NfeSA9IHBKUy5pbnRlcmFjdGl2aXR5Lm1vdXNlLnBvc195O1xyXG4gICAgICAgICAgICAgICAgcEpTLmludGVyYWN0aXZpdHkubW91c2UuY2xpY2tfdGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmKHBKUy5pbnRlcmFjdGl2aXR5LmV2ZW50cy5vbmNsaWNrLmVuYWJsZSl7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaChwSlMuaW50ZXJhY3Rpdml0eS5ldmVudHMub25jbGljay5tb2RlKXtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ3B1c2gnOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYocEpTLnBhcnRpY2xlcy5tb3ZlLmVuYWJsZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcEpTLmZuLm1vZGVzLnB1c2hQYXJ0aWNsZXMocEpTLmludGVyYWN0aXZpdHkubW9kZXMucHVzaC5wYXJ0aWNsZXNfbmIsIHBKUy5pbnRlcmFjdGl2aXR5Lm1vdXNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHBKUy5pbnRlcmFjdGl2aXR5Lm1vZGVzLnB1c2gucGFydGljbGVzX25iID09IDEpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwSlMuZm4ubW9kZXMucHVzaFBhcnRpY2xlcyhwSlMuaW50ZXJhY3Rpdml0eS5tb2Rlcy5wdXNoLnBhcnRpY2xlc19uYiwgcEpTLmludGVyYWN0aXZpdHkubW91c2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmKHBKUy5pbnRlcmFjdGl2aXR5Lm1vZGVzLnB1c2gucGFydGljbGVzX25iID4gMSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBKUy5mbi5tb2Rlcy5wdXNoUGFydGljbGVzKHBKUy5pbnRlcmFjdGl2aXR5Lm1vZGVzLnB1c2gucGFydGljbGVzX25iKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ3JlbW92ZSc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwSlMuZm4ubW9kZXMucmVtb3ZlUGFydGljbGVzKHBKUy5pbnRlcmFjdGl2aXR5Lm1vZGVzLnJlbW92ZS5wYXJ0aWNsZXNfbmIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdidWJibGUnOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcEpTLnRtcC5idWJibGVfY2xpY2tpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdyZXB1bHNlJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBKUy50bXAucmVwdWxzZV9jbGlja2luZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwSlMudG1wLnJlcHVsc2VfY291bnQgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcEpTLnRtcC5yZXB1bHNlX2ZpbmlzaCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBKUy50bXAucmVwdWxzZV9jbGlja2luZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgcEpTLmludGVyYWN0aXZpdHkubW9kZXMucmVwdWxzZS5kdXJhdGlvbioxMDAwKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICB9O1xyXG5cclxuICAgIHBKUy5mbi52ZW5kb3JzLmRlbnNpdHlBdXRvUGFydGljbGVzID0gZnVuY3Rpb24oKXtcclxuXHJcbiAgICAgICAgaWYocEpTLnBhcnRpY2xlcy5udW1iZXIuZGVuc2l0eS5lbmFibGUpe1xyXG5cclxuICAgICAgICAgICAgLyogY2FsYyBhcmVhICovXHJcbiAgICAgICAgICAgIHZhciBhcmVhID0gcEpTLmNhbnZhcy5lbC53aWR0aCAqIHBKUy5jYW52YXMuZWwuaGVpZ2h0IC8gMTAwMDtcclxuICAgICAgICAgICAgaWYocEpTLnRtcC5yZXRpbmEpe1xyXG4gICAgICAgICAgICAgICAgYXJlYSA9IGFyZWEvKHBKUy5jYW52YXMucHhyYXRpbyoyKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLyogY2FsYyBudW1iZXIgb2YgcGFydGljbGVzIGJhc2VkIG9uIGRlbnNpdHkgYXJlYSAqL1xyXG4gICAgICAgICAgICB2YXIgbmJfcGFydGljbGVzID0gYXJlYSAqIHBKUy5wYXJ0aWNsZXMubnVtYmVyLnZhbHVlIC8gcEpTLnBhcnRpY2xlcy5udW1iZXIuZGVuc2l0eS52YWx1ZV9hcmVhO1xyXG5cclxuICAgICAgICAgICAgLyogYWRkIG9yIHJlbW92ZSBYIHBhcnRpY2xlcyAqL1xyXG4gICAgICAgICAgICB2YXIgbWlzc2luZ19wYXJ0aWNsZXMgPSBwSlMucGFydGljbGVzLmFycmF5Lmxlbmd0aCAtIG5iX3BhcnRpY2xlcztcclxuICAgICAgICAgICAgaWYobWlzc2luZ19wYXJ0aWNsZXMgPCAwKSBwSlMuZm4ubW9kZXMucHVzaFBhcnRpY2xlcyhNYXRoLmFicyhtaXNzaW5nX3BhcnRpY2xlcykpO1xyXG4gICAgICAgICAgICBlbHNlIHBKUy5mbi5tb2Rlcy5yZW1vdmVQYXJ0aWNsZXMobWlzc2luZ19wYXJ0aWNsZXMpO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgfTtcclxuXHJcblxyXG4gICAgcEpTLmZuLnZlbmRvcnMuY2hlY2tPdmVybGFwID0gZnVuY3Rpb24ocDEsIHBvc2l0aW9uKXtcclxuICAgICAgICBmb3IodmFyIGkgPSAwOyBpIDwgcEpTLnBhcnRpY2xlcy5hcnJheS5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgIHZhciBwMiA9IHBKUy5wYXJ0aWNsZXMuYXJyYXlbaV07XHJcblxyXG4gICAgICAgICAgICB2YXIgZHggPSBwMS54IC0gcDIueCxcclxuICAgICAgICAgICAgICAgIGR5ID0gcDEueSAtIHAyLnksXHJcbiAgICAgICAgICAgICAgICBkaXN0ID0gTWF0aC5zcXJ0KGR4KmR4ICsgZHkqZHkpO1xyXG5cclxuICAgICAgICAgICAgaWYoZGlzdCA8PSBwMS5yYWRpdXMgKyBwMi5yYWRpdXMpe1xyXG4gICAgICAgICAgICAgICAgcDEueCA9IHBvc2l0aW9uID8gcG9zaXRpb24ueCA6IE1hdGgucmFuZG9tKCkgKiBwSlMuY2FudmFzLnc7XHJcbiAgICAgICAgICAgICAgICBwMS55ID0gcG9zaXRpb24gPyBwb3NpdGlvbi55IDogTWF0aC5yYW5kb20oKSAqIHBKUy5jYW52YXMuaDtcclxuICAgICAgICAgICAgICAgIHBKUy5mbi52ZW5kb3JzLmNoZWNrT3ZlcmxhcChwMSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuXHJcbiAgICBwSlMuZm4udmVuZG9ycy5jcmVhdGVTdmdJbWcgPSBmdW5jdGlvbihwKXtcclxuXHJcbiAgICAgICAgLyogc2V0IGNvbG9yIHRvIHN2ZyBlbGVtZW50ICovXHJcbiAgICAgICAgdmFyIHN2Z1htbCA9IHBKUy50bXAuc291cmNlX3N2ZyxcclxuICAgICAgICAgICAgcmdiSGV4ID0gLyMoWzAtOUEtRl17Myw2fSkvZ2ksXHJcbiAgICAgICAgICAgIGNvbG9yZWRTdmdYbWwgPSBzdmdYbWwucmVwbGFjZShyZ2JIZXgsIGZ1bmN0aW9uIChtLCByLCBnLCBiKSB7XHJcbiAgICAgICAgICAgICAgICBpZihwLmNvbG9yLnJnYil7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNvbG9yX3ZhbHVlID0gJ3JnYmEoJytwLmNvbG9yLnJnYi5yKycsJytwLmNvbG9yLnJnYi5nKycsJytwLmNvbG9yLnJnYi5iKycsJytwLm9wYWNpdHkrJyknO1xyXG4gICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNvbG9yX3ZhbHVlID0gJ2hzbGEoJytwLmNvbG9yLmhzbC5oKycsJytwLmNvbG9yLmhzbC5zKyclLCcrcC5jb2xvci5oc2wubCsnJSwnK3Aub3BhY2l0eSsnKSc7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gY29sb3JfdmFsdWU7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvKiBwcmVwYXJlIHRvIGNyZWF0ZSBpbWcgd2l0aCBjb2xvcmVkIHN2ZyAqL1xyXG4gICAgICAgIHZhciBzdmcgPSBuZXcgQmxvYihbY29sb3JlZFN2Z1htbF0sIHt0eXBlOiAnaW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PXV0Zi04J30pLFxyXG4gICAgICAgICAgICBET01VUkwgPSB3aW5kb3cuVVJMIHx8IHdpbmRvdy53ZWJraXRVUkwgfHwgd2luZG93LFxyXG4gICAgICAgICAgICB1cmwgPSBET01VUkwuY3JlYXRlT2JqZWN0VVJMKHN2Zyk7XHJcblxyXG4gICAgICAgIC8qIGNyZWF0ZSBwYXJ0aWNsZSBpbWcgb2JqICovXHJcbiAgICAgICAgdmFyIGltZyA9IG5ldyBJbWFnZSgpO1xyXG4gICAgICAgIGltZy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgcC5pbWcub2JqID0gaW1nO1xyXG4gICAgICAgICAgICBwLmltZy5sb2FkZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICBET01VUkwucmV2b2tlT2JqZWN0VVJMKHVybCk7XHJcbiAgICAgICAgICAgIHBKUy50bXAuY291bnRfc3ZnKys7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgaW1nLnNyYyA9IHVybDtcclxuXHJcbiAgICB9O1xyXG5cclxuXHJcbiAgICBwSlMuZm4udmVuZG9ycy5kZXN0cm95cEpTID0gZnVuY3Rpb24oKXtcclxuICAgICAgICBjYW5jZWxBbmltYXRpb25GcmFtZShwSlMuZm4uZHJhd0FuaW1GcmFtZSk7XHJcbiAgICAgICAgY2FudmFzX2VsLnJlbW92ZSgpO1xyXG4gICAgICAgIHBKU0RvbSA9IG51bGw7XHJcbiAgICB9O1xyXG5cclxuXHJcbiAgICBwSlMuZm4udmVuZG9ycy5kcmF3U2hhcGUgPSBmdW5jdGlvbihjLCBzdGFydFgsIHN0YXJ0WSwgc2lkZUxlbmd0aCwgc2lkZUNvdW50TnVtZXJhdG9yLCBzaWRlQ291bnREZW5vbWluYXRvcil7XHJcblxyXG4gICAgICAgIC8vIEJ5IFByb2dyYW1taW5nIFRob21hcyAtIGh0dHBzOi8vcHJvZ3JhbW1pbmd0aG9tYXMud29yZHByZXNzLmNvbS8yMDEzLzA0LzAzL24tc2lkZWQtc2hhcGVzL1xyXG4gICAgICAgIHZhciBzaWRlQ291bnQgPSBzaWRlQ291bnROdW1lcmF0b3IgKiBzaWRlQ291bnREZW5vbWluYXRvcjtcclxuICAgICAgICB2YXIgZGVjaW1hbFNpZGVzID0gc2lkZUNvdW50TnVtZXJhdG9yIC8gc2lkZUNvdW50RGVub21pbmF0b3I7XHJcbiAgICAgICAgdmFyIGludGVyaW9yQW5nbGVEZWdyZWVzID0gKDE4MCAqIChkZWNpbWFsU2lkZXMgLSAyKSkgLyBkZWNpbWFsU2lkZXM7XHJcbiAgICAgICAgdmFyIGludGVyaW9yQW5nbGUgPSBNYXRoLlBJIC0gTWF0aC5QSSAqIGludGVyaW9yQW5nbGVEZWdyZWVzIC8gMTgwOyAvLyBjb252ZXJ0IHRvIHJhZGlhbnNcclxuICAgICAgICBjLnNhdmUoKTtcclxuICAgICAgICBjLmJlZ2luUGF0aCgpO1xyXG4gICAgICAgIGMudHJhbnNsYXRlKHN0YXJ0WCwgc3RhcnRZKTtcclxuICAgICAgICBjLm1vdmVUbygwLDApO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc2lkZUNvdW50OyBpKyspIHtcclxuICAgICAgICAgICAgYy5saW5lVG8oc2lkZUxlbmd0aCwwKTtcclxuICAgICAgICAgICAgYy50cmFuc2xhdGUoc2lkZUxlbmd0aCwwKTtcclxuICAgICAgICAgICAgYy5yb3RhdGUoaW50ZXJpb3JBbmdsZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vYy5zdHJva2UoKTtcclxuICAgICAgICBjLmZpbGwoKTtcclxuICAgICAgICBjLnJlc3RvcmUoKTtcclxuXHJcbiAgICB9O1xyXG5cclxuICAgIHBKUy5mbi52ZW5kb3JzLmV4cG9ydEltZyA9IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgd2luZG93Lm9wZW4ocEpTLmNhbnZhcy5lbC50b0RhdGFVUkwoJ2ltYWdlL3BuZycpLCAnX2JsYW5rJyk7XHJcbiAgICB9O1xyXG5cclxuXHJcbiAgICBwSlMuZm4udmVuZG9ycy5sb2FkSW1nID0gZnVuY3Rpb24odHlwZSl7XHJcblxyXG4gICAgICAgIHBKUy50bXAuaW1nX2Vycm9yID0gdW5kZWZpbmVkO1xyXG5cclxuICAgICAgICBpZihwSlMucGFydGljbGVzLnNoYXBlLmltYWdlLnNyYyAhPSAnJyl7XHJcblxyXG4gICAgICAgICAgICBpZih0eXBlID09ICdzdmcnKXtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcbiAgICAgICAgICAgICAgICB4aHIub3BlbignR0VUJywgcEpTLnBhcnRpY2xlcy5zaGFwZS5pbWFnZS5zcmMpO1xyXG4gICAgICAgICAgICAgICAgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoeGhyLnJlYWR5U3RhdGUgPT0gNCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKHhoci5zdGF0dXMgPT0gMjAwKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBKUy50bXAuc291cmNlX3N2ZyA9IGRhdGEuY3VycmVudFRhcmdldC5yZXNwb25zZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBKUy5mbi52ZW5kb3JzLmNoZWNrQmVmb3JlRHJhdygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFcnJvciBwSlMgLSBJbWFnZSBub3QgZm91bmQnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBKUy50bXAuaW1nX2Vycm9yID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHhoci5zZW5kKCk7XHJcblxyXG4gICAgICAgICAgICB9ZWxzZXtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgaW1nID0gbmV3IEltYWdlKCk7XHJcbiAgICAgICAgICAgICAgICBpbWcuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICAgICAgcEpTLnRtcC5pbWdfb2JqID0gaW1nO1xyXG4gICAgICAgICAgICAgICAgICAgIHBKUy5mbi52ZW5kb3JzLmNoZWNrQmVmb3JlRHJhdygpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBpbWcuc3JjID0gcEpTLnBhcnRpY2xlcy5zaGFwZS5pbWFnZS5zcmM7XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnRXJyb3IgcEpTIC0gTm8gaW1hZ2Uuc3JjJyk7XHJcbiAgICAgICAgICAgIHBKUy50bXAuaW1nX2Vycm9yID0gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfTtcclxuXHJcblxyXG4gICAgcEpTLmZuLnZlbmRvcnMuZHJhdyA9IGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgICAgIGlmKHBKUy5wYXJ0aWNsZXMuc2hhcGUudHlwZSA9PSAnaW1hZ2UnKXtcclxuXHJcbiAgICAgICAgICAgIGlmKHBKUy50bXAuaW1nX3R5cGUgPT0gJ3N2Zycpe1xyXG5cclxuICAgICAgICAgICAgICAgIGlmKHBKUy50bXAuY291bnRfc3ZnID49IHBKUy5wYXJ0aWNsZXMubnVtYmVyLnZhbHVlKXtcclxuICAgICAgICAgICAgICAgICAgICBwSlMuZm4ucGFydGljbGVzRHJhdygpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKCFwSlMucGFydGljbGVzLm1vdmUuZW5hYmxlKSBjYW5jZWxSZXF1ZXN0QW5pbUZyYW1lKHBKUy5mbi5kcmF3QW5pbUZyYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHBKUy5mbi5kcmF3QW5pbUZyYW1lID0gcmVxdWVzdEFuaW1GcmFtZShwSlMuZm4udmVuZG9ycy5kcmF3KTtcclxuICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coJ3N0aWxsIGxvYWRpbmcuLi4nKTtcclxuICAgICAgICAgICAgICAgICAgICBpZighcEpTLnRtcC5pbWdfZXJyb3IpIHBKUy5mbi5kcmF3QW5pbUZyYW1lID0gcmVxdWVzdEFuaW1GcmFtZShwSlMuZm4udmVuZG9ycy5kcmF3KTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH1lbHNle1xyXG5cclxuICAgICAgICAgICAgICAgIGlmKHBKUy50bXAuaW1nX29iaiAhPSB1bmRlZmluZWQpe1xyXG4gICAgICAgICAgICAgICAgICAgIHBKUy5mbi5wYXJ0aWNsZXNEcmF3KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoIXBKUy5wYXJ0aWNsZXMubW92ZS5lbmFibGUpIGNhbmNlbFJlcXVlc3RBbmltRnJhbWUocEpTLmZuLmRyYXdBbmltRnJhbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGVsc2UgcEpTLmZuLmRyYXdBbmltRnJhbWUgPSByZXF1ZXN0QW5pbUZyYW1lKHBKUy5mbi52ZW5kb3JzLmRyYXcpO1xyXG4gICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoIXBKUy50bXAuaW1nX2Vycm9yKSBwSlMuZm4uZHJhd0FuaW1GcmFtZSA9IHJlcXVlc3RBbmltRnJhbWUocEpTLmZuLnZlbmRvcnMuZHJhdyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBwSlMuZm4ucGFydGljbGVzRHJhdygpO1xyXG4gICAgICAgICAgICBpZighcEpTLnBhcnRpY2xlcy5tb3ZlLmVuYWJsZSkgY2FuY2VsUmVxdWVzdEFuaW1GcmFtZShwSlMuZm4uZHJhd0FuaW1GcmFtZSk7XHJcbiAgICAgICAgICAgIGVsc2UgcEpTLmZuLmRyYXdBbmltRnJhbWUgPSByZXF1ZXN0QW5pbUZyYW1lKHBKUy5mbi52ZW5kb3JzLmRyYXcpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9O1xyXG5cclxuXHJcbiAgICBwSlMuZm4udmVuZG9ycy5jaGVja0JlZm9yZURyYXcgPSBmdW5jdGlvbigpe1xyXG5cclxuICAgICAgICAvLyBpZiBzaGFwZSBpcyBpbWFnZVxyXG4gICAgICAgIGlmKHBKUy5wYXJ0aWNsZXMuc2hhcGUudHlwZSA9PSAnaW1hZ2UnKXtcclxuXHJcbiAgICAgICAgICAgIGlmKHBKUy50bXAuaW1nX3R5cGUgPT0gJ3N2ZycgJiYgcEpTLnRtcC5zb3VyY2Vfc3ZnID09IHVuZGVmaW5lZCl7XHJcbiAgICAgICAgICAgICAgICBwSlMudG1wLmNoZWNrQW5pbUZyYW1lID0gcmVxdWVzdEFuaW1GcmFtZShjaGVjayk7XHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZygnaW1hZ2VzIGxvYWRlZCEgY2FuY2VsIGNoZWNrJyk7XHJcbiAgICAgICAgICAgICAgICBjYW5jZWxSZXF1ZXN0QW5pbUZyYW1lKHBKUy50bXAuY2hlY2tBbmltRnJhbWUpO1xyXG4gICAgICAgICAgICAgICAgaWYoIXBKUy50bXAuaW1nX2Vycm9yKXtcclxuICAgICAgICAgICAgICAgICAgICBwSlMuZm4udmVuZG9ycy5pbml0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcEpTLmZuLnZlbmRvcnMuZHJhdygpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgcEpTLmZuLnZlbmRvcnMuaW5pdCgpO1xyXG4gICAgICAgICAgICBwSlMuZm4udmVuZG9ycy5kcmF3KCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH07XHJcblxyXG5cclxuICAgIHBKUy5mbi52ZW5kb3JzLmluaXQgPSBmdW5jdGlvbigpe1xyXG5cclxuICAgICAgICAvKiBpbml0IGNhbnZhcyArIHBhcnRpY2xlcyAqL1xyXG4gICAgICAgIHBKUy5mbi5yZXRpbmFJbml0KCk7XHJcbiAgICAgICAgcEpTLmZuLmNhbnZhc0luaXQoKTtcclxuICAgICAgICBwSlMuZm4uY2FudmFzU2l6ZSgpO1xyXG4gICAgICAgIHBKUy5mbi5jYW52YXNQYWludCgpO1xyXG4gICAgICAgIHBKUy5mbi5wYXJ0aWNsZXNDcmVhdGUoKTtcclxuICAgICAgICBwSlMuZm4udmVuZG9ycy5kZW5zaXR5QXV0b1BhcnRpY2xlcygpO1xyXG5cclxuICAgICAgICAvKiBwYXJ0aWNsZXMubGluZV9saW5rZWQgLSBjb252ZXJ0IGhleCBjb2xvcnMgdG8gcmdiICovXHJcbiAgICAgICAgcEpTLnBhcnRpY2xlcy5saW5lX2xpbmtlZC5jb2xvcl9yZ2JfbGluZSA9IGhleFRvUmdiKHBKUy5wYXJ0aWNsZXMubGluZV9saW5rZWQuY29sb3IpO1xyXG5cclxuICAgIH07XHJcblxyXG5cclxuICAgIHBKUy5mbi52ZW5kb3JzLnN0YXJ0ID0gZnVuY3Rpb24oKXtcclxuXHJcbiAgICAgICAgaWYoaXNJbkFycmF5KCdpbWFnZScsIHBKUy5wYXJ0aWNsZXMuc2hhcGUudHlwZSkpe1xyXG4gICAgICAgICAgICBwSlMudG1wLmltZ190eXBlID0gcEpTLnBhcnRpY2xlcy5zaGFwZS5pbWFnZS5zcmMuc3Vic3RyKHBKUy5wYXJ0aWNsZXMuc2hhcGUuaW1hZ2Uuc3JjLmxlbmd0aCAtIDMpO1xyXG4gICAgICAgICAgICBwSlMuZm4udmVuZG9ycy5sb2FkSW1nKHBKUy50bXAuaW1nX3R5cGUpO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBwSlMuZm4udmVuZG9ycy5jaGVja0JlZm9yZURyYXcoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfTtcclxuXHJcblxyXG5cclxuXHJcbiAgICAvKiAtLS0tLS0tLS0tIHBKUyAtIHN0YXJ0IC0tLS0tLS0tLS0tLSAqL1xyXG5cclxuXHJcbiAgICBwSlMuZm4udmVuZG9ycy5ldmVudHNMaXN0ZW5lcnMoKTtcclxuXHJcbiAgICBwSlMuZm4udmVuZG9ycy5zdGFydCgpO1xyXG5cclxuXHJcblxyXG59O1xyXG5cclxuLyogLS0tLS0tLS0tLSBnbG9iYWwgZnVuY3Rpb25zIC0gdmVuZG9ycyAtLS0tLS0tLS0tLS0gKi9cclxuXHJcbk9iamVjdC5kZWVwRXh0ZW5kID0gZnVuY3Rpb24oZGVzdGluYXRpb24sIHNvdXJjZSkge1xyXG4gICAgZm9yICh2YXIgcHJvcGVydHkgaW4gc291cmNlKSB7XHJcbiAgICAgICAgaWYgKHNvdXJjZVtwcm9wZXJ0eV0gJiYgc291cmNlW3Byb3BlcnR5XS5jb25zdHJ1Y3RvciAmJlxyXG4gICAgICAgICAgICBzb3VyY2VbcHJvcGVydHldLmNvbnN0cnVjdG9yID09PSBPYmplY3QpIHtcclxuICAgICAgICAgICAgZGVzdGluYXRpb25bcHJvcGVydHldID0gZGVzdGluYXRpb25bcHJvcGVydHldIHx8IHt9O1xyXG4gICAgICAgICAgICBhcmd1bWVudHMuY2FsbGVlKGRlc3RpbmF0aW9uW3Byb3BlcnR5XSwgc291cmNlW3Byb3BlcnR5XSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZGVzdGluYXRpb25bcHJvcGVydHldID0gc291cmNlW3Byb3BlcnR5XTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZGVzdGluYXRpb247XHJcbn07XHJcblxyXG53aW5kb3cucmVxdWVzdEFuaW1GcmFtZSA9IChmdW5jdGlvbigpe1xyXG4gICAgcmV0dXJuICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8XHJcbiAgICAgICAgd2luZG93LndlYmtpdFJlcXVlc3RBbmltYXRpb25GcmFtZSB8fFxyXG4gICAgICAgIHdpbmRvdy5tb3pSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgICAgfHxcclxuICAgICAgICB3aW5kb3cub1JlcXVlc3RBbmltYXRpb25GcmFtZSAgICAgIHx8XHJcbiAgICAgICAgd2luZG93Lm1zUmVxdWVzdEFuaW1hdGlvbkZyYW1lICAgICB8fFxyXG4gICAgICAgIGZ1bmN0aW9uKGNhbGxiYWNrKXtcclxuICAgICAgICAgICAgd2luZG93LnNldFRpbWVvdXQoY2FsbGJhY2ssIDEwMDAgLyA2MCk7XHJcbiAgICAgICAgfTtcclxufSkoKTtcclxuXHJcbndpbmRvdy5jYW5jZWxSZXF1ZXN0QW5pbUZyYW1lID0gKCBmdW5jdGlvbigpIHtcclxuICAgIHJldHVybiB3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUgICAgICAgICB8fFxyXG4gICAgICAgIHdpbmRvdy53ZWJraXRDYW5jZWxSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHxcclxuICAgICAgICB3aW5kb3cubW96Q2FuY2VsUmVxdWVzdEFuaW1hdGlvbkZyYW1lICAgIHx8XHJcbiAgICAgICAgd2luZG93Lm9DYW5jZWxSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgICAgICB8fFxyXG4gICAgICAgIHdpbmRvdy5tc0NhbmNlbFJlcXVlc3RBbmltYXRpb25GcmFtZSAgICAgfHxcclxuICAgICAgICBjbGVhclRpbWVvdXRcclxufSApKCk7XHJcblxyXG5mdW5jdGlvbiBoZXhUb1JnYihoZXgpe1xyXG4gICAgLy8gQnkgVGltIERvd24gLSBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS81NjI0MTM5LzM0OTM2NTBcclxuICAgIC8vIEV4cGFuZCBzaG9ydGhhbmQgZm9ybSAoZS5nLiBcIjAzRlwiKSB0byBmdWxsIGZvcm0gKGUuZy4gXCIwMDMzRkZcIilcclxuICAgIHZhciBzaG9ydGhhbmRSZWdleCA9IC9eIz8oW2EtZlxcZF0pKFthLWZcXGRdKShbYS1mXFxkXSkkL2k7XHJcbiAgICBoZXggPSBoZXgucmVwbGFjZShzaG9ydGhhbmRSZWdleCwgZnVuY3Rpb24obSwgciwgZywgYikge1xyXG4gICAgICAgIHJldHVybiByICsgciArIGcgKyBnICsgYiArIGI7XHJcbiAgICB9KTtcclxuICAgIHZhciByZXN1bHQgPSAvXiM/KFthLWZcXGRdezJ9KShbYS1mXFxkXXsyfSkoW2EtZlxcZF17Mn0pJC9pLmV4ZWMoaGV4KTtcclxuICAgIHJldHVybiByZXN1bHQgPyB7XHJcbiAgICAgICAgcjogcGFyc2VJbnQocmVzdWx0WzFdLCAxNiksXHJcbiAgICAgICAgZzogcGFyc2VJbnQocmVzdWx0WzJdLCAxNiksXHJcbiAgICAgICAgYjogcGFyc2VJbnQocmVzdWx0WzNdLCAxNilcclxuICAgIH0gOiBudWxsO1xyXG59O1xyXG5cclxuZnVuY3Rpb24gY2xhbXAobnVtYmVyLCBtaW4sIG1heCkge1xyXG4gICAgcmV0dXJuIE1hdGgubWluKE1hdGgubWF4KG51bWJlciwgbWluKSwgbWF4KTtcclxufTtcclxuXHJcbmZ1bmN0aW9uIGlzSW5BcnJheSh2YWx1ZSwgYXJyYXkpIHtcclxuICAgIHJldHVybiBhcnJheS5pbmRleE9mKHZhbHVlKSA+IC0xO1xyXG59XHJcblxyXG5cclxuLyogLS0tLS0tLS0tLSBwYXJ0aWNsZXMuanMgZnVuY3Rpb25zIC0gc3RhcnQgLS0tLS0tLS0tLS0tICovXHJcblxyXG53aW5kb3cucEpTRG9tID0gW107XHJcblxyXG53aW5kb3cucGFydGljbGVzSlMgPSBmdW5jdGlvbih0YWdfaWQsIHBhcmFtcyl7XHJcblxyXG4gICAgLy9jb25zb2xlLmxvZyhwYXJhbXMpO1xyXG5cclxuICAgIC8qIG5vIHN0cmluZyBpZD8gc28gaXQncyBvYmplY3QgcGFyYW1zLCBhbmQgc2V0IHRoZSBpZCB3aXRoIGRlZmF1bHQgaWQgKi9cclxuICAgIGlmKHR5cGVvZih0YWdfaWQpICE9ICdzdHJpbmcnKXtcclxuICAgICAgICBwYXJhbXMgPSB0YWdfaWQ7XHJcbiAgICAgICAgdGFnX2lkID0gJ3BhcnRpY2xlcy1qcyc7XHJcbiAgICB9XHJcblxyXG4gICAgLyogbm8gaWQ/IHNldCB0aGUgaWQgdG8gZGVmYXVsdCBpZCAqL1xyXG4gICAgaWYoIXRhZ19pZCl7XHJcbiAgICAgICAgdGFnX2lkID0gJ3BhcnRpY2xlcy1qcyc7XHJcbiAgICB9XHJcblxyXG4gICAgLyogcEpTIGVsZW1lbnRzICovXHJcbiAgICB2YXIgcEpTX3RhZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRhZ19pZCksXHJcbiAgICAgICAgcEpTX2NhbnZhc19jbGFzcyA9ICdwYXJ0aWNsZXMtanMtY2FudmFzLWVsJyxcclxuICAgICAgICBleGlzdF9jYW52YXMgPSBwSlNfdGFnLmdldEVsZW1lbnRzQnlDbGFzc05hbWUocEpTX2NhbnZhc19jbGFzcyk7XHJcblxyXG4gICAgLyogcmVtb3ZlIGNhbnZhcyBpZiBleGlzdHMgaW50byB0aGUgcEpTIHRhcmdldCB0YWcgKi9cclxuICAgIGlmKGV4aXN0X2NhbnZhcy5sZW5ndGgpe1xyXG4gICAgICAgIHdoaWxlKGV4aXN0X2NhbnZhcy5sZW5ndGggPiAwKXtcclxuICAgICAgICAgICAgcEpTX3RhZy5yZW1vdmVDaGlsZChleGlzdF9jYW52YXNbMF0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKiBjcmVhdGUgY2FudmFzIGVsZW1lbnQgKi9cclxuICAgIHZhciBjYW52YXNfZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcclxuICAgIGNhbnZhc19lbC5jbGFzc05hbWUgPSBwSlNfY2FudmFzX2NsYXNzO1xyXG5cclxuICAgIC8qIHNldCBzaXplIGNhbnZhcyAqL1xyXG4gICAgY2FudmFzX2VsLnN0eWxlLndpZHRoID0gXCIxMDAlXCI7XHJcbiAgICBjYW52YXNfZWwuc3R5bGUuaGVpZ2h0ID0gXCIxMDAlXCI7XHJcblxyXG4gICAgLyogYXBwZW5kIGNhbnZhcyAqL1xyXG4gICAgdmFyIGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRhZ19pZCkuYXBwZW5kQ2hpbGQoY2FudmFzX2VsKTtcclxuXHJcbiAgICAvKiBsYXVuY2ggcGFydGljbGUuanMgKi9cclxuICAgIGlmKGNhbnZhcyAhPSBudWxsKXtcclxuICAgICAgICBwSlNEb20ucHVzaChuZXcgcEpTKHRhZ19pZCwgcGFyYW1zKSk7XHJcbiAgICB9XHJcblxyXG59O1xyXG5cclxud2luZG93LnBhcnRpY2xlc0pTLmxvYWQgPSBmdW5jdGlvbih0YWdfaWQsIHBhdGhfY29uZmlnX2pzb24sIGNhbGxiYWNrKXtcclxuXHJcbiAgICAvKiBsb2FkIGpzb24gY29uZmlnICovXHJcbiAgICB2YXIgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcbiAgICB4aHIub3BlbignR0VUJywgcGF0aF9jb25maWdfanNvbik7XHJcbiAgICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICBpZih4aHIucmVhZHlTdGF0ZSA9PSA0KXtcclxuICAgICAgICAgICAgaWYoeGhyLnN0YXR1cyA9PSAyMDApe1xyXG4gICAgICAgICAgICAgICAgdmFyIHBhcmFtcyA9IEpTT04ucGFyc2UoZGF0YS5jdXJyZW50VGFyZ2V0LnJlc3BvbnNlKTtcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5wYXJ0aWNsZXNKUyh0YWdfaWQsIHBhcmFtcyk7XHJcbiAgICAgICAgICAgICAgICBpZihjYWxsYmFjaykgY2FsbGJhY2soKTtcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnRXJyb3IgcEpTIC0gWE1MSHR0cFJlcXVlc3Qgc3RhdHVzOiAnK3hoci5zdGF0dXMpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0Vycm9yIHBKUyAtIEZpbGUgY29uZmlnIG5vdCBmb3VuZCcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIHhoci5zZW5kKCk7XHJcblxyXG59O1xyXG5cclxucGFydGljbGVzSlMoXCJwYXJ0aWNsZXMtanNcIiwge1xyXG4gICAgXCJwYXJ0aWNsZXNcIjoge1xyXG4gICAgICAgIFwibnVtYmVyXCI6IHtcclxuICAgICAgICAgICAgXCJ2YWx1ZVwiOiAxNjAsXHJcbiAgICAgICAgICAgIFwiZGVuc2l0eVwiOiB7XHJcbiAgICAgICAgICAgICAgICBcImVuYWJsZVwiOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgXCJ2YWx1ZV9hcmVhXCI6IDgwMFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBcImNvbG9yXCI6IHtcclxuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBcIiNmZmZmZmZcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJzaGFwZVwiOiB7XHJcbiAgICAgICAgICAgIFwidHlwZVwiOiBcImNpcmNsZVwiLFxyXG4gICAgICAgICAgICBcInN0cm9rZVwiOiB7XHJcbiAgICAgICAgICAgICAgICBcIndpZHRoXCI6IDAsXHJcbiAgICAgICAgICAgICAgICBcImNvbG9yXCI6IFwiIzAwMDAwMFwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFwicG9seWdvblwiOiB7XHJcbiAgICAgICAgICAgICAgICBcIm5iX3NpZGVzXCI6IDVcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCJpbWFnZVwiOiB7XHJcbiAgICAgICAgICAgICAgICBcInNyY1wiOiBcImltZy9naXRodWIuc3ZnXCIsXHJcbiAgICAgICAgICAgICAgICBcIndpZHRoXCI6IDEwMCxcclxuICAgICAgICAgICAgICAgIFwiaGVpZ2h0XCI6IDEwMFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBcIm9wYWNpdHlcIjoge1xyXG4gICAgICAgICAgICBcInZhbHVlXCI6IDEsXHJcbiAgICAgICAgICAgIFwicmFuZG9tXCI6IHRydWUsXHJcbiAgICAgICAgICAgIFwiYW5pbVwiOiB7XHJcbiAgICAgICAgICAgICAgICBcImVuYWJsZVwiOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgXCJzcGVlZFwiOiAxLFxyXG4gICAgICAgICAgICAgICAgXCJvcGFjaXR5X21pblwiOiAwLFxyXG4gICAgICAgICAgICAgICAgXCJzeW5jXCI6IGZhbHNlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIFwic2l6ZVwiOiB7XHJcbiAgICAgICAgICAgIFwidmFsdWVcIjogMyxcclxuICAgICAgICAgICAgXCJyYW5kb21cIjogdHJ1ZSxcclxuICAgICAgICAgICAgXCJhbmltXCI6IHtcclxuICAgICAgICAgICAgICAgIFwiZW5hYmxlXCI6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBcInNwZWVkXCI6IDQsXHJcbiAgICAgICAgICAgICAgICBcInNpemVfbWluXCI6IDAuMyxcclxuICAgICAgICAgICAgICAgIFwic3luY1wiOiBmYWxzZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBcImxpbmVfbGlua2VkXCI6IHtcclxuICAgICAgICAgICAgXCJlbmFibGVcIjogdHJ1ZSxcclxuICAgICAgICAgICAgXCJkaXN0YW5jZVwiOiAxMDAuMDE0MTY4NjczODk1NTEsXHJcbiAgICAgICAgICAgIFwiY29sb3JcIjogXCIjZDQwYTBhXCIsXHJcbiAgICAgICAgICAgIFwib3BhY2l0eVwiOiAwLjM2MzAxMzY0NDU3ODA3NTMsXHJcbiAgICAgICAgICAgIFwid2lkdGhcIjogMVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJtb3ZlXCI6IHtcclxuICAgICAgICAgICAgXCJlbmFibGVcIjogdHJ1ZSxcclxuICAgICAgICAgICAgXCJzcGVlZFwiOiAzLjMzMzgwNTYyMjQ2MzE4NCxcclxuICAgICAgICAgICAgXCJkaXJlY3Rpb25cIjogXCJub25lXCIsXHJcbiAgICAgICAgICAgIFwicmFuZG9tXCI6IHRydWUsXHJcbiAgICAgICAgICAgIFwic3RyYWlnaHRcIjogZmFsc2UsXHJcbiAgICAgICAgICAgIFwib3V0X21vZGVcIjogXCJvdXRcIixcclxuICAgICAgICAgICAgXCJib3VuY2VcIjogZmFsc2UsXHJcbiAgICAgICAgICAgIFwiYXR0cmFjdFwiOiB7XHJcbiAgICAgICAgICAgICAgICBcImVuYWJsZVwiOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIFwicm90YXRlWFwiOiA2MDAsXHJcbiAgICAgICAgICAgICAgICBcInJvdGF0ZVlcIjogNjAwXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgXCJpbnRlcmFjdGl2aXR5XCI6IHtcclxuICAgICAgICBcImRldGVjdF9vblwiOiBcIndpbmRvd1wiLFxyXG4gICAgICAgIFwiZXZlbnRzXCI6IHtcclxuICAgICAgICAgICAgXCJvbmhvdmVyXCI6IHtcclxuICAgICAgICAgICAgICAgIFwiZW5hYmxlXCI6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBcIm1vZGVcIjogXCJidWJibGVcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBcIm9uY2xpY2tcIjoge1xyXG4gICAgICAgICAgICAgICAgXCJlbmFibGVcIjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBcIm1vZGVcIjogXCJyZXB1bHNlXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCJyZXNpemVcIjogdHJ1ZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJtb2Rlc1wiOiB7XHJcbiAgICAgICAgICAgIFwiZ3JhYlwiOiB7XHJcbiAgICAgICAgICAgICAgICBcImRpc3RhbmNlXCI6IDQwMCxcclxuICAgICAgICAgICAgICAgIFwibGluZV9saW5rZWRcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgIFwib3BhY2l0eVwiOiAxXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFwiYnViYmxlXCI6IHtcclxuICAgICAgICAgICAgICAgIFwiZGlzdGFuY2VcIjogMjUwLFxyXG4gICAgICAgICAgICAgICAgXCJzaXplXCI6IDAsXHJcbiAgICAgICAgICAgICAgICBcImR1cmF0aW9uXCI6IDIsXHJcbiAgICAgICAgICAgICAgICBcIm9wYWNpdHlcIjogMCxcclxuICAgICAgICAgICAgICAgIFwic3BlZWRcIjogM1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBcInJlcHVsc2VcIjoge1xyXG4gICAgICAgICAgICAgICAgXCJkaXN0YW5jZVwiOiA0MDAsXHJcbiAgICAgICAgICAgICAgICBcImR1cmF0aW9uXCI6IDAuNFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBcInB1c2hcIjoge1xyXG4gICAgICAgICAgICAgICAgXCJwYXJ0aWNsZXNfbmJcIjogNFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBcInJlbW92ZVwiOiB7XHJcbiAgICAgICAgICAgICAgICBcInBhcnRpY2xlc19uYlwiOiAyXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgXCJyZXRpbmFfZGV0ZWN0XCI6IHRydWVcclxufSk7XHJcblxyXG5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKTtcclxuXHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Fzc2V0cy9qcy9wYXJ0aWNsZXMuanMiXSwic291cmNlUm9vdCI6IiJ9