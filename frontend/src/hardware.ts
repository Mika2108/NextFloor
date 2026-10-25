// What the device can do, for features that would overload a weak wall tablet.

/** A weak device: little memory, few cores, or an Amazon Fire tablet (Silk browser, KF… models). */
export function isLowEnd(): boolean {
  const nav = navigator as Navigator & { deviceMemory?: number };
  const mem = nav.deviceMemory ?? 8;
  const cores = navigator.hardwareConcurrency || 8;
  return mem <= 3 || cores <= 4 || /Silk|KF[A-Z]{2,4}\b/.test(navigator.userAgent);
}
