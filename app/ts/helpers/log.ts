import { Loggable } from '../models/Loggable';

export function log(...objects: Loggable[]): void {
  objects
    .forEach(object => object.toText());
}
