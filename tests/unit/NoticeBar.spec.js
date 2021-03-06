import { shallowMount } from '@vue/test-utils';
import NoticeBar from '@/components/NoticeBar.vue';

const message = 'new message';
const wrapper = shallowMount(NoticeBar, {
  props: { message },
});

test('renders message notice when passed', () => {
  expect(wrapper.text()).toMatch(message);
});

test('should emit close notice bar event', async () => {
  wrapper.vm.$emit('close');

  await wrapper.vm.$nextTick();
  expect(wrapper.emitted().close).toBeTruthy();
});
