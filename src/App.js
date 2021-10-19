import Dashboard from './components/Dashboard';
import Navbar from './components/Navbar';
import AllUsers from './components/AllUsers';
import AddUser from './components/AddUser';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Dashboard />
      <AllUsers />
      <AddUser />
    </div>
  );
}

export default App;
