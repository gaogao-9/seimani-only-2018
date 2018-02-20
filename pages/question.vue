<template>
	<div>
		<frame-template>
			<card :title="title">
				<p>各質問は随時更新予定です。</p>
				<div v-for="({name, list}, parentId) in qa">
					<h1>{{name}}</h1>
					<ul>
						<ul v-for="({q: question, a: answer}, id) in list">
							<li>
								<a :href="`#qa-${parentId}-${id}`">{{question}}</a>
							</li>
						</ul>
					</ul>
				</div>
			</card>
			<template v-for="({name, list}, parentId) in qa">
				<card :title="name">
					<ul class="qaList" :id="`qa-${parentId}-${id}`" v-for="({q: question, a: answer}, id) in list">
						<li class="question">{{question}}</li>
						<li class="answer" v-html="answer"></li>
					</ul>
				</card>
			</template>
		</frame-template>
	</div>
</template>

<script>
import FrameTemplate from "~/components/FrameTemplate.vue";
import Card from "~/components/Card.vue";

export default {
	data: () => ({
		title: "Q&Aコーナー",
		qa: [
			{
				name: "イベントについて",
				list: [
					{
						q: "なんのイベントなの？",
						a: "DMM GAMES様で配信中のオンラインゲーム「政剣マニフェスティア」のファンイベントです。",
					},
					{
						q: "公式イベントなの？",
						a: "非公式イベントです。",
					},
					{
						q: "サークル参加しない人も参加費はかかるの？",
						a: "少額ではありますが、参加費を頂く予定です。その際は、入場チケット代わりのアイテムをご用意いたします。詳細は後日お知らせいたします。",
					},
					{
						q: "当日のタイムテーブルはどうなるの？",
						a: "調整中です。後日お知らせいたします。",
					},
					{
						q: "写真撮影や動画撮影はできますか？",
						a: "写真撮影は可能です。ただし、必ず被写体の方の許可を得た上で撮影を行ってください。ウェブ上やSNSへの投稿も、必ず被写体の方から許可を得てください。動画撮影は禁止いたします。",
					},
					{
						q: "記念にイ●スタに上げたい！　けど、背景に他の人が写り込んじゃった……",
						a: "周囲が写り込んでしまった場合は、モザイクやぼかしなどの画像処理を行うか、被写体の方と同様に許可を得るなど、十分な配慮をお願いいたします。",
					},
					{
						q: "質問があるのですが……",
						a: "メールとTwitterにて対応します。是非お気軽にお問い合わせください。",
					},
				],
			},
			{
				name: "会場について",
				list: [
					{
						q: "自動車での来場は可能ですか？",
						a: "会場に来場者用駐車場はありませんので、近隣の有料駐車場をご利用ください。特段の理由がない場合、公共交通機関を利用することをお勧めいたします。",
					},
					{
						q: "コスプレ出来るの？",
						a: "出来るように調整中です。",
					},
					{
						q: "会場内で飲食は可能ですか？",
						a: "できるように調整中です。なお、会場は絨毯敷きとなっておりますので、汚されないようにお願いいたします。",
					},
					{
						q: "喫煙は可能ですか？",
						a: "喫煙所は1階の荷捌き室近辺にあります。なお、喫煙所を除いた建物内と周辺道路は禁煙となっておりますので、ご協力をお願いいたします。",
					},
				],
			},
			{
				name: "サークル参加について",
				list: [
					{
						q: "サークル参加費はいくら？",
						a: "募集の際にお知らせします。割高感のないようにする予定です。なお、サークル参加者の方にも、入場チケット代わりのアイテムをお配りいたします。",
					},
					{
						q: "宅配搬入は可能ですか？",
						a: "調整中です。可能な場合、募集の際にお知らせいたします。",
					},
					{
						q: "たくさん搬入したいのだけれど、どういう搬入ルートになるの？",
						a: "申込時に申告いただいた頒布予定量に合わせて、対応する予定です。大量に頒布予定の方については個別にご連絡いたします。ご協力のほど、よろしくお願いいたします。",
					},
					{
						q: "食べ物の頒布は可能ですか？",
						a: "製造元がはっきりとしている市販品は頒布可能です。個包装されていないもの、手作りのものは頒布不可となります。",
					},
				],
			},
		],
	}),
	components: {
		FrameTemplate,
		Card,
	},
};
</script>
<style>

.qaList {
	list-style: none;
	
	& li {
		position: relative;
		
		&.question:before {
			position: absolute;
			left: -1.5em;
			content: "Q. ";
		}
		
		&.answer:before {
			position: absolute;
			left: -1.5em;
			content: "A. ";
		}
	}
}

</style>
