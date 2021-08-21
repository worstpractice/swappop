import { join } from 'path';
import { DIST_FOLDER } from '../constants/DIST_FOLDER.js';
import { noOp } from './noOp.js';
import { rm } from './rm.js';

/** @type {(...subfolders: readonly string[]) => Promise<void>} */
export const removeFromDist = async (...subfolders) => {
  const paths = subfolders.map((subfolder) => join(DIST_FOLDER, subfolder));

  for (const path of paths) {
    await rm(path, { recursive: true }).catch(noOp);
  }
};
