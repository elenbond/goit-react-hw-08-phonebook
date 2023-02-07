import PropTypes from 'prop-types';
import { SectionStyled, Title, Container } from './Section.styled';

const Section = ({ title, children }) => { 
    return (
        <SectionStyled>
            <Container>
                <Title>{title}</Title>
                {children}
            </Container>
        </SectionStyled>
    )
}

export default Section;

Section.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
}