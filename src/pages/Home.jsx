import React, { useState } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../config/firestore";

function Home() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();

    if (firstname && lastname) {
      const querySnapshot = await getDocs(collection(db, "users"));
      const users = querySnapshot.docs.map((doc) => doc.data());

      let userExists = false;

      for (var i = 0; i < users.length; i++) {
        const user = users[i];
        if (user.firstname === firstname && user.lastname === lastname) {
          userExists = true;
          break;
        }
      }

      if (userExists) {
        navigate(`/profile?firstname=${firstname}&lastname=${lastname}`);
      } else {
        Swal.fire({
          icon: "error",
          title: "Erreur",
          text: `${firstname} ${lastname} n'existe pas.`,
        });
      }
    }
  };
  return (
    <div id="homeContainer">
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
    </div>
  );
}
export default Home;
