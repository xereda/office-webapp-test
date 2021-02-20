import { shallowMount } from '@vue/test-utils';
import OfficeDetail from '@/components/OfficeDetail.vue';

describe('OfficeDetail.vue', () => {
  const props = {
    id: '999',
    fullName: 'Full name',
    jobPosition: 'Job Position',
    email: 'email@email.com',
    phone: '(999) 9999.9999',
  };

  const wrapper = shallowMount(OfficeDetail, {
    props,
  });

  it('should render props', () => {
    expect(wrapper.text()).toMatch(props.id);
    expect(wrapper.text()).toMatch(props.fullName);
    expect(wrapper.text()).toMatch(props.jobPosition);
    expect(wrapper.text()).toMatch(props.email);
    expect(wrapper.text()).toMatch(props.phone);
  });

  // it('should event trigger after button clicked', async () => {
  //   await wrapper.find('button').trigger('click');

  //   expect(wrapper.emitted().click).toBeTruthy();
  // });
});
