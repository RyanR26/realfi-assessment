"use client"

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { IStringStringKeyVal } from '@/types';

const navigation: IStringStringKeyVal = {
  users: '/',
  overview: '/overview'
};

export default function TabNavigation() {

  const pathname = usePathname();

  return (
    <div role="tablist" className="tabs tabs-boxed mt-8 mx-auto max-w-max">
      {
        Object.keys(navigation).map((key: string) => (
          <Link 
            href={navigation[key]} 
            role="tab" 
            key={key} 
            className={`tab ${pathname === navigation[key] ? 'tab-active' : ''}`}>
              {key}
          </Link>
        ))
      }
    </div>
  )
};