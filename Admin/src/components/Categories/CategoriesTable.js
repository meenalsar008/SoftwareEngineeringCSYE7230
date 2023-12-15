import React from "react";
import { Link } from "react-router-dom";

const CategoriesTable = ({ data ,onDeleteCategory}) => {
  return (
    <div className="col-md-12 col-lg-8">
      <table className="table">
        <thead>
          <tr>
            {/* <th>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" />
              </div>
            </th>             */}
            <th>Name</th>
            <th>Description</th>
            {/* <th>Delete</th> */}
          </tr>
        </thead>
        {/* Table Data */}
        {console.log(data)}
        <tbody>
          {data?.map((item) => (
            <tr key={item._id}>
              <td>{item.name}</td>
              <td>{item.description}</td>
              <td>
                <button className="dropdown-item text-danger" onClick={() => onDeleteCategory(item._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CategoriesTable;
