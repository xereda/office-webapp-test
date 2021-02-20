import { mount } from '@vue/test-utils';
import OfficeDetail from '@/components/OfficeDetail.vue';

const props = {
  id: '999',
  fullName: 'Full name',
  jobPosition: 'Job Position',
  email: 'email@email.com',
  phone: '(999) 9999.9999',
};

const wrapper = mount(OfficeDetail, {
  props,
});

test('should render props', () => {
  Object.values(props).forEach(prop => {
    expect(wrapper.text()).toMatch(prop);
  });
});

test('should render edit button', () => {
  expect(
    wrapper
      .find('button')
      .text()
      .toUpperCase(),
  ).toMatch('EDIT');
});

test('should render delete button', () => {
  expect(
    wrapper
      .findAll('button')[1]
      .text()
      .toUpperCase(),
  ).toMatch('DELETE');
});

test('should trigger event after edit button was clicked', async () => {
  await wrapper.find('button').trigger('click');

  expect(wrapper.emitted().edit[0]).toEqual([props.id]);
});

test('should trigger event after delete button was clicked', async () => {
  await wrapper.findAll('button')[1].trigger('click');

  expect(wrapper.emitted().remove[0]).toEqual([props.id]);
});
