webpackJsonp(
  [0],
  [
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function(t, o, r) {
      "use strict";
      function l(Q) {
        U &&
          (Q._devtoolHook = U, U.emit(
            "vuex:init",
            Q
          ), U.on("vuex:travel-to-state", function(Z) {
            Q.replaceState(Z);
          }), Q.subscribe(function(Z, J) {
            U.emit("vuex:mutation", Z, J);
          }));
      }
      function p(Q, Z) {
        Object.keys(Q).forEach(function(J) {
          return Z(Q[J], J);
        });
      }
      function d(Q) {
        return null !== Q && "object" == typeof Q;
      }
      function u(Q) {
        return Q && "function" == typeof Q.then;
      }
      function y(Q, Z) {
        if (!Q) throw new Error("[vuex] " + Z);
      }
      function g(Q, Z) {
        if ((Q.update(Z), Z.modules))
          for (var J in Z.modules) {
            if (!Q.getChild(J))
              return void console.warn(
                "[vuex] trying to add a new module '" +
                  J +
                  "' on hot reloading, manual reload is needed"
              );
            g(Q.getChild(J), Z.modules[J]);
          }
      }
      function k(Q, Z) {
        Q._actions = Object.create(null), Q._mutations = Object.create(
          null
        ), Q._wrappedGetters = Object.create(
          null
        ), Q._modulesNamespaceMap = Object.create(null);
        var J = Q.state;
        $(Q, J, [], Q._modules.root, !0), w(Q, J, Z);
      }
      function w(Q, Z, J) {
        var ee = Q._vm;
        Q.getters = {};
        var te = Q._wrappedGetters, ae = {};
        p(te, function(se, ne) {
          ae[ne] = function() {
            return se(Q);
          }, Object.defineProperty(Q.getters, ne, {
            get: function() {
              return Q._vm[ne];
            },
            enumerable: !0
          });
        });
        var oe = N.config.silent;
        N.config.silent = !0, Q._vm = new N({
          data: { $$state: Z },
          computed: ae
        }), N.config.silent = oe, Q.strict && I(Q), ee &&
          (J && Q._withCommit(function() {
              ee._data.$$state = null;
            }), N.nextTick(function() {
            return ee.$destroy();
          }));
      }
      function $(Q, Z, J, ee, te) {
        var ae = !J.length, oe = Q._modules.getNamespace(J);
        if ((oe && (Q._modulesNamespaceMap[oe] = ee), !ae && !te)) {
          var se = R(Z, J.slice(0, -1)), ne = J[J.length - 1];
          Q._withCommit(function() {
            N.set(se, ne, ee.state);
          });
        }
        var ie = ee.context = C(Q, oe, J);
        ee.forEachMutation(function(le, pe) {
          P(Q, oe + pe, le, ie);
        }), ee.forEachAction(function(le, pe) {
          A(Q, oe + pe, le, ie);
        }), ee.forEachGetter(function(le, pe) {
          M(Q, oe + pe, le, ie);
        }), ee.forEachChild(function(le, pe) {
          $(Q, Z, J.concat(pe), le, te);
        });
      }
      function C(Q, Z, J) {
        var ee = "" === Z,
          te = {
            dispatch: (
              ee
                ? Q.dispatch
                : (function(ae, oe, se) {
                    var ne = z(ae, oe, se),
                      ie = ne.payload,
                      le = ne.options,
                      pe = ne.type;
                    return le && le.root || (pe = Z + pe, !!Q._actions[pe])
                      ? Q.dispatch(pe, ie)
                      : void console.error(
                          "[vuex] unknown local action type: " +
                            ne.type +
                            ", global type: " +
                            pe
                        );
                  })
            ),
            commit: (
              ee
                ? Q.commit
                : (function(ae, oe, se) {
                    var ne = z(ae, oe, se),
                      ie = ne.payload,
                      le = ne.options,
                      pe = ne.type;
                    return le && le.root || (pe = Z + pe, !!Q._mutations[pe])
                      ? void Q.commit(pe, ie, le)
                      : void console.error(
                          "[vuex] unknown local mutation type: " +
                            ne.type +
                            ", global type: " +
                            pe
                        );
                  })
            )
          };
        return Object.defineProperties(te, {
          getters: {
            get: (
              ee
                ? (function() {
                    return Q.getters;
                  })
                : (function() {
                    return E(Q, Z);
                  })
            )
          },
          state: {
            get: function() {
              return R(Q.state, J);
            }
          }
        }), te;
      }
      function E(Q, Z) {
        var J = {}, ee = Z.length;
        return Object.keys(Q.getters).forEach(function(te) {
          if (te.slice(0, ee) === Z) {
            var ae = te.slice(ee);
            Object.defineProperty(J, ae, {
              get: function() {
                return Q.getters[te];
              },
              enumerable: !0
            });
          }
        }), J;
      }
      function P(Q, Z, J, ee) {
        var te = Q._mutations[Z] || (Q._mutations[Z] = []);
        te.push(function(oe) {
          J(ee.state, oe);
        });
      }
      function A(Q, Z, J, ee) {
        var te = Q._actions[Z] || (Q._actions[Z] = []);
        te.push(function(oe, se) {
          var ne = J(
            {
              dispatch: ee.dispatch,
              commit: ee.commit,
              getters: ee.getters,
              state: ee.state,
              rootGetters: Q.getters,
              rootState: Q.state
            },
            oe,
            se
          );
          return u(ne) ||
            (ne = Promise.resolve(ne)), Q._devtoolHook ? ne.catch(function(ie) {
                throw (Q._devtoolHook.emit("vuex:error", ie), ie);
              }) : ne;
        });
      }
      function M(Q, Z, J, ee) {
        return Q._wrappedGetters[Z]
          ? void console.error("[vuex] duplicate getter key: " + Z)
          : void (Q._wrappedGetters[Z] = function(ae) {
              return J(ee.state, ee.getters, ae.state, ae.getters);
            });
      }
      function I(Q) {
        Q._vm.$watch(
          function() {
            return this._data.$$state;
          },
          function() {
            y(
              Q._committing,
              "Do not mutate vuex store state outside mutation handlers."
            );
          },
          { deep: !0, sync: !0 }
        );
      }
      function R(Q, Z) {
        return Z.length
          ? Z.reduce(
              function(J, ee) {
                return J[ee];
              },
              Q
            )
          : Q;
      }
      function z(Q, Z, J) {
        return d(Q) && Q.type && (J = Z, Z = Q, Q = Q.type), y(
          "string" == typeof Q,
          "Expects string as the type, but found " + typeof Q + "."
        ), { type: Q, payload: Z, options: J };
      }
      function L(Q) {
        return N
          ? void console.error(
              "[vuex] already installed. Vue.use(Vuex) should be called only once."
            )
          : void (N = Q, q(N));
      }
      function T(Q) {
        return Array.isArray(Q) ? Q.map(function(Z) {
              return { key: Z, val: Z };
            }) : Object.keys(Q).map(function(Z) {
              return { key: Z, val: Q[Z] };
            });
      }
      function O(Q) {
        return function(Z, J) {
          return "string" == typeof Z
            ? "/" !== Z.charAt(Z.length - 1) && (Z += "/")
            : (J = Z, Z = ""), Q(Z, J);
        };
      }
      function S(Q, Z, J) {
        var ee = Q._modulesNamespaceMap[J];
        return ee ||
          console.error(
            "[vuex] module namespace not found in " + Z + "(): " + J
          ), ee;
      }
      r.d(o, "b", function() {
        return K;
      }), r.d(o, "c", function() {
        return X;
      });
      /**
 * vuex v2.2.1
 * (c) 2017 Evan You
 * @license MIT
 */ var q = function(
        Q
      ) {
        function Z() {
          var ae = this.$options;
          ae.store
            ? this.$store = ae.store
            : ae.parent && ae.parent.$store && (this.$store = ae.parent.$store);
        }
        var J = +Q.version.split(".")[0];
        if (2 <= J) {
          var ee = -1 < Q.config._lifecycleHooks.indexOf("init");
          Q.mixin(ee ? { init: Z } : { beforeCreate: Z });
        } else {
          var te = Q.prototype._init;
          Q.prototype._init = function(ae) {
            void 0 === ae && (ae = {}), ae.init = ae.init
              ? [Z].concat(ae.init)
              : Z, te.call(this, ae);
          };
        }
      },
        U = "undefined" != typeof window && window.__VUE_DEVTOOLS_GLOBAL_HOOK__,
        V = function(Z, J) {
          this.runtime = J, this._children = Object.create(
            null
          ), this._rawModule = Z;
        },
        F = { state: {}, namespaced: {} };
      F.state.get = function() {
        return this._rawModule.state || {};
      }, F.namespaced.get = function() {
        return !!this._rawModule.namespaced;
      }, V.prototype.addChild = function(Z, J) {
        this._children[Z] = J;
      }, V.prototype.removeChild = function(Z) {
        delete this._children[Z];
      }, V.prototype.getChild = function(Z) {
        return this._children[Z];
      }, V.prototype.update = function(Z) {
        this._rawModule.namespaced = Z.namespaced, Z.actions &&
          (this._rawModule.actions = Z.actions), Z.mutations &&
          (this._rawModule.mutations = Z.mutations), Z.getters &&
          (this._rawModule.getters = Z.getters);
      }, V.prototype.forEachChild = function(Z) {
        p(this._children, Z);
      }, V.prototype.forEachGetter = function(Z) {
        this._rawModule.getters && p(this._rawModule.getters, Z);
      }, V.prototype.forEachAction = function(Z) {
        this._rawModule.actions && p(this._rawModule.actions, Z);
      }, V.prototype.forEachMutation = function(Z) {
        this._rawModule.mutations && p(this._rawModule.mutations, Z);
      }, Object.defineProperties(V.prototype, F);
      var H = function(Z) {
        var J = this;
        this.root = new V(Z, !1), Z.modules && p(Z.modules, function(ee, te) {
            J.register([te], ee, !1);
          });
      };
      H.prototype.get = function(Z) {
        return Z.reduce(
          function(J, ee) {
            return J.getChild(ee);
          },
          this.root
        );
      }, H.prototype.getNamespace = function(Z) {
        var J = this.root;
        return Z.reduce(
          function(ee, te) {
            return J = J.getChild(te), ee + (J.namespaced ? te + "/" : "");
          },
          ""
        );
      }, H.prototype.update = function(Z) {
        g(this.root, Z);
      }, H.prototype.register = function(Z, J, ee) {
        var te = this;
        void 0 === ee && (ee = !0);
        var ae = this.get(Z.slice(0, -1)), oe = new V(J, ee);
        ae.addChild(Z[Z.length - 1], oe), J.modules &&
          p(J.modules, function(se, ne) {
            te.register(Z.concat(ne), se, ee);
          });
      }, H.prototype.unregister = function(Z) {
        var J = this.get(Z.slice(0, -1)), ee = Z[Z.length - 1];
        J.getChild(ee).runtime && J.removeChild(ee);
      };
      var N,
        G = function(Z) {
          var J = this;
          void 0 === Z && (Z = {}), y(
            N,
            "must call Vue.use(Vuex) before creating a store instance."
          ), y(
            "undefined" != typeof Promise,
            "vuex requires a Promise polyfill in this browser."
          );
          var ee = Z.state;
          void 0 === ee && (ee = {});
          var te = Z.plugins;
          void 0 === te && (te = []);
          var ae = Z.strict;
          void 0 === ae &&
            (ae = !1), this._committing = !1, this._actions = Object.create(
            null
          ), this._mutations = Object.create(
            null
          ), this._wrappedGetters = Object.create(null), this._modules = new H(
            Z
          ), this._modulesNamespaceMap = Object.create(
            null
          ), this._subscribers = [], this._watcherVM = new N();
          var oe = this, se = this, ne = se.dispatch, ie = se.commit;
          this.dispatch = function(pe, de) {
            return ne.call(oe, pe, de);
          }, this.commit = function(pe, de, ce) {
            return ie.call(oe, pe, de, ce);
          }, this.strict = ae, $(this, ee, [], this._modules.root), w(
            this,
            ee
          ), te.concat(l).forEach(function(le) {
            return le(J);
          });
        },
        D = { state: {} };
      D.state.get = function() {
        return this._vm._data.$$state;
      }, D.state.set = function() {
        y(!1, "Use store.replaceState() to explicit replace store state.");
      }, G.prototype.commit = function(Z, J, ee) {
        var te = this,
          ae = z(Z, J, ee),
          oe = ae.type,
          se = ae.payload,
          ne = ae.options,
          ie = { type: oe, payload: se },
          le = this._mutations[oe];
        return le ? void (this._withCommit(function() {
              le.forEach(function(de) {
                de(se);
              });
            }), this._subscribers.forEach(function(pe) {
              return pe(ie, te.state);
            }), ne &&
              ne.silent &&
              console.warn(
                "[vuex] mutation type: " +
                  oe +
                  ". Silent option has been removed. Use the filter functionality in the vue-devtools"
              )) : void console.error("[vuex] unknown mutation type: " + oe);
      }, G.prototype.dispatch = function(Z, J) {
        var ee = z(Z, J), te = ee.type, ae = ee.payload, oe = this._actions[te];
        return oe
          ? 1 < oe.length
              ? Promise.all(
                  oe.map(function(se) {
                    return se(ae);
                  })
                )
              : oe[0](ae)
          : void console.error("[vuex] unknown action type: " + te);
      }, G.prototype.subscribe = function(Z) {
        var J = this._subscribers;
        return 0 > J.indexOf(Z) && J.push(Z), function() {
          var ee = J.indexOf(Z);
          -1 < ee && J.splice(ee, 1);
        };
      }, G.prototype.watch = function(Z, J, ee) {
        var te = this;
        return y(
          "function" == typeof Z,
          "store.watch only accepts a function."
        ), this._watcherVM.$watch(
          function() {
            return Z(te.state, te.getters);
          },
          J,
          ee
        );
      }, G.prototype.replaceState = function(Z) {
        var J = this;
        this._withCommit(function() {
          J._vm._data.$$state = Z;
        });
      }, G.prototype.registerModule = function(Z, J) {
        "string" == typeof Z && (Z = [Z]), y(
          Array.isArray(Z),
          "module path must be a string or an Array."
        ), this._modules.register(Z, J), $(
          this,
          this.state,
          Z,
          this._modules.get(Z)
        ), w(this, this.state);
      }, G.prototype.unregisterModule = function(Z) {
        var J = this;
        "string" == typeof Z && (Z = [Z]), y(
          Array.isArray(Z),
          "module path must be a string or an Array."
        ), this._modules.unregister(Z), this._withCommit(function() {
          var ee = R(J.state, Z.slice(0, -1));
          N.delete(ee, Z[Z.length - 1]);
        }), k(this);
      }, G.prototype.hotUpdate = function(Z) {
        this._modules.update(Z), k(this, !0);
      }, G.prototype._withCommit = function(Z) {
        var J = this._committing;
        this._committing = !0, Z(), this._committing = J;
      }, Object.defineProperties(G.prototype, D), "undefined" !=
        typeof window &&
        window.Vue &&
        L(window.Vue);
      var B = O(function(Q, Z) {
        var J = {};
        return T(Z).forEach(function(ee) {
          var te = ee.key, ae = ee.val;
          J[te] = function() {
            var se = this.$store.state, ne = this.$store.getters;
            if (Q) {
              var ie = S(this.$store, "mapState", Q);
              if (!ie) return;
              se = ie.context.state, ne = ie.context.getters;
            }
            return "function" == typeof ae ? ae.call(this, se, ne) : se[ae];
          }, J[te].vuex = !0;
        }), J;
      }), W = O(function(Q, Z) {
          var J = {};
          return T(Z).forEach(function(ee) {
            var te = ee.key, ae = ee.val;
            ae = Q + ae, J[te] = function() {
              for (var se = [], ne = arguments.length; ne--; )
                se[ne] = arguments[ne];
              return Q && !S(this.$store, "mapMutations", Q)
                ? void 0
                : this.$store.commit.apply(this.$store, [ae].concat(se));
            };
          }), J;
        }), K = O(function(Q, Z) {
          var J = {};
          return T(Z).forEach(function(ee) {
            var te = ee.key, ae = ee.val;
            ae = Q + ae, J[te] = function() {
              return Q && !S(this.$store, "mapGetters", Q)
                ? void 0
                : ae in this.$store.getters
                    ? this.$store.getters[ae]
                    : void console.error("[vuex] unknown getter: " + ae);
            }, J[te].vuex = !0;
          }), J;
        }), X = O(function(Q, Z) {
          var J = {};
          return T(Z).forEach(function(ee) {
            var te = ee.key, ae = ee.val;
            ae = Q + ae, J[te] = function() {
              for (var se = [], ne = arguments.length; ne--; )
                se[ne] = arguments[ne];
              return Q && !S(this.$store, "mapActions", Q)
                ? void 0
                : this.$store.dispatch.apply(this.$store, [ae].concat(se));
            };
          }), J;
        });
      o.a = {
        Store: G,
        install: L,
        version: "2.2.1",
        mapState: B,
        mapMutations: W,
        mapGetters: K,
        mapActions: X
      };
    },
    ,
    ,
    ,
    ,
    ,
    function(t, o, r) {
      "use strict";
      var l = r(54), p = r.n(l), d = r(53), u = r.n(d);
      o.a = [
        { path: "/settings", name: "settings", component: p.a },
        { path: "/exceptions", name: "exceptions", component: u.a },
        { path: "/", redirect: "/settings" }
      ];
    },
    function(t, o, r) {
      "use strict";
      function l(w) {
        var $ = w.filter(E => E.trim() && !E.startsWith("!")), C = new Set($);
        return Array.from(C);
      }
      var p = r(0), d = r(1);
      const k = {
        loadPrefs({ commit: w }) {
          d.a.get().then($ => w("prefsUpdated", $));
        },
        loadFilters({ commit: w }) {
          p.c.get({ filters: "" }).then($ => {
            w("filtersUpdated", l($.filters.split("\n")));
          });
        },
        setFilters({ commit: w }, $) {
          var C = l($), E = C.join("\n");
          p.c.set({ filters: E }).then(() => {
            w("filtersUpdated", C);
          });
        },
        setPrefs({ commit: w }, $) {
          d.a.set($).then(() => w("prefsUpdated", $));
        }
      };
      o.a = {
        state: { prefs: {}, filters: [] },
        getters: { prefs: w => w.prefs, filters: w => w.filters },
        mutations: {
          prefsUpdated: (w, $) => {
            w.prefs = Object.assign({}, w.prefs, $);
          },
          filtersUpdated: (w, $) => {
            w.filters = $;
          }
        },
        actions: k
      };
    },
    ,
    ,
    ,
    ,
    ,
    ,
    function(t, o, r) {
      r(63);
      var l = r(7)(r(30), r(58), null, null);
      t.exports = l.exports;
    },
    ,
    function(t, o) {
      "use strict";
      /**
  * vue-router v2.2.1
  * (c) 2017 Evan You
  * @license MIT
  */ function p(
        xt,
        kt
      ) {
        xt ||
          "undefined" == typeof console ||
          console.warn("[vue-router] " + kt);
      }
      function d(xt, kt) {
        switch (typeof kt) {
          case "undefined":
            return;
          case "object":
            return kt;
          case "function":
            return kt(xt);
          case "boolean":
            return kt ? xt.params : void 0;
          default:
            p(
              !1,
              'props in "' +
                xt.path +
                '" is a ' +
                typeof kt +
                ", expecting an object, function or boolean."
            );
        }
      }
      function u(xt, kt) {
        if ((void 0 === kt && (kt = {}), xt)) {
          var wt;
          try {
            wt = y(xt);
          } catch (Ct) {
            !1, wt = {};
          }
          for (var $t in kt)
            wt[$t] = kt[$t];
          return wt;
        }
        return kt;
      }
      function y(xt) {
        var kt = {};
        return (xt = xt.trim().replace(/^(\?|#|&)/, ""), !xt)
          ? kt
          : (xt.split("&").forEach(function(wt) {
              var $t = wt.replace(/\+/g, " ").split("="),
                Ct = We($t.shift()),
                Et = 0 < $t.length ? We($t.join("=")) : null;
              void 0 === kt[Ct]
                ? kt[Ct] = Et
                : Array.isArray(kt[Ct])
                    ? kt[Ct].push(Et)
                    : kt[Ct] = [kt[Ct], Et];
            }), kt);
      }
      function g(xt) {
        var kt = xt
          ? Object.keys(xt)
              .map(function(wt) {
                var $t = xt[wt];
                if ($t === void 0) return "";
                if (null === $t) return Be(wt);
                if (Array.isArray($t)) {
                  var Ct = [];
                  return $t.slice().forEach(function(Et) {
                    void 0 === Et ||
                      (null === Et
                        ? Ct.push(Be(wt))
                        : Ct.push(Be(wt) + "=" + Be(Et)));
                  }), Ct.join("&");
                }
                return Be(wt) + "=" + Be($t);
              })
              .filter(function(wt) {
                return 0 < wt.length;
              })
              .join("&")
          : null;
        return kt ? "?" + kt : "";
      }
      function k(xt, kt, wt) {
        var $t = {
          name: kt.name || xt && xt.name,
          meta: xt && xt.meta || {},
          path: kt.path || "/",
          hash: kt.hash || "",
          query: kt.query || {},
          params: kt.params || {},
          fullPath: $(kt),
          matched: xt ? w(xt) : []
        };
        return wt && ($t.redirectedFrom = $(wt)), Object.freeze($t);
      }
      function w(xt) {
        for (var kt = []; xt; )
          kt.unshift(xt), xt = xt.parent;
        return kt;
      }
      function $(xt) {
        var kt = xt.path, wt = xt.query;
        void 0 === wt && (wt = {});
        var $t = xt.hash;
        return void 0 === $t && ($t = ""), (kt || "/") + g(wt) + $t;
      }
      function C(xt, kt) {
        return kt === Xe
          ? xt === kt
          : !!kt &&
              (xt.path && kt.path
                ? xt.path.replace(Ke, "") === kt.path.replace(Ke, "") &&
                    xt.hash === kt.hash &&
                    E(xt.query, kt.query)
                : xt.name &&
                    kt.name &&
                    xt.name === kt.name &&
                    xt.hash === kt.hash &&
                    E(xt.query, kt.query) &&
                    E(xt.params, kt.params));
      }
      function E(xt, kt) {
        void 0 === xt && (xt = {}), void 0 === kt && (kt = {});
        var wt = Object.keys(xt), $t = Object.keys(kt);
        return !(wt.length !== $t.length) && wt.every(function(Ct) {
            return xt[Ct] + "" === kt[Ct] + "";
          });
      }
      function P(xt, kt) {
        return 0 ===
          xt.path.replace(Ke, "/").indexOf(kt.path.replace(Ke, "/")) &&
          (!kt.hash || xt.hash === kt.hash) &&
          A(xt.query, kt.query);
      }
      function A(xt, kt) {
        for (var wt in kt)
          if (!(wt in xt)) return !1;
        return !0;
      }
      function M(xt) {
        if (
          !(xt.metaKey || xt.ctrlKey || xt.shiftKey) &&
            !xt.defaultPrevented &&
            (void 0 === xt.button || 0 === xt.button)
        ) {
          if (xt.target && xt.target.getAttribute) {
            var kt = xt.target.getAttribute("target");
            if (/\b_blank\b/i.test(kt)) return;
          }
          return xt.preventDefault && xt.preventDefault(), !0;
        }
      }
      function I(xt) {
        if (xt)
          for (var kt, wt = 0; wt < xt.length; wt++) {
            if ((kt = xt[wt], "a" === kt.tag)) return kt;
            if (kt.children && (kt = I(kt.children))) return kt;
          }
      }
      function R(xt) {
        if (!R.installed) {
          R.installed = !0, Je = xt, Object.defineProperty(
            xt.prototype,
            "$router",
            {
              get: function() {
                return this.$root._router;
              }
            }
          ), Object.defineProperty(xt.prototype, "$route", {
            get: function() {
              return this.$root._route;
            }
          }), xt.mixin({
            beforeCreate: function() {
              this.$options.router &&
                (this._router = this.$options.router, this._router.init(
                  this
                ), xt.util.defineReactive(
                  this,
                  "_route",
                  this._router.history.current
                ));
            }
          }), xt.component("router-view", He), xt.component("router-link", Ze);
          var kt = xt.config.optionMergeStrategies;
          kt.beforeRouteEnter = kt.beforeRouteLeave = kt.created;
        }
      }
      function z(xt, kt, wt) {
        if ("/" === xt.charAt(0)) return xt;
        if ("?" === xt.charAt(0) || "#" === xt.charAt(0)) return kt + xt;
        var $t = kt.split("/");
        wt && $t[$t.length - 1] || $t.pop();
        for (
          var jt, Ct = xt.replace(/^\//, "").split("/"), Et = 0;
          Et < Ct.length;
          Et++
        )
          if ((jt = Ct[Et], "." === jt)) continue;
          else ".." === jt ? $t.pop() : $t.push(jt);
        return "" !== $t[0] && $t.unshift(""), $t.join("/");
      }
      function L(xt) {
        var kt = "", wt = "", $t = xt.indexOf("#");
        0 <= $t && (kt = xt.slice($t), xt = xt.slice(0, $t));
        var Ct = xt.indexOf("?");
        return 0 <= Ct && (wt = xt.slice(Ct + 1), xt = xt.slice(0, Ct)), {
          path: xt,
          query: wt,
          hash: kt
        };
      }
      function T(xt) {
        return xt.replace(/\/\//g, "/");
      }
      function O(xt, kt, wt) {
        var $t = kt || Object.create(null), Ct = wt || Object.create(null);
        return xt.forEach(function(Et) {
          S($t, Ct, Et);
        }), { pathMap: $t, nameMap: Ct };
      }
      function S(xt, kt, wt, $t, Ct) {
        var Et = wt.path, jt = wt.name;
        var Pt = {
          path: q(Et, $t),
          components: wt.components || { default: wt.component },
          instances: {},
          name: jt,
          parent: $t,
          matchAs: Ct,
          redirect: wt.redirect,
          beforeEnter: wt.beforeEnter,
          meta: wt.meta || {},
          props: (
            null == wt.props
              ? {}
              : wt.components ? wt.props : { default: wt.props }
          )
        };
        if ((wt.children && (!1, wt.children.forEach(function(Mt) {
              var It = Ct ? T(Ct + "/" + Mt.path) : void 0;
              S(xt, kt, Mt, Pt, It);
            })), void 0 !== wt.alias))
          if (Array.isArray(wt.alias))
            wt.alias.forEach(function(Mt) {
              var It = { path: Mt, children: wt.children };
              S(xt, kt, It, $t, Pt.path);
            });
          else {
            var At = { path: wt.alias, children: wt.children };
            S(xt, kt, At, $t, Pt.path);
          }
        xt[Pt.path] || (xt[Pt.path] = Pt), jt && !kt[jt] && (kt[jt] = Pt);
      }
      function q(xt, kt) {
        return xt = xt.replace(/\/$/, ""), "/" === xt[0]
          ? xt
          : null == kt ? xt : T(kt.path + "/" + xt);
      }
      function U(xt, kt) {
        for (
          var Pt,
            wt = [],
            $t = 0,
            Ct = 0,
            Et = "",
            jt = kt && kt.delimiter || "/";
          null != (Pt = lt.exec(xt));
          
        ) {
          var At = Pt[0], Mt = Pt[1], It = Pt.index;
          if ((Et += xt.slice(Ct, It), Ct = It + At.length, Mt)) {
            Et += Mt[1];
            continue;
          }
          var Rt = xt[Ct],
            zt = Pt[2],
            Lt = Pt[3],
            Tt = Pt[4],
            Ot = Pt[5],
            St = Pt[6],
            qt = Pt[7];
          Et && (wt.push(Et), Et = "");
          var Ht = Pt[2] || jt, Nt = Tt || Ot;
          wt.push({
            name: Lt || $t++,
            prefix: zt || "",
            delimiter: Ht,
            optional: "?" === St || "*" === St,
            repeat: "+" === St || "*" === St,
            partial: null != zt && null != Rt && Rt !== zt,
            asterisk: !!qt,
            pattern: Nt ? D(Nt) : qt ? ".*" : "[^" + G(Ht) + "]+?"
          });
        }
        return Ct < xt.length && (Et += xt.substr(Ct)), Et && wt.push(Et), wt;
      }
      function F(xt) {
        return encodeURI(xt).replace(/[\/?#]/g, function(kt) {
          return "%" + kt.charCodeAt(0).toString(16).toUpperCase();
        });
      }
      function H(xt) {
        return encodeURI(xt).replace(/[?#]/g, function(kt) {
          return "%" + kt.charCodeAt(0).toString(16).toUpperCase();
        });
      }
      function N(xt) {
        for (var kt = Array(xt.length), wt = 0; wt < xt.length; wt++)
          "object" == typeof xt[wt] &&
            (kt[wt] = new RegExp("^(?:" + xt[wt].pattern + ")$"));
        return function($t, Ct) {
          for (
            var It,
              Et = "",
              jt = $t || {},
              Pt = Ct || {},
              At = Pt.pretty ? F : encodeURIComponent,
              Mt = 0;
            Mt < xt.length;
            Mt++
          ) {
            if ((It = xt[Mt], "string" == typeof It)) {
              Et += It;
              continue;
            }
            var zt, Rt = jt[It.name];
            if (null == Rt)
              if (It.optional) {
                It.partial && (Et += It.prefix);
                continue;
              } else
                throw new TypeError('Expected "' + It.name + '" to be defined');
            if (at(Rt)) {
              if (!It.repeat)
                throw new TypeError(
                  'Expected "' +
                    It.name +
                    '" to not repeat, but received `' +
                    JSON.stringify(Rt) +
                    "`"
                );
              if (0 === Rt.length) if (It.optional) continue;
                else throw new TypeError(
                    'Expected "' + It.name + '" to not be empty'
                  );
              for (var Lt = 0; Lt < Rt.length; Lt++) {
                if ((zt = At(Rt[Lt]), !kt[Mt].test(zt)))
                  throw new TypeError(
                    'Expected all "' +
                      It.name +
                      '" to match "' +
                      It.pattern +
                      '", but received `' +
                      JSON.stringify(zt) +
                      "`"
                  );
                Et += (0 === Lt ? It.prefix : It.delimiter) + zt;
              }
              continue;
            }
            if ((zt = It.asterisk ? H(Rt) : At(Rt), !kt[Mt].test(zt)))
              throw new TypeError(
                'Expected "' +
                  It.name +
                  '" to match "' +
                  It.pattern +
                  '", but received "' +
                  zt +
                  '"'
              );
            Et += It.prefix + zt;
          }
          return Et;
        };
      }
      function G(xt) {
        return xt.replace(/([.+*?=^!:${}()[\]|\/\\])/g, "\\$1");
      }
      function D(xt) {
        return xt.replace(/([=!:$\/()])/g, "\\$1");
      }
      function B(xt, kt) {
        return xt.keys = kt, xt;
      }
      function W(xt) {
        return xt.sensitive ? "" : "i";
      }
      function K(xt, kt) {
        var wt = xt.source.match(/\((?!\?)/g);
        if (wt)
          for (var $t = 0; $t < wt.length; $t++)
            kt.push({
              name: $t,
              prefix: null,
              delimiter: null,
              optional: !1,
              repeat: !1,
              partial: !1,
              asterisk: !1,
              pattern: null
            });
        return B(xt, kt);
      }
      function X(xt, kt, wt) {
        for (var $t = [], Ct = 0; Ct < xt.length; Ct++)
          $t.push(Z(xt[Ct], kt, wt).source);
        var Et = new RegExp("(?:" + $t.join("|") + ")", W(wt));
        return B(Et, kt);
      }
      function Y(xt, kt, wt) {
        return Q(U(xt, wt), kt, wt);
      }
      function Q(xt, kt, wt) {
        at(kt) || (wt = kt || wt, kt = []), wt = wt || {};
        for (
          var Pt, $t = wt.strict, Ct = !1 !== wt.end, Et = "", jt = 0;
          jt < xt.length;
          jt++
        )
          if ((Pt = xt[jt], "string" == typeof Pt))
            Et += G(Pt);
          else {
            var At = G(Pt.prefix), Mt = "(?:" + Pt.pattern + ")";
            kt.push(Pt), Pt.repeat &&
              (Mt += "(?:" + At + Mt + ")*"), Mt = Pt.optional
              ? Pt.partial
                  ? At + "(" + Mt + ")?"
                  : "(?:" + At + "(" + Mt + "))?"
              : At + "(" + Mt + ")", Et += Mt;
          }
        var It = G(wt.delimiter || "/"), Rt = Et.slice(-It.length) === It;
        return $t ||
          (Et = (Rt ? Et.slice(0, -It.length) : Et) +
            "(?:" +
            It +
            "(?=$))?"), Et += Ct ? "$" : $t && Rt ? "" : "(?=" + It + "|$)", B(
          new RegExp("^" + Et, W(wt)),
          kt
        );
      }
      function Z(xt, kt, wt) {
        return at(kt) || (wt = kt || wt, kt = []), wt = wt || {}, xt instanceof
          RegExp
          ? K(xt, kt)
          : at(xt) ? X(xt, kt, wt) : Y(xt, kt, wt);
      }
      function J(xt) {
        var wt, $t, kt = pt[xt];
        return kt
          ? (wt = kt.keys, $t = kt.regexp)
          : (wt = [], $t = ot(xt, wt), pt[xt] = { keys: wt, regexp: $t }), {
          keys: wt,
          regexp: $t
        };
      }
      function ee(xt, kt) {
        try {
          var $t = dt[xt] || (dt[xt] = ot.compile(xt));
          return $t(kt || {}, { pretty: !0 });
        } catch (Ct) {
          return !1, "";
        }
      }
      function te(xt, kt, wt) {
        var $t = "string" == typeof xt ? { path: xt } : xt;
        if ($t.name || $t._normalized) return $t;
        if (!$t.path && $t.params && kt) {
          $t = ae({}, $t), $t._normalized = !0;
          var Ct = ae(ae({}, kt.params), $t.params);
          if (kt.name)
            $t.name = kt.name, $t.params = Ct;
          else if (kt.matched) {
            var Et = kt.matched[kt.matched.length - 1].path;
            $t.path = ee(Et, Ct, "path " + kt.path);
          } else;
          return $t;
        }
        var jt = L($t.path || ""),
          Pt = kt && kt.path || "/",
          At = jt.path ? z(jt.path, Pt, wt || $t.append) : kt && kt.path || "/",
          Mt = u(jt.query, $t.query),
          It = $t.hash || jt.hash;
        return It && "#" !== It.charAt(0) && (It = "#" + It), {
          _normalized: !0,
          path: At,
          query: Mt,
          hash: It
        };
      }
      function ae(xt, kt) {
        for (var wt in kt)
          xt[wt] = kt[wt];
        return xt;
      }
      function oe(xt) {
        function wt(Mt, It, Rt) {
          var zt = te(Mt, It), Lt = zt.name;
          if (Lt) {
            var Tt = At[Lt];
            var Ot = J(Tt.path)
              .keys.filter(function(Ut) {
                return !Ut.optional;
              })
              .map(function(Ut) {
                return Ut.name;
              });
            if (
              ("object" != typeof zt.params && (zt.params = {}), It &&
                "object" == typeof It.params)
            )
              for (var St in It.params)
                !(St in zt.params) &&
                  -1 < Ot.indexOf(St) &&
                  (zt.params[St] = It.params[St]);
            if (Tt)
              return zt.path = ee(
                Tt.path,
                zt.params,
                'named route "' + Lt + '"'
              ), Et(Tt, zt, Rt);
          } else if (zt.path)
            for (var qt in (zt.params = {}, Pt))
              if (se(qt, zt.params, zt.path)) return Et(Pt[qt], zt, Rt);
          return Et(null, zt);
        }
        function $t(Mt, It) {
          var Rt = Mt.redirect,
            zt = "function" == typeof Rt ? Rt(k(Mt, It)) : Rt;
          if (
            ("string" == typeof zt && (zt = { path: zt }), !zt ||
              "object" != typeof zt)
          )
            return !1, Et(null, It);
          var Lt = zt,
            Tt = Lt.name,
            Ot = Lt.path,
            St = It.query,
            qt = It.hash,
            Ut = It.params;
          if (
            (St = Lt.hasOwnProperty("query")
              ? Lt.query
              : St, qt = Lt.hasOwnProperty("hash")
              ? Lt.hash
              : qt, Ut = Lt.hasOwnProperty("params") ? Lt.params : Ut, Tt)
          ) {
            At[Tt];
            return !1, wt(
              { _normalized: !0, name: Tt, query: St, hash: qt, params: Ut },
              void 0,
              It
            );
          }
          if (Ot) {
            var Ft = ne(Ot, Mt),
              Ht = ee(Ft, Ut, 'redirect route with path "' + Ft + '"');
            return wt(
              { _normalized: !0, path: Ht, query: St, hash: qt },
              void 0,
              It
            );
          }
          return p(!1, "invalid redirect option: " + JSON.stringify(zt)), Et(
            null,
            It
          );
        }
        function Ct(Mt, It, Rt) {
          var zt = ee(Rt, It.params, 'aliased route with path "' + Rt + '"'),
            Lt = wt({ _normalized: !0, path: zt });
          if (Lt) {
            var Tt = Lt.matched, Ot = Tt[Tt.length - 1];
            return It.params = Lt.params, Et(Ot, It);
          }
          return Et(null, It);
        }
        function Et(Mt, It, Rt) {
          return Mt && Mt.redirect
            ? $t(Mt, Rt || It)
            : Mt && Mt.matchAs ? Ct(Mt, It, Mt.matchAs) : k(Mt, It, Rt);
        }
        var jt = O(xt), Pt = jt.pathMap, At = jt.nameMap;
        return {
          match: wt,
          addRoutes: function(Mt) {
            O(Mt, Pt, At);
          }
        };
      }
      function se(xt, kt, wt) {
        var $t = J(xt), Ct = $t.regexp, Et = $t.keys, jt = wt.match(Ct);
        if (!jt) return !1;
        if (!kt) return !0;
        for (var Pt = 1, At = jt.length; Pt < At; ++Pt) {
          var Mt = Et[Pt - 1],
            It = "string" == typeof jt[Pt]
              ? decodeURIComponent(jt[Pt])
              : jt[Pt];
          Mt && (kt[Mt.name] = It);
        }
        return !0;
      }
      function ne(xt, kt) {
        return z(xt, kt.parent ? kt.parent.path : "/", !0);
      }
      function ie() {
        window.addEventListener("popstate", function(xt) {
          pe(), xt.state && xt.state.key && ge(xt.state.key);
        });
      }
      function le(xt, kt, wt, $t) {
        if (xt.app) {
          var Ct = xt.options.scrollBehavior;
          Ct && (!1, xt.app.$nextTick(function() {
              var Et = de(), jt = Ct(kt, wt, $t ? Et : null);
              if (jt) {
                var Pt = "object" == typeof jt;
                if (Pt && "string" == typeof jt.selector) {
                  var At = document.querySelector(jt.selector);
                  At ? Et = ce(At) : ue(jt) && (Et = he(jt));
                } else
                  Pt && ue(jt) && (Et = he(jt));
                Et && window.scrollTo(Et.x, Et.y);
              }
            }));
        }
      }
      function pe() {
        var xt = ye();
        xt && (ct[xt] = { x: window.pageXOffset, y: window.pageYOffset });
      }
      function de() {
        var xt = ye();
        if (xt) return ct[xt];
      }
      function ce(xt) {
        var kt = document.documentElement,
          wt = kt.getBoundingClientRect(),
          $t = xt.getBoundingClientRect();
        return { x: $t.left - wt.left, y: $t.top - wt.top };
      }
      function ue(xt) {
        return me(xt.x) || me(xt.y);
      }
      function he(xt) {
        return {
          x: me(xt.x) ? xt.x : window.pageXOffset,
          y: me(xt.y) ? xt.y : window.pageYOffset
        };
      }
      function me(xt) {
        return "number" == typeof xt;
      }
      function fe() {
        return ht.now().toFixed(3);
      }
      function ye() {
        return mt;
      }
      function ge(xt) {
        mt = xt;
      }
      function _e(xt, kt) {
        pe();
        var wt = window.history;
        try {
          kt
            ? wt.replaceState({ key: mt }, "", xt)
            : (mt = fe(), wt.pushState({ key: mt }, "", xt));
        } catch ($t) {
          window.location[kt ? "replace" : "assign"](xt);
        }
      }
      function ve(xt) {
        _e(xt, !0);
      }
      function be(xt, kt, wt) {
        var $t = function(Ct) {
          Ct >= xt.length ? wt() : xt[Ct] ? kt(xt[Ct], function() {
                    $t(Ct + 1);
                  }) : $t(Ct + 1);
        };
        $t(0);
      }
      function xe(xt) {
        if (!xt)
          if (et) {
            var kt = document.querySelector("base");
            xt = kt && kt.getAttribute("href") || "/";
          } else
            xt = "/";
        return "/" !== xt.charAt(0) && (xt = "/" + xt), xt.replace(/\/$/, "");
      }
      function ke(xt, kt) {
        var wt, $t = Math.max(xt.length, kt.length);
        for (wt = 0; wt < $t && !(xt[wt] !== kt[wt]); wt++);
        return {
          updated: kt.slice(0, wt),
          activated: kt.slice(wt),
          deactivated: xt.slice(wt)
        };
      }
      function we(xt, kt, wt, $t) {
        var Ct = Re(xt, function(Et, jt, Pt, At) {
          var Mt = $e(Et, kt);
          if (Mt) return Array.isArray(Mt) ? Mt.map(function(It) {
                  return wt(It, jt, Pt, At);
                }) : wt(Mt, jt, Pt, At);
        });
        return ze($t ? Ct.reverse() : Ct);
      }
      function $e(xt, kt) {
        return "function" != typeof xt && (xt = Je.extend(xt)), xt.options[kt];
      }
      function Ce(xt) {
        return we(xt, "beforeRouteLeave", je, !0);
      }
      function Ee(xt) {
        return we(xt, "beforeRouteUpdate", je);
      }
      function je(xt, kt) {
        return function() {
          return xt.apply(kt, arguments);
        };
      }
      function Pe(xt, kt, wt) {
        return we(xt, "beforeRouteEnter", function($t, Ct, Et, jt) {
          return Ae($t, Et, jt, kt, wt);
        });
      }
      function Ae(xt, kt, wt, $t, Ct) {
        return function(jt, Pt, At) {
          return xt(jt, Pt, function(Mt) {
            At(Mt), "function" == typeof Mt && $t.push(function() {
                Me(Mt, kt.instances, wt, Ct);
              });
          });
        };
      }
      function Me(xt, kt, wt, $t) {
        kt[wt]
          ? xt(kt[wt])
          : $t() &&
              setTimeout(
                function() {
                  Me(xt, kt, wt, $t);
                },
                16
              );
      }
      function Ie(xt) {
        return Re(xt, function(kt, wt, $t, Ct) {
          if ("function" == typeof kt && !kt.options)
            return function(Et, jt, Pt) {
              var At = Le(function(Rt) {
                $t.components[Ct] = Rt, Pt();
              }), Mt = Le(function(Rt) {
                  p(
                    !1,
                    "Failed to resolve async component " + Ct + ": " + Rt
                  ), Pt(!1);
                }), It = kt(At, Mt);
              It && "function" == typeof It.then && It.then(At, Mt);
            };
        });
      }
      function Re(xt, kt) {
        return ze(
          xt.map(function(wt) {
            return Object.keys(wt.components).map(function($t) {
              return kt(wt.components[$t], wt.instances[$t], wt, $t);
            });
          })
        );
      }
      function ze(xt) {
        return Array.prototype.concat.apply([], xt);
      }
      function Le(xt) {
        var kt = !1;
        return function() {
          if (!kt) return kt = !0, xt.apply(this, arguments);
        };
      }
      function Te(xt) {
        var kt = window.location.pathname;
        return xt && 0 === kt.indexOf(xt) && (kt = kt.slice(xt.length)), (kt ||
          "/") +
          window.location.search +
          window.location.hash;
      }
      function Oe(xt) {
        var kt = Te(xt);
        if (!/^\/#/.test(kt))
          return window.location.replace(T(xt + "/#" + kt)), !0;
      }
      function Se() {
        var xt = qe();
        return !("/" !== xt.charAt(0)) || (Ve("/" + xt), !1);
      }
      function qe() {
        var xt = window.location.href, kt = xt.indexOf("#");
        return -1 === kt ? "" : xt.slice(kt + 1);
      }
      function Ue(xt) {
        window.location.hash = xt;
      }
      function Ve(xt) {
        var kt = window.location.href.indexOf("#");
        window.location.replace(
          window.location.href.slice(0, 0 <= kt ? kt : 0) + "#" + xt
        );
      }
      function Fe(xt, kt, wt) {
        var $t = "hash" === wt ? "#" + kt : kt;
        return xt ? T(xt + "/" + $t) : $t;
      }
      var He = {
        name: "router-view",
        functional: !0,
        props: { name: { type: String, default: "default" } },
        render: function(kt, wt) {
          var $t = wt.props, Ct = wt.children, Et = wt.parent, jt = wt.data;
          jt.routerView = !0;
          for (
            var Pt = $t.name,
              At = Et.$route,
              Mt = Et._routerViewCache || (Et._routerViewCache = {}),
              It = 0,
              Rt = !1;
            Et;
            
          )
            Et.$vnode && Et.$vnode.data.routerView && It++, Et._inactive &&
              (Rt = !0), Et = Et.$parent;
          if ((jt.routerViewDepth = It, Rt)) return kt(Mt[Pt], jt, Ct);
          var zt = At.matched[It];
          if (!zt) return Mt[Pt] = null, kt();
          var Lt = Mt[Pt] = zt.components[Pt], Tt = jt.hook || (jt.hook = {});
          return Tt.init = function(Ot) {
            zt.instances[Pt] = Ot.child;
          }, Tt.prepatch = function(Ot, St) {
            zt.instances[Pt] = St.child;
          }, Tt.destroy = function(Ot) {
            zt.instances[Pt] === Ot.child && (zt.instances[Pt] = void 0);
          }, jt.props = d(At, zt.props && zt.props[Pt]), kt(Lt, jt, Ct);
        }
      },
        Ne = /[!'()*]/g,
        Ge = function(xt) {
          return "%" + xt.charCodeAt(0).toString(16);
        },
        De = /%2C/g,
        Be = function(xt) {
          return encodeURIComponent(xt).replace(Ne, Ge).replace(De, ",");
        },
        We = decodeURIComponent,
        Ke = /\/?$/,
        Xe = k(null, { path: "/" }),
        Ye = [String, Object],
        Qe = [String, Array],
        Ze = {
          name: "router-link",
          props: {
            to: { type: Ye, required: !0 },
            tag: { type: String, default: "a" },
            exact: Boolean,
            append: Boolean,
            replace: Boolean,
            activeClass: String,
            event: { type: Qe, default: "click" }
          },
          render: function(kt) {
            var wt = this,
              $t = this.$router,
              Ct = this.$route,
              Et = $t.resolve(this.to, Ct, this.append),
              jt = Et.location,
              Pt = Et.route,
              At = Et.href,
              Mt = {},
              It = this.activeClass ||
                $t.options.linkActiveClass ||
                "router-link-active",
              Rt = jt.path ? k(null, jt) : Pt;
            Mt[It] = this.exact ? C(Ct, Rt) : P(Ct, Rt);
            var zt = function(Vt) {
              M(Vt) && (wt.replace ? $t.replace(jt) : $t.push(jt));
            },
              Lt = { click: M };
            Array.isArray(this.event) ? this.event.forEach(function(Vt) {
                  Lt[Vt] = zt;
                }) : Lt[this.event] = zt;
            var Tt = { class: Mt };
            if ("a" === this.tag)
              Tt.on = Lt, Tt.attrs = { href: At };
            else {
              var Ot = I(this.$slots.default);
              if (Ot) {
                Ot.isStatic = !1;
                var St = Je.util.extend, qt = Ot.data = St({}, Ot.data);
                qt.on = Lt;
                var Ut = Ot.data.attrs = St({}, Ot.data.attrs);
                Ut.href = At;
              } else
                Tt.on = Lt;
            }
            return kt(this.tag, Tt, this.$slots.default);
          }
        },
        Je,
        et = "undefined" != typeof window,
        tt = Array.isArray ||
          function(xt) {
            return "[object Array]" == Object.prototype.toString.call(xt);
          },
        at = tt,
        ot = Z,
        lt = new RegExp(
          [
            "(\\\\.)",
            "([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"
          ].join("|"),
          "g"
        );
      ot.parse = U, ot.compile = function(xt, kt) {
        return N(U(xt, kt));
      }, ot.tokensToFunction = N, ot.tokensToRegExp = Q;
      var pt = Object.create(null),
        dt = Object.create(null),
        ct = Object.create(null),
        ut = et &&
          (function() {
            var xt = window.navigator.userAgent;
            return (-1 !== xt.indexOf("Android 2.") ||
              -1 !== xt.indexOf("Android 4.0")) &&
              -1 !== xt.indexOf("Mobile Safari") &&
              -1 === xt.indexOf("Chrome") &&
              -1 === xt.indexOf("Windows Phone")
              ? !1
              : window.history && "pushState" in window.history;
          })(),
        ht = et && window.performance && window.performance.now
          ? window.performance
          : Date,
        mt = fe(),
        ft = function(kt, wt) {
          this.router = kt, this.base = xe(
            wt
          ), this.current = Xe, this.pending = null, this.ready = !1, this.readyCbs = [];
        };
      ft.prototype.listen = function(kt) {
        this.cb = kt;
      }, ft.prototype.onReady = function(kt) {
        this.ready ? kt() : this.readyCbs.push(kt);
      }, ft.prototype.transitionTo = function(kt, wt, $t) {
        var Ct = this, Et = this.router.match(kt, this.current);
        this.confirmTransition(
          Et,
          function() {
            Ct.updateRoute(Et), wt && wt(Et), Ct.ensureURL(), Ct.ready ||
              (Ct.ready = !0, Ct.readyCbs.forEach(function(jt) {
                jt(Et);
              }));
          },
          $t
        );
      }, ft.prototype.confirmTransition = function(kt, wt, $t) {
        var Ct = this,
          Et = this.current,
          jt = function() {
            $t && $t();
          };
        if (C(kt, Et) && kt.matched.length === Et.matched.length)
          return this.ensureURL(), jt();
        var Pt = ke(this.current.matched, kt.matched),
          At = Pt.updated,
          Mt = Pt.deactivated,
          It = Pt.activated,
          Rt = [].concat(
            Ce(Mt),
            this.router.beforeHooks,
            Ee(At),
            It.map(function(Lt) {
              return Lt.beforeEnter;
            }),
            Ie(It)
          );
        this.pending = kt;
        var zt = function(Lt, Tt) {
          return Ct.pending === kt ? void Lt(kt, Et, function(Ot) {
                !1 === Ot
                  ? (Ct.ensureURL(!0), jt())
                  : "string" == typeof Ot || "object" == typeof Ot
                      ? ("object" == typeof Ot && Ot.replace
                          ? Ct.replace(Ot)
                          : Ct.push(Ot), jt())
                      : Tt(Ot);
              }) : jt();
        };
        be(Rt, zt, function() {
          var Lt = [], Ot = Pe(It, Lt, function() {
              return Ct.current === kt;
            });
          be(Ot, zt, function() {
            return Ct.pending === kt
              ? void (Ct.pending = null, wt(kt), Ct.router.app &&
                  Ct.router.app.$nextTick(function() {
                    Lt.forEach(function(St) {
                      return St();
                    });
                  }))
              : jt();
          });
        });
      }, ft.prototype.updateRoute = function(kt) {
        var wt = this.current;
        this.current = kt, this.cb &&
          this.cb(kt), this.router.afterHooks.forEach(function($t) {
          $t && $t(kt, wt);
        });
      };
      var yt = (function(xt) {
        function kt(wt, $t) {
          var Ct = this;
          xt.call(this, wt, $t);
          var Et = wt.options.scrollBehavior;
          Et && ie(), window.addEventListener("popstate", function() {
            Ct.transitionTo(Te(Ct.base), function(Pt) {
              Et && le(wt, Pt, Ct.current, !0);
            });
          });
        }
        return xt && (kt.__proto__ = xt), kt.prototype = Object.create(
          xt && xt.prototype
        ), kt.prototype.constructor = kt, kt.prototype.go = function($t) {
          window.history.go($t);
        }, kt.prototype.push = function($t, Ct, Et) {
          var jt = this;
          this.transitionTo(
            $t,
            function(Pt) {
              _e(T(jt.base + Pt.fullPath)), le(
                jt.router,
                Pt,
                jt.current,
                !1
              ), Ct && Ct(Pt);
            },
            Et
          );
        }, kt.prototype.replace = function($t, Ct, Et) {
          var jt = this;
          this.transitionTo(
            $t,
            function(Pt) {
              ve(T(jt.base + Pt.fullPath)), le(
                jt.router,
                Pt,
                jt.current,
                !1
              ), Ct && Ct(Pt);
            },
            Et
          );
        }, kt.prototype.ensureURL = function($t) {
          if (Te(this.base) !== this.current.fullPath) {
            var Ct = T(this.base + this.current.fullPath);
            $t ? _e(Ct) : ve(Ct);
          }
        }, kt.prototype.getCurrentLocation = function() {
          return Te(this.base);
        }, kt;
      })(ft),
        gt = (function(xt) {
          function kt(wt, $t, Ct) {
            xt.call(this, wt, $t), Ct && Oe(this.base) || Se();
          }
          return xt && (kt.__proto__ = xt), kt.prototype = Object.create(
            xt && xt.prototype
          ), kt.prototype.constructor = kt, kt.prototype.setupListeners = function() {
            var $t = this;
            window.addEventListener("hashchange", function() {
              Se() && $t.transitionTo(qe(), function(Ct) {
                  Ve(Ct.fullPath);
                });
            });
          }, kt.prototype.push = function($t, Ct, Et) {
            this.transitionTo(
              $t,
              function(jt) {
                Ue(jt.fullPath), Ct && Ct(jt);
              },
              Et
            );
          }, kt.prototype.replace = function($t, Ct, Et) {
            this.transitionTo(
              $t,
              function(jt) {
                Ve(jt.fullPath), Ct && Ct(jt);
              },
              Et
            );
          }, kt.prototype.go = function($t) {
            window.history.go($t);
          }, kt.prototype.ensureURL = function($t) {
            var Ct = this.current.fullPath;
            qe() !== Ct && ($t ? Ue(Ct) : Ve(Ct));
          }, kt.prototype.getCurrentLocation = function() {
            return qe();
          }, kt;
        })(ft),
        _t = (function(xt) {
          function kt(wt, $t) {
            xt.call(this, wt, $t), this.stack = [], this.index = -1;
          }
          return xt && (kt.__proto__ = xt), kt.prototype = Object.create(
            xt && xt.prototype
          ), kt.prototype.constructor = kt, kt.prototype.push = function(
            $t,
            Ct,
            Et
          ) {
            var jt = this;
            this.transitionTo(
              $t,
              function(Pt) {
                jt.stack = jt
                  .stack.slice(0, jt.index + 1)
                  .concat(Pt), jt.index++, Ct && Ct(Pt);
              },
              Et
            );
          }, kt.prototype.replace = function($t, Ct, Et) {
            var jt = this;
            this.transitionTo(
              $t,
              function(Pt) {
                jt.stack = jt.stack.slice(0, jt.index).concat(Pt), Ct && Ct(Pt);
              },
              Et
            );
          }, kt.prototype.go = function($t) {
            var Ct = this, Et = this.index + $t;
            if (!(0 > Et || Et >= this.stack.length)) {
              var jt = this.stack[Et];
              this.confirmTransition(jt, function() {
                Ct.index = Et, Ct.updateRoute(jt);
              });
            }
          }, kt.prototype.getCurrentLocation = function() {
            var $t = this.stack[this.stack.length - 1];
            return $t ? $t.fullPath : "/";
          }, kt.prototype.ensureURL = function() {}, kt;
        })(ft),
        vt = function(kt) {
          void 0 === kt &&
            (kt = {
            }), this.app = null, this.apps = [], this.options = kt, this.beforeHooks = [], this.afterHooks = [], this.matcher = oe(
            kt.routes || []
          );
          var wt = kt.mode || "hash";
          this.fallback = "history" === wt && !ut, this.fallback &&
            (wt = "hash"), et || (wt = "abstract"), this.mode = wt;
          "history" === wt
            ? this.history = new yt(this, kt.base)
            : "hash" === wt
                ? this.history = new gt(this, kt.base, this.fallback)
                : !("abstract" != wt) && (this.history = new _t(this, kt.base));
        },
        bt = { currentRoute: {} };
      vt.prototype.match = function(kt, wt, $t) {
        return this.matcher.match(kt, wt, $t);
      }, bt.currentRoute.get = function() {
        return this.history && this.history.current;
      }, vt.prototype.init = function(kt) {
        var wt = this;
        if ((!1, this.apps.push(kt), !this.app)) {
          this.app = kt;
          var $t = this.history;
          if ($t instanceof yt)
            $t.transitionTo($t.getCurrentLocation());
          else if ($t instanceof gt) {
            var Ct = function() {
              $t.setupListeners();
            };
            $t.transitionTo($t.getCurrentLocation(), Ct, Ct);
          }
          $t.listen(function(Et) {
            wt.apps.forEach(function(jt) {
              jt._route = Et;
            });
          });
        }
      }, vt.prototype.beforeEach = function(kt) {
        this.beforeHooks.push(kt);
      }, vt.prototype.afterEach = function(kt) {
        this.afterHooks.push(kt);
      }, vt.prototype.onReady = function(kt) {
        this.history.onReady(kt);
      }, vt.prototype.push = function(kt, wt, $t) {
        this.history.push(kt, wt, $t);
      }, vt.prototype.replace = function(kt, wt, $t) {
        this.history.replace(kt, wt, $t);
      }, vt.prototype.go = function(kt) {
        this.history.go(kt);
      }, vt.prototype.back = function() {
        this.go(-1);
      }, vt.prototype.forward = function() {
        this.go(1);
      }, vt.prototype.getMatchedComponents = function(kt) {
        var wt = kt ? this.resolve(kt).route : this.currentRoute;
        return wt
          ? [].concat.apply(
              [],
              wt.matched.map(function($t) {
                return Object.keys($t.components).map(function(Ct) {
                  return $t.components[Ct];
                });
              })
            )
          : [];
      }, vt.prototype.resolve = function(kt, wt, $t) {
        var Ct = te(kt, wt || this.history.current, $t),
          Et = this.match(Ct, wt),
          jt = Et.redirectedFrom || Et.fullPath,
          Pt = this.history.base,
          At = Fe(Pt, jt, this.mode);
        return {
          location: Ct,
          route: Et,
          href: At,
          normalizedTo: Ct,
          resolved: Et
        };
      }, vt.prototype.addRoutes = function(kt) {
        this.matcher.addRoutes(kt), this.history.current !== Xe &&
          this.history.transitionTo(this.history.getCurrentLocation());
      }, Object.defineProperties(
        vt.prototype,
        bt
      ), vt.install = R, vt.version = "2.2.1", et &&
        window.Vue &&
        window.Vue.use(vt), o.a = vt;
    },
    function(t) {
      (function(l, p) {
        t.exports = p();
      })(this, function() {
        "use strict";
        function l(g, k) {
          return g.filter(k)[0];
        }
        function p(g, k) {
          if ((void 0 === k && (k = []), null === g || "object" != typeof g))
            return g;
          var w = l(k, function(C) {
            return C.original === g;
          });
          if (w) return w.copy;
          var $ = Array.isArray(g) ? [] : {};
          return k.push({
            original: g,
            copy: $
          }), Object.keys(g).forEach(function(C) {
            $[C] = p(g[C], k);
          }), $;
        }
        function u(g, k) {
          return Array(k + 1).join(g);
        }
        function y(g, k) {
          return u("0", k - g.toString().length) + g;
        }
        return function(g) {
          void 0 === g && (g = {});
          var k = g.collapsed;
          void 0 === k && (k = !0);
          var w = g.transformer;
          void 0 === w &&
            (w = function(C) {
              return C;
            });
          var $ = g.mutationTransformer;
          return void 0 === $ &&
            ($ = function(C) {
              return C;
            }), function(C) {
            var E = p(C.state);
            C.subscribe(function(P, A) {
              if ("undefined" != typeof console) {
                var M = p(A),
                  I = new Date(),
                  R = " @ " +
                    y(I.getHours(), 2) +
                    ":" +
                    y(I.getMinutes(), 2) +
                    ":" +
                    y(I.getSeconds(), 2) +
                    "." +
                    y(I.getMilliseconds(), 3),
                  z = $(P),
                  L = "mutation " + P.type + R,
                  T = k ? console.groupCollapsed : console.group;
                try {
                  T.call(console, L);
                } catch (O) {
                  console.log(L);
                }
                console.log(
                  "%c prev state",
                  "color: #9E9E9E; font-weight: bold",
                  w(E)
                ), console.log(
                  "%c mutation",
                  "color: #03A9F4; font-weight: bold",
                  z
                ), console.log(
                  "%c next state",
                  "color: #4CAF50; font-weight: bold",
                  w(M)
                );
                try {
                  console.groupEnd();
                } catch (O) {
                  console.log("\u2014\u2014 log end \u2014\u2014");
                }
                E = M;
              }
            });
          };
        };
      });
    },
    ,
    function(t, o) {
      "use strict";
      Object.defineProperty(o, "__esModule", { value: !0 }), o["default"] = {};
    },
    function(t, o, r) {
      "use strict";
      function l(d) {
        try {
          return new URL(d.trim());
        } catch (u) {
        }
      }
      Object.defineProperty(o, "__esModule", { value: !0 });
      var p = r(11);
      o["default"] = {
        data: () => ({ urlInput: "", filterInput: "", checkedItems: [] }),
        computed: Object.assign({}, r.i(p.b)(["filters"])),
        methods: Object.assign({}, r.i(p.c)(["setFilters"]), {
          addUrl() {
            var d = l(this.urlInput);
            if (d) {
              let u = `@@||${d.host.replace(/^www\./, "")}^$document`;
              this.setFilters([...this.filters, u]);
            }
            this.urlInput = "";
          },
          addFilter() {
            var d = this.filterInput.trim();
            d && this.setFilters([...this.filters, d]), this.filterInput = "";
          },
          deleteItems() {
            if (this.checkedItems.length) {
              let d = this.filters.filter(
                (u, y) => !this.checkedItems.includes(y)
              );
              this.setFilters(d), this.checkedItems = [];
            }
          }
        }),
        created() {
          this.$store.dispatch("loadFilters");
        }
      };
    },
    function(t, o, r) {
      "use strict";
      Object.defineProperty(o, "__esModule", { value: !0 });
      var l = r(11);
      o["default"] = {
        data: () => ({}),
        computed: Object.assign({}, r.i(l.b)(["prefs"])),
        methods: Object.assign({}, r.i(l.c)(["setPrefs"]), {
          toggle(p, d) {
            this.setPrefs({ [p]: d });
          }
        }),
        created() {
          this.$store.dispatch("loadPrefs");
        }
      };
    },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function(t, o, r) {
      o = t.exports = r(6)(), o.push([
        t.i,
        ".settings-panel{overflow:hidden}.settings-panel section{padding-left:18px}.settings-panel .option{display:flex;align-items:center;margin:14px 0}.settings-panel .option input+label,.settings-panel .option input+span,.settings-panel .option span+input,.settings-panel .option span+select{margin-left:.6em}.settings-panel .option input{margin:0}",
        ""
      ]);
    },
    ,
    function(t, o, r) {
      o = t.exports = r(6)(), o.push([
        t.i,
        ".exceptions-panel{display:flex;flex-flow:column;flex:1}.exceptions-panel section{margin-top:.6em}.exceptions-panel input+label,.exceptions-panel input+span{margin-left:.6em}.exceptions-panel .input{width:100%}.exceptions-panel .entry{display:flex}.exceptions-panel .list{height:300px;width:450px;overflow:auto;flex:1;display:flex;flex-flow:column;border:1px solid rgba(0,0,0,.2)}.exceptions-panel .list .item{flex:0 0 auto;display:flex;align-items:center}.exceptions-panel .list .item:hover{background:rgba(0,0,0,.08)}.exceptions-panel .list .item label{flex:1;line-height:2em}.exceptions-panel .list .item input{flex:0 0 auto;margin-left:.6em}.exceptions-panel .buttons{display:flex;justify-content:flex-end}",
        ""
      ]);
    },
    function(t, o, r) {
      o = t.exports = r(6)(), o.push([
        t.i,
        "body,html{overflow:hidden}*{box-sizing:border-box}.fade-enter-active,.fade-leave-active{transition-property:opacity;transition-duration:.2s}.fade-enter-active{transition-delay:.2s}.fade-enter,.fade-leave-active{opacity:0}.options-panel{display:flex;flex-flow:column;overflow:auto}",
        ""
      ]);
    },
    ,
    ,
    function(t, o, r) {
      r(62);
      var l = r(7)(r(31), r(57), null, null);
      t.exports = l.exports;
    },
    function(t, o, r) {
      r(60);
      var l = r(7)(r(32), r(55), null, null);
      t.exports = l.exports;
    },
    function(t) {
      t.exports = {
        render: function() {
          var r = this, l = r.$createElement, p = r._self._c || l;
          return p("div", { staticClass: "settings-panel" }, [
            p("h3", [r._v(r._s(r.$localize("HeaderBrowsing")))]),
            r._v(" "),
            p("section", [p("div", { staticClass: "option" }, [p("input", {
                  attrs: { type: "radio", name: "behavior", id: "choose" },
                  domProps: { checked: "replace" == r.prefs.default_behavior },
                  on: {
                    click: function() {
                      r.toggle("default_behavior", "replace");
                    }
                  }
                }), r._v(" "), p("label", { attrs: { for: "choose" } }, [r._v(r._s(r.$localize("LabelChoose")))])]), r._v(" "), p("div", { staticClass: "option" }, [p("input", {
                  attrs: { type: "radio", name: "behavior", id: "run" },
                  domProps: {
                    checked: "whitelist" == r.prefs.default_behavior
                  },
                  on: {
                    click: function() {
                      r.toggle("default_behavior", "whitelist");
                    }
                  }
                }), r._v(" "), p("label", { attrs: { for: "run" } }, [r._v(r._s(r.$localize("LabelRun")))])])]),
            r._v(" "),
            p("h3", [r._v(r._s(r.$localize("HeaderToolbar")))]),
            r._v(" "),
            p("section", [p("div", { staticClass: "option" }, [p("input", {
                  attrs: { type: "checkbox", id: "badge" },
                  domProps: { checked: r.prefs.badge_counter },
                  on: {
                    click: function() {
                      r.toggle("badge_counter", !r.prefs.badge_counter);
                    }
                  }
                }), r._v(" "), p("label", { attrs: { for: "badge" } }, [r._v(r._s(r.$localize("LabelCounter")))])]), r._v(" "), p("div", { staticClass: "option" }, [p("input", {
                  attrs: { type: "checkbox", id: "indicator" },
                  domProps: { checked: r.prefs.menu_indicator },
                  on: {
                    click: function() {
                      r.toggle("menu_indicator", !r.prefs.menu_indicator);
                    }
                  }
                }), r._v(" "), p("label", { attrs: { for: "indicator" } }, [r._v(r._s(r.$localize("LabelIcon")))])])]),
            r._v(" "),
            p("h3", [r._v(r._s(r.$localize("HeaderFlash")))]),
            r._v(" "),
            p("section", [p("div", { staticClass: "option" }, [p("input", {
                  attrs: { type: "checkbox", id: "reblock" },
                  domProps: { checked: r.prefs.player_reblock },
                  on: {
                    click: function() {
                      r.toggle("player_reblock", !r.prefs.player_reblock);
                    }
                  }
                }), r._v(" "), p("label", { attrs: { for: "reblock" } }, [r._v(r._s(r.$localize("LabelReblock")))])]), r._v(" "), p("div", { staticClass: "option" }, [
                p("span", [r._v(r._s(r.$localize("WordIcon")))]),
                r._v(" "),
                p(
                  "select",
                  {
                    domProps: { value: r.prefs.placeholder_icon },
                    on: {
                      change: function(d) {
                        r.toggle("placeholder_icon", d.target.value);
                      }
                    }
                  },
                  [
                    p("option", { attrs: { value: "pluginlogo.svg" } }, [
                      r._v(r._s(r.$localize("LogoPlugin")))
                    ]),
                    r._v(" "),
                    p("option", { attrs: { value: "flashlogo.svg" } }, [
                      r._v(r._s(r.$localize("LogoFlash")))
                    ]),
                    r._v(" "),
                    p("option", { attrs: { value: "" } }, [
                      r._v(r._s(r.$localize("LogoNone")))
                    ])
                  ]
                )
              ]), r._v(" "), p("div", { staticClass: "option" }, [p("span", [r._v(r._s(r.$localize("WordColor")))]), r._v(" "), p("input", {
                  attrs: { type: "color" },
                  domProps: { value: r.prefs.placeholder_color },
                  on: {
                    change: function(d) {
                      r.toggle("placeholder_color", d.target.value);
                    }
                  }
                })])]),
            r._v(" "),
            p("h3", [r._v(r._s(r.$localize("HeaderTools")))]),
            r._v(" "),
            p("section", [p("div", { staticClass: "option" }, [p("input", {
                  attrs: { type: "checkbox", id: "menu" },
                  domProps: { checked: r.prefs.context_menu },
                  on: {
                    click: function() {
                      r.toggle("context_menu", !r.prefs.context_menu);
                    }
                  }
                }), r._v(" "), p("label", { attrs: { for: "menu" } }, [r._v(r._s(r.$localize("LabelMenu")))])]), r._v(" "), p("div", { staticClass: "option" }, [p("input", {
                  attrs: { type: "checkbox", id: "devtools" },
                  domProps: { checked: r.prefs.devtools_panel },
                  on: {
                    click: function() {
                      r.toggle("devtools_panel", !r.prefs.devtools_panel);
                    }
                  }
                }), r._v(" "), p("label", { attrs: { for: "devtools" } }, [r._v(r._s(r.$localize("LabelDevtools")))])])])
          ]);
        },
        staticRenderFns: []
      };
    },
    ,
    function(t) {
      t.exports = {
        render: function() {
          var r = this, l = r.$createElement, p = r._self._c || l;
          return p("div", { staticClass: "exceptions-panel" }, [
            p("section", { staticClass: "entry" }, [p("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: r.urlInput,
                    expression: "urlInput"
                  }
                ],
                staticClass: "input",
                attrs: { placeholder: "http://example.com/page" },
                domProps: { value: r.urlInput },
                on: {
                  keyup: function(d) {
                    return !("button" in d) && r._k(d.keyCode, "enter", 13)
                      ? null
                      : void r.addUrl(d);
                  },
                  input: function(d) {
                    d.target.composing || (r.urlInput = d.target.value);
                  }
                }
              })]),
            r._v(" "),
            p("section", { staticClass: "entry" }, [p("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: r.filterInput,
                    expression: "filterInput"
                  }
                ],
                staticClass: "input",
                attrs: { placeholder: "@@||example.com^$document" },
                domProps: { value: r.filterInput },
                on: {
                  keyup: function(d) {
                    return !("button" in d) && r._k(d.keyCode, "enter", 13)
                      ? null
                      : void r.addFilter(d);
                  },
                  input: function(d) {
                    d.target.composing || (r.filterInput = d.target.value);
                  }
                }
              })]),
            r._v(" "),
            p(
              "section",
              { staticClass: "entry list" },
              r._l(r.filters, function(d, u) {
                return p("div", { key: u, staticClass: "item" }, [p("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: r.checkedItems,
                        expression: "checkedItems"
                      }
                    ],
                    attrs: { id: "item" + u, type: "checkbox" },
                    domProps: {
                      value: u,
                      checked: (
                        Array.isArray(r.checkedItems)
                          ? -1 < r._i(r.checkedItems, u)
                          : r.checkedItems
                      )
                    },
                    on: {
                      __c: function(y) {
                        var g = r.checkedItems, k = y.target, w = !!k.checked;
                        if (Array.isArray(g)) {
                          var $ = u, C = r._i(g, $);
                          w
                            ? 0 > C && (r.checkedItems = g.concat($))
                            : -1 < C &&
                                (r.checkedItems = g
                                  .slice(0, C)
                                  .concat(g.slice(C + 1)));
                        } else
                          r.checkedItems = w;
                      }
                    }
                  }), r._v(" "), p("label", { attrs: { for: "item" + u } }, [r._v(r._s(d))])]);
              })
            ),
            r._v(" "),
            p("section", { staticClass: "buttons" }, [
              p("button", { on: { click: r.deleteItems } }, [
                r._v(r._s(r.$localize("ButtonDelete")))
              ])
            ])
          ]);
        },
        staticRenderFns: []
      };
    },
    function(t) {
      t.exports = {
        render: function() {
          var r = this, l = r.$createElement, p = r._self._c || l;
          return p(
            "div",
            { staticClass: "options-panel" },
            [
              p(
                "div",
                { staticClass: "toolbar" },
                [
                  p("router-link", { attrs: { exact: "", to: "/settings" } }, [
                    p("span", [r._v(r._s(r.$localize("TabSettings")))])
                  ]),
                  r._v(" "),
                  p(
                    "router-link",
                    { attrs: { exact: "", to: "/exceptions" } },
                    [p("span", [r._v(r._s(r.$localize("TabExceptions")))])]
                  )
                ],
                1
              ),
              r._v(" "),
              p(
                "transition",
                { attrs: { name: "fade" } },
                [p("router-view")],
                1
              )
            ],
            1
          );
        },
        staticRenderFns: []
      };
    },
    ,
    function(t, o, r) {
      var l = r(47);
      "string" == typeof l && (l = [[t.i, l, ""]]), l.locals &&
        (t.exports = l.locals);
      r(8)("698199a2", l, !0);
    },
    ,
    function(t, o, r) {
      var l = r(49);
      "string" == typeof l && (l = [[t.i, l, ""]]), l.locals &&
        (t.exports = l.locals);
      r(8)("65458100", l, !0);
    },
    function(t, o, r) {
      var l = r(50);
      "string" == typeof l && (l = [[t.i, l, ""]]), l.locals &&
        (t.exports = l.locals);
      r(8)("34971eb7", l, !0);
    },
    ,
    ,
    ,
    ,
    ,
    ,
    function(t, o, r) {
      "use strict";
      Object.defineProperty(o, "__esModule", { value: !0 });
      var l = r(4),
        p = r(11),
        d = r(27),
        u = r(28),
        y = r.n(u),
        g = r(25),
        k = r.n(g),
        w = r(3),
        $ = r(18),
        C = r(17);
      const E = !1;
      l.a.config.devtools = E, l.a.use(p.a), l.a.use(d.a), l.a.use(w.a);
      const P = new p.a.Store({
        modules: { settings: $.a },
        plugins: [],
        strict: !1
      }),
        A = new d.a({ routes: C.a });
      var M = l.a.component("app", k.a);
      M = new M({ el: "#app", store: P, router: A });
    }
  ],
  [70]
);
