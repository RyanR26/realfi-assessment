import React, { useMemo } from 'react';
import objArrayValueToArray from '../utils/objArrayValueToArray'

interface IProps {
  dataPoints: IDataPoint[],
  config?: {
    title?: string,
    xLabel? :string,
    tooltipLabel?: string,
    height?: string,
    width?: string
  }
}

interface IDataPoint { 
  x: string | number, 
  y: number,
  label?: string
}

export default function ColChart(props: IProps) {

  const { 
    dataPoints,
    config 
  } = props;
    
  // Sort age groups correctly - Had to use type 'any' with sort method to satisfy TS compiler 
  const dataPointsSorted = useMemo(() => dataPoints.sort((a:any, b:any) => (a.x || '').localeCompare(b.x || '')), [dataPoints]);
  const yValues = useMemo<number[]>(() => objArrayValueToArray(dataPoints, 'y'), [dataPoints]);
  const maxYValue = useMemo(() => Math.max(...yValues), [yValues]);
  const height = config?.height || '500px';
  const width = config?.width || '100%';

  return (
    <div className='col-chart'>
      { config?.title && <div className='text-md text-center pb-4 underline'>{ config.title }</div> }
      <div className='cols-container flex justify-evenly items-start border-2 rounded-box border-primary p-4' style={{ height, width }}>
      {
        dataPointsSorted.map((dataPoint: IDataPoint) => (
          <div key={dataPoint.x} className='h-full flex relative w-1/3'>
            <div 
            className='mt-auto mx-auto mb-0 w-1/3 bg-secondary flex justify-center text-black rounded-lg pt-4 tooltip'
            data-tip={`${dataPoint.y} ${config?.tooltipLabel}`} 
            style={{ 
              height: `${dataPoint.y/maxYValue * 100}%`,
              transition: 'all 500ms ease'
            }}
            >
              <span className='text-xs'>{dataPoint.y}</span>
            </div>
            <div className='absolute bottom-[-50px] ml-[50%] translate-x-[-50%]'>{dataPoint.x}</div>
          </div> 
        ))
      }
      </div>
      { config?.xLabel && <div className='text-xs text-center border-t border-dashed border-primary pt-[10px] mt-[40px]'>{config.xLabel}</div> }
    </div>
  )
};