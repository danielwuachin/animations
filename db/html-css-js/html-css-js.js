import { floatingPlaceholder } from "./projects/floating-placeholder";

export const html_css_js = {
  title: 'animations with HTML, CSS and JS',
  description: 'All projects in this category are made with HTML, CSS and JS!',
  projects: [
    floatingPlaceholder,
    {
      id: 2,
      name: "Responsive menu",
      path: "html-css-js/responsive-menu",
      image: "/html-css-js/responsive-menu.jpg",
      description: "Responsive menu",
      component: false,
      html: '<div class="project-2" >Contenido HTML del Proyecto 2</div>',
      css: ".project-2 { color: red; }",
      js: 'console.log("Proyecto 2");',
    },
  ]
};
