import { observable, makeObservable } from 'mobx';

class UserStore {
  user;
  isAuthorized;

  constructor() {
    makeObservable(this, {
      user: observable,
      isAuthorized: observable
    });

    this.user = {
      name: "name"
    };
    this.isAuthorized = false;
  }
}

export default UserStore;