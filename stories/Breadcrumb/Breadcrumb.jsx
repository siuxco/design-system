import React from 'react';
import PropTypes from 'prop-types';

const types = {
	parent: {
		arrow: <i className="icon-system-arrow-right-s-line font-size-m color-neutral-3" />,
		slash: '/',
		dash: '-',
	},
};

const themes = {
	parent: {
		default: 'color-neutral-7 hover:color-neutral-7 cursor-default',
		primary: 'color-black font-weight-600 hover:color-black cursor-pointer',
	},
};

const Breadcrumb = ({ separator, className, style, children }) => {
	const Separator = (index) => (
		<li key={index} className="padding-left-xs padding-right-xs display-flex color-neutral-2 cursor-default">
			{types.parent[separator]}
		</li>
	);
	const cleanChildren = React.Children.toArray(children);
	const finalChildren = cleanChildren.flatMap((item, index) => [
		React.cloneElement(item, { theme: cleanChildren.length - 1 !== index ? 'primary' : 'default' }),
		...(cleanChildren.length - 1 === index ? [] : [Separator(index)]),
	]);

	return (
		<ul className={`display-flex align-items-center color-grey-10 cursor-pointer ${className}`} style={{ ...style }}>
			{finalChildren}
		</ul>
	);
};

const Item = ({ theme, icon, href, target, className, children }) => {
	return (
		<li>
			<a
				href={href}
				target={target}
				className={`${themes.parent[theme]} text-transform-lowercase display-flex align-items-center ${className}`}
			>
				{icon && <i className={`icon-system-${icon} margin-right-xxs`} />}
				{children}
			</a>
		</li>
	);
};

Item.propTypes = {
	children: PropTypes.any,
	icon: PropTypes.string,
	href: PropTypes.string,
	target: PropTypes.string,
	className: PropTypes.string,
};

Item.defaultProps = {
	children: 'Lorem',
	target: '',
	className: '',
};

Breadcrumb.propTypes = {
	className: PropTypes.string,
	separator: PropTypes.oneOf(['arrow', 'slash', 'dash']),
	style: PropTypes.object,
	children: PropTypes.any,
};

Breadcrumb.defaultProps = {
	className: '',
	separator: 'slash',
	style: {},
	children: (
		<>
			<Item icon="copy-line">Lorem</Item>
			<Item>Ipsum</Item>
			<Item>Dolor</Item>
			<Item>Sit</Item>
			<Item>Amet</Item>
		</>
	),
};

Breadcrumb.Item = Item;

export { Breadcrumb };