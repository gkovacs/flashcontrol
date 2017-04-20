(function(a) {
  function b(f) {
    if (d[f]) return d[f].exports;
    var g = d[f] = { i: f, l: !1, exports: {} };
    return a[f].call(g.exports, g, g.exports, b), g.l = !0, g.exports;
  }
  var c = window.webpackJsonp;
  window.webpackJsonp = function(g, h, j) {
    for (var k, l, o, m = 0, n = []; m < g.length; m++)
      l = g[m], e[l] && n.push(e[l][0]), e[l] = 0;
    for (k in h)
      Object.prototype.hasOwnProperty.call(h, k) && (a[k] = h[k]);
    for (c && c(g, h, j); n.length; )
      n.shift()();
    if (j) for (m = 0; m < j.length; m++) o = b(b.s = j[m]);
    return o;
  };
  var d = {}, e = { 7: 0 };
  b.e = function(g) {
    function h() {
      k.onerror = k.onload = null, clearTimeout(l);
      var n = e[g];
      0 !== n &&
        (n && n[1](new Error("Loading chunk " + g + " failed.")), e[
          g
        ] = void 0);
    }
    if (0 === e[g]) return Promise.resolve();
    if (e[g]) return e[g][2];
    var j = document.getElementsByTagName("head")[0],
      k = document.createElement("script");
    k.type = "text/javascript", k.charset = "utf-8", k.async = !0, k.timeout = 1.2e5, b.nc &&
      k.setAttribute("nonce", b.nc), k.src = b.p + "" + g + ".js";
    var l = setTimeout(h, 1.2e5);
    k.onerror = k.onload = h;
    var m = new Promise(function(n, o) {
      e[g] = [n, o];
    });
    return e[g][2] = m, j.appendChild(k), m;
  }, b.m = a, b.c = d, b.i = function(f) {
    return f;
  }, b.d = function(f, g, h) {
    b.o(f, g) ||
      Object.defineProperty(f, g, { configurable: !1, enumerable: !0, get: h });
  }, b.n = function(f) {
    var g = f && f.__esModule
      ? (function() {
          return f["default"];
        })
      : (function() {
          return f;
        });
    return b.d(g, "a", g), g;
  }, b.o = function(f, g) {
    return Object.prototype.hasOwnProperty.call(f, g);
  }, b.p = "", b.oe = function(f) {
    throw (console.error(f), f);
  };
})({
  0: function(a, b, c) {
    "use strict";
    var d = c(34);
    c.d(b, "g", function() {
      return d.a;
    });
    var e = c(35);
    c.d(b, "d", function() {
      return e.a;
    });
    var f = c(36);
    c.d(b, "f", function() {
      return f.a;
    });
    var g = c(38);
    c.d(b, "e", function() {
      return g.a;
    });
    var h = c(39);
    c.d(b, "c", function() {
      return h.a;
    });
    var j = c(40);
    c.d(b, "a", function() {
      return j.a;
    });
    var k = c(37);
    c.d(b, "b", function() {
      return k.a;
    });
  },
  1: function(a, b, c) {
    "use strict";
    var g = c(0), h = {};
    h.badge_counter = !0, h.context_menu = !0, h.devtools_panel = !0, h.default_behavior = "replace", h.menu_indicator = !0, h.player_reblock = !0, h.placeholder_color = "#464646", h.placeholder_icon = "pluginlogo.svg", b.a = {
      get: function() {
        return g
          .c.get("prefs", "sync")
          .then(j => Object.assign({}, h, j.prefs));
      },
      set: function(j) {
        return g
          .c.get("prefs", "sync")
          .then(k => g.c.set({ prefs: Object.assign({}, k.prefs, j) }, "sync"));
      },
      remove: function() {
        return g.c.remove("prefs", "sync");
      },
      defaults: h
    };
  },
  2: function(a, b) {
    "use strict";
    b.a = function(d, e, ...f) {
      return new Promise(function(g, h) {
        f.push(function(...j) {
          var { runtime: { lastError: k } } = chrome;
          k ? h(k) : g(1 >= j.length ? j[0] : j);
        }), d[e](...f);
      });
    };
  },
  34: function(a, b, c) {
    "use strict";
    var h = c(2);
    b.a = {
      getText: function(j) {
        return c.i(h.a)(chrome.browserAction, "getBadgeText", j);
      },
      setText: function(j) {
        chrome.browserAction.setBadgeText(j);
      },
      setColor: function(j) {
        chrome.browserAction.setBadgeBackgroundColor(j);
      },
      setIcon: function(j) {
        return c.i(h.a)(chrome.browserAction, "setIcon", j);
      }
    };
  },
  35: function(a, b) {
    "use strict";
    b.a = function(d, ...e) {
      return chrome.i18n.getMessage(d, [...e]);
    };
  },
  36: function(a, b, c) {
    "use strict";
    var f = c(2);
    b.a = {
      create: function(g) {
        return c.i(f.a)(chrome.contextMenus, "create", g);
      },
      remove: function() {
        return c.i(f.a)(chrome.contextMenus, "removeAll");
      }
    };
  },
  37: function(a, b, c) {
    "use strict";
    var d = c(2);
    b.a = function() {
      return c.i(d.a)(chrome.runtime, "openOptionsPage");
    };
  },
  38: function(a, b, c) {
    "use strict";
    var g = c(2);
    b.a = {
      sendMessage: function(h) {
        return c.i(g.a)(chrome.runtime, "sendMessage", h);
      },
      getManifest: function() {
        return chrome.runtime.getManifest();
      },
      getURL: function(h = "") {
        return chrome.runtime.getURL(h);
      }
    };
  },
  39: function(a, b, c) {
    "use strict";
    var h = c(2);
    b.a = {
      get: function(j, k = "local") {
        return c.i(h.a)(chrome.storage[k], "get", j);
      },
      set: function(j, k = "local") {
        return c.i(h.a)(chrome.storage[k], "set", j);
      },
      remove: function(j, k = "local") {
        return c.i(h.a)(chrome.storage[k], "remove", j);
      },
      clear: function(j = "local") {
        return c.i(h.a)(chrome.storage[j], "clear");
      }
    };
  },
  40: function(a, b, c) {
    "use strict";
    var m = c(2);
    b.a = {
      exec: function(...n) {
        return c.i(m.a)(chrome.tabs, "executeScript", ...n);
      },
      style: function(...n) {
        return c.i(m.a)(chrome.tabs, "insertCSS", ...n);
      },
      send: function(...n) {
        return c.i(m.a)(chrome.tabs, "sendMessage", ...n);
      },
      get: function(...n) {
        return c.i(m.a)(chrome.tabs, "get", ...n);
      },
      query: function(...n) {
        return c.i(m.a)(chrome.tabs, "query", ...n);
      },
      create: function(...n) {
        return c.i(m.a)(chrome.tabs, "create", ...n);
      },
      remove: function(...n) {
        return c.i(m.a)(chrome.tabs, "remove", ...n);
      },
      update: function(...n) {
        return c.i(m.a)(chrome.tabs, "update", ...n);
      }
    };
  }
});
