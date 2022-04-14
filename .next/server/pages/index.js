(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 5155:
/***/ ((module) => {

// Exports
module.exports = {
	"testimonial": "Testimonial_testimonial__y8Y_V"
};


/***/ }),

/***/ 9709:
/***/ ((module) => {

// Exports
module.exports = {
	"clientLogos": "ClientLogos_clientLogos__IGS42",
	"clientLogos__title": "ClientLogos_clientLogos__title__6C2eH",
	"clientLogos__subtitle": "ClientLogos_clientLogos__subtitle__G6WbG",
	"clientLogos__wrapper": "ClientLogos_clientLogos__wrapper__NpqXj",
	"clientLogos__wrapper__logo": "ClientLogos_clientLogos__wrapper__logo__XZRNE"
};


/***/ }),

/***/ 8768:
/***/ ((module) => {

// Exports
module.exports = {
	"deptPost": "DeptPost_deptPost__k4onN",
	"deptPost__source": "DeptPost_deptPost__source__BoQoC",
	"deptPost__title": "DeptPost_deptPost__title__etPhL",
	"deptPost__viewCase": "DeptPost_deptPost__viewCase__c85x3"
};


/***/ }),

/***/ 5388:
/***/ ((module) => {

// Exports
module.exports = {
	"filter": "Filter_filter__2Ey0R",
	"filter__form": "Filter_filter__form__INYze"
};


/***/ }),

/***/ 1588:
/***/ ((module) => {

// Exports
module.exports = {
	"header": "Header_header__xOsHa",
	"header__deptLogo": "Header_header__deptLogo___7HV0",
	"header__menuText": "Header_header__menuText__Uj3Zo",
	"header__menuIcon": "Header_header__menuIcon__x80jT"
};


/***/ }),

/***/ 9675:
/***/ ((module) => {

// Exports
module.exports = {
	"contentSectionDouble": "ContentSection_contentSectionDouble__URK2m",
	"contentSectionTriple": "ContentSection_contentSectionTriple__StiWR",
	"contentSectionTriple__twoPosts": "ContentSection_contentSectionTriple__twoPosts__G9NKT"
};


/***/ }),

/***/ 3711:
/***/ ((module) => {

// Exports
module.exports = {
	"wrapper": "Footer_wrapper__C49wX",
	"footer": "Footer_footer__IdlJm",
	"footer__firstRow": "Footer_footer__firstRow__dohRw",
	"footer__firstRow__deptLogo": "Footer_footer__firstRow__deptLogo__ETiDQ",
	"footer__firstRow__menu": "Footer_footer__firstRow__menu__S9rwK",
	"footer__firstRow__socialIcons": "Footer_footer__firstRow__socialIcons__6Eg8c",
	"scrollToTop": "Footer_scrollToTop__v99Nl",
	"footer__secondRow": "Footer_footer__secondRow__7fPRv"
};


/***/ }),

/***/ 8037:
/***/ ((module) => {

// Exports
module.exports = {
	"landingSection": "LandingSection_landingSection__5C1NM",
	"landingSection__title": "LandingSection_landingSection__title__5t0WV",
	"landingSection__viewCaseButton": "LandingSection_landingSection__viewCaseButton__Z2_4b"
};


/***/ }),

/***/ 4061:
/***/ ((module) => {

// Exports
module.exports = {
	"questionFormSection": "QuestionFormSection_questionFormSection__E4dL0",
	"questionFormSection__title": "QuestionFormSection_questionFormSection__title__k1Z_R",
	"questionFormSection__formWithoutSubmitButton": "QuestionFormSection_questionFormSection__formWithoutSubmitButton__ntGk5",
	"questionFormSection__form__labelFieldWrapper": "QuestionFormSection_questionFormSection__form__labelFieldWrapper__R6UMz",
	"questionFormSection__form__labelFieldWrapper__fieldError": "QuestionFormSection_questionFormSection__form__labelFieldWrapper__fieldError__e9Zb3",
	"questionFormSection__form__labelFieldWrapper__field": "QuestionFormSection_questionFormSection__form__labelFieldWrapper__field__07wFf",
	"questionFormSection__form": "QuestionFormSection_questionFormSection__form__lUT33",
	"questionFormSection__form__submitButton": "QuestionFormSection_questionFormSection__form__submitButton__KtymI"
};


/***/ }),

/***/ 9399:
/***/ ((module) => {

// Exports
module.exports = {
	"contentWrapper": "Home_contentWrapper__mXVdJ",
	"filteredResults": "Home_filteredResults__4PD1W",
	"noPostsMessage": "Home_noPostsMessage___0afR"
};


/***/ }),

/***/ 785:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./components/molecules/ClientLogos/ClientLogos.module.css
var ClientLogos_module = __webpack_require__(9709);
var ClientLogos_module_default = /*#__PURE__*/__webpack_require__.n(ClientLogos_module);
;// CONCATENATED MODULE: ./components/molecules/ClientLogos/ClientLogos.tsx


const ClientLogos = ({ logos , clients_description ,  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (ClientLogos_module_default()).clientLogos,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                className: (ClientLogos_module_default()).clientLogos__title,
                children: " CLIENTS "
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                className: (ClientLogos_module_default()).clientLogos__subtitle,
                children: clients_description
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (ClientLogos_module_default()).clientLogos__wrapper,
                children: logos.map((logo)=>/*#__PURE__*/ jsx_runtime_.jsx("img", {
                        width: "100%",
                        className: (ClientLogos_module_default()).clientLogos__wrapper__logo,
                        src: logo.url,
                        alt: "company logo"
                    }, logo.url)
                )
            })
        ]
    });
};

