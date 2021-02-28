import './styles/App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Chess from './pages/Chess';
import Chat from './pages/Chat';
import TodoList from './pages/TodoList'
import Sidebar from './components/sidebar/Sidebar';

function App() {
  return (
    <div className="App">
      <Router>
        <Sidebar />
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
