import React from 'react';
import App from './client/components/App.react';
import Messages from './client/components/Messages';
import SingleMessage from './client/components/SingleMessage';

const Foo = ({ props }) => (
  <div>foo</div>
);

export default [
  {
    path: '/',
    Component: App,
    children: [
      {
        Component: () => <div>Main</div>,
      },
      {
        path: 'foo',
        getComponent: Foo,
      },
      {
        path: 'Messages',
        Component: Messages,
      },
      {
        path: 'Messages/:id',
        Component: SingleMessage
      }
    ],
  },
];
