import { observable, action } from "mobx";

export default class EventStore {
  @observable isClicked = false;

  @action
  onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    this.isClicked = !this.isClicked;

    /* isTrue ? */
    console.log("isTrue? :", this.isClicked);
  };
}
