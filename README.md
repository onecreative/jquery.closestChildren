jquery-closestChildren
===================

An opposite of `closest()`: find the nearest child that matches a selector, and optionally return the first matching child on each descending branch.


What this plugin is for
-----------------------

Let's say you've got an HTML module like this:

```html
<div class="module">
  module
  <div class="module-title">title</div>
  <div class="module-foo">
    foo
    <div class="module-bar">bar</div>
  </div>
  <div class="module-children">
  </div>
</div>

```

These modules can nest into each other in a tree-like fashion:

```html
<div class="module" id="module1">
  module
  <div class="module-title">title</div>
  <div class="module-foo">
    foo
    <div class="module-bar" id="module1bar">bar</div>
  </div>
  <div class="module-children">
  
    <div class="module" id="module2">
      module
      <div class="module-title">title</div>
      <div class="module-foo">
        foo
        <div class="module-bar">bar</div>
      </div>
      <div class="module-children">
      
        <div class="module" id="module3">
          module
          <div class="module-title">title</div>
          <div class="module-foo">
            foo
            <div class="module-bar">bar</div>
          </div>
          <div class="module-children">
          
          </div>
        </div>
        
      </div>
    </div>
    
    <div class="module" id="module4">
      module
      <div class="module-title">title</div>
      <div class="module-foo">
        foo
        <div class="module-bar">bar</div>
      </div>
      <div class="module-children">
      
      </div>
    </div>

  </div>
</div>

```

Now, for any given module you would like to select an `.module-foo` element that belongs to that module. But you don't want to include `.module-foo`s of any child modules!

jQuery provides a `.closest()` method that selects the nearest parent that matches a criteria. If only there were a similar method that selects the nearest child...

Well, now there is! `$('#foo').closestChildren('.module-bar')` will select only one element: the `#module1bar` from the example above.


## Installation

Require `jquery.closestChildren` after jQuery:


```html
<script src="/jquery.js"></script>
<script src="/jquery.closestChildren.js"></script>
```


## Usage

```js
$('.some-element').closestChildren( selector [,all] )
```

Note that there's capital `C` in the middle of method name, while file and project names are all lowercase.

`selector` can be anything that the jQuery [`.filter()` method](http://api.jquery.com/filter/) uses.

`all` is a boolean. Put true to search for all the closest matches (for each branch). false, or ommitted will only find the single closest match.

`closestChildren` returns a jQuery collection of matched elements.

Please keep in mind the following features:

* It starts matching with the children of the given element (unlike `.closest()` which starts matching with the element itself).
* It traverses the tree of children one step at a time. It can return multpile elements if they are found on the same level of depth.
* Once at least one match is found, it returns the match(es) and stops traversing, saving performance.
* Optionally traverse each branch of the DOM tree as deep as it goes until you find the closest match on each branch.


## Performance
`closestChildren` is a hybrid of `closestChild` by [lolmaus](http://github.com/lolmaus/), and `closestDescendant` by [tlindig](https://github.com/tlindig). It borrows its speed from the former, and its depth from the latter.


## Credit

Created by [onecreative](https://github.com/onecreative).

## License

MIT License.
