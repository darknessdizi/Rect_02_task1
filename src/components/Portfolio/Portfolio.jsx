import { Component } from "react";
import { createFilters, findProject } from './createFilters';
import { Toolbar } from "../Toolbar/Toolbar";
import { ProjectList } from "../ProjectList/ProjectList";
import data from './const.json';

export class Portfolio extends Component { // Классовый компонент
  state = {
    filters: createFilters(data.cards),
    selected: 'All',
    project: findProject(data.cards),
  }

  handleClick = (e) => {
    const value = e.target.textContent;
    this.setState({ selected: value, project: findProject(data.cards, value) });
    // меняем параметры нашего состояния
  }
  
  render() { // Обязательный метод для классового компонента
    return (
      <>
      <div className="box__filters">
        <Toolbar filters={this.state.filters} selected={this.state.selected} onSelectedFilter={this.handleClick} />
      </div>
      <div className="box__projects">
        <ProjectList projects={this.state.project}/>
      </div>
      </>
    )
  }
}
