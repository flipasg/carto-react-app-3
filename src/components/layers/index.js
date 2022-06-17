import StoresLayer from './StoresLayer';
import TilesetLayer from './TilesetLayer';
import { FeatureSelectionLayer } from '@carto/react-widgets';
// [hygen] Import layers
export const STORE_LAYER_NUMBER = 4;
export const getLayers = () => {
  return [
    ...new Array(STORE_LAYER_NUMBER).fill(0).map((zero, index) => StoresLayer(index)),
    TilesetLayer(),
    // FeatureSelectionLayer(),
    // [hygen] Add layer
  ];
};
