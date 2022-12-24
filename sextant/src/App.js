import './App.css';
import Banner from './components/banner/banner';
import Exhibit from './components/exhibit/exhibit';
import PacketLatency from './components/packetLatency';
import UserIP from './components/userIP';

function App() {
  return (
    <div className="App">
      <Banner />
      <Exhibit title="IPv4">
        <UserIP address="ipv4" />
      </Exhibit>
      <Exhibit title="IPv6">
        <UserIP address="ipv6"/>
      </Exhibit>
      <Exhibit title="Packet Latency">
        <PacketLatency />
      </Exhibit>
    </div>
  );
}

export default App;
