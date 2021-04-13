import routes from './routes'
import Nav from './Components/Nav'
import './App.css';

function App() {
  return (
    <div className="App">
      {routes}
      <Nav />
      
    </div>
  );
}

export default App;
