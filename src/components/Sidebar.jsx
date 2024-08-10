import React, { useState, useContext, createContext } from "react";
import { ChevronFirst, ChevronLast, MoreVertical, MoonStar } from "lucide-react";
const SidebarContext = createContext();
export const Sidebar = (props) => {
	const [expanded, setExpanded] = useState(false);

	return (
		<div className="w-16 mr-3">
			<aside className={`absolute h-screen ${expanded ? "w-64" : "w-16"}`}>
				<nav className="h-full flex flex-col bg-white border-r shadow-sm">
					<div className="p-4 pb-2 flex justify-between items-center">
						
						<img src="https://img.logoipsum.com/297.svg" 
							className={`overflow-hidden transition-all ${expanded ? "w-32": "w-0"}`} 
							alt="logo" />
						<button	onClick={() => setExpanded(!expanded)} className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100">
							{expanded? <ChevronFirst />: <ChevronLast />}
						</button>
						
					</div>


					<SidebarContext.Provider value={{expanded}}>
						<ul className="flex-1 px-3">{props.children}</ul>
					</SidebarContext.Provider>


					
					<div className="border-t flex p-3">
						{/* <svg id="Layer_1" className="" enable-background="new 0 0 128 128" height="30" viewBox="0 0 128 128" width="30" xmlns="http://www.w3.org/2000/svg"><g><circle id="XMLID_11062_" cx="64" cy="64" fill="#ee4b68" r="64"/><path id="XMLID_2717_" d="m128 64c0 23.9-13.1 44.7-32.4 55.7-2.7 1.5-5.5 2.9-8.5 4-.7.3-1.4.5-2.1.8-6.6 2.3-13.6 3.5-21 3.5-1.2 0-2.4 0-3.6-.1-.4 0-.8-.1-1.2-.1-.8 0-1.5-.1-2.2-.2-.1 0-.1 0-.1 0-1.1-.1-2.2-.3-3.2-.4-3.4-.6-6.8-1.4-10-2.5-.9-.3-1.8-.6-2.7-1-.1 0-.2-.1-.3-.1-.7-.3-1.3-.5-2-.8-1.4-.6-2.8-1.3-4.2-2-12.6-6.6-22.8-17.2-28.7-30.2-3.8-8.1-5.8-17.1-5.8-26.6 0-35.3 28.7-64 64-64s64 28.7 64 64z" fill="#ee4b68"/><g id="XMLID_58_"><path id="XMLID_159_" d="m101.8 91.1c-26.9 21.5-48.8 21.5-75.6 0 9.9-17.5 10.7-36.8 13-57.7 1.1-13.6 10.9-22.1 24.5-22.1h.5c13.7.1 23.4 8.5 24.5 22.1 2.4 20.9 3.2 40.2 13.1 57.7z" fill="#343843"/><ellipse id="XMLID_158_" cx="43.1" cy="47.3" fill="#f8cfa3" rx="4.2" ry="7.9" transform="matrix(.975 -.222 .222 .975 -9.422 10.766)"/><path id="XMLID_157_" d="m44.4 53.3c-1 0-2.9-2-3.7-5.5-.8-3.6.1-6.4 1.1-6.6h.1c1 0 2.9 2 3.7 5.5.4 1.8.4 3.6.1 4.9-.3.9-.7 1.6-1.1 1.7-.1 0-.2 0-.2 0z" fill="#f1b97c"/><ellipse id="XMLID_156_" cx="84.9" cy="47.3" fill="#f8cfa3" rx="7.9" ry="4.2" transform="matrix(.222 -.975 .975 .222 19.938 119.506)"/><path id="XMLID_155_" d="m83.6 53.3h-.1c-.4-.1-.9-.8-1.1-1.7-.4-1.4-.3-3.1.1-4.9.8-3.6 2.9-5.7 3.9-5.5s1.9 3 1.1 6.6c-1 3.6-2.9 5.5-3.9 5.5z" fill="#f1b97c"/><path id="XMLID_153_" d="m50.4 77.9 1.4-6.3 2.3-1.2 19.9-.2 4.4 5.9-1.1 1.8z" fill="#e7e7e8"/><path id="XMLID_105_" d="m108.5 100.4v9.5c-11.5 11.2-27.2 18.1-44.5 18.1s-33-6.9-44.5-18v-9.5c1.2-13.2 9.3-15 13-15.1 2.1-.1 4.1-.3 6.1-.8 15.7-3.9 15.8-13.4 15.8-13.4v-9h19.2v9s.1 9.5 15.8 13.4c2 .5 4 .7 6.1.8 3.7.1 11.8 1.9 13 15z" fill="#f1b97c"/><path id="XMLID_81_" d="m108.5 100.4v9.5c-11.5 11.2-27.2 18.1-44.5 18.1s-33-6.9-44.5-18v-9.5c1.2-13.2 9.3-15 13-15.1 2.1-.1 4.1-.3 6.1-.8 6.7-1.7 10.6-4.4 12.8-6.9l4 8.4 8.6 20.9 10-22.9 3.4-5.6c2.3 2.3 6.1 4.6 12.1 6.1 2 .5 4 .7 6.1.8 3.6.1 11.7 1.9 12.9 15z" fill="#e9bb06"/><path id="XMLID_150_" d="m85.2 44.7c0 12.8-9.5 28.2-21.2 28.2s-21.2-15.4-21.2-28.2 9.5-23.1 21.2-23.1 21.2 10.3 21.2 23.1z" fill="#f8cfa3"/><path id="XMLID_130_" d="m76 80.3c-2.3 14.3-10.9 28.9-11.9 30.6 0 .1-.1.1-.2 0-1-1.7-9.6-16.3-11.9-30.6l1.3-.4 1.9 1.5 1.7 2.5s3.7 10.9 7 18.9c3.4-8 7-18.9 7-18.9l1.7-2.5 1.9-1.5z" fill="#e7e7e8"/><path id="XMLID_125_" d="m85.2 84.2 1 7.7s-3.4-5.1-7-8.7c-2.3-2.4-6.2-2.2-8.2.5 0 0 0 .1-.1.1 0 0 .5-1.8 3.2-5.1.7-.8 1.1-1.7 1.2-2.6.3-1.9-.3-3.9-1.9-5.1v-1.3c1.5.4 3.4 1.2 5.4 2.9 3.6 3 5.8 7.2 6.4 11.6z" fill="#fcfcfc"/><path id="XMLID_117_" d="m57 83.8s0-.1-.1-.1c-2-2.7-5.9-2.9-8.2-.5-3.5 3.7-7 8.7-7 8.7l1-7.7c.6-4.5 2.8-8.6 6.2-11.6 2-1.7 3.8-2.5 5.4-2.9v1.3c-1.5 1.2-2.2 3.2-1.9 5.1.2.9.6 1.8 1.2 2.6 2.9 3.3 3.4 5.1 3.4 5.1z" fill="#fcfcfc"/><path id="XMLID_114_" d="m89.7 48.7c.2-.2.4-.4.6-.6-.4-3.5-.7-7-1.1-10.5-1-1.3-2-2.5-2.7-3.6l-3.2-5.6-9.7-11.9-8.7-5.3c-.2 0-.4 0-.7 0-.2 0-.3 0-.5 0-13.6.1-23.4 8.5-24.5 22.1-.4 3.9-.8 7.8-1.2 11.6 6.8-3.4 14.1-9.7 18.1-21.6 8.8 26.2 33.6 25.4 33.6 25.4z" fill="#343843"/><g fill="#454652"><path id="XMLID_112_" d="m78.7 41.4c1 .5 3.5 1.8 8.6 2.8-1.3-.5-4.7-1.5-8.7-3.7 3.7 1.7 5.7 2.1 8 2.6-1.2-.4-4.4-1.4-8.1-3.5 3.6 1.7 5.6 2 7.4 2.3-1.1-.4-4.1-1.3-7.5-3.2 3.4 1.6 5.4 1.9 6.8 2.1-1.3-.5-4.1-1.3-8-3.7 3.4 1.9 6 2.4 8.1 2.8-1.3-.5-4-1.3-7.7-3.6 3.6 2 6.5 2.4 7.7 2.7-1.6-.6-3.9-1.3-7.3-3.4 3.2 1.7 5.8 2.2 7.3 2.5-2.3-.9-3.7-1.3-7-3.3 3.1 1.7 5.1 2 7 2.4-7.5-3-13.4-7.3-16.9-14.9-.1-.3-.3-.5-.3-.7-.1-.2-.1-.3-.1-.3s0 .1.1.3c.6 2.7 2.3 5.7 3.1 6.7-1.2-1.4-3.4-5-4-6.9.2 1.6 1.4 4.7 3.3 7.4-2-2.5-3.7-5.8-4.3-7.4.3 1.6 1.4 4.6 3.5 7.8-2.2-2.9-3.9-6.1-4.5-7.7.2 1.4 1.3 4.7 3.7 8.2-2.4-3.2-4-6.2-4.7-8.1.2 1.4 1.2 4.1 2.5 6.3-1.8-2.6-3.1-5.4-3.6-6.9.3 1.5 1.3 4.4 2.7 6.8-1.9-2.8-3.3-5.8-3.9-7.4.3 1.6 1.5 4.8 3 7.4-1.5-2.3-3.3-5.6-4.1-8 .3 1.6 1.5 5.1 3.3 8-1.6-2.4-3.5-5.9-4.4-8.5 1 5.5 8.3 22 28.3 26-1.9-.6-5.1-1.5-9.3-3.9z"/><path id="XMLID_106_" d="m51.3 28.3c.9-2.2 1.3-3.9 1.5-6.2-.7 2.6-1 3.7-2.1 6 .9-2.1 1.2-3.7 1.4-5.9-.7 2.6-.9 3.4-2 5.7.8-2 1.1-3.4 1.3-5.7-1.8 6.2-4.5 11.7-11.1 14.8 1.3-.3 3.7-1.6 5.2-3-1.2 1.2-3.8 3.1-5.1 3.7 1.2-.3 3.4-1.4 5.5-3.2-1.9 1.9-4.3 3.4-5.4 3.9 1.3-.3 3.5-1.4 5.8-3.4-2 1.9-4.3 3.5-5.7 4.1 1.4-.4 3.7-1.5 6.1-3.6-1 .9 5.8-3.7 6.7-13.5-.6 3-1 4.1-2.1 6.3z"/></g></g></g></svg> */}
						<div className={`flex justify-between items-center
										overflow-hidden transition-all ${expanded ? "w-52 ml-3": "w-0"} 
										`}>
							<div className="leading-4">
								<h4 className="font-semibold">John Doe</h4>
								<span className="text-xs text-gray-500">
									johndoe@gmail.com
								</span>
							</div>
							<MoreVertical size={20}/>
							
						</div>
					</div>
				</nav>
			</aside>
		</div>
	)
}

export const SidebarItem = (props) => {
	const {expanded} = useContext(SidebarContext);
	return (
		<li className={`
			relative flex justify-center items-center py-2 px-2 my-1
			font-medium rounded-md cursor-pointer
			transition-colors ${
				props.active
				? "bg-gradient-to-tr from-green-200 to-green-100 text-green-800"
				: "hover:bg-green-50 text-gray-800"
			} group
			`}>
			{props.icon}
			<span className={`overflow-hidden ${expanded? `w-52 ml-3` : `w-0`} font-sans`}>{props.text}</span>
			{props.alert && <div className={`absolute right-2 w-2 h-2 rounded bg-green-400 ${expanded ? "" : "top-2"}`}></div>}
			
			{!expanded && 
			<div className={`
				absolute left-full rounded-md 
				px-2 py-1 ml-6
				bg-green-100 text-gray-900 text-sm
				invisible -translate-x-3 transition-all
				group-hover:visible group-hover:opacity-100 group-hover:translate-x-0
				`}>{props.text}</div>}
		</li>
	)
}