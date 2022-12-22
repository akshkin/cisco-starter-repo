import './App.css';
import Banner from './components/banner/banner';
import Exhibit from './components/exhibit/exhibit';
import UserIP from './components/userIP';

function App() {
  return (
    <div className="App">
      <Banner />
      <Exhibit>
        <UserIP address="ipv4" />
      </Exhibit>
      <Exhibit>
        <UserIP address="ipv6"/>
      </Exhibit>
    </div>
  );
}

export default App;
