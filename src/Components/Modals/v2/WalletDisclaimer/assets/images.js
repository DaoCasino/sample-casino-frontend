import * as step1x3png from './step1_x3.png';
import * as step2x3png from './step2_x3.png';
import * as step3x3png from './step3_x3.png';

import * as step1x1png from './step1_x1.png';
import * as step2x1png from './step2_x1.png';
import * as step3x1png from './step3_x1.png';

import * as step1x3webp from './step1_x3.webp';
import * as step2x3webp from './step2_x3.webp';
import * as step3x3webp from './step3_x3.webp';

import * as step1x1webp from './step1_x1.webp';
import * as step2x1webp from './step2_x1.webp';
import * as step3x1webp from './step3_x1.webp';

const step1 = {
  'image/webp': { '1x': step1x1webp, '2x': step1x3webp },
  'image/png': { '1x': step1x1png, '2x': step1x3png },
};

const step2 = {
  'image/webp': { '1x': step2x1webp, '2x': step2x3webp },
  'image/png': { '1x': step2x1png, '2x': step2x3png },
};

const step3 = {
  'image/webp': { '1x': step3x1webp, '2x': step3x3webp },
  'image/png': { '1x': step3x1png, '2x': step3x3png },
};

export default {
  step1,
  step2,
  step3,
};
