import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { TABLE_HEADERS, SORTING } from '../../utils';
import DeleteUser from '../DeleteUser/DeleteUser';
import EditUser from '../EditUser/EditUser';
import './Table.css';

const Table = ({ data }) => {
  const [users, setUsers] = useState(data);
  const [sortingType, setsortingType] = useState(SORTING.DEFAULT);

  useEffect(() => setUsers(data), [data]);

  const handleSortByUsername = () => {
    let sortedData = [...data];
    if (sortingType === SORTING.ASCENDING) {
      sortedData.sort((a, b) => a.username.localeCompare(b.username));
      setsortingType(SORTING.DESCENDING);
    } else {
      sortedData.sort((a, b) => b.username.localeCompare(a.username));
      setsortingType(SORTING.ASCENDING);
    }
    setUsers(sortedData);
  };

  return (
    <table className='table'>
      <thead>
        <tr>
          {TABLE_HEADERS.map((header) => (
            <th
              className={header === 'username' ? `${sortingType}` : null}
              onClick={header === 'username' ? handleSortByUsername : null}
              key={header}
            >
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {users?.map((user) => {
          const {
            id,
            name,
            username,
            email,
            address: { city },
          } = user;

          return (
            <tr key={id}>
              <td>{id}</td>
              <td>{name}</td>
              <td>{username}</td>
              <td>{email}</td>
              <td>{city}</td>
              <td>
                <EditUser {...user} />
              </td>
              <td>
                <DeleteUser id={id} />
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
