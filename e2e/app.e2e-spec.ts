import { OneHundredTestsProjPage } from './app.po';

describe('one-hundred-tests-proj App', function() {
  let page: OneHundredTestsProjPage;

  beforeEach(() => {
    page = new OneHundredTestsProjPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
