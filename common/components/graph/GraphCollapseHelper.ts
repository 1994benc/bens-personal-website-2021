import { depthFirstSearch } from "@antv/algorithm";
import G6, { Algorithm, GraphData, NodeConfig } from "@antv/g6";

export enum GraphCollapseTypeEnum {
    getAllDescendants = 'showOnlySelectedAndAncestorsAndDescendants'
}


export class GraphCollapseHelper {
    public static getRemainingNodeIds(data: GraphData, selectedNodeId: string, type: GraphCollapseTypeEnum) {
        const visibleNodeIds: string[] = [];
        console.log(data)
        if (type === GraphCollapseTypeEnum.getAllDescendants && data) {
            depthFirstSearch(data as any, selectedNodeId, {
                enter: (param) => {
                    visibleNodeIds.push(param.current);
                }
            })
        }

        return visibleNodeIds;
    }
}