import React, {useState} from 'react';

import './App.css';
import Saludos from './Saludos';
import Counter from './Counter';
import Saludosv2 from './Saludosv2';
import TaskList from './components/TaskList';

function App() {
  const [nombre, setNombre] = useState('');

  const styles = {
    container: {
      maxWidth: '28rem',
      margin: '0 auto',
      padding: '1.5rem',
    },
    inputContainer: {
      marginBottom: '1.5rem',
    },
    input: {
      width: '100%',
      padding: ' 0.5rem 1rem',
      border: '1px solid #e5e7eb',
      borderRadius: '0.25rem'
    }
  };

  return (
    <>
      <header className="App-header">
        <div style={styles.container}>
          <div style={styles.inputContainer}>
          <TaskList />
          </div>
        </div>
      </header>
      <main>
        
      </main>
      <footer>

      </footer>
    </>
  );
}

export default App;
