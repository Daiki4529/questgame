import React, { useState } from "react";

function Home() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");

  const handleLogin = () => {
    if (firstname && lastname) {
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <p className="form_title">Connexion</p>
      <input
        type="text"
        name="firstname"
        id="firstname"
        placeholder="Prénom"
        value={firstname}
        onChange={(e) => setFirstname(e.target.value)}
        required
      />
      <input
        type="text"
        name="lastname"
        id="lastname"
        placeholder="Nom"
        value={lastname}
        onChange={(e) => setLastname(e.target.value)}
        required
      />
      <input type="submit" value="Se Connecter" />
      <div className="bg best"></div>
    </form>
  );
}
export default Home;
