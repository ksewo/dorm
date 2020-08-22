export function Mixin<M extends { new(): unknown }> (mixins: M[]): (target: M) => void {
  return (target: M) => {
    mixins.forEach((mixin) => {
      Object.keys(mixin).forEach((key) => {
        // eslint-disable-next-line max-len
        const descriptor = Object.getOwnPropertyDescriptor(mixin.prototype, key) as PropertyDescriptor & ThisType<unknown>;

        Object.defineProperty(
          target.prototype,
          key,
          descriptor,
        );
      });
    });
  };
}

