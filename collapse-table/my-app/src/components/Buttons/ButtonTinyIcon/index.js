import { Button } from 'antd';
import styled from 'styled-components';

const ButtonTinyIcon = styled(Button).attrs(() => ({
  size: 'small',
  className: 'ant-btn-icon-only ant-btn-tiny',
}))`
  &.ant-btn {
    font-size: 18px;
    border: none;
    border-radius: 6px;
    color: #0062ff;
    box-shadow: 0 2px 5px 0 rgba(7, 68, 166, 0.34);

    path {
      stroke: #0062ff;
    }

    &:hover {
      color: #fff;
      background-color: rgba(255, 255, 255, 0.4);

      path {
        stroke: #fff;
      }
    }
  }
`;

export default ButtonTinyIcon;