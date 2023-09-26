import React, { Component } from "react";

class App extends Component {
  render() {
    return (
      <div id="log_in">
        <form>
          <p className="form_title">Connexion</p>
          <input
            type="text"
            name="firstname"
            id="firstname"
            placeholder="Prénom"
          />
          <input type="text" name="lastname" id="lastname" placeholder="Nom" />
          <input type="submit" value="Se Connecter" />
          <div className="bg best"></div>
        </form>
      </div>
    );
  }
}

export default App;
