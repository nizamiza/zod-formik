import { ZodSchema, TypeOf } from "zod";
import { FormikConfig, FormikHelpers } from "formik";

export type FormValues<Schema extends ZodSchema> = TypeOf<Schema>;

export type FormProps<Schema extends ZodSchema> = Omit<
  FormikConfig<FormValues<Schema>>,
  "validationSchema"
> & {
  validationSchema: Schema;
};

export type SubmitHandler<Schema extends ZodSchema> = (
  values: FormValues<Schema>,
  formikBag: FormikHelpers<FormValues<Schema>>
) => void;

export type SubmitHandlerParameters<Schema extends ZodSchema> = Parameters<
  SubmitHandler<Schema>
>;

/**
 * Credit goes to Aleksei Tsikov, author of the post:
 * @see https://dev.to/tipsy_dev/advanced-typescript-reinventing-lodash-get-4fhe
 */
export type PropertyType<T, P> = P extends `${infer Left}.${infer Right}`
  ? Left extends keyof T
    ?
        | PropertyType<Exclude<T[Left], undefined>, Right>
        | Extract<T[Left], undefined>
    : undefined
  : P extends keyof T
  ? T[P]
  : undefined;

/**
 * Recursive property types...
 * @see https://stackoverflow.com/questions/58434389/typescript-deep-keyof-of-a-nested-object
 */
type Join<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}${"" extends P ? "" : "."}${P}`
    : never
  : never;

type Previous = [
  never,
  0,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  16,
  17,
  18,
  19,
  20,
  ...0[]
];

export type NestedProperty<Type, Depth extends number = 10> = [Depth] extends [
  never
]
  ? never
  : Type extends object
  ? {
  [K in keyof Type]-?: K extends string | number
        ? `${K}` | Join<K, NestedProperty<Type[K], Previous[Depth]>>
        : never;
}[keyof Type]
  : "";

export type LeafProperty<Type, Depth extends number = 10> = [Depth] extends [
  never
]
  ? never
  : Type extends object
  ? {
  [K in keyof Type]-?: Join<K, LeafProperty<Type[K], Previous[Depth]>>;
}[keyof Type]
  : "";
