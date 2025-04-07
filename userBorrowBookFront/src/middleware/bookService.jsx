import React, { createContext, useContext } from "react";
import axios from "axios";

// Base URL for the mock API
const API_BASE_URL = "http://localhost:8080/api/v1";

const BookService = {
  getAllBooks: async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/books`);
      return response.data;
    } catch (error) {
      console.error("Error retrieving books:", error);
      throw error;
    }
  },

  createBook: async (book) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/books`, book);
      return response.data;
    } catch (error) {
      console.error("Error creating book:", error);
      throw error;
    }
  },

  updateBook: async (bookId, book) => {
    try {
      const response = await axios.put(`${API_BASE_URL}/books/${bookId}`, book);
      return response.data;
    } catch (error) {
      console.error("Error updating book:", error);
      throw error;
    }
  },

  deleteBook: async (bookId) => {
    try {
      const response = await axios.delete(`${API_BASE_URL}/books/${bookId}`);
      return response.data;
    } catch (error) {
      console.error("Error deleting book:", error);
      throw error;
    }
  },
};

// create the context, named it and craete context
const BookServiceContext = createContext(BookService);

// create the custom hook
export const useBookService = () => {
     useContext(BookServiceContext);
};

// use useContext to access data


// provider: name it, add value, wrapped it, do not forget the children
// (children ) => {  <> {children}  </>  }
export const BookServiceProvider = ({ children }) => (
  <BookServiceContext.Provider  value = {BookService}>

  {children}
  </BookServiceContext.Provider>

);


export default BookService;
