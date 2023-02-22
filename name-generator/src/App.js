import './App.css';
import GetName from './components/getName';

function App() {

  return (
    <div>
      <h1>Hello</h1>
      <span><GetName /></span>
    </div>
  );
}

export default App;


// Korisnik u polje na ekranu upisuje bilo koje ime, imena koja su upisana se spremaju u cash, 
// program korisniku nudi da dovrši ime ako ono postoji u memoriji.
// Korisniku se na ekranu prikazuje kojeg je spola upisano ime.Ako je spol muški pozadina se ofarba u crveno, 
// a ako je ženski pozadina se pofarba u zeleno.
// Korisniku se prikazuje graf s postotkom muških i ženskih imena odabranih u prošlosti.
// API key: d10fcce41e8fb0a55f1d64a4ce1fcef4-user1
// https://www.nameapi.org/
