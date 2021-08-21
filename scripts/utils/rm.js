import { promises } from 'fs';

// @ts-ignore we know, node 12. we know.
export const rm = promises.rm || promises.rmdir;
