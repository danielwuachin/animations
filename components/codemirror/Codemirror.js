import React from 'react'
import App from './App'

const Codemirror = ({html, css, js}) => {
  return (
    <>
      <App html={html} css={css} js={js} />
    </> 
  )
}

export default Codemirror