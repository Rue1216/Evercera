import React from 'react'
import { Card, CardHeader, CardBody, CardFooter, Image, Button } from '@nextui-org/react'

export default function Cases() {
  return (
    <div className="gap-5 grid grid-cols-12 grid-rows-2">
      <Card isPressable className="col-span-12 sm:col-span-4 h-[250px]">
        <CardHeader className="absolute z-10 flex-col !items-start backdrop-blur-sm">
          <h4 className="text-primary-300 font-bold text-large">藏嚐久酒</h4>
        </CardHeader>
        <Image
          removeWrapper
          isZoomed
          alt="藏嚐久酒-閩東聚落"
          className="z-0 w-full h-full object-cover"
          src="/cases/case3.jpg"
        />
      </Card>
      <Card isPressable className="col-span-12 sm:col-span-4 h-[250px]">
        <CardHeader className="absolute z-10 flex-col !items-start backdrop-blur-sm">
          <h4 className="text-slate-50 font-bold text-large">馬祖酒廠</h4>
        </CardHeader>
        <Image
          removeWrapper
          isZoomed
          alt="馬祖酒廠-頂級高粱酒"
          className="z-0 w-full h-full object-cover"
          src="/cases/case2.jpg"
        />
      </Card>
      <Card isPressable className="col-span-12 sm:col-span-4 h-[250px]">
        <CardHeader className="absolute z-10 flex-col !items-start backdrop-blur-sm">
          <h4 className="text-primary-900 font-bold text-large">八八坑道</h4>
        </CardHeader>
        <Image
          removeWrapper
          isZoomed
          alt="八八坑道"
          className="z-0 w-full h-full object-cover"
          src="/cases/case6.png"
        />
      </Card>
      <Card isPressable className="w-full h-[250px] col-span-12 sm:col-span-5">
        <CardHeader className="absolute z-10 flex-col items-start backdrop-blur-sm">
          <h4 className="text-slate-50 font-bold text-large">金門皇家酒廠</h4>
        </CardHeader>
        <Image
          removeWrapper
          isZoomed
          alt="金門皇家酒廠"
          className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
          src="/cases/case7.jpg"
        />
      </Card>
      <Card isPressable className="w-full h-[250px] col-span-12 sm:col-span-7">
        <CardHeader className="absolute z-10 flex-col items-start backdrop-blur-sm">
          <h4 className="text-primary-900 font-bold text-large ">飄洋過海</h4>
        </CardHeader>
        <Image
          removeWrapper
          isZoomed
          alt="飄洋過海"
          className="z-0 w-full h-full object-cover"
          src="/cases/case9.jpg"
        />
      </Card>
    </div>
  )
}
