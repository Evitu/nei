"use strict";
'use client';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useButton = useButton;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var React = _interopRequireWildcard(require("react"));
var _utils = require("@mui/utils");
var _extractEventHandlers = require("../utils/extractEventHandlers");
var _useRootElementName = require("../utils/useRootElementName");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
/**
 *
 * Demos:
 *
 * - [Button](https://mui.com/base-ui/react-button/#hook)
 *
 * API:
 *
 * - [useButton API](https://mui.com/base-ui/react-button/hooks-api/#use-button)
 */
function useButton(parameters = {}) {
  const {
    disabled = false,
    focusableWhenDisabled,
    href,
    rootRef: externalRef,
    tabIndex,
    to,
    type,
    rootElementName: rootElementNameProp
  } = parameters;
  const buttonRef = React.useRef();
  const [active, setActive] = React.useState(false);
  const {
    isFocusVisibleRef,
    onFocus: handleFocusVisible,
    onBlur: handleBlurVisible,
    ref: focusVisibleRef
  } = (0, _utils.unstable_useIsFocusVisible)();
  const [focusVisible, setFocusVisible] = React.useState(false);
  if (disabled && !focusableWhenDisabled && focusVisible) {
    setFocusVisible(false);
  }
  React.useEffect(() => {
    isFocusVisibleRef.current = focusVisible;
  }, [focusVisible, isFocusVisibleRef]);
  const [rootElementName, updateRootElementName] = (0, _useRootElementName.useRootElementName)({
    rootElementName: rootElementNameProp != null ? rootElementNameProp : href || to ? 'a' : undefined,
    componentName: 'Button'
  });
  const createHandleMouseLeave = otherHandlers => event => {
    var _otherHandlers$onMous;
    if (focusVisible) {
      event.preventDefault();
    }
    (_otherHandlers$onMous = otherHandlers.onMouseLeave) == null || _otherHandlers$onMous.call(otherHandlers, event);
  };
  const createHandleBlur = otherHandlers => event => {
    var _otherHandlers$onBlur;
    handleBlurVisible(event);
    if (isFocusVisibleRef.current === false) {
      setFocusVisible(false);
    }
    (_otherHandlers$onBlur = otherHandlers.onBlur) == null || _otherHandlers$onBlur.call(otherHandlers, event);
  };
  const createHandleFocus = otherHandlers => event => {
    var _otherHandlers$onFocu2;
    // Fix for https://github.com/facebook/react/issues/7769
    if (!buttonRef.current) {
      buttonRef.current = event.currentTarget;
    }
    handleFocusVisible(event);
    if (isFocusVisibleRef.current === true) {
      var _otherHandlers$onFocu;
      setFocusVisible(true);
      (_otherHandlers$onFocu = otherHandlers.onFocusVisible) == null || _otherHandlers$onFocu.call(otherHandlers, event);
    }
    (_otherHandlers$onFocu2 = otherHandlers.onFocus) == null || _otherHandlers$onFocu2.call(otherHandlers, event);
  };
  const isNativeButton = () => {
    const button = buttonRef.current;
    return rootElementName === 'BUTTON' || rootElementName === 'INPUT' && ['button', 'submit', 'reset'].includes(button == null ? void 0 : button.type) || rootElementName === 'A' && (button == null ? void 0 : button.href);
  };
  const createHandleClick = otherHandlers => event => {
    if (!disabled) {
      var _otherHandlers$onClic;
      (_otherHandlers$onClic = otherHandlers.onClick) == null || _otherHandlers$onClic.call(otherHandlers, event);
    }
  };
  const createHandleMouseDown = otherHandlers => event => {
    var _otherHandlers$onMous2;
    if (!disabled) {
      setActive(true);
      document.addEventListener('mouseup', () => {
        setActive(false);
      }, {
        once: true
      });
    }
    (_otherHandlers$onMous2 = otherHandlers.onMouseDown) == null || _otherHandlers$onMous2.call(otherHandlers, event);
  };
  const createHandleKeyDown = otherHandlers => event => {
    var _otherHandlers$onKeyD;
    (_otherHandlers$onKeyD = otherHandlers.onKeyDown) == null || _otherHandlers$onKeyD.call(otherHandlers, event);
    if (event.defaultMuiPrevented) {
      return;
    }
    if (event.target === event.currentTarget && !isNativeButton() && event.key === ' ') {
      event.preventDefault();
    }
    if (event.target === event.currentTarget && event.key === ' ' && !disabled) {
      setActive(true);
    }

    // Keyboard accessibility for non interactive elements
    if (event.target === event.currentTarget && !isNativeButton() && event.key === 'Enter' && !disabled) {
      var _otherHandlers$onClic2;
      (_otherHandlers$onClic2 = otherHandlers.onClick) == null || _otherHandlers$onClic2.call(otherHandlers, event);
      event.preventDefault();
    }
  };
  const createHandleKeyUp = otherHandlers => event => {
    var _otherHandlers$onKeyU;
    // calling preventDefault in keyUp on a <button> will not dispatch a click event if Space is pressed
    // https://codesandbox.io/p/sandbox/button-keyup-preventdefault-dn7f0

    if (event.target === event.currentTarget) {
      setActive(false);
    }
    (_otherHandlers$onKeyU = otherHandlers.onKeyUp) == null || _otherHandlers$onKeyU.call(otherHandlers, event);

    // Keyboard accessibility for non interactive elements
    if (event.target === event.currentTarget && !isNativeButton() && !disabled && event.key === ' ' && !event.defaultMuiPrevented) {
      var _otherHandlers$onClic3;
      (_otherHandlers$onClic3 = otherHandlers.onClick) == null || _otherHandlers$onClic3.call(otherHandlers, event);
    }
  };
  const handleRef = (0, _utils.unstable_useForkRef)(updateRootElementName, externalRef, focusVisibleRef, buttonRef);
  const buttonProps = {};
  if (tabIndex !== undefined) {
    buttonProps.tabIndex = tabIndex;
  }
  if (rootElementName === 'BUTTON') {
    buttonProps.type = type != null ? type : 'button';
    if (focusableWhenDisabled) {
      buttonProps['aria-disabled'] = disabled;
    } else {
      buttonProps.disabled = disabled;
    }
  } else if (rootElementName === 'INPUT') {
    if (type && ['button', 'submit', 'reset'].includes(type)) {
      if (focusableWhenDisabled) {
        buttonProps['aria-disabled'] = disabled;
      } else {
        buttonProps.disabled = disabled;
      }
    }
  } else if (rootElementName !== '') {
    if (!href && !to) {
      buttonProps.role = 'button';
      buttonProps.tabIndex = tabIndex != null ? tabIndex : 0;
    }
    if (disabled) {
      buttonProps['aria-disabled'] = disabled;
      buttonProps.tabIndex = focusableWhenDisabled ? tabIndex != null ? tabIndex : 0 : -1;
    }
  }
  const getRootProps = (externalProps = {}) => {
    const externalEventHandlers = (0, _extends2.default)({}, (0, _extractEventHandlers.extractEventHandlers)(parameters), (0, _extractEventHandlers.extractEventHandlers)(externalProps));
    const props = (0, _extends2.default)({
      type
    }, externalEventHandlers, buttonProps, externalProps, {
      onBlur: createHandleBlur(externalEventHandlers),
      onClick: createHandleClick(externalEventHandlers),
      onFocus: createHandleFocus(externalEventHandlers),
      onKeyDown: createHandleKeyDown(externalEventHandlers),
      onKeyUp: createHandleKeyUp(externalEventHandlers),
      onMouseDown: createHandleMouseDown(externalEventHandlers),
      onMouseLeave: createHandleMouseLeave(externalEventHandlers),
      ref: handleRef
    });

    // onFocusVisible can be present on the props or parameters,
    // but it's not a valid React event handler so it must not be forwarded to the inner component.
    // If present, it will be handled by the focus handler.
    delete props.onFocusVisible;
    return props;
  };
  return {
    getRootProps,
    focusVisible,
    setFocusVisible,
    active,
    rootRef: handleRef
  };
}