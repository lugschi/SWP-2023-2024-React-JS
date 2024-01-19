import './App.css';
import Card from './components/Card';

function App() {
  return (
    <div className="father">
      <Card firstname="Hans" lastname="Zimmer" title="Investor" imageUri="https://picsum.photos/200/300"/>
      <Card firstname="Hans" lastname="Zimmer" title="Investor" imageUri="https://picsum.photos/201/300"/>
      <Card firstname="Hans" lastname="Zimmer" title="Investor" imageUri="https://picsum.photos/202/300"/>
      <Card firstname="Hans" lastname="Zimmer" title="Investor" imageUri="https://picsum.photos/203/300"/>
      <Card firstname="Hans" lastname="Zimmer" title="Investor" imageUri="https://picsum.photos/204/300"/>
      <Card firstname="Hans" lastname="Zimmer" title="Investor" imageUri="https://picsum.photos/205/300"/>
      <Card firstname="Hans" lastname="Zimmer" title="Investor" imageUri="https://picsum.photos/200/301"/>
      <Card firstname="Hans" lastname="Zimmer" title="Investor" imageUri="https://picsum.photos/200/302"/>
      <Card firstname="Hans" lastname="Zimmer" title="Investor" imageUri="https://picsum.photos/200/303"/>
    </div>
  );
}

export default App;
