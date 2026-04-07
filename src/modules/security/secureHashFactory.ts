import { createHash, Hash } from 'crypto';
function buildSecure(): Hash { return createHash('sha256'); }
export function digest(value: string): string { return buildSecure().update(value).digest('hex'); }
