import React, { useState } from "react";
import ReactDOM from "react-dom";
import {
  Button,
  Div,
  Icon,
  Text,
  Image,
  ThemeProvider,
  DefaultTheme,
  StyleReset
} from "atomize";
import Book from './components/Book.js';

import User from './components/User.js';
import "./App.css";

const theme = {
  ...DefaultTheme,
  fontFamily: {
    
    primary: `'Lato', sans-serif;`
  }
};


function App() {
  

  return (
    <Div>
      <User name="Sneha Kadiyala" userid = "123456"/>
      <Book name="Harry Potter and the Sorceror's Stone" author ="J.K. Rowling" isbn ="1234567890" genre="Young Adult" rating={5} />
      <Book name="The Testing" author ="Your Mom" isbn ="1234567890" genre="Young Adult" rating={3} />
    </Div>
  );
}


export default App;
