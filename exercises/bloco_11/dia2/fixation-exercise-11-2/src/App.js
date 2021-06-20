import './App.css';
import Image from './Image';
import catImage from './images/cat.jpg';

function App() {
  return ( 
    <Image source={catImage} alternativeText='Cute cat staring' />
  );
}

export default App;