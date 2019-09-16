import React, { Component } from "react";
import styled from "styled-components";

const DDWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const PadSpan = styled.span`
	padding-right: 7px;
`;

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
						<label>
							<PadSpan>Region:</PadSpan>
							<select
								value={this.state.region}
								onChange={this.handleChange}
							>
								<option value={9410230}>San Diego</option>
								<option value={9410660}>Los Angeles</option>
								<option value={9411340}>Santa Barbara</option>
							</select>
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
