import React from 'react';

//This is a raw implementation of the data on a simple table
//Leaving this file as documentation since its written as a Class component and will move forward with hooks
//Not plugged in so will not be displayed
export class Table extends React.Component {
  constructor() {
    super();
    this.state = { data: [] };
  }

  async componentDidMount() {
    try {
      const response = await fetch(
        'https://randomuser.me/api/?page=3&results=50&seed=abc'
      );
      const data = await response.json();
      this.setState({ data: data.results });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return (
      <div>
        <h1 className='title'> Contactos 2021</h1>
        <table>
          <thead>
            <tr>
              <th></th>
              <th>Nombre</th>
              <th>Apellido</th>
              <th>Sexo</th>
              <th>Telefono</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {this.state.data.map((row) => (
              <tr key={row.cell}>
                <td></td>
                <td>{row.name.first}</td>
                <td>{row.name.last}</td>
                <td>{row.gender}</td>
                <td>{row.cell}</td>
                <td>{row.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Table;
