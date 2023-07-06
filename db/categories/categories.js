import { html_css_js } from "../html-css-js/html-css-js"
import { only_css } from "../only-css/only-css"
export const categories = [
  {
    id: 1,
    name: 'Only CSS',
    path: 'only-css',
    image: '/categories/only-css.jpg',
    description: 'CSS only projects',
    data: only_css,
  },
  {
    id: 2,
    name: 'HTML, CSS and JS',
    path: 'html-css-js',
    image: '/categories/html-css-js.webp',
    description: 'HTML, CSS and JS projects',
    data: html_css_js
  },
  {
    id: 3,
    name: 'Libraries',
    path: 'libraries',
    image: '/categories/libraries.jpg',
    description: 'projects using libraries',
  },
]