import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {

	constructor() {
		super();

		this.state = {
			articles: [],
			loading: false,
			page: 1,

		}
	}
	async componentDidMount() {
		let url = 'https://newsapi.org/v2/top-headlines?country=in&apiKey=7d6e44c311144426b4098325ae42ff6b&page=1&pageSize=20';
		let data = await fetch(url);
		let parsedData = await data.json()
		console.log(parsedData);
		this.setState({ articles: parsedData.articles, totalArticles: parsedData.totalResults })

	}

	handlePreviousClick = async () => {
		console.log("Previous");

		let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=7d6e44c311144426b4098325ae42ff6b&$page={this.state.page - 1}&pageSize=20`;
		let data = await fetch(url);
		let parsedData = await data.json()
		console.log(parsedData);
		this.setState({
			page: this.state.page - 1,
			articles: parsedData.articles
		})
	}
	handlNextClick = async () => {
		console.log('Next');
		if (Math.ceil(this.state.page + 1 > this.state.totalResults / 20)) {

		} else {
			let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=7d6e44c311144426b4098325ae42ff6b&page=${this.state.page + 1}&pageSize=20`;
			let data = await fetch(url);
			let parsedData = await data.json()
			console.log(parsedData);
			this.setState({
				page: this.state.page + 1,
				articles: parsedData.articles
			})
		}

	}
	render() {

		return (
			<div className="container my-3">
				<h2>NewsMonkey - Top Headlines</h2>

				<div className="row">
					{

						this.state.articles.map((article) => {
							return (
								<div className="col-md-4" key={article.url}>
									<NewsItem title={article.title ? article.title.slice(0, 40) : ''} description={article.description ? article.description.slice(0, 88) : ''} imageUrl={article.urlToImage} newsUrl={article.url} />
								</div>
							)
						})
					}
				</div>
				<div className='container d-flex justify-content-between'>
					<button disabled={this.state.page <= 1} type='button' className='btn btn-dark' onClick={this.handlePreviousClick}>&larr; Previous</button>
					<button type='button' className='btn btn-dark' onClick={this.handlNextClick}>Next &rarr;</button>
				</div>
			</div>
		)
	}
}

export default News
