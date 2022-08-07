
export type CleanIntellisense<T> = {} & { [K in keyof T]: T[K] };
export type Modify<T, R> = CleanIntellisense<Pick<T, Exclude<keyof T, keyof R>> & R>