import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from "./App";
import { BookServiceProvider } from './middleware/bookService';


createRoot(document.getElementById("root")).render(
  <BookServiceProvider>
    <StrictMode>
      <App />
    </StrictMode>
  </BookServiceProvider>
);
