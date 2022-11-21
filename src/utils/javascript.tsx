export const equal = (obj1: string | number, obj2: string | number = 0) => obj1 === obj2;

export const length = (obj: any) => obj?.length;

export const keys = (value: Object) => value ? Object.keys(value) : [];

export const entries = (value: Object) => Object.entries(value);

export const ternary = (bool: any, truth: any, faulty: any) => (bool ? truth : faulty);