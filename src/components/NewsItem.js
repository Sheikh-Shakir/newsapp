import React, { Component } from 'react'

export class NewsItem extends Component {

	render(props) {
		let { title, description, imageUrl, newsUrl } = this.props;
		return (

			<div className='my-3'>
				<div className="card" >
					<img src={!imageUrl ? 'https://fastly.picsum.photos/id/20/3670/2462.jpg?hmac=CmQ0ln-k5ZqkdtLvVO23LjVAEabZQx2wOaT4pyeG10I' : imageUrl} className="card-img-top" alt="..." />
					<div className="card-body">
						<h5 className="card-title">{title}...</h5>
						<p className="card-text">{description}...</p>
						<a href={newsUrl} className="btn btn-sm btn-dark" target='__blank'>Read More</a>
					</div>
				</div>
			</div>
		)
	}
}

export default NewsItem
