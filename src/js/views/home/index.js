import React, { useEffect } from "react";

import TestPNG from "../../../assets/static/test.png";
import Input from "../../components/input";
function Home() {
  const form = {
    test: "1231"
  };
  useEffect(() => {
    console.log("useEffect work");
  });
  return (
    <div>
      <Input value={form.test}></Input>
      <div>{form.test}</div>
      <h1>Hello Home</h1>
      <img src={TestPNG} alt="test" />
    </div>
  );
}
export default Home;
