/* eslint-env node */
'use strict';

const path = require('path');
const Funnel = require('broccoli-funnel');
const MergeTrees = require('broccoli-merge-trees');

module.exports = {
  name: 'qunit-dom',

  included() {
    this._super.included.apply(this, arguments);
    this.import('vendor/qunit-dom.js', { type: 'test' });
    this.import('vendor/overwrite-qunit-dom-root-element.js', { type: 'test' });
  },

  treeForVendor(vendorTree) {
    let qunitPluginTree = new Funnel(path.join(this.project.root, 'dist'), {
      files: ['qunit-dom.js', 'qunit-dom.js.map'],
    });

    return new MergeTrees([vendorTree, qunitPluginTree]);
  },
};
