'use strict';

jest.dontMock('../sandbox/CheckboxWithLabel');

var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');

var CheckboxWithLabel = require('../sandbox/CheckboxWithLabel');

describe('CheckboxWithLabel', function() {
  it('Change the text after click', function() {
      //Render a checkbox with label in the document
      var checkbox = TestUtils.renderIntoDocument(
        <CheckboxWithLabel labelOn="On" labelOff="Off" />
      );

      var checkboxNode = ReactDOM.findDOMNode(checkbox);

      //Verify that it's off by default
      expect(checkboxNode.textContent).toEqual('Off');

      //Simulate a click and vierfy that it is no On
      TestUtils.Simulate.change(
        TestUtils.findRenderedDOMComponentWithTag(checkbox, 'input')
      );
      expect(checkboxNode.textContent).toEqual('On');
  });
});
