import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import TabNavigation from '@/components/TabNavigation';
import UserDataProvider from '@/contexts/userDataContextProvider';
import getJsonData from '@/utils/getJsonData';
import { IUserData, IUser, IUserTableData, IAppData } from '@/types';
import getDependantsByCountryData from '@/utils/getDependantsByCountryData';
import getAgeGroupsData from '@/utils/getAgeGroupsData';
import getUsersByCountryData from '@/utils/getUsersByCountryData';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "RealFi Assessment",
  description: "Visualise user data",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  // Retrieve and build data objects server side and then pass to context provider for
  // access across all routes/pages.

  const data: IUserData = await getJsonData('/src/data/users.json');

  // Return data with only name and surname for User table
  const userTableData : IUserTableData = data ? 
    data?.users?.map((user: IUser) => ({
      name: user.name,
      surname: user.surname    
    })) : 
    null;
  
  // Create table headings from object keys
  const userTableHeadings: string[] | null = userTableData ? Object.keys(userTableData[0]) : null;
  
  // Dependants data
  const dependantsByCountryData = data ? getDependantsByCountryData(data): null;
  const dependantsByCountryFemaleData = data ? getDependantsByCountryData(data, 'Female'): null;
  const dependantsByCountryMaleData = data ? getDependantsByCountryData(data, 'Male'): null;

  // Age groups data
  const ageGroupsData = data ? getAgeGroupsData(data) : null;
  const ageGroupsFemaleData = data ? getAgeGroupsData(data, 'Female') : null;
  const ageGroupsMaleData = data ? getAgeGroupsData(data, 'Male') : null;

  // User country data
  const usersByCountryData = data ? getUsersByCountryData(data) : null;
  const usersByCountryFemaleData = data ? getUsersByCountryData(data, 'Female') : null;
  const usersByCountryMaleData = data ? getUsersByCountryData(data, 'Male') : null;

  // Global App data stored in context provider
  const appData: IAppData = {
    ...data,
    userTableHeadings,
    dependantsByCountryData: {
      total: dependantsByCountryData,
      male: dependantsByCountryMaleData,
      female: dependantsByCountryFemaleData
    },
    ageGroupsData: {
      total: ageGroupsData,
      male: ageGroupsMaleData,
      female: ageGroupsFemaleData
    },
    usersByCountryData: {
      total: usersByCountryData,
      male: usersByCountryMaleData,
      female: usersByCountryFemaleData
    }
  };

  return (
    <html lang='en' data-theme='cupcake'>
      <body className={inter.className}>
        <div className='container mx-auto'>
          <TabNavigation />
          <UserDataProvider data={appData}>
            <main className='p-24'>
              {children}
            </main>
          </UserDataProvider>
        </div>
      </body>
    </html>
  );
};
