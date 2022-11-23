import React from "react";

const AddStudent = () => {
  return (
    <>
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-lg modal-dialog-centered">
          <div class="modal-content" style={{backgroundColor:"#D9D9D9"}}>
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel" style={{fontWeight:"700", color:"#000000", fontSize:"26px"}}>
                Add / Edit Student
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body d-flex flex-row justify-content-start">
              <div className="labels d-flex flex-column">
                <label className="my-3 font-weight-bold" htmlFor="name" style={{fontWeight:"600", color:"#000000"}}>Name</label>
                <label className="my-3 font-weight-bold" htmlFor="email" style={{fontWeight:"600", color:"#000000"}}>Email</label>
                <label className="my-3 font-weight-bold" htmlFor="phone" style={{fontWeight:"600", color:"#000000"}}>Phone</label>
                <label className="my-3 font-weight-bold" htmlFor="enroll" style={{fontWeight:"600", color:"#000000"}}>Enroll Number</label>
                <label className="my-3 font-weight-bold" htmlFor="Doa" style={{fontWeight:"600", color:"#000000"}}>Date of admission</label>
              </div>

              <div className="inputs d-flex flex-column">
                <input className="my-2 mx-5" type="text" name="name" id="name" style={{backgroundColor:"#D9D9D9", border:"0.1px solid #cccccc"}} />
                <input className="my-2 mx-5" type="text" name="email" id="email" style={{backgroundColor:"#D9D9D9", border:"0.1px solid #cccccc"}} />
                <input className="my-2 mx-5" type="text" name="phone" id="phone" style={{backgroundColor:"#D9D9D9", border:"0.1px solid #cccccc"}} />
                <input className="my-2 mx-5" type="text" name="enroll" id="enroll" style={{backgroundColor:"#D9D9D9", border:"0.1px solid #cccccc"}} />
                <input className="my-2 mx-5" type="text" name="Doa" id="Doa" style={{backgroundColor:"#D9D9D9", border:"0.1px solid #cccccc"}} />
              </div>
            </div>
            <div>
              <button
                type="submit"
                data-bs-dismiss="modal"
                class="add-student"
                style={{marginLeft:"200px", marginBottom:"55px", marginTop:"10px"}}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddStudent;
