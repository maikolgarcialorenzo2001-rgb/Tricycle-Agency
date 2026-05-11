export interface ClientServicesModel {
    id: string,
    name: string,
    externalPrice?: number,
    intermunicipalPrice?: number,
    reservedPrice?: number, 
    description: string,
    imgRoute: string,
    fullDescription?: string,
    minPrice?: number,
    maxPrice?: number,
    stimateTime: string
}
