import React from 'react';
import styled from 'styled-components';

const StyledRowAccordion = styled.div`
  float: left;
  display: flex;
  align-items: center;
  width: 95%;
  height: 32px;

  .title {
    font-size: 14px;
    color: #696974;
  }

  > .line {
    flex: 1;
    height: 1px;
    margin-left: 10px;
    background: #CCCCD6;
  }
`;

export default function TableRowAccordion({ value = '' }) {
  return (
    <StyledRowAccordion>
      <span className="title">{value}</span>
      <div className="line" />
    </StyledRowAccordion>
  );
}
