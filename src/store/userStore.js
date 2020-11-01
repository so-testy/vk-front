import { observable } from 'mobx';

class UserStore {
  @observable user;
  @observable isAuthorized;

  constructor() {
    this.user = {
      name: "name"
    };
    this.isAuthorized = false;
  }
}

export default UserStore;