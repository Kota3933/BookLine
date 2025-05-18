import { Box } from "@mui/material"
import Image from "next/image"
import Link from "next/link";

//サンプルデータ
const bookData = [
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
]

const recData = [
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
]


const link = "/record/detail/";

export default function List(){
	return (
		<main>
			<div className="listBox">
				<Box sx={{
					width: 1,
					height: 1/2,
					borderRadius: 2,
					bgcolor: '#ffffff',
					p: 3
				}}>
					{recData.map((rec, index) => (
						<Box key={index} sx={{
						width: 1,
						height: 1/2,
						borderRadius: 4,
						border: 1,
						mb: 2,
						p: 2
						}}>
							<div className="recBlock">
								<Link href={link+(index+1).toString()}>
									<Image src={bookData[index].img} width={117} height={166} alt="bookCover" className="coverImg"/>
								</Link>
								<div className="recInfo">
									<Link href={link+(index+1).toString()}>
										<p className="bookTitle">{bookData[index].title}</p>
									</Link>
									<p className="bookAuthor">{bookData[index].author}</p>
									<p className="quote">「{rec.quote}」</p>
								</div>
								<p className="date">{rec.date}</p>
							</div>
						</Box>
					))}
				</Box>
			</div>
		</main>
	)
}