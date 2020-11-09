import React, { useEffect, useState } from 'react';
import './App.css';
import Trees from './components/Trees';
import TreesLoadingComponent from './components/TreesLoadingComponent';


function App() {
  const TreesLoading = TreesLoadingComponent(Trees);
  const [appState, setAppState] = useState({
    loading: false,
    repos: null,
  });

  useEffect(() => {
    setAppState({ loading: true });
    const apiUrl = `https://zaidi-java-001.herokuapp.com/`;
    fetch(apiUrl)
      .then((res) => res.json())
      .then((repos) => {
        setAppState({ loading: false, repos: repos });
      });
  }, [setAppState]);

  return (
    <div className="App">
      <h2 className='list-head'>List of New Zealand Trees</h2>
      <div className='repo-container'>
        <TreesLoading isLoading={appState.loading} repos={appState.repos} />
      </div>
      <footer>
        <div className='footer'>
          By Jacob Zaidi, NZ 
        </div>
      </footer>
    </div>
  );
}

export default App;
