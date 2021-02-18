import Icon from "@ant-design/icons";
import { Tooltip } from "antd";
import * as Const from '../../constants'

export default function IconSvg(data){
    return (
        <Tooltip 
            title={ data.tooltip }>
                <Icon
                    component={ Const.projectsLogosTechnologies[data.logo] } />
        </Tooltip>
    )
}