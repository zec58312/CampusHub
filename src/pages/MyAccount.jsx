import React from "react";

function MyAccount() {
	return (
		<>
			<div>ACC</div>
			{/* vidi w3schools tutorial kako uploadati dokument, drag and drop...*/}
			{/*link na njihov servera:*/}
			<form action="/action_page.php">
				<input type="file" id="myFile" name="filename" />
				<input type="submit" />
			</form>
		</>
	);
}

export default MyAccount;
