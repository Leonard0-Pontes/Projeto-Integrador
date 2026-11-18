export declare const funcaoUsuario: {
    readonly Aluno: "Aluno";
    readonly Monitor: "Monitor";
};
export type funcaoUsuario = (typeof funcaoUsuario)[keyof typeof funcaoUsuario];
export declare const modalidadePref: {
    readonly Presencial: "Presencial";
    readonly Online: "Online";
    readonly Nenhuma: "Nenhuma";
};
export type modalidadePref = (typeof modalidadePref)[keyof typeof modalidadePref];
export declare const statusSolicit: {
    readonly Pendente: "Pendente";
    readonly Aceita: "Aceita";
};
export type statusSolicit = (typeof statusSolicit)[keyof typeof statusSolicit];
export declare const statusMonitor: {
    readonly Marcada: "Marcada";
    readonly Concluida: "Concluida";
    readonly Cancelada: "Cancelada";
};
export type statusMonitor = (typeof statusMonitor)[keyof typeof statusMonitor];
export declare const periodos: {
    readonly Primeiro: "Primeiro";
    readonly Segundo: "Segundo";
    readonly Terceiro: "Terceiro";
    readonly Quarto: "Quarto";
    readonly Quinto: "Quinto";
    readonly Sexto: "Sexto";
};
export type periodos = (typeof periodos)[keyof typeof periodos];
