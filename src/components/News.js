import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';

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
	capitalizeFirstLetter = (string) => {
		return string.charAt(0).toUpperCase() + string.slice(1);
	}
	constructor(props) {
		super();

		this.state = {
			articles: [],
			loading: true,
			page: 1,
			totalResults: 0

		}

		document.title = `${this.capitalizeFirstLetter(props.category)} - NewsMonkey`;
	}
	async updateNews() {
		this.props.setProgress(10)
		const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=7d6e44c311144426b4098325ae42ff6b&page=${this.state.page}&pageSize=${this.props.pageSize}`;
		this.setState({ loading: true })
		let data = await fetch(url);
		let parsedData = await data.json()
		this.setState({
			articles: parsedData.articles,
			totalArticles: parsedData.totalResults,
			loading: false,

		});
		this.props.setProgress(100);
	}
	async componentDidMount() {
		this.updateNews();
	}
	fetchMoreData = async () => {
		this.setState({
			page: this.state.page + 1
		});

		const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=7d6e44c311144426b4098325ae42ff6b&page=${this.state.page}&pageSize=${this.props.pageSize}`;

		let data = await fetch(url);
		let parsedData = await data.json()
		this.setState({
			articles: this.state.articles.concat(parsedData.articles),
			totalArticles: parsedData.totalResults,
			loading: false,

		})
	};
	render() {

		return (
			<>
				<h2 className='text-center'>NewsMonkey - Top Headlines  {this.capitalizeFirstLetter(this.props.category)}
				</h2>
				{this.state.loading && <Spinner />}
				<InfiniteScroll
					dataLength={this.state.articles.length}
					next={this.fetchMoreData}
					hasMore={this.state.articles.length !== this.state.totalResults}
					loader={<Spinner />}
				>
					<div className='container'>
						<div className="row">
							{

								this.state.articles.map((article) => {
									return (
										<div className="col-md-4" key={article.url}>
											<NewsItem title={article.title ? article.title.slice(0, 40) : ''} description={article.description ? article.description.slice(0, 88) : ''} imageUrl={article.urlToImage} newsUrl={article.url} author={article.author} date={article.publishedAt} source={article.source.name} />
										</div>
									)
								})
							}
						</div>
					</div>
				</InfiniteScroll >
			</>
		)
	}
}

export default News
