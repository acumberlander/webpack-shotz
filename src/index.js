import $ from 'jquery';
import 'bootstrap';

import './index.scss';

console.log('hi');
$('#click-button').on('click', () => {
  $('#important-text').append('<p>Hello World!</p>');
});
