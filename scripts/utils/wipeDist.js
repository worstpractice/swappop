import { DIST_FOLDER } from '../constants/DIST_FOLDER.js';
import { noOp } from './noOp.js';
import { rm } from './rm.js';

/** @type {() => Promise<void>} */
export const wipeDist = async () => {
  await rm(DIST_FOLDER, { recursive: true }).catch(noOp);
};
