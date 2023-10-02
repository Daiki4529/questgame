import React from "react";

function Home() {
  return (
    <form>
      <p className="form_title">Connexion</p>
      <input type="text" name="firstname" id="firstname" placeholder="Prénom" />
      <input type="text" name="lastname" id="lastname" placeholder="Nom" />
      <input type="submit" value="Se Connecter" />
      <div className="bg best"></div>
    </form>
  );
}
export default Home;
