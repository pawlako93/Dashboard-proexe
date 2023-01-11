import React from 'react';
import { TABLE_HEADERS } from '../../utils';

const Table = ({ data }) => {
  return (
    <table className='table'>
      <thead>
        <tr>
          {TABLE_HEADERS.map((header) => (
            <th>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data?.map(({ id, name, username, email, address: { city } }) => (
          <tr>
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
