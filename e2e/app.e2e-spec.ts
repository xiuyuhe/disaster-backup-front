import { Ng2DbPage } from './app.po';

describe('ng2-db App', function() {
  let page: Ng2DbPage;

  beforeEach(() => {
    page = new Ng2DbPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
