import * as crypto from 'crypto';

export function md5(str) {
  const hash = crypto.createHash('md5');
  hash.update(str);
  // hex 十六进制
  return hash.digest('hex');
}
