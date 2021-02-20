import { mount } from '@vue/test-utils';
import Card from '@/components/MainButton.vue';

describe('MainButton.vue', () => {
  const label = 'label';

  const wrapper = mount(Card, {
    slots: {
      default: label,
    },
  });

  it('should render button', () => {
    expect(wrapper.find('button').text()).toMatch(label);
  });

  it('should event trigger after button clicked', async () => {
    await wrapper.find('button').trigger('click');

    expect(wrapper.emitted().click).toBeTruthy();
  });
});
