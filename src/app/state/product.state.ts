export enum DataStateEnum {
    LOADING,
    LOADED,
    ERROR
}

export enum ActionEventType {
    ADMIN_ALL_CLIENTS,
    ADMIN_CONFIRME_CLIENT_SUPPRESSION,
    ADMIN_WANT_TO_DELETE,
    ADMIN_ALL_COMPTES,
    ADMIN_ALL_USERS
}

export interface ActionEvent {
    type : ActionEventType,
    data : any
}

export interface AppDataState<T>{
    dataState ?: DataStateEnum,
    data ?: T,
    errorMessage  ?:string
}