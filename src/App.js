import React from 'react';
// import {FeatureGlyph,SvgFeatureRendering}  from '@gmod/jbrowse-plugin-svg';
// import {FeatureGlyph,SvgFeatureRendering}  from '@gmod/jbrowse-plugin-svg';
// import {SvgFeatureRendering}  from '../../jbrowse-components/packages/svg';

import {Emoji} from 'mr-emoji'
import './App.css';
// import Rendering from '@gmod/jbrowse-plugin-svg/src/SvgFeatureRenderer/components/SvgFeatureRendering'
// import FeatureGlyph from '@gmod/jbrowse-plugin-svg/src/SvgFeatureRenderer/components/FeatureGlyph';
// import Rendering  from '@gmod/jbrowse-plugin-svg/src/SvgFeatureRenderer/components/SvgFeatureRendering';
// import {FeatureGlyph,SvgFeatureRendering}  from '@gmod/jbrowse-plugin-svg/src/SvgFeatureRenderer/components/SvgFeatureRendering';
// import {NCListAdapter}  from '@gmod/jbrowse-plugin-jbrowse1/src/index';
// import NCListAdapter  from '@gmod/jbrowse-core';
// import {NCListAdapter}  from '@gmod/jbrowse-core/mst-types';
// import {MstTypes}  from '@gmod/jbrowse-core/mst-types';
// import {NCListAdapter}  from '@gmod/jbrowse-plugin-jbrowse1';
// import {NCListAdapter}  from '@gmod/jbrowse-plugin-jbrowse1/src/NCListAdapter';
// const SvgFeatureRendering = require('@gmod/jbrowse-plugin-svg/src/SvgFeatureRenderer/components/SvgFeatureRendering');
// const {FeatureGlyp,SvgFeatureRendering} = require('@gmod/jbrowse-plugin-svg');
import ExampleComponent from 'reacttestlib';

function App() {
  return (
    <div className="App">
      Test
      {/*<header className="App-header">*/}
        JBrowse Widget Example 1
        <Emoji emoji=':santa::skin-tone-3:' size={16} />
        <p>
          Based on https://github.com/GMOD/jbrowse-components/tree/master/packages/protein-widget
        </p>
      {/*</header>*/}
      <ExampleComponent text='Modern React component module' />
    </div>
  );
}

export default App;
