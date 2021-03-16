import './App.css';

import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import {
  Navbar,
  Nav
} from "react-bootstrap";

function Beranda () {
  return <h2>Beranda</h2>;
}

function DaftarArtikel(props){
  return(
    <div key={props.key}>
      <h3>{props.judul}</h3>
      <div>{props.isiArtikel}</div>
    </div>
  );
}

class Berita extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,         // jika terjadi gagal ambil data dari API
      isLoaded: false,     // untuk status ketika sedang memuat
      dataArtikel: []      // untuk menampung data API
    };
  }

  // ... isi method selanjutnya di sini ...
  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(response => response.json())
      .then(
        (dataJson) => {
          this.setState({
            isLoaded: true,
            dataArtikel: dataJson
          })
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        })
  }

  render () {
    const { error, isLoaded, dataArtikel } = this.state;

    if (error) {
      return <div>Terjadi galat: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Sedang memuat...</div>;
    } else {
      return (
        <div>
          <h2>Daftar Artikel</h2>
          {
            dataArtikel.map(artikel => {
              return <DaftarArtikel key={artikel.id} judul={artikel.title} isiArtikel={artikel.body}/>
            })
          }
        </div>
      );
    }
  }
}

function Tentang () {
  return (
  <div>
      <h2>Tentang</h2>
      <h3>NIM: 1841720022</h3>
      <h3>Nama: Kinanti Permata Putri</h3>
  </div>
  );
}

function Topik () {
  let { topicId } = useParams();
  return <h3>Topik yang terpilih: {topicId}</h3>;
}

function Codelabs () {
  let match = useRouteMatch();

  return (
    <div>
      <h2>Codelabs</h2>
      <ul>
        <li>
          <Link to={`${match.url}/konsep-reactjs`}>Konsep ReactJS</Link>
        </li>
        <li>
          <Link to={`${match.url}/belajar-react-router`}>
            Belajar React Router
          </Link>
        </li>
      </ul>

      {/* Pada halaman Codelabs ini memiliki <Switch> sendiri dengan beberapa route lagi
          di dalam URL /codelabs . Pada bagian route kedua merupakan route default atau
          jika tidak satu pun link topik dipilih. */}
      <Switch>
        <Route path={`${match.path}/:topicId`}>
          <Topik />
        </Route>
        <Route path={match.path}>
          <h3>Silakan Pilih Topik Codelab yang tersedia.</h3>
        </Route>
      </Switch>
    </div>
  );
}

export default function App () {
  return (
    <Router>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link> <Link to="/">Beranda</Link> </Nav.Link>
            <Nav.Link> <Link to="/berita">Berita</Link> </Nav.Link>
            <Nav.Link> <Link to="/tentang">Tentang</Link> </Nav.Link>
            <Nav.Link> <Link to="/codelabs">Codelabs</Link> </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Switch>
          <Route path="/berita">
            <Berita />
          </Route>
          <Route path="/tentang">
            <Tentang />
          </Route>
          <Route path="/codelabs">
            <Codelabs />
          </Route>
          <Route path="/">
            <Beranda />
          </Route>
        </Switch>
    </Router>
  );
}