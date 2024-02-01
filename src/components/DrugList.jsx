import React from "react";
import Swal from "sweetalert2";
import { useLoaderData } from "react-router-dom";
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css'; 
import { useState } from "react";
import { useNavigate } from 'react-router-dom';


const PharmacyTable = () => {
  const drugs = useLoaderData();
  console.log(drugs);
  
  const navigate = useNavigate()
const [isDeleting, setDeleting] = useState(false);


const deleteDrug = (drugID) => {
  confirmAlert({
    title: 'Confirm Delete',
    message: 'Are you sure you want to delete this drug?',
    buttons: [
      {
        label: 'Yes',
        onClick: async () => {
          setDeleting(true);
          try {
            let deletedDrug = await fetch(`http://localhost:3090/pharm/delete/${drugID}`, {
              method: 'DELETE',
              headers: {
                'Content-Type': 'application/json',
              },
            });

            if (deletedDrug.ok) {
              // Handle successful deletion
              await deletedDrug.json(); // You might not need this line

              Swal.fire({
                icon: 'success',
                title: 'Great',
                text: 'Drug deleted successfully',
              });

              setTimeout(() => {
                navigate('/');
              }, 500);
            } else {
              // Handle error or non-JSON response
              const errorMessage = await deletedDrug.json(); // Read the error message or non-JSON response
              Swal.fire({
                icon: 'error',
                title: 'Oops',
                text: errorMessage,
              });
            }
          } catch (error) {
            console.error('Error deleting drug:', error);
            setDeleting(false);
          }
        },
      },
      {
        label: 'No',
        onClick: () => {},
      },
    ],
  });
};


  return (
    <>
        <section className="content">
          <div className="content-list">
            <h1>Drug List</h1>
            <table className="table">
              <thead>
                <tr>
                  <th>Drug Name</th>
                  <th>Description</th>
                  <th>Drug Code</th>
                  <th>Unit Of Pricing</th>
                  <th>Price</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {drugs.map((drug) => (
                  <tr key={drug._id}>
                    <td>{drug.name}</td>
                    <td className="description">{drug.description}</td>
                    <td>{drug.drugCode}</td>
                    <td>{drug.unitPricing}</td>
                    <td>{drug.price}</td>
                    <td>
                      <button onClick={() => deleteDrug(drug._id)}>Delete</button>
                      <button>Update</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
    </>
  );
};

export default PharmacyTable;
export const DrugsLoaderData = async () => {
  try {
    const drugs = await fetch(`http://localhost:3090/pharm/drugs`);
    const response = await drugs.json();
    console.log(response);
    return response;
  } catch (error) {
    console.error("Error fetching drugs:", error);
  }
};
