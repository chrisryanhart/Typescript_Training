import 'reflect-metadata';
import { MetadataKeys } from './MetadataKeys';
import { RequestHandler } from 'express';

// use factory decorators whenever we want to take an argument
export function use(middleware: RequestHandler) {
  return function (target: any, key: string, desc: PropertyDescriptor): any{
    const middlewares = Reflect.getMetadata(MetadataKeys.middleware, target, key) || [];

    Reflect.defineMetadata(MetadataKeys.middleware, [...middlewares, middleware], target, key);
  };
}