// EXTERNAL MODULE: ./components/molecules/DeptPost/DeptPost.module.css
var DeptPost_module = __webpack_require__(8768);
var DeptPost_module_default = /*#__PURE__*/__webpack_require__.n(DeptPost_module);
;// CONCATENATED MODULE: ./public/dept_icons/icon-dropdown.svg
var _path;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var SvgIconDropdown = function SvgIconDropdown(props) {
  return /*#__PURE__*/external_react_.createElement("svg", _extends({
    width: 9,
    height: 7,
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path || (_path = /*#__PURE__*/external_react_.createElement("path", {
    d: "m0 0 4.505 7L9 0z",
    fillRule: "evenodd"
  })));
};

/* harmony default export */ const icon_dropdown = (SvgIconDropdown);
;// CONCATENATED MODULE: ./components/molecules/DeptPost/DeptPost.tsx



const DeptPost = ({ post  })=>{
    var ref;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (DeptPost_module_default()).deptPost,
        children: [
            post.cover_image && /*#__PURE__*/ jsx_runtime_.jsx("img", {
                width: "100%",
                src: (ref = post.cover_image[0]) === null || ref === void 0 ? void 0 : ref.url,
                alt: post.title
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                className: (DeptPost_module_default()).deptPost__source,
                children: [
                    " ",
                    post.source.toUpperCase(),
                    " "
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                className: (DeptPost_module_default()).deptPost__title,
                children: [
                    " ",
                    post.title,
                    " "
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                href: "#",
                className: (DeptPost_module_default()).deptPost__viewCase,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(icon_dropdown, {
                        fill: "#1A18F7"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        children: " VIEW CASE "
                    })
                ]
            })
        ]
    });
};

// EXTERNAL MODULE: ./components/molecules/Filter/Filter.module.css
var Filter_module = __webpack_require__(5388);
var Filter_module_default = /*#__PURE__*/__webpack_require__.n(Filter_module);
;// CONCATENATED MODULE: ./components/molecules/Filter/Filter.tsx


const Filter = ({ handleOnCategoryChange , handleOnIndustryChange , categories , industries ,  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: (Filter_module_default()).filter,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
            className: (Filter_module_default()).filter__form,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                    children: " Show me "
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("select", {
                    name: "categories",
                    onChange: (e)=>handleOnCategoryChange(e.target.value)
                    ,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("option", {
                            value: "all_work",
                            children: " all work "
                        }),
                        categories.map((category)=>/*#__PURE__*/ jsx_runtime_.jsx("option", {
                                value: category.name,
                                children: category.name
                            }, category.name)
                        )
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                    children: " in "
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("select", {
                    name: "industries",
                    onChange: (e)=>handleOnIndustryChange(e.target.value)
                    ,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("option", {
                            value: "all_industries",
                            children: " all industries "
                        }),
                        industries.map((industry)=>/*#__PURE__*/ jsx_runtime_.jsx("option", {
                                value: industry.name,
                                children: industry.name
                            }, industry.name)
                        )
                    ]
                })
            ]
        })
    });
};

