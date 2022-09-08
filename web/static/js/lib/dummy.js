export default class Dummy {
    static inputTextOptions = [
        {
            id: 'test',
            label: 'title',
            type: 'text',
            name: 'test-name',
            required: true,
        },
        {
            id: 'test2',
            label: 'title2',
            type: 'text',
            name: 'test-name',
            required: true,
        },
        {
            id: 'test3',
            label: 'email을 입력하세요',
            type: 'email',
            name: 'test-email',
            required: true,
        },
        {
            id: 'test4',
            label: '비밀번호를 입력하세요',
            type: 'password',
            name: 'test-passwd',
            required: true,
        },
        {
            id: 'test5',
            label: 'title5',
            type: 'text',
            name: 'test-name',
            required: false,
        },
    ]

    static checkboxOption = {
        type: 'checkbox',
        legend: 'Choose your monster features',
        inputs: [
            {
                id: 'scales',
                label: 'Scales',
                checked: true,
            },
            {
                id: 'horns',
                label: 'Horns',
                checked: false,
            },
            {
                id: 'fangs',
                label: 'Fangs',
                checked: false,
            },
            {
                id: 'wings',
                label: 'Wings',
                checked: false,
            },
        ],
    }

    static radioOption = {
        type: 'radio',
        legend: 'Select a maintenance drone',
        name: 'drone',
        inputs: [
            {
                id: 'huey',
                value: 'huey',
                checked: true,
                text: 'Huey',
            },
            {
                id: 'dewey',
                value: 'dewey',
                checked: false,
                text: 'Dewey',
            },
            {
                id: 'louie',
                value: 'louie',
                checked: false,
                text: 'Louie',
            },
        ],
    }

    static dateOptions = {
        type: 'date',
        label: 'Start date:',
        id: 'start',
        name: 'trip-start',
        // value: '2018-07-22',
        // min: '2018-01-01',
        max: '2022-12-31',
    }

    static textareaOptions = {
        type: 'textarea',
        label: 'Tell us your story',
        id: 'story',
        rows: '5',
        cols: '20',
    }

    static fieldsetOptions = {
        type: 'fieldset',
        legend: '이것은 필드셋 레전드다',
        name: 'group',
    }

    static rangeOptions = {
        legend: 'Weather',
        type: 'range',
        items: [
            {
                id: 'temperature',
                label: 'Temperature',
                min: '25',
                max: '40',
            },
            {
                id: 'humidity',
                label: 'Humidity',
                min: '40',
                max: '100',
            },
        ],
    }

    static selectOptions = {
        type: 'select',
        legend: 'Choose a pet',
        id: 'pet-select',
        name: 'pets',
        items: [
            {
                value: 'dog',
                text: 'Dog',
            },
            {
                value: 'cat',
                text: 'CAT',
            },
        ],
    }
}