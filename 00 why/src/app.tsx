import * as React from 'react';
import * as ReactDOM from 'react-dom';

/**
 * 
 * TYPESCRIPT
 * declared props (in the component signature) are REQUIRED
 * If you don't pass all required props in an instantiation, you'll get an error
 * You will get autofill on component names, AND names of props inside the component
 * Misspelling either will give you an error
 * 
 */

//these are REQUIRED props (passed in)
const Hello = (props: { compiler: string, framework: string }) => {
  return (
    <div>
      {/*props used in the component will have names autofilled when instantiating*/}
      <div>{props.compiler}</div>
      <div>{props.framework}</div>
    </div>
  );
}

ReactDOM.render(
  <Hello compiler="TypeScript" framework="React" />,
  document.getElementById("root")
);