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
      name: "Ladanov Nikolay",
      avatar: 'https://sun1-99.userapi.com/impf/c854220/v854220300/11a6ab/A1TrDV-PRjA.jpg?size=200x0&quality=90&crop=4,275,800,800&sign=8ed6a730b25a778c53ca843724d30815&ava=1'
    };
    this.isAuthorized = true;
  }
}

export default UserStore;