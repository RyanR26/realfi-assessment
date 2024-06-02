'use client'

import React, { useContext, useState, useMemo } from 'react';
import { UserDataContext } from '@/contexts/userDataContextProvider';
import { IAppData } from '@/types';
import BubbleChart from '@/components/BubbleChart';
import ColChart from '@/components/ColChart';
import WaffleChart from '@/components/WaffleChart';
import GenderFilter from '@/components/GenderFilter';

type IGenderState = 'total' | 'male' | 'female';

////////////////////
// Chart configs //
///////////////////

const bubbleChartConfig = {
  title: 'Dependents by country',
  tooltipLabel: 'Dependant(s)',
  height: '300px',
  width: '300px',
  containerPadding: '40px',
  groupClasses: ['bg-primary', 'bg-secondary', 'bg-accent']
};

const colChartConfig = {
  title: 'Users by age group',
  xLabel: 'Ages in years',
  tooltipLabel: 'User(s)',
  width: '500px',
  height: '300px'
};

const waffleChartConfig = {
  title: 'User percentage by country',
  tooltipLabel: 'of users',
  width: '300px',
  height: '300px',
  groupClasses: ['bg-primary', 'bg-secondary', 'bg-accent', 'bg-neutral-content']
};

export default function Page() {

  const userDataContext = useContext(UserDataContext);

  const data: IAppData | undefined = userDataContext?.userData;

  const [genderSelected, setGenderSelected] = useState<IGenderState>('total');

  const updateFilter = (target: IGenderState) => {
    setGenderSelected(target)
  }

  /////////////////////////////
  // Build chart data points //
  /////////////////////////////

  // Dependants Chart Data //
  const dependantsByCountryData = data?.dependantsByCountryData[genderSelected];
  const dependantsByCountryDataKeys = data ? Object.keys(dependantsByCountryData as object) : undefined;
  const bubbleChartData = useMemo(() => dependantsByCountryDataKeys?.map((key: string) => ({
    value: dependantsByCountryData ? dependantsByCountryData[key as keyof typeof dependantsByCountryData] : 0,
    label: key
  })), [dependantsByCountryData, dependantsByCountryDataKeys]);

  // AgeGroup Chart Data //
  const ageGroupsData = data?.ageGroupsData[genderSelected];
  const ageGroupsDataKeys = data ? Object.keys(ageGroupsData as object) : undefined;
  const colChartData = useMemo(() => ageGroupsDataKeys?.map((key: string) => ({
    y: ageGroupsData ? ageGroupsData[key as keyof typeof ageGroupsData] : 0,
    x: key
  })), [ageGroupsData, ageGroupsDataKeys]);

  // User Country Data //
  const usersByCountryData = data?.usersByCountryData[genderSelected];
  const usersByCountryDataKeys = data ? Object.keys(usersByCountryData as object) : undefined;
  const waffleChartData = useMemo(() => usersByCountryDataKeys?.map((key: string) => ({
    value: usersByCountryData ? usersByCountryData[key as keyof typeof usersByCountryData] : 0,
    label: key,
  })), [usersByCountryData, usersByCountryDataKeys]);

  return (
    <div>
      <GenderFilter onChangeCallback={updateFilter} />
      <div className='flex flex-wrap justify-center gap-x-[40px]'>
        { bubbleChartData && <BubbleChart dataPoints={bubbleChartData} config={bubbleChartConfig} /> }
        { colChartData && <ColChart dataPoints={colChartData} config={colChartConfig} /> }
        { waffleChartData && <WaffleChart dataPoints={waffleChartData} config={waffleChartConfig} /> }
      </div>
    </div>
  )
};
