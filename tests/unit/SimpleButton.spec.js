import { mount } from '@vue/test-utils';
import SimpleButton from '@/components/SimpleButton.vue';

describe('SimpleButton.vue', () => {
  const factoryMount = props =>
    mount(SimpleButton, {
      props: {
        label: 'label',
        icon: 'pencil',
        ...props,
      },
    });

  it('should render button', () => {
    const wrapper = factoryMount();
    console.log(wrapper.html());
    expect(wrapper.find('button').text()).toMatch('label');
  });

  it('should not render svg loading icon', () => {
    const wrapper = factoryMount();

    expect(wrapper.find('svg circle').exists()).toBeFalsy();
  });

  it('should render svg loading icon', () => {
    const wrapper = factoryMount({ isLoading: true });

    expect(wrapper.find('svg circle').isVisible()).toBeTruthy();
  });

  it('should event trigger after button clicked', async () => {
    const wrapper = factoryMount();
    await wrapper.find('button').trigger('click');

    expect(wrapper.emitted().click).toBeTruthy();
  });
});
