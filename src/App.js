import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './assets/scss/app.scss';

import Header from './components/Header.js';
import SubHeader from './components/SubHeader';
import Content from './components/Content';

function App() {
  return (
    <div className="App">
      <Header />
      <SubHeader />
      <Content />
    </div>
  );
}

export default App;