// EXTERNAL MODULE: ./components/atoms/Testimonial/Testimonial.module.css
var Testimonial_module = __webpack_require__(5155);
var Testimonial_module_default = /*#__PURE__*/__webpack_require__.n(Testimonial_module);
;// CONCATENATED MODULE: ./components/atoms/Testimonial/Testimonial.tsx


const Testimonial = ({ text  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: (Testimonial_module_default()).testimonial,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h1", {
            children: [
                " ",
                `"${text}"`,
                " "
            ]
        })
    });
};

// EXTERNAL MODULE: ./components/organisms/ContentSection/ContentSection.module.css
var ContentSection_module = __webpack_require__(9675);
var ContentSection_module_default = /*#__PURE__*/__webpack_require__.n(ContentSection_module);
;// CONCATENATED MODULE: ./components/organisms/ContentSection/ContentSection.tsx




const ContentSection = ({ type , posts , textData ,  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            type === "double_post" && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (ContentSection_module_default()).contentSectionDouble,
                children: posts === null || posts === void 0 ? void 0 : posts.map((post)=>/*#__PURE__*/ jsx_runtime_.jsx(DeptPost, {
                        post: post
                    }, post._id)
                )
            }),
            type === "triple_post" && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (ContentSection_module_default()).contentSectionTriple,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (ContentSection_module_default()).contentSectionTriple__twoPosts,
                        children: posts === null || posts === void 0 ? void 0 : posts.map((post)=>/*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                                children: post.cover_image === null && /*#__PURE__*/ jsx_runtime_.jsx(DeptPost, {
                                    post: post
                                }, post._id)
                            })
                        )
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        children: posts === null || posts === void 0 ? void 0 : posts.map((post)=>/*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                                children: post.cover_image !== null && /*#__PURE__*/ jsx_runtime_.jsx(DeptPost, {
                                    post: post
                                }, post._id)
                            })
                        )
                    })
                ]
            }),
            type === "testimonial" && /*#__PURE__*/ jsx_runtime_.jsx(Testimonial, {
                text: textData
            })
        ]
    });
};

// EXTERNAL MODULE: ./components/organisms/Footer/Footer.module.css
var Footer_module = __webpack_require__(3711);
var Footer_module_default = /*#__PURE__*/__webpack_require__.n(Footer_module);
;// CONCATENATED MODULE: ./public/dept_icons/icon-dept.svg
var icon_dept_path;

function icon_dept_extends() { icon_dept_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return icon_dept_extends.apply(this, arguments); }



var SvgIconDept = function SvgIconDept(props) {
  return /*#__PURE__*/external_react_.createElement("svg", icon_dept_extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 173,
    height: 46
  }, props), icon_dept_path || (icon_dept_path = /*#__PURE__*/external_react_.createElement("path", {
    d: "M147.9 46h12.6V10.8H173V0h-37.6v10.8h12.5V46zm-41.5-24.9V9.9h7.2c4.6 0 6.9 1.9 6.9 5.6 0 3.7-2.3 5.6-6.9 5.6h-7.2zM93.9 46h12.6V31h7.5c11.3 0 18.8-4.9 18.8-15.5S125.2 0 114 0H93.9v46zm-43.3 0h34.3V35.7H63.2v-7.8h21.5V18H63.2v-7.7h21.7V0H50.6v46zm-38-10.7V10.7h4c8.8 0 14.3 3.2 14.3 12.3 0 9.1-5.4 12.3-14.3 12.3h-4zM0 46h16.5c15.6 0 26.9-6.2 26.9-23C43.3 6.2 32 0 16.5 0H0v46z"
  })));
};

/* harmony default export */ const icon_dept = (SvgIconDept);
;// CONCATENATED MODULE: ./public/dept_icons/icon-fb.svg
var icon_fb_path;

