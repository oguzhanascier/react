import React from 'react';
import { Icon } from 'antd';

export default function RowExpandIcon(props) {
  let icon;
  if (props.expanded) {
    icon = 'up';
  } else {
    icon = 'down';
  }
  return (
    <div className="expand-row-icon">
      <Icon type={icon} />
    </div>
  );
}
