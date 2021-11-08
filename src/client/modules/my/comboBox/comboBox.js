import { LightningElement } from 'lwc';

export default class Combobox extends LightningElement {
    value = 'inProgress';

    get options() {
        return [
            { label: 'HoneyDew Farm', value: 'Clover honey, Wildflower honey, Acacia honey, Linden Honey, Manuka Honey' },
            { label: 'EverFall', value: 'Cedar, Fir, Pine, Redwood, Ash, Birch, Mahogamy' },
            { label: 'ElVine', value: 'Ale, Apple cider, Grape wine, Strawberry wine, Starfruit wine' },
        ];
    }

    handleChange(event) {
        this.value = event.detail.value;
    }
}
