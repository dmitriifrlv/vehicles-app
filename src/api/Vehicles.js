import { gql } from '@apollo/client';

const FETCH_VEHICLES = gql`
  query FETCH_VEHICLES {
    sst_test_case_vehicles_dmitrii {
      id
      name
      city
      capacity
      colour
      plateNumber: plate_number
      notes
    }
  }
`;


const ADD_VEHICLE = gql`
mutation ADD_VEHICLE(
    $input: sst_test_case_vehicles_dmitrii_insert_input!) {
    insert_sst_test_case_vehicles_dmitrii_one(object: $input) {
    id
  }
}

`;

export {
  FETCH_VEHICLES,
  ADD_VEHICLE,
};
