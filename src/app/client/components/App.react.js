import * as React from 'react';
import LinkItem from './LinkItem.react';
import Messages from './Messages';

function App(props) {
  return (
    <div>
      <h1>SVZ</h1>
      <ul>
        <LinkItem to="/">
          Main
        </LinkItem>
        <LinkItem to="/foo">
          foo
        </LinkItem>
        <LinkItem to="/Messages">
          Messages
        </LinkItem>
      </ul>
      {props.children}
    </div>
  );
}

export default App;
