import * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../models.js";
import { type PrismaClient } from "./class.js";
export type * from '../models.js';
export type DMMF = typeof runtime.DMMF;
export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>;
export declare const PrismaClientKnownRequestError: typeof runtime.PrismaClientKnownRequestError;
export type PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
export declare const PrismaClientUnknownRequestError: typeof runtime.PrismaClientUnknownRequestError;
export type PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
export declare const PrismaClientRustPanicError: typeof runtime.PrismaClientRustPanicError;
export type PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
export declare const PrismaClientInitializationError: typeof runtime.PrismaClientInitializationError;
export type PrismaClientInitializationError = runtime.PrismaClientInitializationError;
export declare const PrismaClientValidationError: typeof runtime.PrismaClientValidationError;
export type PrismaClientValidationError = runtime.PrismaClientValidationError;
export declare const sql: typeof runtime.sqltag;
export declare const empty: runtime.Sql;
export declare const join: typeof runtime.join;
export declare const raw: typeof runtime.raw;
export declare const Sql: typeof runtime.Sql;
export type Sql = runtime.Sql;
export declare const Decimal: typeof runtime.Decimal;
export type Decimal = runtime.Decimal;
export type DecimalJsLike = runtime.DecimalJsLike;
export type Extension = runtime.Types.Extensions.UserArgs;
export declare const getExtensionContext: typeof runtime.Extensions.getExtensionContext;
export type Args<T, F extends runtime.Operation> = runtime.Types.Public.Args<T, F>;
export type Payload<T, F extends runtime.Operation = never> = runtime.Types.Public.Payload<T, F>;
export type Result<T, A, F extends runtime.Operation> = runtime.Types.Public.Result<T, A, F>;
export type Exact<A, W> = runtime.Types.Public.Exact<A, W>;
export type PrismaVersion = {
    client: string;
    engine: string;
};
export declare const prismaVersion: PrismaVersion;
export type Bytes = runtime.Bytes;
export type JsonObject = runtime.JsonObject;
export type JsonArray = runtime.JsonArray;
export type JsonValue = runtime.JsonValue;
export type InputJsonObject = runtime.InputJsonObject;
export type InputJsonArray = runtime.InputJsonArray;
export type InputJsonValue = runtime.InputJsonValue;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.AnyNull);
};
export declare const DbNull: runtime.DbNullClass;
export declare const JsonNull: runtime.JsonNullClass;
export declare const AnyNull: runtime.AnyNullClass;
type SelectAndInclude = {
    select: any;
    include: any;
};
type SelectAndOmit = {
    select: any;
    omit: any;
};
type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
};
export type Enumerable<T> = T | Array<T>;
export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
};
export type PrismaClientConstructorArgs<Options extends PrismaClientOptions> = [
    PrismaClientOptions
] extends [Options] ? PrismaClientOptions : Subset<Options, PrismaClientOptions>;
export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
} & (T extends SelectAndInclude ? 'Please either choose `select` or `include`.' : T extends SelectAndOmit ? 'Please either choose `select` or `omit`.' : {});
export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
} & K;
type Without<T, U> = {
    [P in Exclude<keyof T, keyof U>]?: never;
};
export type XOR<T, U> = T extends object ? U extends object ? ((Without<T, U> & U) | (Without<U, T> & T)) & object : U : T;
type IsObject<T extends any> = T extends Array<any> ? False : T extends Date ? False : T extends Uint8Array ? False : T extends BigInt ? False : T extends object ? True : False;
export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;
type __Either<O extends object, K extends Key> = Omit<O, K> & {
    [P in K]: Prisma__Pick<O, P & keyof O>;
}[K];
type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;
type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>;
type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
}[strict];
export type Either<O extends object, K extends Key, strict extends Boolean = 1> = O extends unknown ? _Either<O, K, strict> : never;
export type Union = any;
export type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
} & {};
export type IntersectOf<U extends Union> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;
export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
} & {};
type _Merge<U extends object> = IntersectOf<Overwrite<U, {
    [K in keyof U]-?: At<U, K>;
}>>;
type Key = string | number | symbol;
type AtStrict<O extends object, K extends Key> = O[K & keyof O];
type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
    1: AtStrict<O, K>;
    0: AtLoose<O, K>;
}[strict];
export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
} & {};
export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
} & {};
type _Record<K extends keyof any, T> = {
    [P in K]: T;
};
type NoExpand<T> = T extends unknown ? T : never;
export type AtLeast<O extends object, K extends string> = NoExpand<O extends unknown ? (K extends keyof O ? {
    [P in K]: O[P];
} & O : O) | {
    [P in keyof O as P extends K ? P : never]-?: O[P];
} & O : never>;
type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;
export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;
export type Boolean = True | False;
export type True = 1;
export type False = 0;
export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
}[B];
export type Extends<A1 extends any, A2 extends any> = [A1] extends [never] ? 0 : A1 extends A2 ? 1 : 0;
export type Has<U extends Union, U1 extends Union> = Not<Extends<Exclude<U1, U>, U1>>;
export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
        0: 0;
        1: 1;
    };
    1: {
        0: 1;
        1: 1;
    };
}[B1][B2];
export type Keys<U extends Union> = U extends unknown ? keyof U : never;
export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O ? O[P] : never;
} : never;
type FieldPaths<T, U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>> = IsObject<T> extends True ? U : T;
export type GetHavingFields<T> = {
    [K in keyof T]: Or<Or<Extends<'OR', K>, Extends<'AND', K>>, Extends<'NOT', K>> extends True ? T[K] extends infer TK ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never> : never : {} extends FieldPaths<T[K]> ? never : K;
}[keyof T];
type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
export type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;
export type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>;
export type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T;
export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;
type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>;
export declare const ModelName: {
    readonly Usuario: "Usuario";
    readonly Disciplinas: "Disciplinas";
    readonly Solicitacoes: "Solicitacoes";
    readonly Monitoria: "Monitoria";
    readonly Usuario_Disciplina: "Usuario_Disciplina";
};
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
export interface TypeMapCb<GlobalOmitOptions = {}> extends runtime.Types.Utils.Fn<{
    extArgs: runtime.Types.Extensions.InternalArgs;
}, runtime.Types.Utils.Record<string, any>> {
    returns: TypeMap<this['params']['extArgs'], GlobalOmitOptions>;
}
export type TypeMap<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
        omit: GlobalOmitOptions;
    };
    meta: {
        modelProps: "usuario" | "disciplinas" | "solicitacoes" | "monitoria" | "usuario_Disciplina";
        txIsolationLevel: TransactionIsolationLevel;
    };
    model: {
        Usuario: {
            payload: Prisma.$UsuarioPayload<ExtArgs>;
            fields: Prisma.UsuarioFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.UsuarioFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UsuarioPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.UsuarioFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UsuarioPayload>;
                };
                findFirst: {
                    args: Prisma.UsuarioFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UsuarioPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.UsuarioFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UsuarioPayload>;
                };
                findMany: {
                    args: Prisma.UsuarioFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UsuarioPayload>[];
                };
                create: {
                    args: Prisma.UsuarioCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UsuarioPayload>;
                };
                createMany: {
                    args: Prisma.UsuarioCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.UsuarioCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UsuarioPayload>[];
                };
                delete: {
                    args: Prisma.UsuarioDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UsuarioPayload>;
                };
                update: {
                    args: Prisma.UsuarioUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UsuarioPayload>;
                };
                deleteMany: {
                    args: Prisma.UsuarioDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.UsuarioUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.UsuarioUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UsuarioPayload>[];
                };
                upsert: {
                    args: Prisma.UsuarioUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UsuarioPayload>;
                };
                aggregate: {
                    args: Prisma.UsuarioAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateUsuario>;
                };
                groupBy: {
                    args: Prisma.UsuarioGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.UsuarioGroupByOutputType>[];
                };
                count: {
                    args: Prisma.UsuarioCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.UsuarioCountAggregateOutputType> | number;
                };
            };
        };
        Disciplinas: {
            payload: Prisma.$DisciplinasPayload<ExtArgs>;
            fields: Prisma.DisciplinasFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.DisciplinasFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DisciplinasPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.DisciplinasFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DisciplinasPayload>;
                };
                findFirst: {
                    args: Prisma.DisciplinasFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DisciplinasPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.DisciplinasFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DisciplinasPayload>;
                };
                findMany: {
                    args: Prisma.DisciplinasFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DisciplinasPayload>[];
                };
                create: {
                    args: Prisma.DisciplinasCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DisciplinasPayload>;
                };
                createMany: {
                    args: Prisma.DisciplinasCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.DisciplinasCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DisciplinasPayload>[];
                };
                delete: {
                    args: Prisma.DisciplinasDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DisciplinasPayload>;
                };
                update: {
                    args: Prisma.DisciplinasUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DisciplinasPayload>;
                };
                deleteMany: {
                    args: Prisma.DisciplinasDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.DisciplinasUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.DisciplinasUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DisciplinasPayload>[];
                };
                upsert: {
                    args: Prisma.DisciplinasUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DisciplinasPayload>;
                };
                aggregate: {
                    args: Prisma.DisciplinasAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateDisciplinas>;
                };
                groupBy: {
                    args: Prisma.DisciplinasGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.DisciplinasGroupByOutputType>[];
                };
                count: {
                    args: Prisma.DisciplinasCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.DisciplinasCountAggregateOutputType> | number;
                };
            };
        };
        Solicitacoes: {
            payload: Prisma.$SolicitacoesPayload<ExtArgs>;
            fields: Prisma.SolicitacoesFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.SolicitacoesFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SolicitacoesPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.SolicitacoesFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SolicitacoesPayload>;
                };
                findFirst: {
                    args: Prisma.SolicitacoesFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SolicitacoesPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.SolicitacoesFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SolicitacoesPayload>;
                };
                findMany: {
                    args: Prisma.SolicitacoesFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SolicitacoesPayload>[];
                };
                create: {
                    args: Prisma.SolicitacoesCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SolicitacoesPayload>;
                };
                createMany: {
                    args: Prisma.SolicitacoesCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.SolicitacoesCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SolicitacoesPayload>[];
                };
                delete: {
                    args: Prisma.SolicitacoesDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SolicitacoesPayload>;
                };
                update: {
                    args: Prisma.SolicitacoesUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SolicitacoesPayload>;
                };
                deleteMany: {
                    args: Prisma.SolicitacoesDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.SolicitacoesUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.SolicitacoesUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SolicitacoesPayload>[];
                };
                upsert: {
                    args: Prisma.SolicitacoesUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SolicitacoesPayload>;
                };
                aggregate: {
                    args: Prisma.SolicitacoesAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateSolicitacoes>;
                };
                groupBy: {
                    args: Prisma.SolicitacoesGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.SolicitacoesGroupByOutputType>[];
                };
                count: {
                    args: Prisma.SolicitacoesCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.SolicitacoesCountAggregateOutputType> | number;
                };
            };
        };
        Monitoria: {
            payload: Prisma.$MonitoriaPayload<ExtArgs>;
            fields: Prisma.MonitoriaFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.MonitoriaFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MonitoriaPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.MonitoriaFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MonitoriaPayload>;
                };
                findFirst: {
                    args: Prisma.MonitoriaFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MonitoriaPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.MonitoriaFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MonitoriaPayload>;
                };
                findMany: {
                    args: Prisma.MonitoriaFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MonitoriaPayload>[];
                };
                create: {
                    args: Prisma.MonitoriaCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MonitoriaPayload>;
                };
                createMany: {
                    args: Prisma.MonitoriaCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.MonitoriaCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MonitoriaPayload>[];
                };
                delete: {
                    args: Prisma.MonitoriaDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MonitoriaPayload>;
                };
                update: {
                    args: Prisma.MonitoriaUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MonitoriaPayload>;
                };
                deleteMany: {
                    args: Prisma.MonitoriaDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.MonitoriaUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.MonitoriaUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MonitoriaPayload>[];
                };
                upsert: {
                    args: Prisma.MonitoriaUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MonitoriaPayload>;
                };
                aggregate: {
                    args: Prisma.MonitoriaAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateMonitoria>;
                };
                groupBy: {
                    args: Prisma.MonitoriaGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.MonitoriaGroupByOutputType>[];
                };
                count: {
                    args: Prisma.MonitoriaCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.MonitoriaCountAggregateOutputType> | number;
                };
            };
        };
        Usuario_Disciplina: {
            payload: Prisma.$Usuario_DisciplinaPayload<ExtArgs>;
            fields: Prisma.Usuario_DisciplinaFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.Usuario_DisciplinaFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$Usuario_DisciplinaPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.Usuario_DisciplinaFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$Usuario_DisciplinaPayload>;
                };
                findFirst: {
                    args: Prisma.Usuario_DisciplinaFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$Usuario_DisciplinaPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.Usuario_DisciplinaFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$Usuario_DisciplinaPayload>;
                };
                findMany: {
                    args: Prisma.Usuario_DisciplinaFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$Usuario_DisciplinaPayload>[];
                };
                create: {
                    args: Prisma.Usuario_DisciplinaCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$Usuario_DisciplinaPayload>;
                };
                createMany: {
                    args: Prisma.Usuario_DisciplinaCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.Usuario_DisciplinaCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$Usuario_DisciplinaPayload>[];
                };
                delete: {
                    args: Prisma.Usuario_DisciplinaDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$Usuario_DisciplinaPayload>;
                };
                update: {
                    args: Prisma.Usuario_DisciplinaUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$Usuario_DisciplinaPayload>;
                };
                deleteMany: {
                    args: Prisma.Usuario_DisciplinaDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.Usuario_DisciplinaUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.Usuario_DisciplinaUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$Usuario_DisciplinaPayload>[];
                };
                upsert: {
                    args: Prisma.Usuario_DisciplinaUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$Usuario_DisciplinaPayload>;
                };
                aggregate: {
                    args: Prisma.Usuario_DisciplinaAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateUsuario_Disciplina>;
                };
                groupBy: {
                    args: Prisma.Usuario_DisciplinaGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Usuario_DisciplinaGroupByOutputType>[];
                };
                count: {
                    args: Prisma.Usuario_DisciplinaCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Usuario_DisciplinaCountAggregateOutputType> | number;
                };
            };
        };
    };
} & {
    other: {
        payload: any;
        operations: {
            $executeRaw: {
                args: [query: TemplateStringsArray | Sql, ...values: any[]];
                result: any;
            };
            $executeRawUnsafe: {
                args: [query: string, ...values: any[]];
                result: any;
            };
            $queryRaw: {
                args: [query: TemplateStringsArray | Sql, ...values: any[]];
                result: any;
            };
            $queryRawUnsafe: {
                args: [query: string, ...values: any[]];
                result: any;
            };
        };
    };
};
export declare const TransactionIsolationLevel: {
    readonly ReadUncommitted: "ReadUncommitted";
    readonly ReadCommitted: "ReadCommitted";
    readonly RepeatableRead: "RepeatableRead";
    readonly Serializable: "Serializable";
};
export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];
export declare const UsuarioScalarFieldEnum: {
    readonly id: "id";
    readonly nome: "nome";
    readonly email: "email";
    readonly senha_hash: "senha_hash";
    readonly funcao: "funcao";
    readonly curso: "curso";
    readonly periodo: "periodo";
    readonly is_admin: "is_admin";
    readonly ativo: "ativo";
    readonly criado_em: "criado_em";
    readonly atualizado_em: "atualizado_em";
};
export type UsuarioScalarFieldEnum = (typeof UsuarioScalarFieldEnum)[keyof typeof UsuarioScalarFieldEnum];
export declare const DisciplinasScalarFieldEnum: {
    readonly id: "id";
    readonly nome: "nome";
    readonly codigo: "codigo";
    readonly ativo: "ativo";
    readonly criado_em: "criado_em";
    readonly atualizado_em: "atualizado_em";
};
export type DisciplinasScalarFieldEnum = (typeof DisciplinasScalarFieldEnum)[keyof typeof DisciplinasScalarFieldEnum];
export declare const SolicitacoesScalarFieldEnum: {
    readonly id: "id";
    readonly aluno_id: "aluno_id";
    readonly disciplina_id: "disciplina_id";
    readonly assunto: "assunto";
    readonly descricao: "descricao";
    readonly preferencia_data: "preferencia_data";
    readonly preferencia_horario: "preferencia_horario";
    readonly preferencia_modal: "preferencia_modal";
    readonly preferencia_local: "preferencia_local";
    readonly status: "status";
    readonly criado_em: "criado_em";
    readonly atualizado_em: "atualizado_em";
};
export type SolicitacoesScalarFieldEnum = (typeof SolicitacoesScalarFieldEnum)[keyof typeof SolicitacoesScalarFieldEnum];
export declare const MonitoriaScalarFieldEnum: {
    readonly id: "id";
    readonly solicitacao_id: "solicitacao_id";
    readonly monitor_id: "monitor_id";
    readonly data: "data";
    readonly horario_inicio: "horario_inicio";
    readonly horario_fim: "horario_fim";
    readonly modalidade: "modalidade";
    readonly local: "local";
    readonly link: "link";
    readonly status: "status";
    readonly justificativa_cancel: "justificativa_cancel";
    readonly criado_em: "criado_em";
    readonly atualizado_em: "atualizado_em";
};
export type MonitoriaScalarFieldEnum = (typeof MonitoriaScalarFieldEnum)[keyof typeof MonitoriaScalarFieldEnum];
export declare const Usuario_DisciplinaScalarFieldEnum: {
    readonly id: "id";
    readonly usuario_id: "usuario_id";
    readonly disciplina_id: "disciplina_id";
    readonly funcao: "funcao";
    readonly criado_em: "criado_em";
};
export type Usuario_DisciplinaScalarFieldEnum = (typeof Usuario_DisciplinaScalarFieldEnum)[keyof typeof Usuario_DisciplinaScalarFieldEnum];
export declare const SortOrder: {
    readonly asc: "asc";
    readonly desc: "desc";
};
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
export declare const QueryMode: {
    readonly default: "default";
    readonly insensitive: "insensitive";
};
export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];
export declare const NullsOrder: {
    readonly first: "first";
    readonly last: "last";
};
export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];
export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>;
export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>;
export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>;
export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>;
export type EnumfuncaoUsuarioFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'funcaoUsuario'>;
export type ListEnumfuncaoUsuarioFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'funcaoUsuario[]'>;
export type EnumperiodosFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'periodos'>;
export type ListEnumperiodosFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'periodos[]'>;
export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>;
export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>;
export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>;
export type EnummodalidadePrefFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'modalidadePref'>;
export type ListEnummodalidadePrefFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'modalidadePref[]'>;
export type EnumstatusSolicitFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'statusSolicit'>;
export type ListEnumstatusSolicitFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'statusSolicit[]'>;
export type EnumstatusMonitorFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'statusMonitor'>;
export type ListEnumstatusMonitorFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'statusMonitor[]'>;
export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>;
export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>;
export type BatchPayload = {
    count: number;
};
export declare const defineExtension: runtime.Types.Extensions.ExtendsHook<"define", TypeMapCb, runtime.Types.Extensions.DefaultArgs>;
export type DefaultPrismaClient = PrismaClient;
export type ErrorFormat = 'pretty' | 'colorless' | 'minimal';
export interface PrismaClientBaseOptions {
    errorFormat?: ErrorFormat;
    log?: (LogLevel | LogDefinition)[];
    transactionOptions?: {
        maxWait?: number;
        timeout?: number;
        isolationLevel?: TransactionIsolationLevel;
    };
    omit?: GlobalOmitConfig;
    comments?: runtime.SqlCommenterPlugin[];
    queryPlanCacheMaxSize?: number;
}
export interface PrismaClientOptionsWithAccelerateUrl extends PrismaClientBaseOptions {
    accelerateUrl: string;
    adapter?: never;
}
export interface PrismaClientOptionsWithAdapter extends PrismaClientBaseOptions {
    adapter: runtime.SqlDriverAdapterFactory;
    accelerateUrl?: never;
}
export type PrismaClientOptions = PrismaClientOptionsWithAccelerateUrl | PrismaClientOptionsWithAdapter;
export type GlobalOmitConfig = {
    usuario?: Prisma.UsuarioOmit;
    disciplinas?: Prisma.DisciplinasOmit;
    solicitacoes?: Prisma.SolicitacoesOmit;
    monitoria?: Prisma.MonitoriaOmit;
    usuario_Disciplina?: Prisma.Usuario_DisciplinaOmit;
};
export type LogLevel = 'info' | 'query' | 'warn' | 'error';
export type LogDefinition = {
    level: LogLevel;
    emit: 'stdout' | 'event';
};
export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;
export type GetLogType<T> = CheckIsLogLevel<T extends LogDefinition ? T['level'] : T>;
export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition> ? GetLogType<T[number]> : never;
export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
};
export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
};
export type PrismaAction = 'findUnique' | 'findUniqueOrThrow' | 'findMany' | 'findFirst' | 'findFirstOrThrow' | 'create' | 'createMany' | 'createManyAndReturn' | 'update' | 'updateMany' | 'updateManyAndReturn' | 'upsert' | 'delete' | 'deleteMany' | 'executeRaw' | 'queryRaw' | 'aggregate' | 'count' | 'runCommandRaw' | 'findRaw' | 'groupBy';
export type TransactionClient = Omit<DefaultPrismaClient, runtime.ITXClientDenyList>;
