import React, { useState, useEffect } from 'react';
import Editor from './Editor'
import useLocalStorage from '@/hooks/useLocalStorage';


function App(props) {
  const [html, setHtml] = useLocalStorage('html', props.html || '')
  const [css, setCss] = useLocalStorage('css', props.css || '')
  const [js, setJs] = useLocalStorage('js', props.js || '')
  const [srcDoc, setSrcDoc] = useState('')

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(`
        <html>
          <body>${html}</body>
          <style>${css}</style>
          <script>${js}</script>
        </html>
      `)
    }, 250)

    return () => clearTimeout(timeout)
  }, [html, css, js])

  return (
    <>

      <div className="project">
        <iframe
          srcDoc={srcDoc}
          title="output"
          sandbox="allow-scripts"
          frameBorder="0"
          width="100%"
          height="100%"
        />
      </div>

      <div className="bottom-editors flex flex-col md:flex-row max-h-[50vh]">
        <Editor
          language="xml"
          displayName="HTML"
          value={html}
          onChange={setHtml}
        />
        <Editor
          language="css"
          displayName="CSS"
          value={css}
          onChange={setCss}
        />
        <Editor
          language="javascript"
          displayName="JS"
          value={js}
          onChange={setJs}
        />
      </div>
    </>
  )
}

export default App;
