'use client'

import { createContext, useState } from 'react';
import { IAppData } from '@/types';

interface IProps {
  data: IAppData,
  children: React.ReactNode
}

interface IUserDataContext {
  userData: IAppData,
  setUserData: React.Dispatch<React.SetStateAction<IAppData>>
}

export const UserDataContext = createContext<IUserDataContext | null>(null);

export default function UserDataProvider({ data, children }: IProps) {

  const [userData, setUserData] = useState(data);

  return (
    <UserDataContext.Provider value={{ userData, setUserData }}>
      { children }
    </UserDataContext.Provider>
  )
};