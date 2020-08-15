import React, { useState } from "react";
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

import "../App.css";



const theme = {
  ...DefaultTheme,
  fontFamily: {
    
    primary: `'Lato', sans-serif;`
  }
};

function User(props) {
  

  return (
    <ThemeProvider theme={theme}>
      <StyleReset />

      <link
        href="https://fonts.googleapis.com/css?family=Lato:300,400,700&display=swap"
        rel="stylesheet"
      />
      <Div m="3rem" p={{ b: "1rem" }}>
        <Div bg="white" shadow="4" rounded="xl" m={{ b: "1rem" }} p="1.5rem">
          <Div
            border={{ b: "1px solid" }}
            borderColor="gray300"
            p={{ b: "0.75rem" }}
          >
            <Text textSize="title" textWeight="500">
              {props.name}
            </Text>
            <Text textSize="caption" textColor="light">
              User ID: {props.userid}
            </Text>
          </Div>
          
          <Button
            rounded="lg"
            bg="info700"
            hoverBg="info800"
            w="100%"
            textWeight="500"
          >
            See All Books
          </Button>
        </Div>
      </Div>
    </ThemeProvider>
  );
}


export default User;