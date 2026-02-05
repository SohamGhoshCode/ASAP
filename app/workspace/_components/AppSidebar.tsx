"use client"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
} from "@/components/ui/sidebar"
import { UserDetailContext } from "@/context/UserDetailContext"
import { UserButton } from "@clerk/nextjs"

import Image from "next/image"
import Link from "next/link"
import { useContext, useState } from "react"

export function AppSidebar() {
    const[projectList,setProjectList] = useState([]);
    const{userDetail,setUserDetail} = useContext(UserDetailContext);
  return (
    <Sidebar>
        <SidebarHeader className="p-5">
            <div className="flex items-center gap-2">
                <Image src={'/logo.svg'} alt="logo" width={35} height={35}></Image>
                <h2 className="font-bold text-2xl">ASAP!</h2>
            </div>
            <Link href={'/workspace'} className="mt-5 w-full">
                <Button className="w-full">
                    + Add New Project
                </Button>
            </Link>
        </SidebarHeader>
      <SidebarContent className="p-2">
            <SidebarGroup>
                <SidebarGroupLabel>Projects</SidebarGroupLabel>
                {projectList.length == 0 && <h2 className="text-sm text-gray-500 ">No Project Found</h2>}
            </SidebarGroup>
        <SidebarGroup />
      </SidebarContent>
      <SidebarFooter>
        <div className="p-3 border rounded-xl space-y-3 bg-secondary">
            <h2 className="flex justify-between items-center">Remaining Credits <span className="font-bold">{userDetail?.credits ?? 0}</span></h2>
            <Progress value={33}></Progress>
            <Button className="w-full">
                Upgrade to Unmlimited
            </Button>
        </div>
        <div className="flex items-center gap-2">
            <UserButton/>
            <Button variant={'ghost'}>Settings</Button>
        </div>
      </SidebarFooter>
    </Sidebar>
  )
}