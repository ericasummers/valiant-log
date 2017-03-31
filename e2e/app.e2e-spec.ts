import { ValiantLogPage } from './app.po';

describe('valiant-log App', function() {
  let page: ValiantLogPage;

  beforeEach(() => {
    page = new ValiantLogPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
