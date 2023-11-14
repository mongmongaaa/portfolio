
import './reset.css';
import {HashRouter, Route, Routes } from "react-router-dom"
import {axios} from "axios"
import Main from './page/Main';
import Detail from './page/Detail';

function App() {
  return (
    <div className="App">
      <HashRouter >
    <main>
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/Detail/:category/:id' element={<Detail/>}/>
      </Routes>
    </main>
    <footer>
      <div>
        <figure>
          <img src='./image/soms_foot.png'/>
        </figure>
        <p>COPYRIGHT ⓒ 2023 LEEJIYOUNG. ALL RIGHTS RESERVED.</p>
      </div>
    </footer>
    </HashRouter>
    </div>
  );
}

export default App;
