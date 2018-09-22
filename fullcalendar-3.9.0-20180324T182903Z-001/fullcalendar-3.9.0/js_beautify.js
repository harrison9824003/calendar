/*!
 * FullCalendar v3.9.0
 * Docs & License: https://fullcalendar.io/
 * (c) 2018 Adam Shaw
 */
! function(t, e) {
    "object" == typeof exports && "object" == typeof module ? 
        module.exports = e(require("moment"), require("jquery")) : 
        "function" == typeof define && define.amd ? 
            define(["moment", "jquery"], e) : 
            "object" == typeof exports ? 
                exports.FullCalendar = e(require("moment"), require("jquery")) : 
                t.FullCalendar = e(t.moment, t.jQuery);
        // console.log(exports);
        // console.log(module);
        // console.log(define);
        // console.log(t);
        
}("undefined" != typeof self ? self : this, function(t, e) {
    // console.log(t);
    // console.log(e);
    return function(t) {
        console.log(t);
        function e(i) {
            // console.log(n);
            if (n[i]) return n[i].exports;
            var r = n[i] = {
                i: i,
                l: !1,
                exports: {}
            };
            return t[i].call(r.exports, r, r.exports, e), r.l = !0, r.exports
        }
        var n = {};
        return e.m = t, e.c = n, e.d = function(t, n, i) {
            e.o(t, n) || Object.defineProperty(t, n, {
                configurable: !1,
                enumerable: !0,
                get: i
            })
        }, e.n = function(t) {
            var n = t && t.__esModule ? function() {
                return t.default
            } : function() {
                return t
            };
            return e.d(n, "a", n), n
        }, e.o = function(t, e) {
            return Object.prototype.hasOwnProperty.call(t, e)
        }, e.p = "", e(e.s = 236)
    }([
        function(e, n) {
        e.exports = t
    }, ,function(t, e) {
        var n = Object.setPrototypeOf || {
            __proto__: []
        }
        instanceof Array && function(t, e) {
            t.__proto__ = e
        } || function(t, e) {
            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
        };
        e.__extends = function(t, e) {
            function i() {
                this.constructor = t
            }
            n(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i)
        }
    }, function(t, n) {
        t.exports = e
    }, function(t, e, n) {
        function i(t, e) {
            e.left && t.css({
                "border-left-width": 1,
                "margin-left": e.left - 1
            }), e.right && t.css({
                "border-right-width": 1,
                "margin-right": e.right - 1
            })
        }

        function r(t) {
            t.css({
                "margin-left": "",
                "margin-right": "",
                "border-left-width": "",
                "border-right-width": ""
            })
        }

        function o() {
            ht("body").addClass("fc-not-allowed")
        }

        function s() {
            ht("body").removeClass("fc-not-allowed")
        }

        function a(t, e, n) {
            var i = Math.floor(e / t.length),
                r = Math.floor(e - i * (t.length - 1)),
                o = [],
                s = [],
                a = [],
                u = 0;
            l(t), t.each(function(e, n) {
                var l = e === t.length - 1 ? r : i,
                    d = ht(n).outerHeight(!0);
                d < l ? (o.push(n), s.push(d), a.push(ht(n).height())) : u += d
            }), n && (e -= u, i = Math.floor(e / o.length), r = Math.floor(e - i * (o.length - 1))), ht(o).each(function(t, e) {
                var n = t === o.length - 1 ? r : i,
                    l = s[t],
                    u = a[t],
                    d = n - (l - u);
                l < n && ht(e).height(d)
            })
        }

        function l(t) {
            t.height("")
        }

        function u(t) {
            var e = 0;
            return t.find("> *").each(function(t, n) {
                var i = ht(n).outerWidth();
                i > e && (e = i)
            }), e++, t.width(e), e
        }

        function d(t, e) {
            var n, i = t.add(e);
            return i.css({
                position: "relative",
                left: -1
            }), n = t.outerHeight() - e.outerHeight(), i.css({
                position: "",
                left: ""
            }), n
        }

        function c(t) {
            var e = t.css("position"),
                n = t.parents().filter(function() {
                    var t = ht(this);
                    return /(auto|scroll)/.test(t.css("overflow") + t.css("overflow-y") + t.css("overflow-x"))
                }).eq(0);
            return "fixed" !== e && n.length ? n : ht(t[0].ownerDocument || document)
        }

        function p(t, e) {
            var n = t.offset(),
                i = n.left - (e ? e.left : 0),
                r = n.top - (e ? e.top : 0);
            return {
                left: i,
                right: i + t.outerWidth(),
                top: r,
                bottom: r + t.outerHeight()
            }
        }

        function h(t, e) {
            var n = t.offset(),
                i = g(t),
                r = n.left + b(t, "border-left-width") + i.left - (e ? e.left : 0),
                o = n.top + b(t, "border-top-width") + i.top - (e ? e.top : 0);
            return {
                left: r,
                right: r + t[0].clientWidth,
                top: o,
                bottom: o + t[0].clientHeight
            }
        }

        function f(t, e) {
            var n = t.offset(),
                i = n.left + b(t, "border-left-width") + b(t, "padding-left") - (e ? e.left : 0),
                r = n.top + b(t, "border-top-width") + b(t, "padding-top") - (e ? e.top : 0);
            return {
                left: i,
                right: i + t.width(),
                top: r,
                bottom: r + t.height()
            }
        }

        function g(t) {
            var e, n = t[0].offsetWidth - t[0].clientWidth,
                i = t[0].offsetHeight - t[0].clientHeight;
            return n = v(n), i = v(i), e = {
                left: 0,
                right: 0,
                top: 0,
                bottom: i
            }, y() && "rtl" === t.css("direction") ? e.left = n : e.right = n, e
        }

        function v(t) {
            return t = Math.max(0, t), t = Math.round(t)
        }

        function y() {
            return null === ft && (ft = m()), ft
        }

        function m() {
            var t = ht("<div><div/></div>").css({
                    position: "absolute",
                    top: -1e3,
                    left: 0,
                    border: 0,
                    padding: 0,
                    overflow: "scroll",
                    direction: "rtl"
                }).appendTo("body"),
                e = t.children(),
                n = e.offset().left > t.offset().left;
            return t.remove(), n
        }

        function b(t, e) {
            return parseFloat(t.css(e)) || 0
        }

        function w(t) {
            return 1 === t.which && !t.ctrlKey
        }

        function D(t) {
            var e = t.originalEvent.touches;
            return e && e.length ? e[0].pageX : t.pageX
        }

        function E(t) {
            var e = t.originalEvent.touches;
            return e && e.length ? e[0].pageY : t.pageY
        }

        function S(t) {
            return /^touch/.test(t.type)
        }

        function C(t) {
            t.addClass("fc-unselectable").on("selectstart", T)
        }

        function R(t) {
            t.removeClass("fc-unselectable").off("selectstart", T)
        }

        function T(t) {
            t.preventDefault()
        }

        function M(t, e) {
            var n = {
                left: Math.max(t.left, e.left),
                right: Math.min(t.right, e.right),
                top: Math.max(t.top, e.top),
                bottom: Math.min(t.bottom, e.bottom)
            };
            return n.left < n.right && n.top < n.bottom && n
        }

        function I(t, e) {
            return {
                left: Math.min(Math.max(t.left, e.left), e.right),
                top: Math.min(Math.max(t.top, e.top), e.bottom)
            }
        }

        function H(t) {
            return {
                left: (t.left + t.right) / 2,
                top: (t.top + t.bottom) / 2
            }
        }

        function P(t, e) {
            return {
                left: t.left - e.left,
                top: t.top - e.top
            }
        }

        function _(t) {
            var e, n, i = [],
                r = [];
            for ("string" == typeof t ? r = t.split(/\s*,\s*/) : "function" == typeof t ? r = [t] : ht.isArray(t) && (r = t), e = 0; e < r.length; e++) n = r[e], "string" == typeof n ? i.push("-" === n.charAt(0) ? {
                field: n.substring(1),
                order: -1
            } : {
                field: n,
                order: 1
            }) : "function" == typeof n && i.push({
                func: n
            });
            return i
        }

        function x(t, e, n, i, r) {
            var o, s;
            for (o = 0; o < n.length; o++)
                if (s = O(t, e, n[o], i, r)) return s;
            return 0
        }

        function O(t, e, n, i, r) {
            if (n.func) return n.func(t, e);
            var o = t[n.field],
                s = e[n.field];
            return null == o && i && (o = i[n.field]), null == s && r && (s = r[n.field]), F(o, s) * (n.order || 1)
        }

        function F(t, e) {
            return t || e ? null == e ? -1 : null == t ? 1 : "string" === ht.type(t) || "string" === ht.type(e) ? String(t).localeCompare(String(e)) : t - e : 0
        }

        function z(t, e) {
            return pt.duration({
                days: t.clone().stripTime().diff(e.clone().stripTime(), "days"),
                ms: t.time() - e.time()
            })
        }

        function B(t, e) {
            return pt.duration({
                days: t.clone().stripTime().diff(e.clone().stripTime(), "days")
            })
        }

        function A(t, e, n) {
            return pt.duration(Math.round(t.diff(e, n, !0)), n)
        }

        function k(t, n) {
            var i, r, o;
            for (i = 0; i < e.unitsDesc.length && (r = e.unitsDesc[i], !((o = V(r, t, n)) >= 1 && ut(o))); i++);
            return r
        }

        function L(t, e) {
            var n = k(t);
            return "week" === n && "object" == typeof e && e.days && (n = "day"), n
        }

        function V(t, e, n) {
            return null != n ? n.diff(e, t, !0) : pt.isDuration(e) ? e.as(t) : e.end.diff(e.start, t, !0)
        }

        function G(t, e, n) {
            var i;
            return U(n) ? (e - t) / n : (i = n.asMonths(), Math.abs(i) >= 1 && ut(i) ? e.diff(t, "months", !0) / i : e.diff(t, "days", !0) / n.asDays())
        }

        function N(t, e) {
            var n, i;
            return U(t) || U(e) ? t / e : (n = t.asMonths(), i = e.asMonths(), Math.abs(n) >= 1 && ut(n) && Math.abs(i) >= 1 && ut(i) ? n / i : t.asDays() / e.asDays())
        }

        function j(t, e) {
            var n;
            return U(t) ? pt.duration(t * e) : (n = t.asMonths(), Math.abs(n) >= 1 && ut(n) ? pt.duration({
                months: n * e
            }) : pt.duration({
                days: t.asDays() * e
            }))
        }

        function U(t) {
            return Boolean(t.hours() || t.minutes() || t.seconds() || t.milliseconds())
        }

        function W(t) {
            return "[object Date]" === Object.prototype.toString.call(t) || t instanceof Date
        }

        function q(t) {
            return "string" == typeof t && /^\d+\:\d+(?:\:\d+\.?(?:\d{3})?)?$/.test(t)
        }

        function Y() {
            for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
            var n = window.console;
            if (n && n.log) return n.log.apply(n, t)
        }

        function Z() {
            for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
            var n = window.console;
            return n && n.warn ? n.warn.apply(n, t) : Y.apply(null, t)
        }

        function Q(t, e) {
            var n, i, r, o, s, a, l = {};
            if (e)
                for (n = 0; n < e.length; n++) {
                    for (i = e[n], r = [], o = t.length - 1; o >= 0; o--)
                        if ("object" == typeof(s = t[o][i])) r.unshift(s);
                        else if (void 0 !== s) {
                        l[i] = s;
                        break
                    }
                    r.length && (l[i] = Q(r))
                }
            for (n = t.length - 1; n >= 0; n--) {
                a = t[n];
                for (i in a) i in l || (l[i] = a[i])
            }
            return l
        }

        function X(t, e) {
            for (var n in t) $(t, n) && (e[n] = t[n])
        }

        function $(t, e) {
            return gt.call(t, e)
        }

        function K(t, e, n) {
            if (ht.isFunction(t) && (t = [t]), t) {
                var i = void 0,
                    r = void 0;
                for (i = 0; i < t.length; i++) r = t[i].apply(e, n) || r;
                return r
            }
        }

        function J(t, e) {
            for (var n = 0, i = 0; i < t.length;) e(t[i]) ? (t.splice(i, 1), n++) : i++;
            return n
        }

        function tt(t, e) {
            for (var n = 0, i = 0; i < t.length;) t[i] === e ? (t.splice(i, 1), n++) : i++;
            return n
        }

        function et(t, e) {
            var n, i = t.length;
            if (null == i || i !== e.length) return !1;
            for (n = 0; n < i; n++)
                if (t[n] !== e[n]) return !1;
            return !0
        }

        function nt() {
            for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
            for (var n = 0; n < t.length; n++)
                if (void 0 !== t[n]) return t[n]
        }

        function it(t) {
            return (t + "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/'/g, "&#039;").replace(/"/g, "&quot;").replace(/\n/g, "<br />")
        }

        function rt(t) {
            return t.replace(/&.*?;/g, "")
        }

        function ot(t) {
            var e = [];
            return ht.each(t, function(t, n) {
                null != n && e.push(t + ":" + n)
            }), e.join(";")
        }

        function st(t) {
            var e = [];
            return ht.each(t, function(t, n) {
                null != n && e.push(t + '="' + it(n) + '"')
            }), e.join(" ")
        }

        function at(t) {
            return t.charAt(0).toUpperCase() + t.slice(1)
        }

        function lt(t, e) {
            return t - e
        }

        function ut(t) {
            return t % 1 == 0
        }

        function dt(t, e) {
            var n = t[e];
            return function() {
                return n.apply(t, arguments)
            }
        }

        function ct(t, e, n) {
            void 0 === n && (n = !1);
            var i, r, o, s, a, l = function() {
                var u = +new Date - s;
                u < e ? i = setTimeout(l, e - u) : (i = null, n || (a = t.apply(o, r), o = r = null))
            };
            return function() {
                o = this, r = arguments, s = +new Date;
                var u = n && !i;
                return i || (i = setTimeout(l, e)), u && (a = t.apply(o, r), o = r = null), a
            }
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var pt = n(0),
            ht = n(3);
        e.compensateScroll = i, e.uncompensateScroll = r, e.disableCursor = o, e.enableCursor = s, e.distributeHeight = a, e.undistributeHeight = l, e.matchCellWidths = u, e.subtractInnerElHeight = d, e.getScrollParent = c, e.getOuterRect = p, e.getClientRect = h, e.getContentRect = f, e.getScrollbarWidths = g;
        var ft = null;
        e.isPrimaryMouseButton = w, e.getEvX = D, e.getEvY = E, e.getEvIsTouch = S, e.preventSelection = C, e.allowSelection = R, e.preventDefault = T, e.intersectRects = M, e.constrainPoint = I, e.getRectCenter = H, e.diffPoints = P, e.parseFieldSpecs = _, e.compareByFieldSpecs = x, e.compareByFieldSpec = O, e.flexibleCompare = F, e.dayIDs = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"], e.unitsDesc = ["year", "month", "week", "day", "hour", "minute", "second", "millisecond"], e.diffDayTime = z, e.diffDay = B, e.diffByUnit = A, e.computeGreatestUnit = k, e.computeDurationGreatestUnit = L, e.divideRangeByDuration = G, e.divideDurationByDuration = N, e.multiplyDuration = j, e.durationHasTime = U, e.isNativeDate = W, e.isTimeString = q, e.log = Y, e.warn = Z;
        var gt = {}.hasOwnProperty;
        e.mergeProps = Q, e.copyOwnProps = X, e.hasOwnProp = $, e.applyAll = K, e.removeMatching = J, e.removeExact = tt, e.isArraysEqual = et, e.firstDefined = nt, e.htmlEscape = it, e.stripHtmlEntities = rt, e.cssToStr = ot, e.attrsToStr = st, e.capitaliseFirstLetter = at, e.compareNumbers = lt, e.isInt = ut, e.proxy = dt, e.debounce = ct
    }, function(t, e, n) {
        function i(t, e) {
            return t.startMs - e.startMs
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r = n(0),
            o = n(10),
            s = function() {
                function t(t, e) {
                    this.isStart = !0, this.isEnd = !0, r.isMoment(t) && (t = t.clone().stripZone()), r.isMoment(e) && (e = e.clone().stripZone()), t && (this.startMs = t.valueOf()), e && (this.endMs = e.valueOf())
                }
                return t.invertRanges = function(e, n) {
                    var r, o, s = [],
                        a = n.startMs;
                    for (e.sort(i), r = 0; r < e.length; r++) o = e[r], o.startMs > a && s.push(new t(a, o.startMs)), o.endMs > a && (a = o.endMs);
                    return a < n.endMs && s.push(new t(a, n.endMs)), s
                }, t.prototype.intersect = function(e) {
                    var n = this.startMs,
                        i = this.endMs,
                        r = null;
                    return null != e.startMs && (n = null == n ? e.startMs : Math.max(n, e.startMs)), null != e.endMs && (i = null == i ? e.endMs : Math.min(i, e.endMs)), (null == n || null == i || n < i) && (r = new t(n, i), r.isStart = this.isStart && n === this.startMs, r.isEnd = this.isEnd && i === this.endMs), r
                }, t.prototype.intersectsWith = function(t) {
                    return (null == this.endMs || null == t.startMs || this.endMs > t.startMs) && (null == this.startMs || null == t.endMs || this.startMs < t.endMs)
                }, t.prototype.containsRange = function(t) {
                    return (null == this.startMs || null != t.startMs && t.startMs >= this.startMs) && (null == this.endMs || null != t.endMs && t.endMs <= this.endMs)
                }, t.prototype.containsDate = function(t) {
                    var e = t.valueOf();
                    return (null == this.startMs || e >= this.startMs) && (null == this.endMs || e < this.endMs)
                }, t.prototype.constrainDate = function(t) {
                    var e = t.valueOf();
                    return null != this.startMs && e < this.startMs && (e = this.startMs), null != this.endMs && e >= this.endMs && (e = this.endMs - 1), e
                }, t.prototype.equals = function(t) {
                    return this.startMs === t.startMs && this.endMs === t.endMs
                }, t.prototype.clone = function() {
                    var e = new t(this.startMs, this.endMs);
                    return e.isStart = this.isStart, e.isEnd = this.isEnd, e
                }, t.prototype.getStart = function() {
                    return null != this.startMs ? o.default.utc(this.startMs).stripZone() : null
                }, t.prototype.getEnd = function() {
                    return null != this.endMs ? o.default.utc(this.endMs).stripZone() : null
                }, t.prototype.as = function(t) {
                    return r.utc(this.endMs).diff(r.utc(this.startMs), t, !0)
                }, t
            }();
        e.default = s
    }, function(t, e, n) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = n(2),
            r = n(3),
            o = n(208),
            s = n(33),
            a = n(49),
            l = function(t) {
                function e(n) {
                    var i = t.call(this) || this;
                    return i.calendar = n, i.className = [], i.uid = String(e.uuid++), i
                }
                return i.__extends(e, t), e.parse = function(t, e) {
                    var n = new this(e);
                    return !("object" != typeof t || !n.applyProps(t)) && n
                }, e.normalizeId = function(t) {
                    return t ? String(t) : null
                }, e.prototype.fetch = function(t, e, n) {}, e.prototype.removeEventDefsById = function(t) {}, e.prototype.removeAllEventDefs = function() {}, e.prototype.getPrimitive = function(t) {}, e.prototype.parseEventDefs = function(t) {
                    var e, n, i = [];
                    for (e = 0; e < t.length; e++)(n = this.parseEventDef(t[e])) && i.push(n);
                    return i
                }, e.prototype.parseEventDef = function(t) {
                    var e = this.calendar.opt("eventDataTransform"),
                        n = this.eventDataTransform;
                    return e && (t = e(t, this.calendar)), n && (t = n(t, this.calendar)), a.default.parse(t, this)
                }, e.prototype.applyManualStandardProps = function(t) {
                    return null != t.id && (this.id = e.normalizeId(t.id)), r.isArray(t.className) ? this.className = t.className : "string" == typeof t.className && (this.className = t.className.split(/\s+/)), !0
                }, e.uuid = 0, e.defineStandardProps = o.default.defineStandardProps, e.copyVerbatimStandardProps = o.default.copyVerbatimStandardProps, e
            }(s.default);
        e.default = l, o.default.mixInto(l), l.defineStandardProps({
            id: !1,
            className: !1,
            color: !0,
            backgroundColor: !0,
            borderColor: !0,
            textColor: !0,
            editable: !0,
            startEditable: !0,
            durationEditable: !0,
            rendering: !0,
            overlap: !0,
            constraint: !0,
            allDayDefault: !0,
            eventDataTransform: !0
        })
    }, function(t, e, n) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = n(2),
            r = n(3),
            o = n(14),
            s = 0,
            a = function(t) {
                function e() {
                    return null !== t && t.apply(this, arguments) || this
                }
                return i.__extends(e, t), e.prototype.listenTo = function(t, e, n) {
                    if ("object" == typeof e)
                        for (var i in e) e.hasOwnProperty(i) && this.listenTo(t, i, e[i]);
                    else "string" == typeof e && t.on(e + "." + this.getListenerNamespace(), r.proxy(n, this))
                }, e.prototype.stopListeningTo = function(t, e) {
                    t.off((e || "") + "." + this.getListenerNamespace())
                }, e.prototype.getListenerNamespace = function() {
                    return null == this.listenerId && (this.listenerId = s++), "_listener" + this.listenerId
                }, e
            }(o.default);
        e.default = a
    }, , , function(t, e, n) {
        function i(t, e) {
            return c.format.call(t, e)
        }

        function r(t, e, n) {
            void 0 === e && (e = !1), void 0 === n && (n = !1);
            var i, r, d, c, p = t[0],
                h = 1 === t.length && "string" == typeof p;
            return o.isMoment(p) || a.isNativeDate(p) || void 0 === p ? c = o.apply(null, t) : (i = !1, r = !1, h ? l.test(p) ? (p += "-01", t = [p], i = !0, r = !0) : (d = u.exec(p)) && (i = !d[5], r = !0) : s.isArray(p) && (r = !0), c = e || i ? o.utc.apply(o, t) : o.apply(null, t), i ? (c._ambigTime = !0, c._ambigZone = !0) : n && (r ? c._ambigZone = !0 : h && c.utcOffset(p))), c._fullCalendar = !0, c
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var o = n(0),
            s = n(3),
            a = n(4),
            l = /^\s*\d{4}-\d\d$/,
            u = /^\s*\d{4}-(?:(\d\d-\d\d)|(W\d\d$)|(W\d\d-\d)|(\d\d\d))((T| )(\d\d(:\d\d(:\d\d(\.\d+)?)?)?)?)?$/,
            d = o.fn;
        e.newMomentProto = d;
        var c = s.extend({}, d);
        e.oldMomentProto = c;
        var p = o.momentProperties;
        p.push("_fullCalendar"), p.push("_ambigTime"), p.push("_ambigZone"), e.oldMomentFormat = i;
        var h = function() {
            return r(arguments)
        };
        e.default = h, h.utc = function() {
            var t = r(arguments, !0);
            return t.hasTime() && t.utc(), t
        }, h.parseZone = function() {
            return r(arguments, !0, !0)
        }, d.week = d.weeks = function(t) {
            var e = this._locale._fullCalendar_weekCalc;
            return null == t && "function" == typeof e ? e(this) : "ISO" === e ? c.isoWeek.apply(this, arguments) : c.week.apply(this, arguments)
        }, d.time = function(t) {
            if (!this._fullCalendar) return c.time.apply(this, arguments);
            if (null == t) return o.duration({
                hours: this.hours(),
                minutes: this.minutes(),
                seconds: this.seconds(),
                milliseconds: this.milliseconds()
            });
            this._ambigTime = !1, o.isDuration(t) || o.isMoment(t) || (t = o.duration(t));
            var e = 0;
            return o.isDuration(t) && (e = 24 * Math.floor(t.asDays())), this.hours(e + t.hours()).minutes(t.minutes()).seconds(t.seconds()).milliseconds(t.milliseconds())
        }, d.stripTime = function() {
            return this._ambigTime || (this.utc(!0), this.set({
                hours: 0,
                minutes: 0,
                seconds: 0,
                ms: 0
            }), this._ambigTime = !0, this._ambigZone = !0), this
        }, d.hasTime = function() {
            return !this._ambigTime
        }, d.stripZone = function() {
            var t;
            return this._ambigZone || (t = this._ambigTime, this.utc(!0), this._ambigTime = t || !1, this._ambigZone = !0), this
        }, d.hasZone = function() {
            return !this._ambigZone
        }, d.local = function(t) {
            return c.local.call(this, this._ambigZone || t), this._ambigTime = !1, this._ambigZone = !1, this
        }, d.utc = function(t) {
            return c.utc.call(this, t), this._ambigTime = !1, this._ambigZone = !1, this
        }, d.utcOffset = function(t) {
            return null != t && (this._ambigTime = !1, this._ambigZone = !1), c.utcOffset.apply(this, arguments)
        }
    }, function(t, e, n) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = n(2),
            r = n(3),
            o = n(14),
            s = function(t) {
                function e() {
                    return null !== t && t.apply(this, arguments) || this
                }
                return i.__extends(e, t), e.prototype.on = function(t, e) {
                    return r(this).on(t, this._prepareIntercept(e)), this
                }, e.prototype.one = function(t, e) {
                    return r(this).one(t, this._prepareIntercept(e)), this
                }, e.prototype._prepareIntercept = function(t) {
                    var e = function(e, n) {
                        return t.apply(n.context || this, n.args || [])
                    };
                    return t.guid || (t.guid = r.guid++), e.guid = t.guid, e
                }, e.prototype.off = function(t, e) {
                    return r(this).off(t, e), this
                }, e.prototype.trigger = function(t) {
                    for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
                    return r(this).triggerHandler(t, {
                        args: e
                    }), this
                }, e.prototype.triggerWith = function(t, e, n) {
                    return r(this).triggerHandler(t, {
                        context: e,
                        args: n
                    }), this
                }, e.prototype.hasHandlers = function(t) {
                    var e = r._data(this, "events");
                    return e && e[t] && e[t].length > 0
                }, e
            }(o.default);
        e.default = s
    }, function(t, e) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = function() {
            function t(t, e) {
                this.isAllDay = !1, this.unzonedRange = t, this.isAllDay = e
            }
            return t.prototype.toLegacy = function(t) {
                return {
                    start: t.msToMoment(this.unzonedRange.startMs, this.isAllDay),
                    end: t.msToMoment(this.unzonedRange.endMs, this.isAllDay)
                }
            }, t
        }();
        e.default = n
    }, function(t, e, n) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = n(2),
            r = n(34),
            o = n(209),
            s = n(17),
            a = function(t) {
                function e() {
                    return null !== t && t.apply(this, arguments) || this
                }
                return i.__extends(e, t), e.prototype.buildInstances = function() {
                    return [this.buildInstance()]
                }, e.prototype.buildInstance = function() {
                    return new o.default(this, this.dateProfile)
                }, e.prototype.isAllDay = function() {
                    return this.dateProfile.isAllDay()
                }, e.prototype.clone = function() {
                    var e = t.prototype.clone.call(this);
                    return e.dateProfile = this.dateProfile, e
                }, e.prototype.rezone = function() {
                    var t = this.source.calendar,
                        e = this.dateProfile;
                    this.dateProfile = new s.default(t.moment(e.start), e.end ? t.moment(e.end) : null, t)
                }, e.prototype.applyManualStandardProps = function(e) {
                    var n = t.prototype.applyManualStandardProps.call(this, e),
                        i = s.default.parse(e, this.source);
                    return !!i && (this.dateProfile = i, null != e.date && (this.miscProps.date = e.date), n)
                }, e
            }(r.default);
        e.default = a, a.defineStandardProps({
            start: !1,
            date: !1,
            end: !1,
            allDay: !1
        })
    }, function(t, e) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = function() {
            function t() {}
            return t.mixInto = function(t) {
                var e = this;
                Object.getOwnPropertyNames(this.prototype).forEach(function(n) {
                    t.prototype[n] || (t.prototype[n] = e.prototype[n])
                })
            }, t.mixOver = function(t) {
                var e = this;
                Object.getOwnPropertyNames(this.prototype).forEach(function(n) {
                    t.prototype[n] = e.prototype[n]
                })
            }, t
        }();
        e.default = n
    }, function(t, e) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = function() {
            function t(t) {
                this.view = t._getView(), this.component = t
            }
            return t.prototype.opt = function(t) {
                return this.view.opt(t)
            }, t.prototype.end = function() {}, t
        }();
        e.default = n
    }, function(t, e, n) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.version = "3.9.0", e.internalApiVersion = 12;
        var i = n(4);
        e.applyAll = i.applyAll, e.debounce = i.debounce, e.isInt = i.isInt, e.htmlEscape = i.htmlEscape, e.cssToStr = i.cssToStr, e.proxy = i.proxy, e.capitaliseFirstLetter = i.capitaliseFirstLetter, e.getOuterRect = i.getOuterRect, e.getClientRect = i.getClientRect, e.getContentRect = i.getContentRect, e.getScrollbarWidths = i.getScrollbarWidths, e.preventDefault = i.preventDefault, e.parseFieldSpecs = i.parseFieldSpecs, e.compareByFieldSpecs = i.compareByFieldSpecs, e.compareByFieldSpec = i.compareByFieldSpec, e.flexibleCompare = i.flexibleCompare, e.computeGreatestUnit = i.computeGreatestUnit, e.divideRangeByDuration = i.divideRangeByDuration, e.divideDurationByDuration = i.divideDurationByDuration, e.multiplyDuration = i.multiplyDuration, e.durationHasTime = i.durationHasTime, e.log = i.log, e.warn = i.warn, e.removeExact = i.removeExact, e.intersectRects = i.intersectRects;
        var r = n(47);
        e.formatDate = r.formatDate, e.formatRange = r.formatRange, e.queryMostGranularFormatUnit = r.queryMostGranularFormatUnit;
        var o = n(31);
        e.datepickerLocale = o.datepickerLocale, e.locale = o.locale;
        var s = n(10);
        e.moment = s.default;
        var a = n(11);
        e.EmitterMixin = a.default;
        var l = n(7);
        e.ListenerMixin = l.default;
        var u = n(48);
        e.Model = u.default;
        var d = n(207);
        e.Constraints = d.default;
        var c = n(5);
        e.UnzonedRange = c.default;
        var p = n(12);
        e.ComponentFootprint = p.default;
        var h = n(212);
        e.BusinessHourGenerator = h.default;
        var f = n(34);
        e.EventDef = f.default;
        var g = n(37);
        e.EventDefMutation = g.default;
        var v = n(38);
        e.EventSourceParser = v.default;
        var y = n(6);
        e.EventSource = y.default;
        var m = n(51);
        e.defineThemeSystem = m.defineThemeSystem;
        var b = n(18);
        e.EventInstanceGroup = b.default;
        var w = n(52);
        e.ArrayEventSource = w.default;
        var D = n(215);
        e.FuncEventSource = D.default;
        var E = n(216);
        e.JsonFeedEventSource = E.default;
        var S = n(36);
        e.EventFootprint = S.default;
        var C = n(33);
        e.Class = C.default;
        var R = n(14);
        e.Mixin = R.default;
        var T = n(53);
        e.CoordCache = T.default;
        var M = n(54);
        e.DragListener = M.default;
        var I = n(20);
        e.Promise = I.default;
        var H = n(217);
        e.TaskQueue = H.default;
        var P = n(218);
        e.RenderQueue = P.default;
        var _ = n(39);
        e.Scroller = _.default;
        var x = n(19);
        e.Theme = x.default;
        var O = n(219);
        e.DateComponent = O.default;
        var F = n(40);
        e.InteractiveDateComponent = F.default;
        var z = n(220);
        e.Calendar = z.default;
        var B = n(41);
        e.View = B.default;
        var A = n(22);
        e.defineView = A.defineView, e.getViewConfig = A.getViewConfig;
        var k = n(55);
        e.DayTableMixin = k.default;
        var L = n(56);
        e.BusinessHourRenderer = L.default;
        var V = n(42);
        e.EventRenderer = V.default;
        var G = n(57);
        e.FillRenderer = G.default;
        var N = n(58);
        e.HelperRenderer = N.default;
        var j = n(222);
        e.ExternalDropping = j.default;
        var U = n(223);
        e.EventResizing = U.default;
        var W = n(59);
        e.EventPointing = W.default;
        var q = n(224);
        e.EventDragging = q.default;
        var Y = n(225);
        e.DateSelecting = Y.default;
        var Z = n(60);
        e.StandardInteractionsMixin = Z.default;
        var Q = n(226);
        e.AgendaView = Q.default;
        var X = n(227);
        e.TimeGrid = X.default;
        var $ = n(61);
        e.DayGrid = $.default;
        var K = n(62);
        e.BasicView = K.default;
        var J = n(229);
        e.MonthView = J.default;
        var tt = n(230);
        e.ListView = tt.default
    }, function(t, e, n) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = n(5),
            r = function() {
                function t(t, e, n) {
                    this.start = t, this.end = e || null, this.unzonedRange = this.buildUnzonedRange(n)
                }
                return t.parse = function(e, n) {
                    var i = e.start || e.date,
                        r = e.end;
                    if (!i) return !1;
                    var o = n.calendar,
                        s = o.moment(i),
                        a = r ? o.moment(r) : null,
                        l = e.allDay,
                        u = o.opt("forceEventDuration");
                    return !!s.isValid() && (!a || a.isValid() && a.isAfter(s) || (a = null), null == l && null == (l = n.allDayDefault) && (l = o.opt("allDayDefault")), !0 === l ? (s.stripTime(), a && a.stripTime()) : !1 === l && (s.hasTime() || s.time(0), a && !a.hasTime() && a.time(0)), !a && u && (a = o.getDefaultEventEnd(!s.hasTime(), s)), new t(s, a, o))
                }, t.isStandardProp = function(t) {
                    return "start" === t || "date" === t || "end" === t || "allDay" === t
                }, t.prototype.isAllDay = function() {
                    return !(this.start.hasTime() || this.end && this.end.hasTime())
                }, t.prototype.buildUnzonedRange = function(t) {
                    var e = this.start.clone().stripZone().valueOf(),
                        n = this.getEnd(t).stripZone().valueOf();
                    return new i.default(e, n)
                }, t.prototype.getEnd = function(t) {
                    return this.end ? this.end.clone() : t.getDefaultEventEnd(this.isAllDay(), this.start)
                }, t
            }();
        e.default = r
    }, function(t, e, n) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = n(5),
            r = n(35),
            o = n(211),
            s = function() {
                function t(t) {
                    this.eventInstances = t || []
                }
                return t.prototype.getAllEventRanges = function(t) {
                    return t ? this.sliceNormalRenderRanges(t) : this.eventInstances.map(r.eventInstanceToEventRange)
                }, t.prototype.sliceRenderRanges = function(t) {
                    return this.isInverse() ? this.sliceInverseRenderRanges(t) : this.sliceNormalRenderRanges(t)
                }, t.prototype.sliceNormalRenderRanges = function(t) {
                    var e, n, i, r = this.eventInstances,
                        s = [];
                    for (e = 0; e < r.length; e++) n = r[e], (i = n.dateProfile.unzonedRange.intersect(t)) && s.push(new o.default(i, n.def, n));
                    return s
                }, t.prototype.sliceInverseRenderRanges = function(t) {
                    var e = this.eventInstances.map(r.eventInstanceToUnzonedRange),
                        n = this.getEventDef();
                    return e = i.default.invertRanges(e, t), e.map(function(t) {
                        return new o.default(t, n)
                    })
                }, t.prototype.isInverse = function() {
                    return this.getEventDef().hasInverseRendering()
                }, t.prototype.getEventDef = function() {
                    return this.explicitEventDef || this.eventInstances[0].def
                }, t
            }();
        e.default = s
    }, function(t, e, n) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = n(3),
            r = function() {
                function t(t) {
                    this.optionsManager = t, this.processIconOverride()
                }
                return t.prototype.processIconOverride = function() {
                    this.iconOverrideOption && this.setIconOverride(this.optionsManager.get(this.iconOverrideOption))
                }, t.prototype.setIconOverride = function(t) {
                    var e, n;
                    if (i.isPlainObject(t)) {
                        e = i.extend({}, this.iconClasses);
                        for (n in t) e[n] = this.applyIconOverridePrefix(t[n]);
                        this.iconClasses = e
                    } else !1 === t && (this.iconClasses = {})
                }, t.prototype.applyIconOverridePrefix = function(t) {
                    var e = this.iconOverridePrefix;
                    return e && 0 !== t.indexOf(e) && (t = e + t), t
                }, t.prototype.getClass = function(t) {
                    return this.classes[t] || ""
                }, t.prototype.getIconClass = function(t) {
                    var e = this.iconClasses[t];
                    return e ? this.baseIconClass + " " + e : ""
                }, t.prototype.getCustomButtonIconClass = function(t) {
                    var e;
                    return this.iconOverrideCustomButtonOption && (e = t[this.iconOverrideCustomButtonOption]) ? this.baseIconClass + " " + this.applyIconOverridePrefix(e) : ""
                }, t
            }();
        e.default = r, r.prototype.classes = {}, r.prototype.iconClasses = {}, r.prototype.baseIconClass = "", r.prototype.iconOverridePrefix = ""
    }, function(t, e, n) {
        function i(t, e) {
            t.then = function(n) {
                return "function" == typeof n ? s.resolve(n(e)) : t
            }
        }

        function r(t) {
            t.then = function(e, n) {
                return "function" == typeof n && n(), t
            }
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var o = n(3),
            s = {
                construct: function(t) {
                    var e = o.Deferred(),
                        n = e.promise();
                    return "function" == typeof t && t(function(t) {
                        e.resolve(t), i(n, t)
                    }, function() {
                        e.reject(), r(n)
                    }), n
                },
                resolve: function(t) {
                    var e = o.Deferred().resolve(t),
                        n = e.promise();
                    return i(n, t), n
                },
                reject: function() {
                    var t = o.Deferred().reject(),
                        e = t.promise();
                    return r(e), e
                }
            };
        e.default = s
    }, function(t, e, n) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = n(3),
            r = n(16),
            o = n(11),
            s = n(7);
        r.touchMouseIgnoreWait = 500;
        var a = null,
            l = 0,
            u = function() {
                function t() {
                    this.isTouching = !1, this.mouseIgnoreDepth = 0
                }
                return t.get = function() {
                    return a || (a = new t, a.bind()), a
                }, t.needed = function() {
                    t.get(), l++
                }, t.unneeded = function() {
                    --l || (a.unbind(), a = null)
                }, t.prototype.bind = function() {
                    var t = this;
                    this.listenTo(i(document), {
                        touchstart: this.handleTouchStart,
                        touchcancel: this.handleTouchCancel,
                        touchend: this.handleTouchEnd,
                        mousedown: this.handleMouseDown,
                        mousemove: this.handleMouseMove,
                        mouseup: this.handleMouseUp,
                        click: this.handleClick,
                        selectstart: this.handleSelectStart,
                        contextmenu: this.handleContextMenu
                    }), window.addEventListener("touchmove", this.handleTouchMoveProxy = function(e) {
                        t.handleTouchMove(i.Event(e))
                    }, {
                        passive: !1
                    }), window.addEventListener("scroll", this.handleScrollProxy = function(e) {
                        t.handleScroll(i.Event(e))
                    }, !0)
                }, t.prototype.unbind = function() {
                    this.stopListeningTo(i(document)), window.removeEventListener("touchmove", this.handleTouchMoveProxy), window.removeEventListener("scroll", this.handleScrollProxy, !0)
                }, t.prototype.handleTouchStart = function(t) {
                    this.stopTouch(t, !0), this.isTouching = !0, this.trigger("touchstart", t)
                }, t.prototype.handleTouchMove = function(t) {
                    this.isTouching && this.trigger("touchmove", t)
                }, t.prototype.handleTouchCancel = function(t) {
                    this.isTouching && (this.trigger("touchcancel", t), this.stopTouch(t))
                }, t.prototype.handleTouchEnd = function(t) {
                    this.stopTouch(t)
                }, t.prototype.handleMouseDown = function(t) {
                    this.shouldIgnoreMouse() || this.trigger("mousedown", t)
                }, t.prototype.handleMouseMove = function(t) {
                    this.shouldIgnoreMouse() || this.trigger("mousemove", t)
                }, t.prototype.handleMouseUp = function(t) {
                    this.shouldIgnoreMouse() || this.trigger("mouseup", t)
                }, t.prototype.handleClick = function(t) {
                    this.shouldIgnoreMouse() || this.trigger("click", t)
                }, t.prototype.handleSelectStart = function(t) {
                    this.trigger("selectstart", t)
                }, t.prototype.handleContextMenu = function(t) {
                    this.trigger("contextmenu", t)
                }, t.prototype.handleScroll = function(t) {
                    this.trigger("scroll", t)
                }, t.prototype.stopTouch = function(t, e) {
                    void 0 === e && (e = !1), this.isTouching && (this.isTouching = !1, this.trigger("touchend", t), e || this.startTouchMouseIgnore())
                }, t.prototype.startTouchMouseIgnore = function() {
                    var t = this,
                        e = r.touchMouseIgnoreWait;
                    e && (this.mouseIgnoreDepth++, setTimeout(function() {
                        t.mouseIgnoreDepth--
                    }, e))
                }, t.prototype.shouldIgnoreMouse = function() {
                    return this.isTouching || Boolean(this.mouseIgnoreDepth)
                }, t
            }();
        e.default = u, s.default.mixInto(u), o.default.mixInto(u)
    }, function(t, e, n) {
        function i(t, n) {
            e.viewHash[t] = n
        }

        function r(t) {
            return e.viewHash[t]
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var o = n(16);
        e.viewHash = {}, o.views = e.viewHash, e.defineView = i, e.getViewConfig = r
    }, function(t, e, n) {
        function i(t, e) {
            return !t && !e || !(!t || !e) && (t.component === e.component && r(t, e) && r(e, t))
        }

        function r(t, e) {
            for (var n in t)
                if (!/^(component|left|right|top|bottom)$/.test(n) && t[n] !== e[n]) return !1;
            return !0
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var o = n(2),
            s = n(4),
            a = n(54),
            l = function(t) {
                function e(e, n) {
                    var i = t.call(this, n) || this;
                    return i.component = e, i
                }
                return o.__extends(e, t), e.prototype.handleInteractionStart = function(e) {
                    var n, i, r, o = this.subjectEl;
                    this.component.hitsNeeded(), this.computeScrollBounds(), e ? (i = {
                        left: s.getEvX(e),
                        top: s.getEvY(e)
                    }, r = i, o && (n = s.getOuterRect(o), r = s.constrainPoint(r, n)), this.origHit = this.queryHit(r.left, r.top), o && this.options.subjectCenter && (this.origHit && (n = s.intersectRects(this.origHit, n) || n), r = s.getRectCenter(n)), this.coordAdjust = s.diffPoints(r, i)) : (this.origHit = null, this.coordAdjust = null), t.prototype.handleInteractionStart.call(this, e)
                }, e.prototype.handleDragStart = function(e) {
                    var n;
                    t.prototype.handleDragStart.call(this, e), (n = this.queryHit(s.getEvX(e), s.getEvY(e))) && this.handleHitOver(n)
                }, e.prototype.handleDrag = function(e, n, r) {
                    var o;
                    t.prototype.handleDrag.call(this, e, n, r), o = this.queryHit(s.getEvX(r), s.getEvY(r)), i(o, this.hit) || (this.hit && this.handleHitOut(), o && this.handleHitOver(o))
                }, e.prototype.handleDragEnd = function(e) {
                    this.handleHitDone(), t.prototype.handleDragEnd.call(this, e)
                }, e.prototype.handleHitOver = function(t) {
                    var e = i(t, this.origHit);
                    this.hit = t, this.trigger("hitOver", this.hit, e, this.origHit)
                }, e.prototype.handleHitOut = function() {
                    this.hit && (this.trigger("hitOut", this.hit), this.handleHitDone(), this.hit = null)
                }, e.prototype.handleHitDone = function() {
                    this.hit && this.trigger("hitDone", this.hit)
                }, e.prototype.handleInteractionEnd = function(e, n) {
                    t.prototype.handleInteractionEnd.call(this, e, n), this.origHit = null, this.hit = null, this.component.hitsNotNeeded()
                }, e.prototype.handleScrollEnd = function() {
                    t.prototype.handleScrollEnd.call(this), this.isDragging && (this.component.releaseHits(), this.component.prepareHits())
                }, e.prototype.queryHit = function(t, e) {
                    return this.coordAdjust && (t += this.coordAdjust.left, e += this.coordAdjust.top), this.component.queryHit(t, e)
                }, e
            }(a.default);
        e.default = l
    }, , , , , , , , function(t, e, n) {
        function i(t) {
            a.each(f, function(e, n) {
                null == t[e] && (t[e] = n(t))
            })
        }

        function r(t, n, i) {
            var r = e.localeOptionHash[t] || (e.localeOptionHash[t] = {});
            r.isRTL = i.isRTL, r.weekNumberTitle = i.weekHeader, a.each(p, function(t, e) {
                r[t] = e(i)
            });
            var o = a.datepicker;
            o && (o.regional[n] = o.regional[t] = i, o.regional.en = o.regional[""], o.setDefaults(i))
        }

        function o(t, n) {
            var i, r;
            i = e.localeOptionHash[t] || (e.localeOptionHash[t] = {}), n && (i = e.localeOptionHash[t] = d.mergeOptions([i, n])), r = s(t), a.each(h, function(t, e) {
                null == i[t] && (i[t] = e(r, i))
            }), d.globalDefaults.locale = t
        }

        function s(t) {
            return l.localeData(t) || l.localeData("en")
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var a = n(3),
            l = n(0),
            u = n(16),
            d = n(32),
            c = n(4);
        e.localeOptionHash = {}, u.locales = e.localeOptionHash;
        var p = {
                buttonText: function(t) {
                    return {
                        prev: c.stripHtmlEntities(t.prevText),
                        next: c.stripHtmlEntities(t.nextText),
                        today: c.stripHtmlEntities(t.currentText)
                    }
                },
                monthYearFormat: function(t) {
                    return t.showMonthAfterYear ? "YYYY[" + t.yearSuffix + "] MMMM" : "MMMM YYYY[" + t.yearSuffix + "]"
                }
            },
            h = {
                dayOfMonthFormat: function(t, e) {
                    var n = t.longDateFormat("l");
                    return n = n.replace(/^Y+[^\w\s]*|[^\w\s]*Y+$/g, ""), e.isRTL ? n += " ddd" : n = "ddd " + n, n
                },
                mediumTimeFormat: function(t) {
                    return t.longDateFormat("LT").replace(/\s*a$/i, "a")
                },
                smallTimeFormat: function(t) {
                    return t.longDateFormat("LT").replace(":mm", "(:mm)").replace(/(\Wmm)$/, "($1)").replace(/\s*a$/i, "a")
                },
                extraSmallTimeFormat: function(t) {
                    return t.longDateFormat("LT").replace(":mm", "(:mm)").replace(/(\Wmm)$/, "($1)").replace(/\s*a$/i, "t")
                },
                hourFormat: function(t) {
                    return t.longDateFormat("LT").replace(":mm", "").replace(/(\Wmm)$/, "").replace(/\s*a$/i, "a")
                },
                noMeridiemTimeFormat: function(t) {
                    return t.longDateFormat("LT").replace(/\s*a$/i, "")
                }
            },
            f = {
                smallDayDateFormat: function(t) {
                    return t.isRTL ? "D dd" : "dd D"
                },
                weekFormat: function(t) {
                    return t.isRTL ? "w[ " + t.weekNumberTitle + "]" : "[" + t.weekNumberTitle + " ]w"
                },
                smallWeekFormat: function(t) {
                    return t.isRTL ? "w[" + t.weekNumberTitle + "]" : "[" + t.weekNumberTitle + "]w"
                }
            };
        e.populateInstanceComputableOptions = i, e.datepickerLocale = r, e.locale = o, e.getMomentLocaleData = s, o("en", d.englishDefaults)
    }, function(t, e, n) {
        function i(t) {
            return r.mergeProps(t, o)
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r = n(4);
        e.globalDefaults = {
            titleRangeSeparator: " – ",
            monthYearFormat: "MMMM YYYY",
            defaultTimedEventDuration: "02:00:00",
            defaultAllDayEventDuration: {
                days: 1
            },
            forceEventDuration: !1,
            nextDayThreshold: "09:00:00",
            columnHeader: !0,
            defaultView: "month",
            aspectRatio: 1.35,
            header: {
                left: "title",
                center: "",
                right: "today prev,next"
            },
            weekends: !0,
            weekNumbers: !1,
            weekNumberTitle: "W",
            weekNumberCalculation: "local",
            scrollTime: "06:00:00",
            minTime: "00:00:00",
            maxTime: "24:00:00",
            showNonCurrentDates: !0,
            lazyFetching: !0,
            startParam: "start",
            endParam: "end",
            timezoneParam: "timezone",
            timezone: !1,
            locale: null,
            isRTL: !1,
            buttonText: {
                prev: "prev",
                next: "next",
                prevYear: "prev year",
                nextYear: "next year",
                year: "year",
                today: "today",
                month: "month",
                week: "week",
                day: "day"
            },
            allDayText: "all-day",
            agendaEventMinHeight: 0,
            theme: !1,
            dragOpacity: .75,
            dragRevertDuration: 500,
            dragScroll: !0,
            unselectAuto: !0,
            dropAccept: "*",
            eventOrder: "title",
            eventLimit: !1,
            eventLimitText: "more",
            eventLimitClick: "popover",
            dayPopoverFormat: "LL",
            handleWindowResize: !0,
            windowResizeDelay: 100,
            longPressDelay: 1e3
        }, e.englishDefaults = {
            dayPopoverFormat: "dddd, MMMM D"
        }, e.rtlDefaults = {
            header: {
                left: "next,prev today",
                center: "",
                right: "title"
            },
            buttonIcons: {
                prev: "right-single-arrow",
                next: "left-single-arrow",
                prevYear: "right-double-arrow",
                nextYear: "left-double-arrow"
            },
            themeButtonIcons: {
                prev: "circle-triangle-e",
                next: "circle-triangle-w",
                nextYear: "seek-prev",
                prevYear: "seek-next"
            }
        };
        var o = ["header", "footer", "buttonText", "buttonIcons", "themeButtonIcons"];
        e.mergeOptions = i
    }, function(t, e, n) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = n(2),
            r = n(4),
            o = function() {
                function t() {}
                return t.extend = function(t) {
                    var e = function(t) {
                        function e() {
                            return null !== t && t.apply(this, arguments) || this
                        }
                        return i.__extends(e, t), e
                    }(this);
                    return r.copyOwnProps(t, e.prototype), e
                }, t.mixin = function(t) {
                    r.copyOwnProps(t, this.prototype)
                }, t
            }();
        e.default = o
    }, function(t, e, n) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = n(3),
            r = n(208),
            o = function() {
                function t(t) {
                    this.source = t, this.className = [], this.miscProps = {}
                }
                return t.parse = function(t, e) {
                    var n = new this(e);
                    return !!n.applyProps(t) && n
                }, t.normalizeId = function(t) {
                    return String(t)
                }, t.generateId = function() {
                    return "_fc" + t.uuid++
                }, t.prototype.clone = function() {
                    var e = new this.constructor(this.source);
                    return e.id = this.id, e.rawId = this.rawId, e.uid = this.uid, t.copyVerbatimStandardProps(this, e), e.className = this.className.slice(), e.miscProps = i.extend({}, this.miscProps), e
                }, t.prototype.hasInverseRendering = function() {
                    return "inverse-background" === this.getRendering()
                }, t.prototype.hasBgRendering = function() {
                    var t = this.getRendering();
                    return "inverse-background" === t || "background" === t
                }, t.prototype.getRendering = function() {
                    return null != this.rendering ? this.rendering : this.source.rendering
                }, t.prototype.getConstraint = function() {
                    return null != this.constraint ? this.constraint : null != this.source.constraint ? this.source.constraint : this.source.calendar.opt("eventConstraint")
                }, t.prototype.getOverlap = function() {
                    return null != this.overlap ? this.overlap : null != this.source.overlap ? this.source.overlap : this.source.calendar.opt("eventOverlap")
                }, t.prototype.isStartExplicitlyEditable = function() {
                    return null != this.startEditable ? this.startEditable : this.source.startEditable
                }, t.prototype.isDurationExplicitlyEditable = function() {
                    return null != this.durationEditable ? this.durationEditable : this.source.durationEditable
                }, t.prototype.isExplicitlyEditable = function() {
                    return null != this.editable ? this.editable : this.source.editable
                }, t.prototype.toLegacy = function() {
                    var e = i.extend({}, this.miscProps);
                    return e._id = this.uid, e.source = this.source, e.className = this.className.slice(), e.allDay = this.isAllDay(), null != this.rawId && (e.id = this.rawId), t.copyVerbatimStandardProps(this, e), e
                }, t.prototype.applyManualStandardProps = function(e) {
                    return null != e.id ? this.id = t.normalizeId(this.rawId = e.id) : this.id = t.generateId(), null != e._id ? this.uid = String(e._id) : this.uid = t.generateId(), i.isArray(e.className) && (this.className = e.className), "string" == typeof e.className && (this.className = e.className.split(/\s+/)), !0
                }, t.prototype.applyMiscProps = function(t) {
                    i.extend(this.miscProps, t)
                }, t.uuid = 0, t.defineStandardProps = r.default.defineStandardProps, t.copyVerbatimStandardProps = r.default.copyVerbatimStandardProps, t
            }();
        e.default = o, r.default.mixInto(o), o.defineStandardProps({
            _id: !1,
            id: !1,
            className: !1,
            source: !1,
            title: !0,
            url: !0,
            rendering: !0,
            constraint: !0,
            overlap: !0,
            editable: !0,
            startEditable: !0,
            durationEditable: !0,
            color: !0,
            backgroundColor: !0,
            borderColor: !0,
            textColor: !0
        })
    }, function(t, e, n) {
        function i(t, e) {
            var n, i = [];
            for (n = 0; n < t.length; n++) i.push.apply(i, t[n].buildInstances(e));
            return i
        }

        function r(t) {
            return new l.default(t.dateProfile.unzonedRange, t.def, t)
        }

        function o(t) {
            return new u.default(new d.default(t.unzonedRange, t.eventDef.isAllDay()), t.eventDef, t.eventInstance)
        }

        function s(t) {
            return t.dateProfile.unzonedRange
        }

        function a(t) {
            return t.componentFootprint
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var l = n(211),
            u = n(36),
            d = n(12);
        e.eventDefsToEventInstances = i, e.eventInstanceToEventRange = r, e.eventRangeToEventFootprint = o, e.eventInstanceToUnzonedRange = s, e.eventFootprintToComponentFootprint = a
    }, function(t, e) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = function() {
            function t(t, e, n) {
                this.componentFootprint = t, this.eventDef = e, n && (this.eventInstance = n)
            }
            return t.prototype.getEventLegacy = function() {
                return (this.eventInstance || this.eventDef).toLegacy()
            }, t
        }();
        e.default = n
    }, function(t, e, n) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = n(4),
            r = n(17),
            o = n(34),
            s = n(50),
            a = n(13),
            l = function() {
                function t() {}
                return t.createFromRawProps = function(e, n, a) {
                    var l, u, d, c, p = e.def,
                        h = {},
                        f = {},
                        g = {},
                        v = {},
                        y = null,
                        m = null;
                    for (l in n) r.default.isStandardProp(l) ? h[l] = n[l] : p.isStandardProp(l) ? f[l] = n[l] : p.miscProps[l] !== n[l] && (g[l] = n[l]);
                    return u = r.default.parse(h, p.source), u && (d = s.default.createFromDiff(e.dateProfile, u, a)), f.id !== p.id && (y = f.id), i.isArraysEqual(f.className, p.className) || (m = f.className), o.default.copyVerbatimStandardProps(f, v), c = new t, c.eventDefId = y, c.className = m, c.verbatimStandardProps = v, c.miscProps = g, d && (c.dateMutation = d), c
                }, t.prototype.mutateSingle = function(t) {
                    var e;
                    return this.dateMutation && (e = t.dateProfile, t.dateProfile = this.dateMutation.buildNewDateProfile(e, t.source.calendar)), null != this.eventDefId && (t.id = o.default.normalizeId(t.rawId = this.eventDefId)), this.className && (t.className = this.className), this.verbatimStandardProps && a.default.copyVerbatimStandardProps(this.verbatimStandardProps, t), this.miscProps && t.applyMiscProps(this.miscProps), e ? function() {
                        t.dateProfile = e
                    } : function() {}
                }, t.prototype.setDateMutation = function(t) {
                    t && !t.isEmpty() ? this.dateMutation = t : this.dateMutation = null
                }, t.prototype.isEmpty = function() {
                    return !this.dateMutation
                }, t
            }();
        e.default = l
    }, function(t, e) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = {
            sourceClasses: [],
            registerClass: function(t) {
                this.sourceClasses.unshift(t)
            },
            parse: function(t, e) {
                var n, i, r = this.sourceClasses;
                for (n = 0; n < r.length; n++)
                    if (i = r[n].parse(t, e)) return i
            }
        }
    }, function(t, e, n) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = n(2),
            r = n(3),
            o = n(4),
            s = n(33),
            a = function(t) {
                function e(e) {
                    var n = t.call(this) || this;
                    return e = e || {}, n.overflowX = e.overflowX || e.overflow || "auto", n.overflowY = e.overflowY || e.overflow || "auto", n
                }
                return i.__extends(e, t), e.prototype.render = function() {
                    this.el = this.renderEl(), this.applyOverflow()
                }, e.prototype.renderEl = function() {
                    return this.scrollEl = r('<div class="fc-scroller"></div>')
                }, e.prototype.clear = function() {
                    this.setHeight("auto"), this.applyOverflow()
                }, e.prototype.destroy = function() {
                    this.el.remove()
                }, e.prototype.applyOverflow = function() {
                    this.scrollEl.css({
                        "overflow-x": this.overflowX,
                        "overflow-y": this.overflowY
                    })
                }, e.prototype.lockOverflow = function(t) {
                    var e = this.overflowX,
                        n = this.overflowY;
                    t = t || this.getScrollbarWidths(), "auto" === e && (e = t.top || t.bottom || this.scrollEl[0].scrollWidth - 1 > this.scrollEl[0].clientWidth ? "scroll" : "hidden"), "auto" === n && (n = t.left || t.right || this.scrollEl[0].scrollHeight - 1 > this.scrollEl[0].clientHeight ? "scroll" : "hidden"), this.scrollEl.css({
                        "overflow-x": e,
                        "overflow-y": n
                    })
                }, e.prototype.setHeight = function(t) {
                    this.scrollEl.height(t)
                }, e.prototype.getScrollTop = function() {
                    return this.scrollEl.scrollTop()
                }, e.prototype.setScrollTop = function(t) {
                    this.scrollEl.scrollTop(t)
                }, e.prototype.getClientWidth = function() {
                    return this.scrollEl[0].clientWidth
                }, e.prototype.getClientHeight = function() {
                    return this.scrollEl[0].clientHeight
                }, e.prototype.getScrollbarWidths = function() {
                    return o.getScrollbarWidths(this.scrollEl)
                }, e
            }(s.default);
        e.default = a
    }, function(t, e, n) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = n(2),
            r = n(3),
            o = n(4),
            s = n(219),
            a = n(21),
            l = function(t) {
                function e(e, n) {
                    var i = t.call(this, e, n) || this;
                    return i.segSelector = ".fc-event-container > *", i.dateSelectingClass && (i.dateClicking = new i.dateClickingClass(i)), i.dateSelectingClass && (i.dateSelecting = new i.dateSelectingClass(i)), i.eventPointingClass && (i.eventPointing = new i.eventPointingClass(i)), i.eventDraggingClass && i.eventPointing && (i.eventDragging = new i.eventDraggingClass(i, i.eventPointing)), i.eventResizingClass && i.eventPointing && (i.eventResizing = new i.eventResizingClass(i, i.eventPointing)), i.externalDroppingClass && (i.externalDropping = new i.externalDroppingClass(i)), i
                }
                return i.__extends(e, t), e.prototype.setElement = function(e) {
                    t.prototype.setElement.call(this, e), this.dateClicking && this.dateClicking.bindToEl(e), this.dateSelecting && this.dateSelecting.bindToEl(e), this.bindAllSegHandlersToEl(e)
                }, e.prototype.removeElement = function() {
                    this.endInteractions(), t.prototype.removeElement.call(this)
                }, e.prototype.executeEventUnrender = function() {
                    this.endInteractions(), t.prototype.executeEventUnrender.call(this)
                }, e.prototype.bindGlobalHandlers = function() {
                    t.prototype.bindGlobalHandlers.call(this), this.externalDropping && this.externalDropping.bindToDocument()
                }, e.prototype.unbindGlobalHandlers = function() {
                    t.prototype.unbindGlobalHandlers.call(this), this.externalDropping && this.externalDropping.unbindFromDocument()
                }, e.prototype.bindDateHandlerToEl = function(t, e, n) {
                    var i = this;
                    this.el.on(e, function(t) {
                        if (!r(t.target).is(i.segSelector + ":not(.fc-helper)," + i.segSelector + ":not(.fc-helper) *,.fc-more,a[data-goto]")) return n.call(i, t)
                    })
                }, e.prototype.bindAllSegHandlersToEl = function(t) {
                    [this.eventPointing, this.eventDragging, this.eventResizing].forEach(function(e) {
                        e && e.bindToEl(t)
                    })
                }, e.prototype.bindSegHandlerToEl = function(t, e, n) {
                    var i = this;
                    t.on(e, this.segSelector, function(t) {
                        var e = r(t.currentTarget);
                        if (!e.is(".fc-helper")) {
                            var o = e.data("fc-seg");
                            if (o && !i.shouldIgnoreEventPointing()) return n.call(i, o, t)
                        }
                    })
                }, e.prototype.shouldIgnoreMouse = function() {
                    return a.default.get().shouldIgnoreMouse()
                }, e.prototype.shouldIgnoreTouch = function() {
                    var t = this._getView();
                    return t.isSelected || t.selectedEvent
                }, e.prototype.shouldIgnoreEventPointing = function() {
                    return this.eventDragging && this.eventDragging.isDragging || this.eventResizing && this.eventResizing.isResizing
                }, e.prototype.canStartSelection = function(t, e) {
                    return o.getEvIsTouch(e) && !this.canStartResize(t, e) && (this.isEventDefDraggable(t.footprint.eventDef) || this.isEventDefResizable(t.footprint.eventDef))
                }, e.prototype.canStartDrag = function(t, e) {
                    return !this.canStartResize(t, e) && this.isEventDefDraggable(t.footprint.eventDef)
                }, e.prototype.canStartResize = function(t, e) {
                    var n = this._getView(),
                        i = t.footprint.eventDef;
                    return (!o.getEvIsTouch(e) || n.isEventDefSelected(i)) && this.isEventDefResizable(i) && r(e.target).is(".fc-resizer")
                }, e.prototype.endInteractions = function() {
                    [this.dateClicking, this.dateSelecting, this.eventPointing, this.eventDragging, this.eventResizing].forEach(function(t) {
                        t && t.end()
                    })
                }, e.prototype.isEventDefDraggable = function(t) {
                    return this.isEventDefStartEditable(t)
                }, e.prototype.isEventDefStartEditable = function(t) {
                    var e = t.isStartExplicitlyEditable();
                    return null == e && null == (e = this.opt("eventStartEditable")) && (e = this.isEventDefGenerallyEditable(t)), e
                }, e.prototype.isEventDefGenerallyEditable = function(t) {
                    var e = t.isExplicitlyEditable();
                    return null == e && (e = this.opt("editable")), e
                }, e.prototype.isEventDefResizableFromStart = function(t) {
                    return this.opt("eventResizableFromStart") && this.isEventDefResizable(t)
                }, e.prototype.isEventDefResizableFromEnd = function(t) {
                    return this.isEventDefResizable(t)
                }, e.prototype.isEventDefResizable = function(t) {
                    var e = t.isDurationExplicitlyEditable();
                    return null == e && null == (e = this.opt("eventDurationEditable")) && (e = this.isEventDefGenerallyEditable(t)), e
                }, e.prototype.diffDates = function(t, e) {
                    return this.largeUnit ? o.diffByUnit(t, e, this.largeUnit) : o.diffDayTime(t, e)
                }, e.prototype.isEventInstanceGroupAllowed = function(t) {
                    var e, n = this._getView(),
                        i = this.dateProfile,
                        r = this.eventRangesToEventFootprints(t.getAllEventRanges());
                    for (e = 0; e < r.length; e++)
                        if (!i.validUnzonedRange.containsRange(r[e].componentFootprint.unzonedRange)) return !1;
                    return n.calendar.constraints.isEventInstanceGroupAllowed(t)
                }, e.prototype.isExternalInstanceGroupAllowed = function(t) {
                    var e, n = this._getView(),
                        i = this.dateProfile,
                        r = this.eventRangesToEventFootprints(t.getAllEventRanges());
                    for (e = 0; e < r.length; e++)
                        if (!i.validUnzonedRange.containsRange(r[e].componentFootprint.unzonedRange)) return !1;
                    for (e = 0; e < r.length; e++)
                        if (!n.calendar.constraints.isSelectionFootprintAllowed(r[e].componentFootprint)) return !1;
                    return !0
                }, e
            }(s.default);
        e.default = l
    }, function(t, e, n) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = n(2),
            r = n(3),
            o = n(0),
            s = n(4),
            a = n(218),
            l = n(221),
            u = n(40),
            d = n(21),
            c = n(5),
            p = function(t) {
                function e(e, n) {
                    var i = t.call(this, null, n.options) || this;
                    return i.batchRenderDepth = 0, i.isSelected = !1, i.calendar = e, i.viewSpec = n, i.type = n.type, i.name = i.type, i.initRenderQueue(), i.initHiddenDays(), i.dateProfileGenerator = new i.dateProfileGeneratorClass(i), i.bindBaseRenderHandlers(), i.eventOrderSpecs = s.parseFieldSpecs(i.opt("eventOrder")), i.initialize && i.initialize(), i
                }
                return i.__extends(e, t), e.prototype._getView = function() {
                    return this
                }, e.prototype.opt = function(t) {
                    return this.options[t]
                }, e.prototype.initRenderQueue = function() {
                    this.renderQueue = new a.default({
                        event: this.opt("eventRenderWait")
                    }), this.renderQueue.on("start", this.onRenderQueueStart.bind(this)), this.renderQueue.on("stop", this.onRenderQueueStop.bind(this)), this.on("before:change", this.startBatchRender), this.on("change", this.stopBatchRender)
                }, e.prototype.onRenderQueueStart = function() {
                    this.calendar.freezeContentHeight(), this.addScroll(this.queryScroll())
                }, e.prototype.onRenderQueueStop = function() {
                    this.calendar.updateViewSize() && this.popScroll(), this.calendar.thawContentHeight()
                }, e.prototype.startBatchRender = function() {
                    this.batchRenderDepth++ || this.renderQueue.pause()
                }, e.prototype.stopBatchRender = function() {
                    --this.batchRenderDepth || this.renderQueue.resume()
                }, e.prototype.requestRender = function(t, e, n) {
                    this.renderQueue.queue(t, e, n)
                }, e.prototype.whenSizeUpdated = function(t) {
                    this.renderQueue.isRunning ? this.renderQueue.one("stop", t.bind(this)) : t.call(this)
                }, e.prototype.computeTitle = function(t) {
                    var e;
                    return e = /^(year|month)$/.test(t.currentRangeUnit) ? t.currentUnzonedRange : t.activeUnzonedRange, this.formatRange({
                        start: this.calendar.msToMoment(e.startMs, t.isRangeAllDay),
                        end: this.calendar.msToMoment(e.endMs, t.isRangeAllDay)
                    }, t.isRangeAllDay, this.opt("titleFormat") || this.computeTitleFormat(t), this.opt("titleRangeSeparator"))
                }, e.prototype.computeTitleFormat = function(t) {
                    var e = t.currentRangeUnit;
                    return "year" === e ? "YYYY" : "month" === e ? this.opt("monthYearFormat") : t.currentUnzonedRange.as("days") > 1 ? "ll" : "LL"
                }, e.prototype.setDate = function(t) {
                    var e = this.get("dateProfile"),
                        n = this.dateProfileGenerator.build(t, void 0, !0);
                    e && e.activeUnzonedRange.equals(n.activeUnzonedRange) || this.set("dateProfile", n)
                }, e.prototype.unsetDate = function() {
                    this.unset("dateProfile")
                }, e.prototype.fetchInitialEvents = function(t) {
                    var e = this.calendar,
                        n = t.isRangeAllDay && !this.usesMinMaxTime;
                    return e.requestEvents(e.msToMoment(t.activeUnzonedRange.startMs, n), e.msToMoment(t.activeUnzonedRange.endMs, n))
                }, e.prototype.bindEventChanges = function() {
                    this.listenTo(this.calendar, "eventsReset", this.resetEvents)
                }, e.prototype.unbindEventChanges = function() {
                    this.stopListeningTo(this.calendar, "eventsReset")
                }, e.prototype.setEvents = function(t) {
                    this.set("currentEvents", t), this.set("hasEvents", !0)
                }, e.prototype.unsetEvents = function() {
                    this.unset("currentEvents"), this.unset("hasEvents")
                }, e.prototype.resetEvents = function(t) {
                    this.startBatchRender(), this.unsetEvents(), this.setEvents(t), this.stopBatchRender()
                }, e.prototype.requestDateRender = function(t) {
                    var e = this;
                    this.requestRender(function() {
                        e.executeDateRender(t)
                    }, "date", "init")
                }, e.prototype.requestDateUnrender = function() {
                    var t = this;
                    this.requestRender(function() {
                        t.executeDateUnrender()
                    }, "date", "destroy")
                }, e.prototype.executeDateRender = function(e) {
                    t.prototype.executeDateRender.call(this, e), this.render && this.render(), this.trigger("datesRendered"), this.addScroll({
                        isDateInit: !0
                    }), this.startNowIndicator()
                }, e.prototype.executeDateUnrender = function() {
                    this.unselect(), this.stopNowIndicator(), this.trigger("before:datesUnrendered"), this.destroy && this.destroy(), t.prototype.executeDateUnrender.call(this)
                }, e.prototype.bindBaseRenderHandlers = function() {
                    var t = this;
                    this.on("datesRendered", function() {
                        t.whenSizeUpdated(t.triggerViewRender)
                    }), this.on("before:datesUnrendered", function() {
                        t.triggerViewDestroy()
                    })
                }, e.prototype.triggerViewRender = function() {
                    this.publiclyTrigger("viewRender", {
                        context: this,
                        args: [this, this.el]
                    })
                }, e.prototype.triggerViewDestroy = function() {
                    this.publiclyTrigger("viewDestroy", {
                        context: this,
                        args: [this, this.el]
                    })
                }, e.prototype.requestEventsRender = function(t) {
                    var e = this;
                    this.requestRender(function() {
                        e.executeEventRender(t), e.whenSizeUpdated(e.triggerAfterEventsRendered)
                    }, "event", "init")
                }, e.prototype.requestEventsUnrender = function() {
                    var t = this;
                    this.requestRender(function() {
                        t.triggerBeforeEventsDestroyed(), t.executeEventUnrender()
                    }, "event", "destroy")
                }, e.prototype.requestBusinessHoursRender = function(t) {
                    var e = this;
                    this.requestRender(function() {
                        e.renderBusinessHours(t)
                    }, "businessHours", "init")
                }, e.prototype.requestBusinessHoursUnrender = function() {
                    var t = this;
                    this.requestRender(function() {
                        t.unrenderBusinessHours()
                    }, "businessHours", "destroy")
                }, e.prototype.bindGlobalHandlers = function() {
                    t.prototype.bindGlobalHandlers.call(this), this.listenTo(d.default.get(), {
                        touchstart: this.processUnselect,
                        mousedown: this.handleDocumentMousedown
                    })
                }, e.prototype.unbindGlobalHandlers = function() {
                    t.prototype.unbindGlobalHandlers.call(this), this.stopListeningTo(d.default.get())
                }, e.prototype.startNowIndicator = function() {
                    var t, e, n, i = this;
                    this.opt("nowIndicator") && (t = this.getNowIndicatorUnit()) && (e = s.proxy(this, "updateNowIndicator"), this.initialNowDate = this.calendar.getNow(), this.initialNowQueriedMs = (new Date).valueOf(), n = this.initialNowDate.clone().startOf(t).add(1, t).valueOf() - this.initialNowDate.valueOf(), this.nowIndicatorTimeoutID = setTimeout(function() {
                        i.nowIndicatorTimeoutID = null, e(), n = +o.duration(1, t), n = Math.max(100, n), i.nowIndicatorIntervalID = setInterval(e, n)
                    }, n))
                }, e.prototype.updateNowIndicator = function() {
                    this.isDatesRendered && this.initialNowDate && (this.unrenderNowIndicator(), this.renderNowIndicator(this.initialNowDate.clone().add((new Date).valueOf() - this.initialNowQueriedMs)), this.isNowIndicatorRendered = !0)
                }, e.prototype.stopNowIndicator = function() {
                    this.isNowIndicatorRendered && (this.nowIndicatorTimeoutID && (clearTimeout(this.nowIndicatorTimeoutID), this.nowIndicatorTimeoutID = null), this.nowIndicatorIntervalID && (clearInterval(this.nowIndicatorIntervalID), this.nowIndicatorIntervalID = null), this.unrenderNowIndicator(), this.isNowIndicatorRendered = !1)
                }, e.prototype.updateSize = function(e, n, i) {
                    this.setHeight ? this.setHeight(e, n) : t.prototype.updateSize.call(this, e, n, i), this.updateNowIndicator()
                }, e.prototype.addScroll = function(t) {
                    var e = this.queuedScroll || (this.queuedScroll = {});
                    r.extend(e, t)
                }, e.prototype.popScroll = function() {
                    this.applyQueuedScroll(), this.queuedScroll = null
                }, e.prototype.applyQueuedScroll = function() {
                    this.queuedScroll && this.applyScroll(this.queuedScroll)
                }, e.prototype.queryScroll = function() {
                    var t = {};
                    return this.isDatesRendered && r.extend(t, this.queryDateScroll()), t
                }, e.prototype.applyScroll = function(t) {
                    t.isDateInit && this.isDatesRendered && r.extend(t, this.computeInitialDateScroll()), this.isDatesRendered && this.applyDateScroll(t)
                }, e.prototype.computeInitialDateScroll = function() {
                    return {}
                }, e.prototype.queryDateScroll = function() {
                    return {}
                }, e.prototype.applyDateScroll = function(t) {}, e.prototype.reportEventDrop = function(t, e, n, i) {
                    var r = this.calendar.eventManager,
                        s = r.mutateEventsWithId(t.def.id, e),
                        a = e.dateMutation;
                    a && (t.dateProfile = a.buildNewDateProfile(t.dateProfile, this.calendar)), this.triggerEventDrop(t, a && a.dateDelta || o.duration(), s, n, i)
                }, e.prototype.triggerEventDrop = function(t, e, n, i, r) {
                    this.publiclyTrigger("eventDrop", {
                        context: i[0],
                        args: [t.toLegacy(), e, n, r, {}, this]
                    })
                }, e.prototype.reportExternalDrop = function(t, e, n, i, r, o) {
                    e && this.calendar.eventManager.addEventDef(t, n), this.triggerExternalDrop(t, e, i, r, o)
                }, e.prototype.triggerExternalDrop = function(t, e, n, i, r) {
                    this.publiclyTrigger("drop", {
                        context: n[0],
                        args: [t.dateProfile.start.clone(), i, r, this]
                    }), e && this.publiclyTrigger("eventReceive", {
                        context: this,
                        args: [t.buildInstance().toLegacy(), this]
                    })
                }, e.prototype.reportEventResize = function(t, e, n, i) {
                    var r = this.calendar.eventManager,
                        o = r.mutateEventsWithId(t.def.id, e);
                    t.dateProfile = e.dateMutation.buildNewDateProfile(t.dateProfile, this.calendar), this.triggerEventResize(t, e.dateMutation.endDelta, o, n, i)
                }, e.prototype.triggerEventResize = function(t, e, n, i, r) {
                    this.publiclyTrigger("eventResize", {
                        context: i[0],
                        args: [t.toLegacy(), e, n, r, {}, this]
                    })
                }, e.prototype.select = function(t, e) {
                    this.unselect(e), this.renderSelectionFootprint(t), this.reportSelection(t, e)
                }, e.prototype.renderSelectionFootprint = function(e) {
                    this.renderSelection ? this.renderSelection(e.toLegacy(this.calendar)) : t.prototype.renderSelectionFootprint.call(this, e)
                }, e.prototype.reportSelection = function(t, e) {
                    this.isSelected = !0, this.triggerSelect(t, e)
                }, e.prototype.triggerSelect = function(t, e) {
                    var n = this.calendar.footprintToDateProfile(t);
                    this.publiclyTrigger("select", {
                        context: this,
                        args: [n.start, n.end, e, this]
                    })
                }, e.prototype.unselect = function(t) {
                    this.isSelected && (this.isSelected = !1, this.destroySelection && this.destroySelection(), this.unrenderSelection(), this.publiclyTrigger("unselect", {
                        context: this,
                        args: [t, this]
                    }))
                }, e.prototype.selectEventInstance = function(t) {
                    this.selectedEventInstance && this.selectedEventInstance === t || (this.unselectEventInstance(), this.getEventSegs().forEach(function(e) {
                        e.footprint.eventInstance === t && e.el && e.el.addClass("fc-selected")
                    }), this.selectedEventInstance = t)
                }, e.prototype.unselectEventInstance = function() {
                    this.selectedEventInstance && (this.getEventSegs().forEach(function(t) {
                        t.el && t.el.removeClass("fc-selected")
                    }), this.selectedEventInstance = null)
                }, e.prototype.isEventDefSelected = function(t) {
                    return this.selectedEventInstance && this.selectedEventInstance.def.id === t.id
                }, e.prototype.handleDocumentMousedown = function(t) {
                    s.isPrimaryMouseButton(t) && this.processUnselect(t)
                }, e.prototype.processUnselect = function(t) {
                    this.processRangeUnselect(t), this.processEventUnselect(t)
                }, e.prototype.processRangeUnselect = function(t) {
                    var e;
                    this.isSelected && this.opt("unselectAuto") && ((e = this.opt("unselectCancel")) && r(t.target).closest(e).length || this.unselect(t))
                }, e.prototype.processEventUnselect = function(t) {
                    this.selectedEventInstance && (r(t.target).closest(".fc-selected").length || this.unselectEventInstance())
                }, e.prototype.triggerBaseRendered = function() {
                    this.publiclyTrigger("viewRender", {
                        context: this,
                        args: [this, this.el]
                    })
                }, e.prototype.triggerBaseUnrendered = function() {
                    this.publiclyTrigger("viewDestroy", {
                        context: this,
                        args: [this, this.el]
                    })
                }, e.prototype.triggerDayClick = function(t, e, n) {
                    var i = this.calendar.footprintToDateProfile(t);
                    this.publiclyTrigger("dayClick", {
                        context: e,
                        args: [i.start, n, this]
                    })
                }, e.prototype.isDateInOtherMonth = function(t, e) {
                    return !1
                }, e.prototype.getUnzonedRangeOption = function(t) {
                    var e = this.opt(t);
                    if ("function" == typeof e && (e = e.apply(null, Array.prototype.slice.call(arguments, 1))), e) return this.calendar.parseUnzonedRange(e)
                }, e.prototype.initHiddenDays = function() {
                    var t, e = this.opt("hiddenDays") || [],
                        n = [],
                        i = 0;
                    for (!1 === this.opt("weekends") && e.push(0, 6), t = 0; t < 7; t++)(n[t] = -1 !== r.inArray(t, e)) || i++;
                    if (!i) throw new Error("invalid hiddenDays");
                    this.isHiddenDayHash = n
                }, e.prototype.trimHiddenDays = function(t) {
                    var e = t.getStart(),
                        n = t.getEnd();
                    return e && (e = this.skipHiddenDays(e)), n && (n = this.skipHiddenDays(n, -1, !0)), null === e || null === n || e < n ? new c.default(e, n) : null
                }, e.prototype.isHiddenDay = function(t) {
                    return o.isMoment(t) && (t = t.day()), this.isHiddenDayHash[t]
                }, e.prototype.skipHiddenDays = function(t, e, n) {
                    void 0 === e && (e = 1), void 0 === n && (n = !1);
                    for (var i = t.clone(); this.isHiddenDayHash[(i.day() + (n ? e : 0) + 7) % 7];) i.add(e, "days");
                    return i
                }, e
            }(u.default);
        e.default = p, p.prototype.usesMinMaxTime = !1, p.prototype.dateProfileGeneratorClass = l.default, p.watch("displayingDates", ["isInDom", "dateProfile"], function(t) {
            this.requestDateRender(t.dateProfile)
        }, function() {
            this.requestDateUnrender()
        }), p.watch("displayingBusinessHours", ["displayingDates", "businessHourGenerator"], function(t) {
            this.requestBusinessHoursRender(t.businessHourGenerator)
        }, function() {
            this.requestBusinessHoursUnrender()
        }), p.watch("initialEvents", ["dateProfile"], function(t) {
            return this.fetchInitialEvents(t.dateProfile)
        }), p.watch("bindingEvents", ["initialEvents"], function(t) {
            this.setEvents(t.initialEvents), this.bindEventChanges()
        }, function() {
            this.unbindEventChanges(), this.unsetEvents()
        }), p.watch("displayingEvents", ["displayingDates", "hasEvents"], function() {
            this.requestEventsRender(this.get("currentEvents"))
        }, function() {
            this.requestEventsUnrender()
        }), p.watch("title", ["dateProfile"], function(t) {
            return this.title = this.computeTitle(t.dateProfile)
        }), p.watch("legacyDateProps", ["dateProfile"], function(t) {
            var e = this.calendar,
                n = t.dateProfile;
            this.start = e.msToMoment(n.activeUnzonedRange.startMs, n.isRangeAllDay), this.end = e.msToMoment(n.activeUnzonedRange.endMs, n.isRangeAllDay), this.intervalStart = e.msToMoment(n.currentUnzonedRange.startMs, n.isRangeAllDay), this.intervalEnd = e.msToMoment(n.currentUnzonedRange.endMs, n.isRangeAllDay)
        })
    }, function(t, e, n) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = n(3),
            r = n(4),
            o = function() {
                function t(t, e) {
                    this.view = t._getView(), this.component = t, this.fillRenderer = e
                }
                return t.prototype.opt = function(t) {
                    return this.view.opt(t)
                }, t.prototype.rangeUpdated = function() {
                    var t, e;
                    this.eventTimeFormat = this.opt("eventTimeFormat") || this.opt("timeFormat") || this.computeEventTimeFormat(), t = this.opt("displayEventTime"), null == t && (t = this.computeDisplayEventTime()), e = this.opt("displayEventEnd"), null == e && (e = this.computeDisplayEventEnd()), this.displayEventTime = t, this.displayEventEnd = e
                }, t.prototype.render = function(t) {
                    var e, n, i, r = this.component._getDateProfile(),
                        o = [],
                        s = [];
                    for (e in t) n = t[e], i = n.sliceRenderRanges(r.activeUnzonedRange), n.getEventDef().hasBgRendering() ? o.push.apply(o, i) : s.push.apply(s, i);
                    this.renderBgRanges(o), this.renderFgRanges(s)
                }, t.prototype.unrender = function() {
                    this.unrenderBgRanges(), this.unrenderFgRanges()
                }, t.prototype.renderFgRanges = function(t) {
                    var e = this.component.eventRangesToEventFootprints(t),
                        n = this.component.eventFootprintsToSegs(e);
                    n = this.renderFgSegEls(n), !1 !== this.renderFgSegs(n) && (this.fgSegs = n)
                }, t.prototype.unrenderFgRanges = function() {
                    this.unrenderFgSegs(this.fgSegs || []), this.fgSegs = null
                }, t.prototype.renderBgRanges = function(t) {
                    var e = this.component.eventRangesToEventFootprints(t),
                        n = this.component.eventFootprintsToSegs(e);
                    !1 !== this.renderBgSegs(n) && (this.bgSegs = n)
                }, t.prototype.unrenderBgRanges = function() {
                    this.unrenderBgSegs(), this.bgSegs = null
                }, t.prototype.getSegs = function() {
                    return (this.bgSegs || []).concat(this.fgSegs || [])
                }, t.prototype.renderFgSegs = function(t) {
                    return !1
                }, t.prototype.unrenderFgSegs = function(t) {}, t.prototype.renderBgSegs = function(t) {
                    var e = this;
                    if (!this.fillRenderer) return !1;
                    this.fillRenderer.renderSegs("bgEvent", t, {
                        getClasses: function(t) {
                            return e.getBgClasses(t.footprint.eventDef)
                        },
                        getCss: function(t) {
                            return {
                                "background-color": e.getBgColor(t.footprint.eventDef)
                            }
                        },
                        filterEl: function(t, n) {
                            return e.filterEventRenderEl(t.footprint, n)
                        }
                    })
                }, t.prototype.unrenderBgSegs = function() {
                    this.fillRenderer && this.fillRenderer.unrender("bgEvent")
                }, t.prototype.renderFgSegEls = function(t, e) {
                    var n = this;
                    void 0 === e && (e = !1);
                    var r, o = this.view.hasPublicHandlers("eventRender"),
                        s = "",
                        a = [];
                    if (t.length) {
                        for (r = 0; r < t.length; r++) this.beforeFgSegHtml(t[r]), s += this.fgSegHtml(t[r], e);
                        i(s).each(function(e, r) {
                            var s = t[e],
                                l = i(r);
                            o && (l = n.filterEventRenderEl(s.footprint, l)), l && (l.data("fc-seg", s), s.el = l, a.push(s))
                        })
                    }
                    return a
                }, t.prototype.beforeFgSegHtml = function(t) {}, t.prototype.fgSegHtml = function(t, e) {}, t.prototype.getSegClasses = function(t, e, n) {
                    var i = ["fc-event", t.isStart ? "fc-start" : "fc-not-start", t.isEnd ? "fc-end" : "fc-not-end"].concat(this.getClasses(t.footprint.eventDef));
                    return e && i.push("fc-draggable"), n && i.push("fc-resizable"), this.view.isEventDefSelected(t.footprint.eventDef) && i.push("fc-selected"), i
                }, t.prototype.filterEventRenderEl = function(t, e) {
                    var n = t.getEventLegacy(),
                        r = this.view.publiclyTrigger("eventRender", {
                            context: n,
                            args: [n, e, this.view]
                        });
                    return !1 === r ? e = null : r && !0 !== r && (e = i(r)), e
                }, t.prototype.getTimeText = function(t, e, n) {
                    return this._getTimeText(t.eventInstance.dateProfile.start, t.eventInstance.dateProfile.end, t.componentFootprint.isAllDay, e, n)
                }, t.prototype._getTimeText = function(t, e, n, i, r) {
                    return null == i && (i = this.eventTimeFormat), null == r && (r = this.displayEventEnd), this.displayEventTime && !n ? r && e ? this.view.formatRange({
                        start: t,
                        end: e
                    }, !1, i) : t.format(i) : ""
                }, t.prototype.computeEventTimeFormat = function() {
                    return this.opt("smallTimeFormat")
                }, t.prototype.computeDisplayEventTime = function() {
                    return !0
                }, t.prototype.computeDisplayEventEnd = function() {
                    return !0
                }, t.prototype.getBgClasses = function(t) {
                    var e = this.getClasses(t);
                    return e.push("fc-bgevent"), e
                }, t.prototype.getClasses = function(t) {
                    var e, n = this.getStylingObjs(t),
                        i = [];
                    for (e = 0; e < n.length; e++) i.push.apply(i, n[e].eventClassName || n[e].className || []);
                    return i
                }, t.prototype.getSkinCss = function(t) {
                    return {
                        "background-color": this.getBgColor(t),
                        "border-color": this.getBorderColor(t),
                        color: this.getTextColor(t)
                    }
                }, t.prototype.getBgColor = function(t) {
                    var e, n, i = this.getStylingObjs(t);
                    for (e = 0; e < i.length && !n; e++) n = i[e].eventBackgroundColor || i[e].eventColor || i[e].backgroundColor || i[e].color;
                    return n || (n = this.opt("eventBackgroundColor") || this.opt("eventColor")), n
                }, t.prototype.getBorderColor = function(t) {
                    var e, n, i = this.getStylingObjs(t);
                    for (e = 0; e < i.length && !n; e++) n = i[e].eventBorderColor || i[e].eventColor || i[e].borderColor || i[e].color;
                    return n || (n = this.opt("eventBorderColor") || this.opt("eventColor")), n
                }, t.prototype.getTextColor = function(t) {
                    var e, n, i = this.getStylingObjs(t);
                    for (e = 0; e < i.length && !n; e++) n = i[e].eventTextColor || i[e].textColor;
                    return n || (n = this.opt("eventTextColor")), n
                }, t.prototype.getStylingObjs = function(t) {
                    var e = this.getFallbackStylingObjs(t);
                    return e.unshift(t), e
                }, t.prototype.getFallbackStylingObjs = function(t) {
                    return [t.source]
                }, t.prototype.sortEventSegs = function(t) {
                    t.sort(r.proxy(this, "compareEventSegs"))
                }, t.prototype.compareEventSegs = function(t, e) {
                    var n = t.footprint,
                        i = e.footprint,
                        o = n.componentFootprint,
                        s = i.componentFootprint,
                        a = o.unzonedRange,
                        l = s.unzonedRange;
                    return a.startMs - l.startMs || l.endMs - l.startMs - (a.endMs - a.startMs) || s.isAllDay - o.isAllDay || r.compareByFieldSpecs(n.eventDef, i.eventDef, this.view.eventOrderSpecs, n.eventDef.miscProps, i.eventDef.miscProps)
                }, t
            }();
        e.default = o
    }, , , , , function(t, e, n) {
        function i(t) {
            return "en" !== t.locale() ? t.clone().locale("en") : t
        }

        function r(t, e) {
            return h(a(e).fakeFormatString, t)
        }

        function o(t, e, n, i, r) {
            var o;
            return t = y.default.parseZone(t), e = y.default.parseZone(e), o = t.localeData(), n = o.longDateFormat(n) || n, s(a(n), t, e, i || " - ", r)
        }

        function s(t, e, n, i, r) {
            var o, s, a, l = t.sameUnits,
                u = e.clone().stripZone(),
                d = n.clone().stripZone(),
                c = f(t.fakeFormatString, e),
                p = f(t.fakeFormatString, n),
                h = "",
                v = "",
                y = "",
                m = "",
                b = "";
            for (o = 0; o < l.length && (!l[o] || u.isSame(d, l[o])); o++) h += c[o];
            for (s = l.length - 1; s > o && (!l[s] || u.isSame(d, l[s])) && (s - 1 !== o || "." !== c[s]); s--) v = c[s] + v;
            for (a = o; a <= s; a++) y += c[a], m += p[a];
            return (y || m) && (b = r ? m + i + y : y + i + m), g(h + b + v)
        }

        function a(t) {
            return C[t] || (C[t] = l(t))
        }

        function l(t) {
            var e = u(t);
            return {
                fakeFormatString: c(e),
                sameUnits: p(e)
            }
        }

        function u(t) {
            for (var e, n = [], i = /\[([^\]]*)\]|\(([^\)]*)\)|(LTS|LT|(\w)\4*o?)|([^\w\[\(]+)/g; e = i.exec(t);) e[1] ? n.push.apply(n, d(e[1])) : e[2] ? n.push({
                maybe: u(e[2])
            }) : e[3] ? n.push({
                token: e[3]
            }) : e[5] && n.push.apply(n, d(e[5]));
            return n
        }

        function d(t) {
            return ". " === t ? [".", " "] : [t]
        }

        function c(t) {
            var e, n, i = [];
            for (e = 0; e < t.length; e++) n = t[e], "string" == typeof n ? i.push("[" + n + "]") : n.token ? n.token in E ? i.push(b + "[" + n.token + "]") : i.push(n.token) : n.maybe && i.push(w + c(n.maybe) + w);
            return i.join(m)
        }

        function p(t) {
            var e, n, i, r = [];
            for (e = 0; e < t.length; e++) n = t[e], n.token ? (i = S[n.token.charAt(0)], r.push(i ? i.unit : "second")) : n.maybe ? r.push.apply(r, p(n.maybe)) : r.push(null);
            return r
        }

        function h(t, e) {
            return g(f(t, e).join(""))
        }

        function f(t, e) {
            var n, i, r = [],
                o = y.oldMomentFormat(e, t),
                s = o.split(m);
            for (n = 0; n < s.length; n++) i = s[n], i.charAt(0) === b ? r.push(E[i.substring(1)](e)) : r.push(i);
            return r
        }

        function g(t) {
            return t.replace(D, function(t, e) {
                return e.match(/[1-9]/) ? e : ""
            })
        }

        function v(t) {
            var e, n, i, r, o = u(t);
            for (e = 0; e < o.length; e++) n = o[e], n.token && (i = S[n.token.charAt(0)]) && (!r || i.value > r.value) && (r = i);
            return r ? r.unit : null
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var y = n(10);
        y.newMomentProto.format = function() {
            return this._fullCalendar && arguments[0] ? r(this, arguments[0]) : this._ambigTime ? y.oldMomentFormat(i(this), "YYYY-MM-DD") : this._ambigZone ? y.oldMomentFormat(i(this), "YYYY-MM-DD[T]HH:mm:ss") : this._fullCalendar ? y.oldMomentFormat(i(this)) : y.oldMomentProto.format.apply(this, arguments)
        }, y.newMomentProto.toISOString = function() {
            return this._ambigTime ? y.oldMomentFormat(i(this), "YYYY-MM-DD") : this._ambigZone ? y.oldMomentFormat(i(this), "YYYY-MM-DD[T]HH:mm:ss") : this._fullCalendar ? y.oldMomentProto.toISOString.apply(i(this), arguments) : y.oldMomentProto.toISOString.apply(this, arguments)
        };
        var m = "\v",
            b = "",
            w = "",
            D = new RegExp(w + "([^" + w + "]*)" + w, "g"),
            E = {
                t: function(t) {
                    return y.oldMomentFormat(t, "a").charAt(0)
                },
                T: function(t) {
                    return y.oldMomentFormat(t, "A").charAt(0)
                }
            },
            S = {
                Y: {
                    value: 1,
                    unit: "year"
                },
                M: {
                    value: 2,
                    unit: "month"
                },
                W: {
                    value: 3,
                    unit: "week"
                },
                w: {
                    value: 3,
                    unit: "week"
                },
                D: {
                    value: 4,
                    unit: "day"
                },
                d: {
                    value: 4,
                    unit: "day"
                }
            };
        e.formatDate = r, e.formatRange = o;
        var C = {};
        e.queryMostGranularFormatUnit = v
    }, function(t, e, n) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = n(2),
            r = n(33),
            o = n(11),
            s = n(7),
            a = function(t) {
                function e() {
                    var e = t.call(this) || this;
                    return e._watchers = {}, e._props = {}, e.applyGlobalWatchers(), e.constructed(), e
                }
                return i.__extends(e, t), e.watch = function(t) {
                    for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
                    this.prototype.hasOwnProperty("_globalWatchArgs") || (this.prototype._globalWatchArgs = Object.create(this.prototype._globalWatchArgs)), this.prototype._globalWatchArgs[t] = e
                }, e.prototype.constructed = function() {}, e.prototype.applyGlobalWatchers = function() {
                    var t, e = this._globalWatchArgs;
                    for (t in e) this.watch.apply(this, [t].concat(e[t]))
                }, e.prototype.has = function(t) {
                    return t in this._props
                }, e.prototype.get = function(t) {
                    return void 0 === t ? this._props : this._props[t]
                }, e.prototype.set = function(t, e) {
                    var n;
                    "string" == typeof t ? (n = {}, n[t] = void 0 === e ? null : e) : n = t, this.setProps(n)
                }, e.prototype.reset = function(t) {
                    var e, n = this._props,
                        i = {};
                    for (e in n) i[e] = void 0;
                    for (e in t) i[e] = t[e];
                    this.setProps(i)
                }, e.prototype.unset = function(t) {
                    var e, n, i = {};
                    for (e = "string" == typeof t ? [t] : t, n = 0; n < e.length; n++) i[e[n]] = void 0;
                    this.setProps(i)
                }, e.prototype.setProps = function(t) {
                    var e, n, i = {},
                        r = 0;
                    for (e in t) "object" != typeof(n = t[e]) && n === this._props[e] || (i[e] = n, r++);
                    if (r) {
                        this.trigger("before:batchChange", i);
                        for (e in i) n = i[e], this.trigger("before:change", e, n), this.trigger("before:change:" + e, n);
                        for (e in i) n = i[e], void 0 === n ? delete this._props[e] : this._props[e] = n, this.trigger("change:" + e, n), this.trigger("change", e, n);
                        this.trigger("batchChange", i)
                    }
                }, e.prototype.watch = function(t, e, n, i) {
                    var r = this;
                    this.unwatch(t), this._watchers[t] = this._watchDeps(e, function(e) {
                        var i = n.call(r, e);
                        i && i.then ? (r.unset(t), i.then(function(e) {
                            r.set(t, e)
                        })) : r.set(t, i)
                    }, function(e) {
                        r.unset(t), i && i.call(r, e)
                    })
                }, e.prototype.unwatch = function(t) {
                    var e = this._watchers[t];
                    e && (delete this._watchers[t], e.teardown())
                }, e.prototype._watchDeps = function(t, e, n) {
                    var i = this,
                        r = 0,
                        o = t.length,
                        s = 0,
                        a = {},
                        l = [],
                        u = !1,
                        d = function(t, e, i) {
                            1 === ++r && s === o && (u = !0, n(a), u = !1)
                        },
                        c = function(t, n, i) {
                            void 0 === n ? (i || void 0 === a[t] || s--, delete a[t]) : (i || void 0 !== a[t] || s++, a[t] = n), --r || s === o && (u || e(a))
                        },
                        p = function(t, e) {
                            i.on(t, e), l.push([t, e])
                        };
                    return t.forEach(function(t) {
                        var e = !1;
                        "?" === t.charAt(0) && (t = t.substring(1), e = !0), p("before:change:" + t, function(t) {
                            d()
                        }), p("change:" + t, function(n) {
                            c(t, n, e)
                        })
                    }), t.forEach(function(t) {
                        var e = !1;
                        "?" === t.charAt(0) && (t = t.substring(1), e = !0), i.has(t) ? (a[t] = i.get(t), s++) : e && s++
                    }), s === o && e(a), {
                        teardown: function() {
                            for (var t = 0; t < l.length; t++) i.off(l[t][0], l[t][1]);
                            l = null, s === o && n()
                        },
                        flash: function() {
                            s === o && (n(), e(a))
                        }
                    }
                }, e.prototype.flash = function(t) {
                    var e = this._watchers[t];
                    e && e.flash()
                }, e
            }(r.default);
        e.default = a, a.prototype._globalWatchArgs = {}, o.default.mixInto(a), s.default.mixInto(a)
    }, function(t, e, n) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = n(0),
            r = n(4),
            o = n(13),
            s = n(210);
        e.default = {
            parse: function(t, e) {
                return r.isTimeString(t.start) || i.isDuration(t.start) || r.isTimeString(t.end) || i.isDuration(t.end) ? s.default.parse(t, e) : o.default.parse(t, e)
            }
        }
    }, function(t, e, n) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = n(4),
            r = n(17),
            o = function() {
                function t() {
                    this.clearEnd = !1, this.forceTimed = !1, this.forceAllDay = !1
                }
                return t.createFromDiff = function(e, n, r) {
                    function o(t, e) {
                        return r ? i.diffByUnit(t, e, r) : n.isAllDay() ? i.diffDay(t, e) : i.diffDayTime(t, e)
                    }
                    var s, a, l, u, d = e.end && !n.end,
                        c = e.isAllDay() && !n.isAllDay(),
                        p = !e.isAllDay() && n.isAllDay();
                    return s = o(n.start, e.start), n.end && (a = o(n.unzonedRange.getEnd(), e.unzonedRange.getEnd()), l = a.subtract(s)), u = new t, u.clearEnd = d, u.forceTimed = c, u.forceAllDay = p, u.setDateDelta(s), u.setEndDelta(l), u
                }, t.prototype.buildNewDateProfile = function(t, e) {
                    var n = t.start.clone(),
                        i = null,
                        o = !1;
                    return t.end && !this.clearEnd ? i = t.end.clone() : this.endDelta && !i && (i = e.getDefaultEventEnd(t.isAllDay(), n)), this.forceTimed ? (o = !0, n.hasTime() || n.time(0), i && !i.hasTime() && i.time(0)) : this.forceAllDay && (n.hasTime() && n.stripTime(), i && i.hasTime() && i.stripTime()), this.dateDelta && (o = !0, n.add(this.dateDelta), i && i.add(this.dateDelta)), this.endDelta && (o = !0, i.add(this.endDelta)), this.startDelta && (o = !0, n.add(this.startDelta)), o && (n = e.applyTimezone(n), i && (i = e.applyTimezone(i))), !i && e.opt("forceEventDuration") && (i = e.getDefaultEventEnd(t.isAllDay(), n)), new r.default(n, i, e)
                }, t.prototype.setDateDelta = function(t) {
                    t && t.valueOf() ? this.dateDelta = t : this.dateDelta = null
                }, t.prototype.setStartDelta = function(t) {
                    t && t.valueOf() ? this.startDelta = t : this.startDelta = null
                }, t.prototype.setEndDelta = function(t) {
                    t && t.valueOf() ? this.endDelta = t : this.endDelta = null
                }, t.prototype.isEmpty = function() {
                    return !(this.clearEnd || this.forceTimed || this.forceAllDay || this.dateDelta || this.startDelta || this.endDelta)
                }, t
            }();
        e.default = o
    }, function(t, e, n) {
        function i(t, e) {
            a[t] = e
        }

        function r(t) {
            return t ? !0 === t ? s.default : a[t] : o.default
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var o = n(213),
            s = n(214),
            a = {};
        e.defineThemeSystem = i, e.getThemeSystemClass = r
    }, function(t, e, n) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = n(2),
            r = n(3),
            o = n(4),
            s = n(20),
            a = n(6),
            l = n(13),
            u = function(t) {
                function e(e) {
                    var n = t.call(this, e) || this;
                    return n.eventDefs = [], n
                }
                return i.__extends(e, t), e.parse = function(t, e) {
                    var n;
                    return r.isArray(t.events) ? n = t : r.isArray(t) && (n = {
                        events: t
                    }), !!n && a.default.parse.call(this, n, e)
                }, e.prototype.setRawEventDefs = function(t) {
                    this.rawEventDefs = t, this.eventDefs = this.parseEventDefs(t)
                }, e.prototype.fetch = function(t, e, n) {
                    var i, r = this.eventDefs;
                    if (null != this.currentTimezone && this.currentTimezone !== n)
                        for (i = 0; i < r.length; i++) r[i] instanceof l.default && r[i].rezone();
                    return this.currentTimezone = n, s.default.resolve(r)
                }, e.prototype.addEventDef = function(t) {
                    this.eventDefs.push(t)
                }, e.prototype.removeEventDefsById = function(t) {
                    return o.removeMatching(this.eventDefs, function(e) {
                        return e.id === t
                    })
                }, e.prototype.removeAllEventDefs = function() {
                    this.eventDefs = []
                }, e.prototype.getPrimitive = function() {
                    return this.rawEventDefs
                }, e.prototype.applyManualStandardProps = function(e) {
                    var n = t.prototype.applyManualStandardProps.call(this, e);
                    return this.setRawEventDefs(e.events), n
                }, e
            }(a.default);
        e.default = u, u.defineStandardProps({
            events: !1
        })
    }, function(t, e, n) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = n(3),
            r = n(4),
            o = function() {
                function t(t) {
                    this.isHorizontal = !1, this.isVertical = !1, this.els = i(t.els), this.isHorizontal = t.isHorizontal, this.isVertical = t.isVertical, this.forcedOffsetParentEl = t.offsetParent ? i(t.offsetParent) : null
                }
                return t.prototype.build = function() {
                    var t = this.forcedOffsetParentEl;
                    !t && this.els.length > 0 && (t = this.els.eq(0).offsetParent()), this.origin = t ? t.offset() : null, this.boundingRect = this.queryBoundingRect(), this.isHorizontal && this.buildElHorizontals(), this.isVertical && this.buildElVerticals()
                }, t.prototype.clear = function() {
                    this.origin = null, this.boundingRect = null, this.lefts = null, this.rights = null, this.tops = null, this.bottoms = null
                }, t.prototype.ensureBuilt = function() {
                    this.origin || this.build()
                }, t.prototype.buildElHorizontals = function() {
                    var t = [],
                        e = [];
                    this.els.each(function(n, r) {
                        var o = i(r),
                            s = o.offset().left,
                            a = o.outerWidth();
                        t.push(s), e.push(s + a)
                    }), this.lefts = t, this.rights = e
                }, t.prototype.buildElVerticals = function() {
                    var t = [],
                        e = [];
                    this.els.each(function(n, r) {
                        var o = i(r),
                            s = o.offset().top,
                            a = o.outerHeight();
                        t.push(s), e.push(s + a)
                    }), this.tops = t, this.bottoms = e
                }, t.prototype.getHorizontalIndex = function(t) {
                    this.ensureBuilt();
                    var e, n = this.lefts,
                        i = this.rights,
                        r = n.length;
                    for (e = 0; e < r; e++)
                        if (t >= n[e] && t < i[e]) return e
                }, t.prototype.getVerticalIndex = function(t) {
                    this.ensureBuilt();
                    var e, n = this.tops,
                        i = this.bottoms,
                        r = n.length;
                    for (e = 0; e < r; e++)
                        if (t >= n[e] && t < i[e]) return e
                }, t.prototype.getLeftOffset = function(t) {
                    return this.ensureBuilt(), this.lefts[t]
                }, t.prototype.getLeftPosition = function(t) {
                    return this.ensureBuilt(), this.lefts[t] - this.origin.left
                }, t.prototype.getRightOffset = function(t) {
                    return this.ensureBuilt(), this.rights[t]
                }, t.prototype.getRightPosition = function(t) {
                    return this.ensureBuilt(), this.rights[t] - this.origin.left
                }, t.prototype.getWidth = function(t) {
                    return this.ensureBuilt(), this.rights[t] - this.lefts[t]
                }, t.prototype.getTopOffset = function(t) {
                    return this.ensureBuilt(), this.tops[t]
                }, t.prototype.getTopPosition = function(t) {
                    return this.ensureBuilt(), this.tops[t] - this.origin.top
                }, t.prototype.getBottomOffset = function(t) {
                    return this.ensureBuilt(), this.bottoms[t]
                }, t.prototype.getBottomPosition = function(t) {
                    return this.ensureBuilt(), this.bottoms[t] - this.origin.top
                }, t.prototype.getHeight = function(t) {
                    return this.ensureBuilt(), this.bottoms[t] - this.tops[t]
                }, t.prototype.queryBoundingRect = function() {
                    var t;
                    return this.els.length > 0 && (t = r.getScrollParent(this.els.eq(0)), !t.is(document)) ? r.getClientRect(t) : null
                }, t.prototype.isPointInBounds = function(t, e) {
                    return this.isLeftInBounds(t) && this.isTopInBounds(e)
                }, t.prototype.isLeftInBounds = function(t) {
                    return !this.boundingRect || t >= this.boundingRect.left && t < this.boundingRect.right
                }, t.prototype.isTopInBounds = function(t) {
                    return !this.boundingRect || t >= this.boundingRect.top && t < this.boundingRect.bottom
                }, t
            }();
        e.default = o
    }, function(t, e, n) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = n(3),
            r = n(4),
            o = n(7),
            s = n(21),
            a = function() {
                function t(t) {
                    this.isInteracting = !1, this.isDistanceSurpassed = !1, this.isDelayEnded = !1, this.isDragging = !1, this.isTouch = !1, this.isGeneric = !1, this.shouldCancelTouchScroll = !0, this.scrollAlwaysKills = !1, this.isAutoScroll = !1, this.scrollSensitivity = 30, this.scrollSpeed = 200, this.scrollIntervalMs = 50, this.options = t || {}
                }
                return t.prototype.startInteraction = function(t, e) {
                    if (void 0 === e && (e = {}), "mousedown" === t.type) {
                        if (s.default.get().shouldIgnoreMouse()) return;
                        if (!r.isPrimaryMouseButton(t)) return;
                        t.preventDefault()
                    }
                    this.isInteracting || (this.delay = r.firstDefined(e.delay, this.options.delay, 0), this.minDistance = r.firstDefined(e.distance, this.options.distance, 0), this.subjectEl = this.options.subjectEl, r.preventSelection(i("body")), this.isInteracting = !0, this.isTouch = r.getEvIsTouch(t), this.isGeneric = "dragstart" === t.type, this.isDelayEnded = !1, this.isDistanceSurpassed = !1, this.originX = r.getEvX(t), this.originY = r.getEvY(t), this.scrollEl = r.getScrollParent(i(t.target)), this.bindHandlers(), this.initAutoScroll(), this.handleInteractionStart(t), this.startDelay(t), this.minDistance || this.handleDistanceSurpassed(t))
                }, t.prototype.handleInteractionStart = function(t) {
                    this.trigger("interactionStart", t)
                }, t.prototype.endInteraction = function(t, e) {
                    this.isInteracting && (this.endDrag(t), this.delayTimeoutId && (clearTimeout(this.delayTimeoutId), this.delayTimeoutId = null), this.destroyAutoScroll(), this.unbindHandlers(), this.isInteracting = !1, this.handleInteractionEnd(t, e), r.allowSelection(i("body")))
                }, t.prototype.handleInteractionEnd = function(t, e) {
                    this.trigger("interactionEnd", t, e || !1)
                }, t.prototype.bindHandlers = function() {
                    var t = s.default.get();
                    this.isGeneric ? this.listenTo(i(document), {
                        drag: this.handleMove,
                        dragstop: this.endInteraction
                    }) : this.isTouch ? this.listenTo(t, {
                        touchmove: this.handleTouchMove,
                        touchend: this.endInteraction,
                        scroll: this.handleTouchScroll
                    }) : this.listenTo(t, {
                        mousemove: this.handleMouseMove,
                        mouseup: this.endInteraction
                    }), this.listenTo(t, {
                        selectstart: r.preventDefault,
                        contextmenu: r.preventDefault
                    })
                }, t.prototype.unbindHandlers = function() {
                    this.stopListeningTo(s.default.get()), this.stopListeningTo(i(document))
                }, t.prototype.startDrag = function(t, e) {
                    this.startInteraction(t, e), this.isDragging || (this.isDragging = !0, this.handleDragStart(t))
                }, t.prototype.handleDragStart = function(t) {
                    this.trigger("dragStart", t)
                }, t.prototype.handleMove = function(t) {
                    var e = r.getEvX(t) - this.originX,
                        n = r.getEvY(t) - this.originY,
                        i = this.minDistance;
                    this.isDistanceSurpassed || e * e + n * n >= i * i && this.handleDistanceSurpassed(t), this.isDragging && this.handleDrag(e, n, t)
                }, t.prototype.handleDrag = function(t, e, n) {
                    this.trigger("drag", t, e, n), this.updateAutoScroll(n)
                }, t.prototype.endDrag = function(t) {
                    this.isDragging && (this.isDragging = !1, this.handleDragEnd(t))
                }, t.prototype.handleDragEnd = function(t) {
                    this.trigger("dragEnd", t)
                }, t.prototype.startDelay = function(t) {
                    var e = this;
                    this.delay ? this.delayTimeoutId = setTimeout(function() {
                        e.handleDelayEnd(t)
                    }, this.delay) : this.handleDelayEnd(t)
                }, t.prototype.handleDelayEnd = function(t) {
                    this.isDelayEnded = !0, this.isDistanceSurpassed && this.startDrag(t)
                }, t.prototype.handleDistanceSurpassed = function(t) {
                    this.isDistanceSurpassed = !0, this.isDelayEnded && this.startDrag(t)
                }, t.prototype.handleTouchMove = function(t) {
                    this.isDragging && this.shouldCancelTouchScroll && t.preventDefault(), this.handleMove(t)
                }, t.prototype.handleMouseMove = function(t) {
                    this.handleMove(t)
                }, t.prototype.handleTouchScroll = function(t) {
                    this.isDragging && !this.scrollAlwaysKills || this.endInteraction(t, !0)
                }, t.prototype.trigger = function(t) {
                    for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
                    this.options[t] && this.options[t].apply(this, e), this["_" + t] && this["_" + t].apply(this, e)
                }, t.prototype.initAutoScroll = function() {
                    var t = this.scrollEl;
                    this.isAutoScroll = this.options.scroll && t && !t.is(window) && !t.is(document), this.isAutoScroll && this.listenTo(t, "scroll", r.debounce(this.handleDebouncedScroll, 100))
                }, t.prototype.destroyAutoScroll = function() {
                    this.endAutoScroll(), this.isAutoScroll && this.stopListeningTo(this.scrollEl, "scroll")
                }, t.prototype.computeScrollBounds = function() {
                    this.isAutoScroll && (this.scrollBounds = r.getOuterRect(this.scrollEl))
                }, t.prototype.updateAutoScroll = function(t) {
                    var e, n, i, o, s = this.scrollSensitivity,
                        a = this.scrollBounds,
                        l = 0,
                        u = 0;
                    a && (e = (s - (r.getEvY(t) - a.top)) / s, n = (s - (a.bottom - r.getEvY(t))) / s, i = (s - (r.getEvX(t) - a.left)) / s, o = (s - (a.right - r.getEvX(t))) / s, e >= 0 && e <= 1 ? l = e * this.scrollSpeed * -1 : n >= 0 && n <= 1 && (l = n * this.scrollSpeed), i >= 0 && i <= 1 ? u = i * this.scrollSpeed * -1 : o >= 0 && o <= 1 && (u = o * this.scrollSpeed)), this.setScrollVel(l, u)
                }, t.prototype.setScrollVel = function(t, e) {
                    this.scrollTopVel = t, this.scrollLeftVel = e, this.constrainScrollVel(), !this.scrollTopVel && !this.scrollLeftVel || this.scrollIntervalId || (this.scrollIntervalId = setInterval(r.proxy(this, "scrollIntervalFunc"), this.scrollIntervalMs))
                }, t.prototype.constrainScrollVel = function() {
                    var t = this.scrollEl;
                    this.scrollTopVel < 0 ? t.scrollTop() <= 0 && (this.scrollTopVel = 0) : this.scrollTopVel > 0 && t.scrollTop() + t[0].clientHeight >= t[0].scrollHeight && (this.scrollTopVel = 0), this.scrollLeftVel < 0 ? t.scrollLeft() <= 0 && (this.scrollLeftVel = 0) : this.scrollLeftVel > 0 && t.scrollLeft() + t[0].clientWidth >= t[0].scrollWidth && (this.scrollLeftVel = 0)
                }, t.prototype.scrollIntervalFunc = function() {
                    var t = this.scrollEl,
                        e = this.scrollIntervalMs / 1e3;
                    this.scrollTopVel && t.scrollTop(t.scrollTop() + this.scrollTopVel * e), this.scrollLeftVel && t.scrollLeft(t.scrollLeft() + this.scrollLeftVel * e), this.constrainScrollVel(), this.scrollTopVel || this.scrollLeftVel || this.endAutoScroll()
                }, t.prototype.endAutoScroll = function() {
                    this.scrollIntervalId && (clearInterval(this.scrollIntervalId), this.scrollIntervalId = null, this.handleScrollEnd())
                }, t.prototype.handleDebouncedScroll = function() {
                    this.scrollIntervalId || this.handleScrollEnd()
                }, t.prototype.handleScrollEnd = function() {}, t
            }();
        e.default = a, o.default.mixInto(a)
    }, function(t, e, n) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = n(2),
            r = n(4),
            o = n(14),
            s = function(t) {
                function e() {
                    return null !== t && t.apply(this, arguments) || this
                }
                return i.__extends(e, t), e.prototype.updateDayTable = function() {
                    for (var t, e, n, i = this, r = i.view, o = r.calendar, s = o.msToUtcMoment(i.dateProfile.renderUnzonedRange.startMs, !0), a = o.msToUtcMoment(i.dateProfile.renderUnzonedRange.endMs, !0), l = -1, u = [], d = []; s.isBefore(a);) r.isHiddenDay(s) ? u.push(l + .5) : (l++, u.push(l), d.push(s.clone())), s.add(1, "days");
                    if (this.breakOnWeeks) {
                        for (e = d[0].day(), t = 1; t < d.length && d[t].day() !== e; t++);
                        n = Math.ceil(d.length / t)
                    } else n = 1, t = d.length;
                    this.dayDates = d, this.dayIndices = u, this.daysPerRow = t, this.rowCnt = n, this.updateDayTableCols()
                }, e.prototype.updateDayTableCols = function() {
                    this.colCnt = this.computeColCnt(), this.colHeadFormat = this.opt("columnHeaderFormat") || this.opt("columnFormat") || this.computeColHeadFormat()
                }, e.prototype.computeColCnt = function() {
                    return this.daysPerRow
                }, e.prototype.getCellDate = function(t, e) {
                    return this.dayDates[this.getCellDayIndex(t, e)].clone()
                }, e.prototype.getCellRange = function(t, e) {
                    var n = this.getCellDate(t, e);
                    return {
                        start: n,
                        end: n.clone().add(1, "days")
                    }
                }, e.prototype.getCellDayIndex = function(t, e) {
                    return t * this.daysPerRow + this.getColDayIndex(e)
                }, e.prototype.getColDayIndex = function(t) {
                    return this.isRTL ? this.colCnt - 1 - t : t
                }, e.prototype.getDateDayIndex = function(t) {
                    var e = this.dayIndices,
                        n = t.diff(this.dayDates[0], "days");
                    return n < 0 ? e[0] - 1 : n >= e.length ? e[e.length - 1] + 1 : e[n]
                }, e.prototype.computeColHeadFormat = function() {
                    return this.rowCnt > 1 || this.colCnt > 10 ? "ddd" : this.colCnt > 1 ? this.opt("dayOfMonthFormat") : "dddd"
                }, e.prototype.sliceRangeByRow = function(t) {
                    var e, n, i, r, o, s = this.daysPerRow,
                        a = this.view.computeDayRange(t),
                        l = this.getDateDayIndex(a.start),
                        u = this.getDateDayIndex(a.end.clone().subtract(1, "days")),
                        d = [];
                    for (e = 0; e < this.rowCnt; e++) n = e * s, i = n + s - 1, r = Math.max(l, n), o = Math.min(u, i), r = Math.ceil(r), o = Math.floor(o), r <= o && d.push({
                        row: e,
                        firstRowDayIndex: r - n,
                        lastRowDayIndex: o - n,
                        isStart: r === l,
                        isEnd: o === u
                    });
                    return d
                }, e.prototype.sliceRangeByDay = function(t) {
                    var e, n, i, r, o, s, a = this.daysPerRow,
                        l = this.view.computeDayRange(t),
                        u = this.getDateDayIndex(l.start),
                        d = this.getDateDayIndex(l.end.clone().subtract(1, "days")),
                        c = [];
                    for (e = 0; e < this.rowCnt; e++)
                        for (n = e * a, i = n + a - 1, r = n; r <= i; r++) o = Math.max(u, r), s = Math.min(d, r), o = Math.ceil(o), s = Math.floor(s), o <= s && c.push({
                            row: e,
                            firstRowDayIndex: o - n,
                            lastRowDayIndex: s - n,
                            isStart: o === u,
                            isEnd: s === d
                        });
                    return c
                }, e.prototype.renderHeadHtml = function() {
                    var t = this.view.calendar.theme;
                    return '<div class="fc-row ' + t.getClass("headerRow") + '"><table class="' + t.getClass("tableGrid") + '"><thead>' + this.renderHeadTrHtml() + "</thead></table></div>"
                }, e.prototype.renderHeadIntroHtml = function() {
                    return this.renderIntroHtml()
                }, e.prototype.renderHeadTrHtml = function() {
                    return "<tr>" + (this.isRTL ? "" : this.renderHeadIntroHtml()) + this.renderHeadDateCellsHtml() + (this.isRTL ? this.renderHeadIntroHtml() : "") + "</tr>"
                }, e.prototype.renderHeadDateCellsHtml = function() {
                    var t, e, n = [];
                    for (t = 0; t < this.colCnt; t++) e = this.getCellDate(0, t), n.push(this.renderHeadDateCellHtml(e));
                    return n.join("")
                }, e.prototype.renderHeadDateCellHtml = function(t, e, n) {
                    var i, o = this,
                        s = o.view,
                        a = o.dateProfile.activeUnzonedRange.containsDate(t),
                        l = ["fc-day-header", s.calendar.theme.getClass("widgetHeader")];
                    return i = "function" == typeof o.opt("columnHeaderHtml") ? o.opt("columnHeaderHtml")(t) : "function" == typeof o.opt("columnHeaderText") ? r.htmlEscape(o.opt("columnHeaderText")(t)) : r.htmlEscape(t.format(o.colHeadFormat)), 1 === o.rowCnt ? l = l.concat(o.getDayClasses(t, !0)) : l.push("fc-" + r.dayIDs[t.day()]), '<th class="' + l.join(" ") + '"' + (1 === (a && o.rowCnt) ? ' data-date="' + t.format("YYYY-MM-DD") + '"' : "") + (e > 1 ? ' colspan="' + e + '"' : "") + (n ? " " + n : "") + ">" + (a ? s.buildGotoAnchorHtml({
                        date: t,
                        forceOff: o.rowCnt > 1 || 1 === o.colCnt
                    }, i) : i) + "</th>"
                }, e.prototype.renderBgTrHtml = function(t) {
                    return "<tr>" + (this.isRTL ? "" : this.renderBgIntroHtml(t)) + this.renderBgCellsHtml(t) + (this.isRTL ? this.renderBgIntroHtml(t) : "") + "</tr>"
                }, e.prototype.renderBgIntroHtml = function(t) {
                    return this.renderIntroHtml()
                }, e.prototype.renderBgCellsHtml = function(t) {
                    var e, n, i = [];
                    for (e = 0; e < this.colCnt; e++) n = this.getCellDate(t, e), i.push(this.renderBgCellHtml(n));
                    return i.join("")
                }, e.prototype.renderBgCellHtml = function(t, e) {
                    var n = this,
                        i = n.view,
                        r = n.dateProfile.activeUnzonedRange.containsDate(t),
                        o = n.getDayClasses(t);
                    return o.unshift("fc-day", i.calendar.theme.getClass("widgetContent")), '<td class="' + o.join(" ") + '"' + (r ? ' data-date="' + t.format("YYYY-MM-DD") + '"' : "") + (e ? " " + e : "") + "></td>"
                }, e.prototype.renderIntroHtml = function() {}, e.prototype.bookendCells = function(t) {
                    var e = this.renderIntroHtml();
                    e && (this.isRTL ? t.append(e) : t.prepend(e))
                }, e
            }(o.default);
        e.default = s
    }, function(t, e) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = function() {
            function t(t, e) {
                this.component = t, this.fillRenderer = e
            }
            return t.prototype.render = function(t) {
                var e = this.component,
                    n = e._getDateProfile().activeUnzonedRange,
                    i = t.buildEventInstanceGroup(e.hasAllDayBusinessHours, n),
                    r = i ? e.eventRangesToEventFootprints(i.sliceRenderRanges(n)) : [];
                this.renderEventFootprints(r)
            }, t.prototype.renderEventFootprints = function(t) {
                var e = this.component.eventFootprintsToSegs(t);
                this.renderSegs(e), this.segs = e
            }, t.prototype.renderSegs = function(t) {
                this.fillRenderer && this.fillRenderer.renderSegs("businessHours", t, {
                    getClasses: function(t) {
                        return ["fc-nonbusiness", "fc-bgevent"]
                    }
                })
            }, t.prototype.unrender = function() {
                this.fillRenderer && this.fillRenderer.unrender("businessHours"), this.segs = null
            }, t.prototype.getSegs = function() {
                return this.segs || []
            }, t
        }();
        e.default = n
    }, function(t, e, n) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = n(3),
            r = n(4),
            o = function() {
                function t(t) {
                    this.fillSegTag = "div", this.component = t, this.elsByFill = {}
                }
                return t.prototype.renderFootprint = function(t, e, n) {
                    this.renderSegs(t, this.component.componentFootprintToSegs(e), n)
                }, t.prototype.renderSegs = function(t, e, n) {
                    var i;
                    return e = this.buildSegEls(t, e, n), i = this.attachSegEls(t, e), i && this.reportEls(t, i), e
                }, t.prototype.unrender = function(t) {
                    var e = this.elsByFill[t];
                    e && (e.remove(), delete this.elsByFill[t])
                }, t.prototype.buildSegEls = function(t, e, n) {
                    var r, o = this,
                        s = "",
                        a = [];
                    if (e.length) {
                        for (r = 0; r < e.length; r++) s += this.buildSegHtml(t, e[r], n);
                        i(s).each(function(t, r) {
                            var s = e[t],
                                l = i(r);
                            n.filterEl && (l = n.filterEl(s, l)), l && (l = i(l), l.is(o.fillSegTag) && (s.el = l, a.push(s)))
                        })
                    }
                    return a
                }, t.prototype.buildSegHtml = function(t, e, n) {
                    var i = n.getClasses ? n.getClasses(e) : [],
                        o = r.cssToStr(n.getCss ? n.getCss(e) : {});
                    return "<" + this.fillSegTag + (i.length ? ' class="' + i.join(" ") + '"' : "") + (o ? ' style="' + o + '"' : "") + " />"
                }, t.prototype.attachSegEls = function(t, e) {}, t.prototype.reportEls = function(t, e) {
                    this.elsByFill[t] ? this.elsByFill[t] = this.elsByFill[t].add(e) : this.elsByFill[t] = i(e)
                }, t
            }();
        e.default = o
    }, function(t, e, n) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = n(13),
            r = n(36),
            o = n(6),
            s = function() {
                function t(t, e) {
                    this.view = t._getView(), this.component = t, this.eventRenderer = e
                }
                return t.prototype.renderComponentFootprint = function(t) {
                    this.renderEventFootprints([this.fabricateEventFootprint(t)])
                }, t.prototype.renderEventDraggingFootprints = function(t, e, n) {
                    this.renderEventFootprints(t, e, "fc-dragging", n ? null : this.view.opt("dragOpacity"))
                }, t.prototype.renderEventResizingFootprints = function(t, e, n) {
                    this.renderEventFootprints(t, e, "fc-resizing")
                }, t.prototype.renderEventFootprints = function(t, e, n, i) {
                    var r, o = this.component.eventFootprintsToSegs(t),
                        s = "fc-helper " + (n || "");
                    for (o = this.eventRenderer.renderFgSegEls(o), r = 0; r < o.length; r++) o[r].el.addClass(s);
                    if (null != i)
                        for (r = 0; r < o.length; r++) o[r].el.css("opacity", i);
                    this.helperEls = this.renderSegs(o, e)
                }, t.prototype.renderSegs = function(t, e) {}, t.prototype.unrender = function() {
                    this.helperEls && (this.helperEls.remove(), this.helperEls = null)
                }, t.prototype.fabricateEventFootprint = function(t) {
                    var e, n = this.view.calendar,
                        s = n.footprintToDateProfile(t),
                        a = new i.default(new o.default(n));
                    return a.dateProfile = s, e = a.buildInstance(), new r.default(t, a, e)
                }, t
            }();
        e.default = s
    }, function(t, e, n) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = n(2),
            r = n(21),
            o = n(15),
            s = function(t) {
                function e() {
                    return null !== t && t.apply(this, arguments) || this
                }
                return i.__extends(e, t), e.prototype.bindToEl = function(t) {
                    var e = this.component;
                    e.bindSegHandlerToEl(t, "click", this.handleClick.bind(this)), e.bindSegHandlerToEl(t, "mouseenter", this.handleMouseover.bind(this)), e.bindSegHandlerToEl(t, "mouseleave", this.handleMouseout.bind(this))
                }, e.prototype.handleClick = function(t, e) {
                    !1 === this.component.publiclyTrigger("eventClick", {
                        context: t.el[0],
                        args: [t.footprint.getEventLegacy(), e, this.view]
                    }) && e.preventDefault()
                }, e.prototype.handleMouseover = function(t, e) {
                    r.default.get().shouldIgnoreMouse() || this.mousedOverSeg || (this.mousedOverSeg = t, this.view.isEventDefResizable(t.footprint.eventDef) && t.el.addClass("fc-allow-mouse-resize"), this.component.publiclyTrigger("eventMouseover", {
                        context: t.el[0],
                        args: [t.footprint.getEventLegacy(), e, this.view]
                    }))
                }, e.prototype.handleMouseout = function(t, e) {
                    this.mousedOverSeg && (this.mousedOverSeg = null, this.view.isEventDefResizable(t.footprint.eventDef) && t.el.removeClass("fc-allow-mouse-resize"), this.component.publiclyTrigger("eventMouseout", {
                        context: t.el[0],
                        args: [t.footprint.getEventLegacy(), e || {}, this.view]
                    }))
                }, e.prototype.end = function() {
                    this.mousedOverSeg && this.handleMouseout(this.mousedOverSeg)
                }, e
            }(o.default);
        e.default = s
    }, function(t, e, n) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = n(2),
            r = n(14),
            o = n(245),
            s = n(225),
            a = n(59),
            l = n(224),
            u = n(223),
            d = n(222),
            c = function(t) {
                function e() {
                    return null !== t && t.apply(this, arguments) || this
                }
                return i.__extends(e, t), e
            }(r.default);
        e.default = c, c.prototype.dateClickingClass = o.default, c.prototype.dateSelectingClass = s.default, c.prototype.eventPointingClass = a.default, c.prototype.eventDraggingClass = l.default, c.prototype.eventResizingClass = u.default, c.prototype.externalDroppingClass = d.default
    }, function(t, e, n) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = n(2),
            r = n(3),
            o = n(4),
            s = n(53),
            a = n(249),
            l = n(5),
            u = n(12),
            d = n(36),
            c = n(56),
            p = n(60),
            h = n(40),
            f = n(55),
            g = n(250),
            v = n(251),
            y = n(252),
            m = function(t) {
                function e(e) {
                    var n = t.call(this, e) || this;
                    return n.cellWeekNumbersVisible = !1, n.bottomCoordPadding = 0, n.isRigid = !1, n.hasAllDayBusinessHours = !0, n
                }
                return i.__extends(e, t), e.prototype.componentFootprintToSegs = function(t) {
                    var e, n, i = this.sliceRangeByRow(t.unzonedRange);
                    for (e = 0; e < i.length; e++) n = i[e], this.isRTL ? (n.leftCol = this.daysPerRow - 1 - n.lastRowDayIndex, n.rightCol = this.daysPerRow - 1 - n.firstRowDayIndex) : (n.leftCol = n.firstRowDayIndex, n.rightCol = n.lastRowDayIndex);
                    return i
                }, e.prototype.renderDates = function(t) {
                    this.dateProfile = t, this.updateDayTable(), this.renderGrid()
                }, e.prototype.unrenderDates = function() {
                    this.removeSegPopover()
                }, e.prototype.renderGrid = function() {
                    var t, e, n = this.view,
                        i = this.rowCnt,
                        r = this.colCnt,
                        o = "";
                    for (this.headContainerEl && this.headContainerEl.html(this.renderHeadHtml()), t = 0; t < i; t++) o += this.renderDayRowHtml(t, this.isRigid);
                    for (this.el.html(o), this.rowEls = this.el.find(".fc-row"), this.cellEls = this.el.find(".fc-day, .fc-disabled-day"), this.rowCoordCache = new s.default({
                            els: this.rowEls,
                            isVertical: !0
                        }), this.colCoordCache = new s.default({
                            els: this.cellEls.slice(0, this.colCnt),
                            isHorizontal: !0
                        }), t = 0; t < i; t++)
                        for (e = 0; e < r; e++) this.publiclyTrigger("dayRender", {
                            context: n,
                            args: [this.getCellDate(t, e), this.getCellEl(t, e), n]
                        })
                }, e.prototype.renderDayRowHtml = function(t, e) {
                    var n = this.view.calendar.theme,
                        i = ["fc-row", "fc-week", n.getClass("dayRow")];
                    return e && i.push("fc-rigid"), '<div class="' + i.join(" ") + '"><div class="fc-bg"><table class="' + n.getClass("tableGrid") + '">' + this.renderBgTrHtml(t) + '</table></div><div class="fc-content-skeleton"><table>' + (this.getIsNumbersVisible() ? "<thead>" + this.renderNumberTrHtml(t) + "</thead>" : "") + "</table></div></div>"
                }, e.prototype.getIsNumbersVisible = function() {
                    return this.getIsDayNumbersVisible() || this.cellWeekNumbersVisible
                }, e.prototype.getIsDayNumbersVisible = function() {
                    return this.rowCnt > 1
                }, e.prototype.renderNumberTrHtml = function(t) {
                    return "<tr>" + (this.isRTL ? "" : this.renderNumberIntroHtml(t)) + this.renderNumberCellsHtml(t) + (this.isRTL ? this.renderNumberIntroHtml(t) : "") + "</tr>"
                }, e.prototype.renderNumberIntroHtml = function(t) {
                    return this.renderIntroHtml()
                }, e.prototype.renderNumberCellsHtml = function(t) {
                    var e, n, i = [];
                    for (e = 0; e < this.colCnt; e++) n = this.getCellDate(t, e), i.push(this.renderNumberCellHtml(n));
                    return i.join("")
                }, e.prototype.renderNumberCellHtml = function(t) {
                    var e, n, i = this.view,
                        r = "",
                        o = this.dateProfile.activeUnzonedRange.containsDate(t),
                        s = this.getIsDayNumbersVisible() && o;
                    return s || this.cellWeekNumbersVisible ? (e = this.getDayClasses(t), e.unshift("fc-day-top"), this.cellWeekNumbersVisible && (n = "ISO" === t._locale._fullCalendar_weekCalc ? 1 : t._locale.firstDayOfWeek()), r += '<td class="' + e.join(" ") + '"' + (o ? ' data-date="' + t.format() + '"' : "") + ">", this.cellWeekNumbersVisible && t.day() === n && (r += i.buildGotoAnchorHtml({
                        date: t,
                        type: "week"
                    }, {
                        class: "fc-week-number"
                    }, t.format("w"))), s && (r += i.buildGotoAnchorHtml(t, {
                        class: "fc-day-number"
                    }, t.format("D"))), r += "</td>") : "<td/>"
                }, e.prototype.prepareHits = function() {
                    this.colCoordCache.build(), this.rowCoordCache.build(), this.rowCoordCache.bottoms[this.rowCnt - 1] += this.bottomCoordPadding
                }, e.prototype.releaseHits = function() {
                    this.colCoordCache.clear(), this.rowCoordCache.clear()
                }, e.prototype.queryHit = function(t, e) {
                    if (this.colCoordCache.isLeftInBounds(t) && this.rowCoordCache.isTopInBounds(e)) {
                        var n = this.colCoordCache.getHorizontalIndex(t),
                            i = this.rowCoordCache.getVerticalIndex(e);
                        if (null != i && null != n) return this.getCellHit(i, n)
                    }
                }, e.prototype.getHitFootprint = function(t) {
                    var e = this.getCellRange(t.row, t.col);
                    return new u.default(new l.default(e.start, e.end), !0)
                }, e.prototype.getHitEl = function(t) {
                    return this.getCellEl(t.row, t.col)
                }, e.prototype.getCellHit = function(t, e) {
                    return {
                        row: t,
                        col: e,
                        component: this,
                        left: this.colCoordCache.getLeftOffset(e),
                        right: this.colCoordCache.getRightOffset(e),
                        top: this.rowCoordCache.getTopOffset(t),
                        bottom: this.rowCoordCache.getBottomOffset(t)
                    }
                }, e.prototype.getCellEl = function(t, e) {
                    return this.cellEls.eq(t * this.colCnt + e)
                }, e.prototype.executeEventUnrender = function() {
                    this.removeSegPopover(), t.prototype.executeEventUnrender.call(this)
                }, e.prototype.getOwnEventSegs = function() {
                    return t.prototype.getOwnEventSegs.call(this).concat(this.popoverSegs || [])
                }, e.prototype.renderDrag = function(t, e, n) {
                    var i;
                    for (i = 0; i < t.length; i++) this.renderHighlight(t[i].componentFootprint);
                    if (t.length && e && e.component !== this) return this.helperRenderer.renderEventDraggingFootprints(t, e, n), !0
                }, e.prototype.unrenderDrag = function() {
                    this.unrenderHighlight(), this.helperRenderer.unrender()
                }, e.prototype.renderEventResize = function(t, e, n) {
                    var i;
                    for (i = 0; i < t.length; i++) this.renderHighlight(t[i].componentFootprint);
                    this.helperRenderer.renderEventResizingFootprints(t, e, n)
                }, e.prototype.unrenderEventResize = function() {
                    this.unrenderHighlight(), this.helperRenderer.unrender()
                }, e.prototype.removeSegPopover = function() {
                    this.segPopover && this.segPopover.hide()
                }, e.prototype.limitRows = function(t) {
                    var e, n, i = this.eventRenderer.rowStructs || [];
                    for (e = 0; e < i.length; e++) this.unlimitRow(e), !1 !== (n = !!t && ("number" == typeof t ? t : this.computeRowLevelLimit(e))) && this.limitRow(e, n)
                }, e.prototype.computeRowLevelLimit = function(t) {
                    function e(t, e) {
                        o = Math.max(o, r(e).outerHeight())
                    }
                    var n, i, o, s = this.rowEls.eq(t),
                        a = s.height(),
                        l = this.eventRenderer.rowStructs[t].tbodyEl.children();
                    for (n = 0; n < l.length; n++)
                        if (i = l.eq(n).removeClass("fc-limited"), o = 0, i.find("> td > :first-child").each(e), i.position().top + o > a) return n;
                    return !1
                }, e.prototype.limitRow = function(t, e) {
                    var n, i, o, s, a, l, u, d, c, p, h, f, g, v, y, m = this,
                        b = this.eventRenderer.rowStructs[t],
                        w = [],
                        D = 0,
                        E = function(n) {
                            for (; D < n;) l = m.getCellSegs(t, D, e), l.length && (c = i[e - 1][D], y = m.renderMoreLink(t, D, l), v = r("<div/>").append(y), c.append(v), w.push(v[0])), D++
                        };
                    if (e && e < b.segLevels.length) {
                        for (n = b.segLevels[e - 1], i = b.cellMatrix, o = b.tbodyEl.children().slice(e).addClass("fc-limited").get(), s = 0; s < n.length; s++) {
                            for (a = n[s], E(a.leftCol), d = [], u = 0; D <= a.rightCol;) l = this.getCellSegs(t, D, e), d.push(l), u += l.length, D++;
                            if (u) {
                                for (c = i[e - 1][a.leftCol], p = c.attr("rowspan") || 1, h = [], f = 0; f < d.length; f++) g = r('<td class="fc-more-cell"/>').attr("rowspan", p), l = d[f], y = this.renderMoreLink(t, a.leftCol + f, [a].concat(l)), v = r("<div/>").append(y), g.append(v), h.push(g[0]), w.push(g[0]);
                                c.addClass("fc-limited").after(r(h)), o.push(c[0])
                            }
                        }
                        E(this.colCnt), b.moreEls = r(w), b.limitedEls = r(o)
                    }
                }, e.prototype.unlimitRow = function(t) {
                    var e = this.eventRenderer.rowStructs[t];
                    e.moreEls && (e.moreEls.remove(), e.moreEls = null), e.limitedEls && (e.limitedEls.removeClass("fc-limited"), e.limitedEls = null)
                }, e.prototype.renderMoreLink = function(t, e, n) {
                    var i = this,
                        o = this.view;
                    return r('<a class="fc-more"/>').text(this.getMoreLinkText(n.length)).on("click", function(s) {
                        var a = i.opt("eventLimitClick"),
                            l = i.getCellDate(t, e),
                            u = r(s.currentTarget),
                            d = i.getCellEl(t, e),
                            c = i.getCellSegs(t, e),
                            p = i.resliceDaySegs(c, l),
                            h = i.resliceDaySegs(n, l);
                        "function" == typeof a && (a = i.publiclyTrigger("eventLimitClick", {
                            context: o,
                            args: [{
                                date: l.clone(),
                                dayEl: d,
                                moreEl: u,
                                segs: p,
                                hiddenSegs: h
                            }, s, o]
                        })), "popover" === a ? i.showSegPopover(t, e, u, p) : "string" == typeof a && o.calendar.zoomTo(l, a)
                    })
                }, e.prototype.showSegPopover = function(t, e, n, i) {
                    var r, o, s = this,
                        l = this.view,
                        u = n.parent();
                    r = 1 === this.rowCnt ? l.el : this.rowEls.eq(t), o = {
                        className: "fc-more-popover " + l.calendar.theme.getClass("popover"),
                        content: this.renderSegPopoverContent(t, e, i),
                        parentEl: l.el,
                        top: r.offset().top,
                        autoHide: !0,
                        viewportConstrain: this.opt("popoverViewportConstrain"),
                        hide: function() {
                            s.popoverSegs && s.triggerBeforeEventSegsDestroyed(s.popoverSegs), s.segPopover.removeElement(), s.segPopover = null, s.popoverSegs = null
                        }
                    }, this.isRTL ? o.right = u.offset().left + u.outerWidth() + 1 : o.left = u.offset().left - 1, this.segPopover = new a.default(o), this.segPopover.show(), this.bindAllSegHandlersToEl(this.segPopover.el), this.triggerAfterEventSegsRendered(i)
                }, e.prototype.renderSegPopoverContent = function(t, e, n) {
                    var i, s = this.view,
                        a = s.calendar.theme,
                        l = this.getCellDate(t, e).format(this.opt("dayPopoverFormat")),
                        u = r('<div class="fc-header ' + a.getClass("popoverHeader") + '"><span class="fc-close ' + a.getIconClass("close") + '"></span><span class="fc-title">' + o.htmlEscape(l) + '</span><div class="fc-clear"/></div><div class="fc-body ' + a.getClass("popoverContent") + '"><div class="fc-event-container"></div></div>'),
                        d = u.find(".fc-event-container");
                    for (n = this.eventRenderer.renderFgSegEls(n, !0), this.popoverSegs = n, i = 0; i < n.length; i++) this.hitsNeeded(), n[i].hit = this.getCellHit(t, e), this.hitsNotNeeded(), d.append(n[i].el);
                    return u
                }, e.prototype.resliceDaySegs = function(t, e) {
                    var n, i, o, s = e.clone(),
                        a = s.clone().add(1, "days"),
                        c = new l.default(s, a),
                        p = [];
                    for (n = 0; n < t.length; n++) i = t[n], (o = i.footprint.componentFootprint.unzonedRange.intersect(c)) && p.push(r.extend({}, i, {
                        footprint: new d.default(new u.default(o, i.footprint.componentFootprint.isAllDay), i.footprint.eventDef, i.footprint.eventInstance),
                        isStart: i.isStart && o.isStart,
                        isEnd: i.isEnd && o.isEnd
                    }));
                    return this.eventRenderer.sortEventSegs(p), p
                }, e.prototype.getMoreLinkText = function(t) {
                    var e = this.opt("eventLimitText");
                    return "function" == typeof e ? e(t) : "+" + t + " " + e
                }, e.prototype.getCellSegs = function(t, e, n) {
                    for (var i, r = this.eventRenderer.rowStructs[t].segMatrix, o = n || 0, s = []; o < r.length;) i = r[o][e], i && s.push(i), o++;
                    return s
                }, e
            }(h.default);
        e.default = m, m.prototype.eventRendererClass = g.default, m.prototype.businessHourRendererClass = c.default, m.prototype.helperRendererClass = v.default, m.prototype.fillRendererClass = y.default, p.default.mixInto(m), f.default.mixInto(m)
    }, function(t, e, n) {
        function i(t) {
            return function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.colWeekNumbersVisible = !1, e
                }
                return r.__extends(e, t), e.prototype.renderHeadIntroHtml = function() {
                    var t = this.view;
                    return this.colWeekNumbersVisible ? '<th class="fc-week-number ' + t.calendar.theme.getClass("widgetHeader") + '" ' + t.weekNumberStyleAttr() + "><span>" + s.htmlEscape(this.opt("weekNumberTitle")) + "</span></th>" : ""
                }, e.prototype.renderNumberIntroHtml = function(t) {
                    var e = this.view,
                        n = this.getCellDate(t, 0);
                    return this.colWeekNumbersVisible ? '<td class="fc-week-number" ' + e.weekNumberStyleAttr() + ">" + e.buildGotoAnchorHtml({
                        date: n,
                        type: "week",
                        forceOff: 1 === this.colCnt
                    }, n.format("w")) + "</td>" : ""
                }, e.prototype.renderBgIntroHtml = function() {
                    var t = this.view;
                    return this.colWeekNumbersVisible ? '<td class="fc-week-number ' + t.calendar.theme.getClass("widgetContent") + '" ' + t.weekNumberStyleAttr() + "></td>" : ""
                }, e.prototype.renderIntroHtml = function() {
                    var t = this.view;
                    return this.colWeekNumbersVisible ? '<td class="fc-week-number" ' + t.weekNumberStyleAttr() + "></td>" : ""
                }, e.prototype.getIsNumbersVisible = function() {
                    return d.default.prototype.getIsNumbersVisible.apply(this, arguments) || this.colWeekNumbersVisible
                }, e
            }(t)
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r = n(2),
            o = n(3),
            s = n(4),
            a = n(39),
            l = n(41),
            u = n(228),
            d = n(61),
            c = function(t) {
                function e(e, n) {
                    var i = t.call(this, e, n) || this;
                    return i.dayGrid = i.instantiateDayGrid(), i.dayGrid.isRigid = i.hasRigidRows(), i.opt("weekNumbers") && (i.opt("weekNumbersWithinDays") ? (i.dayGrid.cellWeekNumbersVisible = !0, i.dayGrid.colWeekNumbersVisible = !1) : (i.dayGrid.cellWeekNumbersVisible = !1, i.dayGrid.colWeekNumbersVisible = !0)), i.addChild(i.dayGrid), i.scroller = new a.default({
                        overflowX: "hidden",
                        overflowY: "auto"
                    }), i
                }
                return r.__extends(e, t), e.prototype.instantiateDayGrid = function() {
                    return new(i(this.dayGridClass))(this)
                }, e.prototype.executeDateRender = function(e) {
                    this.dayGrid.breakOnWeeks = /year|month|week/.test(e.currentRangeUnit), t.prototype.executeDateRender.call(this, e)
                }, e.prototype.renderSkeleton = function() {
                    var t, e;
                    this.el.addClass("fc-basic-view").html(this.renderSkeletonHtml()), this.scroller.render(), t = this.scroller.el.addClass("fc-day-grid-container"), e = o('<div class="fc-day-grid" />').appendTo(t), this.el.find(".fc-body > tr > td").append(t), this.dayGrid.headContainerEl = this.el.find(".fc-head-container"), this.dayGrid.setElement(e)
                }, e.prototype.unrenderSkeleton = function() {
                    this.dayGrid.removeElement(), this.scroller.destroy()
                }, e.prototype.renderSkeletonHtml = function() {
                    var t = this.calendar.theme;
                    return '<table class="' + t.getClass("tableGrid") + '">' + (this.opt("columnHeader") ? '<thead class="fc-head"><tr><td class="fc-head-container ' + t.getClass("widgetHeader") + '">&nbsp;</td></tr></thead>' : "") + '<tbody class="fc-body"><tr><td class="' + t.getClass("widgetContent") + '"></td></tr></tbody></table>'
                }, e.prototype.weekNumberStyleAttr = function() {
                    return null != this.weekNumberWidth ? 'style="width:' + this.weekNumberWidth + 'px"' : ""
                }, e.prototype.hasRigidRows = function() {
                    var t = this.opt("eventLimit");
                    return t && "number" != typeof t
                }, e.prototype.updateSize = function(e, n, i) {
                    var r, o, a = this.opt("eventLimit"),
                        l = this.dayGrid.headContainerEl.find(".fc-row");
                    if (!this.dayGrid.rowEls) return void(n || (r = this.computeScrollerHeight(e), this.scroller.setHeight(r)));
                    t.prototype.updateSize.call(this, e, n, i), this.dayGrid.colWeekNumbersVisible && (this.weekNumberWidth = s.matchCellWidths(this.el.find(".fc-week-number"))), this.scroller.clear(), s.uncompensateScroll(l), this.dayGrid.removeSegPopover(), a && "number" == typeof a && this.dayGrid.limitRows(a), r = this.computeScrollerHeight(e), this.setGridHeight(r, n), a && "number" != typeof a && this.dayGrid.limitRows(a), n || (this.scroller.setHeight(r), o = this.scroller.getScrollbarWidths(), (o.left || o.right) && (s.compensateScroll(l, o), r = this.computeScrollerHeight(e), this.scroller.setHeight(r)), this.scroller.lockOverflow(o))
                }, e.prototype.computeScrollerHeight = function(t) {
                    return t - s.subtractInnerElHeight(this.el, this.scroller.el)
                }, e.prototype.setGridHeight = function(t, e) {
                    e ? s.undistributeHeight(this.dayGrid.rowEls) : s.distributeHeight(this.dayGrid.rowEls, t, !0)
                }, e.prototype.computeInitialDateScroll = function() {
                    return {
                        top: 0
                    }
                }, e.prototype.queryDateScroll = function() {
                    return {
                        top: this.scroller.getScrollTop()
                    }
                }, e.prototype.applyDateScroll = function(t) {
                    void 0 !== t.top && this.scroller.setScrollTop(t.top)
                }, e
            }(l.default);
        e.default = c, c.prototype.dateProfileGeneratorClass = u.default, c.prototype.dayGridClass = d.default
    }, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(t, e, n) {
        function i(t, e, n) {
            var i;
            for (i = 0; i < t.length; i++)
                if (!e(t[i].eventInstance.toLegacy(), n ? n.toLegacy() : null)) return !1;
            return !0
        }

        function r(t, e) {
            var n, i, r, o, s = e.toLegacy();
            for (n = 0; n < t.length; n++) {
                if (i = t[n].eventInstance, r = i.def, !1 === (o = r.getOverlap())) return !1;
                if ("function" == typeof o && !o(i.toLegacy(), s)) return !1
            }
            return !0
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var o = n(5),
            s = n(12),
            a = n(49),
            l = n(6),
            u = n(35),
            d = function() {
                function t(t, e) {
                    this.eventManager = t, this._calendar = e
                }
                return t.prototype.opt = function(t) {
                    return this._calendar.opt(t)
                }, t.prototype.isEventInstanceGroupAllowed = function(t) {
                    var e, n = t.getEventDef(),
                        i = this.eventRangesToEventFootprints(t.getAllEventRanges()),
                        r = this.getPeerEventInstances(n),
                        o = r.map(u.eventInstanceToEventRange),
                        s = this.eventRangesToEventFootprints(o),
                        a = n.getConstraint(),
                        l = n.getOverlap(),
                        d = this.opt("eventAllow");
                    for (e = 0; e < i.length; e++)
                        if (!this.isFootprintAllowed(i[e].componentFootprint, s, a, l, i[e].eventInstance)) return !1;
                    if (d)
                        for (e = 0; e < i.length; e++)
                            if (!1 === d(i[e].componentFootprint.toLegacy(this._calendar), i[e].getEventLegacy())) return !1;
                    return !0
                }, t.prototype.getPeerEventInstances = function(t) {
                    return this.eventManager.getEventInstancesWithoutId(t.id)
                }, t.prototype.isSelectionFootprintAllowed = function(t) {
                    var e, n = this.eventManager.getEventInstances(),
                        i = n.map(u.eventInstanceToEventRange),
                        r = this.eventRangesToEventFootprints(i);
                    return !!this.isFootprintAllowed(t, r, this.opt("selectConstraint"), this.opt("selectOverlap")) && (!(e = this.opt("selectAllow")) || !1 !== e(t.toLegacy(this._calendar)))
                }, t.prototype.isFootprintAllowed = function(t, e, n, o, s) {
                    var a, l;
                    if (null != n && (a = this.constraintValToFootprints(n, t.isAllDay), !this.isFootprintWithinConstraints(t, a))) return !1;
                    if (l = this.collectOverlapEventFootprints(e, t), !1 === o) {
                        if (l.length) return !1
                    } else if ("function" == typeof o && !i(l, o, s)) return !1;
                    return !(s && !r(l, s))
                }, t.prototype.isFootprintWithinConstraints = function(t, e) {
                    var n;
                    for (n = 0; n < e.length; n++)
                        if (this.footprintContainsFootprint(e[n], t)) return !0;
                    return !1
                }, t.prototype.constraintValToFootprints = function(t, e) {
                    var n;
                    return "businessHours" === t ? this.buildCurrentBusinessFootprints(e) : "object" == typeof t ? (n = this.parseEventDefToInstances(t), n ? this.eventInstancesToFootprints(n) : this.parseFootprints(t)) : null != t ? (n = this.eventManager.getEventInstancesWithId(t), this.eventInstancesToFootprints(n)) : void 0
                }, t.prototype.buildCurrentBusinessFootprints = function(t) {
                    var e = this._calendar.view,
                        n = e.get("businessHourGenerator"),
                        i = e.dateProfile.activeUnzonedRange,
                        r = n.buildEventInstanceGroup(t, i);
                    return r ? this.eventInstancesToFootprints(r.eventInstances) : []
                }, t.prototype.eventInstancesToFootprints = function(t) {
                    var e = t.map(u.eventInstanceToEventRange);
                    return this.eventRangesToEventFootprints(e).map(u.eventFootprintToComponentFootprint)
                }, t.prototype.collectOverlapEventFootprints = function(t, e) {
                    var n, i = [];
                    for (n = 0; n < t.length; n++) this.footprintsIntersect(e, t[n].componentFootprint) && i.push(t[n]);
                    return i
                }, t.prototype.parseEventDefToInstances = function(t) {
                    var e = this.eventManager,
                        n = a.default.parse(t, new l.default(this._calendar));
                    return !!n && n.buildInstances(e.currentPeriod.unzonedRange)
                }, t.prototype.eventRangesToEventFootprints = function(t) {
                    var e, n = [];
                    for (e = 0; e < t.length; e++) n.push.apply(n, this.eventRangeToEventFootprints(t[e]));
                    return n
                }, t.prototype.eventRangeToEventFootprints = function(t) {
                    return [u.eventRangeToEventFootprint(t)]
                }, t.prototype.parseFootprints = function(t) {
                    var e, n;
                    return t.start && (e = this._calendar.moment(t.start), e.isValid() || (e = null)), t.end && (n = this._calendar.moment(t.end), n.isValid() || (n = null)), [new s.default(new o.default(e, n), e && !e.hasTime() || n && !n.hasTime())]
                }, t.prototype.footprintContainsFootprint = function(t, e) {
                    return t.unzonedRange.containsRange(e.unzonedRange)
                }, t.prototype.footprintsIntersect = function(t, e) {
                    return t.unzonedRange.intersectsWith(e.unzonedRange)
                }, t
            }();
        e.default = d
    }, function(t, e, n) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = n(2),
            r = n(4),
            o = n(14),
            s = function(t) {
                function e() {
                    return null !== t && t.apply(this, arguments) || this
                }
                return i.__extends(e, t), e.defineStandardProps = function(t) {
                    var e = this.prototype;
                    e.hasOwnProperty("standardPropMap") || (e.standardPropMap = Object.create(e.standardPropMap)), r.copyOwnProps(t, e.standardPropMap)
                }, e.copyVerbatimStandardProps = function(t, e) {
                    var n, i = this.prototype.standardPropMap;
                    for (n in i) null != t[n] && !0 === i[n] && (e[n] = t[n])
                }, e.prototype.applyProps = function(t) {
                    var e, n = this.standardPropMap,
                        i = {},
                        r = {};
                    for (e in t) !0 === n[e] ? this[e] = t[e] : !1 === n[e] ? i[e] = t[e] : r[e] = t[e];
                    return this.applyMiscProps(r), this.applyManualStandardProps(i)
                }, e.prototype.applyManualStandardProps = function(t) {
                    return !0
                }, e.prototype.applyMiscProps = function(t) {}, e.prototype.isStandardProp = function(t) {
                    return t in this.standardPropMap
                }, e
            }(o.default);
        e.default = s, s.prototype.standardPropMap = {}
    }, function(t, e) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = function() {
            function t(t, e) {
                this.def = t, this.dateProfile = e
            }
            return t.prototype.toLegacy = function() {
                var t = this.dateProfile,
                    e = this.def.toLegacy();
                return e.start = t.start.clone(), e.end = t.end ? t.end.clone() : null, e
            }, t
        }();
        e.default = n
    }, function(t, e, n) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = n(2),
            r = n(3),
            o = n(0),
            s = n(34),
            a = n(209),
            l = n(17),
            u = function(t) {
                function e() {
                    return null !== t && t.apply(this, arguments) || this
                }
                return i.__extends(e, t), e.prototype.isAllDay = function() {
                    return !this.startTime && !this.endTime
                }, e.prototype.buildInstances = function(t) {
                    for (var e, n, i, r = this.source.calendar, o = t.getStart(), s = t.getEnd(), u = []; o.isBefore(s);) this.dowHash && !this.dowHash[o.day()] || (e = r.applyTimezone(o), n = e.clone(), i = null, this.startTime ? n.time(this.startTime) : n.stripTime(), this.endTime && (i = e.clone().time(this.endTime)), u.push(new a.default(this, new l.default(n, i, r)))), o.add(1, "days");
                    return u
                }, e.prototype.setDow = function(t) {
                    this.dowHash || (this.dowHash = {});
                    for (var e = 0; e < t.length; e++) this.dowHash[t[e]] = !0
                }, e.prototype.clone = function() {
                    var e = t.prototype.clone.call(this);
                    return e.startTime && (e.startTime = o.duration(this.startTime)), e.endTime && (e.endTime = o.duration(this.endTime)), this.dowHash && (e.dowHash = r.extend({}, this.dowHash)), e
                }, e
            }(s.default);
        e.default = u, u.prototype.applyProps = function(t) {
            var e = s.default.prototype.applyProps.call(this, t);
            return t.start && (this.startTime = o.duration(t.start)), t.end && (this.endTime = o.duration(t.end)), t.dow && this.setDow(t.dow), e
        }, u.defineStandardProps({
            start: !1,
            end: !1,
            dow: !1
        })
    }, function(t, e) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = function() {
            function t(t, e, n) {
                this.unzonedRange = t, this.eventDef = e, n && (this.eventInstance = n)
            }
            return t
        }();
        e.default = n
    }, function(t, e, n) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = n(3),
            r = n(35),
            o = n(18),
            s = n(210),
            a = n(6),
            l = {
                start: "09:00",
                end: "17:00",
                dow: [1, 2, 3, 4, 5],
                rendering: "inverse-background"
            },
            u = function() {
                function t(t, e) {
                    this.rawComplexDef = t, this.calendar = e
                }
                return t.prototype.buildEventInstanceGroup = function(t, e) {
                    var n, i = this.buildEventDefs(t);
                    if (i.length) return n = new o.default(r.eventDefsToEventInstances(i, e)), n.explicitEventDef = i[0], n
                }, t.prototype.buildEventDefs = function(t) {
                    var e, n = this.rawComplexDef,
                        r = [],
                        o = !1,
                        s = [];
                    for (!0 === n ? r = [{}] : i.isPlainObject(n) ? r = [n] : i.isArray(n) && (r = n, o = !0), e = 0; e < r.length; e++) o && !r[e].dow || s.push(this.buildEventDef(t, r[e]));
                    return s
                }, t.prototype.buildEventDef = function(t, e) {
                    var n = i.extend({}, l, e);
                    return t && (n.start = null, n.end = null), s.default.parse(n, new a.default(this.calendar))
                }, t
            }();
        e.default = u
    }, function(t, e, n) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = n(2),
            r = n(19),
            o = function(t) {
                function e() {
                    return null !== t && t.apply(this, arguments) || this
                }
                return i.__extends(e, t), e
            }(r.default);
        e.default = o, o.prototype.classes = {
            widget: "fc-unthemed",
            widgetHeader: "fc-widget-header",
            widgetContent: "fc-widget-content",
            buttonGroup: "fc-button-group",
            button: "fc-button",
            cornerLeft: "fc-corner-left",
            cornerRight: "fc-corner-right",
            stateDefault: "fc-state-default",
            stateActive: "fc-state-active",
            stateDisabled: "fc-state-disabled",
            stateHover: "fc-state-hover",
            stateDown: "fc-state-down",
            popoverHeader: "fc-widget-header",
            popoverContent: "fc-widget-content",
            headerRow: "fc-widget-header",
            dayRow: "fc-widget-content",
            listView: "fc-widget-content"
        }, o.prototype.baseIconClass = "fc-icon", o.prototype.iconClasses = {
            close: "fc-icon-x",
            prev: "fc-icon-left-single-arrow",
            next: "fc-icon-right-single-arrow",
            prevYear: "fc-icon-left-double-arrow",
            nextYear: "fc-icon-right-double-arrow"
        }, o.prototype.iconOverrideOption = "buttonIcons", o.prototype.iconOverrideCustomButtonOption = "icon", o.prototype.iconOverridePrefix = "fc-icon-"
    }, function(t, e, n) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = n(2),
            r = n(19),
            o = function(t) {
                function e() {
                    return null !== t && t.apply(this, arguments) || this
                }
                return i.__extends(e, t), e
            }(r.default);
        e.default = o, o.prototype.classes = {
            widget: "ui-widget",
            widgetHeader: "ui-widget-header",
            widgetContent: "ui-widget-content",
            buttonGroup: "fc-button-group",
            button: "ui-button",
            cornerLeft: "ui-corner-left",
            cornerRight: "ui-corner-right",
            stateDefault: "ui-state-default",
            stateActive: "ui-state-active",
            stateDisabled: "ui-state-disabled",
            stateHover: "ui-state-hover",
            stateDown: "ui-state-down",
            today: "ui-state-highlight",
            popoverHeader: "ui-widget-header",
            popoverContent: "ui-widget-content",
            headerRow: "ui-widget-header",
            dayRow: "ui-widget-content",
            listView: "ui-widget-content"
        }, o.prototype.baseIconClass = "ui-icon", o.prototype.iconClasses = {
            close: "ui-icon-closethick",
            prev: "ui-icon-circle-triangle-w",
            next: "ui-icon-circle-triangle-e",
            prevYear: "ui-icon-seek-prev",
            nextYear: "ui-icon-seek-next"
        }, o.prototype.iconOverrideOption = "themeButtonIcons", o.prototype.iconOverrideCustomButtonOption = "themeIcon", o.prototype.iconOverridePrefix = "ui-icon-"
    }, function(t, e, n) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = n(2),
            r = n(3),
            o = n(20),
            s = n(6),
            a = function(t) {
                function e() {
                    return null !== t && t.apply(this, arguments) || this
                }
                return i.__extends(e, t), e.parse = function(t, e) {
                    var n;
                    return r.isFunction(t.events) ? n = t : r.isFunction(t) && (n = {
                        events: t
                    }), !!n && s.default.parse.call(this, n, e)
                }, e.prototype.fetch = function(t, e, n) {
                    var i = this;
                    return this.calendar.pushLoading(), o.default.construct(function(r) {
                        i.func.call(i.calendar, t.clone(), e.clone(), n, function(t) {
                            i.calendar.popLoading(), r(i.parseEventDefs(t))
                        })
                    })
                }, e.prototype.getPrimitive = function() {
                    return this.func
                }, e.prototype.applyManualStandardProps = function(e) {
                    var n = t.prototype.applyManualStandardProps.call(this, e);
                    return this.func = e.events, n
                }, e
            }(s.default);
        e.default = a, a.defineStandardProps({
            events: !1
        })
    }, function(t, e, n) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = n(2),
            r = n(3),
            o = n(4),
            s = n(20),
            a = n(6),
            l = function(t) {
                function e() {
                    return null !== t && t.apply(this, arguments) || this
                }
                return i.__extends(e, t), e.parse = function(t, e) {
                    var n;
                    return "string" == typeof t.url ? n = t : "string" == typeof t && (n = {
                        url: t
                    }), !!n && a.default.parse.call(this, n, e)
                }, e.prototype.fetch = function(t, n, i) {
                    var a = this,
                        l = this.ajaxSettings,
                        u = l.success,
                        d = l.error,
                        c = this.buildRequestParams(t, n, i);
                    return this.calendar.pushLoading(), s.default.construct(function(t, n) {
                        r.ajax(r.extend({}, e.AJAX_DEFAULTS, l, {
                            url: a.url,
                            data: c,
                            success: function(e, i, s) {
                                var l;
                                a.calendar.popLoading(), e ? (l = o.applyAll(u, a, [e, i, s]), r.isArray(l) && (e = l), t(a.parseEventDefs(e))) : n()
                            },
                            error: function(t, e, i) {
                                a.calendar.popLoading(), o.applyAll(d, a, [t, e, i]), n()
                            }
                        }))
                    })
                }, e.prototype.buildRequestParams = function(t, e, n) {
                    var i, o, s, a, l = this.calendar,
                        u = this.ajaxSettings,
                        d = {};
                    return i = this.startParam, null == i && (i = l.opt("startParam")), o = this.endParam, null == o && (o = l.opt("endParam")), s = this.timezoneParam, null == s && (s = l.opt("timezoneParam")), a = r.isFunction(u.data) ? u.data() : u.data || {}, r.extend(d, a), d[i] = t.format(), d[o] = e.format(), n && "local" !== n && (d[s] = n), d
                }, e.prototype.getPrimitive = function() {
                    return this.url
                }, e.prototype.applyMiscProps = function(t) {
                    this.ajaxSettings = t
                }, e.AJAX_DEFAULTS = {
                    dataType: "json",
                    cache: !1
                }, e
            }(a.default);
        e.default = l, l.defineStandardProps({
            url: !0,
            startParam: !0,
            endParam: !0,
            timezoneParam: !0
        })
    }, function(t, e, n) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = n(11),
            r = function() {
                function t() {
                    this.q = [], this.isPaused = !1, this.isRunning = !1
                }
                return t.prototype.queue = function() {
                    for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                    this.q.push.apply(this.q, t), this.tryStart()
                }, t.prototype.pause = function() {
                    this.isPaused = !0
                }, t.prototype.resume = function() {
                    this.isPaused = !1, this.tryStart()
                }, t.prototype.getIsIdle = function() {
                    return !this.isRunning && !this.isPaused
                }, t.prototype.tryStart = function() {
                    !this.isRunning && this.canRunNext() && (this.isRunning = !0, this.trigger("start"), this.runRemaining())
                }, t.prototype.canRunNext = function() {
                    return !this.isPaused && this.q.length
                }, t.prototype.runRemaining = function() {
                    var t, e, n = this;
                    do {
                        if (t = this.q.shift(), (e = this.runTask(t)) && e.then) return void e.then(function() {
                            n.canRunNext() && n.runRemaining()
                        })
                    } while (this.canRunNext());
                    this.trigger("stop"), this.isRunning = !1, this.tryStart()
                }, t.prototype.runTask = function(t) {
                    return t()
                }, t
            }();
        e.default = r, i.default.mixInto(r)
    }, function(t, e, n) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = n(2),
            r = n(217),
            o = function(t) {
                function e(e) {
                    var n = t.call(this) || this;
                    return n.waitsByNamespace = e || {}, n
                }
                return i.__extends(e, t), e.prototype.queue = function(t, e, n) {
                    var i, r = {
                        func: t,
                        namespace: e,
                        type: n
                    };
                    e && (i = this.waitsByNamespace[e]), this.waitNamespace && (e === this.waitNamespace && null != i ? this.delayWait(i) : (this.clearWait(), this.tryStart())), this.compoundTask(r) && (this.waitNamespace || null == i ? this.tryStart() : this.startWait(e, i))
                }, e.prototype.startWait = function(t, e) {
                    this.waitNamespace = t, this.spawnWait(e)
                }, e.prototype.delayWait = function(t) {
                    clearTimeout(this.waitId), this.spawnWait(t)
                }, e.prototype.spawnWait = function(t) {
                    var e = this;
                    this.waitId = setTimeout(function() {
                        e.waitNamespace = null, e.tryStart()
                    }, t)
                }, e.prototype.clearWait = function() {
                    this.waitNamespace && (clearTimeout(this.waitId), this.waitId = null, this.waitNamespace = null)
                }, e.prototype.canRunNext = function() {
                    if (!t.prototype.canRunNext.call(this)) return !1;
                    if (this.waitNamespace) {
                        for (var e = this.q, n = 0; n < e.length; n++)
                            if (e[n].namespace !== this.waitNamespace) return !0;
                        return !1
                    }
                    return !0
                }, e.prototype.runTask = function(t) {
                    t.func()
                }, e.prototype.compoundTask = function(t) {
                    var e, n, i = this.q,
                        r = !0;
                    if (t.namespace && "destroy" === t.type)
                        for (e = i.length - 1; e >= 0; e--) switch (n = i[e], n.type) {
                            case "init":
                                r = !1;
                            case "add":
                            case "remove":
                                i.splice(e, 1)
                        }
                    return r && i.push(t), r
                }, e
            }(r.default);
        e.default = o
    }, function(t, e, n) {
        function i(t) {
            var e, n, i, r = [];
            for (e in t)
                for (n = t[e].eventInstances, i = 0; i < n.length; i++) r.push(n[i].toLegacy());
            return r
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r = n(2),
            o = n(3),
            s = n(0),
            a = n(4),
            l = n(10),
            u = n(47),
            d = n(237),
            c = n(35),
            p = function(t) {
                function e(n, i) {
                    var r = t.call(this) || this;
                    return r.isRTL = !1, r.hitsNeededDepth = 0, r.hasAllDayBusinessHours = !1, r.isDatesRendered = !1, n && (r.view = n), i && (r.options = i), r.uid = String(e.guid++), r.childrenByUid = {}, r.nextDayThreshold = s.duration(r.opt("nextDayThreshold")), r.isRTL = r.opt("isRTL"), r.fillRendererClass && (r.fillRenderer = new r.fillRendererClass(r)), r.eventRendererClass && (r.eventRenderer = new r.eventRendererClass(r, r.fillRenderer)), r.helperRendererClass && r.eventRenderer && (r.helperRenderer = new r.helperRendererClass(r, r.eventRenderer)), r.businessHourRendererClass && r.fillRenderer && (r.businessHourRenderer = new r.businessHourRendererClass(r, r.fillRenderer)), r
                }
                return r.__extends(e, t), e.prototype.addChild = function(t) {
                    return !this.childrenByUid[t.uid] && (this.childrenByUid[t.uid] = t, !0)
                }, e.prototype.removeChild = function(t) {
                    return !!this.childrenByUid[t.uid] && (delete this.childrenByUid[t.uid], !0)
                }, e.prototype.updateSize = function(t, e, n) {
                    this.callChildren("updateSize", arguments)
                }, e.prototype.opt = function(t) {
                    return this._getView().opt(t)
                }, e.prototype.publiclyTrigger = function() {
                    for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                    var n = this._getCalendar();
                    return n.publiclyTrigger.apply(n, t)
                }, e.prototype.hasPublicHandlers = function() {
                    for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                    var n = this._getCalendar();
                    return n.hasPublicHandlers.apply(n, t)
                }, e.prototype.executeDateRender = function(t) {
                    this.dateProfile = t, this.renderDates(t), this.isDatesRendered = !0, this.callChildren("executeDateRender", arguments)
                }, e.prototype.executeDateUnrender = function() {
                    this.callChildren("executeDateUnrender", arguments), this.dateProfile = null, this.unrenderDates(), this.isDatesRendered = !1
                }, e.prototype.renderDates = function(t) {}, e.prototype.unrenderDates = function() {}, e.prototype.getNowIndicatorUnit = function() {}, e.prototype.renderNowIndicator = function(t) {
                    this.callChildren("renderNowIndicator", arguments)
                }, e.prototype.unrenderNowIndicator = function() {
                    this.callChildren("unrenderNowIndicator", arguments)
                }, e.prototype.renderBusinessHours = function(t) {
                    this.businessHourRenderer && this.businessHourRenderer.render(t), this.callChildren("renderBusinessHours", arguments)
                }, e.prototype.unrenderBusinessHours = function() {
                    this.callChildren("unrenderBusinessHours", arguments), this.businessHourRenderer && this.businessHourRenderer.unrender()
                }, e.prototype.executeEventRender = function(t) {
                    this.eventRenderer ? (this.eventRenderer.rangeUpdated(), this.eventRenderer.render(t)) : this.renderEvents && this.renderEvents(i(t)), this.callChildren("executeEventRender", arguments)
                }, e.prototype.executeEventUnrender = function() {
                    this.callChildren("executeEventUnrender", arguments), this.eventRenderer ? this.eventRenderer.unrender() : this.destroyEvents && this.destroyEvents()
                }, e.prototype.getBusinessHourSegs = function() {
                    var t = this.getOwnBusinessHourSegs();
                    return this.iterChildren(function(e) {
                        t.push.apply(t, e.getBusinessHourSegs())
                    }), t
                }, e.prototype.getOwnBusinessHourSegs = function() {
                    return this.businessHourRenderer ? this.businessHourRenderer.getSegs() : []
                }, e.prototype.getEventSegs = function() {
                    var t = this.getOwnEventSegs();
                    return this.iterChildren(function(e) {
                        t.push.apply(t, e.getEventSegs())
                    }), t
                }, e.prototype.getOwnEventSegs = function() {
                    return this.eventRenderer ? this.eventRenderer.getSegs() : []
                }, e.prototype.triggerAfterEventsRendered = function() {
                    this.triggerAfterEventSegsRendered(this.getEventSegs()), this.publiclyTrigger("eventAfterAllRender", {
                        context: this,
                        args: [this]
                    })
                }, e.prototype.triggerAfterEventSegsRendered = function(t) {
                    var e = this;
                    this.hasPublicHandlers("eventAfterRender") && t.forEach(function(t) {
                        var n;
                        t.el && (n = t.footprint.getEventLegacy(), e.publiclyTrigger("eventAfterRender", {
                            context: n,
                            args: [n, t.el, e]
                        }))
                    })
                }, e.prototype.triggerBeforeEventsDestroyed = function() {
                    this.triggerBeforeEventSegsDestroyed(this.getEventSegs())
                }, e.prototype.triggerBeforeEventSegsDestroyed = function(t) {
                    var e = this;
                    this.hasPublicHandlers("eventDestroy") && t.forEach(function(t) {
                        var n;
                        t.el && (n = t.footprint.getEventLegacy(), e.publiclyTrigger("eventDestroy", {
                            context: n,
                            args: [n, t.el, e]
                        }))
                    })
                }, e.prototype.showEventsWithId = function(t) {
                    this.getEventSegs().forEach(function(e) {
                        e.footprint.eventDef.id === t && e.el && e.el.css("visibility", "")
                    }), this.callChildren("showEventsWithId", arguments)
                }, e.prototype.hideEventsWithId = function(t) {
                    this.getEventSegs().forEach(function(e) {
                        e.footprint.eventDef.id === t && e.el && e.el.css("visibility", "hidden")
                    }), this.callChildren("hideEventsWithId", arguments)
                }, e.prototype.renderDrag = function(t, e, n) {
                    var i = !1;
                    return this.iterChildren(function(r) {
                        r.renderDrag(t, e, n) && (i = !0)
                    }), i
                }, e.prototype.unrenderDrag = function() {
                    this.callChildren("unrenderDrag", arguments)
                }, e.prototype.renderEventResize = function(t, e, n) {
                    this.callChildren("renderEventResize", arguments)
                }, e.prototype.unrenderEventResize = function() {
                    this.callChildren("unrenderEventResize", arguments)
                }, e.prototype.renderSelectionFootprint = function(t) {
                    this.renderHighlight(t), this.callChildren("renderSelectionFootprint", arguments)
                }, e.prototype.unrenderSelection = function() {
                    this.unrenderHighlight(), this.callChildren("unrenderSelection", arguments)
                }, e.prototype.renderHighlight = function(t) {
                    this.fillRenderer && this.fillRenderer.renderFootprint("highlight", t, {
                        getClasses: function() {
                            return ["fc-highlight"]
                        }
                    }), this.callChildren("renderHighlight", arguments)
                }, e.prototype.unrenderHighlight = function() {
                    this.fillRenderer && this.fillRenderer.unrender("highlight"), this.callChildren("unrenderHighlight", arguments)
                }, e.prototype.hitsNeeded = function() {
                    this.hitsNeededDepth++ || this.prepareHits(), this.callChildren("hitsNeeded", arguments)
                }, e.prototype.hitsNotNeeded = function() {
                    this.hitsNeededDepth && !--this.hitsNeededDepth && this.releaseHits(), this.callChildren("hitsNotNeeded", arguments)
                }, e.prototype.prepareHits = function() {}, e.prototype.releaseHits = function() {}, e.prototype.queryHit = function(t, e) {
                    var n, i, r = this.childrenByUid;
                    for (n in r)
                        if (i = r[n].queryHit(t, e)) break;
                    return i
                }, e.prototype.getSafeHitFootprint = function(t) {
                    var e = this.getHitFootprint(t);
                    return this.dateProfile.activeUnzonedRange.containsRange(e.unzonedRange) ? e : null
                }, e.prototype.getHitFootprint = function(t) {}, e.prototype.getHitEl = function(t) {}, e.prototype.eventRangesToEventFootprints = function(t) {
                    var e, n = [];
                    for (e = 0; e < t.length; e++) n.push.apply(n, this.eventRangeToEventFootprints(t[e]));
                    return n
                }, e.prototype.eventRangeToEventFootprints = function(t) {
                    return [c.eventRangeToEventFootprint(t)]
                }, e.prototype.eventFootprintsToSegs = function(t) {
                    var e, n = [];
                    for (e = 0; e < t.length; e++) n.push.apply(n, this.eventFootprintToSegs(t[e]));
                    return n
                }, e.prototype.eventFootprintToSegs = function(t) {
                    var e, n, i, r = t.componentFootprint.unzonedRange;
                    for (e = this.componentFootprintToSegs(t.componentFootprint), n = 0; n < e.length; n++) i = e[n], r.isStart || (i.isStart = !1), r.isEnd || (i.isEnd = !1), i.footprint = t;
                    return e
                }, e.prototype.componentFootprintToSegs = function(t) {
                    return []
                }, e.prototype.callChildren = function(t, e) {
                    this.iterChildren(function(n) {
                        n[t].apply(n, e)
                    })
                }, e.prototype.iterChildren = function(t) {
                    var e, n = this.childrenByUid;
                    for (e in n) t(n[e])
                }, e.prototype._getCalendar = function() {
                    var t = this;
                    return t.calendar || t.view.calendar
                }, e.prototype._getView = function() {
                    return this.view
                }, e.prototype._getDateProfile = function() {
                    return this._getView().get("dateProfile")
                }, e.prototype.buildGotoAnchorHtml = function(t, e, n) {
                    var i, r, s, u;
                    return o.isPlainObject(t) ? (i = t.date, r = t.type, s = t.forceOff) : i = t, i = l.default(i), u = {
                        date: i.format("YYYY-MM-DD"),
                        type: r || "day"
                    }, "string" == typeof e && (n = e, e = null), e = e ? " " + a.attrsToStr(e) : "", n = n || "", !s && this.opt("navLinks") ? "<a" + e + ' data-goto="' + a.htmlEscape(JSON.stringify(u)) + '">' + n + "</a>" : "<span" + e + ">" + n + "</span>"
                }, e.prototype.getAllDayHtml = function() {
                    return this.opt("allDayHtml") || a.htmlEscape(this.opt("allDayText"))
                }, e.prototype.getDayClasses = function(t, e) {
                    var n, i = this._getView(),
                        r = [];
                    return this.dateProfile.activeUnzonedRange.containsDate(t) ? (r.push("fc-" + a.dayIDs[t.day()]), i.isDateInOtherMonth(t, this.dateProfile) && r.push("fc-other-month"), n = i.calendar.getNow(), t.isSame(n, "day") ? (r.push("fc-today"), !0 !== e && r.push(i.calendar.theme.getClass("today"))) : t < n ? r.push("fc-past") : r.push("fc-future")) : r.push("fc-disabled-day"), r
                }, e.prototype.formatRange = function(t, e, n, i) {
                    var r = t.end;
                    return e && (r = r.clone().subtract(1)), u.formatRange(t.start, r, n, i, this.isRTL)
                }, e.prototype.currentRangeAs = function(t) {
                    return this._getDateProfile().currentUnzonedRange.as(t)
                }, e.prototype.computeDayRange = function(t) {
                    var e = this._getCalendar(),
                        n = e.msToUtcMoment(t.startMs, !0),
                        i = e.msToUtcMoment(t.endMs),
                        r = +i.time(),
                        o = i.clone().stripTime();
                    return r && r >= this.nextDayThreshold && o.add(1, "days"), o <= n && (o = n.clone().add(1, "days")), {
                        start: n,
                        end: o
                    }
                }, e.prototype.isMultiDayRange = function(t) {
                    var e = this.computeDayRange(t);
                    return e.end.diff(e.start, "days") > 1
                }, e.guid = 0, e
            }(d.default);
        e.default = p
    }, function(t, e, n) {
        function i(t, e) {
            return null == e ? t : r.isFunction(e) ? t.filter(e) : (e += "", t.filter(function(t) {
                return t.id == e || t._id === e
            }))
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r = n(3),
            o = n(0),
            s = n(4),
            a = n(32),
            l = n(238),
            u = n(21),
            d = n(11),
            c = n(7),
            p = n(239),
            h = n(240),
            f = n(241),
            g = n(207),
            v = n(31),
            y = n(10),
            m = n(5),
            b = n(12),
            w = n(17),
            D = n(242),
            E = n(212),
            S = n(38),
            C = n(49),
            R = n(13),
            T = n(37),
            M = n(6),
            I = n(51),
            H = function() {
                function t(t, e) {
                    this.loadingLevel = 0, this.ignoreUpdateViewSize = 0, this.freezeContentHeightDepth = 0, u.default.needed(), this.el = t, this.viewsByType = {}, this.optionsManager = new h.default(this, e), this.viewSpecManager = new f.default(this.optionsManager, this), this.initMomentInternals(), this.initCurrentDate(), this.initEventManager(), this.constraints = new g.default(this.eventManager, this), this.constructed()
                }
                return t.prototype.constructed = function() {}, t.prototype.getView = function() {
                    return this.view
                }, t.prototype.publiclyTrigger = function(t, e) {
                    var n, i, o = this.opt(t);
                    if (r.isPlainObject(e) ? (n = e.context, i = e.args) : r.isArray(e) && (i = e), null == n && (n = this.el[0]), i || (i = []), this.triggerWith(t, n, i), o) return o.apply(n, i)
                }, t.prototype.hasPublicHandlers = function(t) {
                    return this.hasHandlers(t) || this.opt(t)
                }, t.prototype.option = function(t, e) {
                    var n;
                    if ("string" == typeof t) {
                        if (void 0 === e) return this.optionsManager.get(t);
                        n = {}, n[t] = e, this.optionsManager.add(n)
                    } else "object" == typeof t && this.optionsManager.add(t)
                }, t.prototype.opt = function(t) {
                    return this.optionsManager.get(t)
                }, t.prototype.instantiateView = function(t) {
                    var e = this.viewSpecManager.getViewSpec(t);
                    if (!e) throw new Error('View type "' + t + '" is not valid');
                    return new e.class(this, e)
                }, t.prototype.isValidViewType = function(t) {
                    return Boolean(this.viewSpecManager.getViewSpec(t))
                }, t.prototype.changeView = function(t, e) {
                    e && (e.start && e.end ? this.optionsManager.recordOverrides({
                        visibleRange: e
                    }) : this.currentDate = this.moment(e).stripZone()), this.renderView(t)
                }, t.prototype.zoomTo = function(t, e) {
                    var n;
                    e = e || "day", n = this.viewSpecManager.getViewSpec(e) || this.viewSpecManager.getUnitViewSpec(e), this.currentDate = t.clone(), this.renderView(n ? n.type : null)
                }, t.prototype.initCurrentDate = function() {
                    var t = this.opt("defaultDate");
                    this.currentDate = null != t ? this.moment(t).stripZone() : this.getNow()
                }, t.prototype.prev = function() {
                    var t = this.view,
                        e = t.dateProfileGenerator.buildPrev(t.get("dateProfile"));
                    e.isValid && (this.currentDate = e.date, this.renderView())
                }, t.prototype.next = function() {
                    var t = this.view,
                        e = t.dateProfileGenerator.buildNext(t.get("dateProfile"));
                    e.isValid && (this.currentDate = e.date, this.renderView())
                }, t.prototype.prevYear = function() {
                    this.currentDate.add(-1, "years"), this.renderView()
                }, t.prototype.nextYear = function() {
                    this.currentDate.add(1, "years"), this.renderView()
                }, t.prototype.today = function() {
                    this.currentDate = this.getNow(), this.renderView()
                }, t.prototype.gotoDate = function(t) {
                    this.currentDate = this.moment(t).stripZone(), this.renderView()
                }, t.prototype.incrementDate = function(t) {
                    this.currentDate.add(o.duration(t)), this.renderView()
                }, t.prototype.getDate = function() {
                    return this.applyTimezone(this.currentDate)
                }, t.prototype.pushLoading = function() {
                    this.loadingLevel++ || this.publiclyTrigger("loading", [!0, this.view])
                }, t.prototype.popLoading = function() {
                    --this.loadingLevel || this.publiclyTrigger("loading", [!1, this.view])
                }, t.prototype.render = function() {
                    this.contentEl ? this.elementVisible() && (this.calcSize(), this.updateViewSize()) : this.initialRender()
                }, t.prototype.initialRender = function() {
                    var t = this,
                        e = this.el;
                    e.addClass("fc"), e.on("click.fc", "a[data-goto]", function(e) {
                        var n = r(e.currentTarget),
                            i = n.data("goto"),
                            o = t.moment(i.date),
                            a = i.type,
                            l = t.view.opt("navLink" + s.capitaliseFirstLetter(a) + "Click");
                        "function" == typeof l ? l(o, e) : ("string" == typeof l && (a = l), t.zoomTo(o, a))
                    }), this.optionsManager.watch("settingTheme", ["?theme", "?themeSystem"], function(n) {
                        var i = I.getThemeSystemClass(n.themeSystem || n.theme),
                            r = new i(t.optionsManager),
                            o = r.getClass("widget");
                        t.theme = r, o && e.addClass(o)
                    }, function() {
                        var n = t.theme.getClass("widget");
                        t.theme = null, n && e.removeClass(n)
                    }), this.optionsManager.watch("settingBusinessHourGenerator", ["?businessHours"], function(e) {
                        t.businessHourGenerator = new E.default(e.businessHours, t), t.view && t.view.set("businessHourGenerator", t.businessHourGenerator)
                    }, function() {
                        t.businessHourGenerator = null
                    }), this.optionsManager.watch("applyingDirClasses", ["?isRTL", "?locale"], function(t) {
                        e.toggleClass("fc-ltr", !t.isRTL), e.toggleClass("fc-rtl", t.isRTL)
                    }), this.contentEl = r("<div class='fc-view-container'/>").prependTo(e), this.initToolbars(), this.renderHeader(), this.renderFooter(), this.renderView(this.opt("defaultView")), this.opt("handleWindowResize") && r(window).resize(this.windowResizeProxy = s.debounce(this.windowResize.bind(this), this.opt("windowResizeDelay")))
                }, t.prototype.destroy = function() {
                    this.view && this.clearView(), this.toolbarsManager.proxyCall("removeElement"), this.contentEl.remove(), this.el.removeClass("fc fc-ltr fc-rtl"), this.optionsManager.unwatch("settingTheme"), this.optionsManager.unwatch("settingBusinessHourGenerator"), this.el.off(".fc"), this.windowResizeProxy && (r(window).unbind("resize", this.windowResizeProxy), this.windowResizeProxy = null), u.default.unneeded()
                }, t.prototype.elementVisible = function() {
                    return this.el.is(":visible")
                }, t.prototype.bindViewHandlers = function(t) {
                    var e = this;
                    t.watch("titleForCalendar", ["title"], function(n) {
                        t === e.view && e.setToolbarsTitle(n.title)
                    }), t.watch("dateProfileForCalendar", ["dateProfile"], function(n) {
                        t === e.view && (e.currentDate = n.dateProfile.date, e.updateToolbarButtons(n.dateProfile))
                    })
                }, t.prototype.unbindViewHandlers = function(t) {
                    t.unwatch("titleForCalendar"), t.unwatch("dateProfileForCalendar")
                }, t.prototype.renderView = function(t) {
                    var e, n = this.view;
                    this.freezeContentHeight(), n && t && n.type !== t && this.clearView(), !this.view && t && (e = this.view = this.viewsByType[t] || (this.viewsByType[t] = this.instantiateView(t)), this.bindViewHandlers(e), e.startBatchRender(), e.setElement(r("<div class='fc-view fc-" + t + "-view' />").appendTo(this.contentEl)), this.toolbarsManager.proxyCall("activateButton", t)), this.view && (this.view.get("businessHourGenerator") !== this.businessHourGenerator && this.view.set("businessHourGenerator", this.businessHourGenerator), this.view.setDate(this.currentDate), e && e.stopBatchRender()), this.thawContentHeight()
                }, t.prototype.clearView = function() {
                    var t = this.view;
                    this.toolbarsManager.proxyCall("deactivateButton", t.type), this.unbindViewHandlers(t), t.removeElement(), t.unsetDate(), this.view = null
                }, t.prototype.reinitView = function() {
                    var t = this.view,
                        e = t.queryScroll();
                    this.freezeContentHeight(), this.clearView(), this.calcSize(), this.renderView(t.type), this.view.applyScroll(e), this.thawContentHeight()
                }, t.prototype.getSuggestedViewHeight = function() {
                    return null == this.suggestedViewHeight && this.calcSize(), this.suggestedViewHeight
                }, t.prototype.isHeightAuto = function() {
                    return "auto" === this.opt("contentHeight") || "auto" === this.opt("height")
                }, t.prototype.updateViewSize = function(t) {
                    void 0 === t && (t = !1);
                    var e, n = this.view;
                    if (!this.ignoreUpdateViewSize && n) return t && (this.calcSize(), e = n.queryScroll()), this.ignoreUpdateViewSize++, n.updateSize(this.getSuggestedViewHeight(), this.isHeightAuto(), t), this.ignoreUpdateViewSize--, t && n.applyScroll(e), !0
                }, t.prototype.calcSize = function() {
                    this.elementVisible() && this._calcSize()
                }, t.prototype._calcSize = function() {
                    var t = this.opt("contentHeight"),
                        e = this.opt("height");
                    this.suggestedViewHeight = "number" == typeof t ? t : "function" == typeof t ? t() : "number" == typeof e ? e - this.queryToolbarsHeight() : "function" == typeof e ? e() - this.queryToolbarsHeight() : "parent" === e ? this.el.parent().height() - this.queryToolbarsHeight() : Math.round(this.contentEl.width() / Math.max(this.opt("aspectRatio"), .5))
                }, t.prototype.windowResize = function(t) {
                    t.target === window && this.view && this.view.isDatesRendered && this.updateViewSize(!0) && this.publiclyTrigger("windowResize", [this.view])
                }, t.prototype.freezeContentHeight = function() {
                    this.freezeContentHeightDepth++ || this.forceFreezeContentHeight()
                }, t.prototype.forceFreezeContentHeight = function() {
                    this.contentEl.css({
                        width: "100%",
                        height: this.contentEl.height(),
                        overflow: "hidden"
                    })
                }, t.prototype.thawContentHeight = function() {
                    this.freezeContentHeightDepth--, this.contentEl.css({
                        width: "",
                        height: "",
                        overflow: ""
                    }), this.freezeContentHeightDepth && this.forceFreezeContentHeight()
                }, t.prototype.initToolbars = function() {
                    this.header = new p.default(this, this.computeHeaderOptions()), this.footer = new p.default(this, this.computeFooterOptions()), this.toolbarsManager = new l.default([this.header, this.footer])
                }, t.prototype.computeHeaderOptions = function() {
                    return {
                        extraClasses: "fc-header-toolbar",
                        layout: this.opt("header")
                    }
                }, t.prototype.computeFooterOptions = function() {
                    return {
                        extraClasses: "fc-footer-toolbar",
                        layout: this.opt("footer")
                    }
                }, t.prototype.renderHeader = function() {
                    var t = this.header;
                    t.setToolbarOptions(this.computeHeaderOptions()), t.render(), t.el && this.el.prepend(t.el)
                }, t.prototype.renderFooter = function() {
                    var t = this.footer;
                    t.setToolbarOptions(this.computeFooterOptions()), t.render(), t.el && this.el.append(t.el)
                }, t.prototype.setToolbarsTitle = function(t) {
                    this.toolbarsManager.proxyCall("updateTitle", t)
                }, t.prototype.updateToolbarButtons = function(t) {
                    var e = this.getNow(),
                        n = this.view,
                        i = n.dateProfileGenerator.build(e),
                        r = n.dateProfileGenerator.buildPrev(n.get("dateProfile")),
                        o = n.dateProfileGenerator.buildNext(n.get("dateProfile"));
                    this.toolbarsManager.proxyCall(i.isValid && !t.currentUnzonedRange.containsDate(e) ? "enableButton" : "disableButton", "today"), this.toolbarsManager.proxyCall(r.isValid ? "enableButton" : "disableButton", "prev"), this.toolbarsManager.proxyCall(o.isValid ? "enableButton" : "disableButton", "next")
                }, t.prototype.queryToolbarsHeight = function() {
                    return this.toolbarsManager.items.reduce(function(t, e) {
                        return t + (e.el ? e.el.outerHeight(!0) : 0)
                    }, 0)
                }, t.prototype.select = function(t, e) {
                    this.view.select(this.buildSelectFootprint.apply(this, arguments))
                }, t.prototype.unselect = function() {
                    this.view && this.view.unselect()
                }, t.prototype.buildSelectFootprint = function(t, e) {
                    var n, i = this.moment(t).stripZone();
                    return n = e ? this.moment(e).stripZone() : i.hasTime() ? i.clone().add(this.defaultTimedEventDuration) : i.clone().add(this.defaultAllDayEventDuration), new b.default(new m.default(i, n), !i.hasTime())
                }, t.prototype.initMomentInternals = function() {
                    var t = this;
                    this.defaultAllDayEventDuration = o.duration(this.opt("defaultAllDayEventDuration")), this.defaultTimedEventDuration = o.duration(this.opt("defaultTimedEventDuration")), this.optionsManager.watch("buildingMomentLocale", ["?locale", "?monthNames", "?monthNamesShort", "?dayNames", "?dayNamesShort", "?firstDay", "?weekNumberCalculation"], function(e) {
                        var n, i = e.weekNumberCalculation,
                            r = e.firstDay;
                        "iso" === i && (i = "ISO");
                        var o = Object.create(v.getMomentLocaleData(e.locale));
                        e.monthNames && (o._months = e.monthNames), e.monthNamesShort && (o._monthsShort = e.monthNamesShort), e.dayNames && (o._weekdays = e.dayNames), e.dayNamesShort && (o._weekdaysShort = e.dayNamesShort), null == r && "ISO" === i && (r = 1), null != r && (n = Object.create(o._week), n.dow = r, o._week = n), "ISO" !== i && "local" !== i && "function" != typeof i || (o._fullCalendar_weekCalc = i), t.localeData = o, t.currentDate && t.localizeMoment(t.currentDate)
                    })
                }, t.prototype.moment = function() {
                    for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                    var n;
                    return "local" === this.opt("timezone") ? (n = y.default.apply(null, t), n.hasTime() && n.local()) : n = "UTC" === this.opt("timezone") ? y.default.utc.apply(null, t) : y.default.parseZone.apply(null, t), this.localizeMoment(n), n
                }, t.prototype.msToMoment = function(t, e) {
                    var n = y.default.utc(t);
                    return e ? n.stripTime() : n = this.applyTimezone(n), this.localizeMoment(n), n
                }, t.prototype.msToUtcMoment = function(t, e) {
                    var n = y.default.utc(t);
                    return e && n.stripTime(), this.localizeMoment(n), n
                }, t.prototype.localizeMoment = function(t) {
                    t._locale = this.localeData
                }, t.prototype.getIsAmbigTimezone = function() {
                    return "local" !== this.opt("timezone") && "UTC" !== this.opt("timezone")
                }, t.prototype.applyTimezone = function(t) {
                    if (!t.hasTime()) return t.clone();
                    var e, n = this.moment(t.toArray()),
                        i = t.time().asMilliseconds() - n.time().asMilliseconds();
                    return i && (e = n.clone().add(i), t.time().asMilliseconds() - e.time().asMilliseconds() == 0 && (n = e)), n
                }, t.prototype.footprintToDateProfile = function(t, e) {
                    void 0 === e && (e = !1);
                    var n, i = y.default.utc(t.unzonedRange.startMs);
                    return e || (n = y.default.utc(t.unzonedRange.endMs)), t.isAllDay ? (i.stripTime(), n && n.stripTime()) : (i = this.applyTimezone(i), n && (n = this.applyTimezone(n))), new w.default(i, n, this)
                }, t.prototype.getNow = function() {
                    var t = this.opt("now");
                    return "function" == typeof t && (t = t()), this.moment(t).stripZone()
                }, t.prototype.humanizeDuration = function(t) {
                    return t.locale(this.opt("locale")).humanize()
                }, t.prototype.parseUnzonedRange = function(t) {
                    var e = null,
                        n = null;
                    return t.start && (e = this.moment(t.start).stripZone()), t.end && (n = this.moment(t.end).stripZone()), e || n ? e && n && n.isBefore(e) ? null : new m.default(e, n) : null
                }, t.prototype.initEventManager = function() {
                    var t = this,
                        e = new D.default(this),
                        n = this.opt("eventSources") || [],
                        i = this.opt("events");
                    this.eventManager = e, i && n.unshift(i), e.on("release", function(e) {
                        t.trigger("eventsReset", e)
                    }), e.freeze(), n.forEach(function(n) {
                        var i = S.default.parse(n, t);
                        i && e.addSource(i)
                    }), e.thaw()
                }, t.prototype.requestEvents = function(t, e) {
                    return this.eventManager.requestEvents(t, e, this.opt("timezone"), !this.opt("lazyFetching"))
                }, t.prototype.getEventEnd = function(t) {
                    return t.end ? t.end.clone() : this.getDefaultEventEnd(t.allDay, t.start)
                }, t.prototype.getDefaultEventEnd = function(t, e) {
                    var n = e.clone();
                    return t ? n.stripTime().add(this.defaultAllDayEventDuration) : n.add(this.defaultTimedEventDuration), this.getIsAmbigTimezone() && n.stripZone(), n
                }, t.prototype.rerenderEvents = function() {
                    this.view.flash("displayingEvents")
                }, t.prototype.refetchEvents = function() {
                    this.eventManager.refetchAllSources()
                }, t.prototype.renderEvents = function(t, e) {
                    this.eventManager.freeze();
                    for (var n = 0; n < t.length; n++) this.renderEvent(t[n], e);
                    this.eventManager.thaw()
                }, t.prototype.renderEvent = function(t, e) {
                    void 0 === e && (e = !1);
                    var n = this.eventManager,
                        i = C.default.parse(t, t.source || n.stickySource);
                    i && n.addEventDef(i, e)
                }, t.prototype.removeEvents = function(t) {
                    var e, n, r = this.eventManager,
                        o = [],
                        s = {};
                    if (null == t) r.removeAllEventDefs();
                    else {
                        for (r.getEventInstances().forEach(function(t) {
                                o.push(t.toLegacy())
                            }), o = i(o, t), n = 0; n < o.length; n++) e = this.eventManager.getEventDefByUid(o[n]._id), s[e.id] = !0;
                        r.freeze();
                        for (n in s) r.removeEventDefsById(n);
                        r.thaw()
                    }
                }, t.prototype.clientEvents = function(t) {
                    var e = [];
                    return this.eventManager.getEventInstances().forEach(function(t) {
                        e.push(t.toLegacy())
                    }), i(e, t)
                }, t.prototype.updateEvents = function(t) {
                    this.eventManager.freeze();
                    for (var e = 0; e < t.length; e++) this.updateEvent(t[e]);
                    this.eventManager.thaw()
                }, t.prototype.updateEvent = function(t) {
                    var e, n, i = this.eventManager.getEventDefByUid(t._id);
                    i instanceof R.default && (e = i.buildInstance(), n = T.default.createFromRawProps(e, t, null), this.eventManager.mutateEventsWithId(i.id, n))
                }, t.prototype.getEventSources = function() {
                    return this.eventManager.otherSources.slice()
                }, t.prototype.getEventSourceById = function(t) {
                    return this.eventManager.getSourceById(M.default.normalizeId(t))
                }, t.prototype.addEventSource = function(t) {
                    var e = S.default.parse(t, this);
                    e && this.eventManager.addSource(e)
                }, t.prototype.removeEventSources = function(t) {
                    var e, n, i = this.eventManager;
                    if (null == t) this.eventManager.removeAllSources();
                    else {
                        for (e = i.multiQuerySources(t), i.freeze(), n = 0; n < e.length; n++) i.removeSource(e[n]);
                        i.thaw()
                    }
                }, t.prototype.removeEventSource = function(t) {
                    var e, n = this.eventManager,
                        i = n.querySources(t);
                    for (n.freeze(), e = 0; e < i.length; e++) n.removeSource(i[e]);
                    n.thaw()
                }, t.prototype.refetchEventSources = function(t) {
                    var e, n = this.eventManager,
                        i = n.multiQuerySources(t);
                    for (n.freeze(), e = 0; e < i.length; e++) n.refetchSource(i[e]);
                    n.thaw()
                }, t.defaults = a.globalDefaults, t.englishDefaults = a.englishDefaults, t.rtlDefaults = a.rtlDefaults, t
            }();
        e.default = H, d.default.mixInto(H), c.default.mixInto(H)
    }, function(t, e, n) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = n(0),
            r = n(4),
            o = n(5),
            s = function() {
                function t(t) {
                    this._view = t
                }
                return t.prototype.opt = function(t) {
                    return this._view.opt(t)
                }, t.prototype.trimHiddenDays = function(t) {
                    return this._view.trimHiddenDays(t)
                }, t.prototype.msToUtcMoment = function(t, e) {
                    return this._view.calendar.msToUtcMoment(t, e)
                }, t.prototype.buildPrev = function(t) {
                    var e = t.date.clone().startOf(t.currentRangeUnit).subtract(t.dateIncrement);
                    return this.build(e, -1)
                }, t.prototype.buildNext = function(t) {
                    var e = t.date.clone().startOf(t.currentRangeUnit).add(t.dateIncrement);
                    return this.build(e, 1)
                }, t.prototype.build = function(t, e, n) {
                    void 0 === n && (n = !1);
                    var r, o, s, a, l, u, d = !t.hasTime(),
                        c = null,
                        p = null;
                    return r = this.buildValidRange(), r = this.trimHiddenDays(r), n && (t = this.msToUtcMoment(r.constrainDate(t), d)), o = this.buildCurrentRangeInfo(t, e), s = /^(year|month|week|day)$/.test(o.unit), a = this.buildRenderRange(this.trimHiddenDays(o.unzonedRange), o.unit, s), a = this.trimHiddenDays(a), l = a.clone(), this.opt("showNonCurrentDates") || (l = l.intersect(o.unzonedRange)), c = i.duration(this.opt("minTime")), p = i.duration(this.opt("maxTime")), l = this.adjustActiveRange(l, c, p), l = l.intersect(r), l && (t = this.msToUtcMoment(l.constrainDate(t), d)), u = o.unzonedRange.intersectsWith(r), {
                        validUnzonedRange: r,
                        currentUnzonedRange: o.unzonedRange,
                        currentRangeUnit: o.unit,
                        isRangeAllDay: s,
                        activeUnzonedRange: l,
                        renderUnzonedRange: a,
                        minTime: c,
                        maxTime: p,
                        isValid: u,
                        date: t,
                        dateIncrement: this.buildDateIncrement(o.duration)
                    }
                }, t.prototype.buildValidRange = function() {
                    return this._view.getUnzonedRangeOption("validRange", this._view.calendar.getNow()) || new o.default
                }, t.prototype.buildCurrentRangeInfo = function(t, e) {
                    var n, i = this._view.viewSpec,
                        o = null,
                        s = null,
                        a = null;
                    return i.duration ? (o = i.duration, s = i.durationUnit, a = this.buildRangeFromDuration(t, e, o, s)) : (n = this.opt("dayCount")) ? (s = "day", a = this.buildRangeFromDayCount(t, e, n)) : (a = this.buildCustomVisibleRange(t)) ? s = r.computeGreatestUnit(a.getStart(), a.getEnd()) : (o = this.getFallbackDuration(), s = r.computeGreatestUnit(o), a = this.buildRangeFromDuration(t, e, o, s)), {
                        duration: o,
                        unit: s,
                        unzonedRange: a
                    }
                }, t.prototype.getFallbackDuration = function() {
                    return i.duration({
                        days: 1
                    })
                }, t.prototype.adjustActiveRange = function(t, e, n) {
                    var i = t.getStart(),
                        r = t.getEnd();
                    return this._view.usesMinMaxTime && (e < 0 && i.time(0).add(e), n > 864e5 && r.time(n - 864e5)), new o.default(i, r)
                }, t.prototype.buildRangeFromDuration = function(t, e, n, s) {
                    function a() {
                        d = t.clone().startOf(h), c = d.clone().add(n), p = new o.default(d, c)
                    }
                    var l, u, d, c, p, h = this.opt("dateAlignment");
                    return h || (l = this.opt("dateIncrement"), l ? (u = i.duration(l), h = u < n ? r.computeDurationGreatestUnit(u, l) : s) : h = s), n.as("days") <= 1 && this._view.isHiddenDay(d) && (d = this._view.skipHiddenDays(d, e), d.startOf("day")), a(), this.trimHiddenDays(p) || (t = this._view.skipHiddenDays(t, e), a()), p
                }, t.prototype.buildRangeFromDayCount = function(t, e, n) {
                    var i, r = this.opt("dateAlignment"),
                        s = 0,
                        a = t.clone();
                    r && a.startOf(r), a.startOf("day"), a = this._view.skipHiddenDays(a, e), i = a.clone();
                    do {
                        i.add(1, "day"), this._view.isHiddenDay(i) || s++
                    } while (s < n);
                    return new o.default(a, i)
                }, t.prototype.buildCustomVisibleRange = function(t) {
                    var e = this._view.getUnzonedRangeOption("visibleRange", this._view.calendar.applyTimezone(t));
                    return !e || null != e.startMs && null != e.endMs ? e : null
                }, t.prototype.buildRenderRange = function(t, e, n) {
                    return t.clone()
                }, t.prototype.buildDateIncrement = function(t) {
                    var e, n = this.opt("dateIncrement");
                    return n ? i.duration(n) : (e = this.opt("dateAlignment")) ? i.duration(1, e) : t || i.duration({
                        days: 1
                    })
                }, t
            }();
        e.default = s
    }, function(t, e, n) {
        function i(t) {
            var e, n, i, r, l = a.dataAttrPrefix;
            return l && (l += "-"), e = t.data(l + "event") || null, e && (e = "object" == typeof e ? o.extend({}, e) : {}, n = e.start, null == n && (n = e.time), i = e.duration, r = e.stick, delete e.start, delete e.time, delete e.duration, delete e.stick), null == n && (n = t.data(l + "start")), null == n && (n = t.data(l + "time")), null == i && (i = t.data(l + "duration")), null == r && (r = t.data(l + "stick")), n = null != n ? s.duration(n) : null, i = null != i ? s.duration(i) : null, r = Boolean(r), {
                eventProps: e,
                startTime: n,
                duration: i,
                stick: r
            }
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r = n(2),
            o = n(3),
            s = n(0),
            a = n(16),
            l = n(4),
            u = n(10),
            d = n(7),
            c = n(23),
            p = n(13),
            h = n(18),
            f = n(6),
            g = n(15),
            v = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.isDragging = !1, e
                }
                return r.__extends(e, t), e.prototype.end = function() {
                    this.dragListener && this.dragListener.endInteraction()
                }, e.prototype.bindToDocument = function() {
                    this.listenTo(o(document), {
                        dragstart: this.handleDragStart,
                        sortstart: this.handleDragStart
                    })
                }, e.prototype.unbindFromDocument = function() {
                    this.stopListeningTo(o(document))
                }, e.prototype.handleDragStart = function(t, e) {
                    var n, i;
                    this.opt("droppable") && (n = o((e ? e.item : null) || t.target), i = this.opt("dropAccept"), (o.isFunction(i) ? i.call(n[0], n) : n.is(i)) && (this.isDragging || this.listenToExternalDrag(n, t, e)))
                }, e.prototype.listenToExternalDrag = function(t, e, n) {
                    var r, o = this,
                        s = this.component,
                        a = this.view,
                        u = i(t);
                    (this.dragListener = new c.default(s, {
                        interactionStart: function() {
                            o.isDragging = !0
                        },
                        hitOver: function(t) {
                            var e, n = !0,
                                i = t.component.getSafeHitFootprint(t);
                            i ? (r = o.computeExternalDrop(i, u), r ? (e = new h.default(r.buildInstances()), n = u.eventProps ? s.isEventInstanceGroupAllowed(e) : s.isExternalInstanceGroupAllowed(e)) : n = !1) : n = !1, n || (r = null, l.disableCursor()), r && s.renderDrag(s.eventRangesToEventFootprints(e.sliceRenderRanges(s.dateProfile.renderUnzonedRange, a.calendar)))
                        },
                        hitOut: function() {
                            r = null
                        },
                        hitDone: function() {
                            l.enableCursor(), s.unrenderDrag()
                        },
                        interactionEnd: function(e) {
                            r && a.reportExternalDrop(r, Boolean(u.eventProps), Boolean(u.stick), t, e, n), o.isDragging = !1, o.dragListener = null
                        }
                    })).startDrag(e)
                }, e.prototype.computeExternalDrop = function(t, e) {
                    var n, i = this.view.calendar,
                        r = u.default.utc(t.unzonedRange.startMs).stripZone();
                    return t.isAllDay && (e.startTime ? r.time(e.startTime) : r.stripTime()), e.duration && (n = r.clone().add(e.duration)), r = i.applyTimezone(r), n && (n = i.applyTimezone(n)), p.default.parse(o.extend({}, e.eventProps, {
                        start: r,
                        end: n
                    }), new f.default(i))
                }, e
            }(g.default);
        e.default = v, d.default.mixInto(v), a.dataAttrPrefix = ""
    }, function(t, e, n) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = n(2),
            r = n(3),
            o = n(4),
            s = n(37),
            a = n(50),
            l = n(23),
            u = n(15),
            d = function(t) {
                function e(e, n) {
                    var i = t.call(this, e) || this;
                    return i.isResizing = !1, i.eventPointing = n, i
                }
                return i.__extends(e, t), e.prototype.end = function() {
                    this.dragListener && this.dragListener.endInteraction()
                }, e.prototype.bindToEl = function(t) {
                    var e = this.component;
                    e.bindSegHandlerToEl(t, "mousedown", this.handleMouseDown.bind(this)), e.bindSegHandlerToEl(t, "touchstart", this.handleTouchStart.bind(this))
                }, e.prototype.handleMouseDown = function(t, e) {
                    this.component.canStartResize(t, e) && this.buildDragListener(t, r(e.target).is(".fc-start-resizer")).startInteraction(e, {
                        distance: 5
                    })
                }, e.prototype.handleTouchStart = function(t, e) {
                    this.component.canStartResize(t, e) && this.buildDragListener(t, r(e.target).is(".fc-start-resizer")).startInteraction(e)
                }, e.prototype.buildDragListener = function(t, e) {
                    var n, i, r = this,
                        s = this.component,
                        a = this.view,
                        u = a.calendar,
                        d = u.eventManager,
                        c = t.el,
                        p = t.footprint.eventDef,
                        h = t.footprint.eventInstance;
                    return this.dragListener = new l.default(s, {
                        scroll: this.opt("dragScroll"),
                        subjectEl: c,
                        interactionStart: function() {
                            n = !1
                        },
                        dragStart: function(e) {
                            n = !0, r.eventPointing.handleMouseout(t, e), r.segResizeStart(t, e)
                        },
                        hitOver: function(n, l, c) {
                            var h, f = !0,
                                g = s.getSafeHitFootprint(c),
                                v = s.getSafeHitFootprint(n);
                            g && v ? (i = e ? r.computeEventStartResizeMutation(g, v, t.footprint) : r.computeEventEndResizeMutation(g, v, t.footprint), i ? (h = d.buildMutatedEventInstanceGroup(p.id, i), f = s.isEventInstanceGroupAllowed(h)) : f = !1) : f = !1, f ? i.isEmpty() && (i = null) : (i = null, o.disableCursor()), i && (a.hideEventsWithId(t.footprint.eventDef.id), a.renderEventResize(s.eventRangesToEventFootprints(h.sliceRenderRanges(s.dateProfile.renderUnzonedRange, u)), t))
                        },
                        hitOut: function() {
                            i = null
                        },
                        hitDone: function() {
                            a.unrenderEventResize(t), a.showEventsWithId(t.footprint.eventDef.id), o.enableCursor()
                        },
                        interactionEnd: function(e) {
                            n && r.segResizeStop(t, e), i && a.reportEventResize(h, i, c, e), r.dragListener = null
                        }
                    })
                }, e.prototype.segResizeStart = function(t, e) {
                    this.isResizing = !0, this.component.publiclyTrigger("eventResizeStart", {
                        context: t.el[0],
                        args: [t.footprint.getEventLegacy(), e, {}, this.view]
                    })
                }, e.prototype.segResizeStop = function(t, e) {
                    this.isResizing = !1, this.component.publiclyTrigger("eventResizeStop", {
                        context: t.el[0],
                        args: [t.footprint.getEventLegacy(), e, {}, this.view]
                    })
                }, e.prototype.computeEventStartResizeMutation = function(t, e, n) {
                    var i, r, o = n.componentFootprint.unzonedRange,
                        l = this.component.diffDates(e.unzonedRange.getStart(), t.unzonedRange.getStart());
                    return o.getStart().add(l) < o.getEnd() && (i = new a.default, i.setStartDelta(l), r = new s.default, r.setDateMutation(i), r)
                }, e.prototype.computeEventEndResizeMutation = function(t, e, n) {
                    var i, r, o = n.componentFootprint.unzonedRange,
                        l = this.component.diffDates(e.unzonedRange.getEnd(), t.unzonedRange.getEnd());
                    return o.getEnd().add(l) > o.getStart() && (i = new a.default, i.setEndDelta(l), r = new s.default, r.setDateMutation(i), r)
                }, e
            }(u.default);
        e.default = d
    }, function(t, e, n) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = n(2),
            r = n(4),
            o = n(37),
            s = n(50),
            a = n(54),
            l = n(23),
            u = n(244),
            d = n(15),
            c = function(t) {
                function e(e, n) {
                    var i = t.call(this, e) || this;
                    return i.isDragging = !1, i.eventPointing = n, i
                }
                return i.__extends(e, t), e.prototype.end = function() {
                    this.dragListener && this.dragListener.endInteraction()
                }, e.prototype.getSelectionDelay = function() {
                    var t = this.opt("eventLongPressDelay");
                    return null == t && (t = this.opt("longPressDelay")), t
                }, e.prototype.bindToEl = function(t) {
                    var e = this.component;
                    e.bindSegHandlerToEl(t, "mousedown", this.handleMousedown.bind(this)), e.bindSegHandlerToEl(t, "touchstart", this.handleTouchStart.bind(this))
                }, e.prototype.handleMousedown = function(t, e) {
                    !this.component.shouldIgnoreMouse() && this.component.canStartDrag(t, e) && this.buildDragListener(t).startInteraction(e, {
                        distance: 5
                    })
                }, e.prototype.handleTouchStart = function(t, e) {
                    var n = this.component,
                        i = {
                            delay: this.view.isEventDefSelected(t.footprint.eventDef) ? 0 : this.getSelectionDelay()
                        };
                    n.canStartDrag(t, e) ? this.buildDragListener(t).startInteraction(e, i) : n.canStartSelection(t, e) && this.buildSelectListener(t).startInteraction(e, i)
                }, e.prototype.buildSelectListener = function(t) {
                    var e = this,
                        n = this.view,
                        i = t.footprint.eventDef,
                        r = t.footprint.eventInstance;
                    if (this.dragListener) return this.dragListener;
                    var o = this.dragListener = new a.default({
                        dragStart: function(t) {
                            o.isTouch && !n.isEventDefSelected(i) && r && n.selectEventInstance(r)
                        },
                        interactionEnd: function(t) {
                            e.dragListener = null
                        }
                    });
                    return o
                }, e.prototype.buildDragListener = function(t) {
                    var e, n, i, o = this,
                        s = this.component,
                        a = this.view,
                        d = a.calendar,
                        c = d.eventManager,
                        p = t.el,
                        h = t.footprint.eventDef,
                        f = t.footprint.eventInstance;
                    if (this.dragListener) return this.dragListener;
                    var g = this.dragListener = new l.default(a, {
                        scroll: this.opt("dragScroll"),
                        subjectEl: p,
                        subjectCenter: !0,
                        interactionStart: function(i) {
                            t.component = s, e = !1, n = new u.default(t.el, {
                                additionalClass: "fc-dragging",
                                parentEl: a.el,
                                opacity: g.isTouch ? null : o.opt("dragOpacity"),
                                revertDuration: o.opt("dragRevertDuration"),
                                zIndex: 2
                            }), n.hide(), n.start(i)
                        },
                        dragStart: function(n) {
                            g.isTouch && !a.isEventDefSelected(h) && f && a.selectEventInstance(f), e = !0, o.eventPointing.handleMouseout(t, n), o.segDragStart(t, n), a.hideEventsWithId(t.footprint.eventDef.id)
                        },
                        hitOver: function(e, l, u) {
                            var p, f, v, y = !0;
                            t.hit && (u = t.hit), p = u.component.getSafeHitFootprint(u), f = e.component.getSafeHitFootprint(e), p && f ? (i = o.computeEventDropMutation(p, f, h), i ? (v = c.buildMutatedEventInstanceGroup(h.id, i), y = s.isEventInstanceGroupAllowed(v)) : y = !1) : y = !1, y || (i = null, r.disableCursor()), i && a.renderDrag(s.eventRangesToEventFootprints(v.sliceRenderRanges(s.dateProfile.renderUnzonedRange, d)), t, g.isTouch) ? n.hide() : n.show(), l && (i = null)
                        },
                        hitOut: function() {
                            a.unrenderDrag(t), n.show(), i = null
                        },
                        hitDone: function() {
                            r.enableCursor()
                        },
                        interactionEnd: function(r) {
                            delete t.component, n.stop(!i, function() {
                                e && (a.unrenderDrag(t), o.segDragStop(t, r)), a.showEventsWithId(t.footprint.eventDef.id), i && a.reportEventDrop(f, i, p, r)
                            }), o.dragListener = null
                        }
                    });
                    return g
                }, e.prototype.segDragStart = function(t, e) {
                    this.isDragging = !0, this.component.publiclyTrigger("eventDragStart", {
                        context: t.el[0],
                        args: [t.footprint.getEventLegacy(), e, {}, this.view]
                    })
                }, e.prototype.segDragStop = function(t, e) {
                    this.isDragging = !1, this.component.publiclyTrigger("eventDragStop", {
                        context: t.el[0],
                        args: [t.footprint.getEventLegacy(), e, {}, this.view]
                    })
                }, e.prototype.computeEventDropMutation = function(t, e, n) {
                    var i = new o.default;
                    return i.setDateMutation(this.computeEventDateMutation(t, e)), i
                }, e.prototype.computeEventDateMutation = function(t, e) {
                    var n, i, r = t.unzonedRange.getStart(),
                        o = e.unzonedRange.getStart(),
                        a = !1,
                        l = !1,
                        u = !1;
                    return t.isAllDay !== e.isAllDay && (a = !0, e.isAllDay ? (u = !0, r.stripTime()) : l = !0), n = this.component.diffDates(o, r), i = new s.default, i.clearEnd = a, i.forceTimed = l, i.forceAllDay = u, i.setDateDelta(n), i
                }, e
            }(d.default);
        e.default = c
    }, function(t, e, n) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = n(2),
            r = n(4),
            o = n(23),
            s = n(12),
            a = n(5),
            l = n(15),
            u = function(t) {
                function e(e) {
                    var n = t.call(this, e) || this;
                    return n.dragListener = n.buildDragListener(), n
                }
                return i.__extends(e, t), e.prototype.end = function() {
                    this.dragListener.endInteraction()
                }, e.prototype.getDelay = function() {
                    var t = this.opt("selectLongPressDelay");
                    return null == t && (t = this.opt("longPressDelay")), t
                }, e.prototype.bindToEl = function(t) {
                    var e = this,
                        n = this.component,
                        i = this.dragListener;
                    n.bindDateHandlerToEl(t, "mousedown", function(t) {
                        e.opt("selectable") && !n.shouldIgnoreMouse() && i.startInteraction(t, {
                            distance: e.opt("selectMinDistance")
                        })
                    }), n.bindDateHandlerToEl(t, "touchstart", function(t) {
                        e.opt("selectable") && !n.shouldIgnoreTouch() && i.startInteraction(t, {
                            delay: e.getDelay()
                        })
                    }), r.preventSelection(t)
                }, e.prototype.buildDragListener = function() {
                    var t, e = this,
                        n = this.component;
                    return new o.default(n, {
                        scroll: this.opt("dragScroll"),
                        interactionStart: function() {
                            t = null
                        },
                        dragStart: function(t) {
                            e.view.unselect(t)
                        },
                        hitOver: function(i, o, s) {
                            var a, l;
                            s && (a = n.getSafeHitFootprint(s), l = n.getSafeHitFootprint(i), t = a && l ? e.computeSelection(a, l) : null, t ? n.renderSelectionFootprint(t) : !1 === t && r.disableCursor())
                        },
                        hitOut: function() {
                            t = null, n.unrenderSelection()
                        },
                        hitDone: function() {
                            r.enableCursor()
                        },
                        interactionEnd: function(n, i) {
                            !i && t && e.view.reportSelection(t, n)
                        }
                    })
                }, e.prototype.computeSelection = function(t, e) {
                    var n = this.computeSelectionFootprint(t, e);
                    return !(n && !this.isSelectionFootprintAllowed(n)) && n
                }, e.prototype.computeSelectionFootprint = function(t, e) {
                    var n = [t.unzonedRange.startMs, t.unzonedRange.endMs, e.unzonedRange.startMs, e.unzonedRange.endMs];
                    return n.sort(r.compareNumbers), new s.default(new a.default(n[0], n[3]), t.isAllDay)
                }, e.prototype.isSelectionFootprintAllowed = function(t) {
                    return this.component.dateProfile.validUnzonedRange.containsRange(t.unzonedRange) && this.view.calendar.constraints.isSelectionFootprintAllowed(t)
                }, e
            }(l.default);
        e.default = u
    }, function(t, e, n) {
        function i(t) {
            var e, n = [],
                i = [];
            for (e = 0; e < t.length; e++) t[e].componentFootprint.isAllDay ? n.push(t[e]) : i.push(t[e]);
            return {
                allDay: n,
                timed: i
            }
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r, o, s = n(2),
            a = n(0),
            l = n(3),
            u = n(4),
            d = n(39),
            c = n(41),
            p = n(227),
            h = n(61),
            f = function(t) {
                function e(e, n) {
                    var i = t.call(this, e, n) || this;
                    return i.usesMinMaxTime = !0, i.timeGrid = i.instantiateTimeGrid(), i.addChild(i.timeGrid), i.opt("allDaySlot") && (i.dayGrid = i.instantiateDayGrid(), i.addChild(i.dayGrid)), i.scroller = new d.default({
                        overflowX: "hidden",
                        overflowY: "auto"
                    }), i
                }
                return s.__extends(e, t), e.prototype.instantiateTimeGrid = function() {
                    var t = new this.timeGridClass(this);
                    return u.copyOwnProps(r, t), t
                }, e.prototype.instantiateDayGrid = function() {
                    var t = new this.dayGridClass(this);
                    return u.copyOwnProps(o, t), t
                }, e.prototype.renderSkeleton = function() {
                    var t, e;
                    this.el.addClass("fc-agenda-view").html(this.renderSkeletonHtml()), this.scroller.render(), t = this.scroller.el.addClass("fc-time-grid-container"), e = l('<div class="fc-time-grid" />').appendTo(t), this.el.find(".fc-body > tr > td").append(t), this.timeGrid.headContainerEl = this.el.find(".fc-head-container"), this.timeGrid.setElement(e), this.dayGrid && (this.dayGrid.setElement(this.el.find(".fc-day-grid")), this.dayGrid.bottomCoordPadding = this.dayGrid.el.next("hr").outerHeight())
                }, e.prototype.unrenderSkeleton = function() {
                    this.timeGrid.removeElement(), this.dayGrid && this.dayGrid.removeElement(), this.scroller.destroy()
                }, e.prototype.renderSkeletonHtml = function() {
                    var t = this.calendar.theme;
                    return '<table class="' + t.getClass("tableGrid") + '">' + (this.opt("columnHeader") ? '<thead class="fc-head"><tr><td class="fc-head-container ' + t.getClass("widgetHeader") + '">&nbsp;</td></tr></thead>' : "") + '<tbody class="fc-body"><tr><td class="' + t.getClass("widgetContent") + '">' + (this.dayGrid ? '<div class="fc-day-grid"/><hr class="fc-divider ' + t.getClass("widgetHeader") + '"/>' : "") + "</td></tr></tbody></table>"
                }, e.prototype.axisStyleAttr = function() {
                    return null != this.axisWidth ? 'style="width:' + this.axisWidth + 'px"' : ""
                }, e.prototype.getNowIndicatorUnit = function() {
                    return this.timeGrid.getNowIndicatorUnit()
                }, e.prototype.updateSize = function(e, n, i) {
                    var r, o, s;
                    if (t.prototype.updateSize.call(this, e, n, i), this.axisWidth = u.matchCellWidths(this.el.find(".fc-axis")), !this.timeGrid.colEls) return void(n || (o = this.computeScrollerHeight(e), this.scroller.setHeight(o)));
                    var a = this.el.find(".fc-row:not(.fc-scroller *)");
                    this.timeGrid.bottomRuleEl.hide(), this.scroller.clear(), u.uncompensateScroll(a), this.dayGrid && (this.dayGrid.removeSegPopover(), r = this.opt("eventLimit"), r && "number" != typeof r && (r = 5), r && this.dayGrid.limitRows(r)), n || (o = this.computeScrollerHeight(e), this.scroller.setHeight(o), s = this.scroller.getScrollbarWidths(), (s.left || s.right) && (u.compensateScroll(a, s), o = this.computeScrollerHeight(e), this.scroller.setHeight(o)), this.scroller.lockOverflow(s), this.timeGrid.getTotalSlatHeight() < o && this.timeGrid.bottomRuleEl.show())
                }, e.prototype.computeScrollerHeight = function(t) {
                    return t - u.subtractInnerElHeight(this.el, this.scroller.el)
                }, e.prototype.computeInitialDateScroll = function() {
                    var t = a.duration(this.opt("scrollTime")),
                        e = this.timeGrid.computeTimeTop(t);
                    return e = Math.ceil(e), e && e++, {
                        top: e
                    }
                }, e.prototype.queryDateScroll = function() {
                    return {
                        top: this.scroller.getScrollTop()
                    }
                }, e.prototype.applyDateScroll = function(t) {
                    void 0 !== t.top && this.scroller.setScrollTop(t.top)
                }, e.prototype.getHitFootprint = function(t) {
                    return t.component.getHitFootprint(t)
                }, e.prototype.getHitEl = function(t) {
                    return t.component.getHitEl(t)
                }, e.prototype.executeEventRender = function(t) {
                    var e, n, i = {},
                        r = {};
                    for (e in t) n = t[e], n.getEventDef().isAllDay() ? i[e] = n : r[e] = n;
                    this.timeGrid.executeEventRender(r), this.dayGrid && this.dayGrid.executeEventRender(i)
                }, e.prototype.renderDrag = function(t, e, n) {
                    var r = i(t),
                        o = !1;
                    return o = this.timeGrid.renderDrag(r.timed, e, n), this.dayGrid && (o = this.dayGrid.renderDrag(r.allDay, e, n) || o), o
                }, e.prototype.renderEventResize = function(t, e, n) {
                    var r = i(t);
                    this.timeGrid.renderEventResize(r.timed, e, n), this.dayGrid && this.dayGrid.renderEventResize(r.allDay, e, n)
                }, e.prototype.renderSelectionFootprint = function(t) {
                    t.isAllDay ? this.dayGrid && this.dayGrid.renderSelectionFootprint(t) : this.timeGrid.renderSelectionFootprint(t)
                }, e
            }(c.default);
        e.default = f, f.prototype.timeGridClass = p.default, f.prototype.dayGridClass = h.default, r = {
            renderHeadIntroHtml: function() {
                var t, e = this.view,
                    n = e.calendar,
                    i = n.msToUtcMoment(this.dateProfile.renderUnzonedRange.startMs, !0);
                return this.opt("weekNumbers") ? (t = i.format(this.opt("smallWeekFormat")), '<th class="fc-axis fc-week-number ' + n.theme.getClass("widgetHeader") + '" ' + e.axisStyleAttr() + ">" + e.buildGotoAnchorHtml({
                    date: i,
                    type: "week",
                    forceOff: this.colCnt > 1
                }, u.htmlEscape(t)) + "</th>") : '<th class="fc-axis ' + n.theme.getClass("widgetHeader") + '" ' + e.axisStyleAttr() + "></th>"
            },
            renderBgIntroHtml: function() {
                var t = this.view;
                return '<td class="fc-axis ' + t.calendar.theme.getClass("widgetContent") + '" ' + t.axisStyleAttr() + "></td>"
            },
            renderIntroHtml: function() {
                return '<td class="fc-axis" ' + this.view.axisStyleAttr() + "></td>"
            }
        }, o = {
            renderBgIntroHtml: function() {
                var t = this.view;
                return '<td class="fc-axis ' + t.calendar.theme.getClass("widgetContent") + '" ' + t.axisStyleAttr() + "><span>" + t.getAllDayHtml() + "</span></td>"
            },
            renderIntroHtml: function() {
                return '<td class="fc-axis" ' + this.view.axisStyleAttr() + "></td>"
            }
        }
    }, function(t, e, n) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = n(2),
            r = n(3),
            o = n(0),
            s = n(4),
            a = n(40),
            l = n(56),
            u = n(60),
            d = n(55),
            c = n(53),
            p = n(5),
            h = n(12),
            f = n(246),
            g = n(247),
            v = n(248),
            y = [{
                hours: 1
            }, {
                minutes: 30
            }, {
                minutes: 15
            }, {
                seconds: 30
            }, {
                seconds: 15
            }],
            m = function(t) {
                function e(e) {
                    var n = t.call(this, e) || this;
                    return n.processOptions(), n
                }
                return i.__extends(e, t), e.prototype.componentFootprintToSegs = function(t) {
                    var e, n = this.sliceRangeByTimes(t.unzonedRange);
                    for (e = 0; e < n.length; e++) this.isRTL ? n[e].col = this.daysPerRow - 1 - n[e].dayIndex : n[e].col = n[e].dayIndex;
                    return n
                }, e.prototype.sliceRangeByTimes = function(t) {
                    var e, n, i = [];
                    for (n = 0; n < this.daysPerRow; n++)(e = t.intersect(this.dayRanges[n])) && i.push({
                        startMs: e.startMs,
                        endMs: e.endMs,
                        isStart: e.isStart,
                        isEnd: e.isEnd,
                        dayIndex: n
                    });
                    return i
                }, e.prototype.processOptions = function() {
                    var t, e = this.opt("slotDuration"),
                        n = this.opt("snapDuration");
                    e = o.duration(e), n = n ? o.duration(n) : e, this.slotDuration = e, this.snapDuration = n, this.snapsPerSlot = e / n, t = this.opt("slotLabelFormat"), r.isArray(t) && (t = t[t.length - 1]), this.labelFormat = t || this.opt("smallTimeFormat"), t = this.opt("slotLabelInterval"), this.labelInterval = t ? o.duration(t) : this.computeLabelInterval(e)
                }, e.prototype.computeLabelInterval = function(t) {
                    var e, n, i;
                    for (e = y.length - 1; e >= 0; e--)
                        if (n = o.duration(y[e]), i = s.divideDurationByDuration(n, t), s.isInt(i) && i > 1) return n;
                    return o.duration(t)
                }, e.prototype.renderDates = function(t) {
                    this.dateProfile = t, this.updateDayTable(), this.renderSlats(), this.renderColumns()
                }, e.prototype.unrenderDates = function() {
                    this.unrenderColumns()
                }, e.prototype.renderSkeleton = function() {
                    var t = this.view.calendar.theme;
                    this.el.html('<div class="fc-bg"></div><div class="fc-slats"></div><hr class="fc-divider ' + t.getClass("widgetHeader") + '" style="display:none" />'), this.bottomRuleEl = this.el.find("hr")
                }, e.prototype.renderSlats = function() {
                    var t = this.view.calendar.theme;
                    this.slatContainerEl = this.el.find("> .fc-slats").html('<table class="' + t.getClass("tableGrid") + '">' + this.renderSlatRowHtml() + "</table>"), this.slatEls = this.slatContainerEl.find("tr"), this.slatCoordCache = new c.default({
                        els: this.slatEls,
                        isVertical: !0
                    })
                }, e.prototype.renderSlatRowHtml = function() {
                    for (var t, e, n, i = this.view, r = i.calendar, a = r.theme, l = this.isRTL, u = this.dateProfile, d = "", c = o.duration(+u.minTime), p = o.duration(0); c < u.maxTime;) t = r.msToUtcMoment(u.renderUnzonedRange.startMs).time(c), e = s.isInt(s.divideDurationByDuration(p, this.labelInterval)), n = '<td class="fc-axis fc-time ' + a.getClass("widgetContent") + '" ' + i.axisStyleAttr() + ">" + (e ? "<span>" + s.htmlEscape(t.format(this.labelFormat)) + "</span>" : "") + "</td>", d += '<tr data-time="' + t.format("HH:mm:ss") + '"' + (e ? "" : ' class="fc-minor"') + ">" + (l ? "" : n) + '<td class="' + a.getClass("widgetContent") + '"/>' + (l ? n : "") + "</tr>", c.add(this.slotDuration), p.add(this.slotDuration);
                    return d
                }, e.prototype.renderColumns = function() {
                    var t = this.dateProfile,
                        e = this.view.calendar.theme;
                    this.dayRanges = this.dayDates.map(function(e) {
                        return new p.default(e.clone().add(t.minTime), e.clone().add(t.maxTime))
                    }), this.headContainerEl && this.headContainerEl.html(this.renderHeadHtml()), this.el.find("> .fc-bg").html('<table class="' + e.getClass("tableGrid") + '">' + this.renderBgTrHtml(0) + "</table>"), this.colEls = this.el.find(".fc-day, .fc-disabled-day"), this.colCoordCache = new c.default({
                        els: this.colEls,
                        isHorizontal: !0
                    }), this.renderContentSkeleton()
                }, e.prototype.unrenderColumns = function() {
                    this.unrenderContentSkeleton()
                }, e.prototype.renderContentSkeleton = function() {
                    var t, e, n = "";
                    for (t = 0; t < this.colCnt; t++) n += '<td><div class="fc-content-col"><div class="fc-event-container fc-helper-container"></div><div class="fc-event-container"></div><div class="fc-highlight-container"></div><div class="fc-bgevent-container"></div><div class="fc-business-container"></div></div></td>';
                    e = this.contentSkeletonEl = r('<div class="fc-content-skeleton"><table><tr>' + n + "</tr></table></div>"), this.colContainerEls = e.find(".fc-content-col"), this.helperContainerEls = e.find(".fc-helper-container"), this.fgContainerEls = e.find(".fc-event-container:not(.fc-helper-container)"), this.bgContainerEls = e.find(".fc-bgevent-container"), this.highlightContainerEls = e.find(".fc-highlight-container"), this.businessContainerEls = e.find(".fc-business-container"), this.bookendCells(e.find("tr")), this.el.append(e)
                }, e.prototype.unrenderContentSkeleton = function() {
                    this.contentSkeletonEl && (this.contentSkeletonEl.remove(), this.contentSkeletonEl = null, this.colContainerEls = null, this.helperContainerEls = null, this.fgContainerEls = null, this.bgContainerEls = null, this.highlightContainerEls = null, this.businessContainerEls = null)
                }, e.prototype.groupSegsByCol = function(t) {
                    var e, n = [];
                    for (e = 0; e < this.colCnt; e++) n.push([]);
                    for (e = 0; e < t.length; e++) n[t[e].col].push(t[e]);
                    return n
                }, e.prototype.attachSegsByCol = function(t, e) {
                    var n, i, r;
                    for (n = 0; n < this.colCnt; n++)
                        for (i = t[n], r = 0; r < i.length; r++) e.eq(n).append(i[r].el)
                }, e.prototype.getNowIndicatorUnit = function() {
                    return "minute"
                }, e.prototype.renderNowIndicator = function(t) {
                    if (this.colContainerEls) {
                        var e, n = this.componentFootprintToSegs(new h.default(new p.default(t, t.valueOf() + 1), !1)),
                            i = this.computeDateTop(t, t),
                            o = [];
                        for (e = 0; e < n.length; e++) o.push(r('<div class="fc-now-indicator fc-now-indicator-line"></div>').css("top", i).appendTo(this.colContainerEls.eq(n[e].col))[0]);
                        n.length > 0 && o.push(r('<div class="fc-now-indicator fc-now-indicator-arrow"></div>').css("top", i).appendTo(this.el.find(".fc-content-skeleton"))[0]), this.nowIndicatorEls = r(o)
                    }
                }, e.prototype.unrenderNowIndicator = function() {
                    this.nowIndicatorEls && (this.nowIndicatorEls.remove(), this.nowIndicatorEls = null)
                }, e.prototype.updateSize = function(e, n, i) {
                    t.prototype.updateSize.call(this, e, n, i), this.slatCoordCache.build(), i && this.updateSegVerticals([].concat(this.eventRenderer.getSegs(), this.businessSegs || []))
                }, e.prototype.getTotalSlatHeight = function() {
                    return this.slatContainerEl.outerHeight()
                }, e.prototype.computeDateTop = function(t, e) {
                    return this.computeTimeTop(o.duration(t - e.clone().stripTime()))
                }, e.prototype.computeTimeTop = function(t) {
                    var e, n, i = this.slatEls.length,
                        r = this.dateProfile,
                        o = (t - r.minTime) / this.slotDuration;
                    return o = Math.max(0, o), o = Math.min(i, o), e = Math.floor(o), e = Math.min(e, i - 1), n = o - e, this.slatCoordCache.getTopPosition(e) + this.slatCoordCache.getHeight(e) * n
                }, e.prototype.updateSegVerticals = function(t) {
                    this.computeSegVerticals(t), this.assignSegVerticals(t)
                }, e.prototype.computeSegVerticals = function(t) {
                    var e, n, i, r = this.opt("agendaEventMinHeight");
                    for (e = 0; e < t.length; e++) n = t[e], i = this.dayDates[n.dayIndex], n.top = this.computeDateTop(n.startMs, i), n.bottom = Math.max(n.top + r, this.computeDateTop(n.endMs, i))
                }, e.prototype.assignSegVerticals = function(t) {
                    var e, n;
                    for (e = 0; e < t.length; e++) n = t[e], n.el.css(this.generateSegVerticalCss(n))
                }, e.prototype.generateSegVerticalCss = function(t) {
                    return {
                        top: t.top,
                        bottom: -t.bottom
                    }
                }, e.prototype.prepareHits = function() {
                    this.colCoordCache.build(), this.slatCoordCache.build()
                }, e.prototype.releaseHits = function() {
                    this.colCoordCache.clear()
                }, e.prototype.queryHit = function(t, e) {
                    var n = this.snapsPerSlot,
                        i = this.colCoordCache,
                        r = this.slatCoordCache;
                    if (i.isLeftInBounds(t) && r.isTopInBounds(e)) {
                        var o = i.getHorizontalIndex(t),
                            s = r.getVerticalIndex(e);
                        if (null != o && null != s) {
                            var a = r.getTopOffset(s),
                                l = r.getHeight(s),
                                u = (e - a) / l,
                                d = Math.floor(u * n),
                                c = s * n + d,
                                p = a + d / n * l,
                                h = a + (d + 1) / n * l;
                            return {
                                col: o,
                                snap: c,
                                component: this,
                                left: i.getLeftOffset(o),
                                right: i.getRightOffset(o),
                                top: p,
                                bottom: h
                            }
                        }
                    }
                }, e.prototype.getHitFootprint = function(t) {
                    var e, n = this.getCellDate(0, t.col),
                        i = this.computeSnapTime(t.snap);
                    return n.time(i), e = n.clone().add(this.snapDuration), new h.default(new p.default(n, e), !1)
                }, e.prototype.computeSnapTime = function(t) {
                    return o.duration(this.dateProfile.minTime + this.snapDuration * t)
                }, e.prototype.getHitEl = function(t) {
                    return this.colEls.eq(t.col)
                }, e.prototype.renderDrag = function(t, e, n) {
                    var i;
                    if (e) {
                        if (t.length) return this.helperRenderer.renderEventDraggingFootprints(t, e, n), !0
                    } else
                        for (i = 0; i < t.length; i++) this.renderHighlight(t[i].componentFootprint)
                }, e.prototype.unrenderDrag = function() {
                    this.unrenderHighlight(), this.helperRenderer.unrender()
                }, e.prototype.renderEventResize = function(t, e, n) {
                    this.helperRenderer.renderEventResizingFootprints(t, e, n)
                }, e.prototype.unrenderEventResize = function() {
                    this.helperRenderer.unrender()
                }, e.prototype.renderSelectionFootprint = function(t) {
                    this.opt("selectHelper") ? this.helperRenderer.renderComponentFootprint(t) : this.renderHighlight(t)
                }, e.prototype.unrenderSelection = function() {
                    this.helperRenderer.unrender(), this.unrenderHighlight()
                }, e
            }(a.default);
        e.default = m, m.prototype.eventRendererClass = f.default, m.prototype.businessHourRendererClass = l.default, m.prototype.helperRendererClass = g.default, m.prototype.fillRendererClass = v.default, u.default.mixInto(m), d.default.mixInto(m)
    }, function(t, e, n) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = n(2),
            r = n(5),
            o = n(221),
            s = function(t) {
                function e() {
                    return null !== t && t.apply(this, arguments) || this
                }
                return i.__extends(e, t), e.prototype.buildRenderRange = function(e, n, i) {
                    var o = t.prototype.buildRenderRange.call(this, e, n, i),
                        s = this.msToUtcMoment(o.startMs, i),
                        a = this.msToUtcMoment(o.endMs, i);
                    return /^(year|month)$/.test(n) && (s.startOf("week"), a.weekday() && a.add(1, "week").startOf("week")), new r.default(s, a)
                }, e
            }(o.default);
        e.default = s
    }, function(t, e, n) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = n(2),
            r = n(0),
            o = n(4),
            s = n(62),
            a = n(253),
            l = function(t) {
                function e() {
                    return null !== t && t.apply(this, arguments) || this
                }
                return i.__extends(e, t), e.prototype.setGridHeight = function(t, e) {
                    e && (t *= this.dayGrid.rowCnt / 6), o.distributeHeight(this.dayGrid.rowEls, t, !e)
                }, e.prototype.isDateInOtherMonth = function(t, e) {
                    return t.month() !== r.utc(e.currentUnzonedRange.startMs).month()
                }, e
            }(s.default);
        e.default = l, l.prototype.dateProfileGeneratorClass = a.default
    }, function(t, e, n) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = n(2),
            r = n(3),
            o = n(4),
            s = n(5),
            a = n(41),
            l = n(39),
            u = n(254),
            d = n(255),
            c = function(t) {
                function e(e, n) {
                    var i = t.call(this, e, n) || this;
                    return i.segSelector = ".fc-list-item", i.scroller = new l.default({
                        overflowX: "hidden",
                        overflowY: "auto"
                    }), i
                }
                return i.__extends(e, t), e.prototype.renderSkeleton = function() {
                    this.el.addClass("fc-list-view " + this.calendar.theme.getClass("listView")), this.scroller.render(), this.scroller.el.appendTo(this.el), this.contentEl = this.scroller.scrollEl
                }, e.prototype.unrenderSkeleton = function() {
                    this.scroller.destroy()
                }, e.prototype.updateSize = function(e, n, i) {
                    t.prototype.updateSize.call(this, e, n, i), this.scroller.clear(), n || this.scroller.setHeight(this.computeScrollerHeight(e))
                }, e.prototype.computeScrollerHeight = function(t) {
                    return t - o.subtractInnerElHeight(this.el, this.scroller.el)
                }, e.prototype.renderDates = function(t) {
                    for (var e = this.calendar, n = e.msToUtcMoment(t.renderUnzonedRange.startMs, !0), i = e.msToUtcMoment(t.renderUnzonedRange.endMs, !0), r = [], o = []; n < i;) r.push(n.clone()), o.push(new s.default(n, n.clone().add(1, "day"))), n.add(1, "day");
                    this.dayDates = r, this.dayRanges = o
                }, e.prototype.componentFootprintToSegs = function(t) {
                    var e, n, i, r = this.dayRanges,
                        o = [];
                    for (e = 0; e < r.length; e++)
                        if ((n = t.unzonedRange.intersect(r[e])) && (i = {
                                startMs: n.startMs,
                                endMs: n.endMs,
                                isStart: n.isStart,
                                isEnd: n.isEnd,
                                dayIndex: e
                            }, o.push(i), !i.isEnd && !t.isAllDay && e + 1 < r.length && t.unzonedRange.endMs < r[e + 1].startMs + this.nextDayThreshold)) {
                            i.endMs = t.unzonedRange.endMs, i.isEnd = !0;
                            break
                        }
                    return o
                }, e.prototype.renderEmptyMessage = function() {
                    this.contentEl.html('<div class="fc-list-empty-wrap2"><div class="fc-list-empty-wrap1"><div class="fc-list-empty">' + o.htmlEscape(this.opt("noEventsMessage")) + "</div></div></div>")
                }, e.prototype.renderSegList = function(t) {
                    var e, n, i, o = this.groupSegsByDay(t),
                        s = r('<table class="fc-list-table ' + this.calendar.theme.getClass("tableList") + '"><tbody/></table>'),
                        a = s.find("tbody");
                    for (e = 0; e < o.length; e++)
                        if (n = o[e])
                            for (a.append(this.dayHeaderHtml(this.dayDates[e])), this.eventRenderer.sortEventSegs(n), i = 0; i < n.length; i++) a.append(n[i].el);
                    this.contentEl.empty().append(s)
                }, e.prototype.groupSegsByDay = function(t) {
                    var e, n, i = [];
                    for (e = 0; e < t.length; e++) n = t[e], (i[n.dayIndex] || (i[n.dayIndex] = [])).push(n);
                    return i
                }, e.prototype.dayHeaderHtml = function(t) {
                    var e = this.opt("listDayFormat"),
                        n = this.opt("listDayAltFormat");
                    return '<tr class="fc-list-heading" data-date="' + t.format("YYYY-MM-DD") + '"><td class="' + (this.calendar.theme.getClass("tableListHeading") || this.calendar.theme.getClass("widgetHeader")) + '" colspan="3">' + (e ? this.buildGotoAnchorHtml(t, {
                        class: "fc-list-heading-main"
                    }, o.htmlEscape(t.format(e))) : "") + (n ? this.buildGotoAnchorHtml(t, {
                        class: "fc-list-heading-alt"
                    }, o.htmlEscape(t.format(n))) : "") + "</td></tr>"
                }, e
            }(a.default);
        e.default = c, c.prototype.eventRendererClass = u.default, c.prototype.eventPointingClass = d.default
    }, , , , , , function(t, e, n) {
        var i = n(3),
            r = n(16),
            o = n(4),
            s = n(220);
        n(10), n(47), n(256), n(257), n(260), n(261), n(262), n(263), i.fullCalendar = r, i.fn.fullCalendar = function(t) {
            var e = Array.prototype.slice.call(arguments, 1),
                n = this;
            return this.each(function(r, a) {
                var l, u = i(a),
                    d = u.data("fullCalendar");
                "string" == typeof t ? "getCalendar" === t ? r || (n = d) : "destroy" === t ? d && (d.destroy(), u.removeData("fullCalendar")) : d ? i.isFunction(d[t]) ? (l = d[t].apply(d, e), r || (n = l), "destroy" === t && u.removeData("fullCalendar")) : o.warn("'" + t + "' is an unknown FullCalendar method.") : o.warn("Attempting to call a FullCalendar method on an element with no calendar.") : d || (d = new s.default(u, t), u.data("fullCalendar", d), d.render())
            }), n
        }, t.exports = r
    }, function(t, e, n) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = n(2),
            r = n(48),
            o = function(t) {
                function e() {
                    return null !== t && t.apply(this, arguments) || this
                }
                return i.__extends(e, t), e.prototype.setElement = function(t) {
                    this.el = t, this.bindGlobalHandlers(), this.renderSkeleton(), this.set("isInDom", !0)
                }, e.prototype.removeElement = function() {
                    this.unset("isInDom"), this.unrenderSkeleton(), this.unbindGlobalHandlers(), this.el.remove()
                }, e.prototype.bindGlobalHandlers = function() {}, e.prototype.unbindGlobalHandlers = function() {}, e.prototype.renderSkeleton = function() {}, e.prototype.unrenderSkeleton = function() {}, e
            }(r.default);
        e.default = o
    }, function(t, e) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = function() {
            function t(t) {
                this.items = t || []
            }
            return t.prototype.proxyCall = function(t) {
                for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
                var i = [];
                return this.items.forEach(function(n) {
                    i.push(n[t].apply(n, e))
                }), i
            }, t
        }();
        e.default = n
    }, function(t, e, n) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = n(3),
            r = n(4),
            o = function() {
                function t(t, e) {
                    this.el = null, this.viewsWithButtons = [], this.calendar = t, this.toolbarOptions = e
                }
                return t.prototype.setToolbarOptions = function(t) {
                    this.toolbarOptions = t
                }, t.prototype.render = function() {
                    var t = this.toolbarOptions.layout,
                        e = this.el;
                    t ? (e ? e.empty() : e = this.el = i("<div class='fc-toolbar " + this.toolbarOptions.extraClasses + "'/>"), e.append(this.renderSection("left")).append(this.renderSection("right")).append(this.renderSection("center")).append('<div class="fc-clear"/>')) : this.removeElement()
                }, t.prototype.removeElement = function() {
                    this.el && (this.el.remove(), this.el = null)
                }, t.prototype.renderSection = function(t) {
                    var e = this,
                        n = this.calendar,
                        o = n.theme,
                        s = n.optionsManager,
                        a = n.viewSpecManager,
                        l = i('<div class="fc-' + t + '"/>'),
                        u = this.toolbarOptions.layout[t],
                        d = s.get("customButtons") || {},
                        c = s.overrides.buttonText || {},
                        p = s.get("buttonText") || {};
                    return u && i.each(u.split(" "), function(t, s) {
                        var u, h = i(),
                            f = !0;
                        i.each(s.split(","), function(t, s) {
                            var l, u, g, v, y, m, b, w, D;
                            "title" === s ? (h = h.add(i("<h2>&nbsp;</h2>")), f = !1) : ((l = d[s]) ? (g = function(t) {
                                l.click && l.click.call(w[0], t)
                            }, (v = o.getCustomButtonIconClass(l)) || (v = o.getIconClass(s)) || (y = l.text)) : (u = a.getViewSpec(s)) ? (e.viewsWithButtons.push(s), g = function() {
                                n.changeView(s)
                            }, (y = u.buttonTextOverride) || (v = o.getIconClass(s)) || (y = u.buttonTextDefault)) : n[s] && (g = function() {
                                n[s]()
                            }, (y = c[s]) || (v = o.getIconClass(s)) || (y = p[s])), g && (b = ["fc-" + s + "-button", o.getClass("button"), o.getClass("stateDefault")], y ? (m = r.htmlEscape(y), D = "") : v && (m = "<span class='" + v + "'></span>", D = ' aria-label="' + s + '"'), w = i('<button type="button" class="' + b.join(" ") + '"' + D + ">" + m + "</button>").click(function(t) {
                                w.hasClass(o.getClass("stateDisabled")) || (g(t), (w.hasClass(o.getClass("stateActive")) || w.hasClass(o.getClass("stateDisabled"))) && w.removeClass(o.getClass("stateHover")))
                            }).mousedown(function() {
                                w.not("." + o.getClass("stateActive")).not("." + o.getClass("stateDisabled")).addClass(o.getClass("stateDown"))
                            }).mouseup(function() {
                                w.removeClass(o.getClass("stateDown"))
                            }).hover(function() {
                                w.not("." + o.getClass("stateActive")).not("." + o.getClass("stateDisabled")).addClass(o.getClass("stateHover"))
                            }, function() {
                                w.removeClass(o.getClass("stateHover")).removeClass(o.getClass("stateDown"))
                            }), h = h.add(w)))
                        }), f && h.first().addClass(o.getClass("cornerLeft")).end().last().addClass(o.getClass("cornerRight")).end(), h.length > 1 ? (u = i("<div/>"), f && u.addClass(o.getClass("buttonGroup")), u.append(h), l.append(u)) : l.append(h)
                    }), l
                }, t.prototype.updateTitle = function(t) {
                    this.el && this.el.find("h2").text(t)
                }, t.prototype.activateButton = function(t) {
                    this.el && this.el.find(".fc-" + t + "-button").addClass(this.calendar.theme.getClass("stateActive"))
                }, t.prototype.deactivateButton = function(t) {
                    this.el && this.el.find(".fc-" + t + "-button").removeClass(this.calendar.theme.getClass("stateActive"))
                }, t.prototype.disableButton = function(t) {
                    this.el && this.el.find(".fc-" + t + "-button").prop("disabled", !0).addClass(this.calendar.theme.getClass("stateDisabled"))
                }, t.prototype.enableButton = function(t) {
                    this.el && this.el.find(".fc-" + t + "-button").prop("disabled", !1).removeClass(this.calendar.theme.getClass("stateDisabled"))
                }, t.prototype.getViewsWithButtons = function() {
                    return this.viewsWithButtons
                }, t
            }();
        e.default = o
    }, function(t, e, n) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = n(2),
            r = n(3),
            o = n(4),
            s = n(32),
            a = n(31),
            l = n(48),
            u = function(t) {
                function e(e, n) {
                    var i = t.call(this) || this;
                    return i._calendar = e, i.overrides = r.extend({}, n), i.dynamicOverrides = {}, i.compute(), i
                }
                return i.__extends(e, t), e.prototype.add = function(t) {
                    var e, n = 0;
                    this.recordOverrides(t);
                    for (e in t) n++;
                    if (1 === n) {
                        if ("height" === e || "contentHeight" === e || "aspectRatio" === e) return void this._calendar.updateViewSize(!0);
                        if ("defaultDate" === e) return;
                        if ("businessHours" === e) return;
                        if (/^(event|select)(Overlap|Constraint|Allow)$/.test(e)) return;
                        if ("timezone" === e) return void this._calendar.view.flash("initialEvents")
                    }
                    this._calendar.renderHeader(), this._calendar.renderFooter(), this._calendar.viewsByType = {}, this._calendar.reinitView()
                }, e.prototype.compute = function() {
                    var t, e, n, i, r;
                    t = o.firstDefined(this.dynamicOverrides.locale, this.overrides.locale), e = a.localeOptionHash[t], e || (t = s.globalDefaults.locale, e = a.localeOptionHash[t] || {}), n = o.firstDefined(this.dynamicOverrides.isRTL, this.overrides.isRTL, e.isRTL, s.globalDefaults.isRTL), i = n ? s.rtlDefaults : {}, this.dirDefaults = i, this.localeDefaults = e, r = s.mergeOptions([s.globalDefaults, i, e, this.overrides, this.dynamicOverrides]), a.populateInstanceComputableOptions(r), this.reset(r)
                }, e.prototype.recordOverrides = function(t) {
                    var e;
                    for (e in t) this.dynamicOverrides[e] = t[e];
                    this._calendar.viewSpecManager.clearCache(), this.compute()
                }, e
            }(l.default);
        e.default = u
    }, function(t, e, n) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = n(0),
            r = n(3),
            o = n(22),
            s = n(4),
            a = n(32),
            l = n(31),
            u = function() {
                function t(t, e) {
                    this.optionsManager = t, this._calendar = e, this.clearCache()
                }
                return t.prototype.clearCache = function() {
                    this.viewSpecCache = {}
                }, t.prototype.getViewSpec = function(t) {
                    var e = this.viewSpecCache;
                    return e[t] || (e[t] = this.buildViewSpec(t))
                }, t.prototype.getUnitViewSpec = function(t) {
                    var e, n, i;
                    if (-1 !== r.inArray(t, s.unitsDesc))
                        for (e = this._calendar.header.getViewsWithButtons(), r.each(o.viewHash, function(t) {
                                e.push(t)
                            }), n = 0; n < e.length; n++)
                            if ((i = this.getViewSpec(e[n])) && i.singleUnit === t) return i
                }, t.prototype.buildViewSpec = function(t) {
                    for (var e, n, r, l, u, d = this.optionsManager.overrides.views || {}, c = [], p = [], h = [], f = t; f;) e = o.viewHash[f], n = d[f], f = null, "function" == typeof e && (e = {
                        class: e
                    }), e && (c.unshift(e), p.unshift(e.defaults || {}), r = r || e.duration, f = f || e.type), n && (h.unshift(n), r = r || n.duration, f = f || n.type);
                    return e = s.mergeProps(c), e.type = t, !!e.class && (r = r || this.optionsManager.dynamicOverrides.duration || this.optionsManager.overrides.duration, r && (l = i.duration(r), l.valueOf() && (u = s.computeDurationGreatestUnit(l, r), e.duration = l, e.durationUnit = u, 1 === l.as(u) && (e.singleUnit = u, h.unshift(d[u] || {})))), e.defaults = a.mergeOptions(p), e.overrides = a.mergeOptions(h), this.buildViewSpecOptions(e), this.buildViewSpecButtonText(e, t), e)
                }, t.prototype.buildViewSpecOptions = function(t) {
                    var e = this.optionsManager;
                    t.options = a.mergeOptions([a.globalDefaults, t.defaults, e.dirDefaults, e.localeDefaults, e.overrides, t.overrides, e.dynamicOverrides]), l.populateInstanceComputableOptions(t.options)
                }, t.prototype.buildViewSpecButtonText = function(t, e) {
                    function n(n) {
                        var i = n.buttonText || {};
                        return i[e] || (t.buttonTextKey ? i[t.buttonTextKey] : null) || (t.singleUnit ? i[t.singleUnit] : null)
                    }
                    var i = this.optionsManager;
                    t.buttonTextOverride = n(i.dynamicOverrides) || n(i.overrides) || t.overrides.buttonText, t.buttonTextDefault = n(i.localeDefaults) || n(i.dirDefaults) || t.defaults.buttonText || n(a.globalDefaults) || (t.duration ? this._calendar.humanizeDuration(t.duration) : null) || e
                }, t
            }();
        e.default = u
    }, function(t, e, n) {
        function i(t, e) {
            return t.getPrimitive() === e.getPrimitive()
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r = n(3),
            o = n(4),
            s = n(243),
            a = n(52),
            l = n(6),
            u = n(38),
            d = n(13),
            c = n(18),
            p = n(11),
            h = n(7),
            f = function() {
                function t(t) {
                    this.calendar = t, this.stickySource = new a.default(t), this.otherSources = []
                }
                return t.prototype.requestEvents = function(t, e, n, i) {
                    return !i && this.currentPeriod && this.currentPeriod.isWithinRange(t, e) && n === this.currentPeriod.timezone || this.setPeriod(new s.default(t, e, n)), this.currentPeriod.whenReleased()
                }, t.prototype.addSource = function(t) {
                    this.otherSources.push(t), this.currentPeriod && this.currentPeriod.requestSource(t)
                }, t.prototype.removeSource = function(t) {
                    o.removeExact(this.otherSources, t), this.currentPeriod && this.currentPeriod.purgeSource(t)
                }, t.prototype.removeAllSources = function() {
                    this.otherSources = [], this.currentPeriod && this.currentPeriod.purgeAllSources()
                }, t.prototype.refetchSource = function(t) {
                    var e = this.currentPeriod;
                    e && (e.freeze(), e.purgeSource(t), e.requestSource(t), e.thaw())
                }, t.prototype.refetchAllSources = function() {
                    var t = this.currentPeriod;
                    t && (t.freeze(), t.purgeAllSources(), t.requestSources(this.getSources()), t.thaw())
                }, t.prototype.getSources = function() {
                    return [this.stickySource].concat(this.otherSources)
                }, t.prototype.multiQuerySources = function(t) {
                    t ? r.isArray(t) || (t = [t]) : t = [];
                    var e, n = [];
                    for (e = 0; e < t.length; e++) n.push.apply(n, this.querySources(t[e]));
                    return n
                }, t.prototype.querySources = function(t) {
                    var e, n, o = this.otherSources;
                    for (e = 0; e < o.length; e++)
                        if ((n = o[e]) === t) return [n];
                    return (n = this.getSourceById(l.default.normalizeId(t))) ? [n] : (t = u.default.parse(t, this.calendar), t ? r.grep(o, function(e) {
                        return i(t, e)
                    }) : void 0)
                }, t.prototype.getSourceById = function(t) {
                    return r.grep(this.otherSources, function(e) {
                        return e.id && e.id === t
                    })[0]
                }, t.prototype.setPeriod = function(t) {
                    this.currentPeriod && (this.unbindPeriod(this.currentPeriod), this.currentPeriod = null), this.currentPeriod = t, this.bindPeriod(t), t.requestSources(this.getSources())
                }, t.prototype.bindPeriod = function(t) {
                    this.listenTo(t, "release", function(t) {
                        this.trigger("release", t)
                    })
                }, t.prototype.unbindPeriod = function(t) {
                    this.stopListeningTo(t)
                }, t.prototype.getEventDefByUid = function(t) {
                    if (this.currentPeriod) return this.currentPeriod.getEventDefByUid(t)
                }, t.prototype.addEventDef = function(t, e) {
                    e && this.stickySource.addEventDef(t), this.currentPeriod && this.currentPeriod.addEventDef(t)
                }, t.prototype.removeEventDefsById = function(t) {
                    this.getSources().forEach(function(e) {
                        e.removeEventDefsById(t)
                    }), this.currentPeriod && this.currentPeriod.removeEventDefsById(t)
                }, t.prototype.removeAllEventDefs = function() {
                    this.getSources().forEach(function(t) {
                        t.removeAllEventDefs()
                    }), this.currentPeriod && this.currentPeriod.removeAllEventDefs()
                }, t.prototype.mutateEventsWithId = function(t, e) {
                    var n, i = this.currentPeriod,
                        r = [];
                    return i ? (i.freeze(), n = i.getEventDefsById(t), n.forEach(function(t) {
                        i.removeEventDef(t), r.push(e.mutateSingle(t)), i.addEventDef(t)
                    }), i.thaw(), function() {
                        i.freeze();
                        for (var t = 0; t < n.length; t++) i.removeEventDef(n[t]), r[t](), i.addEventDef(n[t]);
                        i.thaw()
                    }) : function() {}
                }, t.prototype.buildMutatedEventInstanceGroup = function(t, e) {
                    var n, i, r = this.getEventDefsById(t),
                        o = [];
                    for (n = 0; n < r.length; n++)(i = r[n].clone()) instanceof d.default && (e.mutateSingle(i), o.push.apply(o, i.buildInstances()));
                    return new c.default(o)
                }, t.prototype.freeze = function() {
                    this.currentPeriod && this.currentPeriod.freeze()
                }, t.prototype.thaw = function() {
                    this.currentPeriod && this.currentPeriod.thaw()
                }, t.prototype.getEventDefsById = function(t) {
                    return this.currentPeriod.getEventDefsById(t)
                }, t.prototype.getEventInstances = function() {
                    return this.currentPeriod.getEventInstances()
                }, t.prototype.getEventInstancesWithId = function(t) {
                    return this.currentPeriod.getEventInstancesWithId(t)
                }, t.prototype.getEventInstancesWithoutId = function(t) {
                    return this.currentPeriod.getEventInstancesWithoutId(t)
                }, t
            }();
        e.default = f, p.default.mixInto(f), h.default.mixInto(f)
    }, function(t, e, n) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = n(3),
            r = n(4),
            o = n(20),
            s = n(11),
            a = n(5),
            l = n(18),
            u = function() {
                function t(t, e, n) {
                    this.pendingCnt = 0, this.freezeDepth = 0, this.stuntedReleaseCnt = 0, this.releaseCnt = 0, this.start = t, this.end = e, this.timezone = n, this.unzonedRange = new a.default(t.clone().stripZone(), e.clone().stripZone()), this.requestsByUid = {}, this.eventDefsByUid = {}, this.eventDefsById = {}, this.eventInstanceGroupsById = {}
                }
                return t.prototype.isWithinRange = function(t, e) {
                    return !t.isBefore(this.start) && !e.isAfter(this.end)
                }, t.prototype.requestSources = function(t) {
                    this.freeze();
                    for (var e = 0; e < t.length; e++) this.requestSource(t[e]);
                    this.thaw()
                }, t.prototype.requestSource = function(t) {
                    var e = this,
                        n = {
                            source: t,
                            status: "pending",
                            eventDefs: null
                        };
                    this.requestsByUid[t.uid] = n, this.pendingCnt += 1, t.fetch(this.start, this.end, this.timezone).then(function(t) {
                        "cancelled" !== n.status && (n.status = "completed", n.eventDefs = t, e.addEventDefs(t), e.pendingCnt--, e.tryRelease())
                    }, function() {
                        "cancelled" !== n.status && (n.status = "failed", e.pendingCnt--, e.tryRelease())
                    })
                }, t.prototype.purgeSource = function(t) {
                    var e = this.requestsByUid[t.uid];
                    e && (delete this.requestsByUid[t.uid], "pending" === e.status ? (e.status = "cancelled", this.pendingCnt--, this.tryRelease()) : "completed" === e.status && e.eventDefs.forEach(this.removeEventDef.bind(this)))
                }, t.prototype.purgeAllSources = function() {
                    var t, e, n = this.requestsByUid,
                        i = 0;
                    for (t in n) e = n[t], "pending" === e.status ? e.status = "cancelled" : "completed" === e.status && i++;
                    this.requestsByUid = {}, this.pendingCnt = 0, i && this.removeAllEventDefs()
                }, t.prototype.getEventDefByUid = function(t) {
                    return this.eventDefsByUid[t]
                }, t.prototype.getEventDefsById = function(t) {
                    var e = this.eventDefsById[t];
                    return e ? e.slice() : []
                }, t.prototype.addEventDefs = function(t) {
                    for (var e = 0; e < t.length; e++) this.addEventDef(t[e])
                }, t.prototype.addEventDef = function(t) {
                    var e, n = this.eventDefsById,
                        i = t.id,
                        r = n[i] || (n[i] = []),
                        o = t.buildInstances(this.unzonedRange);
                    for (r.push(t), this.eventDefsByUid[t.uid] = t, e = 0; e < o.length; e++) this.addEventInstance(o[e], i)
                }, t.prototype.removeEventDefsById = function(t) {
                    var e = this;
                    this.getEventDefsById(t).forEach(function(t) {
                        e.removeEventDef(t)
                    })
                }, t.prototype.removeAllEventDefs = function() {
                    var t = i.isEmptyObject(this.eventDefsByUid);
                    this.eventDefsByUid = {}, this.eventDefsById = {}, this.eventInstanceGroupsById = {}, t || this.tryRelease()
                }, t.prototype.removeEventDef = function(t) {
                    var e = this.eventDefsById,
                        n = e[t.id];
                    delete this.eventDefsByUid[t.uid], n && (r.removeExact(n, t), n.length || delete e[t.id], this.removeEventInstancesForDef(t))
                }, t.prototype.getEventInstances = function() {
                    var t, e = this.eventInstanceGroupsById,
                        n = [];
                    for (t in e) n.push.apply(n, e[t].eventInstances);
                    return n
                }, t.prototype.getEventInstancesWithId = function(t) {
                    var e = this.eventInstanceGroupsById[t];
                    return e ? e.eventInstances.slice() : []
                }, t.prototype.getEventInstancesWithoutId = function(t) {
                    var e, n = this.eventInstanceGroupsById,
                        i = [];
                    for (e in n) e !== t && i.push.apply(i, n[e].eventInstances);
                    return i
                }, t.prototype.addEventInstance = function(t, e) {
                    var n = this.eventInstanceGroupsById;
                    (n[e] || (n[e] = new l.default)).eventInstances.push(t), this.tryRelease()
                }, t.prototype.removeEventInstancesForDef = function(t) {
                    var e, n = this.eventInstanceGroupsById,
                        i = n[t.id];
                    i && (e = r.removeMatching(i.eventInstances, function(e) {
                        return e.def === t
                    }), i.eventInstances.length || delete n[t.id], e && this.tryRelease())
                }, t.prototype.tryRelease = function() {
                    this.pendingCnt || (this.freezeDepth ? this.stuntedReleaseCnt++ : this.release())
                }, t.prototype.release = function() {
                    this.releaseCnt++, this.trigger("release", this.eventInstanceGroupsById)
                }, t.prototype.whenReleased = function() {
                    var t = this;
                    return this.releaseCnt ? o.default.resolve(this.eventInstanceGroupsById) : o.default.construct(function(e) {
                        t.one("release", e)
                    })
                }, t.prototype.freeze = function() {
                    this.freezeDepth++ || (this.stuntedReleaseCnt = 0)
                }, t.prototype.thaw = function() {
                    --this.freezeDepth || !this.stuntedReleaseCnt || this.pendingCnt || this.release()
                }, t
            }();
        e.default = u, s.default.mixInto(u)
    }, function(t, e, n) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = n(3),
            r = n(4),
            o = n(7),
            s = function() {
                function t(t, e) {
                    this.isFollowing = !1, this.isHidden = !1, this.isAnimating = !1, this.options = e = e || {}, this.sourceEl = t, this.parentEl = e.parentEl ? i(e.parentEl) : t.parent()
                }
                return t.prototype.start = function(t) {
                    this.isFollowing || (this.isFollowing = !0, this.y0 = r.getEvY(t), this.x0 = r.getEvX(t), this.topDelta = 0, this.leftDelta = 0, this.isHidden || this.updatePosition(), r.getEvIsTouch(t) ? this.listenTo(i(document), "touchmove", this.handleMove) : this.listenTo(i(document), "mousemove", this.handleMove))
                }, t.prototype.stop = function(t, e) {
                    var n = this,
                        r = this.options.revertDuration,
                        o = function() {
                            n.isAnimating = !1, n.removeElement(), n.top0 = n.left0 = null, e && e()
                        };
                    this.isFollowing && !this.isAnimating && (this.isFollowing = !1, this.stopListeningTo(i(document)), t && r && !this.isHidden ? (this.isAnimating = !0, this.el.animate({
                        top: this.top0,
                        left: this.left0
                    }, {
                        duration: r,
                        complete: o
                    })) : o())
                }, t.prototype.getEl = function() {
                    var t = this.el;
                    return t || (t = this.el = this.sourceEl.clone().addClass(this.options.additionalClass || "").css({
                        position: "absolute",
                        visibility: "",
                        display: this.isHidden ? "none" : "",
                        margin: 0,
                        right: "auto",
                        bottom: "auto",
                        width: this.sourceEl.width(),
                        height: this.sourceEl.height(),
                        opacity: this.options.opacity || "",
                        zIndex: this.options.zIndex
                    }), t.addClass("fc-unselectable"), t.appendTo(this.parentEl)), t
                }, t.prototype.removeElement = function() {
                    this.el && (this.el.remove(), this.el = null)
                }, t.prototype.updatePosition = function() {
                    var t, e;
                    this.getEl(), null == this.top0 && (t = this.sourceEl.offset(), e = this.el.offsetParent().offset(), this.top0 = t.top - e.top, this.left0 = t.left - e.left), this.el.css({
                        top: this.top0 + this.topDelta,
                        left: this.left0 + this.leftDelta
                    })
                }, t.prototype.handleMove = function(t) {
                    this.topDelta = r.getEvY(t) - this.y0, this.leftDelta = r.getEvX(t) - this.x0, this.isHidden || this.updatePosition()
                }, t.prototype.hide = function() {
                    this.isHidden || (this.isHidden = !0, this.el && this.el.hide())
                }, t.prototype.show = function() {
                    this.isHidden && (this.isHidden = !1, this.updatePosition(), this.getEl().show())
                }, t
            }();
        e.default = s, o.default.mixInto(s)
    }, function(t, e, n) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = n(2),
            r = n(23),
            o = n(15),
            s = function(t) {
                function e(e) {
                    var n = t.call(this, e) || this;
                    return n.dragListener = n.buildDragListener(), n
                }
                return i.__extends(e, t), e.prototype.end = function() {
                    this.dragListener.endInteraction()
                }, e.prototype.bindToEl = function(t) {
                    var e = this.component,
                        n = this.dragListener;
                    e.bindDateHandlerToEl(t, "mousedown", function(t) {
                        e.shouldIgnoreMouse() || n.startInteraction(t)
                    }), e.bindDateHandlerToEl(t, "touchstart", function(t) {
                        e.shouldIgnoreTouch() || n.startInteraction(t)
                    })
                }, e.prototype.buildDragListener = function() {
                    var t, e = this,
                        n = this.component,
                        i = new r.default(n, {
                            scroll: this.opt("dragScroll"),
                            interactionStart: function() {
                                t = i.origHit
                            },
                            hitOver: function(e, n, i) {
                                n || (t = null)
                            },
                            hitOut: function() {
                                t = null
                            },
                            interactionEnd: function(i, r) {
                                var o;
                                !r && t && (o = n.getSafeHitFootprint(t)) && e.view.triggerDayClick(o, n.getHitEl(t), i)
                            }
                        });
                    return i.shouldCancelTouchScroll = !1, i.scrollAlwaysKills = !0, i
                }, e
            }(o.default);
        e.default = s
    }, function(t, e, n) {
        function i(t) {
            var e, n, i, r = [];
            for (e = 0; e < t.length; e++) {
                for (n = t[e], i = 0; i < r.length && s(n, r[i]).length; i++);
                n.level = i, (r[i] || (r[i] = [])).push(n)
            }
            return r
        }

        function r(t) {
            var e, n, i, r, o;
            for (e = 0; e < t.length; e++)
                for (n = t[e], i = 0; i < n.length; i++)
                    for (r = n[i], r.forwardSegs = [], o = e + 1; o < t.length; o++) s(r, t[o], r.forwardSegs)
        }

        function o(t) {
            var e, n, i = t.forwardSegs,
                r = 0;
            if (void 0 === t.forwardPressure) {
                for (e = 0; e < i.length; e++) n = i[e], o(n), r = Math.max(r, 1 + n.forwardPressure);
                t.forwardPressure = r
            }
        }

        function s(t, e, n) {
            void 0 === n && (n = []);
            for (var i = 0; i < e.length; i++) a(t, e[i]) && n.push(e[i]);
            return n
        }

        function a(t, e) {
            return t.bottom > e.top && t.top < e.bottom
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var l = n(2),
            u = n(4),
            d = n(42),
            c = function(t) {
                function e(e, n) {
                    var i = t.call(this, e, n) || this;
                    return i.timeGrid = e, i
                }
                return l.__extends(e, t), e.prototype.renderFgSegs = function(t) {
                    this.renderFgSegsIntoContainers(t, this.timeGrid.fgContainerEls)
                }, e.prototype.renderFgSegsIntoContainers = function(t, e) {
                    var n, i;
                    for (n = this.timeGrid.groupSegsByCol(t), i = 0; i < this.timeGrid.colCnt; i++) this.updateFgSegCoords(n[i]);
                    this.timeGrid.attachSegsByCol(n, e)
                }, e.prototype.unrenderFgSegs = function() {
                    this.fgSegs && this.fgSegs.forEach(function(t) {
                        t.el.remove()
                    })
                }, e.prototype.computeEventTimeFormat = function() {
                    return this.opt("noMeridiemTimeFormat")
                }, e.prototype.computeDisplayEventEnd = function() {
                    return !0
                }, e.prototype.fgSegHtml = function(t, e) {
                    var n, i, r, o = this.view,
                        s = o.calendar,
                        a = t.footprint.componentFootprint,
                        l = a.isAllDay,
                        d = t.footprint.eventDef,
                        c = o.isEventDefDraggable(d),
                        p = !e && t.isStart && o.isEventDefResizableFromStart(d),
                        h = !e && t.isEnd && o.isEventDefResizableFromEnd(d),
                        f = this.getSegClasses(t, c, p || h),
                        g = u.cssToStr(this.getSkinCss(d));
                    if (f.unshift("fc-time-grid-event", "fc-v-event"), o.isMultiDayRange(a.unzonedRange)) {
                        if (t.isStart || t.isEnd) {
                            var v = s.msToMoment(t.startMs),
                                y = s.msToMoment(t.endMs);
                            n = this._getTimeText(v, y, l), i = this._getTimeText(v, y, l, "LT"), r = this._getTimeText(v, y, l, null, !1)
                        }
                    } else n = this.getTimeText(t.footprint), i = this.getTimeText(t.footprint, "LT"), r = this.getTimeText(t.footprint, null, !1);
                    return '<a class="' + f.join(" ") + '"' + (d.url ? ' href="' + u.htmlEscape(d.url) + '"' : "") + (g ? ' style="' + g + '"' : "") + '><div class="fc-content">' + (n ? '<div class="fc-time" data-start="' + u.htmlEscape(r) + '" data-full="' + u.htmlEscape(i) + '"><span>' + u.htmlEscape(n) + "</span></div>" : "") + (d.title ? '<div class="fc-title">' + u.htmlEscape(d.title) + "</div>" : "") + '</div><div class="fc-bg"/>' + (h ? '<div class="fc-resizer fc-end-resizer" />' : "") + "</a>"
                }, e.prototype.updateFgSegCoords = function(t) {
                    this.timeGrid.computeSegVerticals(t), this.computeFgSegHorizontals(t), this.timeGrid.assignSegVerticals(t), this.assignFgSegHorizontals(t)
                }, e.prototype.computeFgSegHorizontals = function(t) {
                    var e, n, s;
                    if (this.sortEventSegs(t), e = i(t), r(e), n = e[0]) {
                        for (s = 0; s < n.length; s++) o(n[s]);
                        for (s = 0; s < n.length; s++) this.computeFgSegForwardBack(n[s], 0, 0)
                    }
                }, e.prototype.computeFgSegForwardBack = function(t, e, n) {
                    var i, r = t.forwardSegs;
                    if (void 0 === t.forwardCoord)
                        for (r.length ? (this.sortForwardSegs(r), this.computeFgSegForwardBack(r[0], e + 1, n), t.forwardCoord = r[0].backwardCoord) : t.forwardCoord = 1, t.backwardCoord = t.forwardCoord - (t.forwardCoord - n) / (e + 1), i = 0; i < r.length; i++) this.computeFgSegForwardBack(r[i], 0, t.forwardCoord)
                }, e.prototype.sortForwardSegs = function(t) {
                    t.sort(u.proxy(this, "compareForwardSegs"))
                }, e.prototype.compareForwardSegs = function(t, e) {
                    return e.forwardPressure - t.forwardPressure || (t.backwardCoord || 0) - (e.backwardCoord || 0) || this.compareEventSegs(t, e)
                }, e.prototype.assignFgSegHorizontals = function(t) {
                    var e, n;
                    for (e = 0; e < t.length; e++) n = t[e], n.el.css(this.generateFgSegHorizontalCss(n)), n.bottom - n.top < 30 && n.el.addClass("fc-short")
                }, e.prototype.generateFgSegHorizontalCss = function(t) {
                    var e, n, i = this.opt("slotEventOverlap"),
                        r = t.backwardCoord,
                        o = t.forwardCoord,
                        s = this.timeGrid.generateSegVerticalCss(t),
                        a = this.timeGrid.isRTL;
                    return i && (o = Math.min(1, r + 2 * (o - r))), a ? (e = 1 - o, n = r) : (e = r, n = 1 - o), s.zIndex = t.level + 1, s.left = 100 * e + "%", s.right = 100 * n + "%", i && t.forwardPressure && (s[a ? "marginLeft" : "marginRight"] = 20), s
                }, e
            }(d.default);
        e.default = c
    }, function(t, e, n) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = n(2),
            r = n(3),
            o = n(58),
            s = function(t) {
                function e() {
                    return null !== t && t.apply(this, arguments) || this
                }
                return i.__extends(e, t), e.prototype.renderSegs = function(t, e) {
                    var n, i, o, s = [];
                    for (this.eventRenderer.renderFgSegsIntoContainers(t, this.component.helperContainerEls), n = 0; n < t.length; n++) i = t[n], e && e.col === i.col && (o = e.el, i.el.css({
                        left: o.css("left"),
                        right: o.css("right"),
                        "margin-left": o.css("margin-left"),
                        "margin-right": o.css("margin-right")
                    })), s.push(i.el[0]);
                    return r(s)
                }, e
            }(o.default);
        e.default = s
    }, function(t, e, n) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = n(2),
            r = n(57),
            o = function(t) {
                function e() {
                    return null !== t && t.apply(this, arguments) || this
                }
                return i.__extends(e, t), e.prototype.attachSegEls = function(t, e) {
                    var n, i = this.component;
                    return "bgEvent" === t ? n = i.bgContainerEls : "businessHours" === t ? n = i.businessContainerEls : "highlight" === t && (n = i.highlightContainerEls), i.updateSegVerticals(e), i.attachSegsByCol(i.groupSegsByCol(e), n), e.map(function(t) {
                        return t.el[0]
                    })
                }, e
            }(r.default);
        e.default = o
    }, function(t, e, n) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = n(3),
            r = n(4),
            o = n(7),
            s = function() {
                function t(t) {
                    this.isHidden = !0, this.margin = 10, this.options = t || {}
                }
                return t.prototype.show = function() {
                    this.isHidden && (this.el || this.render(), this.el.show(), this.position(), this.isHidden = !1, this.trigger("show"))
                }, t.prototype.hide = function() {
                    this.isHidden || (this.el.hide(), this.isHidden = !0, this.trigger("hide"))
                }, t.prototype.render = function() {
                    var t = this,
                        e = this.options;
                    this.el = i('<div class="fc-popover"/>').addClass(e.className || "").css({
                        top: 0,
                        left: 0
                    }).append(e.content).appendTo(e.parentEl), this.el.on("click", ".fc-close", function() {
                        t.hide()
                    }), e.autoHide && this.listenTo(i(document), "mousedown", this.documentMousedown)
                }, t.prototype.documentMousedown = function(t) {
                    this.el && !i(t.target).closest(this.el).length && this.hide()
                }, t.prototype.removeElement = function() {
                    this.hide(), this.el && (this.el.remove(), this.el = null), this.stopListeningTo(i(document), "mousedown")
                }, t.prototype.position = function() {
                    var t, e, n, o, s, a = this.options,
                        l = this.el.offsetParent().offset(),
                        u = this.el.outerWidth(),
                        d = this.el.outerHeight(),
                        c = i(window),
                        p = r.getScrollParent(this.el);
                    o = a.top || 0, s = void 0 !== a.left ? a.left : void 0 !== a.right ? a.right - u : 0, p.is(window) || p.is(document) ? (p = c, t = 0, e = 0) : (n = p.offset(), t = n.top, e = n.left), t += c.scrollTop(), e += c.scrollLeft(), !1 !== a.viewportConstrain && (o = Math.min(o, t + p.outerHeight() - d - this.margin), o = Math.max(o, t + this.margin), s = Math.min(s, e + p.outerWidth() - u - this.margin), s = Math.max(s, e + this.margin)), this.el.css({
                        top: o - l.top,
                        left: s - l.left
                    })
                }, t.prototype.trigger = function(t) {
                    this.options[t] && this.options[t].apply(this, Array.prototype.slice.call(arguments, 1))
                }, t
            }();
        e.default = s, o.default.mixInto(s)
    }, function(t, e, n) {
        function i(t, e) {
            var n, i;
            for (n = 0; n < e.length; n++)
                if (i = e[n], i.leftCol <= t.rightCol && i.rightCol >= t.leftCol) return !0;
            return !1
        }

        function r(t, e) {
            return t.leftCol - e.leftCol
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var o = n(2),
            s = n(3),
            a = n(4),
            l = n(42),
            u = function(t) {
                function e(e, n) {
                    var i = t.call(this, e, n) || this;
                    return i.dayGrid = e, i
                }
                return o.__extends(e, t), e.prototype.renderBgRanges = function(e) {
                    e = s.grep(e, function(t) {
                        return t.eventDef.isAllDay()
                    }), t.prototype.renderBgRanges.call(this, e)
                }, e.prototype.renderFgSegs = function(t) {
                    var e = this.rowStructs = this.renderSegRows(t);
                    this.dayGrid.rowEls.each(function(t, n) {
                        s(n).find(".fc-content-skeleton > table").append(e[t].tbodyEl)
                    })
                }, e.prototype.unrenderFgSegs = function() {
                    for (var t, e = this.rowStructs || []; t = e.pop();) t.tbodyEl.remove();
                    this.rowStructs = null
                }, e.prototype.renderSegRows = function(t) {
                    var e, n, i = [];
                    for (e = this.groupSegRows(t), n = 0; n < e.length; n++) i.push(this.renderSegRow(n, e[n]));
                    return i
                }, e.prototype.renderSegRow = function(t, e) {
                    function n(t) {
                        for (; o < t;) d = (y[i - 1] || [])[o], d ? d.attr("rowspan", parseInt(d.attr("rowspan") || 1, 10) + 1) : (d = s("<td/>"), a.append(d)), v[i][o] = d, y[i][o] = d, o++
                    }
                    var i, r, o, a, l, u, d, c = this.dayGrid.colCnt,
                        p = this.buildSegLevels(e),
                        h = Math.max(1, p.length),
                        f = s("<tbody/>"),
                        g = [],
                        v = [],
                        y = [];
                    for (i = 0; i < h; i++) {
                        if (r = p[i], o = 0, a = s("<tr/>"), g.push([]), v.push([]), y.push([]), r)
                            for (l = 0; l < r.length; l++) {
                                for (u = r[l], n(u.leftCol), d = s('<td class="fc-event-container"/>').append(u.el), u.leftCol !== u.rightCol ? d.attr("colspan", u.rightCol - u.leftCol + 1) : y[i][o] = d; o <= u.rightCol;) v[i][o] = d, g[i][o] = u, o++;
                                a.append(d)
                            }
                        n(c), this.dayGrid.bookendCells(a), f.append(a)
                    }
                    return {
                        row: t,
                        tbodyEl: f,
                        cellMatrix: v,
                        segMatrix: g,
                        segLevels: p,
                        segs: e
                    }
                }, e.prototype.buildSegLevels = function(t) {
                    var e, n, o, s = [];
                    for (this.sortEventSegs(t), e = 0; e < t.length; e++) {
                        for (n = t[e], o = 0; o < s.length && i(n, s[o]); o++);
                        n.level = o, (s[o] || (s[o] = [])).push(n)
                    }
                    for (o = 0; o < s.length; o++) s[o].sort(r);
                    return s
                }, e.prototype.groupSegRows = function(t) {
                    var e, n = [];
                    for (e = 0; e < this.dayGrid.rowCnt; e++) n.push([]);
                    for (e = 0; e < t.length; e++) n[t[e].row].push(t[e]);
                    return n
                }, e.prototype.computeEventTimeFormat = function() {
                    return this.opt("extraSmallTimeFormat")
                }, e.prototype.computeDisplayEventEnd = function() {
                    return 1 === this.dayGrid.colCnt
                }, e.prototype.fgSegHtml = function(t, e) {
                    var n, i, r = this.view,
                        o = t.footprint.eventDef,
                        s = t.footprint.componentFootprint.isAllDay,
                        l = r.isEventDefDraggable(o),
                        u = !e && s && t.isStart && r.isEventDefResizableFromStart(o),
                        d = !e && s && t.isEnd && r.isEventDefResizableFromEnd(o),
                        c = this.getSegClasses(t, l, u || d),
                        p = a.cssToStr(this.getSkinCss(o)),
                        h = "";
                    return c.unshift("fc-day-grid-event", "fc-h-event"), t.isStart && (n = this.getTimeText(t.footprint)) && (h = '<span class="fc-time">' + a.htmlEscape(n) + "</span>"), i = '<span class="fc-title">' + (a.htmlEscape(o.title || "") || "&nbsp;") + "</span>", '<a class="' + c.join(" ") + '"' + (o.url ? ' href="' + a.htmlEscape(o.url) + '"' : "") + (p ? ' style="' + p + '"' : "") + '><div class="fc-content">' + (this.dayGrid.isRTL ? i + " " + h : h + " " + i) + "</div>" + (u ? '<div class="fc-resizer fc-start-resizer" />' : "") + (d ? '<div class="fc-resizer fc-end-resizer" />' : "") + "</a>"
                }, e
            }(l.default);
        e.default = u
    }, function(t, e, n) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = n(2),
            r = n(3),
            o = n(58),
            s = function(t) {
                function e() {
                    return null !== t && t.apply(this, arguments) || this
                }
                return i.__extends(e, t), e.prototype.renderSegs = function(t, e) {
                    var n, i = [];
                    return n = this.eventRenderer.renderSegRows(t), this.component.rowEls.each(function(t, o) {
                        var s, a, l = r(o),
                            u = r('<div class="fc-helper-skeleton"><table/></div>');
                        e && e.row === t ? a = e.el.position().top : (s = l.find(".fc-content-skeleton tbody"), s.length || (s = l.find(".fc-content-skeleton table")), a = s.position().top), u.css("top", a).find("table").append(n[t].tbodyEl), l.append(u), i.push(u[0])
                    }), r(i)
                }, e
            }(o.default);
        e.default = s
    }, function(t, e, n) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = n(2),
            r = n(3),
            o = n(57),
            s = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.fillSegTag = "td", e
                }
                return i.__extends(e, t), e.prototype.attachSegEls = function(t, e) {
                    var n, i, r, o = [];
                    for (n = 0; n < e.length; n++) i = e[n], r = this.renderFillRow(t, i), this.component.rowEls.eq(i.row).append(r), o.push(r[0]);
                    return o
                }, e.prototype.renderFillRow = function(t, e) {
                    var n, i, o, s = this.component.colCnt,
                        a = e.leftCol,
                        l = e.rightCol + 1;
                    return n = "businessHours" === t ? "bgevent" : t.toLowerCase(), i = r('<div class="fc-' + n + '-skeleton"><table><tr/></table></div>'), o = i.find("tr"), a > 0 && o.append('<td colspan="' + a + '"/>'), o.append(e.el.attr("colspan", l - a)), l < s && o.append('<td colspan="' + (s - l) + '"/>'), this.component.bookendCells(o), i
                }, e
            }(o.default);
        e.default = s
    }, function(t, e, n) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = n(2),
            r = n(228),
            o = n(5),
            s = function(t) {
                function e() {
                    return null !== t && t.apply(this, arguments) || this
                }
                return i.__extends(e, t), e.prototype.buildRenderRange = function(e, n, i) {
                    var r, s = t.prototype.buildRenderRange.call(this, e, n, i),
                        a = this.msToUtcMoment(s.startMs, i),
                        l = this.msToUtcMoment(s.endMs, i);
                    return this.opt("fixedWeekCount") && (r = Math.ceil(l.diff(a, "weeks", !0)), l.add(6 - r, "weeks")), new o.default(a, l)
                }, e
            }(r.default);
        e.default = s
    }, function(t, e, n) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = n(2),
            r = n(4),
            o = n(42),
            s = function(t) {
                function e() {
                    return null !== t && t.apply(this, arguments) || this
                }
                return i.__extends(e, t), e.prototype.renderFgSegs = function(t) {
                    t.length ? this.component.renderSegList(t) : this.component.renderEmptyMessage()
                }, e.prototype.fgSegHtml = function(t) {
                    var e, n = this.view,
                        i = n.calendar,
                        o = i.theme,
                        s = t.footprint,
                        a = s.eventDef,
                        l = s.componentFootprint,
                        u = a.url,
                        d = ["fc-list-item"].concat(this.getClasses(a)),
                        c = this.getBgColor(a);
                    return e = l.isAllDay ? n.getAllDayHtml() : n.isMultiDayRange(l.unzonedRange) ? t.isStart || t.isEnd ? r.htmlEscape(this._getTimeText(i.msToMoment(t.startMs), i.msToMoment(t.endMs), l.isAllDay)) : n.getAllDayHtml() : r.htmlEscape(this.getTimeText(s)), u && d.push("fc-has-url"), '<tr class="' + d.join(" ") + '">' + (this.displayEventTime ? '<td class="fc-list-item-time ' + o.getClass("widgetContent") + '">' + (e || "") + "</td>" : "") + '<td class="fc-list-item-marker ' + o.getClass("widgetContent") + '"><span class="fc-event-dot"' + (c ? ' style="background-color:' + c + '"' : "") + '></span></td><td class="fc-list-item-title ' + o.getClass("widgetContent") + '"><a' + (u ? ' href="' + r.htmlEscape(u) + '"' : "") + ">" + r.htmlEscape(a.title || "") + "</a></td></tr>"
                }, e.prototype.computeEventTimeFormat = function() {
                    return this.opt("mediumTimeFormat")
                }, e
            }(o.default);
        e.default = s
    }, function(t, e, n) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = n(2),
            r = n(3),
            o = n(59),
            s = function(t) {
                function e() {
                    return null !== t && t.apply(this, arguments) || this
                }
                return i.__extends(e, t), e.prototype.handleClick = function(e, n) {
                    var i;
                    t.prototype.handleClick.call(this, e, n), r(n.target).closest("a[href]").length || (i = e.footprint.eventDef.url) && !n.isDefaultPrevented() && (window.location.href = i)
                }, e
            }(o.default);
        e.default = s
    }, function(t, e, n) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = n(38),
            r = n(52),
            o = n(215),
            s = n(216);
        i.default.registerClass(r.default), i.default.registerClass(o.default), i.default.registerClass(s.default)
    }, function(t, e, n) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = n(51),
            r = n(213),
            o = n(214),
            s = n(258),
            a = n(259);
        i.defineThemeSystem("standard", r.default), i.defineThemeSystem("jquery-ui", o.default), i.defineThemeSystem("bootstrap3", s.default), i.defineThemeSystem("bootstrap4", a.default)
    }, function(t, e, n) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = n(2),
            r = n(19),
            o = function(t) {
                function e() {
                    return null !== t && t.apply(this, arguments) || this
                }
                return i.__extends(e, t), e
            }(r.default);
        e.default = o, o.prototype.classes = {
            widget: "fc-bootstrap3",
            tableGrid: "table-bordered",
            tableList: "table",
            tableListHeading: "active",
            buttonGroup: "btn-group",
            button: "btn btn-default",
            stateActive: "active",
            stateDisabled: "disabled",
            today: "alert alert-info",
            popover: "panel panel-default",
            popoverHeader: "panel-heading",
            popoverContent: "panel-body",
            headerRow: "panel-default",
            dayRow: "panel-default",
            listView: "panel panel-default"
        }, o.prototype.baseIconClass = "glyphicon", o.prototype.iconClasses = {
            close: "glyphicon-remove",
            prev: "glyphicon-chevron-left",
            next: "glyphicon-chevron-right",
            prevYear: "glyphicon-backward",
            nextYear: "glyphicon-forward"
        }, o.prototype.iconOverrideOption = "bootstrapGlyphicons", o.prototype.iconOverrideCustomButtonOption = "bootstrapGlyphicon", o.prototype.iconOverridePrefix = "glyphicon-"
    }, function(t, e, n) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = n(2),
            r = n(19),
            o = function(t) {
                function e() {
                    return null !== t && t.apply(this, arguments) || this
                }
                return i.__extends(e, t), e
            }(r.default);
        e.default = o, o.prototype.classes = {
            widget: "fc-bootstrap4",
            tableGrid: "table-bordered",
            tableList: "table",
            tableListHeading: "table-active",
            buttonGroup: "btn-group",
            button: "btn btn-primary",
            stateActive: "active",
            stateDisabled: "disabled",
            today: "alert alert-info",
            popover: "card card-primary",
            popoverHeader: "card-header",
            popoverContent: "card-body",
            headerRow: "table-bordered",
            dayRow: "table-bordered",
            listView: "card card-primary"
        }, o.prototype.baseIconClass = "fa", o.prototype.iconClasses = {
            close: "fa-times",
            prev: "fa-chevron-left",
            next: "fa-chevron-right",
            prevYear: "fa-angle-double-left",
            nextYear: "fa-angle-double-right"
        }, o.prototype.iconOverrideOption = "bootstrapFontAwesome", o.prototype.iconOverrideCustomButtonOption = "bootstrapFontAwesome", o.prototype.iconOverridePrefix = "fa-"
    }, function(t, e, n) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = n(22),
            r = n(62),
            o = n(229);
        i.defineView("basic", {
            class: r.default
        }), i.defineView("basicDay", {
            type: "basic",
            duration: {
                days: 1
            }
        }), i.defineView("basicWeek", {
            type: "basic",
            duration: {
                weeks: 1
            }
        }), i.defineView("month", {
            class: o.default,
            duration: {
                months: 1
            },
            defaults: {
                fixedWeekCount: !0
            }
        })
    }, function(t, e, n) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = n(22),
            r = n(226);
        i.defineView("agenda", {
            class: r.default,
            defaults: {
                allDaySlot: !0,
                slotDuration: "00:30:00",
                slotEventOverlap: !0
            }
        }), i.defineView("agendaDay", {
            type: "agenda",
            duration: {
                days: 1
            }
        }), i.defineView("agendaWeek", {
            type: "agenda",
            duration: {
                weeks: 1
            }
        })
    }, function(t, e, n) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = n(22),
            r = n(230);
        i.defineView("list", {
            class: r.default,
            buttonTextKey: "list",
            defaults: {
                buttonText: "list",
                listDayFormat: "LL",
                noEventsMessage: "No events to display"
            }
        }), i.defineView("listDay", {
            type: "list",
            duration: {
                days: 1
            },
            defaults: {
                listDayFormat: "dddd"
            }
        }), i.defineView("listWeek", {
            type: "list",
            duration: {
                weeks: 1
            },
            defaults: {
                listDayFormat: "dddd",
                listDayAltFormat: "LL"
            }
        }), i.defineView("listMonth", {
            type: "list",
            duration: {
                month: 1
            },
            defaults: {
                listDayAltFormat: "dddd"
            }
        }), i.defineView("listYear", {
            type: "list",
            duration: {
                year: 1
            },
            defaults: {
                listDayAltFormat: "dddd"
            }
        })
    }, function(t, e) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }])
});