import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";

function Home() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");

  const navigate = useNavigate();
  const handleLogin = () => {
    if (firstname && lastname) {
      navigate("/profile");
      alert(`${firstname} ${lastname} a tenté de se connecter en vain.`);
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
