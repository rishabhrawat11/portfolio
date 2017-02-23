import { SeedMeanPage } from './app.po';

describe('seed-mean App', () => {
  let page: SeedMeanPage;

  beforeEach(() => {
    page = new SeedMeanPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
