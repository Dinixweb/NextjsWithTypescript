export type DataStructure = {
    companyName: string
    companyWebsite: string
    companyContact: number
    companyCity:string
}

export type CompanyData = {
    map(arg0: (e: any, i: any) => JSX.Element): import("react").ReactNode
    companies: {
        companyName: string;
        companyWebsite: string;
        companyStreet: string;
        companyCity: string;
        companyState: string;
        companyZipCode: number
        companyCountry: string;
    }[]
}