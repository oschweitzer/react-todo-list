import { PropTypes } from 'prop-types';
import styled from 'styled-components';

const ColumnContainer = styled.div`
  border: ${(props) => (props.addBorder ? '1px solid #eeeeee' : 'none')};
  border-radius: 5px;
  padding: 2% 5% 2% 5%;
  margin: 2%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

ColumnContainer.propTypes = {
  addBorder: PropTypes.bool,
};

export default ColumnContainer;
