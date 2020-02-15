import React from 'react';
import ListWrestlers from './list-wrestlers';
import { WrestlerProvider } from './context//wrestler-context';
import './styles.css';

export default function App() {
  return (
    <WrestlerProvider>
      <ListWrestlers />
    </WrestlerProvider>
  );
}
