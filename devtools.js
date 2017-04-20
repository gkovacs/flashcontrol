webpackJsonp(
  [3],
  {
    19: function(a, b, c) {
      "use strict";
      var d = c(52), e = c.n(d);
      b.a = {
        install(f, j) {
          var l = null == j.id ? "" : j.id,
            o = chrome.runtime.connect({ name: `devtools-${l}` }),
            p = new d.EventEmitter();
          o.onMessage.addListener(q => {
            q.loading
              ? p.emit("loading", q.loading)
              : q.complete
                  ? p.emit("complete", q.complete)
                  : q.log
                      ? p.emit("log", q.log)
                      : q.update && p.emit("update", q.update);
          }), f.prototype.$port = {
            message: p,
            send: function(q) {
              o.postMessage(q);
            }
          };
        }
      };
    },
    24: function(a, b, c) {
      c(61);
      var d = c(7)(c(29), c(56), null, null);
      a.exports = d.exports;
    },
    29: function(a, b) {
      "use strict";
      Object.defineProperty(b, "__esModule", { value: !0 }), b["default"] = {
        data: () => ({ messages: [], domain: "", counter: -1 }),
        methods: {
          frameDomain(d) {
            return new URL(d).hostname.replace(/^www\./, "");
          }
        },
        created() {
          this.$port.message.on("loading", d => {
            let { hostname: e } = new URL(d);
            this.domain != e && (this.domain = e, this.messages.splice(0));
          }), this.$port.message.on("log", d => {
            this.messages.push(Object.assign({}, d, { id: this.counter++ }));
          }), this.$port.message.on("update", d => {
            var { id: e, type: f, text: j } = d,
              k = this.messages.findIndex(l => l.id == e);
            this.messages.splice(
              k,
              1,
              Object.assign({}, this.messages[k], { type: f, text: j })
            );
          });
        }
      };
    },
    48: function(a, b, c) {
      b = a.exports = c(6)(), b.push([
        a.i,
        ".dev-panel,.guides,body,html{width:100%;height:100%}body,html{margin:0}.dev-panel{display:flex;flex-flow:column}.guides,.header{overflow-y:scroll}.guides::-webkit-scrollbar,.header::-webkit-scrollbar{background:transparent}.guides{z-index:-1;position:absolute}.guides .cell:first-child,.guides .cell:nth-child(2),.guides .cell:nth-child(3){border-right:1px solid rgba(0,0,0,.2)}.header{border-bottom:1px solid rgba(0,0,0,.4);font-weight:700;flex:0 0 auto}.list{overflow-y:scroll;flex:1}.cell{padding:8px;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.filter-item.whitelist .url{color:#009688}.filter-item.blocking .url{color:#e91e63}.filter-item:nth-child(odd){background-color:rgba(0,0,0,.02)}.filter-item,.guides,.header{display:flex}.filter-item .cell:first-child,.guides .cell:first-child,.header .cell:first-child{width:30%}.filter-item .cell:nth-child(2),.guides .cell:nth-child(2),.header .cell:nth-child(2){width:20%}.filter-item .cell:nth-child(3),.guides .cell:nth-child(3),.header .cell:nth-child(3){width:30%}.filter-item .cell:nth-child(4),.guides .cell:nth-child(4),.header .cell:nth-child(4){width:20%}.filter-item,.header{align-items:center}",
        ""
      ]);
    },
    52: function(a) {
      function c() {
        this._events = this._events ||
          {}, this._maxListeners = this._maxListeners || void 0;
      }
      function d(k) {
        return "function" == typeof k;
      }
      function e(k) {
        return "number" == typeof k;
      }
      function f(k) {
        return "object" == typeof k && null !== k;
      }
      function j(k) {
        return void 0 === k;
      }
      a.exports = c, c.EventEmitter = c, c.prototype._events = void 0, c.prototype._maxListeners = void 0, c.defaultMaxListeners = 10, c.prototype.setMaxListeners = function(
        k
      ) {
        if (!e(k) || 0 > k || isNaN(k))
          throw TypeError("n must be a positive number");
        return this._maxListeners = k, this;
      }, c.prototype.emit = function(k) {
        var l, o, p, q, r, s;
        if (
          (this._events || (this._events = {}), "error" === k &&
            (!this._events.error ||
              f(this._events.error) && !this._events.error.length))
        )
          if ((l = arguments[1], l instanceof Error))
            throw l;
          else {
            var t = new Error(
              'Uncaught, unspecified "error" event. (' + l + ")"
            );
            throw (t.context = l, t);
          }
        if ((o = this._events[k], j(o))) return !1;
        if (d(o))
          switch (arguments.length) {
            case 1:
              o.call(this);
              break;
            case 2:
              o.call(this, arguments[1]);
              break;
            case 3:
              o.call(this, arguments[1], arguments[2]);
              break;
            default:
              q = Array.prototype.slice.call(arguments, 1), o.apply(this, q);
          }
        else if (f(o))
          for (
            q = Array.prototype.slice.call(
              arguments,
              1
            ), s = o.slice(), p = s.length, r = 0;
            r < p;
            r++
          )
            s[r].apply(this, q);
        return !0;
      }, c.prototype.addListener = function(k, l) {
        var o;
        if (!d(l)) throw TypeError("listener must be a function");
        return this._events || (this._events = {}), this._events.newListener &&
          this.emit(
            "newListener",
            k,
            d(l.listener) ? l.listener : l
          ), this._events[k]
          ? f(this._events[k])
              ? this._events[k].push(l)
              : this._events[k] = [this._events[k], l]
          : this._events[k] = l, f(this._events[k]) &&
          !this._events[k].warned &&
          (o = j(this._maxListeners)
            ? c.defaultMaxListeners
            : this._maxListeners, o &&
            0 < o &&
            this._events[k].length > o &&
            (this._events[k].warned = !0, console.error(
              "(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.",
              this._events[k].length
            ), "function" == typeof console.trace && console.trace())), this;
      }, c.prototype.on = c.prototype.addListener, c.prototype.once = function(
        k,
        l
      ) {
        function o() {
          this.removeListener(k, o), p || (p = !0, l.apply(this, arguments));
        }
        if (!d(l)) throw TypeError("listener must be a function");
        var p = !1;
        return o.listener = l, this.on(k, o), this;
      }, c.prototype.removeListener = function(k, l) {
        var o, p, q, r;
        if (!d(l)) throw TypeError("listener must be a function");
        if (!this._events || !this._events[k]) return this;
        if (
          (o = this._events[k], q = o.length, p = -1, o === l ||
            d(o.listener) && o.listener === l)
        )
          delete this._events[k], this._events.removeListener &&
            this.emit("removeListener", k, l);
        else if (f(o)) {
          for (r = q; 0 < r--; )
            if (o[r] === l || o[r].listener && o[r].listener === l) {
              p = r;
              break;
            }
          if (0 > p) return this;
          1 === o.length
            ? (o.length = 0, delete this._events[k])
            : o.splice(p, 1), this._events.removeListener &&
            this.emit("removeListener", k, l);
        }
        return this;
      }, c.prototype.removeAllListeners = function(k) {
        var l, o;
        if (!this._events) return this;
        if (!this._events.removeListener)
          return 0 === arguments.length
            ? this._events = {}
            : this._events[k] && delete this._events[k], this;
        if (0 === arguments.length) {
          for (l in this._events)
            "removeListener" !== l && this.removeAllListeners(l);
          return this.removeAllListeners("removeListener"), this._events = {
          }, this;
        }
        if ((o = this._events[k], d(o))) this.removeListener(k, o);
        else if (o) for (; o.length; ) this.removeListener(k, o[o.length - 1]);
        return delete this._events[k], this;
      }, c.prototype.listeners = function(k) {
        var l;
        return l = this._events && this._events[k]
          ? d(this._events[k]) ? [this._events[k]] : this._events[k].slice()
          : [], l;
      }, c.prototype.listenerCount = function(k) {
        if (this._events) {
          var l = this._events[k];
          if (d(l)) return 1;
          if (l) return l.length;
        }
        return 0;
      }, c.listenerCount = function(k, l) {
        return k.listenerCount(l);
      };
    },
    56: function(a) {
      a.exports = {
        render: function() {
          var c = this, d = c.$createElement, e = c._self._c || d;
          return e("div", { staticClass: "dev-panel" }, [
            c._m(0),
            c._v(" "),
            e("div", { staticClass: "header" }, [
              e("span", { staticClass: "cell" }, [
                c._v(c._s(c.$localize("HeaderUrl")))
              ]),
              c._v(" "),
              e("span", { staticClass: "cell" }, [
                c._v(c._s(c.$localize("HeaderFrame")))
              ]),
              c._v(" "),
              e("span", { staticClass: "cell" }, [
                c._v(c._s(c.$localize("HeaderFilter")))
              ]),
              c._v(" "),
              e("span", { staticClass: "cell" })
            ]),
            c._v(" "),
            e(
              "div",
              { staticClass: "list" },
              c._l(c.messages, function(f) {
                return e("div", { class: ["filter-item", f.type] }, [
                  e(
                    "div",
                    { staticClass: "url cell", attrs: { title: f.url } },
                    [c._v(c._s(f.url))]
                  ),
                  c._v(" "),
                  e("div", { staticClass: "domain cell" }, [
                    c._v(c._s(c.frameDomain(f.url)))
                  ]),
                  c._v(" "),
                  e("div", { staticClass: "cell" }, [c._v(c._s(f.text))]),
                  c._v(" "),
                  e("div", { staticClass: "cell" }, [
                    f.type
                      ? e(
                          "button",
                          {
                            on: {
                              click: function() {
                                c.$port.send({ remove: f });
                              }
                            }
                          },
                          [
                            c._v(
                              "\n                    " +
                                c._s(c.$localize("DevtoolsRemove")) +
                                "\n                "
                            )
                          ]
                        )
                      : c._e(),
                    c._v(" "),
                    f.type
                      ? c._e()
                      : e(
                          "button",
                          {
                            on: {
                              click: function() {
                                c.$port.send({ allow: f });
                              }
                            }
                          },
                          [
                            c._v(
                              "\n                    " +
                                c._s(c.$localize("DevtoolsAllow")) +
                                "\n                "
                            )
                          ]
                        ),
                    c._v(" "),
                    f.type
                      ? c._e()
                      : e(
                          "button",
                          {
                            on: {
                              click: function() {
                                c.$port.send({ block: f });
                              }
                            }
                          },
                          [
                            c._v(
                              "\n                    " +
                                c._s(c.$localize("DevtoolsBlock")) +
                                "\n                "
                            )
                          ]
                        )
                  ])
                ]);
              })
            )
          ]);
        },
        staticRenderFns: [
          function() {
            var c = this, d = c.$createElement, e = c._self._c || d;
            return e("div", { staticClass: "guides" }, [
              e("span", { staticClass: "cell" }),
              c._v(" "),
              e("span", { staticClass: "cell" }),
              c._v(" "),
              e("span", { staticClass: "cell" }),
              c._v(" "),
              e("span", { staticClass: "cell" })
            ]);
          }
        ]
      };
    },
    61: function(a, b, c) {
      var d = c(48);
      "string" == typeof d && (d = [[a.i, d, ""]]), d.locals &&
        (a.exports = d.locals);
      c(8)("56d244e0", d, !0);
    },
    69: function(a, b, c) {
      "use strict";
      Object.defineProperty(b, "__esModule", { value: !0 });
      var d = c(4), e = c(24), f = c.n(e), j = c(19), k = c(3);
      d.a.config.devtools = !1, d.a.use(j.a, {
        id: chrome.devtools.inspectedWindow.tabId
      }), d.a.use(k.a), new d.a({ el: "#app", render: o => o(f.a) });
    }
  },
  [69]
);
