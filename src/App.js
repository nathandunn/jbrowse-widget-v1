import React from 'react';
// import {FeatureGlyph,SvgFeatureRendering}  from '@gmod/jbrowse-plugin-svg';
// import {FeatureGlyph,SvgFeatureRendering}  from '@gmod/jbrowse-plugin-svg';
// import {SvgFeatureRendering}  from '../../jbrowse-components/packages/svg';

import {Emoji} from 'mr-emoji'
import './App.css';
// import fs from 'fs';
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

import gff from '@gmod/gff'
import { TabixIndexedFile,VCF } from '@gmod/vcf'
import ExampleComponent from 'reacttestlib';

// const fs = require('fs')

function testGff(){

  const stringOfGFF3 = '###';
  console.log('parsing',stringOfGFF3);
  const gff3Obj = gff.parseStringSync(stringOfGFF3);
  console.log('parsed Gff3 obj',gff3Obj);
}


function testVcf() {
  // const vcf = new VCF({header:'asdfasdf'});
  // console.log('vcf',vcf)
  // const tbiIndexed = new TabixIndexedFile({ path: '/Users/nathandunn/repositories/jbrowse-widget-v1/volvox.test.vcf.gz' })
  // const headerText = await tbiIndexed.getHeader()
  // const tbiVCFParser = new VCF({ header: headerText })
  // const variants = []
  // await tbiIndexed.getLines('ctgA', 200, 300, line =>
  //   variants.push(tbiVCFParser.parseLine(line)),
  // )
  // console.log(variants)
}

function App() {

  testGff();
  testVcf();
  // testVcf().then( () => console.log('asdf'));
  // let stringOfGFF3 = fs.readFileSync('test.gff3').toString();
  // let stringOfGFF3 = fs.readFileSync('test.gff3').toString();
  // let arrayOfThings = gff.parseStringSync(stringOfGFF3);
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
