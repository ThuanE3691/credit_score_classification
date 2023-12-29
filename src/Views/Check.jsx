import clsx from "clsx";
import { useState, Fragment } from "react";
import cols from "../columns_data";
import * as onnx from "onnxruntime-web";

const split_str = (str) => {
	return str.toLowerCase().split(" ").join("_");
};

const Input = ({ content, value, name, handleEnter }) => {
	return (
		<input
			className="input input-bordered"
			placeholder={`Enter your ${content.toLowerCase()}`}
			type="number"
			onChange={handleEnter}
			name={name}
			value={value}
		></input>
	);
};

const Select = ({ data, value, name, handleEnter }) => {
	return (
		<select
			className="w-full max-w-xs select select-bordered"
			id={value.toLowerCase()}
			onChange={handleEnter}
			name={name}
		>
			{data.map((d, index) => {
				const name_data =
					name + "_" + String(d).toLowerCase().split(" ").join("_");
				return (
					<option value={name_data} key={index} disabled={index === 0} selected>
						{d}
					</option>
				);
			})}
		</select>
	);
};

const ListBox = ({ options, data, handleOnTickCheckBox }) => {
	const col_start = {
		1: "col-start-1",
		2: "col-start-4",
		3: "col-start-7",
	};

	return (
		<div className="grid grid-cols-[repeat(3,200px_50px_250px)] mt-4 gap-y-4">
			{options.map((v, index) => {
				const name = v.toLowerCase().split(" ").join("_");
				return (
					<Fragment key={index}>
						<span className={col_start[(index % 3) + 1]}>{v}</span>
						<input
							type="checkbox"
							className="checkbox"
							name={name}
							onChange={handleOnTickCheckBox}
							checked={data[name]}
						/>
					</Fragment>
				);
			})}
		</div>
	);
};

