export function logExecutionTime() {
  return function(target: any, key: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;

    descriptor.value = function(...args: any[]) {
      const result = originalMethod.apply(this, args);

      return result;
    }

    return descriptor;
  }
}
