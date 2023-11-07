export type InputProps = {
    name:string;
    type?:string;
    text?: string;
    placeholder?:string;
    handleOnChange?:(e:any) => void;
    value?:string|number;
    options?: CategoryType[];

}
export type CategoryType = {
    id:number;
    category:string;
}
export type Service = {
    id:number;
    name:string;
}

export type ProjectType = {
    id?:number;
    name?:string;
    budget?:number;
    category?:CategoryType;
    cost?:number;
    services?:Service[];
}