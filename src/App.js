import './styles/App.css';
import { BrowserRouter as Router, Switch, Route/*, Link */} from 'react-router-dom';
import Chess from './pages/Chess';
import Chat from './pages/Chat';
import TodoList from './pages/TodoList'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/chess' exact component={Chess}/>
          <Route path='/chat' exact component={Chat}/>
          <Route path='/todo' exact component={TodoList}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
