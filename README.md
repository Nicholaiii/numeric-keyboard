# Numeric Keyboard

[![Build Status](https://travis-ci.org/viclm/numeric-keyboard.svg?branch=master)](https://travis-ci.org/viclm/numeric-keyboard)
[![npm package](https://img.shields.io/npm/v/numeric-keyboard.svg)](https://www.npmjs.org/package/numeric-keyboard)

This is a directly pluggable Vue component for viclm/numeric-keyboard, without modifying your configurations.
This package is not complete yet. Use at your own discretion. 

![snapshot](https://raw.githubusercontent.com/viclm/numeric-keyboard/master/docs/demo.gif)

## Table of contents

- [Installation](#installation)
- [Usage](#usage)
- [Keyboard](#keyboard)
- [Configuration](#configuration)
- [License](#license)

## Installation

You can install it via npm
```shell
npm i numeric-keyboard
```

## Usage

```vue
<template>
  <div class="input">
    <label>Amount: </label>
    <NumericInput placeholder="touch to input" v-model="amount" />
  </div>
</template>

<script>
  import { NumericInput } from 'numeric-keyboard'
  export default {
    components: {
      NumericInput
    },
    data () {
      return {
        amount: ''
      }
    }
  }
</script>

```

### Configuration
Please refer to the original module for any other configuration or customisation needs.

## Contributing
Contributions are welcome. Submit issue or PR.

## License
Licensed under the MIT license.
