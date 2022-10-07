import React, { Component } from "react";
import "./App.css";

export default class ListaTarefas extends Component {
  state = {
    tarefa: "",
    listaTarefas: []
  };

  buscarTarefa = (event) => {
    this.setState({
      tarefa: event.target.value
    });
  };

  add = () => {
    if (this.state.tarefa !== "" && !this.state.tarefa.match(/^[ \t]+$/)) {
      this.setState({
        listaTarefas: this.state.listaTarefas.concat({
          tarefa: this.state.tarefa,
          id: Date.now()
        }),
        tarefa: ""
      });
    }
  };

  addKey = (event) => {
    if (
      this.state.tarefa.length > 0 &&
      event.key === "Enter" &&
      !this.state.tarefa.match(/^[ \t]+$/)
    )
      this.setState({
        listaTarefas: this.state.listaTarefas.concat({
          tarefa: this.state.tarefa,
          id: Date.now()
        }),
        tarefa: ""
      });
  };

  remove = (id) => {
    this.setState({
      listaTarefas: this.state.listaTarefas.filter((item) => item.id !== id)
    });
  };

  render() {
    return (
      <div className="main-container">
        <h1>Lista de tarefas</h1>
        <div className="text">
          <input
            onChange={this.buscarTarefa}
            value={this.state.tarefa}
            onKeyPress={this.addKey}
          />
          <button onClick={this.add}>Adicionar</button>
        </div>
        {this.state.listaTarefas.map((item) => (
          <div className="tarefas">
            <p>{item.tarefa}</p>
            <button onClick={() => this.remove(item.id)}>
              <i class="fa-solid fa-trash"></i>
            </button>
          </div>
        ))}
      </div>
    );
  }
}
