import React from "react";
import Container from "./layout/Container";
import Sidebar from "./layout/Sidebar";
import Content from "./layout/Content";
import Widgets from "./layout/Widgets";

function App() {
  return (
    <Container>
   <Sidebar></Sidebar>
  <Content></Content>
   <Widgets></Widgets>
   </Container>
  );
}

export default App;
