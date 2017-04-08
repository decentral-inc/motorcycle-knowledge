import jquery from 'jquery';
import { renderComponent, expect } from '../testhelper';
import UserDetail from './user-detail';
const $ = jquery(global.window);

describe('UserDetail', () => {
  
  describe('With active users',() => {
    let component;

    beforeEach(() => {
      const props = {}
      component = renderComponent(UserDetail,null,{activeUser:{name:'bucky'}});
    });

    it('shows a profile section', () => {
      expect(component).to.have.class('profile-section');
    });

  })

  describe('No active users',() => {
    let component;

    beforeEach(() => {
      const props = {}
      component = renderComponent(UserDetail,null,{});
    });

    it('should prompt you to select a user',() => {
      expect(component.text()).to.equal('Select a user...')
    })
  })
  
});
