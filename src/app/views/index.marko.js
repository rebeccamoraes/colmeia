// Compiled using marko@4.13.4-1 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/colmeia$1.0.0/src/app/views/index.marko",
    components_helpers = require("marko/src/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    hasRenderBodyKey = Symbol.for("hasRenderBody"),
    marko_loadTemplate = require("marko/src/runtime/helper-loadTemplate"),
    layout_template = marko_loadTemplate(require.resolve("./components/layout.marko")),
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_loadTag = marko_helpers.t,
    layout_tag = marko_loadTag(layout_template);

function render(input, out, __component, component, state) {
  var data = input;

  layout_tag({
      heading: {
          renderBody: function renderBody(out) {
            out.w("<div class=\"row\"><div class=\"col-lg\"><h1 id=\"titulo-principal\"><img src=\"/images/logo_completa.svg\" alt=\"Colmeia\" id=\"logo-principal\"><span class=\"oculta\">Colmeia</span></h1><h2 id=\"subtitulo-principal\">A ponte entre a UFG e você.</h2></div></div>");
          }
        },
      content: {
          renderBody: function renderBody(out) {
            out.w("<div class=\"row\"><div class=\"col-lg\"></div></div><div class=\"row\"><div class=\"col-lg\"><h2>O que fazemos?</h2><p>Conectamos a comunidade universitária à comunidade exterior, centralizando a divulgação dos serviços institucionais, assim como os prestados pelos alunos e Empresas Júniores.</p></div></div><div class=\"row\"><div class=\"col-lg\"><button class=\"btn btn-black\">Conheça nossos serviços</button></div></div><div class=\"row\"><div class=\"col-lg\"><h2>Como posso participar?</h2><h3>Comunidade interna a UFG</h3><p>Cadastre seus dados como aluno/professor da UFG, descreva a proposta de serviço oferecida por você, pelo seu grupo ou pela sua Empresa Junior.</p><h3>Comunidade externa a UFG</h3><p>Clique para conhecer os serviços que já são prontamente oferecidos pela comunidade UFG. Se você tem uma proposta de serviço que não se vê contemplada pela nossa lista, voce pode mandar sua sugestão em Faz ai, que será visualizada pela comunidade e dependendo da demanda, será realizada.</p></div></div>");
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
    id: "/colmeia$1.0.0/src/app/views/index.marko",
    tags: [
      "./components/layout.marko"
    ]
  };
