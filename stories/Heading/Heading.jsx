import React from 'react';
import PropTypes from 'prop-types';

const sizes = {
	h1: 'font-size-h1',
	h2: 'font-size-h2',
	h3: 'font-size-h3',
	h4: 'font-size-l',
	h5: 'font-size-m',
	h6: 'font-size-s',
};

const Heading = ({ size, children, className }) => {
	return <div className={`${sizes[size]} ${className}`}>{children}</div>;
};

Heading.propTypes = {
	children: PropTypes.any,
	className: PropTypes.string,
	size: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
};

Heading.defaultProps = {
	className: '',
	size: 'h3',
};

export { Heading };