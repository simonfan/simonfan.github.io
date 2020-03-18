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
          Meu nome é Simon e esta é a minha biblioteca. Aqui guardo pensamentos que me ajudam o mundo e a mim mesmo.
        </p>

        <ul>
          <li>
            <a href="https://simonfan.com.br/china-julho-2018/">
              1. ORIGENS
            </a>
          </li>
          <li>
            <a href="https://simonfan.com.br/metaesquema-meta/">
              METAESQUEMAS
            </a>
          </li>
          <li>
            <a href="https://simonfan.com.br/blokoke-2020/">
              CARNAVAL - BLÓKÕKÊ
            </a>
          </li>
        </ul>
      </RichText>
    </main>
  </div>
)

export default App
