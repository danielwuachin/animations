'use client'
import Codemirror from '@/components/codemirror/Codemirror';
import { categories } from '@/db/categories/categories';
import React from 'react'

/* const InteractiveProject = ({ project }) => {
  const { html, css, js, type } = project;

  if (type === 'json') {
    // Logic and functionality for JSON projects
  } else if (type === 'react') {
    // Logic and functionality for React component projects
    const Component = project.component;
    return <Component />;
  }

  return null;
};
 */
const Project = ({ params }) => {
  console.log(params)
  const { categoryPath, projectPath } = params;

  const category = categories.find((cat) => cat.path === categoryPath);
  
  if (!category)  return <h1>Category not found</h1>;

  const project = category.data.projects.find((pro) => pro.path === projectPath);
  console.log(project)
  if (!project) return <h1>Project not found</h1>;

  const { html, css, js } = project;
  return (
    <div className='h-screen'>
      <Codemirror html={html} css={css} js={js} />
    </div>
  )
/* 
  if (tipo === 'json') {
    // Lógica y funcionalidad para proyectos JSON
    const handleButtonClick = () => {
      // Aquí puedes agregar la lógica para interactuar con el proyecto JSON
    };

    return (
      <div>
        <div dangerouslySetInnerHTML={{ __html: html }} />
        <style>{css}</style>
        <script>{js}</script>
        <button onClick={handleButtonClick}>Interactuar</button>
      </div>
    );
  } else if (tipo === 'react') {
    // Lógica y funcionalidad para proyectos de componentes React
    const Componente = proyecto.componente;
    return <Componente />;
  } */

  return null;
}


/* 
const ProjectCode = ({ html, css, js, type }) => {
  if (type === 'json') {
    return (
      <div>
        <h3>HTML Code</h3>
        <CodeMirror value={html} options={{ mode: 'htmlmixed', readOnly: true }} />

        <h3>CSS Code</h3>
        <CodeMirror value={css} options={{ mode: 'css', readOnly: true }} />

        <h3>JavaScript Code</h3>
        <CodeMirror value={js} options={{ mode: 'javascript', readOnly: true }} />
      </div>
    );
  } else if (type === 'react') {
    return (
      <div>
        <h3>React Component Code</h3>
        <CodeMirror value={html} options={{ mode: 'jsx', readOnly: true }} />
      </div>
    );
  }

  return null;
};



const ProjectDetail = ({ project }) => {
  const { type } = project;

  return (
    <div>
      <h2>{project.title}</h2>
      <InteractiveProject project={project} />
      <ProjectCode {...project} type={type} />
    </div>
  );
}; */

export default Project
