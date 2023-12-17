/* eslint-disable react/no-unescaped-entities */
import Asterisk from "../assets/Asterisk.svg";
import homeBg from "../assets/home_bg.png";
import Arrow from "../assets/arrow.svg";

const Home = ({ children }) => {
	return (
		<>
			<div className="relative h-screen px-32 py-16">
				{children}
				<div className="flex flex-col my-16 w-[623px] gap-y-8">
					<img src={Asterisk} alt="" className="w-16"></img>
					<h2 className="font-secondary text-[65px] leading-[71px] font-semibold">
						IS252 Final Project: Credit Score Classification
					</h2>
					<img src={Arrow} alt="" className="w-16"></img>
					<p className="text-base font-normal font-primary text-[#1D1D1C]">
						Welcome to our IS252 Final Project: Cardo, where mastering your
						credit score is made easy. Dive into our personalized credit score
						analysis, understand your credit rating, and interactive tools
						designed to help you understand and improve your financial standing.
						Join us and take the first step towards a healthier financial
						future.
					</p>
					<div className="flex items-center gap-x-4">
						<button className="uppercase rounded-[50px] px-6 py-2 font-sans font-medium text-white bg-mainGradient">
							Let's start
						</button>
						<button className="rounded-[50px] border-solid border-[1px] border-inherit bg-white bg-mainGradient p-[1px] relative">
							<div className="bg-white rounded-[50px] px-6 pt-2 pb-[7px]">
								<span className="font-sans text-transparent bg-mainGradient bg-clip-text">
									How it works &#8594;
								</span>
							</div>
						</button>
					</div>
				</div>
			</div>
			<div
				style={{ backgroundImage: `url(${homeBg})` }}
				className="absolute bg-no-repeat bg-cover z-[-1] top-0 w-[1038.573px] h-[1149.972px] -translate-y-40 right-0"
			></div>
			<div className="absolute w-[862px] top-0 h-screen bg-white z-[-1]"></div>
		</>
	);
};

export default Home;
