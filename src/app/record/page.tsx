import { Button, TextField } from "@mui/material";
import AddButton from "./AddButton";
import List from "./List";
import SearchBar from "./SearchBar";
import './style.css'
import NoteAddIcon from '@mui/icons-material/NoteAdd';


export default function record(){
	return (
		<main>
			<div className="outLine">
				<div className="topBox">
					<span className="title">読書記録</span>
					<span className="addButton">
						<Button variant="contained" startIcon={<NoteAddIcon />} size="large">
							新規追加
						</Button>		
					</span>
				</div>
				<input type="text" placeholder="書名か引用文で検索" className="searchBar"/>
				<List />
			</div>
			{/* <TextField id="outlined-basic" label="書名か引用文で検索" variant="outlined" /> */}
			{/* <span className="addButton">
				<p>ああ</p>
			</span> */}
		</main>
	)
}