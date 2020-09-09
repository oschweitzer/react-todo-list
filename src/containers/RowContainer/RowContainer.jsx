import styled from 'styled-components';
import { PropTypes } from 'prop-types';

const RowContainer = styled.div`
  margin-top: 5%;
  display: flex;
  justify-content: ${(props) => props.justifyContent};
  align-items: center;
  flex-wrap: ${(props) => (props.flexWrap ? 'wrap' : 'nowrap')};
`;

RowContainer.propTypes = {
  flexWrap: PropTypes.bool,
  justifyContent: PropTypes.string,
};

RowContainer.defaultProps = {
  flexWrap: false,
  justifyContent: 'center',
};

export default RowContainer;
