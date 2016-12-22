'use strict';

describe('Directive: customCard', function () {

  // load the directive's module
  beforeEach(module('cardsApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<custom-card></custom-card>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the customCard directive');
  }));
});
