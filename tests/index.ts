import {AllRegister} from 'polygonjs-engine/src/engine/poly/registers/All';
AllRegister.run();
import {polyPluginMapbox} from '../src/index';
import {Poly} from 'polygonjs-engine/src/engine/Poly';
import {token} from '../src/ExampleData';
polyPluginMapbox.setToken(token);
Poly.instance().registerPlugin(polyPluginMapbox);

import './helpers/setup';
import './tests';

QUnit.start();