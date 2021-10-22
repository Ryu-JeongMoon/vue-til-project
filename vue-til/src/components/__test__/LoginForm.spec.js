import LoginForm from '@/components/LoginForm';
import { shallowMount } from '@vue/test-utils';

describe('LoginForm.vue', () => {
  test('아이디가 이메일 형식이 아니면 경고 메시지 출력', () => {
    const wrapper = shallowMount(LoginForm, {
      data() {
        return {
          username: 'test',
        };
      },
    });
    const warningText = wrapper.find('.warning');
    expect(warningText.exists()).toBeTruthy();
  });

  test('ID, PW 입력하지 않으면 로그인 버튼 비활성화', () => {
    const wrapper = shallowMount(LoginForm, {
      data() {
        return {
          username: '',
          password: '',
        };
      },
    });
    const button = wrapper.find('button');
    expect(button.element.disabled).toBeTruthy();
  });
});
