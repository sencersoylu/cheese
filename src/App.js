import React from "react";
import Layout from "../src/Components/Layout/Layout";
import CheeseApi from "../src/Containers/CheeseApi";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Layout>
        <CheeseApi />
      </Layout>
    </div>
  );
}
