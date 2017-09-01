// - Define a function `getFirstSelector(selector)`, which accepts a selector
// and returns the first element that matches.
// - Define a function `nestedTarget()` that pulls a `.target` out of `#nested`
// (`#` is used for IDs in selectors)
// - Define a function `increaseRankBy(n)` that increases the ranks in all of
// the `.ranked-list`s by `n`. (You might need to make use of [`parseInt()`])
// - Define a function `deepestChild()` that pulls out the most deeply nested child
// from `div#grand-node`. (Remember, you can iterate over elements and call
// `querySelector()` and `querySelectorAll()` on them. This is challenging to
// implement correctly, but not beyond your ability!)

function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(){
  return document.querySelector('#nested .target')
}

function increaseRankBy(n){
  const rankedLists = document.querySelectorAll('.ranked-list')

  for (let i = 0, l = rankedLists.length; i < l; i++) {
    let children = rankedLists[i].children

    for (let j = 0, k = children.length; j < k; j++) {
      children[j].innerHTML = parseInt(children[j].innerHTML) + n
    }
  }
}

function deepestChild() {
  let n = document.getElementById('grand-node')
  let n2 = n.children[0]

  while(n2){
    n = n2
    n2 = n.children[0]
  }
  return n
}
