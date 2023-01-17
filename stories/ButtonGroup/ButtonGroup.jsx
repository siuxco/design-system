import Link from 'next/link';

const ButtonGroup = ({ children }) => {
	return (
		<div
			// hover:border-neutral-6
			className={
				'cursor-pointer transition-fast background-white font-size-s border-radius-xs border-width-1 border-style-solid border-neutral-2 focus:border-primary-7 box-shadow-xs display-flex align-content-center'
			}
		>
			{children}
		</div>
	);
};

const InnerLink = (props) => {
	const { active, border, children } = props;
	return (
		<Link {...props}>
			<div
				className={`hover:background-opacity-neutral-2 text-align-center transition-fast padding-left-s padding-right-s padding-top-xs padding-bottom-xs ${
					active ? 'font-weight-500 color-primary-7' : 'color-neutral-6 hover:color-neutral-8'
				}
      ${
			border &&
			'border-width-1 border-style-solid border-neutral-2 focus:border-primary-7 border-top-none border-left-none border-bottom-none'
		}`}
			>
				{children}
			</div>
		</Link>
	);
};

const InnerButton = ({ children, active, border }) => {
	return (
		<div
			className={`hover:background-opacity-neutral-2 text-align-center transition-fast padding-left-s padding-right-s padding-top-xs padding-bottom-xs ${
				active ? 'font-weight-500 color-primary-7' : 'color-neutral-6 hover:color-neutral-8'
			}
      ${
			border &&
			'border-width-1 border-style-solid border-neutral-2 focus:border-primary-7 border-top-none border-left-none border-bottom-none'
		}
      `}
		>
			{children}
		</div>
	);
};

ButtonGroup.button = InnerButton;
ButtonGroup.link = InnerLink;

export { ButtonGroup };