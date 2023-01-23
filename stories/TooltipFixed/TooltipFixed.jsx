import PropTypes from 'prop-types';
import React from 'react';

const Tooltip = ({ type, size, position, title, trigger, style, className, children }) => {
	const types = {
		parent: {
			dark: 'background-opacity-black-9 color-white',
			light: 'background-white',
		},
	};

	const sizes = {
		parent: {
			sm: '200px',
			md: '300px',
			lg: '400px',
		},
	};

	const positions = {
		parent: {
			topLeft: 'position-top-left',
			topRight: 'position-top-right',
			bottomLeft: 'position-bottom-left',
			bottomRight: 'position-bottom-right',
		},
	};

	return (
		<div className={`position-relative ${className}`}>
			<div
				className={`${types.parent[type]} ${positions.parent[position]} position-absolute padding-xs border-radius-xxs margin-bottom-xs box-shadow-s`}
				style={{
					...style,
					transform: `translateY(${position === 'topLeft' || position === 'topRight' ? '-' : ''}100%)`,
					width: sizes[size],
				}}
			>
				{title && <div className="font-size-s font-weight-600 margin-bottom-xs">{title}</div>}
				<div className="font-size-xs">{children}</div>
			</div>
			<span className="cursor-pointer">{trigger}</span>
		</div>
	);
};

Tooltip.propTypes = {
	children: PropTypes.any,
	className: PropTypes.string,
	position: PropTypes.oneOf(['topLeft', 'topRight', 'bottomLeft', 'bottomRight']),
	size: PropTypes.oneOf(['sm', 'md', 'lg']),
	style: PropTypes.object,
	title: PropTypes.string,
	trigger: PropTypes.any,
	type: PropTypes.oneOf(['dark', 'light']),
};

Tooltip.defaultProps = {
	className: '',
	position: 'topLeft',
	size: 'md',
	type: 'light',
};

export { Tooltip };
