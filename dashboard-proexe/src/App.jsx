import './App.css';
import { API_URL } from './utils';
import { fetchData } from './redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import AddUser from './components/AddUser/AddUser';
import Table from './components/Table/Table';

function App() {
  const { data, error, isLoading } = useSelector(({ usersData }) => usersData);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchData(API_URL));
  }, []);

  if (isLoading) {
    return <div>LOADING... Please wait...</div>;
  }
  if (error) {
    return <div>SOMETHING WENT WRONG</div>;
  }

  const empty = (
    <div className='empty-container'>
      <p>Table is empty</p>
    </div>
  );

  return (
    <div className='App'>
      <h1>Dashboard - Proexe</h1>
      <AddUser />
      {data.length === 0 ? empty : <Table data={data} />}
    </div>
  );
}

export default App;
