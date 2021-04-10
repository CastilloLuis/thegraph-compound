import React from 'react';

export const Margin: React.FC<{
  top?: string, left?: string, bottom?: string, right?: string, children?: any
}> = (props) => (
    <div style={{
      marginTop: props.top,
      marginLeft: props.left,
      marginBottom: props.bottom,
      marginRight: props.right
    }}>
      { props.children }
    </div>
);
