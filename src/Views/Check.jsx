import clsx from "clsx";
import { useState, Fragment } from "react";
import cols from "../columns_data";

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

const ListBox = ({ data, handleOnTickCheckBox }) => {
	const col_start = {
		1: "col-start-1",
		2: "col-start-4",
		3: "col-start-7",
	};

	return (
		<div className="grid grid-cols-[repeat(3,200px_50px_250px)] mt-4 gap-y-4">
			{data.map((v, index) => {
				return (
					<Fragment key={index}>
						<span className={col_start[(index % 3) + 1]}>{v}</span>
						<input
							type="checkbox"
							className="checkbox"
							name={v.toLowerCase().split(" ").join("_")}
							onChange={handleOnTickCheckBox}
						/>
					</Fragment>
				);
			})}
		</div>
	);
};

const Check = ({ children }) => {
	const [data, setData] = useState({
		age: "",
		occupation_scientist: 0,
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
		annual_income: "",
		monthly_inhance_salary: "",
		num_bank_accounts: "",
		num_credit_cards: "",
		interest_rate: "",
		delay_from_due_date: "",
		num_of_delayed_payment: "",
		changed_credit_limit: "",
		num_credit_inquiries: "",
		credit_mix_bad: 0,
		credit_mix_good: 0,
		credit_mix_standard: 0,
		outstanding_debt: "",
		credit_utilization_ratio: "",
		credit_history_age: "",
		payment_of_min_amount_no: 0,
		payment_of_min_amount_yes: 0,
		payment_of_min_amount_nm: 0,
		total_emi_per_month: "",
		amount_invested_monthly: "",
		payment_behaviour_high_spend_small_value_payments: 0,
		payment_behaviour_low_spend_large_value_payments: 0,
		payment_behaviour_low_spend_medium_value_payments: 0,
		payment_behaviour_low_spend_small_value_payments: 0,
		payment_behaviour_high_spend_medium_value_payments: 0,
		payment_behaviour_high_spend_large_value_payments: 0,
		monthly_balance: "",
		emi_income_ratio: "",
		num_of_loan: "",
		auto_loan: 0,
		credit_builder_loan: 0,
		debt_consolidation_loan: 0,
		home_equity_loan: 0,
		mortgage_loan: 0,
		payday_loan: 0,
		personal_loan: 0,
		student_loan: 0,
		not_specified: 0,
	});

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

	const type_loan = [
		"Auto Loan",
		"Credit Builder Loan",
		"Debt Consolidation Loan",
		"Home Equity Loan",
		"Mortgage Loan",
		"Payday Loan",
		"Personal Loan",
		"Student Loan",
		"Not Specified",
	];

	console.log(data);

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
						data={type_loan}
						handleOnTickCheckBox={handleOnTickCheckBox}
					></ListBox>
				</div>
			</div>
		</div>
	);
};

export default Check;
