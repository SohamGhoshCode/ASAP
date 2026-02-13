"use client"
import React, { useEffect, useState } from 'react'
import PlayGroundHeader from '../_components/playGroundHeader'
import ChatSection from '../_components/ChatSection'
import WebsiteDesign from '../_components/WebsiteDesign'
import ElementSetting from '../_components/ElementSetting'
import { useParams, useSearchParams } from 'next/navigation'
import axios from 'axios'

export type Frame={
    projectId:string,
    frameId:string,
    designCode:string,
    chatMessages:Messages[]
}
export type Messages = {
    role:string,
    content:string
}
function PlayGround() {
    const { projectid } = useParams();        
    const projectId = projectid;             

    const params = useSearchParams();
    const frameId = params.get('frameId');

    const GetFrameDetails = async () => {
        const result = await axios.get(
            `/api/frames?frameId=${frameId}&projectId=${projectId}`
        );
        console.log(result.data);
        setFrameDetails(result.data);
    };
    const [frameDetails,setFrameDetails] = useState<Frame>();
    useEffect(() => {
        if (frameId) GetFrameDetails();
    }, [frameId]);

    return (
        <div>
            <PlayGroundHeader />
            <div className='flex'>
                <ChatSection messages={frameDetails?.chatMessages??[]}/>
                <WebsiteDesign />
            </div>
        </div>
    );
}

export default PlayGround;
