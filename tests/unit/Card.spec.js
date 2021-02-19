import { shallowMount } from '@vue/test-utils';
import Card from '@/components/Card.vue';

describe('Card.vue', () => {
  const title = 'title text slot';
  const content = 'content text slot';

  const wrapper = shallowMount(Card, {
    props: {
      isOpened: false,
    },
    slots: {
      title,
      content,
    },
  });

  it('should not render card content', () => {
    expect(wrapper.text()).not.toMatch(content);
  });

  it('should render card content', async () => {
    wrapper.vm.$emit('click', false);

    await wrapper.vm.$nextTick();
    expect(wrapper.emitted().click[0]).toEqual([false]);

    console.log(wrapper.html());
  });
});
