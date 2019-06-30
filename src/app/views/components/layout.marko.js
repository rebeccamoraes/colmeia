// Compiled using marko@4.13.4-1 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/colmeia$1.0.0/src/app/views/components/layout.marko",
    components_helpers = require("marko/src/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_loadTag = marko_helpers.t,
    component_globals_tag = marko_loadTag(require("marko/src/components/taglib/component-globals-tag")),
    marko_dynamicTag = marko_helpers.d,
    init_components_tag = marko_loadTag(require("marko/src/components/taglib/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/taglibs/async/await-reorderer-tag"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<!DOCTYPE html><html lang=\"pt-br\"><head><meta charset=\"utf-8\"><meta name=\"viewport\" content=\"width=device-width, initial-scale=1, shrink-to-fit=no\"><title>Colmeia - Conectando Universidade e Sociedade</title><link rel=\"icon\" type=\"imagem/svg\" src=\"/images/logo_colmeia_amarela_alternativa.svg\"><link rel=\"stylesheet\" type=\"text/css\" href=\"/css/bootstrap/bootstrap.min.css\"><link rel=\"stylesheet\" type=\"text/css\" href=\"/css/principal.css\"><link rel=\"stylesheet\" type=\"text/css\" href=\"/css/cabecalho.css\"><link rel=\"stylesheet\" type=\"text/css\" href=\"/css/rodape.css\"></head><body>");

  component_globals_tag({}, out);

  out.w("<header><nav class=\"navbar navbar-expand-lg navbar-black bg-black\" aria-controls=\"navbar\"><a class=\"navbar-brand\" href=\"/\"><img src=\"/images/logo_colmeia_amarela_alternativa.svg\" id=\"logo-min\" alt=\"\"></a><button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" aria-expanded=\"false\"><span class=\"navbar-toggler-icon\"></span></button><div class=\"collapse navbar-collapse\" id=\"menu-principal\"><ul class=\"navbar-nav mr-auto\"><li class=\"nav-item\"><a class=\"nav-link\" href=\"#\">Serviços</a></li><li class=\"nav-item\"><a class=\"nav-link\" href=\"/demandas\">Faz aí</a></li><li class=\"nav-item\"><a class=\"nav-link\" href=\"#\">Estamos fazendo</a></li><li class=\"nav-item\"><a class=\"nav-link\" href=\"#\">Sobre</a></li><li class=\"nav-item\"><a class=\"nav-link\" href=\"#\">Minha conta</a></li></ul></div></nav></header><div class=\"container\">");

  marko_dynamicTag(input.heading.renderBody, {}, out, __component, "30");

  marko_dynamicTag(input.content.renderBody, {}, out, __component, "31");

  out.w("</div><footer id=\"rodape\"><div class=\"container\"><div class=\"row\"><div class=\"col-lg\"><p>Geral: <br> (62) 3521-1070 <br><br> Secretaria Administrativa<br> (62) 3521-1315<br> (62) 3521-1793</p></div><div class=\"col-lg\"></div><div class=\"col-lg\"></div></div><div class=\"row\"><div class=\"col-lg creditos\">Universidade Federal de Goiás - UFG. Todos os direitos reservados.</div></div></div></footer><script src=\"/js/jquery-3.4.1.js\"></script><script src=\"/js/bootstrap/bootstrap.min.js\"></script>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "48");

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/colmeia$1.0.0/src/app/views/components/layout.marko",
    tags: [
      "marko/src/components/taglib/component-globals-tag",
      "marko/src/components/taglib/init-components-tag",
      "marko/src/taglibs/async/await-reorderer-tag"
    ]
  };
