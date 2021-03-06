import React from "react";
import KegForm from "./KegForm";
import PropTypes from "prop-types";

function EditKegForm(props) {
  const { keg } = props;

  function handleEditTicketFormSubmission(event) {
    event.preventDefault();
    props.onEditClick({
      name: event.target.kegName.value,
      brand: event.target.kegBrand.value,
      price: parseFloat(event.target.kegPrice.value),
      abv: event.target.kegAbv.value,
      pints: event.target.kegPints.value,
      id: keg.id
    });
  }
  return (
    <React.Fragment>
      <KegForm
        formSubmissionHandler={handleEditTicketFormSubmission}
        buttonText="Save"
      />
    </React.Fragment>
  );
}

EditKegForm.propTypes = {
  keg: PropTypes.object,
  onEditClick: PropTypes.func
}

export default EditKegForm;