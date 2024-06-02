import { IUserData, IGender, IStringNumberKeyVal } from '@/types';

export default function getUsersByCountryData(data: IUserData, gender?: IGender): IStringNumberKeyVal {

  const output: IStringNumberKeyVal = {};

  data.users.forEach((user) => {
    if (!gender || gender === user.gender) {
      if (!output[user.country]) {
        output[user.country] = 1;
      } else {
        output[user.country] = output[user.country] + 1;
      }
    }
  })

  return output;
};