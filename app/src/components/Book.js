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

import "../App.css";

const theme = {
  ...DefaultTheme,
  fontFamily: {
    
    primary: `'Lato', sans-serif;`
  }
};

function Book(props) {
  const [rating, setRating] = useState(3);

  let markup = [];

  for (let i = 1; i <= 5; i++) {
    markup.push(
      <Icon
        onClick={() => setRating(i)}
        name="StarSolid"
        cursor="pointer"
        size="30px"
        color={rating >= i ? "warning700" : "gray800"}
      />
    );
  }

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
              {props.author}
            </Text>
          </Div>
          <Div d="flex" justify="space-between" p={{ t: "1rem", b: "1.5rem" }}>
            <Div>
              <Text textSize="caption" textColor="dark">
                {props.genre}
              </Text>
              <Text textSize="caption" textColor="light">
                {props.isbn}
              </Text>
            </Div>
            <Div>
              <Div d="flex" h="20px">
                {[1, 2, 3, 4, 5].map(num => (
                  <Icon
                    key={num}
                    name="StarSolid"
                    size="14px"
                    color={num > props.rating ? "gray400" : "info700"}
                    m={{ r: "0.125rem" }}
                  />
                ))}
              </Div>
              <Text textSize="caption" textColor="light">
                Rated: {props.rating}/5
              </Text>
            </Div>
          </Div>
          
        </Div>
      </Div>
    </ThemeProvider>
  );
}


export default Book;