import * as React from 'react';
import * as ReactDOM from 'react-dom';

/**
 * 
 * If you want to use a prop, you MUST declare it in the TYPE, 
 * and then in the function parentheses
 
 * You declare the property types in the TYPE
 * The parentheses bit is normal JS
 
 * If you want the prop to be optional, add in the interface with ?
 * 
 * Type and interace are similar. 
 * Interface always introduces a named object literal 
 * Interface can be used in "extends" or "implements" clauses, type cannot
 * type can be used for objects, promitive, unions, intersections
 * 
 * I think we can only use type here because React.SFC expects a type
 * 
 */

type AppProps = {message?:string};

const App:React.SFC<AppProps> = ({message}) => {
    return (<div>{message}</div>);
}

ReactDOM.render(
    <App message={'Hi there'}/>,
    document.getElementById('root')
);