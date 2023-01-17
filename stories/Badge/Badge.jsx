import React from 'react';
import PropTypes from 'prop-types';

const types = {
	parent: {
		default: 'background-neutral-1 hover:background-neutral-2 color-neutral-7',
		primary: 'background-primary-1 hover:background-primary-2 color-primary-7',
		secondary: 'background-secondary-1 hover:background-secondary-2 color-secondary-7',
		tertiary: 'background-tertiary-1 hover:background-tertiary-2 color-tertiary-7',
	},
};

const Badge = ({ remove, children, style, iconRight, iconLeft, type, className, onClickRemove }) => {
	return (
		<div
			className={`${types.parent[type]} ${iconLeft ? 'padding-left-xs' : 'padding-left-s'} ${
				iconRight ? 'padding-right-xs' : 'padding-right-s'
			} padding-top-xxs padding-bottom-xxs transition-fast border-radius-xxl cursor-pointer display-inline-flex align-items-center ${className}`}
			style={{ ...style }}
		>
			{iconLeft && <i className={`${iconLeft} line-height-m font-size-xs margin-right-xxs`} />}
			<div className={'font-size-xs line-height-m font-weight-500'}>{children}</div>
			{iconRight && <i className={`${iconRight} line-height-m font-size-xs margin-left-xxs`} />}
			{remove && (
				<i role="presentation" className={'font-size-s icon-system-close-circle-fill margin-left-xs'} onClick={onClickRemove} />
			)}
		</div>
	);
};

Badge.propTypes = {
	children: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
	style: PropTypes.object,
	type: PropTypes.oneOf(['default', 'primary', 'secondary', 'tertiary']),
	className: PropTypes.string,
	remove: PropTypes.bool,
	onClickRemove: (props, propertyName) => {
		const { remove, [propertyName]: property } = props;
		if (remove === true && (property === undefined || typeof property !== 'function')) {
			return new Error('Please provide an onClickRemove function.');
		}
		return null;
	},
};

Badge.defaultProps = {
	style: {},
	type: 'default',
	className: '',
};

export { Badge };