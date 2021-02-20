import { mount } from '@vue/test-utils';
import OfficeTitle from '@/components/OfficeTitle.vue';

const props = {
  title: 'Title office',
  address: 'Address office',
  widthCard: 200,
};

const wrapper = mount(OfficeTitle, { props });

test('should render props', () => {
  expect(wrapper.text()).toMatch(props.title);
  expect(wrapper.text()).toMatch(props.address);
});
