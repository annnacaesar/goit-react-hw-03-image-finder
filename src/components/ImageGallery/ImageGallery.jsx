import { Component } from 'react';
import { PropTypes } from 'prop-types';
import { ImageGalleryStyle, Notify } from './ImageGallery.styled';
import ImageGalleryItem from 'components/ImageGalleryItem';
import ImageErrorView from 'components/ImageErrorView';
import Loader from 'components/Loader';
import imagesAPI from '../../services/images-api';

class ImageGallery extends Component {
	state = {
		images: null,
		error: null,
		status: 'idle',
	};
	componentDidUpdate(prevProps, prevState) {
		const { searchQuery, page, getData, loadMore } = this.props;
		if (prevProps.searchQuery !== searchQuery || prevProps.page !== page) {
			this.setState({ status: 'pending' });
			imagesAPI(searchQuery, page)
				.then(response => {
					if (response.total !== 0) {
						this.setState({
							images: response.hits,
							status: 'resolved',
						});
						loadMore(true);
						getData(response.hits);
					} else {
						this.setState({ status: 'rejected' });
						loadMore(false);
						getData(null);
					}
				})
				.catch(error => this.setState({ error, status: 'rejected' }));
		}
	}

	render() {
		const { images, status } = this.state;

		if (status === 'idle') {
			return <Notify >Введіть слово в пошуковий рядочок</Notify>;
		}
		if (status === 'pending') {
			return <Loader />;
		}
		if (status === 'rejected') {
			return (
				<ImageErrorView
					message={`Немає картинки з ім'ям ${this.props.searchQuery}`}
				/>
			);
		}
		if (status === 'resolved') {
			return (
				<ImageGalleryStyle>
					{images.map(image => {
						return (
							<ImageGalleryItem
								onClick={this.props.openModal}
								key={image.id}
								image={image}
							/>
						);
					})}
				</ImageGalleryStyle>
			);
		}
	}
}

ImageGallery.propTypes = {
  searchQuery: PropTypes.string,
  page: PropTypes.number,
	openModal: PropTypes.func.isRequired,
	getData: PropTypes.func.isRequired,
	loadMore: PropTypes.func.isRequired,
};

export default ImageGallery;
