import React from 'react';
import { useNavigate, useOutletContext } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { ADD_VEHICLE } from '../../../../api/Vehicles';

function CreateVehicle() {
  const navigate = useNavigate();
  const { refetch } = useOutletContext();

  const [addVehicle] = useMutation(ADD_VEHICLE, {
    onCompleted: () => {
      refetch();
      navigate('/vehicles');
    },
  });

  const handleSubmit = () => {
    addVehicle({
      variables: {
        input: {
          // name: '',
          // city: '',
          // capacity: 0,
          // colour: '',
          // plate_number: '',
          // notes: {},
        },
      },
    })
      .catch((e) => {
        alert(e);
      })
      .then(() => {
        refetch();
      });
    ;
  }

  return (
    <div className="Vehicles__editVehicle">
      {/* new vehicle form */}
    </div>
  );
}

export default CreateVehicle;
