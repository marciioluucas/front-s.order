import { SorteioPage } from './app.po';

describe('sorteio App', function() {
  let page: SorteioPage;

  beforeEach(() => {
    page = new SorteioPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
