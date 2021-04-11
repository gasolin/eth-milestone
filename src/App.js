// import logo from './logo.svg';
import { Gitgraph } from "@gitgraph/react";
import { milestones, simplified, createFixedHashGenerator } from './milestones'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Gitgraph options={{
          orientation: "vertical",
          template: simplified,
          generateCommitHash: createFixedHashGenerator(),
        }}>{milestones}</Gitgraph>
      </header>
      {/* <footer><a
          className="App-link"
          href="https://en.wikipedia.org/wiki/Ethereum#Launch_and_milestones"
          target="_blank"
          rel="noopener noreferrer"
        >
          Wikipedia as Reference
        </a>
      </footer> */}
    </div>
  );
}

export default App;
