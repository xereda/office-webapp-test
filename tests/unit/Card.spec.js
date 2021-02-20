import { mount } from '@vue/test-utils';
import Card from '@/components/Card.vue';

describe('Card.vue', () => {
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

  it('should render card with slots', () => {
    expect(wrapper.text()).toMatch(title + detail);
  });

  it('should event trigger after button clicked', async () => {
    await wrapper.find('section').trigger('click');

    expect(wrapper.emitted().click).toBeTruthy();
    expect(wrapper.emitted().click).toEqual([[isOpened]]);
  });
});
