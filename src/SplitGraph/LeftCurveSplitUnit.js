import SplitUnit from './SplitUnit';
import styled from 'styled-components';

const getBorderRadius = props => props.radius;

const LeftCurveSplitUnit = styled(SplitUnit)`
    border-radius: ${getBorderRadius} 0 0 ${getBorderRadius}
`

export default LeftCurveSplitUnit