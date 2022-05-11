import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import router from './router';

const App = (): React.ReactElement => <BrowserRouter>{router}</BrowserRouter>;

export default App;
