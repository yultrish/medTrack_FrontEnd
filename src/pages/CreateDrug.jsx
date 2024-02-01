import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useNavigate, redirect } from "react-router-dom";
import Swal from "sweetalert2";

export default function PharmDrug() {
  let navigate = useNavigate();
  const [show, setShow] = useState(true);
  const handleClose = () => navigate("/");

  const addDrug = async (e) => {
    e.preventDefault();
    try {
      const {
        drugName,
        description,
        drugCode,
        unitPricing,
        price,
      } = e.target;

      const result = await fetch(`http://localhost:3090/pharm/newDrug`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: drugName.value,
          description: description.value,
          drugCode: drugCode.value,
          unitPricing: unitPricing.value,
          price: parseFloat(price.value),
        }),
      });

      if (result.ok) {
        const data = await result.json();
        Swal.fire({
          icon: "success",
          title: "Great",
          text: data.message,
        });
        navigate("/drugList");
      } else {
        const errorData = await result.json();
        Swal.fire({
          icon: "error",
          title: "Oops",
          text: errorData.message,
        });
      }
    } catch (error) {
      console.error(error);
      Swal.fire({
        icon: "error",
        title: "Oops",
        text: "An error occurred while adding the drug.",
      });
    }
  };


  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Please Add a New Drug</Modal.Title>
        </Modal.Header>
        <div className="add-form-container">
          <form onSubmit={addDrug}>
          {/* <Modal.Body> */}
            <input type="text" name="drugName" placeholder="Drug Name" />
            <textarea name="description" id="description" cols="30" rows="4"></textarea>
            <input type="text" name="drugCode" placeholder="Drug Code" />
            <input type="text" name="unitPricing" placeholder="Unit Pricing" />
            <input type="Number" name="price" placeholder="Price" />
            <Modal.Footer>
             <div className="modal-btns">
             <Button
                variant="secondary"
                onClick={handleClose}
              >
                Close
              </Button>
              <button type="submit">
                Add
              </button>
             </div>
            </Modal.Footer>
            {/* <button>Book Now</button> */}
            
          {/* </Modal.Body> */}
          </form>
          <div>
          </div>
      </div>
      </Modal>
    </>
  );
}




