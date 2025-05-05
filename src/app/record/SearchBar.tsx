import { TextField } from "@mui/material";

export default function SearchBar(){
	return (
		<main>
			<TextField id="outlined-basic" label="書名か引用文で検索" variant="outlined" />
		</main>
	)
}