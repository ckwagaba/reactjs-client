const expect = require('chai').expect;

describe('Bucketlist App', () => {
  it('should load with the right title', () => {
    browser.url('http://localhost:3000/');
    const actualTitle = browser.getTitle();

    expect(actualTitle).to.eql('Bucketlist - Track your Dreams');
  });
});
