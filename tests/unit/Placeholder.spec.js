import { mount } from '@vue/test-utils';
import Placeholder from '@/components/Placeholder.vue';

const slotDefault = 'default content';
const noContent = 'No content';
const loading = 'Loading';

const factoryMount = props =>
  mount(Placeholder, {
    props,
    slots: {
      default: slotDefault,
    },
  });

test('should render loading', () => {
  const wrapper = factoryMount({ isLoading: true, noContent: false });

  expect(wrapper.text()).toMatch(loading);
  expect(wrapper.text()).not.toMatch(slotDefault);
});

test('should render no content feedback', () => {
  const wrapper = factoryMount({ isLoading: false, noContent: true });

  expect(wrapper.text()).toMatch(noContent);
  expect(wrapper.text()).not.toMatch(slotDefault);
});

test('should render no default slot content', () => {
  const wrapper = factoryMount({ isLoading: false, noContent: false });

  expect(wrapper.text()).toMatch(slotDefault);
  expect(wrapper.text()).not.toMatch(noContent);
  expect(wrapper.text()).not.toMatch(loading);
});