function icon_fb_extends() { icon_fb_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return icon_fb_extends.apply(this, arguments); }



var SvgIconFb = function SvgIconFb(props) {
  return /*#__PURE__*/external_react_.createElement("svg", icon_fb_extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 23,
    height: 50
  }, props), icon_fb_path || (icon_fb_path = /*#__PURE__*/external_react_.createElement("path", {
    d: "M5 9.684v6.883H0V25h5v25h10V25h7.037s.652-4.051.963-8.463h-8v-5.756c0-.861 1.335-2.018 2.436-2.018H23V0h-7.564C4.719 0 5 8.426 5 9.684z"
  })));
};

/* harmony default export */ const icon_fb = (SvgIconFb);
;// CONCATENATED MODULE: ./public/dept_icons/icon-instagram.svg
var icon_instagram_path;

function icon_instagram_extends() { icon_instagram_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return icon_instagram_extends.apply(this, arguments); }



var SvgIconInstagram = function SvgIconInstagram(props) {
  return /*#__PURE__*/external_react_.createElement("svg", icon_instagram_extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 50,
    height: 50,
    viewBox: "0 0 14 14"
  }, props), icon_instagram_path || (icon_instagram_path = /*#__PURE__*/external_react_.createElement("path", {
    fillRule: "evenodd",
    d: "M13.958 9.885c-.034.746-.153 1.255-.326 1.7-.179.46-.418.851-.807 1.24-.39.389-.78.628-1.24.807-.446.173-.955.291-1.7.325-.747.035-.985.042-2.886.042-1.902 0-2.14-.007-2.887-.042-.745-.034-1.254-.152-1.699-.325a3.427 3.427 0 0 1-1.24-.807 3.425 3.425 0 0 1-.808-1.24c-.173-.445-.291-.954-.325-1.7C.006 9.139-.003 8.901-.003 7c0-1.901.009-2.139.043-2.886.034-.745.152-1.255.325-1.7.179-.46.418-.85.808-1.239.389-.39.779-.629 1.24-.807.445-.174.954-.291 1.699-.327C4.859.008 5.097 0 6.999 0 8.9 0 9.138.008 9.885.041c.745.036 1.254.153 1.7.327.46.178.85.417 1.24.807.389.389.628.779.807 1.239.173.445.292.955.326 1.7.034.747.042.985.042 2.886 0 1.901-.008 2.139-.042 2.885zM6.999 3.504a3.496 3.496 0 1 0 0 6.991 3.496 3.496 0 0 0 0-6.991zm4.253-1.506a.753.753 0 1 0 0 1.507.753.753 0 1 0 0-1.507zM6.998 9.002a2.001 2.001 0 1 1 0-4.003 2.001 2.001 0 0 1 0 4.003z"
  })));
};

/* harmony default export */ const icon_instagram = (SvgIconInstagram);
;// CONCATENATED MODULE: ./public/dept_icons/icon-twitter.svg
var icon_twitter_path;

function icon_twitter_extends() { icon_twitter_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return icon_twitter_extends.apply(this, arguments); }



var SvgIconTwitter = function SvgIconTwitter(props) {
  return /*#__PURE__*/external_react_.createElement("svg", icon_twitter_extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 50,
    height: 50
  }, props), icon_twitter_path || (icon_twitter_path = /*#__PURE__*/external_react_.createElement("path", {
    d: "M49.998 9.35a20.256 20.256 0 0 1-5.891 1.631 10.378 10.378 0 0 0 4.51-5.725 20.57 20.57 0 0 1-6.518 2.516A10.186 10.186 0 0 0 34.613 4.5c-5.666 0-10.257 4.637-10.257 10.352 0 .812.09 1.604.266 2.359-8.523-.432-16.082-4.553-21.14-10.818a10.354 10.354 0 0 0-1.387 5.203c0 3.596 1.812 6.766 4.562 8.619a10.163 10.163 0 0 1-4.646-1.301v.129c0 5.016 3.537 9.201 8.227 10.154a10.36 10.36 0 0 1-2.703.361 9.69 9.69 0 0 1-1.931-.191c1.306 4.117 5.093 7.109 9.58 7.191a20.461 20.461 0 0 1-12.738 4.426c-.828 0-1.644-.053-2.446-.143A28.805 28.805 0 0 0 15.722 45.5c18.868 0 29.182-15.777 29.182-29.461l-.035-1.34a20.616 20.616 0 0 0 5.129-5.349z"
  })));
};

