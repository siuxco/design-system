import React from 'react';
import PropTypes from 'prop-types';

const states = {
	parent: {
		info: 'border-info-7 background-info-1',
		success: 'border-success-7 background-success-1',
		warning: 'border-warning-7 background-warning-1',
		error: 'border-error-7 background-error-1',
	},
	icon: {
		info: 'color-info-7 icon-system-question-fill',
		success: 'color-success-7 icon-system-checkbox-circle-fill',
		warning: 'color-warning-7 icon-system-error-warning-fill',
		error: 'color-error-7 icon-system-close-circle-fill',
	},
};

const Alert = ({ className, icon, state, children, onCloseClick, closeIcon, style }) => {
	return (
		<div
			className={`transition-fast position-relative border-radius-xxs overflow-hidden border-width-5 line-height-m border-style-solid border-top-none border-right-none border-bottom-none display-flex align-items-center justify-content-space-between padding-xs ${states.parent[state]} ${className}`}
			style={style}
		>
			<div className="display-flex align-items-center">
				<i className={`${states.icon[state]} ${icon} font-size-l margin-right-xs`} />
				<div className="color-neutral-9">{children}</div>
			</div>
			{closeIcon && (
				<i
					role="presentation"
					className={'icon-system-close-line font-size-s color-neutral-7 hover:color-grey-8 cursor-pointer'}
					onClick={onCloseClick}
				/>
			)}
		</div>
	);
};

const Link = ({ children, href, target, className }) => {
	return (
		<a
			className={`color-info-7 hover:color-info-9 display-inline-flex align-items-center cursor-pointer ${className}`}
			href={href}
			target={target}
		>
			{children}
		</a>
	);
};

Link.propTypes = {
	children: PropTypes.any,
	href: PropTypes.string,
	target: PropTypes.string,
	className: PropTypes.string,
};

Link.defaultProps = {
	target: '',
	className: '',
	children: (
		<>
			Learn more
			<i className="icon-system-arrow-right-line margin-left-xxs" />
		</>
	),
};

Alert.propTypes = {
	children: PropTypes.any,
	className: PropTypes.string,
	closeIcon: PropTypes.bool,
	icon: PropTypes.string,
	onCloseClick: PropTypes.func,
	state: PropTypes.oneOf(['info', 'success', 'warning', 'error']),
};

Alert.defaultProps = {
	children: (
		<>
			This is a generic message.
			<Link />
		</>
	),
	className: '',
	closeIcon: false,
	icon: '',
	onCloseClick: () => {},
	state: 'info',
};

Alert.Link = Link;

export { Alert };