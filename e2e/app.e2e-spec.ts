import { GlucenaGithubIoPage } from './app.po';

describe('glucena-github-io App', function() {
  let page: GlucenaGithubIoPage;

  beforeEach(() => {
    page = new GlucenaGithubIoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
