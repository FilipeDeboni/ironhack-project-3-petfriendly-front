
  return (
    <div className="">
      <div className="header">
        <div className="header-left">
          <img src={Logo} alt="Pet Friendly logo" className="header-left" />
        </div>
        <div className="header-middle">
        <Button variant="primary" onClick={changeTab} id="home">

          <i className="header-option header-option-active fas fa-home"></i>
          </Button>
          <Button variant="primary" onClick={changeTab} id="home">
          <i className="header-option header-option-active fas fa-clone"></i>
          </Button>
          <Button variant="primary" onClick={changeTab} id="home">
          <i className="header-option header-option-active fas fa-user-cog"></i>
          </Button>
        </div>
        <div className="header-right">
        <Button variant="primary" onClick={handleLogout}>

          {/* <a className="text-decoration-none" href="/"> */}
            <i className="logout-button fas fa-sign-out-alt" href="/logout"></i>
          {/* </a> */}
          </Button>
        </div>
      </div>

      <div className="profile-columns pt-3">
        <div className="profile-columns-padding">
          {/* Profile section */}

          <Card className="profile-leftdiv-size" border="secondary">
            <Card.Body className="div-profile">
              <div className="profile-img-name">
                <Card.Img
                  className="profile-image"
                  variant="top"
                  src={user.image}
                />
                <Card.Title className="profile-name">{user.name}</Card.Title>
              </div>
              <div>
                <Card.Text className="profile-description">
                  {user.description}
                </Card.Text>
              </div>
            </Card.Body>
          </Card>
          <Card className="profile-leftdiv-size mt-3" border="secondary">
            <Card.Body>
              <Form>
                <Form.Group controlId="formGroupEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control size="sm" type="text" placeholder="Pet Name" />
                </Form.Group>
                <Form.Row>
                  <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Control
                      size="sm"
                      type="email"
                      placeholder="Especies"
                    />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridState">
                    <Form.Control size="sm" as="select" defaultValue="Male">
                      <option>Male</option>
                      <option>Female</option>
                    </Form.Control>
                  </Form.Group>
                </Form.Row>
                <Form.Group controlId="formBasicCheckbox">
                  <Form.Check type="checkbox" label="Avaiable for Adoption" />
                </Form.Group>
                <Button type="submit" className="mb-2">
                  Submit
                </Button>
              </Form>
            </Card.Body>
          </Card>
          <Card className="profile-leftdiv-size mt-3 mb-3" border="secondary">
            <Card.Body>
              <p>Friends</p>
            </Card.Body>
          </Card>
        </div>
        <div className="profile-columns-padding">
          <FeedCard feed={feed} />
        </div>
      </div>
    </div>
  );
}

export default Profile;
