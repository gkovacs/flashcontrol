webpackJsonp(
  [2],
  {
    10: function(c, d, e) {
      "use strict";
      function f() {
        return g.c.get({ sessions: [] }).then(h => h.sessions);
      }
      var g = e(0);
      d.a = function(h) {
        var { hostname: i } = new URL(h);
        return f().then(j => j.includes(i));
      };
    },
    12: function(c, d) {
      "use strict";
      d.a = { allFrames: !0, matchAboutBlank: !0, code: "countElements()" };
    },
    13: function(c, d) {
      "use strict";
      d.a = function(f, g) {
        var h = new Set(f.split("\n").map(i => i.trim()));
        for (let i of g)
          h.delete(i);
        return Array.from(h).join("\n");
      };
    },
    14: function(c, d) {
      "use strict";
      d.a = function(f) {
        var [g] = f.split(":");
        return ["http", "https", "file", "ftp"].includes(g);
      };
    },
    15: function(c, d, e) {
      "use strict";
      var f = e(43), g = e(9);
      d.a = async function(h, i, j) {
        var k = await e.i(g.a)(i);
        return k || (k = await e.i(f.a)(h, i, j)), k;
      };
    },
    20: function(c, d, e) {
      "use strict";
      async function f(l, m = "") {
        var n = await i.c.get({ filters: "" }),
          o = e.i(k.a)(n.filters, [l]),
          p = `${o}\n${m}`.trim();
        await i.c.set({ filters: p });
      }
      async function g(l, m) {
        var n = "whitelist" == l ? "@@" : "",
          o = "about:blank" == m.url ? "" : "||",
          p = m.url.replace(/^[a-z]+:\/{2,}(www.)?/, ""),
          q = `${n}${o}${p}`;
        return await f(m.text, q), { type: l, text: q };
      }
      async function h(l) {
        return await f(l.text), { type: "", text: "" };
      }
      Object.defineProperty(d, "__esModule", { value: !0 });
      var i = e(0), j = e(15), k = e(13);
      chrome.runtime.onConnect.addListener(function(l) {
        function m(q, r) {
          q.newPlayer &&
            r.tab.id == p &&
            e.i(j.a)(q.url, r.tab.url, r.url).then(t => {
              var { type: u = "", text: v = "" } = t || {},
                w = {
                  type: u,
                  text: v,
                  url: q.url,
                  tabUrl: r.tab.url,
                  frameUrl: r.url
                };
              l.postMessage({ log: w });
            });
        }
        function n(q, r, { url: t, status: u }) {
          q == p && l.postMessage({ [u]: t });
        }
        var o = l.name.match("^devtools-(\\d+)$");
        if (o) {
          var [, p] = o;
          l.onMessage.addListener(async q => {
            if (q.allow) {
              let r = await g("whitelist", q.allow);
              l.postMessage({ update: Object.assign({}, q.allow, r) });
            }
            if (q.block) {
              let r = await g("blocking", q.block);
              l.postMessage({ update: Object.assign({}, q.block, r) });
            }
            if (q.remove) {
              let r = await h(q.remove);
              l.postMessage({ update: Object.assign({}, q.remove, r) });
            }
          }), l.onDisconnect.addListener(() => {
            chrome.tabs.onUpdated.removeListener(
              n
            ), chrome.runtime.onMessage.removeListener(m);
          }), chrome.tabs.onUpdated.addListener(
            n
          ), chrome.runtime.onMessage.addListener(m);
        }
      });
    },
    21: function(c, d, e) {
      "use strict";
      function f(r, t, u) {
        "loading" == t.status && j(u);
      }
      function g(r) {
        l.a.get(r).then(j);
      }
      function h(r, t) {
        r.newPlayer && i(t.tab.id, !0);
      }
      async function i(r, t = !1) {
        var u = null;
        if (t)
          u = await l.g.getText({ tabId: r }).catch(() => null), null != u &&
            (u = +u + 1);
        else {
          let v = await l.a.exec(r, n.a);
          u = v.reduce((w, x) => w + x, 0) || "";
        }
        null != u && l.g.setText({ tabId: r, text: u + "" });
      }
      async function j(r) {
        var { id: t, url: u } = r;
        if (e.i(q.a)(u)) {
          var v = await e.i(o.a)(u), w = v ? v.type : "";
          if (!w) {
            let x = await e.i(p.a)(u);
            x && (w = "whitelist");
          }
          if (w) {
            let x = `assets/${"whitelist" == w ? "allow" : "prevent"}.svg`;
            l.g.setIcon({ tabId: t, path: x });
          }
        }
      }
      async function k() {
        var r = await m.a.get();
        chrome.tabs.onUpdated.removeListener(
          f
        ), chrome.tabs.onReplaced.removeListener(g), r.menu_indicator &&
          (chrome.tabs.onUpdated.addListener(
            f
          ), chrome.tabs.onReplaced.addListener(
            g
          )), chrome.runtime.onMessage.removeListener(
          h
        ), chrome.tabs.onReplaced.removeListener(i), r.badge_counter &&
          (chrome.runtime.onMessage.addListener(
            h
          ), chrome.tabs.onReplaced.addListener(i));
      }
      Object.defineProperty(d, "__esModule", { value: !0 });
      var l = e(0), m = e(1), n = e(12), o = e(9), p = e(10), q = e(14);
      chrome.storage.onChanged.addListener(r => {
        r.prefs && k();
      }), k();
    },
    22: function(c, d, e) {
      "use strict";
      async function f(k, l, m) {
        var n = await e.i(i.a)(k, l, m), o = n ? n.type : "";
        if (!o) {
          let p = await e.i(j.a)(l);
          p && (o = "whitelist");
        }
        if (!o) {
          let p = await h.a.get();
          p.default_behavior && (o = p.default_behavior);
        }
        return o;
      }
      Object.defineProperty(d, "__esModule", { value: !0 });
      var g = e(0), h = e(1), i = e(15), j = e(10);
      chrome.runtime.onStartup.addListener(() => {
        g.c.remove("sessions");
      }), chrome.runtime.onMessage.addListener((k, l, m) => {
        return f(k.url, l.tab.url, l.url).then(m, m), !0;
      });
    },
    23: function(c, d, e) {
      "use strict";
      async function f() {
        var k = await h.a.get(), l = g.f.remove();
        k.context_menu && l.then(() => {
            var m = ["page", "frame"], n = ["*://*/*"];
            g.f.create({
              id: "run",
              title: e.i(g.d)("MenuUnblock"),
              documentUrlPatterns: n,
              contexts: m
            }), g.f.create({
              id: "separator",
              type: "separator",
              documentUrlPatterns: n,
              contexts: m
            }), g.f.create({
              id: "settings",
              title: e.i(g.d)("MenuSettings"),
              documentUrlPatterns: n
            });
          });
      }
      Object.defineProperty(d, "__esModule", { value: !0 });
      var g = e(0), h = e(1), i = e(42), j = e(14);
      chrome.runtime.onStartup.addListener(
        f
      ), chrome.runtime.onInstalled.addListener(
        f
      ), chrome.storage.onChanged.addListener(k => {
        k.prefs && f();
      }), chrome.contextMenus.onClicked.addListener((k, l) => {
        "run" == k.menuItemId
          ? e.i(j.a)(l.url) && g.a.exec(l.id, i.a)
          : "settings" == k.menuItemId && e.i(g.b)();
      });
    },
    42: function(c, d) {
      "use strict";
      d.a = { allFrames: !0, matchAboutBlank: !0, code: "allowElements()" };
    },
    43: function(c, d, e) {
      "use strict";
      var f = e(5);
      d.a = async function(g, h, i) {
        var j = new URL(g),
          k = adblockplus.getDecodedHostname(new URL(i)),
          l = await e.i(f.a)();
        return l.matchesAny(
          adblockplus.stringifyURL(j),
          adblockplus.RegExpFilter.typeMap.OBJECT,
          k,
          adblockplus.isThirdParty(j, k),
          null,
          !1
        );
      };
    },
    5: function(c, d, e) {
      "use strict";
      function f(i) {
        var { defaultMatcher: j } = adblockplus;
        j.clear();
        var { filters: k } = adblockplus.parseFilters(i.trim());
        return k.forEach(l => j.add(l)), j;
      }
      var g = e(0), h = null;
      chrome.storage.onChanged.addListener(i => {
        i.filters && (h = null);
      }), d.a = function() {
        return null == h &&
          (h = g.c.get({ filters: "" }).then(i => f(i.filters))), h;
      };
    },
    72: function(c, d, e) {
      e(20), e(21), e(23), c.exports = e(22);
    },
    9: function(c, d, e) {
      "use strict";
      var f = e(5);
      d.a = async function(g) {
        var h = new URL(g), i = await e.i(f.a)();
        return i.matchesAny(
          adblockplus.stringifyURL(h),
          adblockplus.RegExpFilter.typeMap.DOCUMENT,
          adblockplus.getDecodedHostname(h),
          !1,
          null,
          !1
        );
      };
    }
  },
  [72]
);
