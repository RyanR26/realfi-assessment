export interface IUser {
  name: string,
  surname: string,
  number: number,
  gender: string,
  country: string
  dependants: number,
  birthDate: string
}

export interface IUserData {
  users: IUser[],
}

export interface IAppData extends IUserData {
  userTableHeadings: string[] | null,
  dependantsByCountryData: {
    total: IStringNumberKeyVal | null,
    male: IStringNumberKeyVal | null,
    female: IStringNumberKeyVal | null
  },
  ageGroupsData: {
    total: IStringNumberKeyVal | null,
    male: IStringNumberKeyVal | null,
    female: IStringNumberKeyVal | null
  },
  usersByCountryData: {
    total: IStringNumberKeyVal | null,
    male: IStringNumberKeyVal | null,
    female: IStringNumberKeyVal | null
  }
}

export type IUserTableData = {
  name: string, 
  surname: string
}[] | null

export interface IStringNumberKeyVal {
  [key: string]: number 
}

export interface IStringStringKeyVal {
  [key: string]: string 
}

export interface IStringAnyKeyVal {
  [key: string]: any 
}

export type IGender = 'Male' | 'Female'
