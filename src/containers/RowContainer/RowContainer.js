import styled from 'styled-components';
import { PropTypes } from 'prop-types';

const RowContainer = styled.div`
  margin-top: 5%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: ${(props) => (props.wrap ? 'wrap' : 'nowrap')};
`;

RowContainer.propTypes = {
  wrap: PropTypes.bool,
};

export default RowContainer;
