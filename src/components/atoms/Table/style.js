import styled from "styled-components";

export const Total = styled.td`
  font-weight: bold;
`;

export const Styles = styled.div`
  table {
    width: 100%;
    margin: 3em 0 3em;
    border-spacing: 0;
    border-radius: 8px;

    th,
    td {
      padding: 0.1rem;
      border-bottom: 1px solid #f4f6f8;
      text-align: left;
      padding-left: 3em;

      :last-child {
        border-right: 0;
      }

      &:nth-child(4) {
        text-align: left;
        padding: 0;
      }

      &:nth-child(3) {
        text-align: left;
        padding: 0;
      }
    }

    th {
      background: #f4f6f8;
      color: black;
      font-weight: 500;

      :last-child {
        border-radius: 0 8px 8px 0;
      }

      :first-child {
        border-radius: 8px 0 0 8px;
      }
    }
  }
`;

export const Column = styled.th`
  background: #f4f6f8;
  color: black;
  width: ${(props) => props.w};
  font-weight: 400;
`;

export const ColumnValues = styled.td`
  width: ${props => props.w};
  border-bottom: 1px solid #f4f6f8;

  .icon{
    margin-left: 6em;
  }
`;
