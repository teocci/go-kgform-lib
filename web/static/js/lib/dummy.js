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

    static dateOptions = {
        type: 'date',
        title: 'Start date:',
        id: 'start',
        name: 'trip-start',
        value: '2018-07-22',
        min: '2018-01-01',
        max: '2018-12-31',
    }

    static textareaOptions = {
        type : 'textarea',
        title : 'Tell us your story',
        id : 'story',
        
    }
}