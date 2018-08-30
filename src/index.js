import React from 'react';
import {render} from 'react-dom';

import 'semantic-ui-css/semantic.min.css';
import GameCard from './components/GameCard';

const App = ()=>(
  <div>
    <GameCard />
  </div>
)

render(<App />, document.getElementById('root'))