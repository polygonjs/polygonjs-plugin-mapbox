import {CopObjNode} from 'polygonjs-engine/src/engine/nodes/obj/Cop';
import {ExtendedCopNodeChildrenMap} from '../../../ExtendedGeoNodeChildrenMap';
import {ParamsInitData} from 'polygonjs-engine/src/engine/nodes/utils/io/IOController';
import {CopNodeChildrenMap} from 'polygonjs-engine/src/engine/poly/registers/nodes/Cop';

export class ExtendedCopObjNode extends CopObjNode {
	createNode<S extends keyof ExtendedCopNodeChildrenMap>(
		node_class: S,
		params_init_value_overrides?: ParamsInitData
	): ExtendedCopNodeChildrenMap[S];
	createNode<K extends valueof<ExtendedCopNodeChildrenMap>>(
		node_class: Constructor<K>,
		params_init_value_overrides?: ParamsInitData
	): K;
	createNode<K extends valueof<ExtendedCopNodeChildrenMap>>(
		node_class: Constructor<K>,
		params_init_value_overrides?: ParamsInitData
	): K {
		return super.createNode(node_class, params_init_value_overrides) as K;
	}

	nodesByType<K extends keyof ExtendedCopNodeChildrenMap>(type: K): ExtendedCopNodeChildrenMap[K][] {
		return super.nodesByType(type as keyof CopNodeChildrenMap) as ExtendedCopNodeChildrenMap[K][];
	}
}
