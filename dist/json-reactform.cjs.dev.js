'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var reactstrap = require('reactstrap');
var Select = _interopDefault(require('react-select'));
var CreatableSelect = _interopDefault(require('react-select/creatable'));
var reactHookForm = require('react-hook-form');
var DatePicker = _interopDefault(require('react-datepicker'));
require('react-datepicker/dist/react-datepicker.css');

function numberToCurrency(n) {
  // format number 1000000 to 1,234,567
  var str = typeof n !== 'string' ? String(n) : n;
  return str.replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

var InputDefault = React__default.memo(function (_ref) {
  var type = _ref.type,
      value = _ref.value,
      setValue = _ref.setValue,
      keyValue = _ref.keyValue,
      model = _ref.model,
      register = _ref.register,
      errors = _ref.errors;

  if (type === 'currency') {
    setValue(keyValue, numberToCurrency(value));
  }

  return React__default.createElement(reactstrap.FormGroup, {
    key: keyValue,
    row: true,
    className: "mb-4"
  }, React__default.createElement(reactstrap.Label, {
    "for": keyValue,
    sm: 4
  }, keyValue, " ", model.required ? '*' : null), React__default.createElement(reactstrap.Col, {
    sm: 8,
    className: "d-flex flex-column"
  }, React__default.createElement(reactstrap.Input, {
    innerRef: register,
    type: model.type,
    name: keyValue,
    id: keyValue,
    disabled: model.disabled,
    placeholder: model.placeholder
  }), errors[keyValue] && React__default.createElement(reactstrap.Alert, {
    color: "danger"
  }, errors[keyValue].message)));
}, function (prevProps, nextProps) {
  return prevProps.value === nextProps.value && prevProps.errors[prevProps.keyValue] === nextProps.errors[nextProps.keyValue];
});

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
var InputSelect = React__default.memo(function (_ref) {
  var keyValue = _ref.keyValue,
      model = _ref.model,
      options = _ref.options,
      control = _ref.control,
      rules = _ref.rules,
      errors = _ref.errors;

  var _useState = React.useState(options),
      optionsFilter = _useState[0],
      setOptionsFilter = _useState[1];

  var onCreateOptionSelect = function onCreateOptionSelect(name, label, onCreateOption) {
    var newOptionObject = onCreateOption(label);
    var optionsObject = {};
    optionsObject[name] = [].concat(optionsFilter[name], [newOptionObject]);
    setOptionsFilter(_extends({}, optionsFilter, {}, optionsObject));
  };

  return React__default.createElement(reactstrap.FormGroup, {
    key: keyValue,
    row: true,
    className: "mb-4"
  }, React__default.createElement(reactstrap.Label, {
    "for": keyValue,
    sm: 4
  }, keyValue, " ", model.required ? '*' : null), React__default.createElement(reactstrap.Col, {
    sm: 8,
    className: "d-flex flex-column"
  }, function () {
    var SelectComponent = model.createable ? CreatableSelect : Select;
    return optionsFilter.length > 0 ? React__default.createElement(React__default.Fragment, null, React__default.createElement(reactHookForm.Controller, {
      name: keyValue,
      control: control,
      rules: rules,
      onChange: function onChange(_ref2) {
        var selected = _ref2[0];
        return selected;
      },
      as: React__default.createElement(SelectComponent, {
        searchable: true,
        isClearable: true,
        options: optionsFilter,
        onCreateOption: function onCreateOption(inputValue) {
          return onCreateOptionSelect(keyValue, inputValue, model.onCreateOption);
        },
        isDisabled: model.disabled,
        placeholder: model.placeholder
      })
    })) : React__default.createElement(reactstrap.Spinner, null);
  }(), errors[keyValue] && React__default.createElement(reactstrap.Alert, {
    color: "danger"
  }, errors[keyValue].message)));
});

var InputDate = React__default.memo(function (_ref) {
  var value = _ref.value,
      keyValue = _ref.keyValue,
      rules = _ref.rules,
      model = _ref.model,
      control = _ref.control,
      errors = _ref.errors;
  var CustomDatePicker = React__default.forwardRef(function (_ref2, ref) {
    var onChange = _ref2.onChange,
        placeholder = _ref2.placeholder,
        value = _ref2.value,
        id = _ref2.id,
        onClick = _ref2.onClick,
        name = _ref2.name,
        disabled = _ref2.disabled,
        required = _ref2.required;
    return React__default.createElement(reactstrap.Input, {
      ref: ref,
      onChange: onChange,
      placeholder: placeholder,
      value: value,
      id: id,
      name: name,
      onClick: onClick,
      disabled: disabled,
      required: required
    });
  });
  return React__default.createElement(reactstrap.FormGroup, {
    key: keyValue,
    row: true,
    className: "mb-4"
  }, React__default.createElement(reactstrap.Label, {
    "for": keyValue,
    sm: 4
  }, keyValue, " ", rules.required ? '*' : null), React__default.createElement(reactstrap.Col, {
    sm: 8,
    className: "d-flex flex-column"
  }, React__default.createElement(reactHookForm.Controller, {
    name: keyValue,
    control: control,
    rules: rules,
    onChange: function onChange(_ref3) {
      var selected = _ref3[0];
      return selected;
    },
    as: React__default.createElement(DatePicker, {
      selected: value ? new Date(value) : '',
      dateFormat: model.format || 'dd-MM-yyyy',
      showTimeSelect: false,
      customInput: React__default.createElement(CustomDatePicker, null),
      todayButton: "Today",
      dropdownMode: "select",
      isClearable: true,
      shouldCloseOnSelect: true,
      placeholderText: model.placeholder
    })
  }), errors[keyValue] && React__default.createElement(reactstrap.Alert, {
    color: "danger"
  }, errors[keyValue].message)));
});

function _extends$1() { _extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$1.apply(this, arguments); }
var CustomDatePicker = React__default.forwardRef(function (_ref, ref) {
  var onChange = _ref.onChange,
      placeholder = _ref.placeholder,
      value = _ref.value,
      id = _ref.id,
      onClick = _ref.onClick,
      name = _ref.name,
      disabled = _ref.disabled,
      required = _ref.required;
  return React__default.createElement(reactstrap.Input, {
    ref: ref,
    onChange: onChange,
    placeholder: placeholder,
    value: value,
    id: id,
    name: name,
    onClick: onClick,
    disabled: disabled,
    required: required
  });
});

function usePrevious(value) {
  var ref = React__default.useRef();
  React__default.useEffect(function () {
    ref.current = value;
  });
  return ref.current;
}

var index = (function (_ref2) {
  var model = _ref2.model,
      onSubmit = _ref2.onSubmit,
      onChange = _ref2.onChange;

  var _useForm = reactHookForm.useForm({
    defaultValues: Object.getOwnPropertyNames(model).reduce(function (o, key) {
      var _Object$assign;

      if (model[key].type === 'currency') {
        model[key].defaultValue = numberToCurrency(model[key].defaultValue);
      }

      if (model[key].type === 'select') {
        model[key].defaultValue = model[key].options.find(function (option) {
          return option.value === model[key].defaultValue;
        });
      }

      return Object.assign(o, (_Object$assign = {}, _Object$assign[key] = model[key].defaultValue, _Object$assign));
    }, {})
  }),
      control = _useForm.control,
      register = _useForm.register,
      errors = _useForm.errors,
      watch = _useForm.watch,
      setValue = _useForm.setValue,
      getValues = _useForm.getValues,
      handleSubmit = _useForm.handleSubmit;

  var values = watch();
  console.log(values);
  var defaultState = Object.keys(model).reduce(function (a, b) {
    var _model$b = model[b],
        defaultValue = _model$b.defaultValue,
        type = _model$b.type;

    if (type === 'date') {
      a[b] = defaultValue ? defaultValue.toISOString() : '';
    } else if (type === 'select') {
      a[b] = defaultValue ? model[b].options.find(function (option) {
        return option.value === defaultValue;
      }) : '';
    } else if (type === 'checkbox') {
      a[b] = defaultValue && defaultValue.length ? defaultValue : [];
    } else if (type === 'submit') {
      return a;
    } else {
      a[b] = defaultValue || '';
    }

    return a;
  }, {});
  var defaultCurrency = Object.keys(model).reduce(function (a, b) {
    var defaultValue = model[b].defaultValue;

    if (model[b].type === 'currency') {
      a[b] = numberToCurrency(defaultValue) || '';
    }

    return a;
  }, {});
  var defaultOptions = Object.keys(model).reduce(function (a, b) {
    if (model[b].type === 'select') {
      a[b] = model[b].options;
    }

    return a;
  }, {});
  var formItems = [];

  var _React$useState = React__default.useState(defaultState),
      state = _React$useState[0],
      setState = _React$useState[1];

  var _React$useState2 = React__default.useState(defaultCurrency),
      currency = _React$useState2[0],
      setCurrency = _React$useState2[1];

  var _React$useState3 = React__default.useState(defaultOptions),
      options = _React$useState3[0],
      setOptions = _React$useState3[1];

  var prevState = usePrevious(state);

  var _React$useState4 = React__default.useState({
    open: false,
    type: 'loading',
    // success, error
    message: ''
  }),
      modal = _React$useState4[0],
      setModal = _React$useState4[1];

  var onChangeState = function onChangeState(e) {
    var changedObject = {};
    var _e$currentTarget = e.currentTarget,
        value = _e$currentTarget.value,
        name = _e$currentTarget.name; // const value = e.currentTarget.value

    changedObject[name] = value;
    setState(_extends$1({}, state, {}, changedObject));
  };


  var onChangeStateCheckbox = function onChangeStateCheckbox(key, value) {
    var changedObject = {};
    changedObject[key] = state[key].includes(value) ? state[key].filter(function (item) {
      return item != value;
    }) : [].concat(state[key], [value]);
    setState(_extends$1({}, state, {}, changedObject));
  };

  Object.keys(model).forEach(function (key) {
    if (model[key].type === 'date') {
      formItems.push(React__default.createElement(InputDate, {
        keyValue: key,
        control: control,
        rules: model[key].validation,
        value: getValues(key),
        model: model[key],
        errors: errors
      }));
    } else if (model[key].type === 'select') {
      formItems.push(React__default.createElement(InputSelect, {
        control: control,
        rules: model[key].validation,
        value: getValues(key),
        keyValue: key,
        model: model[key],
        options: model[key].options,
        errors: errors
      }));
    } else if (model[key].type === 'checkbox') {
      formItems.push(React__default.createElement(reactstrap.FormGroup, {
        key: key,
        row: true,
        className: "mb-4"
      }, React__default.createElement(reactstrap.Label, {
        "for": key,
        sm: 4
      }, key, " ", model[key].required ? '*' : null), React__default.createElement(reactstrap.Col, {
        sm: 8,
        className: "d-flex flex-column"
      }, model[key].options.map(function (item, index) {
        return React__default.createElement(reactstrap.CustomInput, {
          type: "checkbox",
          label: item.label,
          id: item.label,
          key: item.label,
          name: key,
          value: item.value,
          checked: state[key].includes(item.value),
          required: index === 0 && state[key].length === 0 && model[key].required,
          disabled: model[key].disabled,
          onChange: function onChange(e) {
            return onChangeStateCheckbox(key, e.target.value);
          }
        });
      }))));
    } else if (model[key].type === 'radio') {
      formItems.push(React__default.createElement(reactstrap.FormGroup, {
        key: key,
        row: true,
        className: "mb-4"
      }, React__default.createElement(reactstrap.Label, {
        "for": key,
        sm: 4
      }, key, " ", model[key].required ? '*' : null), React__default.createElement(reactstrap.Col, {
        sm: 8,
        className: "d-flex flex-column"
      }, model[key].options.map(function (item, index) {
        return React__default.createElement(reactstrap.CustomInput, {
          type: "radio",
          label: item.label,
          id: item.label,
          key: item.label,
          name: key,
          value: item.value,
          checked: state[key] === item.value,
          required: model[key].required,
          disabled: model[key].disabled,
          onChange: onChangeState
        });
      }))));
    } else if (model[key].type === 'submit') {
      formItems.push(React__default.createElement(reactstrap.Row, {
        key: key,
        className: "mb-4"
      }, React__default.createElement(reactstrap.Col, {
        sm: 4
      }), React__default.createElement(reactstrap.Col, {
        sm: 8
      }, React__default.createElement(reactstrap.Button, {
        type: model[key].type,
        color: "success",
        disabled: model[key].disabled
      }, key))));
    } else {
      formItems.push(React__default.createElement("div", null, React__default.createElement(InputDefault, {
        value: getValues(key),
        setValue: setValue,
        type: model[key].type,
        keyValue: key,
        model: model[key],
        register: register(model[key].validation),
        errors: errors
      })));
    }
  });
  React__default.useEffect(function () {
    if (onChange) {
      var changedObject = [];

      if (prevState && Object.keys(prevState).length > 0) {
        Object.keys(prevState).forEach(function (key) {
          if (prevState[key] !== state[key]) {
            changedObject.push(key);
          }
        });
        onChange({
          value: state,
          changed: changedObject
        });
      }
    }
  }, [state]);
  return React__default.createElement(React__default.Fragment, null, React__default.createElement(reactstrap.Form, {
    onSubmit: handleSubmit(onSubmit)
  }, formItems));
});

exports.default = index;
