declare type transfer = ( ctx: Context, app: Application ) => Array<{
    url: string,
    java: string,
    /** 非必填；若有多个方法，则用逗号分割 */
    method?: string
}>;