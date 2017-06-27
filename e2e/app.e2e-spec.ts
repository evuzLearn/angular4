import { Angular4HelloWorldPage } from './app.po';

describe('angular4-http', () => {
  let page: Angular4HelloWorldPage;

  beforeEach(() => {
    page = new Angular4HelloWorldPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
