import { verify as argonVerify, hash as argonHash } from 'argon2';

function verify(hashedPassword: string, plainPassword: string) {
  return argonVerify(hashedPassword, plainPassword);
}

function hash(plainPassword: string) {
  return argonHash(plainPassword, { type: 2 });
}

export { verify, hash };
