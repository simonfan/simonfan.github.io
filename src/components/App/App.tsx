import React from 'react'
import './App.scss'

import { RichText } from '../RichText/RichText'

const App = () => (
  <div className="App">
    <main>
      <RichText>
        <p>
          Olá.<br />
          Seja bem vindo.
        </p>
        <p>
          Meu nome é Simon e esta é a minha biblioteca. Aqui guardo pensamentos e tento organizá-los em estruturas que me ajudam a entender melhor ao mundo e a mim mesmo.
        </p>

        <ul>
          <li>
            <a href="/origens/china-julho-2018/">
              1. ORIGENS
            </a>
          </li>
          <li>
            <a href="https://simonfan.github.io/metaesquema-meta">
              METAESQUEMAS
            </a>
          </li>
        </ul>
      </RichText>
    </main>
  </div>
)

export default App
