import { renderComponent, expect } from '../testhelper';
import UserList from './user-list';

describe('UserList', () => {
  let component;

  beforeEach(() => {
    const props = {}
    component = renderComponent(UserList, null, props);
  });

  it('shows an LI for each comment', () => {
    expect(component.find('li').length).to.equal(3);
  });

});
