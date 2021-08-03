// import logo from './logo.svg';
import './App.css';
import List from './containers/List';

function App() {
  return (
    <div >
      <nav className='navbar sticky-top navbar-light bgdark'>
        <h1 className='navbar-brand textlight'>Movie List </h1>
      </nav>
        <List/>
    </div>
  );
}

export default App;
