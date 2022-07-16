import { PropTypes } from 'prop-types';
import errorImage from '../../images/error.jpeg'

export default function ImageErrorView({ message }) {
	return (
		<div role='alert'>
			<img src={errorImage} width='240' alt="sadcat" />
			<p>{ message}</p>
		</div>
	)
}

ImageErrorView.propTypes = {
  message: PropTypes.string,
};