/* harmony default export */ const icon_twitter = (SvgIconTwitter);
;// CONCATENATED MODULE: ./public/dept_icons/icon-scroll-to-top.svg
var _g;

function icon_scroll_to_top_extends() { icon_scroll_to_top_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return icon_scroll_to_top_extends.apply(this, arguments); }



var SvgIconScrollToTop = function SvgIconScrollToTop(props) {
  return /*#__PURE__*/external_react_.createElement("svg", icon_scroll_to_top_extends({
    width: 15,
    height: 32,
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _g || (_g = /*#__PURE__*/external_react_.createElement("g", {
    fillRule: "evenodd"
  }, /*#__PURE__*/external_react_.createElement("path", {
    d: "M6.5 9.5h3v22h-3z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M14.5 11.5 7.493.5.5 11.5z"
  }))));
};

/* harmony default export */ const icon_scroll_to_top = (SvgIconScrollToTop);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
;// CONCATENATED MODULE: ./components/organisms/Footer/Footer.tsx

/* eslint-disable @next/next/no-img-element */ 






const Footer = ()=>{
    const scrollToTop = ()=>{
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (Footer_module_default()).wrapper,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (Footer_module_default()).footer,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (Footer_module_default()).footer__firstRow,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(icon_dept, {
                                className: (Footer_module_default()).footer__firstRow__deptLogo,
                                fill: "white"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                className: (Footer_module_default()).footer__firstRow__menu,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                            href: "#",
                                            children: " WORK "
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                            href: "#",
                                            children: " SERVICE "
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                            href: "#",
                                            children: " STORIES "
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                            href: "#",
                                            children: " ABOUT "
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                            href: "#",
                                            children: " CAREERS "
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                            href: "#",
                                            children: " CONTACT "
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                className: (Footer_module_default()).footer__firstRow__socialIcons,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            href: "#",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(icon_fb, {
                                                fill: "white"
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            href: "#",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(icon_instagram, {
                                                fill: "white"
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            href: "#",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(icon_twitter, {
                                                fill: "white"
                                            })
                                        })
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (Footer_module_default()).footer__secondRow,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                children: "Chamber of Commerce: 63464101"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                children: "VAT: NL 8552.47.502.B01"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                children: "Terms and conditions"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                children: "\xa9 2018 Dept Agency"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (Footer_module_default()).scrollToTop,
                onClick: scrollToTop,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(icon_scroll_to_top, {
                        fill: "#1a18f7"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        children: " TOP "
                    })
                ]
            })
        ]
    });
};

// EXTERNAL MODULE: ./components/molecules/Header/Header.module.css
var Header_module = __webpack_require__(1588);
var Header_module_default = /*#__PURE__*/__webpack_require__.n(Header_module);
;// CONCATENATED MODULE: ./components/molecules/Header/Header.tsx

/* eslint-disable @next/next/no-img-element */ 
const Header = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (Header_module_default()).header,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                className: (Header_module_default()).header__deptLogo,
                src: "./dept_icons/icon-dept.svg",
                alt: "dept logo"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: (Header_module_default()).header__menuText,
                        children: " MENU "
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                        className: (Header_module_default()).header__menuIcon,
                        src: "./dept_icons/icon-menu.svg",
                        alt: "menu icon"
                    })
                ]
            })
        ]
    });
};

// EXTERNAL MODULE: ./components/organisms/LandingSection/LandingSection.module.css
var LandingSection_module = __webpack_require__(8037);
var LandingSection_module_default = /*#__PURE__*/__webpack_require__.n(LandingSection_module);
;// CONCATENATED MODULE: ./components/organisms/LandingSection/LandingSection.tsx



const LandingSection = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (LandingSection_module_default()).landingSection,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Header, {}),
            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                className: (LandingSection_module_default()).landingSection__title,
                children: "WORK"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                className: (LandingSection_module_default()).landingSection__viewCaseButton,
                children: "VIEW CASE"
            })
        ]
    });
};

