export default {
    hasErrors: function()  {
        return {
            restrict: 'A',
            require:  '^form',
            link: function (scope, el, attrs, formCtrl) {
                let inputEl   = el[0].querySelector("[name]");
                let inputNgEl = angular.element(inputEl);
                let inputName = inputNgEl.attr('name');

                inputNgEl.bind('blur', function() {
                    el.toggleClass('has-error', formCtrl[inputName].$invalid);
                })
            }
        }
    },

    validData: function() {
        const validation = {
                number: /^(\d+(\.\d{0,2})?)$/i,
                url: /^(https?:\/\/).+/i
        };
        return {
            require: '?ngModel',
            link: function (scope, elm, attrs, ctrl) {
                ctrl.$validators.text = function (modelValue) {
                    return ctrl.$isEmpty(modelValue) || validation[attrs.validData].test(modelValue);
                };
            }
        };
    }
}