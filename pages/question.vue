<template>
	<div>
		<frame-template>
			<card :title="title">
				<p>(2018.05.31 更新)</p>
				<div v-for="([name, list], parentId) in questionList">
					<h1>{{name}}</h1>
					<ul class="qaLink">
						<ul v-for="(question, id) in list">
							<li>
								<a :href="`#qa-${parentId}-${id}`">{{question}}</a>
							</li>
						</ul>
					</ul>
				</div>
			</card>
			<template v-for="({name, list}, parentId) in qa">
				<card :title="name">
					<ul class="qaList" :id="`qa-${parentId}-${id}`" v-for="(talkList, id) in list">
						<li v-for="{type, icon, text} in talkList">
							<p>
								<span v-if="type === 'answer'" class="answer word" v-html="text"></span>
								<img class="icon" :src="`/assets/img/icon/${(type==='question') ? 'maxine' : 'marjorie'}_${icon}.png`">
								<span v-if="type === 'question'" class="question word">{{text}}</span>
							</p>
						</li>
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
	head() {
		return {
			title: this.title,
		};
	},
	data: () => ({
		title: "Q&Aコーナー",
		qa: [
			{
				name: "マクシーンの　おしえて！マージョリー先生",
				list: [
					[
						{
							type: "question",
							icon: "smile",
							text: "マージョリー先生！　政マニオンリーというイベントがあるらしいです！",
						},
						{
							type: "answer",
							icon: "default",
							text: "そうね。2018年9月24日にあるイベントだけれど、総理はまだ詳しいことがわかっていないようね。",
						},
						{
							type: "question",
							icon: "panic",
							text: "実は、私もわからないことがたくさん……。",
						},
						{
							type: "answer",
							icon: "thinking",
							text: "仕方がないから、いまの私が知っていることに限られるけれど、教えてあげるわ。ほら、総理ものんびりしてないで、始めるわよ。",
						},
					],
				],
			},
			{
				name: "イベントについて",
				list: [
					[
						{
							type: "question",
							icon: "smile",
							text: "政マニオンリーって、どんなイベントですか？",
						},
						{
							type: "answer",
							icon: "smile",
							text: "DMM GAMES様で配信中のオンラインゲーム「政剣マニフェスティア」のファンイベントね。",
						},
					],
					[
						{
							type: "question",
							icon: "sad",
							text: "公式のイベントなのでしょうか？",
						},
						{
							type: "answer",
							icon: "default",
							text: "非公式よ。実在の人物、団体とは関係ないわ。ホントに一切関係ないから。",
						},
					],
					[
						{
							type: "question",
							icon: "sad",
							text: "サークル参加しない総理も、参加費はかかりますか？",
						},
						{
							type: "answer",
							icon: "sad2",
							text: "少しだけ、参加費を頂く予定だと主催が言っていたわ。参加する総理には、入場チケット代わりのアイテムを用意する予定、とも。",
						},
					],
					[
						{
							type: "question",
							icon: "smile",
							text: "当日のタイムテーブルはどうなりますか？",
						},
						{
							type: "answer",
							icon: "thinking",
							text: "調整中。後日、お知らせがあるようね。",
						},
					],
					[
						{
							type: "question",
							icon: "smile2",
							text: "写真撮影や動画撮影はできますか？",
						},
						{
							type: "answer",
							icon: "default",
							text: "写真撮影は可能よ。ただし、必ず被写体の方の許可を得た上で撮影を行うこと。ウェブやSNSへの投稿も、必ず被写体の方から許可を得てから投稿するように。<br>動画撮影は禁止。動画撮影なんてしてたら、燃やすからね。",
						},
					],
					[
						{
							type: "question",
							icon: "panic",
							text: "はわっ！　いい写真が撮れたから記念にイ●スタに上げたい！　けど、背景に他の人が写り込んじゃってる……",
						},
						{
							type: "answer",
							icon: "thinking",
							text: "周囲が写り込んでしまった場合、モザイクやぼかしなどの画像処理を施すとか、被写体の方と同様に許可を得るとか、十分な配慮をお願いするわ",
						},
					],
				],
			},
			{
				name: "会場について",
				list: [
					[
						{
							type: "question",
							icon: "smile",
							text: "車での来場は可能ですか？",
						},
						{
							type: "answer",
							icon: "sad",
							text: "特別な理由がない場合、自家用車は使わず、公共の交通機関を使うようにお願いしたいわね。会場に来場者用の駐車場はないから。<br>万が一、車で来ざるを得ない場合、近隣の有料駐車場を使うようにして。",
						},
					],
					[
						{
							type: "question",
							icon: "smile",
							text: "会場内で飲食は可能ですか？",
						},
						{
							type: "answer",
							icon: "smile2",
							text: "できるように調整中。ただ、会場は絨毯敷きになっているから、飲食可能な場合もそうでない場合も汚さないように。",
						},
					],
					[
						{
							type: "question",
							icon: "smile",
							text: "喫煙は可能ですか？",
						},
						{
							type: "answer",
							icon: "thinking",
							text: "喫煙所は1階の荷捌き室近辺にあるわ。喫煙所を除いた建物内と周辺道路は禁煙になっているから気をつけて。",
						},
					],
					[
						{
							type: "question",
							icon: "smile",
							text: "コスプレ参加は可能ですか？",
						},
						{
							type: "answer",
							icon: "smile2",
							text: "できるように調整中。ところで、マクシーンもコスプレするの？",
						},
						{
							type: "question",
							icon: "panic",
							text: "はわっ！　コスプレは私ではなく総理が……",
						},
					],
				],
			},
			{
				name: "サークル参加について",
				list: [
					[
						{
							type: "question",
							icon: "sad",
							text: "サークル参加費はいくらですか？",
						},
						{
							type: "answer",
							icon: "smile2",
							text: "サークル募集の際にお知らせがあるわ。できる限りで割高感はない金額のようだから安心して。サークル参加者にも、入場チケット代わりのアイテムを配る予定みたいね。",
						},
					],
					[
						{
							type: "question",
							icon: "sad2",
							text: "宅配搬入は可能ですか？",
						},
						{
							type: "answer",
							icon: "thinking",
							text: "調整中よ。可能な場合は、募集の際にその旨お知らせがあるらしいわ。",
						},
					],
					[
						{
							type: "question",
							icon: "sad",
							text: "頒布したいものがたくさんある総理は、どういう搬入ルートになるのか不安ですね……",
						},
						{
							type: "answer",
							icon: "default",
							text: "申込時に申告があった頒布予定量に合わせて、対応してくれるらしい。大量に頒布予定の総理には、申込後に個別に連絡が行くわ。主催からは、ご協力のほど、よろしくお願いいたします、とのことよ。",
						},
					],
					[
						{
							type: "question",
							icon: "smile",
							text: "食べ物の頒布は可能ですか？",
						},
						{
							type: "answer",
							icon: "default",
							text: "製造元がはっきりとしている市販品は頒布可能よ。個包装されていないものや、手作りのものは頒布不可。気をつけて。",
						},
					],
				],
			},
			{
				name: "このQ&Aについて",
				list: [
					[
						{
							type: "question",
							icon: "smile2",
							text: "マージョリー先生、さすが、物知りですね！",
						},
						{
							type: "answer",
							icon: "default",
							text: "そんなことはないわ。偶然知っていただけ。",
						},
						{
							type: "question",
							icon: "panic",
							text: "ただ、私、まだ疑問があって解決できないのですが……",
						},
						{
							type: "answer",
							icon: "smile2",
							text: "そればかりは、私にはどうにもならないから、戦挙管理委員会にメールかTwitterで連絡を取るといいわ。できる限りで答えてくれるはずよ。<br>このQ&Aも随時更新予定という話だから、チェックしておいて。",
						},
					],
				],
			},
		],
	}),
	computed: {
		questionList() {
			return this.qa
				.map(x => [
					x.name,
					x.list
						.map(y => y[0])
						.map(y => y.text),
				]);
		},
	},
	components: {
		FrameTemplate,
		Card,
	},
};
</script>
<style scoped>
.qaLink {
	margin-left: 1.5rem;
	line-height: 1.75;
}

