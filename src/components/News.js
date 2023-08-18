import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'

export class News extends Component {
	static defaultProps = {
		country: 'in',
		pageSize: 8,
		category: 'general'

	}
	PropTypes = {
		country: PropTypes.string,
		pageSize: PropTypes.number,
		category: PropTypes.string
	}

	constructor() {
		super();

		this.state = {
			articles: [],
			loading: false,
			page: 1,


		}
	}
	async componentDidMount() {
		let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=7d6e44c311144426b4098325ae42ff6b&page=1&pageSize=${this.props.pageSize}`;
		let data = await fetch(url);
		let parsedData = await data.json()
		console.log(parsedData);
		this.setState({ articles: parsedData.articles, totalArticles: parsedData.totalResults })

	}

	handlePreviousClick = async () => {
		console.log("Previous");

		let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=7d6e44c311144426b4098325ae42ff6b&$page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
		this.setState({ loading: true })
		let data = await fetch(url);
		let parsedData = await data.json()
		console.log(parsedData);
		this.setState({
			page: this.state.page - 1,
			articles: parsedData.articles,
			loading: false
		})
	}
	handlNextClick = async () => {
		console.log('Next');
		if (!(this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize))) {
			let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=7d6e44c311144426b4098325ae42ff6b&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
			this.setState({ loading: true })
			let data = await fetch(url);
			let parsedData = await data.json()
			console.log(parsedData);
			this.setState({
				page: this.state.page + 1,
				articles: parsedData.articles,
				loading: false
			})
		}

	}
	render() {

		return (
			<div className="container my-3">
				<h2 className='text-center'>NewsMonkey - Top Headlines</h2>
				{this.state.loading && <Spinner />}

				<div className="row">
					{

						!this.state.loading && this.state.articles.map((article) => {
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
					<button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} type='button' className='btn btn-dark' onClick={this.handlNextClick}>Next &rarr;</button>
				</div>
			</div>
		)
	}
}

export default News
