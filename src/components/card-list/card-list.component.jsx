import { Component } from "react";
import Card from "../Card/card.component";
import "./card-list.styles.css";

export default class CardList extends Component {
  render() {
    const { monsters } = this.props;
    return (
      <div className="card-list">
        {monsters.map(monster => (
          <Card monster={monster} />
        ))}
      </div>
    );
  }
}
