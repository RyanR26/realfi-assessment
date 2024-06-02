'use client'

import { useContext } from 'react';
import { UserDataContext } from '@/contexts/userDataContextProvider';
import { IUser, IAppData } from '@/types';

export default function Home() {

  const userDataContext = useContext(UserDataContext);

  const data: IAppData | undefined = userDataContext?.userData;

  return (
    <div className='flex flex-wrap justify-center gap-x-[20px]'>
      <div className='w-max min-w-[500px]'>
        <div className='text-md text-center pb-4 underline'>User names</div>
        <div className="overflow-x-auto border-2 rounded-box border-primary">
          <table className="table table-pin-rows table-zebra table-pin-cols">
            <thead>
              <tr>
                <th></th>
                {
                  data?.userTableHeadings?.map((heading: string) => (
                    <th className='px-8' key={heading}>{ heading }</th>
                  ))
                }
              </tr>
            </thead>
            <tbody>
            {
              data?.users?.map((user: IUser, index: number) => (
                <tr key={user.name + user.surname}>
                  <th>{index + 1}</th>
                  <td className='px-8'>{user.name}</td>
                  <td className='px-8'>{user.surname}</td>
                </tr>
              ))
            }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};