import { shallowMount } from '@vue/test-utils';
import Checkbox from '../Checkbox.vue';

describe('Checkbox.vue', () => {

    let wrapper;

    beforeEach(() => {
        wrapper = shallowMount(Checkbox, {
            propsData: {
                label: 'Checkbox Label'
            }
        });
    });

    it('renders label', () => {
        expect(wrapper.find('label').text()).toBe('Checkbox Label');
    });

    it('emits when clicked', () => {
        wrapper.find('input').trigger('click');
        expect(wrapper.emitted().input[0]).toEqual([true]);
    });

});
