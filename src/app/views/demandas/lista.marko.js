// Compiled using marko@4.13.4-1 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/colmeia$1.0.0/src/app/views/demandas/lista.marko",
    components_helpers = require("marko/src/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    hasRenderBodyKey = Symbol.for("hasRenderBody"),
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_forEach = marko_helpers.f,
    marko_escapeXml = marko_helpers.x,
    marko_loadTemplate = require("marko/src/runtime/helper-loadTemplate"),
    layout_template = marko_loadTemplate(require.resolve("../components/layout.marko")),
    marko_loadTag = marko_helpers.t,
    layout_tag = marko_loadTag(layout_template);

function render(input, out, __component, component, state) {
  var data = input;

  layout_tag({
      heading: {
          renderBody: function renderBody(out) {
            out.w("<h1>Faz aí</h1>");
          }
        },
      content: {
          renderBody: function renderBody(out) {
            out.w("<div class=\"row\">");

            var for__5 = 0;

            marko_forEach(data.demandas, function(demanda) {
              var keyscope__6 = "[" + ((for__5++) + "]");

              out.w("<div class=\"col-lg\"><h4>" +
                marko_escapeXml(demanda.titulo) +
                "</h4><p>" +
                marko_escapeXml(demanda.descricao) +
                "</p></div>");
            });

            out.w("</div>");
          }
        },
      [hasRenderBodyKey]: true
    }, out, __component, "0");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/colmeia$1.0.0/src/app/views/demandas/lista.marko",
    tags: [
      "../components/layout.marko"
    ]
  };
