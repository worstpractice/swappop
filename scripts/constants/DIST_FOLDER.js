import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

// @ts-ignore `import.meta` complaints, not a real concern
const PROJECT_ROOT = globalThis.__dirname || dirname(fileURLToPath(import.meta.url));

export const DIST_FOLDER = join(PROJECT_ROOT, '..', '..', 'dist');
