import { action, observable, makeObservable } from 'mobx';

class NavStore {
  activeView;
  activePanel;
  activeModal;

  constructor({ panel, view, modal }) {
    makeObservable(this, {
      activePanel: observable,
      activeView: observable,
      activeModal: observable,
      setActiveView: action,
      setActiveModal: action
    });

    this.activePanel = panel;
    this.activeView = view;
    this.activeModal = modal;
  }

  setActiveView(view, panel) {
    this.activeView = view || this.activeView;
    this.activePanel = panel || this.activePanel;
  }

  setActiveModal(modal) {
    this.activeModal = modal;
  }
}

export default NavStore;
