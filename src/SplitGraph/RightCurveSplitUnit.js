import SplitUnit from './SplitUnit';
import styled from 'styled-components';

const getBorderRadius = props => props.radius

const RightCurveSplitUnit = styled(SplitUnit)`
    border-radius: 0 ${getBorderRadius} ${getBorderRadius} 0;
`

export default RightCurveSplitUnit