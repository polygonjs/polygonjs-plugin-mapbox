// let component;
import {CoreMapboxClient} from '../../../../core/mapbox/Client';
import {CoreStylesheetLoader} from 'polygonjs-engine/src/core/loader/Stylesheet';

export class MapboxViewerStylesheetController {
	static load() {
		CoreStylesheetLoader.loadUrl(CoreMapboxClient.CSS_URL);
	}
}
