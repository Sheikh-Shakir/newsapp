import React, { Component } from 'react'

export class NewsItem extends Component {

	render(props) {
		let { title, description, imageUrl, newsUrl, author, date, source } = this.props;
		return (

			<div className='my-3'>
				<div className="card" >
					<span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{ left: "85%", zIndex: 1 }}>
						{source}
					</span>
					<img src={!imageUrl ? 'https://fastly.picsum.photos/id/20/3670/2462.jpg?hmac=CmQ0ln-k5ZqkdtLvVO23LjVAEabZQx2wOaT4pyeG10I' : imageUrl} className="card-img-top" alt="..." />
					<div className="card-body">
						<h5 className="card-title">{title}...</h5>
						<p className="card-text">{description}...</p>
						<p className="card-text"><small className="text-muted">By {!author ? "Unknown" : author} on  {new Date(date).toGMTString()}</small></p>
						<a href={newsUrl} className="btn btn-sm btn-dark" target='__blank'>Read More</a>
					</div>
				</div>
			</div>
		)
	}
}

export default NewsItem
