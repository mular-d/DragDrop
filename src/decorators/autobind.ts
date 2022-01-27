namespace App {
  // AutoBind Decorator
  export function AutoBind(
    _target: any,
    _methodName: string,
    descriptor: PropertyDescriptor
  ) {
    const originalMethod = descriptor.value;
    const adjDescriptor: PropertyDescriptor = {
      configurable: true,
      enumerable: false,

      get() {
        const boundFn = originalMethod.bind(this);
        return boundFn;
      },
    };
    return adjDescriptor;
  }
}
