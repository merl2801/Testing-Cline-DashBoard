import React from 'react';
import { createRoot } from 'react-dom/client';
import TaskApp from './src/TaskApp';

// Get the root element
const container = document.getElementById('root');
const root = createRoot(container);

// Render the TaskApp component
root.render(
  <React.StrictMode>
    <TaskApp />
  </React.StrictMode>
);
