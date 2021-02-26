import { mount } from '@vue/test-utils';
import Card from '@/components/Card.vue';

const title = 'title';
const detail = 'detail';
const isOpened = true;

const wrapper = mount(Card, {
  propsData: {
    isOpened,
  },
  slots: {
    title,
    detail,
  },
});

test('should render card with slots', () => {
  expect(wrapper.text()).toMatch(title + detail);
});

test('should event trigger after button clicked', async () => {
  await wrapper.find('section').trigger('click');

  expect(wrapper.emitted().click).toBeTruthy();
  expect(wrapper.emitted().click).toEqual([[isOpened]]);
});
