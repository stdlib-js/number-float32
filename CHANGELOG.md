# CHANGELOG

> Package changelog.

<section class="release" id="v0.3.0">

## 0.3.0 (2026-01-30)

<section class="features">

### Features

-   [`9f03000`](https://github.com/stdlib-js/stdlib/commit/9f03000d699c14f795c53f2eac17567a7ca787b5) - add `number/float32/base/to-float16` [(#8938)](https://github.com/stdlib-js/stdlib/pull/8938)
-   [`37b948e`](https://github.com/stdlib-js/stdlib/commit/37b948e963e9b60c6e13cd226a4b12d2582c7d94) - update `number/float32/base/assert` TypeScript declarations [(#9202)](https://github.com/stdlib-js/stdlib/pull/9202)
-   [`de4cd3d`](https://github.com/stdlib-js/stdlib/commit/de4cd3d6ece4bd255717fafd72819311e92e2ea9) - add `isAlmostSameValue` to namespace
-   [`05a56f7`](https://github.com/stdlib-js/stdlib/commit/05a56f75c6ef3e7621d866b585668d520cc5ed96) - add `number/float32/base/assert/is-almost-same-value`
-   [`51823d9`](https://github.com/stdlib-js/stdlib/commit/51823d9ae78278700f6774fb428d189c8b6e891a) - rename aliases
-   [`563dfe9`](https://github.com/stdlib-js/stdlib/commit/563dfe9fab0ff36dbb4ddc445664f392de52a5d7) - rename aliases
-   [`8cb554a`](https://github.com/stdlib-js/stdlib/commit/8cb554a96c2f9186a1e11caa5d7799efaaa5ea67) - update `number/float32/base` TypeScript declarations
-   [`ce7e772`](https://github.com/stdlib-js/stdlib/commit/ce7e772e28c75673dbc846d844febef8d4426b95) - update `number/float32/base/assert` TypeScript declarations
-   [`0cf2dd6`](https://github.com/stdlib-js/stdlib/commit/0cf2dd65ae1a209d306184a82c4226742bfa6103) - add `isAlmostEqual` exports to namespaces
-   [`dd27f86`](https://github.com/stdlib-js/stdlib/commit/dd27f863be4a7028f73ff7b54e859eb2e0e80bc2) - add missing `number/float32/base` exports to namespace
-   [`1f65da4`](https://github.com/stdlib-js/stdlib/commit/1f65da411b8bd969551a9d9f510e542796dd934a) - add `number/float32/base/assert/is-almost-equal`
-   [`cad154a`](https://github.com/stdlib-js/stdlib/commit/cad154a928c9bf91f513828f49983b487dab44a6) - add `number/float32/base/assert/is-almost-equal-value` [(#7517)](https://github.com/stdlib-js/stdlib/pull/7517)
-   [`649c05a`](https://github.com/stdlib-js/stdlib/commit/649c05af0ca6a85f540fe4ebe9847a667d976c57) - add `number/float32/base/ulp-difference` [(#7451)](https://github.com/stdlib-js/stdlib/pull/7451)
-   [`0572aac`](https://github.com/stdlib-js/stdlib/commit/0572aac77e209513ff935c75f33801451e4a5e33) - add `number/float32/base/identity`
-   [`e8c4318`](https://github.com/stdlib-js/stdlib/commit/e8c4318e592586ca53fd53f5ddebd9be16ac9208) - add `number/float32/base/sub`
-   [`7ae2f22`](https://github.com/stdlib-js/stdlib/commit/7ae2f22a800770e00e3de3d54649399d84f99c4d) - add `number/float32/base/mul`
-   [`5928127`](https://github.com/stdlib-js/stdlib/commit/5928127d8f24750ec68278e6c5cd5adf1c7e95c3) - add `number/float32/base/div`
-   [`6f5ff44`](https://github.com/stdlib-js/stdlib/commit/6f5ff446d16255dec7a70319ed2f71b2f546e72c) - add `number/float32/base/add`
-   [`9aaeaaa`](https://github.com/stdlib-js/stdlib/commit/9aaeaaadf0c59b4d42e2ba7e1a6ea42a1ae2b09d) - add C implementation for `number/float32/base/signbit` [(#3399)](https://github.com/stdlib-js/stdlib/pull/3399)

</section>

<!-- /.features -->

<section class="breaking-changes">

### BREAKING CHANGES

-   [`51823d9`](https://github.com/stdlib-js/stdlib/commit/51823d9ae78278700f6774fb428d189c8b6e891a): rename aliases for `isSameValuef` and `isSameValueZerof`

    -   This commit renames the aliases by dropping the `f` suffix. This
        suffix was primarily used to distinguish symbols co-existing in the
        same namespace as double-precision counterparts. Here, however, that
        is not applicable as these symbols are co-localized with only other
        single-precision utilities. Hence, to minimize naming variations
        between namespaces, the symbols have been renamed. To migrate,
        users should simply drop the `f` suffix.

-   [`563dfe9`](https://github.com/stdlib-js/stdlib/commit/563dfe9fab0ff36dbb4ddc445664f392de52a5d7): rename aliases for `isSameValuef` and `isSameValueZerof`

    -   This commit renames the aliases by dropping the `f` suffix. This
        suffix was primarily used to distinguish symbols co-existing in the
        same namespace as double-precision counterparts. Here, however, that
        is not applicable as these symbols are co-localized with only other
        single-precision utilities. Hence, to minimize naming variations
        between namespaces, the symbols have been renamed. To migrate,
        users should simply drop the `f` suffix.

</section>

<!-- /.breaking-changes -->

<section class="issues">

### Closed Issues

A total of 7 issues were closed in this release:

[#6031](https://github.com/stdlib-js/stdlib/issues/6031), [#6356](https://github.com/stdlib-js/stdlib/issues/6356), [#6616](https://github.com/stdlib-js/stdlib/issues/6616), [#6703](https://github.com/stdlib-js/stdlib/issues/6703), [#7003](https://github.com/stdlib-js/stdlib/issues/7003), [#8027](https://github.com/stdlib-js/stdlib/issues/8027), [#8136](https://github.com/stdlib-js/stdlib/issues/8136)

</section>

<!-- /.issues -->

<section class="commits">

### Commits

<details>

-   [`f693285`](https://github.com/stdlib-js/stdlib/commit/f69328578f728111a8993e9fae78c7aef0a7143f) - **bench:** refactor to use string interpolation in `number/float32/base/assert` [(#9910)](https://github.com/stdlib-js/stdlib/pull/9910) _(by Lokesh Ranjan)_
-   [`765abdf`](https://github.com/stdlib-js/stdlib/commit/765abdffa2d20193f4fe18f7add2061d7700ec1f) - **bench:** refactor to use string interpolation in `number/float32/base` [(#9909)](https://github.com/stdlib-js/stdlib/pull/9909) _(by Lokesh Ranjan)_
-   [`755d5cb`](https://github.com/stdlib-js/stdlib/commit/755d5cb22e6b18aafee24426257953f33cc1f0ec) - **bench:** refactor to use string interpolation in `number/float32/base` [(#9908)](https://github.com/stdlib-js/stdlib/pull/9908) _(by Lokesh Ranjan)_
-   [`56a8646`](https://github.com/stdlib-js/stdlib/commit/56a864622858956ca75eb8a2af74e81b827115e7) - **bench:** refactor to use string interpolation in `number/float32/base` [(#9907)](https://github.com/stdlib-js/stdlib/pull/9907) _(by Lokesh Ranjan)_
-   [`ff11bf4`](https://github.com/stdlib-js/stdlib/commit/ff11bf419afd29bd798e46fb6705b0e913bb80bb) - **chore:** add structured package data for `number/float32/base/div` [(#9547)](https://github.com/stdlib-js/stdlib/pull/9547) _(by Neeraj Pathak)_
-   [`6ce0275`](https://github.com/stdlib-js/stdlib/commit/6ce0275d3eec598ce3ecb8da74a1c82f0de3a482) - **docs:** remove incorrect hyphens from JSDoc `returns` annotations _(by Philipp Burckhardt)_
-   [`825738a`](https://github.com/stdlib-js/stdlib/commit/825738ab917726d10fe3082569387861cee964cc) - **bench:** use correct variable name in benchmark for `number/float32/base/signbit` [(#9378)](https://github.com/stdlib-js/stdlib/pull/9378) _(by Samarth Kolarkar)_
-   [`22e2828`](https://github.com/stdlib-js/stdlib/commit/22e2828e91516f984f5d066c35884c63d3a76f8b) - **docs:** update description [(#9291)](https://github.com/stdlib-js/stdlib/pull/9291) _(by stdlib-bot)_
-   [`9f03000`](https://github.com/stdlib-js/stdlib/commit/9f03000d699c14f795c53f2eac17567a7ca787b5) - **feat:** add `number/float32/base/to-float16` [(#8938)](https://github.com/stdlib-js/stdlib/pull/8938) _(by Gururaj Gurram, Athan Reines, stdlib-bot)_
-   [`d61ac9c`](https://github.com/stdlib-js/stdlib/commit/d61ac9c7ba00677bfde2c2fbc039db20ef9b2ce2) - **docs:** fix README sections _(by Athan Reines)_
-   [`e2f119d`](https://github.com/stdlib-js/stdlib/commit/e2f119d2898fef45c8bc7a670b2409871c6d4b53) - **docs:** fix description _(by Athan Reines)_
-   [`177c77b`](https://github.com/stdlib-js/stdlib/commit/177c77bec9929e54e35c01be44799de32045fb68) - **docs:** update description [(#9238)](https://github.com/stdlib-js/stdlib/pull/9238) _(by stdlib-bot)_
-   [`d6f998c`](https://github.com/stdlib-js/stdlib/commit/d6f998cc1d7b73f1a0d0634611614a668583967e) - **docs:** update TypeScript comments to use single-precision in `number/float32/base` namespace _(by Philipp Burckhardt)_
-   [`37b948e`](https://github.com/stdlib-js/stdlib/commit/37b948e963e9b60c6e13cd226a4b12d2582c7d94) - **feat:** update `number/float32/base/assert` TypeScript declarations [(#9202)](https://github.com/stdlib-js/stdlib/pull/9202) _(by stdlib-bot)_
-   [`de9dec4`](https://github.com/stdlib-js/stdlib/commit/de9dec49411a9f71d800970e9324e87dca52098b) - **docs:** update namespace table of contents [(#9205)](https://github.com/stdlib-js/stdlib/pull/9205) _(by stdlib-bot)_
-   [`de4cd3d`](https://github.com/stdlib-js/stdlib/commit/de4cd3d6ece4bd255717fafd72819311e92e2ea9) - **feat:** add `isAlmostSameValue` to namespace _(by Athan Reines)_
-   [`05a56f7`](https://github.com/stdlib-js/stdlib/commit/05a56f75c6ef3e7621d866b585668d520cc5ed96) - **feat:** add `number/float32/base/assert/is-almost-same-value` _(by Athan Reines)_
-   [`94826d4`](https://github.com/stdlib-js/stdlib/commit/94826d4510d7a4131dcc4c0c7b515e909f2237ce) - **chore:** rename variable _(by Athan Reines)_
-   [`0f3ab3b`](https://github.com/stdlib-js/stdlib/commit/0f3ab3be38c467ac34206d1aad973e7cb56f84af) - **docs:** update copy _(by Athan Reines)_
-   [`51823d9`](https://github.com/stdlib-js/stdlib/commit/51823d9ae78278700f6774fb428d189c8b6e891a) - **feat:** rename aliases _(by Athan Reines)_
-   [`0f795ff`](https://github.com/stdlib-js/stdlib/commit/0f795ffaf0b452bf479b11a061f6142cc782d97e) - **chore:** rename variable _(by Athan Reines)_
-   [`3c46f07`](https://github.com/stdlib-js/stdlib/commit/3c46f07d2c590556429155a4265bd4be82a47e4d) - **chore:** rename variable _(by Athan Reines)_
-   [`563dfe9`](https://github.com/stdlib-js/stdlib/commit/563dfe9fab0ff36dbb4ddc445664f392de52a5d7) - **feat:** rename aliases _(by Athan Reines)_
-   [`7db5b32`](https://github.com/stdlib-js/stdlib/commit/7db5b32afe976e2d3c216a45e0927c88e668d340) - **chore:** add `alias_prefix` to parent namespaces [(#8540)](https://github.com/stdlib-js/stdlib/pull/8540) _(by Gunj Joshi)_
-   [`5f5bb2d`](https://github.com/stdlib-js/stdlib/commit/5f5bb2d4277a24000b57fb07bc28d821500cd7e8) - **docs:** update namespace table of contents [(#8425)](https://github.com/stdlib-js/stdlib/pull/8425) _(by stdlib-bot, Athan Reines)_
-   [`db17d2d`](https://github.com/stdlib-js/stdlib/commit/db17d2df2df67b618c41799249b660c4f9933d1d) - **chore:** fix C lint errors [(#8137)](https://github.com/stdlib-js/stdlib/pull/8137) _(by Geo Daoyu, Athan Reines)_
-   [`8cb554a`](https://github.com/stdlib-js/stdlib/commit/8cb554a96c2f9186a1e11caa5d7799efaaa5ea67) - **feat:** update `number/float32/base` TypeScript declarations _(by Philipp Burckhardt)_
-   [`ce7e772`](https://github.com/stdlib-js/stdlib/commit/ce7e772e28c75673dbc846d844febef8d4426b95) - **feat:** update `number/float32/base/assert` TypeScript declarations _(by Philipp Burckhardt)_
-   [`63ca7e4`](https://github.com/stdlib-js/stdlib/commit/63ca7e473044990d355b5e7e1e991b66be7ac411) - **style:** add empty lines _(by Athan Reines)_
-   [`22abc2e`](https://github.com/stdlib-js/stdlib/commit/22abc2e5ddc56329be7611dbc69682522e797eca) - **chore:** address commit comments [(#8072)](https://github.com/stdlib-js/stdlib/pull/8072) _(by Vara Rahul Rajana, Athan Reines)_
-   [`8b0b780`](https://github.com/stdlib-js/stdlib/commit/8b0b78084a2ff5d7a76ba3c5945b13d7f0906f4f) - **docs:** fix TypeScript declaration linting errors _(by Philipp Burckhardt)_
-   [`0cf2dd6`](https://github.com/stdlib-js/stdlib/commit/0cf2dd65ae1a209d306184a82c4226742bfa6103) - **feat:** add `isAlmostEqual` exports to namespaces _(by Philipp Burckhardt)_
-   [`dd27f86`](https://github.com/stdlib-js/stdlib/commit/dd27f863be4a7028f73ff7b54e859eb2e0e80bc2) - **feat:** add missing `number/float32/base` exports to namespace _(by Philipp Burckhardt)_
-   [`21ec206`](https://github.com/stdlib-js/stdlib/commit/21ec2060d7496322ce32d4f984230d0c131974cc) - **docs:** clean-up example code _(by Philipp Burckhardt)_
-   [`7add020`](https://github.com/stdlib-js/stdlib/commit/7add0201c13e56a0381926ccfd4073c84eaf2ed4) - **test:** use standardized assertion messages and fix lint errors _(by Philipp Burckhardt)_
-   [`fc438e0`](https://github.com/stdlib-js/stdlib/commit/fc438e0edbad0689d6923d6f3edb959b96597662) - **test:** use standardized assertion messages and fix lint errors _(by Philipp Burckhardt)_
-   [`11581aa`](https://github.com/stdlib-js/stdlib/commit/11581aaca8c3cb824cbb92c0c0f80e76890bdb20) - **test:** use standardized assertion messages and fix lint errors _(by Philipp Burckhardt)_
-   [`7483bef`](https://github.com/stdlib-js/stdlib/commit/7483bef13b1d3241347266d25a02957269419825) - **test:** use .strictEqual() instead of .equal() _(by Philipp Burckhardt)_
-   [`6eee151`](https://github.com/stdlib-js/stdlib/commit/6eee15199727d04e3757e66f38384e97b8a333da) - **style:** fix indentation in JSON files _(by Philipp Burckhardt)_
-   [`db50901`](https://github.com/stdlib-js/stdlib/commit/db509018b6c48e7e483029ae9b4464d2f17ca77d) - **remove:** remove `number/float32/base/assert/is-almost-equal-value` _(by Karan Anand)_
-   [`1f65da4`](https://github.com/stdlib-js/stdlib/commit/1f65da411b8bd969551a9d9f510e542796dd934a) - **feat:** add `number/float32/base/assert/is-almost-equal` _(by Karan Anand)_
-   [`260a8ca`](https://github.com/stdlib-js/stdlib/commit/260a8caa90718eeb4dbbe5c6b0c2b3708085de86) - **docs:** fix examples _(by Karan Anand)_
-   [`8ea46b6`](https://github.com/stdlib-js/stdlib/commit/8ea46b662dc6e27231d250d101e33a3cf770cd77) - **test:** update descriptions to match language used in JS tests _(by Philipp Burckhardt)_
-   [`cad154a`](https://github.com/stdlib-js/stdlib/commit/cad154a928c9bf91f513828f49983b487dab44a6) - **feat:** add `number/float32/base/assert/is-almost-equal-value` [(#7517)](https://github.com/stdlib-js/stdlib/pull/7517) _(by Karan Anand, Athan Reines)_
-   [`649c05a`](https://github.com/stdlib-js/stdlib/commit/649c05af0ca6a85f540fe4ebe9847a667d976c57) - **feat:** add `number/float32/base/ulp-difference` [(#7451)](https://github.com/stdlib-js/stdlib/pull/7451) _(by Karan Anand, Athan Reines)_
-   [`647aefa`](https://github.com/stdlib-js/stdlib/commit/647aefae9b5cdc1cb4502481b99c6911ef4406bf) - **chore:** fix C lint errors [(#7460)](https://github.com/stdlib-js/stdlib/pull/7460) _(by Geo Daoyu)_
-   [`5896836`](https://github.com/stdlib-js/stdlib/commit/5896836635aa28aba7c97b3f21d32735d867c43b) - **build:** add package meta data _(by Athan Reines)_
-   [`6c6fd79`](https://github.com/stdlib-js/stdlib/commit/6c6fd79627e1c79e5f98e53a05456057986c911a) - **build:** add package meta data _(by Athan Reines)_
-   [`6803252`](https://github.com/stdlib-js/stdlib/commit/68032524e51f5f6b82e06e13253836ec5a539c40) - **build:** add package meta data _(by Athan Reines)_
-   [`7513cfe`](https://github.com/stdlib-js/stdlib/commit/7513cfee4cc2404b62615c9c9be7c882396e0b39) - **chore:** fix JavaScript lint errors [(#7047)](https://github.com/stdlib-js/stdlib/pull/7047) _(by Uday Kakade, Athan Reines)_
-   [`66f68cf`](https://github.com/stdlib-js/stdlib/commit/66f68cf6493c41ccfe4107e76d04a6bc43769b63) - **chore:** fix EditorConfig lint errors [(#6871)](https://github.com/stdlib-js/stdlib/pull/6871) _(by Geo Daoyu)_
-   [`f3cfeab`](https://github.com/stdlib-js/stdlib/commit/f3cfeaba512914fe482fc3ec96f4293e104a6baf) - **chore:** fix EditorConfig lint errors [(#6861)](https://github.com/stdlib-js/stdlib/pull/6861) _(by Geo Daoyu)_
-   [`57953ed`](https://github.com/stdlib-js/stdlib/commit/57953ed6de1a9a8a992aa0aa884ac23259073c55) - **chore:** fix JavaScript lint errors (issue #6616) [(#6626)](https://github.com/stdlib-js/stdlib/pull/6626) _(by Guru Prasad Sharma, Athan Reines)_
-   [`1820a95`](https://github.com/stdlib-js/stdlib/commit/1820a95fb1d37471413f822d2ce004c1b8752b39) - **docs:** update related packages sections [(#6503)](https://github.com/stdlib-js/stdlib/pull/6503) _(by stdlib-bot)_
-   [`a1e230f`](https://github.com/stdlib-js/stdlib/commit/a1e230f29297caa89880e9c194c615a0400fb7bc) - **chore:** clean up cppcheck-suppress comments _(by Karan Anand)_
-   [`0572aac`](https://github.com/stdlib-js/stdlib/commit/0572aac77e209513ff935c75f33801451e4a5e33) - **feat:** add `number/float32/base/identity` _(by Gururaj Gurram)_
-   [`635e38f`](https://github.com/stdlib-js/stdlib/commit/635e38f2c94c01bf24593efce94d1b71811cad4f) - **refactor:** rename file in `number/float32/base/add` [(#5498)](https://github.com/stdlib-js/stdlib/pull/5498) _(by Gururaj Gurram)_
-   [`a4d7692`](https://github.com/stdlib-js/stdlib/commit/a4d7692d31b5f0d46415e9df7b1f6b3a3936086c) - **refactor:** rename file in `number/float32/base/mul` [(#5463)](https://github.com/stdlib-js/stdlib/pull/5463) _(by Gururaj Gurram)_
-   [`5081120`](https://github.com/stdlib-js/stdlib/commit/50811206a32132606851c5b5505c6a1e9b145319) - **refactor:** update paths _(by Gururaj Gurram)_
-   [`e8c4318`](https://github.com/stdlib-js/stdlib/commit/e8c4318e592586ca53fd53f5ddebd9be16ac9208) - **feat:** add `number/float32/base/sub` _(by Gururaj Gurram)_
-   [`1eac550`](https://github.com/stdlib-js/stdlib/commit/1eac550d7e113582faa355fe13dfbb24e02d9238) - **refactor:** update paths _(by Gururaj Gurram)_
-   [`7ae2f22`](https://github.com/stdlib-js/stdlib/commit/7ae2f22a800770e00e3de3d54649399d84f99c4d) - **feat:** add `number/float32/base/mul` _(by Gururaj Gurram)_
-   [`adbcf39`](https://github.com/stdlib-js/stdlib/commit/adbcf39b36d49a9c2876bdc2848e9dac842cf90f) - **refactor:** update paths _(by Gururaj Gurram)_
-   [`5928127`](https://github.com/stdlib-js/stdlib/commit/5928127d8f24750ec68278e6c5cd5adf1c7e95c3) - **feat:** add `number/float32/base/div` _(by Gururaj Gurram)_
-   [`6f5ff44`](https://github.com/stdlib-js/stdlib/commit/6f5ff446d16255dec7a70319ed2f71b2f546e72c) - **feat:** add `number/float32/base/add` _(by Gururaj Gurram)_
-   [`6028758`](https://github.com/stdlib-js/stdlib/commit/6028758df442105f1ac0d4240450c96cf3ad4032) - **docs:** update namespace TypeScript declaration comments [(#4758)](https://github.com/stdlib-js/stdlib/pull/4758) _(by stdlib-bot, Philipp Burckhardt)_
-   [`9aaeaaa`](https://github.com/stdlib-js/stdlib/commit/9aaeaaadf0c59b4d42e2ba7e1a6ea42a1ae2b09d) - **feat:** add C implementation for `number/float32/base/signbit` [(#3399)](https://github.com/stdlib-js/stdlib/pull/3399) _(by Neeraj Pathak, Athan Reines, stdlib-bot)_
-   [`4a70790`](https://github.com/stdlib-js/stdlib/commit/4a707903dfef7c2b56216000165706497d19a251) - **style:** add missing spaces _(by Philipp Burckhardt)_
-   [`a72a67a`](https://github.com/stdlib-js/stdlib/commit/a72a67a667bcf694e5f8f2bc3c8e62714e5832bc) - **chore:** minor clean-up _(by Philipp Burckhardt)_
-   [`b89c97c`](https://github.com/stdlib-js/stdlib/commit/b89c97ce0b812ff0b2aab16b4d77969d44fe3e8c) - **docs:** resolve lint errors in TS declaration files _(by Philipp Burckhardt)_

</details>

</section>

<!-- /.commits -->

<section class="contributors">

### Contributors

A total of 12 people contributed to this release. Thank you to the following contributors:

-   Athan Reines
-   Geo Daoyu
-   Gunj Joshi
-   Guru Prasad Sharma
-   Gururaj Gurram
-   Karan Anand
-   Lokesh Ranjan
-   Neeraj Pathak
-   Philipp Burckhardt
-   Samarth Kolarkar
-   Uday Kakade
-   Vara Rahul Rajana

</section>

<!-- /.contributors -->

</section>

<!-- /.release -->

<section class="release" id="v0.2.2">

## 0.2.2 (2024-07-28)

<section class="bug-fixes">

### Bug Fixes

-   [`ca6614a`](https://github.com/stdlib-js/stdlib/commit/ca6614abe2ae5acdcfd6eccaf49a65215f60d99e) - add missing gypfile field entries

</section>

<!-- /.bug-fixes -->

<section class="commits">

### Commits

<details>

-   [`272ae7a`](https://github.com/stdlib-js/stdlib/commit/272ae7ac5c576c68cfab1b6e304c86407faa20cd) - **docs:** remove comment _(by Athan Reines)_
-   [`2777e4b`](https://github.com/stdlib-js/stdlib/commit/2777e4be161869d09406e3b17947d24c64b47af2) - **bench:** resolve lint errors in benchmarks _(by Athan Reines)_
-   [`d04dcbd`](https://github.com/stdlib-js/stdlib/commit/d04dcbd6dc3b0bf4a89bd3947d317fa5ff15bb38) - **docs:** remove private annotations in C comments _(by Philipp Burckhardt)_
-   [`41d41e9`](https://github.com/stdlib-js/stdlib/commit/41d41e959b4eaad3c631e6898e3144a4015a5458) - **test:** include trailing newlines in Julia-generated JSON fixtures _(by Philipp Burckhardt)_
-   [`9ed7d0e`](https://github.com/stdlib-js/stdlib/commit/9ed7d0e7d57edb5ad0dfb65c944bed87d475cbf3) - **chore:** add missing trailing newlines _(by Philipp Burckhardt)_
-   [`0d3b4d0`](https://github.com/stdlib-js/stdlib/commit/0d3b4d0ceeb5eb56c80da840d3f080f98af7229b) - **chore:** remove extra spaces and lint fixes _(by Philipp Burckhardt)_
-   [`28433d6`](https://github.com/stdlib-js/stdlib/commit/28433d637a39abec34dddc51d88c59fdc7c38f3a) - **docs:** clean-up C function parameter and return annotations _(by Philipp Burckhardt)_
-   [`ca6614a`](https://github.com/stdlib-js/stdlib/commit/ca6614abe2ae5acdcfd6eccaf49a65215f60d99e) - **fix:** add missing gypfile field entries _(by Philipp Burckhardt)_

</details>

</section>

<!-- /.commits -->

<section class="contributors">

### Contributors

A total of 2 people contributed to this release. Thank you to the following contributors:

-   Athan Reines
-   Philipp Burckhardt

</section>

<!-- /.contributors -->

</section>

<!-- /.release -->

<section class="release" id="v0.2.1">

## 0.2.1 (2024-02-24)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.2.0">

## 0.2.0 (2024-02-14)

<section class="features">

### Features

-   [`2693e3b`](https://github.com/stdlib-js/stdlib/commit/2693e3b3f0382542a51fc57d78e9ab59e2dc0681) - update namespace TypeScript declarations [(#1287)](https://github.com/stdlib-js/stdlib/pull/1287)
-   [`23df479`](https://github.com/stdlib-js/stdlib/commit/23df479470a45974b8d87559cc7c9e63e3c321c0) - add `isSameValueZerof` to namespace and fix export name
-   [`5cd3de9`](https://github.com/stdlib-js/stdlib/commit/5cd3de9d141fefc57ccfe2e59cd96d2d0b75b0c4) - add `number/float32/base/assert/is-same-value-zero`
-   [`7998c12`](https://github.com/stdlib-js/stdlib/commit/7998c12dc21a5b8b0d8a349d2d130946fd36745e) - add `assert` to namespace
-   [`ecee463`](https://github.com/stdlib-js/stdlib/commit/ecee463b893c3d850ac8653ce578ec2084b79a83) - add `number/float32/base/assert`
-   [`f21f6bf`](https://github.com/stdlib-js/stdlib/commit/f21f6bf27b244b94af0053364d95286aa37dfa52) - add `number/float32/base/assert/is-same-value`

</section>

<!-- /.features -->

<section class="commits">

### Commits

<details>

-   [`2693e3b`](https://github.com/stdlib-js/stdlib/commit/2693e3b3f0382542a51fc57d78e9ab59e2dc0681) - **feat:** update namespace TypeScript declarations [(#1287)](https://github.com/stdlib-js/stdlib/pull/1287) _(by stdlib-bot, Athan Reines)_
-   [`322d1ca`](https://github.com/stdlib-js/stdlib/commit/322d1cac1bb150c548b5ad3b3086acd8e74a7bbd) - **docs:** update namespace table of contents [(#1284)](https://github.com/stdlib-js/stdlib/pull/1284) _(by stdlib-bot, Philipp Burckhardt)_
-   [`442fbfc`](https://github.com/stdlib-js/stdlib/commit/442fbfc181ef5859b67bdfad43dbe998ad07783e) - **docs:** update Markdown stdlib package URLs [(#1274)](https://github.com/stdlib-js/stdlib/pull/1274) _(by stdlib-bot)_
-   [`78512b9`](https://github.com/stdlib-js/stdlib/commit/78512b93f38716a72ab4e65f1eca52d3ff6eea77) - **docs:** update link _(by Athan Reines)_
-   [`23df479`](https://github.com/stdlib-js/stdlib/commit/23df479470a45974b8d87559cc7c9e63e3c321c0) - **feat:** add `isSameValueZerof` to namespace and fix export name _(by Athan Reines)_
-   [`5cd3de9`](https://github.com/stdlib-js/stdlib/commit/5cd3de9d141fefc57ccfe2e59cd96d2d0b75b0c4) - **feat:** add `number/float32/base/assert/is-same-value-zero` _(by Athan Reines)_
-   [`7998c12`](https://github.com/stdlib-js/stdlib/commit/7998c12dc21a5b8b0d8a349d2d130946fd36745e) - **feat:** add `assert` to namespace _(by Athan Reines)_
-   [`ecee463`](https://github.com/stdlib-js/stdlib/commit/ecee463b893c3d850ac8653ce578ec2084b79a83) - **feat:** add `number/float32/base/assert` _(by Athan Reines)_
-   [`f21f6bf`](https://github.com/stdlib-js/stdlib/commit/f21f6bf27b244b94af0053364d95286aa37dfa52) - **feat:** add `number/float32/base/assert/is-same-value` _(by Athan Reines)_
-   [`dea49e0`](https://github.com/stdlib-js/stdlib/commit/dea49e03ab5571233e3da26835a6a6d3256d5737) - **docs:** use single quotes in require calls instead of backticks _(by Philipp Burckhardt)_
-   [`f27ce09`](https://github.com/stdlib-js/stdlib/commit/f27ce0926a5e68db75d9bcaeaa0e7dd0ffaf08b9) - **docs:** update related packages sections [(#1254)](https://github.com/stdlib-js/stdlib/pull/1254) _(by stdlib-bot)_
-   [`8ef1f9e`](https://github.com/stdlib-js/stdlib/commit/8ef1f9eb45527886ba9b0c341704c8ffe6cffbb3) - **docs:** update related packages sections [(#1233)](https://github.com/stdlib-js/stdlib/pull/1233) _(by stdlib-bot)_
-   [`398a2ac`](https://github.com/stdlib-js/stdlib/commit/398a2ac65d2291cf7ea630f3a5665c6395502792) - **docs:** update related packages sections [(#1228)](https://github.com/stdlib-js/stdlib/pull/1228) _(by stdlib-bot)_
-   [`1879534`](https://github.com/stdlib-js/stdlib/commit/18795348ac0c51d3b13c1b26c0f5921ec5fd010c) - **docs:** update related packages sections [(#1179)](https://github.com/stdlib-js/stdlib/pull/1179) _(by stdlib-bot)_
-   [`78a556e`](https://github.com/stdlib-js/stdlib/commit/78a556efa2f1da29eb9081d393f5768ad1518117) - **docs:** update related packages sections [(#1145)](https://github.com/stdlib-js/stdlib/pull/1145) _(by stdlib-bot)_
-   [`9502ed2`](https://github.com/stdlib-js/stdlib/commit/9502ed27e2853e312c556a48bdd7775095e66709) - **build:** replace tslint directive with eslint equivalent _(by Philipp Burckhardt)_
-   [`9a75516`](https://github.com/stdlib-js/stdlib/commit/9a7551640d420e985f4d2c68d0f82f0ab2ecaf9e) - **docs:** fix variable declarations _(by Athan Reines)_
-   [`66c2911`](https://github.com/stdlib-js/stdlib/commit/66c29117b42d0c8d2b277f9f05b987e01dab9c5b) - **docs:** update links _(by Athan Reines)_
-   [`d73bbf4`](https://github.com/stdlib-js/stdlib/commit/d73bbf43d222f935085f8ecf7526e5f57835f74e) - **build:** replace lint directives _(by Philipp Burckhardt)_

</details>

</section>

<!-- /.commits -->

<section class="contributors">

### Contributors

A total of 2 people contributed to this release. Thank you to the following contributors:

-   Athan Reines
-   Philipp Burckhardt

</section>

<!-- /.contributors -->

</section>

<!-- /.release -->

<section class="release" id="v0.1.0">

## 0.1.0 (2023-09-24)

<section class="features">

### Features

-   [`898e8e4`](https://github.com/stdlib-js/stdlib/commit/898e8e45b2ff0b16c3b7a04786f4e2577422f5b6) - update minimum TypeScript version
-   [`73cb4ea`](https://github.com/stdlib-js/stdlib/commit/73cb4eaa7b0970afddb4153f80df32d58e71676d) - refactor declarations to use generics

</section>

<!-- /.features -->

<section class="bug-fixes">

### Bug Fixes

-   [`92caf33`](https://github.com/stdlib-js/stdlib/commit/92caf33737034f6a06ca338ffba5b0095863ab0e) - update import path for `Collection` type definition

</section>

<!-- /.bug-fixes -->

<section class="breaking-changes">

### BREAKING CHANGES

-   [`898e8e4`](https://github.com/stdlib-js/stdlib/commit/898e8e45b2ff0b16c3b7a04786f4e2577422f5b6): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

-   [`73cb4ea`](https://github.com/stdlib-js/stdlib/commit/73cb4eaa7b0970afddb4153f80df32d58e71676d): refactor declarations to use generics

</section>

<!-- /.breaking-changes -->

<section class="commits">

### Commits

<details>

-   [`898e8e4`](https://github.com/stdlib-js/stdlib/commit/898e8e45b2ff0b16c3b7a04786f4e2577422f5b6) - **feat:** update minimum TypeScript version _(by Philipp Burckhardt)_
-   [`92caf33`](https://github.com/stdlib-js/stdlib/commit/92caf33737034f6a06ca338ffba5b0095863ab0e) - **fix:** update import path for `Collection` type definition _(by Athan Reines)_
-   [`73cb4ea`](https://github.com/stdlib-js/stdlib/commit/73cb4eaa7b0970afddb4153f80df32d58e71676d) - **feat:** refactor declarations to use generics _(by Athan Reines)_
-   [`28e1c84`](https://github.com/stdlib-js/stdlib/commit/28e1c84390d88044883c9ef940a12f38d66ea3ef) - **docs:** resolve C lint errors _(by Athan Reines)_

</details>

</section>

<!-- /.commits -->

<section class="contributors">

### Contributors

A total of 2 people contributed to this release. Thank you to the following contributors:

-   Athan Reines
-   Philipp Burckhardt

</section>

<!-- /.contributors -->

</section>

<!-- /.release -->

<section class="release" id="v0.0.6">

## 0.0.6 (2022-02-16)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.0.5">

## 0.0.5 (2021-08-23)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.0.4">

## 0.0.4 (2021-07-07)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.0.3">

## 0.0.3 (2021-06-27)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.0.2">

## 0.0.2 (2021-06-16)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.0.1">

## 0.0.1 (2021-06-15)

No changes reported for this release.

</section>

<!-- /.release -->

