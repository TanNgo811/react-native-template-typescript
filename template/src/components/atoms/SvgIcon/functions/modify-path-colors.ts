import type {ReactNode} from 'react';
import React from 'react';
import type {PathProps} from 'react-native-svg';

export function modifyPathColor(
  child: React.ReactNode,
  solid: boolean | undefined,
  props: Pick<PathProps, 'fill' | 'stroke'>,
): React.ReactNode {
  const {fill, stroke} = props;

  if (React.isValidElement<any>(child)) {
    return React.cloneElement(
      child,
      child?.props?.fill || child?.props?.stroke
        ? {
            fill: solid ? fill : child.props.fill,
            stroke: solid ? stroke : child.props.stroke,
          }
        : {},
      child.props?.children
        ? React.Children.toArray(child.props.children).map(
            (childNode: ReactNode) => modifyPathColor(childNode, solid, props),
          )
        : [],
    );
  }
  return null;
}
