'use client'
import Image from "next/image";
import './style.css'
import { Box, FormControlLabel, FormGroup, Switch } from "@mui/material";
import { use } from "react";


export default function Detail(props:{params: Promise<{id: number}>}){

	//リンクに埋め込まれたidを取り出す
	const params = use(props.params);
	const id = params.detail;


	//propsのidから対応するrecDataを取得
	const smp_recData = [
		{
			"id": 1,
			"user_id": 1,
			"book_id": 1,
			"quote": "生きることは、すべてを飲み込むことだ。" ,
			"impression": "この言葉を読んだとき、なんだか無理やり納得させられた気がした。生きてると楽しいことばかりじゃないし、どうしようもなく嫌なことや、理解できないこともたくさんある。そういうのも全部、飲み込んでいくしかないんだって思うと、少し重たいけど、そのぶんちゃんと生きようって気持ちにもなった。",
			"is_public": false,
			"date": "2025-05-03"
		}, 
		{
			"id": 2,
			"user_id": 1,
			"book_id": 2,
			"quote": "大人とは、裏切られた青年の姿である。" ,
			"impression": "すごい言い方だけど、ちょっとわかる気がした。子どもの頃は、大人ってちゃんとしてるもんだと思ってたけど、自分が近づくにつれて、意外とみんな悩んでるし、あきらめたり、傷ついたりしてるんだなって思うようになった。裏切られたっていうより、期待してたぶんショックが大きいのかもしれない。",
			"is_public": false,
			"date": "2025-05-03"
		}
	];

	//recDataのbook_idから対応するbookDataを取得
	const smp_bookData = [
		{
			"id": 1,
			"title": "ノルウェイの森",
			"author": "村上春樹",
			"publisher": "講談社",
			"summary": "大学生のワタナベは、親友を亡くした心の傷を抱えながら、静かな女性・直子との複雑な関係に悩む。やがて彼は、自由奔放な性格の緑と出会い、生と死のはざまで揺れる恋と青春の日々を送ることに。喪失や孤独、若者の心の不安定さを静かな筆致で描いた長編恋愛小説。",
			"img": "/NorwayForest_cover.jpg"
		},
		{
			"id": 2,
			"title": "津軽",
			"author": "太宰治",
			"publisher": "新潮文庫",
			"summary": "太宰治が故郷・青森県津軽地方を旅し、その土地の風景、人々、そして自らの過去を綴った紀行文学。幼少期に世話になった乳母・たけとの再会を軸に、郷里への愛情や哀愁がにじむ。事実と創作が入り混じった文章で、冷静な観察と温かい感情が描かれており、自己と原点を見つめ直す旅の記録となっている。",
			"img": "/Tsugaru_cover.jpg"
		}
	];

	//本来はSupabaseで直接idに対応するデータをリクエストし、必要なデータのみ取り出す
	const recData = smp_recData[id-1];
	const bookData = smp_bookData[id-1];


	return (
		<main>
			<div className="container">
				<div className="bookInfo">
					<Image src={bookData.img} width={117*4} height={166*4} alt="bookCover" className="coverImg"/>
				</div>
				<div className="recInfo">
					<div className="titleBox">
						<p className="bookTitle">{bookData.title}</p>
						<FormGroup>
							  <FormControlLabel control={<Switch defaultChecked/>} label="Webに公開する" labelPlacement="start"/>
						</FormGroup>
					</div>
					<div className="quoteBox">
						<Box sx={{
							width: 'auto',
							height: 1,
							bgcolor: '#ffffff',
							borderRadius: 2,
							p: 3
						}}>
							<p className="quote">{recData.quote}</p>
						</Box>
					</div>
					<div className="impBox">
						<p>{recData.impression}</p>
					</div>
				</div>	
			</div>
		</main>	
	)
}