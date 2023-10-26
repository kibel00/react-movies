import * as Yup from 'yup';

function validationConfig() {
    Yup.addMethod(Yup.string, 'firstCapLetter', function () {
        return this.test('first-cap-letter', 'The first letter shoud be caps',
            function (value) {
                if (value && value.length > 0) {
                    const firstLetter = value.substring(0, 1);
                    return firstLetter === firstLetter.toUpperCase();
                }
                return true;
            })
    })
}


export default validationConfig;