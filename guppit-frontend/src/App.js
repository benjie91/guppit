import React from 'react';
import Navigation from './components/navigation/Navigation'

function App() {
  return (
    <React.Fragment>
      <Navigation />
      <div id={'page-wrapper'} className={"gray-bg"}>
        <div className={'row border-bottom'}></div>
        <div className={'wrapper wrapper-content'}></div>

      </div>
        <div id="right-sidebar" className="">

        </div>
    </React.Fragment>
  );
}

export default App;
