import { IStringNumberKeyVal, IUserData, IGender } from '@/types';

export default function getDependantsByCountryData(data: IUserData, gender?: IGender): IStringNumberKeyVal {

  const output: IStringNumberKeyVal = {};

  data.users.forEach((user) => {
    if (!gender || gender === user.gender) {
      if (!output[user.country]) {
        output[user.country] = user.dependants;
      } else {
        output[user.country] = output[user.country] + user.dependants;
      }
    }
  })

  return output;
};
