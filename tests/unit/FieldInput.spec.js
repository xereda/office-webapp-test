import { mount } from '@vue/test-utils';
import FieldInput from '@/components/FieldInput.vue';

const props = {
  value: 'input text',
  label: 'field label',
  type: 'text',
  id: 'fieldId',
};

const factoryMount = addProps =>
  mount(FieldInput, {
    props: { ...props, ...addProps },
    attachTo: document.body,
  });

const wrapper = factoryMount();

test('should render label field', () => {
  expect(wrapper.find('label').text()).toMatch(props.label);
});

test('should render required symbol', () => {
  expect(wrapper.find('label').text()).toMatch(' *');
});

test('should not render required symbol when not required', () => {
  const wrapper = factoryMount({ required: false });

  expect(wrapper.find('label').text()).not.toMatch(' *');
});

test('should render required error message', async () => {
  const wrapper = factoryMount({ value: '' });
  await wrapper.find('input').setValue('');
  await wrapper.find('input').trigger('blur');

  expect(wrapper.text()).toMatch('cannot be empty');
});

test('should render invalid email address message', async () => {
  const wrapper = factoryMount({ type: 'email', value: 'email@domain.' });
  await wrapper.find('input').setValue('');
  await wrapper.find('input').trigger('blur');

  expect(wrapper.text()).toMatch('Invalid email');
});

test('should do not render invalid email address message', async () => {
  const wrapper = factoryMount({ type: 'email', value: 'email@domain.com' });
  await wrapper.find('input').setValue('');
  await wrapper.find('input').trigger('blur');

  expect(wrapper.text()).not.toMatch('Invalid email');
});

test('should keep disabled input', async () => {
  const wrapper = factoryMount({ disabled: true });
  const input = wrapper.find('input');

  expect(input.attributes()?.disabled).toEqual('');
});

test('should trigger event after an error occurs', async () => {
  const wrapper = factoryMount({ type: 'email', value: 'email@invalid' });
  await wrapper.find('input').setValue('');
  await wrapper.find('input').trigger('blur');

  expect(wrapper.emitted().validation[0]).toEqual([
    { [props.id]: { hasError: true } },
  ]);
});

test('should trigger event after typed value', async () => {
  const wrapper = factoryMount();
  const typedText = 'text typed';
  const input = wrapper.find('input');
  await input.setValue(typedText);

  const inputEventPayload = wrapper.emitted().input[0][0];

  expect(inputEventPayload.field).toEqual(props.id);
  expect(inputEventPayload.value).toEqual(typedText);
});

test('should apply focus when prop was passed', async () => {
  const wrapper = factoryMount({ focus: true });
  const input = await wrapper.find('input');

  expect(input.element).toBe(document.activeElement);
});
