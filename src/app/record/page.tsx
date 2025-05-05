import { Button, TextField } from "@mui/material";
import AddButton from "./AddButton";
import List from "./List";
import SearchBar from "./SearchBar";
import './style.css'
import NoteAddIcon from '@mui/icons-material/NoteAdd';


export default function record(){
	return (
		<main>
			<p className="title">読書記録</p>
			{/* <TextField id="outlined-basic" label="書名か引用文で検索" variant="outlined" /> */}
			<Button variant="outlined" startIcon={<NoteAddIcon />} className="m-10">
				新規追加
			</Button>			
			<input type="text" placeholder="書名か引用文で検索" className="searchBar"/>
			<List />
		</main>
	)
}