import * as React from 'react';
import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import {usePageLeave} from '..';
import ShowDocs from './util/ShowDocs';

const Demo = () => {
  usePageLeave(action('onPageLeave'));

  return (
    <div>
      Try leaving the page and see logs in <code>Actions</code> tab.
    </div>
  );
};

storiesOf('Sensors|usePageLeave', module)
  .add('Docs', () => <ShowDocs md={require('../../docs/usePageLeave.md')} />)
  .add('Default', () => <Demo />);
