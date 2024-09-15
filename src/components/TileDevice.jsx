import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
	useSortable
} from "@dnd-kit/sortable";

import { Grip } from "lucide-react";
import { CSS } from '@dnd-kit/utilities';

import { EditModeContext } from '../contexts/EditModeContext';
import { DraggingContext }  from '../contexts/DraggingContext';

import TileDelete from "./TileDelete";

import config from '../configs/config';
import esp32Img from '../assets/imgs/microcontroller3.png'
import Active from '../assets/icons/active.svg?react';
import Inactive from '../assets/icons/inactive.svg?react';

import { ChevronRight } from "lucide-react";
export const TileDevice = ({id, item, isConnected, refetch}) => {
	const apiUrl = config.apiUrl;
	const { editMode } = useContext(EditModeContext);
	const { dragging } = useContext(DraggingContext);
	const navigate = useNavigate();
	const location = useLocation();
	const [deviceType, setDeviceType] = useState(item.category);

	const {
		attributes,
		listeners,
		setNodeRef,
		transform,
		transition,
		isDragging
	} = useSortable({ id: `${id}` });

	const style = {
		transform: CSS.Translate.toString(transform),
		transition,
		zIndex: isDragging ? "100": "auto",
		opacity: isDragging ? 0.3 : 1
	}

	const getRandomAnimationDelay = () => {
		const delay = Math.random() * 0.133; // Delay between 0 and 2 seconds
		return {animationDelay: `${delay}s`};
	  };

	const listenersOnState = editMode ? { ...listeners } : {};

	const IotImg = () => <div 
							className="absolute inset-0 bg-no-repeat bg-cover bg-center z-0 -ml-3"
							style={{ backgroundImage: `url(${esp32Img})`,
									backgroundSize: '86%',
									backgroundPosition: 'bottom left'}}
						></div>
	return (
		<>
		<div 
			ref={setNodeRef} 
			className={`relative bg-gray-100 rounded-lg border-gray-300 h-[10rem] select-none border-2 ${(editMode && !dragging) ? "animate-shake" : ""}`}
			style={{...style, ...getRandomAnimationDelay()}} 
		>
			<div className="flex flex-col w-full h-full overflow-hidden">
				<div className="relative flex flex-col h-1/3 w-full items-start justify-start p-2">
						
					<div 
						className={`absolute top-2 right-2 z-10 flex flex-row justify-center items-center 
						cursor-pointer rounded-md w-10 h-10 
						border-1 border-gray-300 bg-gray-50 ml-2
						shadow-sm shadow-gray-200 
						${editMode ? "" : "hidden"}
						`}
						{...attributes} 
						{...listenersOnState}>
							<Grip size={15} strokeWidth={"2.5px"} />
					</div>


					<div className="flex flex-col w-full items-start justify-center  ">
						<span className="text-sm font-semibold text-gray-800">{item.deviceName}</span>
						<div className="flex flex-row ">
							<span className="text-xs font-normal text-gray-600">{isConnected ? "Connected" : "Disconnected"}</span>
							{isConnected
								? <Active className="w-[10px] ml-[2px] mb-[2px]"/>
								: <Inactive className="w-[10px] ml-[2px] mb-[2px]"/>
							}
						</div>
						
					</div>
					
				</div>
				<div className="relative flex h-2/3 w-full items-end justify-end overflow-visible">

					<IotImg/>
					{/* <div className="flex h-full justify-end items-end">
						<div className="flex flex-row justify-center items-center cursor-pointer rounded-full w-14 h-14 bg-gray-200 shadow-md shadow-gray-700 border-gray-300 border-1  bg-opacity-70 backdrop-filter backdrop-blur-2xl mr-2 mb-2">
							<ChevronRight onClick={() => navigate(`${location.pathname}/${item.remoteName}`)} className="opacity-95" color={"#374151"} size={28}/>
						</div>
					</div> */}
				</div>
				
			</div>
			{editMode? <TileDelete url={`${apiUrl}/devices/${item.macAddress}`} refetch={refetch} position={"left"}/>: null}
			
		</div>
		
		</>
		);
};


