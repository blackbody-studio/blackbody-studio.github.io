---
title: 'DIGITAL HUMAN'
subtitle: 'Geometric detail at many scales'
date: 2018-06-30
description: This page is a experimental project template demonstrating all of the available features.
hero_image: 'https://dl.dropboxusercontent.com/s/r4nmuimv3uglqvw/hadi-karimi-niet-1.jpg'
type: 'Experimental'
---

This page is a demo that shows everything you can do inside experiment pages.

#### Text features

You can create lists:

* Simple bulleted lists
* Like this one
* Are cool

And:

1. Numbered lists
2. Like this other one
3. Are great too

The page also supports markdown tables:

Markdown | Less | Pretty
--- | --- | ---
*Still* | `renders` | **nicely**
1 | 2 | 3

You can throw in some horizontal rules too:

---

#### Image galleries

<div class="gallery" data-columns="3">
    <img src="/images/demo/demo-portrait.jpg">
    <img src="/images/demo/demo-landscape.jpg">
    <img src="https://dl.dropboxusercontent.com/s/rcw2vh89nj17l2j/2_post_crack.png">
    <img src="/images/demo/demo-landscape-2.jpg">
</div>

---

#### Code display

For technical explanations you can show c++ or python code with syntax highlighting.

```python
# look at this python function
def calculate_and_print_stats(list_of_numbers):
    sum = sum(list_of_numbers)
    mean = statistics.mean(list_of_numbers)
    median = statistics.median(list_of_numbers)
    mode = statistics.mode(list_of_numbers)

    print('-----------------Stats-----------------')
    print('SUM: {}'.format(sum)
    print('MEAN: {}'.format(mean)
    print('MEDIAN: {}'.format(median)
    print('MODE: {}'.format(mode)
```

```c
/* comment about this merge part of mergesort function */
void merge(int p, int q, int r) {
    int leftSize  = std::distance(p, q);
    int rightSize = std::distance(q, r);

    int L[leftSize];   // Technically not legal but most compilers support it.
    int R[rightSize];  // Normally use vectors here. But I am using the same
                       // technique as shown by the OP

    std::move(p, q, L);
    std::move(q, r, R);

    int left  = 0;
    int right = 0;
    int   d     = p;

    while(left < leftSize && right < rightSize)
    {
        (*d) = std::move((L[left] <= R[right])
                    ? L[left++]
                    : R[right++]);
        ++d;
    }
    // Note only one of these copies will actually do anything.
    std::move(L + left,  L + leftSize,  d);
    std::move(R + right, R + rightSize, d);
}
```