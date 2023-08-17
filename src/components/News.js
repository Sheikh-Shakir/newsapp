import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
	articles = [
		{
			"source": {
				"id": null,
				"name": "YouTube"
			},
			"author": null,
			"title": "India: Chandrayaan-3 completes 33 days, race to lunar South Pole enters final leg | World DNA - WION",
			"description": "Chandrayaan-3 is expected to land on the lunar surface around August 23 after completing a 40-day journey. On the other hand, Luna-25 is expected to land on ...",
			"url": "https://www.youtube.com/watch?v=_w7qiPyjty4",
			"urlToImage": "https://i.ytimg.com/vi/_w7qiPyjty4/maxresdefault.jpg",
			"publishedAt": "2023-08-16T03:53:59Z",
			"content": null
		},
		{
			"source": {
				"id": null,
				"name": "NDTV News"
			},
			"author": "NDTV Sports Desk",
			"title": "Watch: Lionel Messi Scores Long-Range Stunner As Inter MIami Reach Leagues Cup Final - NDTV Sports",
			"description": "Lionel Messi scored in the 6th successive game for Inter Miami as the club defeated Philadelphia Union to enter Leagues Cup final.",
			"url": "https://sports.ndtv.com/football/lionel-messi-scores-long-range-stunner-as-inter-miami-reach-leagues-cup-final-watch-4301377",
			"urlToImage": "https://c.ndtvimg.com/2023-08/3bn89rpg_messi-goal_650x300_16_August_23.jpg",
			"publishedAt": "2023-08-16T03:49:20Z",
			"content": "One of the greatest of all time, Lionel Messi, was on target once again for Inter Miami, scoring for the 6th time in as many matches for his new club. Messi, who has been on a stunning goal-scoring s… [+2413 chars]"
		},
		{
			"source": {
				"id": null,
				"name": "NDTV News"
			},
			"author": null,
			"title": "BJP's Advance Prep On 5 Year-End State Polls, PM To Chair Key Meet Today - NDTV",
			"description": "Leaving no stone unturned in preparations for the Assembly polls due later this year, the BJP has called a meeting of its central election committee at its Delhi headquarters this evening.",
			"url": "https://www.ndtv.com/india-news/pm-narendra-modi-amit-shah-jp-nadda-bjp-bjps-advance-prep-on-5-year-end-state-polls-pm-to-chair-key-meet-today-4301381",
			"urlToImage": "https://c.ndtvimg.com/2020-03/o0v34158_narendra-modi-amit-shah-jp-nadda-pti_625x300_03_March_20.jpg",
			"publishedAt": "2023-08-16T03:44:01Z",
			"content": "The meeting will be attended by PM Narendra Modi, Home Minister Amit Shah, party president JP Nadda New Delhi: Leaving no stone unturned in preparations for the Assembly polls due later this year, t… [+1944 chars]"
		},
		{
			"source": {
				"id": null,
				"name": "Livemint"
			},
			"author": "Livemint",
			"title": "Aptech CEO Anil Pant passes way | Mint - Mint",
			"description": "Anil Pant passed away on 15 August, according to Aptech Limited's BSE filing",
			"url": "https://www.livemint.com/companies/news/aptech-ceo-anil-pant-passes-way-on-15-august-bse-filing-informed-11692155961429.html",
			"urlToImage": "https://www.livemint.com/lm-img/img/2023/08/16/600x338/aptech_1692160054903_1692160080461.jpg",
			"publishedAt": "2023-08-16T03:23:36Z",
			"content": "Aptech MD and CEO Anil Pant passed away on 15 August (Tuesday). The computer company informed in a BSE filing about Pant's death. 'The Company regrets to inform about the sad demise of Dr Anil Pant, … [+1398 chars]"
		},
		{
			"source": {
				"id": null,
				"name": "Hindustan Times"
			},
			"author": "HT Correspondent",
			"title": "One person killed, five others rescued after building collapse near Joshimath - Hindustan Times",
			"description": "The building collapse site is around 13 km from Joshimath, where 868 structures have developed cracks and 181 have been declared unsafe",
			"url": "https://www.hindustantimes.com/cities/dehradun-news/building-collapse-in-uttarakhand-s-chamoli-district-1-dead-5-rescued-search-on-for-trapped-person-101692155934465.html",
			"urlToImage": "https://www.hindustantimes.com/ht-img/img/2023/08/16/1600x900/Rescuers-at-the-building-collapse-scene---NDRF-_1692155930678.jpg",
			"publishedAt": "2023-08-16T03:18:54Z",
			"content": "One person was killed while five others were rescued after a building collapsed at Helang near Joshimath in Uttarakhands Chamoli district late on Tuesday evening. State Disaster Response Force (SDRF)… [+1709 chars]"
		},

	];
	constructor() {
		super();
		console.log("Hello i am a constructor from news component");
		this.state = {
			articles: this.articles,
			loading: false
		}
	}
	render() {
		// const desc = this.state.articles.description.slice(0, 88);

		return (
			<div className="container my-3">
				<h2>NewsMonkey - Top Headlines</h2>

				<div className="row">
					{

						this.state.articles.map((article) => {
							return (
								<div className="col-md-4" key={article.url}>
									<NewsItem title={article.title.slice(0, 40)} description={article.description.slice(0, 88)} imageUrl={article.urlToImage} newsUrl={article.url} />
								</div>
							)
						})
					}
				</div>
			</div>
		)
	}
}

export default News
