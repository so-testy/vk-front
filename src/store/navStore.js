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
      setActivePanel: action,
      setActiveView: action,
      setActiveModal: action
    });

    this.activePanel = panel;
    this.activeView = view;
    this.activeModal = modal;
  }

  setActivePanel(panel) {
    this.activePanel = panel;
  }

  setActiveView(view) {
    this.activeView = view;
  }

  setActiveModal(modal) {
    this.activeModal = modal;
  }
}

export default NavStore;
