export default class Dummy {
    static inputTextOptions = [
        {
            id: 'test',
            title: 'title',
            type: 'text',
            name: 'test-name',
            required: true
        },
        {
            id: 'test2',
            title: 'title2',
            type: 'text',
            name: 'test-name',
            required: true
        },
        {
            id: 'test3',
            title: 'title3',
            type: 'text',
            name: 'test-name',
            required: true
        },
        {
            id: 'test4',
            title: 'title4',
            type: 'text',
            name: 'test-name',
            required: true
        },
        {
            id: 'test5',
            title: 'title5',
            type: 'text',
            name: 'test-name',
            required: true,
        },

    ]


    static checkboxOption = {
        type: 'checkbox',
        legend: 'Choose your monster features',
        items: [
            {
                id: 'scales',
                checked: true,
                text: 'Scales',
            },
            {
                id: 'horns',
                checked: false,
                text: 'Horns',
            },
        ]
    }

    static radioOption = {
        type: 'radio',
        legend: 'Select a maintenance drone',
        name : 'drone',
        items: [
            {
                id: 'huey',
                value : 'huey',
                checked: true,
                text : 'Huey'
            },
            {
                id: 'dewey',
                value : 'dewey',
                checked: false,
                text : 'Dewey'
            },
            {
                id: 'louie',
                value : 'louie',
                checked: false,
                text : 'Louie'
            },
        ]
    }

    static dateOptions = {
        type: 'date',
        title: 'Start date:',

        id: 'start',
        name: 'trip-start',
        // value: '2018-07-22',
        // min: '2018-01-01',
         max: '2022-12-31',
    }

    static textareaOptions = {
        type : 'textarea',
        title : 'Tell us your story',
        id : 'story',
        rows : '5',
        cols : '20',
    }

    
    static fieldsetOptions = {
        type : 'fieldset',
        legend : '이것은 필드셋 레전드다',
        name : 'group'
    }
}