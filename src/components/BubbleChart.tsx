import React, { useMemo, useRef } from 'react';
import counter from '../utils/counter';

interface IProps {
  dataPoints: IDataPoint[],
  config?: {
    title?: string,
    tooltipLabel?: string,
    height?: string,
    width?: string,
    containerPadding?: string,
    groupClasses?: string[]
  }
}

interface IDataPoint { 
  value: number, 
  label: string,
  groupClass?: string
}

function getSqRootValue (a: number, b: number): number {
  return Math.sqrt(((a/b) * 100) * 2)
};

export default function BubbleChart(props: IProps) {

  const { 
    dataPoints,
    config 
  } = props;

  const dataPointsSorted = useMemo(() => dataPoints.sort(function (a, b) { return b.value - a.value }), [dataPoints]);
  const maxValue = dataPointsSorted[0].value;
  const maxSqrValue = useMemo(() => getSqRootValue(maxValue, maxValue), [maxValue]);
  const height = config?.height || '500px';
  const width = config?.width || '100%';
  const containerPadding = config?.containerPadding || '10px';
  const countDivisor = config?.groupClasses?.length || 0;
  const counterRef = useRef(counter(countDivisor));

  return (
    <div className='bubble-chart'>
      { config?.title && <div className='text-md text-center pb-4 underline'>{ config.title }</div> }
      <div className='bubbles-container rounded-box border-2 border-primary p-4 relative' style={{ height, width }}>
      {
        dataPointsSorted.map((dataPoint: IDataPoint, index: number) => {

          if (dataPoint.value > 0) {
            return (    
              <div 
                key={dataPoint.label} 
                className={`${config?.groupClasses ? config.groupClasses[counterRef.current(index)] : 'bg-secondary'} mt-auto mx-auto mb-0 w-1/2 flex justify-center text-black absolute rounded-xl pt-4 tooltip`}
                data-tip={`${dataPoint.value} ${config?.tooltipLabel}`}
                style={{ 
                  height: `calc(${(getSqRootValue(dataPoint.value, maxValue)/maxSqrValue) * 100}% - ${containerPadding})`,
                  width: `calc(${(getSqRootValue(dataPoint.value, maxValue)/maxSqrValue) * 100}% - ${containerPadding})`, 
                  borderRadius: '100%',
                  bottom: `calc(${containerPadding}/2)`,
                  border: config?.groupClasses ? '' : '1px dashed grey',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  transition: 'all 500ms ease'
                }}>
                  <span className='text-xs'>{dataPoint.label} - {dataPoint.value}</span>
                </div>)
          } else {
            return null
          }
        })
      }
      </div>
    </div>
  )
};