.qaList {
	margin: 1rem 3%;
	list-style: none;
	& li p {
		display: flex;
		justify-content: space-between;
		align-items: center;
		
		& img.icon {
			display: block;
			width: 80px;
			height: 80px;
		}
		
		& .word {
			display: block;
			width: calc(100% - 100px);
			position: relative;
			margin: 0.3rem;
			padding: 1rem 0.5rem;
			border: solid 3px;
			border-radius: 15px;
			
			&.question {
				color: #0d4373;
				border-color: #4193d9;
				&:before {
					content: "";
					position: absolute;
					top: 50%;
					left: -24px;
				 	margin-top: -12px;
					border: 12px solid transparent;
					border-right: 12px solid #FFF;
				 	z-index: 2;
				}
				&:after {
					content: "";
					position: absolute;
					top: 50%;
					left: -30px;
				 	margin-top: -14px;
					border: 14px solid transparent;
					border-right: 14px solid #4193d9;
				 	z-index: 1;
				}
			}
			
			&.answer {
				color: #711111;
				border-color: #ee534c;
				&:before {
					content: "";
					position: absolute;
					top: 50%;
					right: -24px;
				 	margin-top: -12px;
					border: 12px solid transparent;
					border-left: 12px solid #FFF;
				 	z-index: 2;
				}
				&:after {
					content: "";
					position: absolute;
					top: 50%;
					right: -30px;
				 	margin-top: -14px;
					border: 14px solid transparent;
					border-left: 14px solid #ee534c;
				 	z-index: 1;
				}
			}
		}
	}
}
</style>
