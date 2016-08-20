module.exports = {
  normalizeEntityName: function() {},

  afterInstall: function() {
    return this.addPackageToProject('eonasdan-bootstrap-datetimepicker', '4.17.37');
  }
};
