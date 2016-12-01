class FooterController {
  filters: string[];
  filterTitles: any;
  onClearCompleted: Function;
  onShow: Function;

  constructor() {
    this.filters = ['show_all', 'show_active', 'show_completed'];
    this.filterTitles = {
      'show_all': 'All',
      'show_active': 'Active',
      'show_completed': 'Completed'
    };
  }

  handleClear() {
    this.onClearCompleted();
  }

  handleChange(filter: string) {
    this.onShow({filter});
  }
}

export const Footer: angular.IComponentOptions = {
  template: require('./Footer.html'),
  controller: FooterController,
  bindings: {
    completedCount: '<',
    activeCount: '<',
    filter: '<filter',
    onClearCompleted: '&',
    onShow: '&'
  }
};
