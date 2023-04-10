import React from "react";
function HandleArrayList() {
  const employee = [
    { name: "Manoj", email: "Manoj@gmail.com", phno: 8456615686 },
    { name: "Akash", email: "Akash@gmail.com", phno: 9882211754 },
    { name: "Manu", email: "Manu@gmail.com", phno: 8456615686 },
  ];

  return (
    <div>
      <h1>Handle Array with List</h1>

      <table className="table table-dark">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phno</th>
          </tr>
        </thead>
        <tbody>
          {employee.map((data, i) => (
            <tr key={i}>
              <td>{data.name}</td>
              <td>{data.email}</td>
              <td>{data.phno}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default HandleArrayList;
