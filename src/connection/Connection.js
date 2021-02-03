import React, { Component } from 'react';

export default class Connection extends React.Component {

    onConnect() {
		return 0;
    }

    render() {
      return (
        <div>
            <h1>Il faut d'abord vous connecter !</h1>
            <input type="text" placeholder="Identifiant" id="username" />
            <input type="password" placeholder="Mots de Passe" id="password" /> 
            <button onclick="onConnect()">Let's go !</button>
        </div>
      );
    }
}