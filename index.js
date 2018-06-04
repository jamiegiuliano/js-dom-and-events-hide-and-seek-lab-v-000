function getFirstSelector(selector) {
  return document.querySelector(selector);
};

function nestedTarget() {
  return document.querySelector('#nested .target');
};

function deepestChild() {
  const alldivs = document.querySelectorAll('#grand-node div');
  return alldivs[alldivs.length - 1]
};

function increaseRankBy(n) {
  const lis = document.querySelectorAll('ul.ranked-list li');
  for (let i = 0; i < lis.length; i++) {
    var nestedValue = parseInt(lis[i].innerHTML)
    lis[i].innerHTML = (nestedValue + n);
  }
};
