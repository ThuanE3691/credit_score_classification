import NgaAvatar from "../assets/NgaAvatar.png";

const About = ({ children }) => {
	const infos = [
		{
			avatar: NgaAvatar,
			name: "Nguyễn Minh Thuận",
			email: "20520795@gm.uit.edu.vn",
		},
		{
			avatar: NgaAvatar,
			name: "Đỗ Thị Thu Trang",
			email: "20520816@gm.uit.edu.vn",
		},
		{
			avatar: NgaAvatar,
			name: "Phạm Hoàng Phúc",
			email: "20521641@gm.uit.edu.vn",
		},
		{
			avatar: NgaAvatar,
			name: "Nguyễn Thị Ngọc Nga",
			email: "20521641@gm.uit.edu.vn",
		},
	];

	return (
		<div className="relative h-screen bg-mainGradient">
			<div className="px-32 pt-16 ">{children}</div>
			<div className="grid h-full grid-cols-[repeat(2,370px)] place-content-center gap-x-8 gap-y-8 -translate-y-16">
				{infos.map((info, index) => {
					return (
						<div
							className="relative flex items-center w-full h-auto"
							key={index}
						>
							<img
								src={info.avatar}
								alt=""
								className="object-cover w-28 rounded-full aspect-square z-[2] relative"
							/>
							<div className="bg-info w-[300px] h-[87px] -translate-x-16 z-[1] rounded-full flex flex-col justify-center pl-16 text-white text-primary font-normal absolute left-[128px]">
								<span>{info.name}</span>
								<span>{info.email}</span>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default About;
