import * as $Enums from "./enums.js";
import type * as Prisma from "./internal/prismaNamespace.js";
export type IntFilter<$PrismaModel = never> = {
    equals?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    in?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel>;
    lt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedIntFilter<$PrismaModel> | number;
};
export type StringFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    in?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    startsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    endsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    mode?: Prisma.QueryMode;
    not?: Prisma.NestedStringFilter<$PrismaModel> | string;
};
export type EnumfuncaoUsuarioFilter<$PrismaModel = never> = {
    equals?: $Enums.funcaoUsuario | Prisma.EnumfuncaoUsuarioFieldRefInput<$PrismaModel>;
    in?: $Enums.funcaoUsuario[] | Prisma.ListEnumfuncaoUsuarioFieldRefInput<$PrismaModel>;
    notIn?: $Enums.funcaoUsuario[] | Prisma.ListEnumfuncaoUsuarioFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumfuncaoUsuarioFilter<$PrismaModel> | $Enums.funcaoUsuario;
};
export type EnumperiodosFilter<$PrismaModel = never> = {
    equals?: $Enums.periodos | Prisma.EnumperiodosFieldRefInput<$PrismaModel>;
    in?: $Enums.periodos[] | Prisma.ListEnumperiodosFieldRefInput<$PrismaModel>;
    notIn?: $Enums.periodos[] | Prisma.ListEnumperiodosFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumperiodosFilter<$PrismaModel> | $Enums.periodos;
};
export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | Prisma.BooleanFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedBoolFilter<$PrismaModel> | boolean;
};
export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDateTimeFilter<$PrismaModel> | Date | string;
};
export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    in?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel>;
    lt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _avg?: Prisma.NestedFloatFilter<$PrismaModel>;
    _sum?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedIntFilter<$PrismaModel>;
    _max?: Prisma.NestedIntFilter<$PrismaModel>;
};
export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    in?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    startsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    endsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    mode?: Prisma.QueryMode;
    not?: Prisma.NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedStringFilter<$PrismaModel>;
    _max?: Prisma.NestedStringFilter<$PrismaModel>;
};
export type EnumfuncaoUsuarioWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.funcaoUsuario | Prisma.EnumfuncaoUsuarioFieldRefInput<$PrismaModel>;
    in?: $Enums.funcaoUsuario[] | Prisma.ListEnumfuncaoUsuarioFieldRefInput<$PrismaModel>;
    notIn?: $Enums.funcaoUsuario[] | Prisma.ListEnumfuncaoUsuarioFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumfuncaoUsuarioWithAggregatesFilter<$PrismaModel> | $Enums.funcaoUsuario;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumfuncaoUsuarioFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumfuncaoUsuarioFilter<$PrismaModel>;
};
export type EnumperiodosWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.periodos | Prisma.EnumperiodosFieldRefInput<$PrismaModel>;
    in?: $Enums.periodos[] | Prisma.ListEnumperiodosFieldRefInput<$PrismaModel>;
    notIn?: $Enums.periodos[] | Prisma.ListEnumperiodosFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumperiodosWithAggregatesFilter<$PrismaModel> | $Enums.periodos;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumperiodosFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumperiodosFilter<$PrismaModel>;
};
export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | Prisma.BooleanFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedBoolWithAggregatesFilter<$PrismaModel> | boolean;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedBoolFilter<$PrismaModel>;
    _max?: Prisma.NestedBoolFilter<$PrismaModel>;
};
export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedDateTimeFilter<$PrismaModel>;
    _max?: Prisma.NestedDateTimeFilter<$PrismaModel>;
};
export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    startsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    endsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    mode?: Prisma.QueryMode;
    not?: Prisma.NestedStringNullableFilter<$PrismaModel> | string | null;
};
export type EnummodalidadePrefFilter<$PrismaModel = never> = {
    equals?: $Enums.modalidadePref | Prisma.EnummodalidadePrefFieldRefInput<$PrismaModel>;
    in?: $Enums.modalidadePref[] | Prisma.ListEnummodalidadePrefFieldRefInput<$PrismaModel>;
    notIn?: $Enums.modalidadePref[] | Prisma.ListEnummodalidadePrefFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnummodalidadePrefFilter<$PrismaModel> | $Enums.modalidadePref;
};
export type EnumstatusSolicitFilter<$PrismaModel = never> = {
    equals?: $Enums.statusSolicit | Prisma.EnumstatusSolicitFieldRefInput<$PrismaModel>;
    in?: $Enums.statusSolicit[] | Prisma.ListEnumstatusSolicitFieldRefInput<$PrismaModel>;
    notIn?: $Enums.statusSolicit[] | Prisma.ListEnumstatusSolicitFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumstatusSolicitFilter<$PrismaModel> | $Enums.statusSolicit;
};
export type SortOrderInput = {
    sort: Prisma.SortOrder;
    nulls?: Prisma.NullsOrder;
};
export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    startsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    endsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    mode?: Prisma.QueryMode;
    not?: Prisma.NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedStringNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedStringNullableFilter<$PrismaModel>;
};
export type EnummodalidadePrefWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.modalidadePref | Prisma.EnummodalidadePrefFieldRefInput<$PrismaModel>;
    in?: $Enums.modalidadePref[] | Prisma.ListEnummodalidadePrefFieldRefInput<$PrismaModel>;
    notIn?: $Enums.modalidadePref[] | Prisma.ListEnummodalidadePrefFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnummodalidadePrefWithAggregatesFilter<$PrismaModel> | $Enums.modalidadePref;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnummodalidadePrefFilter<$PrismaModel>;
    _max?: Prisma.NestedEnummodalidadePrefFilter<$PrismaModel>;
};
export type EnumstatusSolicitWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.statusSolicit | Prisma.EnumstatusSolicitFieldRefInput<$PrismaModel>;
    in?: $Enums.statusSolicit[] | Prisma.ListEnumstatusSolicitFieldRefInput<$PrismaModel>;
    notIn?: $Enums.statusSolicit[] | Prisma.ListEnumstatusSolicitFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumstatusSolicitWithAggregatesFilter<$PrismaModel> | $Enums.statusSolicit;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumstatusSolicitFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumstatusSolicitFilter<$PrismaModel>;
};
export type EnumstatusMonitorFilter<$PrismaModel = never> = {
    equals?: $Enums.statusMonitor | Prisma.EnumstatusMonitorFieldRefInput<$PrismaModel>;
    in?: $Enums.statusMonitor[] | Prisma.ListEnumstatusMonitorFieldRefInput<$PrismaModel>;
    notIn?: $Enums.statusMonitor[] | Prisma.ListEnumstatusMonitorFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumstatusMonitorFilter<$PrismaModel> | $Enums.statusMonitor;
};
export type EnumstatusMonitorWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.statusMonitor | Prisma.EnumstatusMonitorFieldRefInput<$PrismaModel>;
    in?: $Enums.statusMonitor[] | Prisma.ListEnumstatusMonitorFieldRefInput<$PrismaModel>;
    notIn?: $Enums.statusMonitor[] | Prisma.ListEnumstatusMonitorFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumstatusMonitorWithAggregatesFilter<$PrismaModel> | $Enums.statusMonitor;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumstatusMonitorFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumstatusMonitorFilter<$PrismaModel>;
};
export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    in?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel>;
    lt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedIntFilter<$PrismaModel> | number;
};
export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    in?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    startsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    endsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedStringFilter<$PrismaModel> | string;
};
export type NestedEnumfuncaoUsuarioFilter<$PrismaModel = never> = {
    equals?: $Enums.funcaoUsuario | Prisma.EnumfuncaoUsuarioFieldRefInput<$PrismaModel>;
    in?: $Enums.funcaoUsuario[] | Prisma.ListEnumfuncaoUsuarioFieldRefInput<$PrismaModel>;
    notIn?: $Enums.funcaoUsuario[] | Prisma.ListEnumfuncaoUsuarioFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumfuncaoUsuarioFilter<$PrismaModel> | $Enums.funcaoUsuario;
};
export type NestedEnumperiodosFilter<$PrismaModel = never> = {
    equals?: $Enums.periodos | Prisma.EnumperiodosFieldRefInput<$PrismaModel>;
    in?: $Enums.periodos[] | Prisma.ListEnumperiodosFieldRefInput<$PrismaModel>;
    notIn?: $Enums.periodos[] | Prisma.ListEnumperiodosFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumperiodosFilter<$PrismaModel> | $Enums.periodos;
};
export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | Prisma.BooleanFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedBoolFilter<$PrismaModel> | boolean;
};
export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDateTimeFilter<$PrismaModel> | Date | string;
};
export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    in?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel>;
    lt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _avg?: Prisma.NestedFloatFilter<$PrismaModel>;
    _sum?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedIntFilter<$PrismaModel>;
    _max?: Prisma.NestedIntFilter<$PrismaModel>;
};
export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    in?: number[] | Prisma.ListFloatFieldRefInput<$PrismaModel>;
    notIn?: number[] | Prisma.ListFloatFieldRefInput<$PrismaModel>;
    lt?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedFloatFilter<$PrismaModel> | number;
};
export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    in?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    startsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    endsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedStringFilter<$PrismaModel>;
    _max?: Prisma.NestedStringFilter<$PrismaModel>;
};
export type NestedEnumfuncaoUsuarioWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.funcaoUsuario | Prisma.EnumfuncaoUsuarioFieldRefInput<$PrismaModel>;
    in?: $Enums.funcaoUsuario[] | Prisma.ListEnumfuncaoUsuarioFieldRefInput<$PrismaModel>;
    notIn?: $Enums.funcaoUsuario[] | Prisma.ListEnumfuncaoUsuarioFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumfuncaoUsuarioWithAggregatesFilter<$PrismaModel> | $Enums.funcaoUsuario;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumfuncaoUsuarioFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumfuncaoUsuarioFilter<$PrismaModel>;
};
export type NestedEnumperiodosWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.periodos | Prisma.EnumperiodosFieldRefInput<$PrismaModel>;
    in?: $Enums.periodos[] | Prisma.ListEnumperiodosFieldRefInput<$PrismaModel>;
    notIn?: $Enums.periodos[] | Prisma.ListEnumperiodosFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumperiodosWithAggregatesFilter<$PrismaModel> | $Enums.periodos;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumperiodosFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumperiodosFilter<$PrismaModel>;
};
export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | Prisma.BooleanFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedBoolWithAggregatesFilter<$PrismaModel> | boolean;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedBoolFilter<$PrismaModel>;
    _max?: Prisma.NestedBoolFilter<$PrismaModel>;
};
export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedDateTimeFilter<$PrismaModel>;
    _max?: Prisma.NestedDateTimeFilter<$PrismaModel>;
};
export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    startsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    endsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedStringNullableFilter<$PrismaModel> | string | null;
};
export type NestedEnummodalidadePrefFilter<$PrismaModel = never> = {
    equals?: $Enums.modalidadePref | Prisma.EnummodalidadePrefFieldRefInput<$PrismaModel>;
    in?: $Enums.modalidadePref[] | Prisma.ListEnummodalidadePrefFieldRefInput<$PrismaModel>;
    notIn?: $Enums.modalidadePref[] | Prisma.ListEnummodalidadePrefFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnummodalidadePrefFilter<$PrismaModel> | $Enums.modalidadePref;
};
export type NestedEnumstatusSolicitFilter<$PrismaModel = never> = {
    equals?: $Enums.statusSolicit | Prisma.EnumstatusSolicitFieldRefInput<$PrismaModel>;
    in?: $Enums.statusSolicit[] | Prisma.ListEnumstatusSolicitFieldRefInput<$PrismaModel>;
    notIn?: $Enums.statusSolicit[] | Prisma.ListEnumstatusSolicitFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumstatusSolicitFilter<$PrismaModel> | $Enums.statusSolicit;
};
export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    startsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    endsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedStringNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedStringNullableFilter<$PrismaModel>;
};
export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | Prisma.IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedIntNullableFilter<$PrismaModel> | number | null;
};
export type NestedEnummodalidadePrefWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.modalidadePref | Prisma.EnummodalidadePrefFieldRefInput<$PrismaModel>;
    in?: $Enums.modalidadePref[] | Prisma.ListEnummodalidadePrefFieldRefInput<$PrismaModel>;
    notIn?: $Enums.modalidadePref[] | Prisma.ListEnummodalidadePrefFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnummodalidadePrefWithAggregatesFilter<$PrismaModel> | $Enums.modalidadePref;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnummodalidadePrefFilter<$PrismaModel>;
    _max?: Prisma.NestedEnummodalidadePrefFilter<$PrismaModel>;
};
export type NestedEnumstatusSolicitWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.statusSolicit | Prisma.EnumstatusSolicitFieldRefInput<$PrismaModel>;
    in?: $Enums.statusSolicit[] | Prisma.ListEnumstatusSolicitFieldRefInput<$PrismaModel>;
    notIn?: $Enums.statusSolicit[] | Prisma.ListEnumstatusSolicitFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumstatusSolicitWithAggregatesFilter<$PrismaModel> | $Enums.statusSolicit;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumstatusSolicitFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumstatusSolicitFilter<$PrismaModel>;
};
export type NestedEnumstatusMonitorFilter<$PrismaModel = never> = {
    equals?: $Enums.statusMonitor | Prisma.EnumstatusMonitorFieldRefInput<$PrismaModel>;
    in?: $Enums.statusMonitor[] | Prisma.ListEnumstatusMonitorFieldRefInput<$PrismaModel>;
    notIn?: $Enums.statusMonitor[] | Prisma.ListEnumstatusMonitorFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumstatusMonitorFilter<$PrismaModel> | $Enums.statusMonitor;
};
export type NestedEnumstatusMonitorWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.statusMonitor | Prisma.EnumstatusMonitorFieldRefInput<$PrismaModel>;
    in?: $Enums.statusMonitor[] | Prisma.ListEnumstatusMonitorFieldRefInput<$PrismaModel>;
    notIn?: $Enums.statusMonitor[] | Prisma.ListEnumstatusMonitorFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumstatusMonitorWithAggregatesFilter<$PrismaModel> | $Enums.statusMonitor;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumstatusMonitorFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumstatusMonitorFilter<$PrismaModel>;
};
