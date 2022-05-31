import React from "react";
import { useOutletContext } from "react-router-dom";
import DataTable from "react-data-table-component";
import VehiclesHeader from "./VehiclesHeader";
import Loader from "../../../components/Loader/Loader";
import ErrorMessage from "../../../components/ErrorMessage/ErrorMessage";

function DisplayVehicles() {
  const { data, loading } = useOutletContext();

  const notesFormatter = (cell) => {
    // I assumed that the content of notes cell may be different
    // and rather than accesing the properties directly decided to map through the data
    const notesData = Object.entries(cell.notes);
    return (
      <ul className="notes">
        {notesData.map((note, index) => (
          <li key={index}>
            {note[0]}:{note[1]}
          </li>
        ))}
      </ul>
    );
  };

  const columns = [
    {
      selector: (row) => row.id,
      name: "ID",
      width: "20rem",
      reorder: true,
    },
    {
      selector: (row) => row.name,
      name: "Name",
      width: "12rem",
      reorder: true,
      sortable: true,
    },
    {
      selector: (row) => row.capacity,
      name: "Capacity",
      width: "8rem",
      reorder: true,
    },
    {
      selector: (row) => row.colour,
      name: "Colour",
      width: "10rem",
      reorder: true,
    },
    {
      selector: (row) => row.city,
      name: "City",
      width: "12rem",
      reorder: true,
    },
    {
      selector: (row) => row.plateNumber,
      name: "Plate Number",
      width: "10rem",
      reorder: true,
    },
    {
      selector: (row) => row.notes,
      name: "Notes",
      width: "14rem",
      reorder: true,
      format: notesFormatter,
    },
  ];

  const customStyles = {
    headCells: {
      style: {
        fontSize: "1rem",
        fontWeight: "500",
        paddingLeft: "1.5rem",
        borderTop: "1px solid rgba(0, 0, 0, 0.55)",
        borderRight: "1px solid rgba(0, 0, 0, 0.55)",
        "&:first-of-type": {
          borderLeft: "1px solid rgba(0, 0, 0, 0.55)",
        },
      },
    },
    rows: {
      style: {
        borderTop: "1px solid rgba(0, 0, 0, 0.55)",
        borderBottom: "1px solid rgba(0, 0, 0, 0.55)",
        "&:nth-child(2n)": {
          background: "#d0d0d0",
        },
      },
    },
    cells: {
      style: {
        fontSize: "0.85rem",
        paddingLeft: "1rem",
        borderRight: "1px solid rgba(0, 0, 0, 0.55)",
        "&:first-of-type": {
          borderLeft: "1px solid rgba(0, 0, 0, 0.55)",
        },
      },
    },
  };

  return (
    <>
      <VehiclesHeader />
      {loading ? (
        <Loader />
      ) : data ? (
        <DataTable
          columns={columns}
          data={data.sst_test_case_vehicles_dmitrii.reduce(function (a, b) {
            if (
              !a.some(function (vehicle) {
                return vehicle.name === b.name;
              })
            )
              a.push(b);
            return a;
          }, [])}
          customStyles={customStyles}
        />
      ) : (
        <ErrorMessage />
      )}
    </>
  );
}

export default DisplayVehicles;
