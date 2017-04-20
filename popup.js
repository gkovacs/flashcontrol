webpackJsonp(
  [1],
  {
    10: function(c, d, e) {
      "use strict";
      function f() {
        return g.c.get({ sessions: [] }).then(i => i.sessions);
      }
      var g = e(0);
      d.a = function(i) {
        var { hostname: j } = new URL(i);
        return f().then(k => k.includes(j));
      };
    },
    12: function(c, d) {
      "use strict";
      d.a = { allFrames: !0, matchAboutBlank: !0, code: "countElements()" };
    },
    13: function(c, d) {
      "use strict";
      d.a = function(f, g) {
        var i = new Set(f.split("\n").map(j => j.trim()));
        for (let j of g)
          i.delete(j);
        return Array.from(i).join("\n");
      };
    },
    26: function(c, d, e) {
      e(64);
      var f = e(7)(e(33), e(59), null, null);
      c.exports = f.exports;
    },
    33: function(c, d, e) {
      "use strict";
      async function f() {
        var { uri: r } = await q, t = await e.i(m.a)(r.origin);
        return t
          ? "whitelist" == t.type ? "site" : ""
          : (t = await e.i(m.a)(r.href), t)
              ? "whitelist" == t.type ? "page" : ""
              : (t = await e.i(l.a)(r.href), t ? "session" : "");
      }
      async function g(r, t) {
        var { tab: u, uri: v } = await q;
        (await e.i(o.a)(v.href, t, r)) && (await j.a.exec(u.id, k.a));
      }
      async function i(r) {
        var { tab: t, uri: u } = await q;
        (await e.i(p.a)(u.href, r)) && (await j.a.exec(t.id, k.a));
      }
      Object.defineProperty(d, "__esModule", { value: !0 });
      var j = e(0),
        k = e(41),
        l = e(10),
        m = e(9),
        n = e(44),
        o = e(45),
        p = e(46),
        q = j.a.query({ lastFocusedWindow: !0, active: !0 }).then(([r]) => {
          var t = new URL(r.url), u = adblockplus.getDecodedHostname(t);
          return "chrome.google.com" == u || r.url.startsWith("chrome")
            ? Promise.reject()
            : { tab: r, uri: t };
        });
      d["default"] = {
        data: () => ({ invalidTab: !1, checkedMenu: "", elementCount: 0 }),
        methods: {
          allowPage() {
            g("page", !this.menuClass("page").checked).then(window.close);
          },
          allowSite() {
            g("site", !this.menuClass("site").checked).then(window.close);
          },
          allowSession() {
            i(!this.menuClass("session").checked).then(window.close);
          },
          openSettings() {
            e.i(j.b)().then(window.close);
          },
          menuClass(r) {
            var t = this.checkedMenu == r,
              u = this.invalidTab || this.checkedMenu && !t;
            return { checked: t, disabled: u };
          }
        },
        created() {
          f()
            .then(r => this.checkedMenu = r)
            .catch(() => this.invalidTab = !0), e
            .i(n.a)()
            .then(r => this.elementCount = r);
        }
      };
    },
    41: function(c, d) {
      "use strict";
      d.a = { allFrames: !0, matchAboutBlank: !0, code: "filterElements()" };
    },
    44: function(c, d, e) {
      "use strict";
      var f = e(0), g = e(12);
      d.a = function(i) {
        return f.a.exec(i, g.a).then(j => j.reduce((k, l) => k + l, 0));
      };
    },
    45: function(c, d, e) {
      "use strict";
      var f = e(0), g = e(1), i = e(5), j = e(13);
      d.a = async function(k, l, m) {
        for (
          var { whitelist: n } = await e.i(i.a)(),
            o = [],
            p = new URL(k),
            q = adblockplus.RegExpFilter.typeMap.DOCUMENT,
            r = adblockplus.getDecodedHostname(p),
            t = n.matchesAny(k, q, r);
          t;
          
        )
          o.push(t.text), n.remove(t), t = n.matchesAny(k, q, r);
        if (l ? 0 == o.length : 0 < o.length) {
          let { filters: u } = await f.c.get({ filters: "" });
          if (0 == o.length) {
            let v = "", w = "";
            "site" == m
              ? v = p.hostname
              : (v = p.host, w = 1 < p.pathname.length ? p.pathname : "");
            let x = `@@||${v.replace(/^www\./, "")}${w}^$document`;
            u = `${x}\n${u}`.trim();
          } else
            u = e.i(j.a)(u, ["", ...o]);
          return await f.c.set({ filters: u }), !0;
        }
      };
    },
    46: function(c, d, e) {
      "use strict";
      var f = e(0);
      d.a = async function(g, i) {
        var { sessions: j } = await f.c.get({ sessions: [] }),
          { hostname: k } = new URL(g),
          l = j.indexOf(k),
          m = -1 != l;
        return (i ? !m : m) &&
          (m ? j.splice(l, 1) : j.push(k), await f.c.set({ sessions: j })), i !=
          m;
      };
    },
    5: function(c, d, e) {
      "use strict";
      function f(j) {
        var { defaultMatcher: k } = adblockplus;
        k.clear();
        var { filters: l } = adblockplus.parseFilters(j.trim());
        return l.forEach(m => k.add(m)), k;
      }
      var g = e(0), i = null;
      chrome.storage.onChanged.addListener(j => {
        j.filters && (i = null);
      }), d.a = function() {
        return null == i &&
          (i = g.c.get({ filters: "" }).then(j => f(j.filters))), i;
      };
    },
    51: function(c, d, e) {
      d = c.exports = e(6)(), d.push([
        c.i,
        "body,html{margin:0;padding:0;overflow:hidden;font-size:13px}hr{background-color:rgba(0,0,0,.15);height:1px;pointer-events:none;margin:2px 0;border:none}.popup-panel{min-width:200px;display:flex;flex-flow:column;white-space:nowrap;-webkit-user-select:none}.header{cursor:default;padding:10px 20px}.menus div{cursor:pointer;padding:8px 20px}.menus div:hover{background:#37474f;color:#fff}.menus div.checked{background:#009688;color:#fff}.menus div.disabled{pointer-events:none;opacity:.4}",
        ""
      ]);
    },
    59: function(c) {
      c.exports = {
        render: function() {
          var e = this, f = e.$createElement, g = e._self._c || f;
          return g("div", { staticClass: "popup-panel" }, [
            g("div", { staticClass: "header" }, [
              e._v(e._s(e.$localize("PopupCount", e.elementCount)))
            ]),
            e._v(" "),
            g("hr"),
            e._v(" "),
            g("div", { staticClass: "menus" }, [
              g(
                "div",
                { class: e.menuClass("page"), on: { click: e.allowPage } },
                [
                  e._v(
                    "\n            " +
                      e._s(e.$localize("PopupPage")) +
                      "\n        "
                  )
                ]
              ),
              e._v(" "),
              g(
                "div",
                { class: e.menuClass("site"), on: { click: e.allowSite } },
                [
                  e._v(
                    "\n            " +
                      e._s(e.$localize("PopupSite")) +
                      "\n        "
                  )
                ]
              ),
              e._v(" "),
              g(
                "div",
                {
                  class: e.menuClass("session"),
                  on: { click: e.allowSession }
                },
                [
                  e._v(
                    "\n            " +
                      e._s(e.$localize("PopupSession")) +
                      "\n        "
                  )
                ]
              ),
              e._v(" "),
              g("hr"),
              e._v(" "),
              g(
                "div",
                { staticClass: "menu-item", on: { click: e.openSettings } },
                [
                  e._v(
                    "\n            " +
                      e._s(e.$localize("PopupSettings")) +
                      "\n        "
                  )
                ]
              )
            ])
          ]);
        },
        staticRenderFns: []
      };
    },
    64: function(c, d, e) {
      var f = e(51);
      "string" == typeof f && (f = [[c.i, f, ""]]), f.locals &&
        (c.exports = f.locals);
      e(8)("743d230c", f, !0);
    },
    71: function(c, d, e) {
      "use strict";
      Object.defineProperty(d, "__esModule", { value: !0 });
      var f = e(4), g = e(26), i = e.n(g), j = e(3);
      f.a.config.devtools = !1, f.a.use(j.a), new f.a({
        el: "#app",
        render: l => l(i.a)
      });
    },
    9: function(c, d, e) {
      "use strict";
      var f = e(5);
      d.a = async function(g) {
        var i = new URL(g), j = await e.i(f.a)();
        return j.matchesAny(
          adblockplus.stringifyURL(i),
          adblockplus.RegExpFilter.typeMap.DOCUMENT,
          adblockplus.getDecodedHostname(i),
          !1,
          null,
          !1
        );
      };
    }
  },
  [71]
);
