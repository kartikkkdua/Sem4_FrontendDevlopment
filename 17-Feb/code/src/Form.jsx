import { useState } from "react";
function Form() {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Name:", name);
  };

  return (
    <div className="App">
      <h1>Enter Your Name</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Form;
