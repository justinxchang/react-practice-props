import React, { Component } from "react";
import "./App.css";
import PokeDisplay from "./components/pokeDisplay/PokeDisplay";
import UserInput from "./components/userInput/UserInput";

export default class App extends Component { 
  constructor(){
    super()

    this.state = {
      nameInput: '',
      imageInput: '',
      pokemon: [],

    }
    this.handleNameInput = this.handleNameInput.bind(this)
    this.handleImageInput = this.handleImageInput.bind(this)
    this.createPokemon = this.createPokemon.bind(this)
  }

  createPokemon(){
    const {nameInput, imageInput} = this.state
    const newPokemon = {name: nameInput, image: imageInput} 
    //this part was a little confusing ^

    this.setState({pokemon: [...this.state.pokemon, newPokemon] })
  }

  handleNameInput(event) {
    this.setState({
      nameInput: event.target.value
    })
  }

  handleImageInput(event) {
    this.setState({
      imageInput: event.target.value
    })
  }


  
  render ( ) {
    console.log(this.state)
    
    let pokemon = this.state.pokemon.map(poke => {
      return <PokeDisplay name1={poke.name} image1={poke.image}/>
    })

    return (
      <div className="app--component">
        <h3> Pokemon Catch 'em All </h3>
        <UserInput 
        handleNameInput1={this.handleNameInput} 
        handleImageInput1={this.handleImageInput}
        createPokemon1={this.createPokemon}
        />
        <section className="users--container">
          {/* ---pokemon will go here--- */}
          {pokemon}
          {/* <PokeDisplay/>      we can remove PokeDisplay and just put {pokemon} instead because.....?*/}
          
        </section>
      </div>
    );
  }
}

// event.target.name1 is in square brackets because it is the key of an object

//we write the createPokemon method on App.js because we want to change the state on App.js. Even though the submit button is in UserInput. We can pass the result of the method down as a prop?

// [...this.state.pokemon] takes the 