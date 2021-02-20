import { mount } from '@vue/test-utils';
import PageTitle from '@/components/PageTitle.vue';

const slotContent = 'slot content';

const wrapper = mount(PageTitle, {
  slots: {
    default: slotContent,
  },
});

test('should render PageTitle with slots', () => {
  expect(wrapper.text()).toMatch(slotContent);
});
