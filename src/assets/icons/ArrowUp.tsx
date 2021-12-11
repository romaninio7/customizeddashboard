import {SvgRotate} from "components";
import {ESvgRotateDirection} from "../../components/Svg/types";

export const ArrowUp = () =>
    <SvgRotate
        viewBox="0 0 12 8"
        direction={ESvgRotateDirection.UP}
    >
        <path d="M10.59 0.589996L6 5.17L1.41 0.589996L0 2L6 8L12 2L10.59 0.589996Z"/>
    </SvgRotate>;
