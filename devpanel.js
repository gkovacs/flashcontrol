webpackJsonp(
  [6],
  {
    68: function(a, b, c) {
      "use strict";
      Object.defineProperty(b, "__esModule", { value: !0 });
      var d = c(1);
      d.a.get().then(({ devtools_panel: e }) => {
        e &&
          chrome.devtools.panels.create(
            "Flashcontrol",
            "assets/48.png",
            "devtools.html"
          );
      });
    }
  },
  [68]
);
