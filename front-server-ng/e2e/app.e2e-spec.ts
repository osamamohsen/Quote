import { FrontServerNgPage } from './app.po';

describe('front-server-ng App', () => {
  let page: FrontServerNgPage;

  beforeEach(() => {
    page = new FrontServerNgPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
