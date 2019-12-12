import { shallowMount } from '@vue/test-utils';
import Checkboxes from '../Checkboxes.vue';
import Checkbox from '../Checkbox.vue';

describe('Checkboxes.vue', () => {

    let wrapper;

    beforeEach(() => {
        wrapper = shallowMount(Checkboxes, {
            propsData: {
                options: [{
                    value: 1,
                    name: 'title',
                    label: 'Checkbox Title'
                  }]
            }
        });
    });

    it('renders one checkbox for each option passeds', () => {
        expect(wrapper.findAll(Checkbox)).toHaveLength(wrapper.props().options.length);
    });



});