import { createHash, Hash } from 'crypto';
function buildLegacy(): Hash { return createHash('md5'); }
export function digest(value: string): string { return buildLegacy().update(value).digest('hex'); }
