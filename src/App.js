import React, { Component } from 'react';
import { Carousel,
          Dropdown,
          Form,
          InputGroup,
          Image,
          Figure,
          Jumbotron,
          ListGroup,
          Modal,
          Breadcrumb,
          Container,
          Row,
          Col,
          Button}
          from 'react-bootstrap';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
        statusShow : false
    };
    this.handleShow = this.handleShow.bind(this);
  }

  handleShow(){
    this.setState((state, props)=>{
      return {statusShow: !state.statusShow};
    });
  }


  render(){
    return(
        <Container>
        <Row>
          <Col style={{backgroundColor:"black"}}>
            <Dropdown>
              <Dropdown.Toggle variant="primary">Pilih Bahasa</Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item>Indonesia</Dropdown.Item>
                <Dropdown.Item>Inggris</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>

          <Col xs={6} md={2} style={{backgroundColor:"black"}}>
            <Image src="https://png.pngtree.com/svg/20161113/ef1b24279e.png" width={64} height={64} roundedCirle/>
            <p style={{color:"white"}}>Alan Saputra</p>
          </Col>
        </Row>

        <br/>
        <Breadcrumb>
          <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
          <Breadcrumb.Item href="/">Berita</Breadcrumb.Item>
          <Breadcrumb.Item href="/" active>Bola</Breadcrumb.Item>
        </Breadcrumb>

          <br/>
          <Carousel>
            <Carousel.Item>
              <img className="d-blok w-100" src="https://images.performgroup.com/di/library/GOAL/30/f0/neymar-psg-paris-saint-germain-2018-19_gmakk5891n9c19udcwofmrsgc.jpg?t=-1258742791&quality=60&w=1600"
                alt="Bola 1"/>
            </Carousel.Item>

            <Carousel.Item>
              <img className="d-blok w-100" src="https://images.performgroup.com/di/library/GOAL/63/7f/sani-rizki-fauzi-indonesia-u-22_4yztc4nehkt61fa7omuyagf71.jpg?t=351764441&quality=60&w=1600"
                alt="Bola 3"/>
            </Carousel.Item>

            <Carousel.Item>
              <img className="d-blok w-100" src="https://images.performgroup.com/di/library/GOAL/f3/33/england-celebrate-vs-montenegro_e97kv5anpqlq1gr9nc2qaz4ko.jpg?t=-1232521935&quality=60&w=1600"
                alt="Bola 2"/>
              <Carousel.Caption>
                <h3>Inggris Mau Jadi Tim Terbaik Di Dunia</h3>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>

          <br/>
          <Row>
            <Col>
              <ListGroup>
                <ListGroup.Item active>Liga 1 Indonesia</ListGroup.Item>
                <ListGroup.Item>Liga Primer Inggris</ListGroup.Item>
                <ListGroup.Item>Divisi Primera</ListGroup.Item>
                <ListGroup.Item>Serie A</ListGroup.Item>
                <ListGroup.Item>Ligue 1</ListGroup.Item>
                <ListGroup.Item>Bundes Liga</ListGroup.Item>
              </ListGroup>
            </Col>

            <Col md={6}>
              <Jumbotron>
                <h1>Divisi Primera</h1>
                <p>Main Untuk Catalunya, Gerard Pique Minta Dihormati</p>
                <Button variant="primary">Read More</Button>
              </Jumbotron>
            </Col>

            <Col>
              <Figure>
                <Figure.Image width={64} height={64} alt="Gambar Orang" src="https://img.icons8.com/dusk/64/000000/circled-user-male-skin-type-5.png"/>
                <Figure.Caption>
                  <h3>Silahkan Login</h3>
                </Figure.Caption>
              </Figure>

              <InputGroup className="mb-3">
                <Form>
                  <Form.Group>
                    <Form.Control type="email" placeholder="Masukan Email"/>
                  </Form.Group>

                  <Form.Group>
                    <Form.Control type="password" placeholder="Password"/>
                  </Form.Group>

                  <Form.Group>
                    <Form.Check type="checkbox" label="Term & Condition"/>
                  </Form.Group>

                  <Button variant="primary" onClick={this.handleShow}>Login</Button>
                </Form>
              </InputGroup>
            </Col>
          </Row>

          <Modal show={this.state.statusShow}>
            <Modal.Header closeButton>
              <Modal.Title>Login</Modal.Title>
            </Modal.Header>
            <Modal.Body>Anda Berhasil Login</Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={this.handleShow}>
                Close
              </Button>
              <Button variant="primary" onClick={this.handleShow}>
                Save Username & Password
              </Button>
            </Modal.Footer>
          </Modal>
        </Container>
    );
  }
}

export default App;
