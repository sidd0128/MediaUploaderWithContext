import InfoBoxVariant from './InfoBoxVariant';
import InfoBoxVariantStyle from './InfoBoxVariantStyle';

type InfoBoxPalette = {
  [variant in InfoBoxVariant]: InfoBoxVariantStyle;
};

export default InfoBoxPalette;
