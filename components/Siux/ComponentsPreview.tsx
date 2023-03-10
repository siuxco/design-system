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
    { category: 'feedback', name: 'alert', image: alert },
    { category: 'feedback', name: 'empty-state', image: emptystate },
    { category: 'feedback', name: 'loader', image: loader },
    { category: 'feedback', name: 'message', image: message },
    { category: 'feedback', name: 'toast', image: toast },
    { category: 'data-display', name: 'avatar', image: avatar },
    { category: 'data-display', name: 'badge', image: badge },
    { category: 'data-display', name: 'kbd', image: kbd },
    { category: 'data-display', name: 'tooltip', image: tooltip },
    { category: 'navigation', name: 'breadcrumb', image: breadcrumb },
    { category: 'navigation', name: 'dropdown', image: dropdown },
    { category: 'navigation', name: 'navigation', image: navigation },
    { category: 'general', name: 'button', image: button },
    { category: 'general', name: 'icon', image: icon },
    { category: 'general', name: 'modal', image: modal },
    { category: 'general', name: 'text', image: text },
    { category: 'cards', name: 'card', image: card },
    { category: 'forms', name: 'checkbox', image: checkbox },
    { category: 'forms', name: 'input', image: input },
    { category: 'forms', name: 'radio', image: radio },
    { category: 'forms', name: 'select', image: select },
    { category: 'forms', name: 'switch', image: switchx },
    { category: 'forms', name: 'textarea', image: textarea },
    { category: 'forms', name: 'upload', image: upload },
    { category: 'utilities', name: 'shadow', image: shadow },
    { category: 'editor', name: 'text-editor', image: texteditor },
  ];
  return (
    <div className={classNames('display-flex flex-wrap', className)}>
      {ComponentsList.map((component, index) => {
        return (
          <a
            key={index}
            href={`/?path=/story/${component.category}-${component.name}`}
            className="display-flex width-full flex-grow-1 border-style-solid border-neutral-2 border-width-1 border-radius-s overflow-hidden cursor-pointer box-shadow-s hover:box-shadow-l hover:border-primary-7 transition-all margin-m"
            style={{ flexBasis: '200px' }}>
            <div>
              <div className="margin-left-s margin-top-xs font-size-s color-neutral-7 font-weight-600 text-transform-capitalize">
                {component.name.replace('-', ' ')}
              </div>
              <img src={component.image} alt={component.name} className="width-full" />
            </div>
          </a>
        );
      })}
    </div>
  );
};
