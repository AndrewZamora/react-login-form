var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';

var Login = function (_Component) {
  _inherits(Login, _Component);

  function Login(props) {
    _classCallCheck(this, Login);

    var _this = _possibleConstructorReturn(this, (Login.__proto__ || Object.getPrototypeOf(Login)).call(this, props));

    _this.handleSubmit = function (event) {
      event.preventDefault();
      _this.props.onSubmit(_this.state);
    };

    _this.state = {
      email: '',
      password: ''
    };
    return _this;
  }

  _createClass(Login, [{
    key: 'handleChange',
    value: function handleChange(event) {
      this.setState(_defineProperty({}, event.target.name, event.target.value));
      event.preventDefault();
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return React.createElement(
        'div',
        { className: 'container' },
        React.createElement(
          'h3',
          null,
          'Login to...'
        ),
        React.createElement(
          'div',
          { className: 'row' },
          React.createElement(
            'form',
            { className: 'col s12', onSubmit: function onSubmit(event) {
                return _this2.handleSubmit(event);
              } },
            React.createElement(
              'div',
              { className: 'row' },
              React.createElement(
                'div',
                { className: 'input-field col s12' },
                React.createElement('input', { id: 'password', type: 'password', name: 'password', className: 'validate', autocomplete: 'off',
                  value: this.state.password, onChange: function onChange(event) {
                    return _this2.handleChange(event);
                  } }),
                React.createElement(
                  'label',
                  { htmlFor: 'password' },
                  'Password'
                )
              )
            ),
            React.createElement(
              'div',
              { className: 'row' },
              React.createElement(
                'div',
                { className: 'input-field col s12' },
                React.createElement('input', { id: 'email', type: 'email', name: 'email', className: 'validate', autoComplete: 'off', value: this.state.email, onChange: function onChange(event) {
                    return _this2.handleChange(event);
                  } }),
                React.createElement(
                  'label',
                  { htmlFor: 'email' },
                  'Email'
                )
              )
            ),
            React.createElement(
              'button',
              { className: 'btn right col s12', type: 'submit', name: 'action' },
              'Submit'
            )
          )
        ),
        React.createElement(
          'div',
          null,
          React.createElement(
            'p',
            null,
            'Need an account?'
          )
        )
      );
    }
  }]);

  return Login;
}(Component);

export default Login;