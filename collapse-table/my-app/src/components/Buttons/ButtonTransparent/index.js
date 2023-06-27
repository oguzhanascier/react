import { Button } from 'antd';
import styled from 'styled-components';

const ButtonTransparent = styled(Button).attrs(() => ({
  className: 'btn-transparent',
}))`
  &.ant-btn {
    border: none;
    background: transparent;
    padding: 5px;
    box-shadow: unset;
  }
`;

export default ButtonTransparent;
