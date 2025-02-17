'use client';

import * as React from 'react';
/**
 * @ignore - do not document.
 *
 * Use this function determine the host element correctly on the server (in a SSR context, for example Next.js)
 */
export function useRootElementName(parameters) {
  const {
    rootElementName: rootElementNameProp = '',
    componentName
  } = parameters;
  const [rootElementName, setRootElementName] = React.useState(rootElementNameProp.toUpperCase());
  if (process.env.NODE_ENV !== 'production') {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    React.useEffect(() => {
      if (rootElementNameProp && rootElementName !== rootElementNameProp.toUpperCase()) {
        console.error(`useRootElementName: the \`rootElementName\` prop of ${componentName ? `the ${componentName} component` : 'a component'} expected the '${rootElementNameProp}' element, but a '${rootElementName.toLowerCase()}' was rendered instead`, 'This may cause hydration issues in an SSR context, for example in a Next.js app');
      }
    }, [rootElementNameProp, rootElementName, componentName]);
  }
  const updateRootElementName = React.useCallback(instance => {
    var _instance$tagName;
    setRootElementName((_instance$tagName = instance == null ? void 0 : instance.tagName) != null ? _instance$tagName : '');
  }, []);
  return [rootElementName, updateRootElementName];
}