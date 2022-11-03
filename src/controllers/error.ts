export const errorController = (controller:string, nameMethod:string)=>{
    throw new Error(`error in controller: ${controller} method: ${nameMethod}`)
}