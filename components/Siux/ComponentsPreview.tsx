import React, { FC } from 'react';
import { classNames } from '../../utils/utils';

import alert from '../assets/component-preview/alert.png';
import emptystate from '../assets/component-preview/empty-state.png';
import loader from '../assets/component-preview/loader.png';
import message from '../assets/component-preview/message.png';
import toast from '../assets/component-preview/toast.png';
import avatar from '../assets/component-preview/avatar.png';
import badge from '../assets/component-preview/badge.png';
import kbd from '../assets/component-preview/kbd.png';
import tooltip from '../assets/component-preview/tooltip.png';
import breadcrumb from '../assets/component-preview/breadcrumb.png';
import dropdown from '../assets/component-preview/dropdown.png';
import navigation from '../assets/component-preview/navigation.png';
import button from '../assets/component-preview/button.png';
import icon from '../assets/component-preview/icon.png';
import modal from '../assets/component-preview/modal.png';
import text from '../assets/component-preview/text.png';
import card from '../assets/component-preview/card.png';
import checkbox from '../assets/component-preview/checkbox.png';
import input from '../assets/component-preview/input.png';
import radio from '../assets/component-preview/radio.png';
import select from '../assets/component-preview/select.png';
import switchx from '../assets/component-preview/switch.png';
import textarea from '../assets/component-preview/textarea.png';
import upload from '../assets/component-preview/upload.png';
import shadow from '../assets/component-preview/shadow.png';
import texteditor from '../assets/component-preview/text-editor.png';

export interface IComponentsPreviewProperties {
  className?: string;
}

export const ComponentsPreview: FC<IComponentsPreviewProperties> = ({ className }) => {
  const ComponentsList = [
    { category: 'components', name: 'alert', imageUrl: '/images/component-preview/alert.png', image: alert },
    {
      category: 'components',
      name: 'empty-state',
      imageUrl: '/images/component-preview/empty-state.png',
      image: emptystate,
    },
    { category: 'components', name: 'loader', imageUrl: '/images/component-preview/loader.png', image: loader },
    { category: 'components', name: 'message', imageUrl: '/images/component-preview/message.png', image: message },
    { category: 'components', name: 'toast', imageUrl: '/images/component-preview/toast.png', image: toast },
    { category: 'components', name: 'avatar', imageUrl: '/images/component-preview/avatar.png', image: avatar },
    { category: 'components', name: 'badge', imageUrl: '/images/component-preview/badge.png', image: badge },
    { category: 'components', name: 'kbd', imageUrl: '/images/component-preview/kbd.png', image: kbd },
    { category: 'components', name: 'tooltip', imageUrl: '/images/component-preview/tooltip.png', image: tooltip },
    {
      category: 'components',
      name: 'breadcrumb',
      imageUrl: '/images/component-preview/breadcrumb.png',
      image: breadcrumb,
    },
    { category: 'components', name: 'dropdown', imageUrl: '/images/component-preview/dropdown.png', image: dropdown },
    {
      category: 'components',
      name: 'navigation',
      imageUrl: '/images/component-preview/navigation.png',
      image: navigation,
    },
    { category: 'components', name: 'button', imageUrl: '/images/component-preview/button.png', image: button },
    { category: 'components', name: 'icon', imageUrl: '/images/component-preview/icon.png', image: icon },
    { category: 'components', name: 'modal', imageUrl: '/images/component-preview/modal.png', image: modal },
    { category: 'components', name: 'text', imageUrl: '/images/component-preview/text.png', image: text },
    { category: 'components', name: 'card', imageUrl: '/images/component-preview/card.png', image: card },
    { category: 'components', name: 'checkbox', imageUrl: '/images/component-preview/checkbox.png', image: checkbox },
    { category: 'components', name: 'input', imageUrl: '/images/component-preview/input.png', image: input },
    { category: 'components', name: 'radio', imageUrl: '/images/component-preview/radio.png', image: radio },
    { category: 'components', name: 'select', imageUrl: '/images/component-preview/select.png', image: select },
    { category: 'components', name: 'switch', imageUrl: '/images/component-preview/switch.png', image: switchx },
    { category: 'components', name: 'textarea', imageUrl: '/images/component-preview/textarea.png', image: textarea },
    { category: 'components', name: 'upload', imageUrl: '/images/component-preview/upload.png', image: upload },
    { category: 'utilities', name: 'shadow', imageUrl: '/images/component-preview/shadow.png', image: shadow },
  ];
  return (
    <div
      className={classNames('display-flex flex-wrap', className)}
      style={{ marginLeft: '-16px', marginRight: '-16px' }}
    >
      {ComponentsList.map((component, index) => {
        return (
          <a
            key={index}
            href={`/?path=/story/${component.category}-${component.name}`}
            className="display-flex width-full flex-grow-1 border-style-solid border-neutral-2 border-width-1 border-radius-s overflow-hidden cursor-pointer box-shadow-s hover:box-shadow-l hover:border-primary-7 transition-all margin-m"
            style={{ flexBasis: '200px' }}
          >
            <div>
              <div className="margin-left-s margin-top-xs font-size-s color-neutral-10 font-weight-500 text-transform-capitalize">
                {component.name.replace('-', ' ')}
              </div>
              {/* <iframe
                title={component.name}
                className="width-full"
                src={`/iframe.html?args=&id=${component.category}-${component.name}&viewMode=story`}
              /> */}
              <img src={component.imageUrl} alt={component.name} className="width-full" />
            </div>
          </a>
        );
      })}
    </div>
  );
};
