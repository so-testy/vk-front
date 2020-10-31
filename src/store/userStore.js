import { observable} from 'mobx';

class UserStore {
  @observable user;
  @observable isAuthorized;

  constructor() {
    this.user = {};
    this.isAuthorized = false;
  }
}

const userStore = new UserStore();

export default userStore;