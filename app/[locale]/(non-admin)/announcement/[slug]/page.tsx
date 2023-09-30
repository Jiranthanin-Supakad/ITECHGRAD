"use client"
import React from 'react'
import BackButton from '@/components/announcement_component/back_button';
import AnnounceHeadline from '@/components/announcement_component/announce_headline';
import ImgHeadline from '@/components/announcement_component/img_headline';
import Detail from '@/components/announcement_component/detail';
import {
  Divider
} from "@nextui-org/react";

import { Navbar, NavbarBrand, NavbarContent, Input } from '@nextui-org/react';
import Section from '@/components/section';

type Props = {}

const page = ({ params }: { params: { slug: string } }) => {
  return (
    <div className='bg-[#FFF]'>
      <div className='bg-[#262626]'>
        <div className='bg-[#262626]'>
          <div className="py-3 md:py-4 lg:py-3 md:max-w-5xl lg:max-w-6xl xl:max-w-7xl mx-auto px-8 lg:px-8 ">
              <div>
                  <BackButton />
              </div>
              <Divider className="mt-3 mb-5 bg-[#515151]"/>
          </div>
        </div>
        <div className='bg-[#262626]'>
          <div className="py-3 md:py-4 lg:py-3 md:max-w-5xl lg:max-w-6xl xl:max-w-7xl mx-auto px-8 lg:px-8 ">
              <AnnounceHeadline/>
          </div>
        </div>
        <div className="relative" style={{background: 'linear-gradient(to bottom, #262626 80%, #FFF 20%)'}}>
          <div className="py-3 md:py-4 lg:py-3 md:max-w-5xl lg:max-w-6xl xl:max-w-7xl mx-auto px-8 lg:px-8 ">
              <ImgHeadline/>
          </div>
        </div>
      </div>

      <div className='bg-[#FFF]'>
        <div className='bg-[#FFF]'>
          <div className="py-3 md:py-4 lg:py-3 md:max-w-5xl lg:max-w-6xl xl:max-w-7xl mx-auto px-8 lg:px-8">
              <Detail/>
          </div>
        </div>
      </div>
      
    </div>
        
  );
}
      
export default page