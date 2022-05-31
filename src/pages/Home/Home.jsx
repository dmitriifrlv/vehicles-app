import React from 'react';
import Header from '../../components/Header/Header';
import './Home.scss';


function Home() {
  return (
    <>
      <Header />
      <div className="Home__container">
        <div className="card">
          <main className="Home__main">
            <h2>Task List:</h2>
            <div>
              <ol>
                <li>Fix button <i className="fas fa-bars icons" /> that toggle sidebar </li>
                <li>On the "Vehicles" page fix data table display.
                  To display the data DataTable (react-data-table-component) is being used.
                  When you fix it you should see the table with multiple rows instead of "There are no records to display"
                </li>
                <li>Populate column notes with notes from data object (write notesFormatter function)</li>
                <li>Add loader to the DisplayVehicles.jsx (Logic: while data is being loaded from the DB show loader,
                  when it's done show the DataTable) It doesn't have to be pretty </li>
                <li>Make every other row in the table slightly grey</li>
                <li>Make column Name sortable (Hint: this information can be found in the DataTable docs) </li>
                <li>Add create form to Create Vehicle page.
                  Inputs: name(text), city(text), capacity(integer), colour(text), plate_number(text), notes(JSONB)
                  Use handleSubmit(CreateVehicle.js) function to add new vehicle to the DB
                  If new vehicle was added successfully it will appear in the table
                </li>
                <li>Optional task: Multiple table rows have the same name. Modify the dataset to hide(remove) duplicates,
                  to show only unique vehicle name </li>
              </ol>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}

export default Home;
