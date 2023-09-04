import { Container, ContainerTitle } from './Section.styled';
import PropTypes from 'prop-types';

export const Section = ({ title, children }) => {
  return (
    <Container>
      <ContainerTitle>{title}</ContainerTitle>
      {children}
    </Container>
  );
};

Section.propType = {
  title: PropTypes.string.isRequired,
};
