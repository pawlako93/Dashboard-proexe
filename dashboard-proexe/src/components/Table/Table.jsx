import React from 'react';
import { TABLE_HEADERS } from '../../utils';

const Table = ({ data }) => {
  return (
    <table className='table'>
      <thead>
        <tr>
          {TABLE_HEADERS.map((header) => (
            <th key={header}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data?.map(({ id, name, username, email, address: { city } }) => (
          <tr key={id}>
            <td>{id}</td>
            <td>{name}</td>
            <td>{username}</td>
            <td>{email}</td>
            <td>{city}</td>
            <td>
              <button>edit</button>
            </td>
            <td>
              <button>delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
