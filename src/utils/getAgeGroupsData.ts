import { IUserData, IGender, IStringNumberKeyVal } from '@/types';
import calculateCurrentAge from './calculateCurrentAge';

export default function getAgeGroupsData(data: IUserData, gender?: IGender)  {
  
  const ageGroups: string[] = ['0-10', '11-20', '21-30', '31-40', '41-50', '51-60', '61-70', '71-80', '81-90', '91-100'];
  const usersPerAgeGroup: number[] = [0,0,0,0,0,0,0,0,0,0];
  const output: IStringNumberKeyVal = {};

  data.users.forEach((user) => {
    if (!gender || gender === user.gender) {
      const birthDayDate: Date = new Date(user.birthDate); // date string to Date 
      const age: number = calculateCurrentAge(birthDayDate); // get age in years
      const ageArray: string[] = age.toString().split(''); // split age to get decade and yearly values
      const decade: number = parseInt(ageArray[0]);
      const year: number = parseInt(ageArray[1]);
      const index: number = year > 0 ? decade : decade - 1;
      const ageGroupLabel: string = ageGroups[index];
      usersPerAgeGroup[index] = usersPerAgeGroup[decade] + 1;
      output[ageGroupLabel] = usersPerAgeGroup[index];
    }
  });

  return output;
};