;// CONCATENATED MODULE: external "formik"
const external_formik_namespaceObject = require("formik");
;// CONCATENATED MODULE: external "yup"
const external_yup_namespaceObject = require("yup");
;// CONCATENATED MODULE: ./validation/questionFormValidation.ts

const questionFormSchema = external_yup_namespaceObject.object().shape({
    name: external_yup_namespaceObject.string().min(3, "Minimum 3 characters").max(50, "Maximum 50 characters").required("This field is required"),
    email: external_yup_namespaceObject.string().email("Invalid email").required("This field is required"),
    message: external_yup_namespaceObject.string().max(500, "Maximum 500 characters").required("This field is required")
});

// EXTERNAL MODULE: ./components/organisms/QuestionForm/QuestionFormSection.module.css
var QuestionFormSection_module = __webpack_require__(4061);
var QuestionFormSection_module_default = /*#__PURE__*/__webpack_require__.n(QuestionFormSection_module);
;// CONCATENATED MODULE: ./components/organisms/QuestionForm/QuestionFormSection.tsx




const QuestionFormSection = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (QuestionFormSection_module_default()).questionFormSection,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                className: (QuestionFormSection_module_default()).questionFormSection__title,
                children: "QUESTION? WE ARE HERE TO HELP!"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(external_formik_namespaceObject.Formik, {
                initialValues: {
                    name: "",
                    email: "",
                    message: ""
                },
                onSubmit: (values)=>{},
                validationSchema: questionFormSchema,
                children: ({ errors , touched  })=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_formik_namespaceObject.Form, {
                        className: (QuestionFormSection_module_default()).questionFormSection__form,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: (QuestionFormSection_module_default()).questionFormSection__formWithoutSubmitButton,
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: (QuestionFormSection_module_default()).questionFormSection__form__labelFieldWrapper,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                                htmlFor: "name",
                                                children: "NAME"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(external_formik_namespaceObject.Field, {
                                                type: "text",
                                                id: "name",
                                                name: "name",
                                                className: (QuestionFormSection_module_default()).questionFormSection__form__labelFieldWrapper__field
                                            }),
                                            errors.name && touched.name ? /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: (QuestionFormSection_module_default()).questionFormSection__form__labelFieldWrapper__fieldError,
                                                children: errors.name
                                            }) : null
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: (QuestionFormSection_module_default()).questionFormSection__form__labelFieldWrapper,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                                htmlFor: "email",
                                                children: "EMAIL"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(external_formik_namespaceObject.Field, {
                                                type: "email",
                                                id: "email",
                                                name: "email",
                                                className: (QuestionFormSection_module_default()).questionFormSection__form__labelFieldWrapper__field
                                            }),
                                            errors.email && touched.email ? /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: (QuestionFormSection_module_default()).questionFormSection__form__labelFieldWrapper__fieldError,
                                                children: errors.email
                                            }) : null
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: (QuestionFormSection_module_default()).questionFormSection__form__labelFieldWrapper,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                                htmlFor: "message",
                                                children: "MESSAGE"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(external_formik_namespaceObject.Field, {
                                                as: "textarea",
                                                rows: 5,
                                                maxLength: 500,
                                                id: "message",
                                                name: "message",
                                                className: (QuestionFormSection_module_default()).questionFormSection__form__labelFieldWrapper__field
                                            }),
                                            errors.message && touched.message ? /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: (QuestionFormSection_module_default()).questionFormSection__form__labelFieldWrapper__fieldError,
                                                children: errors.message
                                            }) : null
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                type: "submit",
                                className: (QuestionFormSection_module_default()).questionFormSection__form__submitButton,
                                children: "SEND"
                            })
                        ]
                    })
            })
        ]
    });
};

;// CONCATENATED MODULE: external "@preprio/nodejs-sdk"
const nodejs_sdk_namespaceObject = require("@preprio/nodejs-sdk");
;// CONCATENATED MODULE: ./lib/prepr.js

const prepr = (0,nodejs_sdk_namespaceObject.createPreprClient)({
    token: "19db412a781856b46483354c0139e3f26b6dcad7f512074c2a388f9383a3f03f",
    baseUrl: "https://graphql.prepr.io/graphql"
});


