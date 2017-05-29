import { NgLifecyclePage } from './app.po';

describe('ng-lifecycle App', () => {
  let page: NgLifecyclePage;

  beforeEach(() => {
    page = new NgLifecyclePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
