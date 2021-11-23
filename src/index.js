import React from "react";
import ReactDOM from "react-dom";
import $ from "jQuery";

function UploadForm() {
  const upload = () => {
    var form = $("form")[0];
    var formData = new FormData(form);
    $.ajax({
      type: "POST",
      url: "http://localhost:8080/add",
      data: formData,
      contentType: false,
      processData: false,
      success: function (data) {
        alert(data);
      }
    });
  };

  return (
    <>
      <p style={{ color: "blue" }}>Add Employee details</p>
      <form autoComplete="off">
        <input type="text" name="name" id="name" size={50} placeholder="Name" />
        <br />
        <input
          type="text"
          name="eid"
          id="eid"
          size={50}
          placeholder="Employee Id"
        />
        <br />
        <input
          type="text"
          name="dep"
          id="dep"
          size={50}
          placeholder="Department"
        />
        <br />
        <input
          type="text"
          name="des"
          id="des"
          size={50}
          placeholder="Designation"
        />
        <br />
        Upload Aadhar <input type="file" name="aad" id="aad" size={50} />
        <br />
        Upload Pancard
        <input type="file" name="pan" id="pan" size={50} />
        <br />
      </form>
      <br />
      <button onClick={upload} style={{ backgroundColor: "lightgreen" }}>
        Add Employee [ /add ]
      </button>
      <br />
      <br />
    </>
  );
}
ReactDOM.render(<UploadForm />, document.getElementById("frm"));

function GetFiles() {
  const getfiles = () => {
    document.getElementById("prof").src =
      "http:localhost:8080/getAad/" + document.getElementById("id").value;
    document.getElementById("ad").href =
      "http:localhost:8080/getAad/" + document.getElementById("id").value;
    document.getElementById("pn").href =
      "http:localhost:8080/getPan/" + document.getElementById("id").value;
    $.ajax({
      type: "GET",
      url:
        "http://localhost:8080/getEmp/" + document.getElementById("id").value,
      dataType: "text",
      success: function (response) {
        document.getElementById("emp").innerHTML = response;
      }
    });
  };
  return (
    <>
      <p style={{ color: "blue" }}>Enter Employee ID to get details</p>
      <input
        type="text"
        id="id"
        onChange={getfiles}
        size={50}
        placeholder="Enter Employee ID"
      />
      <br />
      <p>Employee Details : [ /getEmp/eid ]</p>
      <p id="emp" />
      <p>Employee Addhar (Picture display) : [ /getAad/eid ]</p>
      <img id="prof" />
      <br />
      <p>Employee Addhar (PDF download) : [ /getAad/eid ]</p>
      <a id="ad">Download Aaadhar</a>
      <br />
      <p>Employee Pancard (PDF download) : [ /getPan/eid ]</p>
      <a id="pn">Download Pan</a>
    </>
  );
}
ReactDOM.render(<GetFiles />, document.getElementById("getEm"));

function DeleteAll() {
  const del = () => {
    $.ajax({
      type: "GET",
      url: "http://localhost:8080/delAll",
      success: function (data) {
        alert("Cleared!!");
      }
    });
  };

  return (
    <>
      <button oncClick={del} style={{ backgroundColor: "lightblue" }}>
        Clear Database [ /delAll ]
      </button>
    </>
  );
}
ReactDOM.render(<DeleteAll />, document.getElementById("delEm"));
