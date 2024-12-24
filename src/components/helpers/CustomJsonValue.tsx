export type CustomJsonValue =
    | string
    | number
    | boolean
    | { [x: string]: CustomJsonValue }
    | Array<CustomJsonValue>
    | null;