'use strict';

describe('Service: CardsFactory', function () {

  // load the service's module
  beforeEach(module('cardsApp'));

  // instantiate service
  var CardsFactory;
  beforeEach(inject(function (_CardsFactory_) {
    CardsFactory = _CardsFactory_;
  }));

  it('should do something', function () {
    expect(!!CardsFactory).toBe(true);
  });

});
