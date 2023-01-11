import './App.css';
import AddUser from './components/AddUser/AddUser';
import Table from './components/Table/Table';
import { useFetch } from './hooks/useFetch';
import { API_URL } from './utils';

function App() {
  const { data, error, isLoading } = useFetch(API_URL);

  if (isLoading) {
    return <div>LOADING</div>;
  }
  if (error) {
    return <div>SOMETHING WENT WRONG</div>;
  }

  return (
    <div className='App'>
      <h1>Dashboard - Proexe</h1>
      <AddUser />
      <Table data={data} />
    </div>
  );
}

export default App;
