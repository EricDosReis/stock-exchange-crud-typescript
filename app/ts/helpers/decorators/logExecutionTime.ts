export function logExecutionTime() {
  return function(target: any, property: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;

    descriptor.value = function(...args: any[]) {
      console.log('---------------------------------------------------------');
      console.log(`Method: ${property}`);
      console.log(`Params: ${JSON.stringify(args)}`);

      const start = performance.now();

      const result = originalMethod.apply(this, args);

      const end = performance.now();

      console.log(`Return: ${JSON.stringify(result)}`);
      console.log(`Execution time: ${end - start}ms`);

      return result;
    }

    return descriptor;
  }
}
