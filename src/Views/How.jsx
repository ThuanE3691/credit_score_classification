/* eslint-disable react/no-unescaped-entities */
import waves from "../assets/waves.png";

const How = ({ children }) => {
	return (
		<div
			className="relative h-screen bg-howPage bg-[length:100%_60%] bg-no-repeat bg-bottom"
			style={{ backgroundImage: "url(" + waves + ")" }}
		>
			<div className="px-32 pt-16 ">{children}</div>
			<div className="flex flex-col items-center justify-center h-full -translate-y-20">
				<span className=" text-[65px] font-secondary text-yellow">
					How it work?
				</span>
				<p className="w-[609px] text-center text-[32px] font-primary text-white font-normal leading-[44.8px]">
					It's easy, all you need to do is fill in your information, then we'll
					tell you what your credit score rating is.
				</p>
			</div>
		</div>
	);
};

export default How;
