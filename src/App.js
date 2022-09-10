import './App.css';
import { useState, useEffect} from 'react'
import Gallery  from './Gallery';
import ButtonBar from './buttonBar';

function App() {

  let [artId, setArtId] = useState(12720)
  let [data, setData] = useState( {} )
  useEffect(() =>{
  document.title = 'Welcome to ArtWorld'
  fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${artId}`)
  .then(response => response.json())
  .then(resData => setData(resData))
}, [artId])

const handleIterate = (e) => {
  setArtId(artId + Number(e.target.value))
}
  return (
    <div className="App">
      <header className="App-header">
        <Gallery objectImg={data.primaryImage} artist={data.artistDisplayName} title={data.title} />
        <ButtonBar />
      </header>
    </div>
  );
}

export default App;
