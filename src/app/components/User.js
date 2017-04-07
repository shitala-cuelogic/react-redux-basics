import React from "react";

export const User = (props) => {
	return (
		<div>
			<h3>The User Page</h3>
			<p>User Name: {props.username}</p>
		</div>
	);
}