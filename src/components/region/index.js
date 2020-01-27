import React, { Component } from "react";
import { DDWrapper, PadSpan, Select } from "./styles";

class Region extends Component {
	state = {
		region: "9410230",
	};

	handleChange = (event) => {
		this.setState({ region: event.target.value });
	};

	render() {
		return (
			<>
				<DDWrapper>
					<form>
						<label htmlFor="region">
							<PadSpan>Region:</PadSpan>
							<Select id="region" name="region" value={this.state.region} onChange={this.handleChange}>
								<option value={9410230}>San Diego</option>
								<option value={9410660}>Los Angeles</option>
								<option value={9411340}>Santa Barbara</option>
							</Select>
						</label>
					</form>
				</DDWrapper>
				<div>
					{React.cloneElement(this.props.children, {
						region: this.state.region,
					})}
				</div>
			</>
		);
	}
}

export default Region;
