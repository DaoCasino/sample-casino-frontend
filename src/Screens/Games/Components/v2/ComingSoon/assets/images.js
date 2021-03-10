import * as csx1png from './cs_x1.png';
import * as csx1webp from './cs_x1.webp';

import * as csx3png from './cs_x3.png';
import * as csx3webp from './cs_x3.webp';

export default {
  'image/webp': { '1x': csx1webp, '2x': csx3webp },
  'image/png': { '1x': csx1png, '2x': csx3png },
};
