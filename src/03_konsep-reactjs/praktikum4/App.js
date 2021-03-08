import logo from './logo.svg';
import './App.css';

function Kartu (props) {
  return <h1>Halo, {props.nim} - {props.nama}</h1>;
}

function App() {
  return (
    <div>
      <Kartu nim="1841720022" nama="Kinanti" />
      <Kartu nim="0000000000" nama="Rimuru" />
      <Kartu nim="0019820710" nama="Tae-sul" />
    </div>
  );
}

export default App;