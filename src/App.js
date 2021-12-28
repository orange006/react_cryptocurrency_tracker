import axios from 'axios';
import './App.css';

function App() {
  return (
    <div>
      <div className='header'>
        <h1 className='brand'>
          <i class="fab fa-bitcoin"></i> CryptoTracker
        </h1>

        <form>
          <input className='inputField' placeholder='Search a coin' type='text' />
        </form>
      </div>
    </div>
  );
}

export default App;
