import { mount } from '@vue/test-utils';
import SimpleButton from '@/components/SimpleButton.vue';

const factoryMount = props =>
  mount(SimpleButton, {
    props: {
      label: 'label',
      icon: 'pencil',
      ...props,
    },
  });

test('should render button', () => {
  const wrapper = factoryMount();
  expect(wrapper.find('button').text()).toMatch('label');
});

test('should not render svg loading icon', () => {
  const wrapper = factoryMount();

  expect(wrapper.find('svg circle').exists()).toBeFalsy();
});

test('should render svg loading icon', () => {
  const wrapper = factoryMount({ isLoading: true });

  expect(wrapper.find('svg circle').isVisible()).toBeTruthy();
});

test('should event trigger after button clicked', async () => {
  const wrapper = factoryMount();
  await wrapper.find('button').trigger('click');

  expect(wrapper.emitted().click).toBeTruthy();
});
