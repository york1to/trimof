# C++ Primer

[[toc]]

A deficient skyscraper engenders catastrophic consequences for the overall infrastructure.Consequently, the process of reacquainting oneself with the intricacies of C++ is an inevitable undertaking in the life of an algorithm engineer. Thus, it is advisable to desist from excessive discourse and instead focus on the practical implementation of the code.

The organization of the note diverges from that of the book, owing to the fact that a substantial portion of the knowledge I had previously acquired remains ingrained in my understanding.



---

I. Basic

## 2 Variables and Basic types

- [ ] Basic Variable types and their storage

- [ ] Type Conversions

  ![screenshot 2023-09-08 at 2.15.45 PM](https://raw.githubusercontent.com/yorkitokang/trimof_image/main/images/2023_09_08_225567d6d3cf48d41db01efab8794c0f.png)

  In truncate part, will conversions be time-consuming? Considering that a double was calculated by the powers of 2, how can you convert?

- [ ] When a type is unsigned, what is its range

- [ ] Discuss the relationship between literals and types![screenshot 2023-09-08 at 2.12.57 PM](https://raw.githubusercontent.com/yorkitokang/trimof_image/main/images/2023_09_08_507e6a18755b627c2443d78ec711921b.png)

- [ ] WTF is a wide character. Wide characters' literals are `L'a'`

![screenshot 2023-09-08 at 2.25.38 PM](https://raw.githubusercontent.com/yorkitokang/trimof_image/main/images/2023_09_08_476b522cb8c4caecc2450837b76c9aa2.png)

This Warning is quite touching to me 'cause no one had ever noticed me of before.

## 3 Strings Vectors and Arrays

Strings and Vectors are widely used. String can be initialized in several ways.

### 3.1 Namespace

### 3.2 String

 You can treat strings like basic types or objects(be careful not to use {})

It's pretty tricky that concatenating string using `""` , remembering left hand assign rule.

Strings has `size()` and `empty()`, not `isempty()`. ehhh..

![screenshot 2023-09-10 at 9.05.17 PM](https://raw.githubusercontent.com/yorkitokang/trimof_image/main/images/2023_09_10_84bc8c9639e8691aba7cf5d910fbc634.png)

The reason is listed below:

![screenshot 2023-09-10 at 9.09.12 PM](https://raw.githubusercontent.com/yorkitokang/trimof_image/main/images/2023_09_10_0209e0ac288ae8c5c0f005977954dc2c.png)

Literals matter.

`decltype(type)`  good stuff if you don't know witch type.

To iterate char in string, copy/ change is different.

![screenshot 2023-09-10 at 9.23.13 PM](https://raw.githubusercontent.com/yorkitokang/trimof_image/main/images/2023_09_10_9d7a227f0640dfcbf99736ed485869ab.png)

![screenshot 2023-09-10 at 9.23.24 PM](https://raw.githubusercontent.com/yorkitokang/trimof_image/main/images/2023_09_10_1b0ea093395787209dcfaa25e92ecf34.png)

String table:

![screenshot 2023-09-10 at 9.28.42 PM](https://raw.githubusercontent.com/yorkitokang/trimof_image/main/images/2023_09_10_a7cd524b6ab0a666eef061f603af55e0.png)

### 3.3 Vectors

**I LOVE VECTORS**

![screenshot 2023-09-10 at 9.41.11 PM](https://raw.githubusercontent.com/yorkitokang/trimof_image/main/images/2023_09_10_f5a75a240019e40f04d6fba4ef9ecd37.png)

`push_back()` makes a copy of the element.

![screenshot 2023-09-10 at 10.00.44 PM](https://raw.githubusercontent.com/yorkitokang/trimof_image/main/images/2023_09_10_0f5ee07c188fa6c7b1d0d41fdfc23c37.png)

This reminds me of Index Out of Bound in Java.

### 3.4 Iterator

Iterators are representatives of generic thinkings.

- `auto`
- `++`
- `*`

Any Pointer(maybe ref) overloading * and ++ would be a iterator.

![screenshot 2023-09-10 at 10.39.04 PM](https://raw.githubusercontent.com/yorkitokang/trimof_image/main/images/2023_09_10_eb3587f527c2c03d0a78cf8f03a46903.png)

![screenshot 2023-09-10 at 10.33.03 PM](https://raw.githubusercontent.com/yorkitokang/trimof_image/main/images/2023_09_10_b73cd2d8398731d0791ae532758ae7d0.png)

### 3.5 Arrays

The diff between arrays and vectors is that arrays have fixed size.

Thus, intuitively, arrays sometimes performs better than vectors.

### 3.6 Multi-D arrays

I've never seen of any code using multi-d arrays in c++.

It's because it's insufficient.

Like this explanation very much.

![](https://raw.githubusercontent.com/yorkitokang/trimof_image/main/images/2023_09_10_a2d1e36fe080ad631cf6ddf76ccbebea.png)