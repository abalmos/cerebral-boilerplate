import copy from 'cerebral-addons/copy';

export default [
  copy('input:/color', 'state://./color'),
  function({services}) {
    services.test.test();
  }
];
