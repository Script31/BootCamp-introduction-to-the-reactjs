import React, { Component } from 'react';
import TechItem from './TechItem';
import { stringify } from 'querystring';

export default class TechList extends Component {
  

  state = {
    newTech: '',
    techs: []
  };

  //Ciclo de vida de um componente; os 3 mais comuns sao:

  // componentDidMount => Executa assim que o componente aparece em tela
  componentDidMount() {
    const techs = localStorage.getItem('techs');
    if(techs) {
      this.setState({ techs: JSON.parse(techs)})
    }
    
  }

  // componentDidUpdate => Executado sempre que houver alteracoes nas props
  // ou estado

  componentDidUpdate(_, prevSate) {
    if(prevSate.techs !== this.state.techs) {
      localStorage.setItem('techs', JSON.stringify(this.state.techs))
    }
  }
  
  //componentWillUmMount() => Executado quando o componente deixa de Existir
  componentWillMount() {

  } 

  handleInputChange = e => {
    this.setState({ newTech: e.target.value })

  }
  handleSubmit = e => {
    e.preventDefault();

    this.setState({ techs: 
      [ ... this.state.techs, this.state.newTech],
      newTech: ''
    })
    
  }
  handleDelete = (tech) => {
    this.setState({ techs: this.state.techs.filter(t => t !== tech)})
  }

  render() {
    
    return (
      
      <form onSubmit= { this.handleSubmit }>
      
      <ul>
       { this.state.techs.map(tech => 
       <TechItem  
       key={tech} 
       tech={tech} 
       onDelete={ () => this.handleDelete(tech) }
       />)
      }
      </ul>
      <input 
      type="text" 
      onChange={this.handleInputChange}
      value={this.state.newTech }
      placeholder="Digite uma tecnologia"
      />
      <button type="submit"> Enviar</button>

    </form>
  
    )
  }
}