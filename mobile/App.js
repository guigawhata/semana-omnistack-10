import React from 'react';
import { StatusBar, YellowBox } from 'react-native';
import Routes from './src/routes';

YellowBox.ignoreWarnings([
  'Unrecognized WebSocket connection option(s) `agent`, `perMessageDeflate`, `pfx`, `key`, `passphrase`, `cert`, `ca`, `ciphers`, `rejectUnauthorized`. Did you mean to put these under `headers`?'
])

export default function App() {
  return (
    <>
    <StatusBar barStyle="light-content" backgroundColor="#108ac7"/>
    <Routes />
    </>
  );
}