const Check = ({ children }) => {
	const [data, setData] = useState({
		month: 1,
		age: 23,
		annual_income: 19114.12,
		monthly_inhance_salary: 1824.84333333333,
		num_bank_accounts: 3,
		num_credit_cards: 4,
		interest_rate: 3,
		delay_from_due_date: 3,
		num_of_delayed_payment: 7,
		changed_credit_limit: 11.27,
		num_credit_inquiries: 4,
		outstanding_debt: 809.98,
		credit_utilization_ratio: 26.822619623699,
		credit_history_age: 265,
		total_emi_per_month: 49.5749492148941,
		amount_invested_monthly: 80.4152954390025,
		monthly_balance: 312.494088679436,
		emi_income_ratio: 0.0271666878516845,
		num_of_loan: 4,
		auto_loan: 1,
		credit_builder_loan: 1,
		debt_consolidation_loan: 0,
		home_equity_loan: 1,
		mortgage_loan: 0,
		payday_loan: 0,
		personal_loan: 1,
		student_loan: 0,
		not_specified: 0,
		occupation_scientist: 1,
		occupation_teacher: 0,
		occupation_engineer: 0,
		occupation_entrepreneur: 0,
		occupation_developer: 0,
		occupation_lawyer: 0,
		occupation_media_manager: 0,
		occupation_doctor: 0,
		occupation_journalist: 0,
		occupation_manager: 0,
		occupation_accountant: 0,
		occupation_musician: 0,
		occupation_mechanic: 0,
		occupation_writer: 0,
		occupation_architect: 0,
		credit_mix_bad: 0,
		credit_mix_good: 1,
		credit_mix_standard: 0,
		payment_of_min_amount_no: 1,
		payment_of_min_amount_yes: 0,
		payment_of_min_amount_nm: 0,
		payment_behaviour_high_spend_small_value_payments: 1,
		payment_behaviour_low_spend_large_value_payments: 0,
		payment_behaviour_low_spend_medium_value_payments: 0,
		payment_behaviour_low_spend_small_value_payments: 0,
		payment_behaviour_high_spend_medium_value_payments: 0,
		payment_behaviour_high_spend_large_value_payments: 0,
	});

	async function loadModel(input) {
		const modelUrl = new URL("./rf_credit.onnx", import.meta.url).href;
		try {
			const response = await fetch(modelUrl);
			const modelData = await response.arrayBuffer();
			const session = await onnx.InferenceSession.create(modelData);
			session.then(async () => {
				console.log("Loading model complete");
				const outputMap = await session.run(["output"], { input1: input });
				const outputData = outputMap.output.dataSync();
				console.log(outputData);
			});
		} catch (error) {
			console.log(error);
		}

		// Replace with your actual data

		// Run inference
	}

	const handleOnChangeInput = (event) => {
		setData({ ...data, [event.target.name]: event.target.value });
	};

	const handleOnChangeSelect = (event) => {
		const updated_data = { ...data };

		Object.keys(updated_data).forEach((key) => {
			if (key.includes(event.target.name)) {
				updated_data[key] = 0;
			}
		});

		updated_data[event.target.value] = 1;

		setData(updated_data);
	};

	const handleOnTickCheckBox = (event) => {
		setData({ ...data, [event.target.name]: !data[event.target.name] ? 1 : 0 });
	};

	const handlePredict = async () => {
		let input = [];
		let nums_numeric = 0;
		let nums_of_loan = 0;
		let emi_ratio = 0;
		cols.forEach((col) => {
			if (col.type === "input" || col.value === "Month") {
				const key = col.value.toLowerCase().split(" ").join("_");
				if (key in data) {
					input.splice(nums_numeric, 0, parseInt(data[key]));
					nums_numeric++;
				}

				if (col.nextHidden) {
					const hiddenKey = split_str(col.nextHidden);
					let value;
					if (hiddenKey === "num_of_loan") {
						type_loan.forEach((loan) => {
							const key_loan = split_str(loan);
							if (data[key_loan] === 1) {
								nums_of_loan++;
							}
						});
						value = nums_of_loan;
					} else {
						emi_ratio =
							data["total_emi_per_month"] / data["monthly_inhance_salary"];
						value = emi_ratio;
					}
					input.splice(nums_numeric, 0, value);
					nums_numeric++;
				}
			} else {
				const root_key = col.value.toLowerCase().split(" ").join("_");
				col.data.forEach((v) => {
					const key = root_key + "_" + v.toLowerCase().split(" ").join("_");
					if (key in data) {
						input.push(data[key]);
					}
				});
			}
		});

		type_loan.forEach((loan) => {
			const key = split_str(loan);
			if (key in data) {
				input.splice(nums_numeric, 0, data[key]);
				nums_numeric++;
			}

			if (key === "mortgage_loan") {
				input.splice(nums_numeric, 0, nums_of_loan > 0 ? 0 : 1);
				nums_numeric++;
			}
		});

		console.log(input);

		const response = await fetch("/api/post_data", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(data),
		});

		if (response.ok) {
			const result = await response.json();
			console.log("Response:", result);
			// Handle successful response
		} else {
			console.error("Error:", response.statusText);
			// Handle error
		}
	};

	const type_loan = [
		"Auto Loan",
		"Credit Builder Loan",
		"Debt Consolidation Loan",
		"Home Equity Loan",
		"Mortgage Loan",
		"Not Specified",
		"Payday Loan",
		"Personal Loan",
		"Student Loan",
	];

	return (
		<div className="relative min-h-screen px-32 py-16">
			{children}
			<div className="grid grid-cols-[200px,300px,200px,200px,300px] mt-16 gap-x-2 items-center gap-y-5">
				{cols.map((col, index) => {
					const name = col.value.toLowerCase().split(" ").join("_");

					return (
						<Fragment key={index}>
							<label
								className={clsx(
									index % 2 === 0 ? "col-start-1" : "col-start-4"
								)}
							>
								{col.value}
							</label>
							{col.type === "input" ? (
								<Input
									content={col.value}
									handleEnter={handleOnChangeInput}
									name={name}
									value={data[name]}
								></Input>
							) : (
								<Select
									data={col.data}
									value={col.value}
									handleEnter={handleOnChangeSelect}
									name={name}
								></Select>
							)}
						</Fragment>
					);
				})}
				<div className="col-start-1">
					<span className="mt-4 text-lg font-semibold">Type of Loan</span>
					<ListBox
						options={type_loan}
						handleOnTickCheckBox={handleOnTickCheckBox}
						data={data}
					></ListBox>
				</div>
				<button
					className="btn row-start-[15] col-start-[-2]"
					onClick={handlePredict}
				>
					Predict
				</button>
			</div>
		</div>
	);
};

export default Check;
