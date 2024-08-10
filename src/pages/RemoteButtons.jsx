import React from "react";

const RemoteButtons = () => {
  return (
	<div className="flex w-screen h-screen bg-white">
        
	<Sidebar>          
	  <SidebarItem icon={<LayoutDashboard size={20}/>} text="Dashboard" />
	  <SidebarItem icon={<SatelliteDish size={20}/>} text="Remotes" active/>
	  <SidebarItem icon={<Microchip size={20}/>} text="Devices"/>
	  <SidebarItem icon={<CalendarFold size={20}/>} text="Automations"/>
	</Sidebar>

	{/* Main Container */}
	<div className="w-full overflow-x-hidden overflow-y-scroll">

	  {/* Top Toolbar */}
	  <TopToolbar/>

	  {/* Info Bar */}
	  <InfoBar/>

	  {/* Secondary Toolbar */}
	  <div className="flex justify-between items-center flex-row mt-6 mb-3 ml-2">
		<div className="flex items-center">
		  <span className="font-sans font-medium text-xl">
			Remote Buttons
		  </span>
		  <div className="flex justify-center items-center ml-2 rounded-lg w-6 h-6 bg-green-600">
			<span className="font-sans text-center text-white text-xs">
			  20
			</span>
		  </div>
		</div>
		<div className="pr-3">
		  <Pencil size={20}/>
		</div>
	  </div>

	  {/* Buttons Grid */}
	  <TileGrid>
		{Array.from({length: 20}).map((_, i) => (
		  <Tile key={i}>
			<div className="flex flex-col w-full h-full">

			  <div className="flex h-1/2 w-full items-center justify-between ">
				<div className="flex flex-row justify-center items-center cursor-pointer rounded-md w-8 h-8 border-1 border-gray-300 bg-gray-50 ml-2">
				  <Grip size={15} strokeWidth={"2.5px"} />
				</div> 

				<div className="flex flex-row justify-center items-center cursor-pointer rounded-full w-9 h-9 border-2 border-green-500 bg-gray-50 shadow-md mr-2">
				  <Power color={"#22c55e"} size={17} strokeWidth={"2.5px"} />
				</div> 
			  </div>

			  <div className="flex h-1/2 w-full align-items justify-between">
				<div className="flex flex-col justify-center items-left text-left ml-2">
				  <span className="font-sans font-normal text-xs text-gray-500">State</span>
				  <span className="font-sans font-medium text-sm text-gray-800">
					{options[Math.floor(Math.random() * options.length)]}
				  </span>
				</div>
			  </div>
			</div>
		  </Tile>
		  ))}
		<AddBorderButton/>
	  </TileGrid> 
	</div>
  </div>
	);
};

export default RemoteButtons;