;// CONCATENATED MODULE: ./services/api.ts

const getPageData = ()=>{
    return prepr.graphqlQuery(`{
        sections : ContentSections {
          items {
            _id
            type
            text_data
            dept_posts {
              _id
              title
              source
              cover_image {
                url
              }
            }
          }
        },
        logos : CompanyLogos {
          items {
            images {
              url(format: "webp")
            }
            clients_description
          }
        },
        categories : DeptCategories {
          items {
            name
          }        
        },
        industries : DeptIndustries {
          items {
            name
          }        
        }
    }`).fetch();
};
const getFilteredPosts = (category, industry)=>{
    if (category === "all_work") {
        category = "";
    }
    if (industry === "all_industries") {
        industry = "";
    }
    return prepr.graphqlQuery(`{
        posts : DeptPosts( where : { category : "${category}", industry: "${industry}" } ) {
          items {
            _id
            title
            source
            cover_image {
              url
            }
          }
        }
    }`).fetch();
};

// EXTERNAL MODULE: ./styles/Home.module.css
var Home_module = __webpack_require__(9399);
var Home_module_default = /*#__PURE__*/__webpack_require__.n(Home_module);
;// CONCATENATED MODULE: ./pages/index.tsx











const Home = ({ sections , logos , clients_description , categories , industries ,  })=>{
    const { 0: category1 , 1: setCategory  } = (0,external_react_.useState)("all_work");
    const { 0: industry1 , 1: setIndustry  } = (0,external_react_.useState)("all_industries");
    const { 0: filteredPosts , 1: setFilteredPosts  } = (0,external_react_.useState)([]);
    const { 0: postsAreFiltered , 1: setPostsAreFiltered  } = (0,external_react_.useState)(false);
    (0,external_react_.useEffect)(()=>{
        const filterPosts = async ()=>{
            let filteredPostsLocal = await getFilteredPosts(category1, industry1);
            if (filteredPostsLocal.data.posts !== null) {
                setFilteredPosts(filteredPostsLocal.data.posts.items);
            } else {
                setFilteredPosts([]);
            }
        };
        if (category1 === "all_work" && industry1 === "all_industries") {
            setPostsAreFiltered(false);
        } else {
            setPostsAreFiltered(true);
            filterPosts();
        }
    }, [
        category1,
        industry1
    ]);
    const handleOnCategoryChange = (category)=>{
        setCategory(category);
    };
    const handleOnIndustryChange = (industry)=>{
        setIndustry(industry);
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(LandingSection, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Filter, {
                categories: categories,
                industries: industries,
                handleOnCategoryChange: handleOnCategoryChange,
                handleOnIndustryChange: handleOnIndustryChange
            }),
            !postsAreFiltered && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (Home_module_default()).contentWrapper,
                children: sections.map((section)=>/*#__PURE__*/ jsx_runtime_.jsx(ContentSection, {
                        type: section.type,
                        posts: section.dept_posts,
                        textData: section.text_data
                    }, section._id)
                )
            }),
            postsAreFiltered && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (Home_module_default()).filteredResults,
                children: filteredPosts.map((post)=>/*#__PURE__*/ jsx_runtime_.jsx(DeptPost, {
                        post: post
                    }, post._id)
                )
            }),
            postsAreFiltered && filteredPosts.length === 0 && /*#__PURE__*/ jsx_runtime_.jsx("p", {
                className: (Home_module_default()).noPostsMessage,
                children: "There are no posts for given filters"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(ClientLogos, {
                logos: logos,
                clients_description: clients_description
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(QuestionFormSection, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Footer, {})
        ]
    });
};
async function getStaticProps() {
    const pageData = await getPageData();
    return {
        props: {
            sections: pageData.data.sections.items,
            logos: pageData.data.logos.items[0].images,
            clients_description: pageData.data.logos.items[0].clients_description,
            categories: pageData.data.categories.items,
            industries: pageData.data.industries.items
        }
    };
}
/* harmony default export */ const pages = (Home);


/***/ }),

/***/ 562:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 4241:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/routing-items.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [895,664], () => (__webpack_exec__(785)));
module.exports = __webpack_exports__;

})();