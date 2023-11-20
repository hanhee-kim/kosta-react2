import { Table } from "reactstrap";

function TableStrap() {
  return (
    <div style={{ width: "800px" }}>
      <h3>Example Table</h3>
      <Table borderless hover small>
        <thead>
          <tr>
            <th>#</th>
            <td>First Name</td>
            <td>Last Name</td>
            <td>User Name</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twiter</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}
export default TableStrap;
