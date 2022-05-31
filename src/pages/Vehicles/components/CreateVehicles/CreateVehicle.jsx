import React, { useState, useReducer } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { ADD_VEHICLE } from "../../../../api/Vehicles";
import "./CreateVehicle.scss";

const notesReducer = (state, action) => {
  switch (action.type) {
    case "addNote":
      return { ...state, ...action.payload };
    case "deleteNote":
      const newObj = { ...state };
      delete newObj[action.payload];
      return newObj;
    default:
      return state;
  }
};

const initialNotesState = {};

function CreateVehicle() {
  const navigate = useNavigate();
  const { refetch } = useOutletContext();

  const [addVehicle] = useMutation(ADD_VEHICLE, {
    onCompleted: () => {
      refetch();
      navigate("/vehicles");
    },
  });

  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [capacity, setCapacity] = useState("");
  const [colour, setColour] = useState("");
  const [plateNumber, setPlateNumber] = useState("");
  const [notes, dispatchNotes] = useReducer(notesReducer, initialNotesState);

  const [field, setField] = useState("");
  const [description, setDescription] = useState("");

  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      name !== "" &&
      city !== "" &&
      capacity !== "" &&
      colour !== "" &&
      plateNumber !== ""
    ) {
      setLoading(true)
      addVehicle({
        variables: {
          input: {
            name,
            city,
            capacity,
            colour,
            plate_number: plateNumber,
            notes,
          },
        },
      })
        .catch((e) => {
          alert(e);
          setLoading(false)
        })
        .then(() => {
          refetch();
        });
      setName("");
      setCity("");
      setCapacity("");
      setColour("");
      setPlateNumber("");
    }
  };

  const onAddNoteHandler = (e) => {
    e.preventDefault();
    if (field.length > 0 && description.length > 0) {
      setError(false);
      dispatchNotes({
        type: "addNote",
        payload: { [field]: description },
      });
      setField("");
      setDescription("");
    }
    setError(true);
  };

  const onDeleteNoteHandler = (e, key) => {
    e.preventDefault();
    dispatchNotes({
      type: "deleteNote",
      payload: key,
    });
  };

  const fieldErrorCondition = error && field === "" && description !== "";
  const descriptionErrorCondition = error && description === "" && field !== "";

  return (
    <div className="Vehicles__editVehicle">
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>Vehicle Data</legend>

          <div className="create-vehicle-form-field">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              name="name"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Fast&Furious"
              required
            />
          </div>

          <div className="create-vehicle-form-field">
            <label htmlFor="city">City:</label>
            <input
              type="text"
              name="city"
              id="city"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              placeholder="Toronto"
              required
            />
          </div>

          <div className="create-vehicle-form-field">
            <label htmlFor="capacity">Capacity:</label>
            <input
              type="number"
              inputMode="numeric"
              name="capacity"
              id="capacity"
              value={capacity}
              onChange={(e) => setCapacity(e.target.value)}
              placeholder="2"
              required
            />
          </div>

          <div className="create-vehicle-form-field">
            <label htmlFor="colour">Colour:</label>
            <input
              type="text"
              name="colour"
              id="colour"
              value={colour}
              onChange={(e) => setColour(e.target.value)}
              placeholder="Green"
              required
            />
          </div>

          <div className="create-vehicle-form-field">
            <label htmlFor="plateNumber">Plate number:</label>
            <input
              type="text"
              name="plateNumber"
              id="plateNumber"
              value={plateNumber}
              onChange={(e) => setPlateNumber(e.target.value)}
              placeholder="AAA-001"
              required
            />
          </div>
        </fieldset>

        <fieldset>
          <legend>Notes</legend>
          <div className="create-vehicle-form-field">
            <label htmlFor="field">Field:</label>
            <input
              className={fieldErrorCondition && "input-error-state"}
              type="text"
              name="field"
              id="field"
              value={field}
              onChange={(e) => setField(e.target.value)}
              placeholder="insurance"
            />
            {fieldErrorCondition && (
              <p className="form-error">This field cannot be empty</p>
            )}
          </div>
          <div className="create-vehicle-form-field">
            <label htmlFor="description">Description:</label>
            <input
              className={descriptionErrorCondition && "input-error-state"}
              type="text"
              name="description"
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="123456"
            />
            {descriptionErrorCondition && (
              <p className="form-error">This field cannot be empty</p>
            )}
          </div>
          <button onClick={onAddNoteHandler}>Add Note</button>
          <ul>
            {Object.entries(notes).map((note, index) => {
              return (
                <li className="note-row" key={index}>
                  <p>
                    {note[0]}:{note[1]}
                  </p>
                  <button
                    className="warning"
                    onClick={(e) => onDeleteNoteHandler(e, note[0])}
                  >
                    Delete
                  </button>
                </li>
              );
            })}
          </ul>
        </fieldset>
        <button className="primary" type="submit">
          {loading ? <span> Adding new vehicle...</span> : <span>Add New Vehicle</span>}
        </button>
      </form>
    </div>
  );
}

export default CreateVehicle;
