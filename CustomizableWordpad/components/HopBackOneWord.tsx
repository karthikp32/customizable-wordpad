import * as React from 'react';

import { Text, TextProps } from './Themed';

export function HopBackOneWord(props: TextProps) {
  return <Text {...props} style={[props.style, { fontFamily: 'space-mono' }]} />;
}
