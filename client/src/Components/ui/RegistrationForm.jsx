import React from "react";
import { Container, Row } from "react-bootstrap";
import { TextField, Button, Box } from "@mui/material";

const RegistrationForm = (props) => {
  function submitHandler(event) {
    event.preventDefault();

    const formData = event.currentTarget.elements;

    const name = formData.name.value;
    const email = formData.email.value;
    const password = formData.name.value;
    const password2 = formData.password2.value;
    const designation = formData.designation.value;
    const phone = formData.phone.value;
    const qualification = formData.qualification.value;
    const gauthor_id = formData.gauthor_id.value;
    const contact_detail = formData.contact_detail.value;
    const profile_img = formData.profile_img.value;

    const facultyData = {
      name: name,
      email: email,
      profile_img:profile_img,
      password: password,
      designation: designation,
      phone: phone,
      qualification: qualification,
      gauthor_id: gauthor_id,
      contact_detail: contact_detail,
    };

    // console.log(facultyData);

    props.onRegistration(facultyData);
    alert("Registration Successfull");
  }

  return (
    <Container className="container" style={{ height: "1000px" }}>
      {/* <Row className="justify-content-md-center"> */}
      <Box
      mx={{
        display: 'flex',
        alignItems: 'center',
        '& > :not(style)': { m: 1 },
      }}
    >
        <form onSubmit={submitHandler}>
          <div>
            <TextField
              id="name"
              name="name"
              size="small"
              label="Name"
              variant="outlined"
            />
            <TextField
              id="email"
              name="email"
              size="small"
              label="Email"
              type="email"
              variant="outlined"
            />
          </div>

          <div>
            <TextField
              id="password"
              name="password"
              size="small"
              label="Password"
              type="password"
              variant="outlined"
            />
            <TextField
              id="password2"
              name="password2"
              size="small"
              type="password"
              label="Confirm Password"
              variant="outlined"
            />
          </div>

          <div>
            <TextField
              id="designation"
              name="designation"
              label=" designation"
              variant="outlined"
            />
            <TextField
              id="phone"
              name="phone"
              label=" Phone"
              variant="outlined"
            />
          </div>
          <TextField
            id="qualification"
            name="qualification"
            label=" Qualification"
            variant="outlined"
          />
          <TextField
            id="gauthor_id"
            name="gauthor_id"
            label=" Google Author Id"
            variant="outlined"
          />

          <TextField
            id="contact_detail"
            name="contact_detail"
            label=" Contact Details"
            variant="outlined"
          />
          <TextField
            id="profile_img"
            name="profile_img"
            label=" Profile Image"
            variant="outlined"
          />

          <div>
            <Button variant="contained" type="submit">
              Submit
            </Button>
          </div>
        </form>
      {/* </Row> */}
      </Box>
    </Container>
  );
};

export default RegistrationForm;
