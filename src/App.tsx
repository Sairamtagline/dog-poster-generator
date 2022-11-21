import { lazy, Suspense } from 'react';
import './App.css';
const BreedGeneration = lazy(() => import('./pages/BreedGeneration'));

function App() {
  return (
    <div className="App">
      {/* <header className="App-header"> */}
      <Suspense fallback={<div>Loading...  Please wait</div>}>
        <BreedGeneration />
      </Suspense>
      {/* </header> */}
    </div>
  );
}

export default App;
