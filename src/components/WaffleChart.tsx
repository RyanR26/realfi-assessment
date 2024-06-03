import React, { useMemo, useRef, Fragment } from 'react';
import counter from '../utils/counter';

interface IProps {
  dataPoints: IDataPoint[],
  config?: {
    title?: string,
    tooltipLabel?: string,
    height?: string,
    width?: string,
    containerPadding?: string
    groupClasses?: string[]
  }
}

interface IDataPoint { 
  value: number, 
  label: string
}

interface IData extends IDataPoint {
  percentage: number
}

export default function WaffleChart(props: IProps) {

  const { 
    dataPoints,
    config 
  } = props;

  var total = useMemo(() => dataPoints.reduce((accumulator, dataPoint: IDataPoint) => {
    return accumulator + dataPoint.value
  }, 0), [dataPoints]);

  const data = useMemo(() => dataPoints.map((dataPoint: IDataPoint) => ({
    ...dataPoint,
    percentage: Math.round((dataPoint.value/total) * 100)
  })), [dataPoints, total]);

  const countDivisor = config?.groupClasses?.length || 0;
  const counterRef = useRef(counter(countDivisor));
  const height = config?.height || '500px';
  const width = config?.width || '100%';

  return (
    <div className='waffle-chart'>
      { config?.title && <div className='text-md text-center pb-4 underline'>{ config.title }</div> }
      <div className='waffle-container rounded-box border-2 border-primary p-4 relative' style={{ height, width }}>
        <div className='grid grid-cols-10 w-full h-full gap-[1px]'>
        {
          data.map((dataPoint: IData, indexOuter: number) => {
            const colorIndex = counterRef.current(indexOuter);
            return (
            <Fragment key={indexOuter}>
              {
                [...Array(dataPoint.percentage).fill(dataPoint)].map((_, index) => (
                  <div 
                    key={index} 
                    className={`${config?.groupClasses ? config.groupClasses[colorIndex] : 'bg-secondary'} tooltip`}
                    style={{ borderRadius: '20%'}}
                    data-tip={`${dataPoint.label} - ${dataPoint.percentage}% ${config?.tooltipLabel}`}
                  >
                  </div>
                ))
              }            
            </Fragment> 
            )
          })  
        }
        </div>
      </div>
    </div>
  )
};