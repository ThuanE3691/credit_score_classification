import clsx from "clsx";
import { Fragment } from "react";

const Check = ({ children }) => {
	const cols = [
		{
			value: "Month",
			type: "select",
			data: [
				"Select month need to check",
				Array.from({ length: 10 }, (_, i) => i + 1),
			],
		},
		{ value: "Annual Income", type: "input", data: [] },
		{ value: "Monthly Inhance Salary", type: "input", data: [] },
		{ value: "Num Bank Accounts", type: "input", data: [] },
		{ value: "Num Credit Cards", type: "input", data: [] },
		{ value: "Interest Rate", type: "input", data: [] },
		{ value: "Delay From Due Date", type: "input", data: [] },
		{ value: "Num Of Delayed Payment", type: "input", data: [] },
		{ value: "Changed Credit Limit", type: "input", data: [] },
		{ value: "Num Credit Inquiries", type: "input", data: [] },
	];

	console.log(cols);

	return (
		<div className="relative h-screen px-32 py-16">
			{children}
			<div className="grid grid-cols-[200px,300px,200px,200px,300px] mt-16 gap-x-2 items-center gap-y-5">
				<label htmlFor="month" className="col-start-1">
					Month
				</label>
				<div className="flex items-center gap-x-2">
					<select className="w-full max-w-xs select select-bordered" id="month">
						<option disabled selected>
							Select month need to check
						</option>
						{[...Array.from({ length: 12 })].map((v, i) => {
							return (
								<option key={i + 1} value={i + 1}>
									{i + 1}
								</option>
							);
						})}
					</select>
				</div>

				<label className="col-start-4 ">Age</label>
				<input
					className="input input-bordered"
					placeholder="Enter your age"
					type="number"
				></input>

				<label htmlFor="month" className="col-start-1">
					Occupation
				</label>
				<div className="flex items-center gap-x-2">
					<select className="w-full max-w-xs select select-bordered" id="month">
						<option disabled selected>
							Select your occupation
						</option>
						<option value="Scientist">Scientist</option>
						<option value="Teacher">Teacher</option>
						<option value="Engineer">Engineer</option>
						<option value="Entrepreneur">Entrepreneur</option>
						<option value="Developer">Developer</option>
						<option value="Lawyer">Lawyer</option>
						<option value="Media_Manager">Media Manager</option>
						<option value="Doctor">Doctor</option>
						<option value="Journalist">Journalist</option>
						<option value="Manager">Manager</option>
						<option value="Accountant">Accountant</option>
						<option value="Musician">Musician</option>
						<option value="Mechanic">Mechanic</option>
						<option value="Writer">Writer</option>
						<option value="Architect">Architect</option>
					</select>
				</div>

				{cols.map((col, index) => {
					return (
						<Fragment key={index}>
							<label
								className={clsx(
									index % 2 !== 0 ? "col-start-1" : "col-start-4"
								)}
							>
								{col.value}
							</label>
							<input
								className="input input-bordered"
								placeholder={`Enter your ${col.value.toLowerCase()}`}
								type="number"
							></input>
						</Fragment>
					);
				})}
			</div>
		</div>
	);
};

export default Check;
